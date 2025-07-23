# 🎮 Tic Tac Toe - Bash-based Game on Minikube

This project shows how to deploy and run a **custom interactive Bash-based Tic Tac Toe game** inside a **Minikube Kubernetes cluster**, using a **public Docker Hub image**.

---

## 📁 Project Structure

```
interactive-bash-game-on-minikube/
├── README.md               # You're here
└── tic-tac-toe.yaml        # Kubernetes Pod definition
```

---

## ❓ What is this?

An interactive **Tic Tac Toe** game written in **Bash**, containerized with Docker, and deployed to **Minikube**, a local Kubernetes environment.

---

## 💡 Why use this setup?

* ✅ Learn how to run interactive CLI apps in Kubernetes
* ✅ Understand Docker image usage from Docker Hub in Minikube
* ✅ Explore `kubectl run`, `attach`, and terminal-based Pods

---

## 🌍 Where is it hosted?

* Docker Hub (Image): [sah1/shaikh\_abdulhamid\:tic\_tac\_toe](https://hub.docker.com/r/sah1/shaikh_abdulhamid/general)
* Kubernetes Cluster: **Minikube** (local machine)

---

## 📆 When to use this?

*  For learning containerization and Kubernetes basics
*  For experimenting with interactive terminal applications in Pods
*  For showcasing Bash scripting and Docker skills

---

## ⚙️ How to Deploy & Play

### 1️⃣ Start Minikube

```bash
minikube start
```

### 2️⃣ Create Pod with YAML

Create a file named `tic-tac-toe.yaml`:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: tic-tac-toe
spec:
  containers:
  - name: game
    image: sah1/shaikh_abdulhamid:tic_tac_toe
    stdin: true
    tty: true
  restartPolicy: Never
```

Apply the YAML manifest:

```bash
kubectl apply -f tic-tac-toe.yaml
```

### 3️⃣ Attach to the Pod (Play the Game)

```bash
kubectl attach -it tic-tac-toe
```
### 4️⃣ Exit & Re-run if Needed

If you want to replay the game, you need to delete the existing Pod and recreate it. Here's why:

* The Pod was created with `restartPolicy: Never`, meaning it does not restart after exiting.
* Once a Pod has completed or been terminated, Kubernetes doesn't reuse it.

So, to replay:

```bash
kubectl delete pod tic-tac-toe
kubectl apply -f tic-tac-toe.yaml
kubectl attach -it tic-tac-toe
```
---

## 🧪 Verifying It Works

```bash
kubectl get pods
kubectl describe pod tic-tac-toe
```

Look for the Pod status to be `Running` before attaching.

---

## 📌 Notes

* This is **not a web app** — it's a **terminal game**, so no need for a Service or port.
* Minikube acts like a local cluster to simulate real Kubernetes environments.
* `restartPolicy: Never` ensures it doesn’t auto-restart (ideal for single-run games).

---

## 🙋‍♂️ Author

**Shaikh AbdulHamid Mohammad Hanif**
Docker Hub: [sah1](https://hub.docker.com/u/sah1)

---
