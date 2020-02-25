### Socket.io nodejs server setup

cloce the repo browser to **nodesocketserver** folder

To install dependencies

```npm install``` 

To serve the app run 

```npm start```


### Socket.io ionic5 client app setup

Install socket.io client dependency

```npm install socket.io-client --save```

Only one import is needed, in your <custom> component ts file as below,

```import * as io from 'socket.io-client';```

To test the app on the same wifi/network use,

```ionic serve --external```

Grab the url with ip address, and point your external device browser to this address.



## Screenshot

![Ionic v5 Demo](https://github.com/edocbuhtig/socket.io-ionic-client-nodejs-server/blob/master/screenshot/demoscreen.png)

## Ionic Info used for this repo
```
Ionic:

   Ionic CLI : 6.1.0

Utility:

   cordova-res                          : not installed
   native-run (update available: 0.3.0) : 0.2.9

System:

   NodeJS : v12.16.0
   npm    : 6.13.7
   OS     : macOS Catalina

```
