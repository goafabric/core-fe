docker build -t core-fe:1.0.0-SNAPSHOT .
docker run --rm -p 8081:80 core-fe:1.0.0-SNAPSHOT