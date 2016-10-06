# Boilerplate code for an React App using SSR, HMR and React Router

using:

- React
- React Hot Loader v3 (Beta)
- React Router v4 (Alpha)
- Webpack2 (Beta)

## Installation
Using [npm](https://www.npmjs.com/):
```
$ npm install
```

## Development Environment:
```
$ npm run dev
```

[Client Server](http://localhost:8080/webpack-dev-server) for **hot reloading** will be started. It provides all assets 
e.g. javascript, css, images for development environment.

[Web server](http://localhost:3000) will be started, which renders our code on the server side.

Navigate to [http://localhost:3000](http://localhost:3000)

#### Debugging Server Side code
Make sure you have the [node-inspector](https://github.com/node-inspector/node-inspector) installed:

```
$ npm install -g node-inspector
```

Run web server in debug mode:
```
$ npm run dev:debug:web:server
```

A Chrome Browser with a console should open automatically.

Navigate to [http://localhost:3000](http://localhost:3000) in your normal Browser.

Now, if you set a

```js 
const handleRender = (req, res) => {
  const context = createServerRenderContext()
  debugger
  ...
}  
``` 
statement somewhere in your code and reload the page, you will be able to debug the code in the console of the 
second Chrome Browser which was started by node-inspector. For further details visit:
[https://github.com/node-inspector/node-inspector](https://github.com/node-inspector/node-inspector). 


## Production Environment:
```
$ npm run prod
```

[Web server](http://localhost:3030) will be started, which renders our code on the server side and provides all assets.

Navigate to [http://localhost:3030](http://localhost:3030)
