<<<<<<< HEAD
# Stolen Bike Index - Frontend (React) Conding Challenge
![JOIN Stolen Bike Cases](https://github.com/chiper-inc/React-Web-Coding-Challenge/blob/master/illustration.png)

## Context

Stolen bikes are a typical problem in Berlin. The Police want to be more efficient in resolving stolen bike cases. They decided to build a software that can automate their processes — the software that you're going to develop.

This app needs to display the list of reported bike thefts based on the Bikewise [API](https://bikeindex.org/documentation/api_v3).

## Product Requirements

As a police officer:

- [ ] I want to see a list of reported bike thefts for the Berlin area.
- [ ] I want to see a detail page of the reported bike.
- [ ] I want to see the first 10 bike theft cases, with the ability to - paginate (10 cases per page).
- [ ] I want to see a total number of bike theft cases.
- [ ] For each reported bike theft I want to see:
  - [ ] Case title
  - [ ] Case description
  - [ ] Date of the theft
  - [ ] Date of when the case was reported
  - [ ] Location of the theft
  - [ ] Picture of the bike, if available
- [ ] I want to filter reported bike thefts by partial case title.
- [ ] I want to see a loading state until the list is available.
- [ ] I want to see an error state if the list is unavailable.
- [ ] I want to see an empty state if there are no results.

## Your Mission

Create the React application that satisfies all must-have requirements above, plus any nice-to-have requirements you wish to include.

For that, you’ll need to make requests to a publicly-available [API](https://bikeindex.org/documentation/api_v3) to get JSON content and print it on view. 

The API is known to have some limitations. If you are not able to implement a particular requirement, please provide a description of what and why you could not implements.

For the layout of each page, please refer to the provided wireframes:

- [Index page](./screens/index.png)
- [Detail page](./screens/details.png)
- [Error state](./screens/index_error.png)
- [Empty state](./screens/index_empty.png)
- [Loading state](./screens/index_loading.png)

Also, you can take inspiration from these resources:

- [BikeIndex](https://bikeindex.org/bikes?serial=&button=&location=Berlin&distance=100&stolenness=proximity)
- [BikeWise](https://bikewise.org)

You can use any boilerplate/approach you prefer (nextjs, create react app, ...), but try to keep it simple. We encourage you to use your favorite tools and packages to build a solid React application.

You can assume that you do not have to support legacy browsers. Feel free to use modern features such as **fetch** or **flexbox**.

Host the website on the service of your choice (zeit, Heroku, AWS, GCloud, ...)

## Tech Requirements

- React + Typescript
- Code Linter
- Tests: Jest + react-testing-library / enzyme
- CSS Frameworks is a plus: styled-components, tailwind, sass, less, stylus...

## Instructions

- Fork this repo
- The challenge is on!
- Build a performant, clean and well-structured solution
- Commit early and often. We want to be able to check your progress
- Make the app public. Deploy it using the service of your choice
- Create a pull request
- Please complete your working solution within 5 days of receiving this challenge, and be sure to notify us when it is ready for review.

## License

MIT
=======
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

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> Initialize project using Create React App
