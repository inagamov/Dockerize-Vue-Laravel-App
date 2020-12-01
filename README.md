# Dockerize Vue & Laravel App

Everything you need to dockerize your Vue & Laravel App quickly.

&nbsp;

## Setup

### 1 Step - folders renaming.

Rename folder with Vue CLI to **frontend**

Rename folder with Laravel to **backend**

### 2 Step - copy & paste.

Place following files & folders into the main folder with your project: **etc** folder, **docker-compose.yml** file and **dockerize** folder.

Place **vue.config.js** into the **frontend** folder (with your Vue application) in order to avoid a bunch of errors.

### 3 Step - disable / enable mysql service.

If you don't need mysql service running on your server comment these lines of code at **/docker-compose.yml**

![MySQL service  at docker-compose.yml](https://i.imgur.com/hvpObID.png)

&nbsp;

## Docker launch

### To start the compilation process
`$ sudo docker-compose up`

### To stop all docker containers (run at main folder)
`$ sudo docker-compose down`

&nbsp;

## Errors fixes

Facing error like this:

    > Error starting userland proxy: listen tcp 0.0.0.0:80: bind: address already in use.

Means that you already have something running at port 80 on your server.

To solve it, change your nginx port at **/docker-compose.yml**, **line 9** (from **80:80** to **8084:80**, for example. Or any other that is not is current use on your server)

And that's it. You don't have to change anything else to solve this problem.
