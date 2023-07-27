# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

***

# Project Runtime
A user enters the zip code of the desired city. An api call is made to search for the provided zip code. 

If the zip code is found, the app will display a city component will all cities that match the zip code. 

If the zip code is not found, a relevant error message will popup. 

On clicking the desired city, another api call will be made to retieve the weather data. 

If the city is found, detailed weather information will be displayed to the user.

If the selected city is not found, a relevant error message will popup and the user will be able to choose a different city if desired.