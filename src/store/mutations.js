export default {
  updateSearchTerm: (state, searchTerm) => {
    state.searchTerm = searchTerm;
  },
  updateUsersInfo: (state, snapshot) => {
    // checking the length incase we updated the users number so it can rerender
    if (snapshot.length !== 0) {
      snapshot.forEach(doc => {
        let userInfo = doc.data();
        userInfo.id = doc.id;
        state.usersInfo.push(userInfo);
      });
    } else {
      state.usersInfo = [];
    }
  },
  updateAllDeleted: state => {
    state.usersInfo = [];
  },
  // passing the fetched data of this user so we can modify it
  updateUserInfo: (state, snapshot) => {
    state.usersInfo = [];
    snapshot.forEach(doc => {
      let user = doc.data();
      state.editedUserName = user.Name;
      state.editedDescription = user.Description;
      state.editedAmount = user.Amount;
      state.id = doc.id;
    });
  },
  // to delete the recently added user without refreshing
  // will add the new user id and then update the new array with the new user including the id
  getAddedUserId: (state, snapshot) => {
    snapshot.forEach(doc => {
      state.addedId = doc.id;
    });
    let userInfo = {
      Name: state.addedUserName,
      Description: state.addedDescription,
      Amount: state.addedAmount,
      Date: state.addedDate,
      id: state.addedId
    };

    state.usersInfo.unshift(userInfo);
    // emptying fields after submit
    state.addedUserName = null;
    state.addedDescription = null;
    state.addedAmount = null;
  },
  // updating the renderd table
  updateDeletedUser: (state, id) => {
    state.usersInfo = state.usersInfo.filter(userInfo => {
      return userInfo.id != id;
    });
  },
  addUserName: (state, userName) => {
    state.addedUserName = userName;
  },
  addDescription: (state, description) => {
    state.addedDescription = description;
  },
  addAmount: (state, amount) => {
    state.addedAmount = amount;
  },
  editUserName: (state, userName) => {
    state.editedUserName = userName;
  },
  editDescription: (state, description) => {
    state.editedDescription = description;
  },
  editAmount: (state, amount) => {
    state.editedAmount = amount;
  }
};
