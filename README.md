# BriteCore


####  A Vue.js data table component that displays clients payments information, such tables serves data heavy pages, this component satisfy the CRUD operations and covers the following functionalities like displaying data in sortable columns, searching data and actions that can be taken on each data item, or applied to all items in the table with effective display and user experience across resolutions.

##### This site was tested with [JEST](https://jestjs.io/).

##### [Vue](https://vuejs.org/) and [Vuex](https://vuex.vuejs.org/) used for this data table stack.

##### [Firebase](https://firebase.google.com/) store and hosting for the database and deployment.

##### Dependencies : "convert-csv-to-json, firebase, firebase-admin,Jest , vue-js-modal, "vue-router, "vue-sweetalert2, "vuex.


## Github Repo
[BriteCore](https://github.com/Ghadeer-Alkhataybeh/Brite-core.git)

## Deployment link
[BriteCore](https://brite-core-a9ecc.firebaseapp.com/)


## About the task
- It took me 7 days to learn Vue , Vuex , firebase and JEST testing , and 10 days to finish testing and implementing my component.
 if i have more time I would do some more tests , improvements on my style and make my code DRYer with more modularity in my VUEX store.
- This component can be modified to be dynamic data table for any website data table requirements with different fields and data, I would receive the data and specifications as Vue.js props.
- My favorite CSS property is absolute and relative positions, I believe that this property helps to make the website responsive as it is crucial codes that affect our web designing which, in turn, affect our google ranking . and I would say colors too, clients can be attracted by the colors and design of the web site they are using even before checking the services and functionalities that they might get from the website.

- ES6 all in all is more than great and it saves us lots of codes lines , but maybe I would go for the Block-Scoped Variables that prevent from hoisting, and the lexical this is nice too it saves us from the unexpected output when using it in a different context.  

- Vuex is one of my favorite Vue.js libraries It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

## Build Setup

``` bash
# install dependencies
`npm install`

# serve with hot reload at localhost:8080
`npm run dev`

# build for production with minification
`npm run build`

# for deploying after building
`firebase deploy`

# build for production and view the bundle analyzer report
`npm run build --report`

# run unit tests
`npm test`

#uploading the mock payment data incase of deleting all of them , from src\firebase directory
`node json-to-firestore.js`
```