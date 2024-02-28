# Unique Recipe Book Application Development Guide

This guide will walk you through the steps to create a Unique Recipe Book application that allows users to add, view, search, and filter recipes. This application will be developed using HTML, CSS, ReactJS with hooks and Redux for state management, TypeScript for type checking, Chakra UI for styling, and Parcel as the bundler. Additionally, the application's functionality will be verified through Cypress tests. Follow the instructions carefully to ensure your application passes the provided Cypress test suites.

## Prerequisites

Before you start, make sure you have basic knowledge of HTML, CSS, JavaScript (ES6+), and familiarity with ReactJS concepts like components, hooks, and Redux. You should also have Node.js and npm installed on your machine to manage packages and run the project.

## Setup

1. **Initialize the Project:** Start by creating a new directory for your project and initialize it with `npm init -y` to create a `package.json` file.
2. **Install Dependencies:** Install React, Redux, TypeScript, Parcel, Chakra UI, and Cypress by running:
   ```
   npm install react redux react-redux @reduxjs/toolkit typescript parcel-bundler @chakra-ui/react @emotion/react @emotion/styled framer-motion cypress
   ```
3. **Configure TypeScript:** Create a `tsconfig.json` file in the root of your project with the following configuration:
   ```json
   {
     "compilerOptions": {
       "target": "es5",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "skipLibCheck": true,
       "strict": true,
       "forceConsistentCasingInFileNames": true,
       "noEmit": true,
       "esModuleInterop": true,
       "module": "esnext",
       "moduleResolution": "node",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "jsx": "react-jsx"
     },
     "include": ["src"]
   }
   ```
4. **Create Application Structure:** Create a `src` directory to hold your application code. Inside `src`, create `index.html`, `index.tsx`, and `App.tsx` as your entry points.

## Development

### 1. Setting Up the React Application

- **Index.html:** Inside `index.html`, include a root `div` where your React application will be mounted.
  ```html
  <body>
    <div id="root"></div>
  </body>
  ```
- **Index.tsx:** Use this file to render your `App` component to the DOM.
  ```tsx
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  
  ReactDOM.render(<App />, document.getElementById('root'));
  ```
- **App.tsx:** This component will serve as the main layout of your application.

### 2. Implementing Features

To pass the Cypress tests, your application needs to have specific functionalities. Here, we will outline the key features and the data-test attributes you will need to include for each feature.

- **Add a New Recipe:**
  - Provide inputs for the recipe name and description with data-test attributes `recipe-name-input` and `recipe-description-input`, respectively.
  - Include a submit button with a data-test attribute `submit-recipe`.
  - On submitting the form, the recipe should be added to the global state and displayed immediately.

- **View Recipes:**
  - Display each recipe in a component with a data-test attribute `recipe-item`.
  - Ensure the recipe's name and description are displayed within this component with `recipe-name` and `recipe-description` data-test attributes, respectively.

- **Search for a Recipe by Name:**
  - Include a search input with a data-test attribute `search-recipe-input` and a submit button with `search-recipe-submit`.
  - Implement functionality to filter recipes based on the input value, displaying any that match.

- **Filter Recipes by Keyword in Description:**
  - Utilize the same search input and button as above.
  - Adapt the search functionality to also allow filtering based on keywords found in the recipe descriptions.

### 3. Styling

Use Chakra UI to style your components for a polished look. Refer to the [Chakra UI documentation](https://chakra-ui.com/docs/getting-started) for guidance on using its components and styles.

### 4. Running the Project

- **Parcel:** Configure Parcel to bundle your application by adding a start script in your `package.json`:
  ```json
  "scripts": {
    "start": "parcel src/index.html",
    "test": "cypress open"
  }
  ```
- Run `npm start` to launch the application.
- Open another terminal and run `npm test` to start Cypress and run the test suites.

## Submission

Ensure your application passes all Cypress test cases. Submit your project by providing a link to your GitHub repository containing the source code.

Good luck with your coding challenge!