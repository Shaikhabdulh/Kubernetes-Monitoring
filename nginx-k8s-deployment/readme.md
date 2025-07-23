## 📄 nginx-pod-service.yaml

This YAML file defines a **Kubernetes Service** for exposing an NGINX Pod. It's a critical step for making your NGINX web server accessible within or outside your Kubernetes cluster.

---

## 🧠 What is NGINX?

**NGINX** is a **high-performance web server**, **reverse proxy**, **load balancer**, and **HTTP cache** used to serve static content and distribute traffic efficiently.

---

## 🔍 Why Use NGINX?

* ✅ Lightweight & fast
* ✅ Handles high concurrent requests
* ✅ Acts as a reverse proxy for microservices
* ✅ Supports TLS, GZIP, caching, and more

---

## 📍 Where is NGINX Used?

* Hosting static websites
* As a reverse proxy to backends (like Node.js, Python, etc.)
* Load balancing between multiple application servers
* API gateways in Kubernetes

---

## 📅 When to Use NGINX in Kubernetes?

* To expose a Pod as a web server (e.g., for internal use or testing)
* When simulating traffic handling/load balancing
* For custom ingress-style configurations in dev environments

---

## ⚙️ How nginx-pod-service.yaml Works?

This YAML is used **after** deploying the NGINX Pod. It:

* Creates a **ClusterIP service** (by default) or another type like NodePort/LoadBalancer
* Maps traffic from the Service to the NGINX Pod on port 80

---
## 📁 Project Structure
```
nginx-k8s-deployment/
├── README.md                  # Detailed info about NGINX and service setup
├── nginx-pod-service.yaml     # YAML to expose NGINX pod using a service
└── nginx-pod.yaml             # (Optional) Defines the NGINX pod itself
```
---

## 📝 Example `nginx-pod-service.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP  # Can change to NodePort or LoadBalancer as needed
```

---

## 🧪 Usage Steps

```bash
# 1. Create NGINX pod
kubectl run nginx --image=nginx --labels="app=nginx"

# 2. Apply service
kubectl apply -f nginx-pod-service.yaml

# 3. Verify service
kubectl get svc

# 4. (Optional) Expose externally
kubectl expose pod nginx --type=NodePort --port=80
```

---

## 🔗 Related Files

| File Name                | Description                                |
| ------------------------ | ------------------------------------------ |
| `nginx-pod-service.yaml` | Creates a Kubernetes service for NGINX pod |
| `nginx-k8s-deployment/`  | (Assumed) Contains full deployment specs   |

---
