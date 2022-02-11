## Description
Simple aggregator with mongodb and postgres databases

## Installation

```bash
$ npm install
```

## Running the app

#### First step create .env file from .env.example and setup all the variables 

```bash
$ docker-compose up
```

## Seeding app

```bash
$ docker exec -it [nodejs_container_id] npm run seeds 
```
