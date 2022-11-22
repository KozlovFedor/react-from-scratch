# react-from-scratch

Creating React application and setting all neccessary toolchain

Using following tutorial
https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658
https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph

Pre-requirements:
- npm: npm install -g npm@9.1.2

Action log:

1. Create repo on GitHub
1.1. git clone repo

2. npm init

3. add public/index.html
3.1. add .gitignore (including node_modules/, dist/)

4. install babel
4.1. npm install --save-dev @babel/core @babel/cli
4.2. For transform code to "more traditional javascript"
    npm install --save-dev @babel/preset-env @babel/preset-react @babel/preset-typescript (@babel/plugin-transform-runtime')
4.3. add babel.config.json

5. install typescript
5.1. npm i --save-dev typescript
5.2. add tsconfig.json

6. install webpack and loaders
6.1. npm i --save-dev webpack webpack-cli webpack-dev-server css-loader html-webpack-plugin mini-css-extract-plugin babel-loader
6.2. add webpack.config.ts
