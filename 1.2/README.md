# Exercise 1.2 - The project, step 1

## todo-app

This is a simple node web server that outputs "Server started in port xy" when it is started.

The port falls back to 8000, but is set as an environment variable PORT, that can be used to choose the port.

The server is meant to be deployed into a Kubernetes cluster.

### Docker Container

#### Build the container via
    docker build -t todo-app .

#### Run the server out of the container on fallback-port 8000
    docker container run -p 127.0.0.1:8080:8000 todo-app

#### Run the server out of the container on ports of your choice
    docker run -e PORT=wxyz -p 127.0.0.1:abcd:wxyz todo-app

## Deployment

A docker-image of the application can be found here
[hub.docker.com/r/madewe/todo-app-step1](https://hub.docker.com/r/madewe/todo-app-step1)

The deployment in a setting of k3d and k3s was successfully tested.

### creating k3s-cluster

Creating a k3s-cluster (k3s-default) with 2 agent nodes in docker:

    k3d cluster create -a 2

Confirming the existence of agent-nodes, loadbalancer-node and server-node:

    docker ps

Retrieving cluster information

    kubectl cluster-info

If the the local image should be used with k3d you have to import the image

    k3d image import todo-app

... and set the imagePullPolicy of the deployment object to IfNotPresent or Never once it is created

### deploy the application
    kubectl create deployment todo-app --image=madewe/todo-app-step1

### check the state of the deployment

    kubectl get deployments

### check the output-log of the application
    kubectl logs -f deployment/todo-app





