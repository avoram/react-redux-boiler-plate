This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

### Bolier plate setups

1. React boiler plater v16.8 using create-react-app
2. Routing configuartion
    a. Defined application level routing
    b. Route guards support added
    c. lazy loading of component - Using react lazy and suspense
    d. Added default routing support
    e. Unknown routes handling

3. Lazy Loading - Using React lazy and suspence
4. State Management - Redux + Saga (as middleware)
5. API calls setup
    a. API calls library - [axios](https://github.com/axios/axios) 
    b. axios interceptor - To intercept API request and response using axios interceptor. It helps to set                            request headers to all the API calls, setting baseURL for API calls etc.
6. Loader implementation - Loader state is managed in axios interceptor with count mechanism. For each API                               call count will increase by 1 and after each response it will decrease by 1. So                               stop the loader when count is 0
7. Toaster messages implementation - [react-redux-toastr](https://www.npmjs.com/package/react-redux-toastr)
8. Error handling - 
    a. component level error handling - [Error Boundary implementation](https://reactjs.org/docs/            error-boundaries.html#introducing-error-boundaries) 
    b. API calls error handling - Handling at axios response interceptor and showing error toaster message for it
9. Loader implementation - Show loader when making API calls and hide it when no api calls pending. It is   action based implementation from axios interceptor
10. Smart and dumb components(Class and Presentational components) strategy 
    a. Smart component - Class components with life cycle methods which mananges state of application
    b. Presentational components - Using React memo for functional components can bail out from rendering when their input props are the same and lazy load such components. Helps performance optimisation. 
11. Create build and deploy to firebase - npm run build and then firebase deploy
12. [react-debounce-input](https://www.npmjs.com/package/react-debounce-input) - npm plugin to add input box with debounce option to prevent component rerendering on every input value change
13. [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - To add the support of redux dev tool and add it as midldware to applcation
14. Accessibility - 
        a) Added support of accessing web page with keyboard only. (Used tabIndex for accessing non accessible item)

TODO::

1. Style architect - Add styled component or CSS Module and check deep level scss class with component and Sass configuration (variables, mixins, component level scss)
2. Add React forms
3. Environment configuration - Dev and Prod
4. Lint defination to be added to HTML, CSS and JS
5. Git Add Hooks for Linting check
6. Responsive design setup
7. Localization
8. Accessibility - image alt text, semantic tags



This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
