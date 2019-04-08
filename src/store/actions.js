import db from "@/firebase/init";
import router from "@/router";

export default {
  // fetch all data from firestore
  fetchData: context => {
    db.collection("UsersInfo")
      .get()
      .then(snapshot => {
        context.commit("updateUsersInfo", snapshot);
      });
  },
  // fetch specific user data from firestore
  editData: (context, name) => {
    let ref = db.collection("UsersInfo").where("Name", "==", name);

    ref.get().then(snapshot => {
      context.commit("updateUserInfo", snapshot);
    });
  },
  // fetch id for the new user from firestore
  addedId: context => {
    let ref = db
      .collection("UsersInfo")
      .where("Name", "==", context.state.addedUserName);

    ref.get().then(snapshot => {
      context.commit("getAddedUserId", snapshot);
    });
  },
  // delete specific user data from firestore
  deleteUserInfo: (context, id) => {
    db.collection("UsersInfo")
      .doc(id)
      .delete()
      .then(() => {
        context.commit("updateDeletedUser", id);
      });
  },
  // delete all users data from firestore
  deleteAllUsers: context => {
    context.state.usersInfo.forEach(element => {
      let id = element.id;
      db.collection("UsersInfo")
        .doc(id)
        .delete()
        .then(() => {
          context.commit("updateAllDeleted");
        });
    });
  },
  // Add userInfo to firestore
  AddUser: context => {
    db.collection("UsersInfo")
      .add({
        Amount: context.state.addedAmount,
        Date: context.state.addedDate,
        Description: context.state.addedDescription,
        Name: context.state.addedUserName
      })
      .then(() => {
        context.dispatch("addedId");
      })
      .catch(err => {
        console.log(err);
      });

    router.push({ name: "Index" });
  },
  // Edit userInfo to firestore
  EditUser: (context, id) => {
    db.collection("UsersInfo")
      .doc(id)
      .update({
        Amount: context.state.editedAmount,
        Description: context.state.editedDescription,
        Name: context.state.editedUserName
      })
      .then(() => {
        router.push({ name: "Index" });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
