# Random Generator App
## NodeJS | React | Typescript

This project built a String generator app in TypeScript.

## Screenshot
![Generator App](https://i.ibb.co/X21tcr1/Generator-App.png)

## Why to use Typescript?

- **Unified modeling** across web client and server for objects
- Type safety, and easy refactoring of typed code across web client and server
- A superior developer experience in a team environment

## Core Features
- It will generate a text file of random strings of size 2 MB (2048kb)
- Download the text file 
- Count the frequency of each type of strings
  - Alphabetic (ex : aaa,abcAe, DDDD ...)
  - Integers (ex : 1234,83049840,83948 ...)
  - Real Numbers (ex : 1.012,123445,1111.293 ...)
  - Alphanumerics (ex : aa123a,1DSA3, add0 ...)

## Prerequisites

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs


## Cloning and Running the Application in local

Clone the project into local

```bash
git clone https://github.com/akrabulislam/Random-Generator-App.git
cd Random-Generator-App
```

## Install dependencies for server 
### `npm install` or `yarn install`

## Install dependencies for client
### cd client ---> `npm install` or `yarn install`


## Run the Express server only
### `npm run dev` or `yarn run dev`

## Run the React client only
### cd client ---> `npm start` or `yarn start`

## Server runs on http://localhost:5000 and client on http://localhost:3000

## How to test the App ?
- Clicking on `Generate` button , will generate a file of random strings of size 2 MB.
- Clicking on `Link`, will download the file.
- Clicking on `Report` button , will show the count of each type of string.
  - Alphabetic 
    - Contains [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
    - Example  [abdie,diauekdh,aaaidue,aki,ei...]
  - Integers
    - Contains [0,1,2,3,4,5,6,7,8,9]
    - Example  [31837,938,8,928,1,2...]
  - Real Numbers
    - Contains [0,1,2,3,4,5,6,7,8,9]
    - Example  [1.2,938,8.9,9289.4758,12...]
  - Alphanumerics
    - Contains [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9]
    - Example  [kaidu12,ok48,akdiuehn98,898dairi....]
