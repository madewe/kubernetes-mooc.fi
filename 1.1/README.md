# Exercise 1.1 - Log-output app

This application generates a random string on startup and outputs it every 5 seconds with a timestamp.

## Deployment

A docker-image of the application can be found on
[hub.docker.com/r/madewe/log-output](https://hub.docker.com/r/madewe/log-output)

The deployment was successfully tested within a setting of k3d and k3s using the following commands:

    - k3d cluster create -a 2

    - kubectl create deployment log-output --image=madewe/log-output:latest

The logs can be witnessed via

    - kubectl logs -f deployment/log-output