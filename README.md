# QA Automation Workshop GraphQL API
This is a GraphQL API based on Projects, Todos and Comments designed for Wizeline's QA Automation Workshop

## Requirements
- Docker
- Docker Compose

## Setup locally
- Clone this repository
- Get a ngrok auth token
	- Login or sign up to ngrok.com
	- Go to `Auth` section
	- Copy your Tunnel Authtoken
- Copy file `ngrok.conf.example` and name it `ngrok.conf`
- Open the file and change the value of `authtoken` to your ngrok Tunnel Authtoken
- From the root folder run the following command
```
$ docker-compose up
```
- Wait for the message: `Server ready at http://localhost:8000`
- Open your preferred browser and go to `http://localhost:4040`
- If it's the first time you open this URL you can see the public URL for the GraphQL API
- If you see ngrok panel instead go to `Status` section and you should find the public URL there