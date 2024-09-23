# Up and running
just use the following command to run the exisiting template
```npm install```

# Fresh Insallations
## Run the following commands to initialize the project:
```
mkdir react-ts-app
cd react-ts-app
npm init -y
```

## Install the required dependencies from the following commands:
### We are going to use React, Typescript, Webpack, EsLint, MUI, React Router Dom 

```
npm install react react-dom react-router-dom @mui/material @mui/icons @emotion/react @emotion/styled
npm install typescript @types/react @types/react-dom @types/react-router-dom --save-dev
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin ts-loader --save-dev
npm install eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-prettier --save-dev
npm install webpack-bundle-analyzer --save-dev
```

### Configuring App
 **Configurations for the followings are already done, you can check the respective files.**
- Create a tsconfig.json file to configure TypeScript.
- Create a webpack.config.js file for webpack setup.
- Create a .eslintrc.json file for linting.
- Create an index.html in the public folder:
- Create App.tsx to include your routes and theme.
- Inside src/routes, create a index.tsx for multiple routers.
- Inside the src folder, created a file theme.ts for MUI custom theme in utils folder.
