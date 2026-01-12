kubectl create deployment nginx-depl --image=nginx

kubectl get deployment

kubectl get pod

kubectl get replicaset

kubectl edit deployment nginx-depl

#update nginx version to specific

kubectl get deployment

kubectl get pod

kubectl get pod

kubectl get replicaset






kubectl exec -it mongo-depl-[]-[] -- bin/bash
#inside that pod

kubectl delete deployment mongo-depl

kubectl delete deployment nginx-depl

kubectl get replicaset
#no resource

vim nginx-deployment.yaml
kubectl apply -f nginx-deployment.yaml

pod get
deployment

update replica to 2, again apply

kubectl apply -f nginx-deployment.yaml

get pod

kubectl apply -f nginx-service.yaml

kubectl get service

kubectl describe servcie nginx-service


echo -n 'username' | base64
echo -n 'password' | base64




kubectl apply -f mongo-secret.yaml
kubectl apply -f mongo.yaml
kubectl apply -f mongo-configmap.yaml
kubectl apply -f mongo-express.yaml





kubectl get pod
kubectl get pod --watch
kubectl get pod -o wide
kubectl get service
kubectl get secret
kubectl get all | grep mongodb





kubectl describe pod mongodb-deployment-xxxxxx
kubectl describe service mongodb-service
kubectl logs mongo-express-xxxxxx



give a URL to external service in minikube
minikube service mongo-express-service





