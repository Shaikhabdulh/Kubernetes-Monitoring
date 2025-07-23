## 🎮 Tic-Tac-Toe Web App (Kubernetes + Ingress + Sound FX)

### 📌 What is this?

A fully containerized **Tic-Tac-Toe game** built using HTML/CSS/JavaScript with embedded **sound effects**, deployed to **Kubernetes** using:

* Docker
* Kubernetes (Deployment + Service + Ingress)
* Minikube (local cluster)

---

### ❓ Why was this created?

To demonstrate:

* Building web games with interactive UI & sounds
* Dockerizing a frontend-only app
* Exposing services using Kubernetes Ingress
* Hosting web content using a full CI/CD-compatible stack

---

### 📁 Folder Structure

```bash
tic-tac-toe-web/
├── k8s/                      # Kubernetes YAML manifests
│   ├── ingress.yaml          # Ingress to expose app via domain
│   ├── tic-tac-toe-deploy.yaml  # Deployment for the game pod
│   └── tic-tac-toe-service.yaml # Service to expose pod internally
├── sounds/                   # Sound effects used during gameplay
│   ├── click.mp3
│   ├── draw.mp3
│   ├── reset.mp3
│   └── win.mp3
├── index.html                # Game HTML
├── script.js                 # Game logic (JS)
├── style.css                 # UI Styling
├── Dockerfile                # Docker build file
└── README.md
```

---

### 🌍 Where does it run?

* **Locally** on your system using `Minikube`
* Accessible via domain: `http://tic-tac-toe.local` through Ingress
* Browser-based — no backend required

---

### ⏳ When should you use this?

* To learn Kubernetes basics (Pod, Service, Ingress)
* As a portfolio project
* For demoing local Ingress/TLS setup
* As a fun DevOps+Web integration lab

---

### ⚙️ How to Deploy

#### 1. Start Minikube

```bash
minikube start
minikube addons enable ingress
minikube tunnel
```

#### 2. Build and Load Docker Image

```bash
eval $(minikube docker-env)
docker build -t tic-tac-toe-web .
```

#### 3. Apply Kubernetes Manifests

```bash
kubectl apply -f k8s/tic-tac-toe-deploy.yaml
kubectl apply -f k8s/tic-tac-toe-service.yaml
kubectl apply -f k8s/ingress.yaml
```

#### 4. Add Host Entry

Update `/etc/hosts` with:

```
<your-minikube-ip> tic-tac-toe.local
```

Get Minikube IP using:

```bash
minikube ip
```

#### 5. Open in Browser

```
http://tic-tac-toe.local
```

---

### 🎯 Features

* 1v1 Tic-Tac-Toe gameplay
* Click, win, draw, reset sounds
* Clean UI + responsive CSS
* Easily extendable to multiplayer or AI-based mode

---

### ✅ Outcomes

By completing this project, you will:

* Understand Docker + Kubernetes workflow
* Know how to use Ingress to expose services
* Deploy static web content with sound effects
* Practice real-world DevOps/Web app deployment
