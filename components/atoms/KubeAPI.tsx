import axios from 'axios';
import auth from '../../.env/auth.json'

const token = auth.token;

export default axios.create({
  // baseURL: 'http://localhost:9999',
  baseURL: 'https://10.96.8.208:6443',
  headers: {
    Authorization: `Bearer ${token}`
  }
})


// APISERVER=$(kubectl config view | grep server | cut -f 2- -d ":" | tr -d " ")
// TOKEN=$(kubectl describe secret $(kubectl get secrets | grep default | cut -f1 -d ' ') | grep -E '^token' | cut -f2 -d':' | tr -d '\t')
// curl https://10.96.8.208:6443/api --header "Authorization: Bearer $TOKEN" --insecure
// curl https://10.96.8.208:6443/api --header "Authorization: Bearer $TOKEN" --insecure
// curl http://10.96.8.208:9999/api --header "Authorization: Bearer $TOKEN"
// curl http://localhost:8080/api --header "Authorization: Bearer $TOKEN"
// curl http://localhost:9999/api --header "Authorization: Bearer $TOKEN"
// sudo nano /etc/kubernetes/manifests/kube-apiserver.yaml
// TOKEN=eyJhbGciOiJSUzI1NiIsImtpZCI6Il9XMGgwbC13eW1GaEZnU2RSa2hvT2R4N2JWVHdhdWljS3JGSUEwUVVreDAifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tcTVoYjUiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjQ2ZGNmNDZmLTQ0MjYtNDc5Mi05YTA1LThiMjlhZGVlMzVlZSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.kfuv1pk-GJ4Ihp2Ypf72c4vxDEMBjXHY1A8FoV-3n2PB_7WmVp6kNB91lSrDACVvsUsWCkeOAIpww1NoGt9X_bb2KbP58DH9m6csJcQZ4ekbjN1UEdBTHbz7h2Zxq57oEl7mJsLMIlqbG0r3F37CFTd-ScajrvSpsRXwxorjfo-9UZXdWVZuc-SY8Ju7Z9CquPPU0IGFZfyN_oxyfnoAc1Mcg4VrWNkgGVfmOO9SkKzKHTns21ZLX-JABCA6tktkFJG8v0adSNR_SfaxJQ2x6dN8XWMRJS1fynFCt8vVmuHOB4tBsdju09flmajWB9gAVniZJDz-GToGn5XopIoMEQ
// TOKEN=0b1047.d25ea642dcca593f