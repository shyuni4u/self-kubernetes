# [참고 kubeadm으로 단일 노드 Kubernetes 클러스터 만들기](https://medium.com/@essem_dev/kubeadm%EC%9C%BC%EB%A1%9C-%EB%8B%A8%EC%9D%BC-%EB%85%B8%EB%93%9C-kubernetes-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0-b3428ac6dbda)

---

## swap 활성화 확인

> sudo swapon --show

```
출력이 비어있으면 스왑 공간이 비활성화되어있는 상태
```

## swap 기능 비활성화

> sudo swapoff -a

## /etc/fstab swap 관련 라인 제거 (재부팅시 계속 비활성화)

> sudo nano /etc/fstab

# Install Docker CE

## root login

> sudo -i

## Set up the repository:

### Install packages to allow apt to use a repository over HTTPS

> apt-get update && apt-get install apt-transport-https ca-certificates curl software-properties-common

### Add Docker’s official GPG key

> curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

### Add Docker apt repository.

> add-apt-repository \
>  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
>  \$(lsb_release -cs) \
>  stable"

### Install Docker CE.

> apt-get update && apt-get install docker-ce

### Setup daemon.

> cat > /etc/docker/daemon.json <<EOF
> {
> "exec-opts": ["native.cgroupdriver=systemd"],
> "log-driver": "json-file",
> "log-opts": {

    "max-size": "100m"

},
"storage-driver": "overlay2"
}
EOF

> mkdir -p /etc/systemd/system/docker.service.d

### Restart docker.

> systemctl daemon-reload
> systemctl restart docker

# Install kubeadm/kubelet/kubectl

## [공식 사이트](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#installing-kubeadm-kubelet-and-kubectl)

> sudo apt-get update && sudo apt-get install -y apt-transport-https curl
> curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
> cat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list
> deb https://apt.kubernetes.io/ kubernetes-xenial main
> EOF
> sudo apt-get update
> sudo apt-get install -y kubelet kubeadm kubectl
> sudo apt-mark hold kubelet kubeadm kubectl

# Kubernetes 클러스터 생성

## Set network addon

### [설명서1](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/#pod-network)

### [설명서2](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)

> kubeadm init --pod-network-cidr=10.244.0.0/16

```
Your Kubernetes control-plane has initialized successfully!
To start using your cluster, you need to run the following as a regular user:
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/
Then you can join any number of worker nodes by running the following on each as root:
kubeadm join 10.0.2.15:6443 --token idofk0.80y0borfhelr8ch1 \
    --discovery-token-ca-cert-hash sha256:20eec08f0524de9827f3404a06c03160e8fb1d96fa5528f59ce7f6ed39ba3e43
```

#### 실패유형

```
1. swapoff가 아닌 경우
2. sudo 권한이 아닐 경우
```

## Logout root & Login <user>

> exit

## Do guide line

> mkdir -p $HOME/.kube
> sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
> sudo chown $(id -u):$(id -g) \$HOME/.kube/config

## Check PODS

> kubectl get pods --all-namespaces

## Add Flannel Network addon

> kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/2140ac876ef134e0ed5af15c65e414cf26827915/Documentation/kube-flannel.yml

## Check PODS

> kubectl get pods --all-namespaces

```
NAMESPACE     NAME                           READY   STATUS    RESTARTS   AGE
kube-system   coredns-f9fd979d6-tvvs9        1/1     Running   0          7m
kube-system   coredns-f9fd979d6-xnfsr        1/1     Running   0          7m
kube-system   etcd-kube                      1/1     Running   0          7m9s
kube-system   kube-apiserver-kube            1/1     Running   0          7m9s
kube-system   kube-controller-manager-kube   1/1     Running   0          7m9s
kube-system   kube-flannel-ds-amd64-ddbfb    1/1     Running   0          64s
kube-system   kube-proxy-dh2pj               1/1     Running   0          7m
kube-system   kube-scheduler-kube            1/1     Running   0          7m8s
```

# 단일 노드 클러스터이기 때문에 이 노드에 일반 POD도 띄울 수 있게 다음 명령어를 입력한다.

## [taint란?](https://kubernetes.io/ko/docs/concepts/scheduling-eviction/taint-and-toleration/)

> kubectl taint nodes --all node-role.kubernetes.io/master-

# Install Ingress

## [설치방법](https://kubernetes.github.io/ingress-nginx/deploy/)

> kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.40.2/deploy/static/provider/baremetal/deploy.yaml

# Deployment 확인

> kubectl get deploy --all-namespaces

```
NAMESPACE       NAME                       READY   UP-TO-DATE   AVAILABLE   AGE
ingress-nginx   ingress-nginx-controller   0/1     1            0           52s
kube-system     coredns                    2/2     2            2           34m
```

# 내용 확인 후 Deployment 수정

## [옵션 수정](https://kubernetes.github.io/ingress-nginx/deploy/baremetal/#via-the-host-network)

> kubectl edit deploy/ingress-nginx-controller -n ingress-nginx

## 수정사항 확인

> kubectl -n ingress-nginx get pod -o wide

```
NAME                                        READY   STATUS        RESTARTS   AGE     IP           NODE   NOMINATED NODE   READINESS GATES
ingress-nginx-admission-create-dp5c5        0/1     Completed     0          5h52m   10.244.0.4   kube   <none>           <none>
ingress-nginx-admission-patch-nrxxw         0/1     Completed     2          5h52m   10.244.0.5   kube   <none>           <none>
ingress-nginx-controller-785557f9c9-bxs6h   1/1     Terminating   0          5h52m   10.244.0.6   kube   <none>           <none>
ingress-nginx-controller-96588fb84-jcn9j    1/1     Running       0          14s     10.0.2.4     kube   <none>           <none>
```

# [Dashboard 설치](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/#deploying-the-dashboard-ui)

> kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml

# [Create Sample User for Dashboard](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)

---

## Creating a Service Account

> cat <<EOF | kubectl apply -f -
> apiVersion: v1
> kind: ServiceAccount
> metadata:
> name: admin-user
> namespace: kubernetes-dashboard
> EOF

```
serviceaccount/admin-user created
```

## Creating a ClusterRoleBinding

> cat <<EOF | kubectl apply -f -
> apiVersion: rbac.authorization.k8s.io/v1
> kind: ClusterRoleBinding
> metadata:
> name: admin-user
> roleRef:
> apiGroup: rbac.authorization.k8s.io
> kind: ClusterRole
> name: cluster-admin
> subjects:

- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
  EOF

```
clusterrolebinding.rbac.authorization.k8s.io/admin-user created
```

## Getting a Bearer Token

> kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}')

```
Name:         admin-user-token-jql6l
Namespace:    kubernetes-dashboard
Labels:       <none>
Annotations:  kubernetes.io/service-account.name: admin-user
              kubernetes.io/service-account.uid: b6618c53-3257-4fe6-ab81-12a4f98d6f76

Type:  kubernetes.io/service-account-token

Data
====
ca.crt:     1066 bytes
namespace:  20 bytes
token:      eyJhbGciOiJSUzI1NiIsImtpZCI6InpJTDBxSWZ1T1YzQS1zLTFrLXFqN1N5eVNFdkNSSXBTcWtScmg0N3B4cTAifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLWpxbDZsIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiJiNjYxOGM1My0zMjU3LTRmZTYtYWI4MS0xMmE0Zjk4ZDZmNzYiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.px12prGtPFsksSGoZ0U9wT7ALEeJB8xySI0TYt95UiDtiTTou2wo8tuLKOlzKPLoHhSJnETnDhbI69rL6s0yXA8VssogQ907ekvuCyWE04s67aKduz9sYK8pAAOn6z7n0ylps1GFlRWHWdXd4B1juA7JbvJmIQgIJEdh3_BSNczBRSX-LV5fNFGEviD7aTcG5g4CRQrRxBEr4eh_LMGeykOuboCrPBmwLkdEyyFaaufn_cL8EMJfBI_7Xks-8MX28-dgmD6ZvQzEBc8bm5FUv_p4S4F8ONBChNKvdrzNzWil0cw-ncgN3PiR6CLZWBYEx00rPgwGEEY_m4_1LK532Q
```

## Check Dashboard

> kubectl proxy --port=8080

# Exploring the Kubernetes API

---

> curl http://localhost:8080/api/

```
{
  "kind": "APIVersions",
  "versions": [
    "v1"
  ],
  "serverAddressByClientCIDRs": [
    {
      "clientCIDR": "0.0.0.0/0",
      "serverAddress": "10.0.2.4:6443"
    }
  ]
}
```

> curl http://localhost:8080/api/v1/namespaces/default/pods

```
{
  "kind": "PodList",
  "apiVersion": "v1",
  "metadata": {
    "selfLink": "/api/v1/namespaces/default/pods",
    "resourceVersion": "68000"
  },
  "items": []
}
```

> curl http://localhost:8080/api/v1/namespaces/ingress-nginx/pods

```
{
  "kind": "PodList",
  "apiVersion": "v1",
  "metadata": {
    "selfLink": "/api/v1/namespaces/ingress-nginx/pods",
    "resourceVersion": "68425"
  },
  "items": [
    {
      "metadata": {
        "name": "ingress-nginx-admission-create-dp5c5",
        "generateName": "ingress-nginx-admission-create-",
        "namespace": "ingress-nginx",
        "selfLink": "/api/v1/namespaces/ingress-nginx/pods/ingress-nginx-admission-create-dp5c5",
        "uid": "c1f72af8-feeb-4d05-aec0-68863e4d34ce",
        "resourceVersion": "4945",
        "creationTimestamp": "2020-10-26T02:45:43Z",
        "labels": {
          "app.kubernetes.io/component": "admission-webhook",
          "app.kubernetes.io/instance": "ingress-nginx",
          "app.kubernetes.io/managed-by": "Helm",
          "app.kubernetes.io/name": "ingress-nginx",
          "app.kubernetes.io/version": "0.40.2",
          "controller-uid": "096792a8-f50b-4c1e-984d-0d9c1e06480f",
          "helm.sh/chart": "ingress-nginx-3.4.1",
          "job-name": "ingress-nginx-admission-create"
        },
        "ownerReferences": [
          {
            "apiVersion": "batch/v1",
            "kind": "Job",
            "name": "ingress-nginx-admission-create",
            "uid": "096792a8-f50b-4c1e-984d-0d9c1e06480f",
            "controller": true,
            "blockOwnerDeletion": true
          }
        ],
        "managedFields": [
          {
            "manager": "kube-controller-manager",
            "operation": "Update",
            "apiVersion": "v1",
            "time": "2020-10-26T02:45:43Z",
            "fieldsType": "FieldsV1",
            "fieldsV1": {"f:metadata":{"f:generateName":{},"f:labels":{".":{},"f:app.kubernetes.io/component":{},"f:app.kubernetes.io/instance":{},"f:app.kubernetes.io/managed-by":{},"f:app.kubernetes.io/name":{},"f:app.kubernetes.io/version":{},"f:controller-uid":{},"f:helm.sh/chart":{},"f:job-name":{}},"f:ownerReferences":{".":{},"k:{\"uid\":\"096792a8-f50b-4c1e-984d-0d9c1e06480f\"}":{".":{},"f:apiVersion":{},"f:blockOwnerDeletion":{},"f:controller":{},"f:kind":{},"f:name":{},"f:uid":{}}}},"f:spec":{"f:containers":{"k:{\"name\":\"create\"}":{".":{},"f:args":{},"f:env":{".":{},"k:{\"name\":\"POD_NAMESPACE\"}":{".":{},"f:name":{},"f:valueFrom":{".":{},"f:fieldRef":{".":{},"f:apiVersion":{},"f:fieldPath":{}}}}},"f:image":{},"f:imagePullPolicy":{},"f:name":{},"f:resources":{},"f:terminationMessagePath":{},"f:terminationMessagePolicy":{}}},"f:dnsPolicy":{},"f:enableServiceLinks":{},"f:restartPolicy":{},"f:schedulerName":{},"f:securityContext":{".":{},"f:runAsNonRoot":{},"f:runAsUser":{}},"f:serviceAccount":{},"f:serviceAccountName":{},"f:terminationGracePeriodSeconds":{}}}
          },
          {
            "manager": "kubelet",
            "operation": "Update",
            "apiVersion": "v1",
            "time": "2020-10-26T02:45:58Z",
            "fieldsType": "FieldsV1",
            "fieldsV1": {"f:status":{"f:conditions":{"k:{\"type\":\"ContainersReady\"}":{".":{},"f:lastProbeTime":{},"f:lastTransitionTime":{},"f:reason":{},"f:status":{},"f:type":{}},"k:{\"type\":\"Initialized\"}":{".":{},"f:lastProbeTime":{},"f:lastTransitionTime":{},"f:reason":{},"f:status":{},"f:type":{}},"k:{\"type\":\"Ready\"}":{".":{},"f:lastProbeTime":{},"f:lastTransitionTime":{},"f:reason":{},"f:status":{},"f:type":{}}},"f:containerStatuses":{},"f:hostIP":{},"f:phase":{},"f:podIP":{},"f:podIPs":{".":{},"k:{\"ip\":\"10.244.0.4\"}":{".":{},"f:ip":{}}},"f:startTime":{}}}
          }
        ]
      },
      "spec": {
        "volumes": [
          {
            "name": "ingress-nginx-admission-token-dv8h6",
            "secret": {
              "secretName": "ingress-nginx-admission-token-dv8h6",
              "defaultMode": 420
            }
          }
        ],
        "containers": [
          {
            "name": "create",
            "image": "docker.io/jettech/kube-webhook-certgen:v1.3.0",
            "args": [
              "create",
              "--host=ingress-nginx-controller-admission,ingress-nginx-controller-admission.$(POD_NAMESPACE).svc",
              "--namespace=$(POD_NAMESPACE)",
              "--secret-name=ingress-nginx-admission"
            ],
            "env": [
              {
                "name": "POD_NAMESPACE",
                "valueFrom": {
                  "fieldRef": {
                    "apiVersion": "v1",
                    "fieldPath": "metadata.namespace"
                  }
                }
              }
            ],
            "resources": {

            },
            "volumeMounts": [
              {
                "name": "ingress-nginx-admission-token-dv8h6",
                "readOnly": true,
                "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
              }
            ],
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "imagePullPolicy": "IfNotPresent"
          }
        ],
        "restartPolicy": "OnFailure",
        "terminationGracePeriodSeconds": 30,
        "dnsPolicy": "ClusterFirst",
        "serviceAccountName": "ingress-nginx-admission",
        "serviceAccount": "ingress-nginx-admission",
        "nodeName": "kube",
        "securityContext": {
          "runAsUser": 2000,
          "runAsNonRoot": true
        },
        "schedulerName": "default-scheduler",
        "tolerations": [
          {
            "key": "node.kubernetes.io/not-ready",
            "operator": "Exists",
            "effect": "NoExecute",
            "tolerationSeconds": 300
          },
          {
            "key": "node.kubernetes.io/unreachable",
            "operator": "Exists",
            "effect": "NoExecute",
            "tolerationSeconds": 300
          }
        ],
        "priority": 0,
        "enableServiceLinks": true,
        "preemptionPolicy": "PreemptLowerPriority"
      },
      "status": {
        "phase": "Succeeded",
        "conditions": [
          {
            "type": "Initialized",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2020-10-26T02:45:43Z",
            "reason": "PodCompleted"
          },
          {
            "type": "Ready",
            "status": "False",
            "lastProbeTime": null,
            "lastTransitionTime": "2020-10-26T02:45:43Z",
            "reason": "PodCompleted"
          },
          {
            "type": "ContainersReady",
            "status": "False",
            "lastProbeTime": null,
            "lastTransitionTime": "2020-10-26T02:45:43Z",
            "reason": "PodCompleted"
          },
          {
            "type": "PodScheduled",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2020-10-26T02:45:43Z"
          }
        ],
        "hostIP": "10.0.2.4",
        "podIP": "10.244.0.4",
        "podIPs": [
          {
            "ip": "10.244.0.4"
          }
        ],
        "startTime": "2020-10-26T02:45:43Z",
        "containerStatuses": [
          {
            "name": "create",
            "state": {
              "terminated": {
                "exitCode": 0,
                "reason": "Completed",
                "startedAt": "2020-10-26T02:45:57Z",
                "finishedAt": "2020-10-26T02:45:57Z",
                "containerID": "docker://3f072931bcc2f51fa17d1fb68f1a90e5614759b26a3216a6b7655aad82c4a338"
              }
            },
            "lastState": {

            },
            "ready": false,
            "restartCount": 0,
            "image": "jettech/kube-webhook-certgen:v1.3.0",
            "imageID": "docker-pullable://jettech/kube-webhook-certgen@sha256:ff01fba91131ed260df3f3793009efbf9686f5a5ce78a85f81c386a4403f7689",
            "containerID": "docker://3f072931bcc2f51fa17d1fb68f1a90e5614759b26a3216a6b7655aad82c4a338",
            "started": false
          }
        ],
        "qosClass": "BestEffort"
      }
    },
    ...
  ]
}
```

# In Browser (visual studio에서 복사 붙여넣기 할 경우 우측 하단에 브라우저에서 열기가 뜸. 그걸 선택하면 확실히 보임.)

http://127.0.0.1:8080/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/

# 노드 상태 보기

kubectl describe node <node-name-ex_kube>

```
Name:               kube
Roles:              master
Labels:             beta.kubernetes.io/arch=amd64
                    beta.kubernetes.io/os=linux
                    kubernetes.io/arch=amd64
                    kubernetes.io/hostname=kube
                    kubernetes.io/os=linux
                    node-role.kubernetes.io/master=
Annotations:        flannel.alpha.coreos.com/backend-data: {"VtepMAC":"fe:74:dd:a4:fd:9d"}
                    flannel.alpha.coreos.com/backend-type: vxlan
                    flannel.alpha.coreos.com/kube-subnet-manager: true
                    flannel.alpha.coreos.com/public-ip: 10.0.2.4
                    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock
                    node.alpha.kubernetes.io/ttl: 0
                    volumes.kubernetes.io/controller-managed-attach-detach: true
CreationTimestamp:  Mon, 26 Oct 2020 02:12:15 +0000
Taints:             <none>
Unschedulable:      false
Lease:
  HolderIdentity:  kube
  AcquireTime:     <unset>
  RenewTime:       Mon, 26 Oct 2020 08:04:31 +0000
Conditions:
  Type             Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----             ------  -----------------                 ------------------                ------                       -------
  MemoryPressure   False   Mon, 26 Oct 2020 08:01:17 +0000   Mon, 26 Oct 2020 02:12:13 +0000   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure     False   Mon, 26 Oct 2020 08:01:17 +0000   Mon, 26 Oct 2020 02:12:13 +0000   KubeletHasNoDiskPressure     kubelet has no disk pressure
  PIDPressure      False   Mon, 26 Oct 2020 08:01:17 +0000   Mon, 26 Oct 2020 02:12:13 +0000   KubeletHasSufficientPID      kubelet has sufficient PID available
  Ready            True    Mon, 26 Oct 2020 08:01:17 +0000   Mon, 26 Oct 2020 02:18:51 +0000   KubeletReady                 kubelet is posting ready status. AppArmor enabled
Addresses:
  InternalIP:  10.0.2.4
  Hostname:    kube
Capacity:
  cpu:                4
  ephemeral-storage:  19475088Ki
  hugepages-2Mi:      0
  memory:             2034852Ki
  pods:               110
Allocatable:
  cpu:                4
  ephemeral-storage:  17948241072
  hugepages-2Mi:      0
  memory:             1932452Ki
  pods:               110
System Info:
  Machine ID:                 096835e0c204471cb75a937d1fd3dcbf
  System UUID:                0001b36c-ff65-9341-9074-9fab42aeb93a
  Boot ID:                    c5941d10-4213-4a57-b9fd-57b5510ffedf
  Kernel Version:             5.4.0-52-generic
  OS Image:                   Ubuntu 20.04.1 LTS
  Operating System:           linux
  Architecture:               amd64
  Container Runtime Version:  docker://19.3.13
  Kubelet Version:            v1.19.3
  Kube-Proxy Version:         v1.19.3
PodCIDR:                      10.244.0.0/24
PodCIDRs:                     10.244.0.0/24
Non-terminated Pods:          (9 in total)
  Namespace                   Name                                         CPU Requests  CPU Limits  Memory Requests  Memory Limits  AGE
  ---------                   ----                                         ------------  ----------  ---------------  -------------  ---
  ingress-nginx               ingress-nginx-controller-785557f9c9-bxs6h    100m (2%)     0 (0%)      90Mi (4%)        0 (0%)         5h18m
  kube-system                 coredns-f9fd979d6-tvvs9                      100m (2%)     0 (0%)      70Mi (3%)        170Mi (9%)     5h52m
  kube-system                 coredns-f9fd979d6-xnfsr                      100m (2%)     0 (0%)      70Mi (3%)        170Mi (9%)     5h52m
  kube-system                 etcd-kube                                    0 (0%)        0 (0%)      0 (0%)           0 (0%)         5h52m
  kube-system                 kube-apiserver-kube                          250m (6%)     0 (0%)      0 (0%)           0 (0%)         5h52m
  kube-system                 kube-controller-manager-kube                 200m (5%)     0 (0%)      0 (0%)           0 (0%)         5h52m
  kube-system                 kube-flannel-ds-amd64-ddbfb                  100m (2%)     100m (2%)   50Mi (2%)        50Mi (2%)      5h46m
  kube-system                 kube-proxy-dh2pj                             0 (0%)        0 (0%)      0 (0%)           0 (0%)         5h52m
  kube-system                 kube-scheduler-kube                          100m (2%)     0 (0%)      0 (0%)           0 (0%)         5h52m
Allocated resources:
  (Total limits may be over 100 percent, i.e., overcommitted.)
  Resource           Requests     Limits
  --------           --------     ------
  cpu                950m (23%)   100m (2%)
  memory             280Mi (14%)  390Mi (20%)
  ephemeral-storage  0 (0%)       0 (0%)
  hugepages-2Mi      0 (0%)       0 (0%)
Events:              <none>
```
