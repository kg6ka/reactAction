React Webpack Bable
========================

#Install npm packages
```bash
cd to/project/folder
npm init
```
#Install and configuration Webpack
```bash
npm i webpack -S

if don't have webpack.config.js
touch webpack.config.js
```
#Install babel
```bash
npm i babel-loader babel-preset-es2015 babel-preset-react -S
```
##if cannot find module babel-core
```bash
npm install --save-dev babel-core
```

#Install react packages
```bash
npm i react react-dom -S
```
#Run server
```bash
./node_modules/.bin/webpack -d
or
npm run dev
```

