# SEP 6 Movie App
**Application is* written in React JS using JavaScript

## Integration with GCP
Application is integrated with **Google Cloud Platform**. There is a **Cloud Build** trigger
resulting in installing dependencies and deploying the newest version on the hosting.
Pipeline is activated on push to `master` branch.

#### `cloudbuild.yaml`
This file defines the steps executed by **Cloud Build** trigger
- **Step 1** `npm install`: installs all the dependencies for the project
- **Step 2** `npm run create-env`: reads data from **Cloud Build** environmental
  variables and initialize `.env` file
- **Step 3** `npm run build`: builds the React App for production in `/build` folder
- **Step 4** `firebase deploy --project=$PROJECT_ID --only=hosting --token=${_FIREBASE_TOKEN}`
  : Deploys the app in `/build` folder on firebase hosting.`$PROJECT_ID` is substituted by 
  env variable provided by GCP. `${_FIREBASE_TOKEN}` is replaced by environmental variable
  placed in **Cloud Build** trigger. It is used as authentication for CLI

### Hosting
Hosting is provided by [Firebase](https://firebase.google.com/docs/hosting). It is a free
solution, more suitable for our needs, compared e.g. to Cloud Run or App Engine. The main
difference in this case is the price, **Firebase Hosting** offers free tier.<br>
More differences can be found [here](https://blog.back4app.com/google-app-engine-vs-firebase/)