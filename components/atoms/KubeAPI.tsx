import axios from 'axios';
import auth from '../../.env/auth.json'

const token = auth.token;

export default axios.create({
  baseURL: 'http://localhost:8080',
  // baseURL: 'https://localhost:6443',
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
})


// APISERVER=$(kubectl config view | grep server | cut -f 2- -d ":" | tr -d " ")
// TOKEN=$(kubectl describe secret $(kubectl get secrets | grep default | cut -f1 -d ' ') | grep -E '^token' | cut -f2 -d':' | tr -d '\t')
// curl https://10.96.8.205:6443/api --header "Authorization: Bearer $TOKEN" --insecure
// curl https://10.96.8.205:6443/api --header "Authorization: Bearer $TOKEN" --insecure
// curl http://10.96.8.205:9999/api --header "Authorization: Bearer $TOKEN"
// curl http://localhost:8080/api --header "Authorization: Bearer $TOKEN"
// curl https://10.96.0.1:443/api --header "Authorization: Bearer $TOKEN"
// sudo nano /etc/kubernetes/manifests/kube-apiserver.yaml
// TOKEN=eyJhbGciOiJSUzI1NiIsImtpZCI6InBmUnlWUG91Y1JEYVRJS2ZzNWdpT2ZGemMxM2NWQ3o3eEQxWmR6c2M5cFkifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJhcGktdGVzdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLTZuYmQyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiJiMzllNzMzZC01OWM5LTQwMDYtYWVmYi1hMDI4YmI4ODU5YTEiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6YXBpLXRlc3Q6YWRtaW4tdXNlciJ9.kjK8GbGNLtLaPGNzANrONYHEyG3nLHNqZBpZruqBUsy6EsgY3z1_D203LFZWxrpU-hgS3Dsv-ubvFRZcNiRurwR0eKK8VCBQmAuQsVkE8nThahKpWmn7cPYU6TuJN3WQ2Z37jn0hf14n63E2dJE4td8pgLhJyI_umumijrPVdoMX5iV9k4Dak120fZEamMk16gS439IfZSLo6e_-9xwtFSgWR5b7Mud3-HGqB2hv74zSLighiAx-IdX7JYAiopLF5RNNIeQgoiRkeBp-08PiCOlTjHKFMcWxW4Zv43IxNH08Zbr3ldEuUZOHmEHM7zg_qDj2xQVqs1dRouHZ9OPKhA
// TOKEN=0b1047.d25ea642dcca593f