IMAGE_NAME=goafabric/core-fe:1.2.1-SNAPSHOT

#npm install --prefix ./docker @goafabric/core-fe@1.0.3

docker buildx create --name mybuilder --use && docker buildx build --platform linux/amd64,linux/arm64 -t $IMAGE_NAME -f ./docker/dockerfile --push . ; docker buildx stop mybuilder && docker buildx rm mybuilder
#docker build -t $IMAGE_NAME . && docker push $IMAGE_NAME

docker pull $IMAGE_NAME
#docker run --pull always --rm -p 8080:80 $IMAGE_NAME
