# 🚀 Day 21 Task 2: Deploy NGINX Pod + Service on Local Kubernetes

---

## 📦 What is Kubernetes?

**Kubernetes (K8s)** is an **open-source container orchestration platform** that automates the deployment, scaling, and management of containerized applications.

> Originally developed by Google, now maintained by the Cloud Native Computing Foundation (CNCF).

---

### 📁 Git Structure

```
Kubernetes-Monitoring/
└── nginx-k8s-deployment/
    ├── nginx-pod-service.yaml   # NGINX Deployment File
    └── README.md                # Project Documentation
```

---

### 📝 Description of Each File

| File Name                | Purpose                                      |
| ------------------------ | -------------------------------------------- |
| `nginx-pod-service.yaml` | Kubernetes manifest (Pod + NodePort Service) |
| `README.md`              | Full documentation: what, why, how, usage    |

---

## ❓ Why Use Kubernetes?

| Benefit                  | Explanation                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| 🛠 Automation             | Automates deployment, scaling, self-healing                                |
| 📦 Portability           | Works across cloud, on-prem, hybrid environments                           |
| 🚀 Speed & Efficiency     | Fast rollouts, rollbacks, and optimized resource usage                     |
| 🔐 Security              | Namespace isolation, RBAC, network policies                                |
| 🔄 Declarative Approach  | Uses YAML/JSON to describe infrastructure                                   |

---

## 🌍 Where is Kubernetes Used?

| Environment   | Use Case                                                                |
|---------------|-------------------------------------------------------------------------|
| Development   | Local testing using Minikube, kind, or Docker Desktop                   |
| QA/Staging    | Canary testing, blue-green deployments                                  |
| Production    | Running microservices, APIs, distributed workloads at scale             |
| Edge/IoT      | Kubernetes variants like K3s for lightweight edge deployments           |

---

## ⚙️ How Kubernetes Works (Components Overview)

| Component        | Role                                                                 |
|------------------|----------------------------------------------------------------------|
| **Pod**          | Smallest deployable unit (can contain one or more containers)        |
| **Service**      | Exposes pods via ClusterIP, NodePort, or LoadBalancer                |
| **Deployment**   | Manages desired pod state, scaling, rollouts                         |
| **Ingress**      | HTTP/HTTPS routing with domain-based access                          |
| **ConfigMap**    | Injects configuration into containers                                |
| **Secret**       | Securely passes sensitive data (like passwords, keys)                |
| **Scheduler**    | Decides which node runs a pod                                        |
| **Kubelet**      | Runs on each node to manage container lifecycle                      |
| **Etcd**         | Key-value store for cluster state data                               |

---

## ⏰ When to Use Kubernetes

✅ Use Kubernetes when:

- You have **microservices or containerized apps**
- You need **scalability**, **auto-healing**, and **rolling updates**
- You deploy across **cloud/on-prem** platforms
- You want **infrastructure as code**

❌ Avoid Kubernetes if:

- You have **simple monolithic apps** with no scaling or orchestration needs
- You lack the team experience or **devops maturity**
- You just need one container (Docker alone is enough)

---

## 🆚 Traditional vs Kubernetes Deployment

| Feature            | Traditional Deployment                 | Kubernetes Deployment                  |
|--------------------|-----------------------------------------|-----------------------------------------|
| Setup              | Manual provisioning (SSH, scripts)     | Declarative YAML (`kubectl apply`)      |
| Scaling            | Manual server upgrades                 | Horizontal auto-scaling                 |
| Fault Recovery     | Manual restart                         | Auto-restarts unhealthy pods            |
| Load Balancing     | External hardware/software             | Native services and ingress             |
| CI/CD Integration  | Custom scripts                         | Native support + GitOps tools           |
| Port Mapping       | Manually via firewall or nginx.conf    | NodePort / LoadBalancer services        |
| Monitoring         | Separate tooling                       | Integrated via Prometheus, Grafana      |

---

## 🔄 Kubernetes vs Other Container Orchestration Tools

| Feature / Tool     | **Kubernetes**             | Docker Swarm              | HashiCorp Nomad          | OpenShift                   |
|--------------------|----------------------------|---------------------------|--------------------------|-----------------------------|
| Maturity           | Most mature & adopted      | Simple, less feature-rich | Lightweight & flexible   | Enterprise-grade Kubernetes |
| Complexity         | High (steep learning curve)| Simple to set up          | Simpler than K8s         | Complex                     |
| Community Support  | Massive (CNCF)             | Moderate                   | Smaller                  | Backed by Red Hat           |
| Features           | Full orchestration suite   | Basic orchestration only  | Multi-workload support   | CI/CD, SSO, etc. built-in   |
| Use Case           | Enterprise & Cloud-native  | Small apps, simple setups | Flexible data workloads  | Secure, regulated industries|
| Networking         | Advanced CNI (Calico, etc) | Basic overlay             | Plugin-based             | Built-in with policies      |

---

# 🧠 Kubernetes CLI Cheat Sheet

This comprehensive cheat sheet includes essential `kubectl` and `minikube` commands categorized for clarity.

---

## 🔹 `kubectl` – Kubernetes Command-Line Tool

### 🧾 Configuration & Context

| Command                             | Description                           |
| ----------------------------------- | ------------------------------------- |
| `kubectl version`                   | Show client & server version          |
| `kubectl config view`               | View Kube config (contexts, clusters) |
| `kubectl config get-contexts`       | List available contexts               |
| `kubectl config use-context <name>` | Set current context                   |
| `kubectl cluster-info`              | Display cluster information           |

### 📋 Get & Describe Resources

| Command                              | Description                        |
| ------------------------------------ | ---------------------------------- |
| `kubectl get nodes`                  | List all cluster nodes             |
| `kubectl get pods`                   | List all pods in current namespace |
| `kubectl get all`                    | Show all resources                 |
| `kubectl get svc`                    | List all services                  |
| `kubectl get deployment`             | List all deployments               |
| `kubectl get replicaset`             | List ReplicaSets                   |
| `kubectl get namespace`              | List all namespaces                |
| `kubectl describe <resource> <name>` | Show detailed info                 |

### 📁 Namespaces

| Command                           | Description            |
| --------------------------------- | ---------------------- |
| `kubectl create namespace <name>` | Create a new namespace |
| `kubectl delete namespace <name>` | Delete a namespace     |

### 🛠️ Create, Apply, Delete Resources

| Command                       | Description                |
| ----------------------------- | -------------------------- |
| `kubectl apply -f file.yaml`  | Apply resources from YAML  |
| `kubectl delete -f file.yaml` | Delete resources from YAML |
| `kubectl create -f file.yaml` | Create resource from YAML  |

### 🔄 Managing Pods

| Command                                              | Description               |
| ---------------------------------------------------- | ------------------------- |
| `kubectl expose pod <pod> --type=NodePort --port=80` | Expose a pod as a service |
| `kubectl port-forward pod/<pod-name> 8080:80`        | Forward port to localhost |
| `kubectl logs <pod>`                                 | View container logs       |
| `kubectl exec -it <pod> -- /bin/bash`                | SSH into a running pod    |
| `kubectl delete pod <pod-name>`                      | Delete a pod              |

### ⚙️ Deployment Management

| Command                                                   | Description                     |
| --------------------------------------------------------- | ------------------------------- |
| `kubectl rollout restart deployment <name>`               | Restart deployment              |
| `kubectl rollout status deployment/<name>`                | Check deployment rollout status |
| `kubectl scale deployment <name> --replicas=3`            | Scale deployment                |
| `kubectl set image deployment/<name> <container>=<image>` | Update container image          |

### 🔍 Monitoring & Troubleshooting

| Command                       | Description                     |
| ----------------------------- | ------------------------------- |
| `kubectl top node`            | Show CPU/memory usage for nodes |
| `kubectl top pod`             | Show CPU/memory usage for pods  |
| `kubectl describe pod <name>` | Describe a specific pod         |

---

## 🔹 `minikube` – Local Kubernetes Cluster Tool

### 🚀 Cluster Lifecycle

| Command                 | Description                  |
| ----------------------- | ---------------------------- |
| `minikube start`        | Start the cluster            |
| `minikube stop`         | Stop the cluster             |
| `minikube delete`       | Delete the cluster           |
| `minikube status`       | Show current cluster status  |
| `minikube delete --all` | Delete all clusters/profiles |

### 🖥️ Dashboard & IP

| Command              | Description                     |
| -------------------- | ------------------------------- |
| `minikube dashboard` | Open dashboard in browser       |
| `minikube ip`        | Get Minikube cluster IP address |
| `minikube ssh`       | SSH into the Minikube VM        |

### 🧩 Addons

| Command                           | Description      |
| --------------------------------- | ---------------- |
| `minikube addons list`            | List all addons  |
| `minikube addons enable <addon>`  | Enable an addon  |
| `minikube addons disable <addon>` | Disable an addon |

### 🌐 Services

| Command                             | Description                          |
| ----------------------------------- | ------------------------------------ |
| `minikube service <svc>`            | Open service in browser              |
| `minikube service list`             | List URLs of services                |
| `minikube tunnel`                   | Open tunnel for LoadBalancer service |
| `minikube mount <host>:<container>` | Mount host directory to Minikube VM  |

---

## 🔗 Relationship Between `kubectl` and `minikube`

| Tool       | Role                                           |
| ---------- | ---------------------------------------------- |
| `minikube` | Creates and manages a local Kubernetes cluster |
| `kubectl`  | Interacts with the cluster created by Minikube |

🧭 **Note**: When `minikube start` is run, it automatically sets the context for `kubectl` to point to the Minikube cluster.

---
## 🚀 Let's Start: How to Deploy NGINX on Kubernetes

### 📝 Step 1: Create YAML file

```bash
nano nginx-pod-service.yaml
````

Paste this:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx-container
    image: nginx:latest
    ports:
    - containerPort: 80

---
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
  type: NodePort
```

---

### ▶️ Step 2: Deploy

```bash
kubectl apply -f nginx-pod-service.yaml
```

---

### 🔍 Step 3: Verify

```bash
kubectl get pods
kubectl get svc nginx-service
```

---

### 🌐 Step 4: Access NGINX

#### Minikube:

```bash
minikube service nginx-service
```

#### Docker Desktop / kind:

Open: `http://localhost:<NodePort>`
(Use port from `kubectl get svc` output)

---

## 🧼 Cleanup

```bash
kubectl delete -f nginx-pod-service.yaml
```

---

## ✅ Summary

| 🔧 Component | 🔍 Description                        |
| ------------ | ------------------------------------- |
| Pod          | Runs NGINX container                  |
| Service      | Exposes pod to local network          |
| NodePort     | Maps pod port to host machine port    |
| YAML         | Infrastructure as code definition     |
| Kubernetes   | Full-featured container orchestration |

---

## 📚 Learn More

* [Kubernetes Official Docs](https://kubernetes.io/docs/)
* [Minikube GitHub](https://github.com/kubernetes/minikube)
* [Nomad by HashiCorp](https://www.nomadproject.io/)
