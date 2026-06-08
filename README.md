# 🚀 DevOps Platform

A simple DevOps project demonstrating the complete application deployment lifecycle using Docker, Kubernetes, Helm, GitHub, and Docker Hub.

## 📌 Project Overview

This project showcases how a Node.js application can be:

- Developed locally
- Containerized using Docker
- Published to Docker Hub
- Deployed on Kubernetes
- Managed using Helm charts
- Version controlled with Git and GitHub

The goal of this project is to gain hands-on experience with modern DevOps tools and container orchestration.

---

## 🏗️ Architecture

Node.js Application
↓
Docker Container
↓
Docker Hub
↓
Kubernetes (k3d)
↓
Helm Deployment

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| Node.js | Backend Application |
| Docker | Containerization |
| Docker Hub | Image Registry |
| Kubernetes (k3d) | Container Orchestration |
| Helm | Kubernetes Package Management |
| Git | Version Control |
| GitHub | Source Code Management |
| Colima | Docker Runtime on macOS |

---

## 📂 Project Structure

```text
devops-platform/
│
├── app/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
├── helm/
│   └── devops-platform/
│
├── .github/
│
└── README.md
```

---

## 🚀 Running the Application

### Install Dependencies

```bash
npm install
```

### Start Application

```bash
node server.js
```

Application runs on:

```text
http://localhost:3000
```

---

## 🐳 Docker

### Build Docker Image

```bash
docker build -t devops-platform:v1 .
```

### Run Container

```bash
docker run -d -p 3000:3000 --name devops-app devops-platform:v1
```

### Verify Container

```bash
docker ps
```

---

## 📦 Docker Hub

Docker image published to:

https://hub.docker.com/r/sachinjaat4345/devops-platform

Push image:

```bash
docker push sachinjaat4345/devops-platform:v1
```

---

## ☸️ Kubernetes Deployment

Deploy resources:

```bash
kubectl apply -f k8s/
```

Check pods:

```bash
kubectl get pods
```

Check services:

```bash
kubectl get svc
```

---

## ⛵ Helm Deployment

Install Helm chart:

```bash
helm install devops-platform helm/devops-platform
```

List releases:

```bash
helm list
```

Upgrade release:

```bash
helm upgrade devops-platform helm/devops-platform
```

---

## 📊 Features

- Containerized Node.js application
- Docker image publishing
- Kubernetes deployment
- LoadBalancer service configuration
- Helm chart packaging
- GitHub version control
- Local Kubernetes cluster using k3d

---

## 📸 Project Screenshots

Add screenshots of:

- Docker container running
- Docker Hub image repository
- Kubernetes pods
- Kubernetes services
- Helm installation
- GitHub repository

---

## 🎯 Learning Outcomes

Through this project, I learned:

- Docker image creation and management
- Container orchestration using Kubernetes
- Kubernetes Deployments and Services
- Helm chart creation and deployment
- Git and GitHub workflows
- Local Kubernetes setup using k3d
- DevOps deployment fundamentals

---

## 👨‍💻 Author

Sachin

GitHub:
https://github.com/sachin434543

Docker Hub:
https://hub.docker.com/u/sachinjaat4345