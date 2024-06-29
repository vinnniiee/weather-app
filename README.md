# Weather App

Weather App is a web application that provides weather information. The backend is built using Node.js and Express, and the frontend is built using React. 
Deployed on: [Render](https://weather-app-x4v9.onrender.com/)


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Key Dependencies](#key-dependencies)
- [License](#license)

## Features

- **Weather Data**: Provides real-time weather data from various locations.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User Interface**: Interactive and user-friendly interface for viewing weather information.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/vinniiee/weather-app.git
    cd weather-app
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    cd ..
    ```

4. Create a `.env` file in the root directory of the project and add the following environment variables:
    ```
    MONGO_URI=your_mongodb_uri
    API_KEY=your_weather_api_key
    ```

## Usage

### Development

1. Start the backend server:
    ```bash
    npm run start:backend
    ```

2. Start the frontend development server:
    ```bash
    npm run start:frontend
    ```

3. Open your browser and navigate to `http://localhost:3000`.

### Production

1. Build the project:
    ```bash
    npm run build
    ```

2. Start the production server:
    ```bash
    npm run prod
    ```

## Scripts

- `start:backend`: Start the backend server.
- `start:frontend`: Start the frontend development server.
- `build`: Install frontend dependencies, build the frontend, and install backend dependencies.
- `start`: Run both backend and frontend servers concurrently.
- `prod`: Start the production server.

## Key Dependencies

### Backend

- **body-parser**: Middleware for parsing incoming request bodies.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: For loading environment variables from a `.env` file.
- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool.

### Frontend

- **react-icons**: Collection of popular icons for React applications.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Additional Information

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
