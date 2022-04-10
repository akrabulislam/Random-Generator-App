# Random Generator App

## NodeJS | React | Typescript

This project built a String generator app in TypeScript.

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

```bash
 npm install or yarn install
```

## Run server

```bash
 npm run dev or yarn run dev
```

## Server runs on http://localhost:5000

![Backend](https://i.ibb.co/GMnRrJL/Server.png)

## Install dependencies for client

```bash
 cd client
 npm install or yarn install
```

## Run client

```bash
 npm start or yarn start
```

## Client runs on on http://localhost:3000

![Frontend](https://i.ibb.co/X21tcr1/Generator-App.png)

## Core Features

- It will generate a text file of random strings of size 2 MB (2,097,152 bytes)
- Download the text file
- Count the frequency of each type of strings
  - Alphabetic (ex : aaa,abcAe, DDDD ...)
  - Integers (ex : 1234,83049840,83948 ...)
  - Real Numbers (ex : 1.012,123445,1111.293 ...)
  - Alphanumerics (ex : aa123a,1DSA3, add0 ...)

---
**NOTE**

 ![FileSize]https://i.ibb.co/NWzJ7cG/2022-04-10.png

 File size may be differ because , The size on the disk is the indicator of how much space a file occupies on the hard disk drive. When a file is stored in a modern storage device, it usually consumes slightly more storage than the actual file. That's the reason why you see the difference between size vs size on disk.

 Source : https://superuser.com/questions/66825/what-is-the-difference-between-size-and-size-on-disk

---

## How to test the App ?

- Clicking on `Generate` button , will generate a file of random strings of size 2 MB.
- Clicking on `Link`, will download the file.
- Clicking on `Report` button , will show the count of each type of string.
  - Alphabetic
    - Contains `a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z`
    - Example `abdie,diauekdh,aaaidue,aki,ei...`
  - Integers
    - Contains `0,1,2,3,4,5,6,7,8,9`
    - Example `31837,938,8,928,1,2...`
  - Real Numbers
    - Contains `0,1,2,3,4,5,6,7,8,9`
    - Example `1.2,938,8.9,9289.4758,12...`
  - Alphanumerics
    - Contains `a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9`
    - Example `kaidu12,ok48,akdiuehn98,898dairi....`

## Others

## Why to use Typescript?

- **Unified modeling** across web client and server for objects
- Type safety, and easy refactoring of typed code across web client and server
- A superior developer experience in a team environment
