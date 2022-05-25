# Demode backend

<img src="https://user-images.githubusercontent.com/51771490/167482970-f9fbc5b8-2877-4c5e-bade-6f5fdafa4603.png" height="240px" />

Demodé is a Peruvian rock band that seeks to be a reference in terms of music at national and international level reaching the ears and hearts of their audience while at the same time performing the art of which they are most passionate.

The is the frontend repository of the Demodé web application. 
Made with React + Vite, TypeScript, TailwindCSS, Redux (RTK), RTK Query and uses Firebase for storing files in the cloud. 

You can find the REST API [here](https://github.com/LeuGimrt/demode-backend).

## Prerequisites
- NodeJS >= 16.0.0 installed.
- A Firebase project with the storage service active.

## Running locally

### Setting up the environment

Create a .env file:
```
VITE_API_BASE_URL=<rest_api_url>
VITE_FIREBASE_API_KEY=<firebase api key>
VITE_FIREBASE_AUTH_DOMAIN=<firebase auth domain>
VITE_FIREBASE_PROJECT_ID=<firebase project id>
VITE_FIREBASE_STORAGE_BUCKET=<firebase storage bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<firebase messaging sender id>
VITE_FIREBASE_APP_ID=<firebase app id>
```

### Install all the packages
```
npm install
```
or (if you're using yarn):
```
yarn
```


### Start the server
```
npm install
```
or (if you're using yarn):
```
yarn
```

It should start running on localhost:3000 🤓
