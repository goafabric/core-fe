IMAGE_NAME=goafabric/core-fe:1.0.0-SNAPSHOT

docker buildx create --name mybuilder --use && docker buildx build --platform linux/amd64,linux/arm64 -t $IMAGE_NAME --push . ; docker buildx stop mybuilder && docker buildx rm mybuilder
#docker build -t $IMAGE_NAME . && docker push $IMAGE_NAME
docker run --pull always --rm -p 8081:80 $IMAGE_NAME
