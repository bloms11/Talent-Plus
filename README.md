

## Installation

Use the command line to install dependencies.

```bash
npm i
```

## Run
This project was built using vite. Run thee command below to run the app.
```bash
npm run dev
```




## Docker

create a .dockerignore file  in the root folder and add the following lines

```
node_modules
Dockerfile
.git
```

## Build Image
run the line of code below to build a docker image for the project, where containername could be any name you want to give the image

```
docker build -t containername .
```

## Run Docker App
```
docker run -p 8080:8080 -d containername 
```

Once successful open http://localhost:8080
