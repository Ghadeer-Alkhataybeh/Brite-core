var admin = require("firebase-admin");
const serviceAccount = require("./service-key.json");
const data = require("./data.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://brite-core-a9ecc.firebaseio.com"
});

if (typeof data === "object") {
  Object.keys(data).forEach(docTitle => {
    admin
      .firestore()
      .collection("UsersInfo")
      .doc(docTitle)
      .set(data[docTitle])
      .then(res => {
        console.log("Document successfully written!");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  });
}

// in the terminal in this file directory run $node json-to-firestore.js
  // to transfer your json file to the firestore incase of emptying all the fields