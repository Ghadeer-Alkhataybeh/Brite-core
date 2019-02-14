import actions from '@/store/actions.js';
import db from '@/firebase/init';
import mutations from '@/store/mutations.js';

import router from '@/router';

describe('fetchData', () => {
  const fetchData = () => {
    db.collection('UsersInfo')
      .get()
      .then(snapshot => {});
  };
  test('the data is correctly fetched from fire store', async () => {
    await expect(actions.fetchData()).toEqual(fetchData());
  });

  test('fetchData should commits items returned by fire store method', async () => {
    await actions.fetchData();
    const fetchData = () => {
      db.collection('UsersInfo')
        .get()
        .then(snapshot => {
          getSnapshot(snapshot);
        });
    };
    let getSnapshot = data => {
      const commit = mutations.updateUsersInfo(state, data);
      const state = {
        usersInfo: []
      };
      expect(commit).toHaveBeenCalledWith('updateUsersInfo', true);
    };
  });
});

describe('editData', () => {
  it('Should retrieve specific user info', async () => {
    let mockCommit = (state, payload) => {
      let mockData = payload;
    };
    const editData = name => {
      let ref = db.collection('UsersInfo').where('Name', '==', name);

      ref.get().then(snapshot => {
        console.log(snapshot);
      });
    };
    const getEditData = editData('Ghadeer');

    const data = await actions.editData({ commit: mockCommit }, 'Ghadeer');

    expect(data).toEqual(getEditData);
  });

  it('editData should commits items returned by fire store method', async () => {
    const editData = name => {
      let ref = db.collection('UsersInfo').where('Name', '==', name);

      ref.get().then(snapshot => {
        getSnapshot(snapshot);
      });
    };
    let getSnapshot = data => {
      const commit = mutations.updateUserInfo(state, data);
      const state = {
        usersInfo: []
      };
      expect(commit).toHaveBeenCalledWith('updateUserInfo', true);
    };
    const getEditData = editData('Ghadeer');
  });
});

describe('deleteUserInfo', () => {
  it('Should delete specific user info', async () => {
    const state = {
      id: 'Ghadeer'
    };
    let mockCommit = (state, payload) => {
      let mockData = payload;
    };
    const deleteUserInfo = id => {
      db.collection('UsersInfo')
        .doc(id)
        .delete()
        .then(() => {
        });
    };
    const deletedInfo = deleteUserInfo(state.id);
    const data = await actions.deleteUserInfo({ commit: mockCommit }, state.id);
    expect(data).toEqual(deletedInfo);
  });

  it('deleteUserInfo should commits items returned by fire store method', async () => {
    const state = {
      id: 'Ghadeer'
    };
    const deleteUserInfo = id => {
      db.collection('UsersInfo')
        .doc(id)
        .delete()
        .then(() => {
          getSnapshot(snapshot);
        });
    };

    let getSnapshot = data => {
      const commit = mutations.updateDeletedUser(state, data);
      const state = {
        usersInfo: []
      };
      expect(commit).toHaveBeenCalledWith('updateDeletedUser', true);
    };
    const getdeleteUserInfo = deleteUserInfo(state.id);
  });
});

describe('AddUser', () => {
  it('Should Add a user info', async () => {
    let mockCommit = (state, payload) => {
      let mockData = payload;
    };

    const context = {
      state: {
        addedAmount: 123,
        addedDescription: 'abc def ghi',
        addedUserName: 'Jouana Obeidat',
       }
    };

    const AddUser = state => {
      db.collection('UsersInfo')
        .add({
          Amount: state.addedAmount,
          Description: state.addedDescription,
          Name: state.addedUserName
        })
        .then(() => {
        })
        .catch(err => {
          console.log(err);
        });
    };

    const getAddData = AddUser(context.state);

    const data = await actions.AddUser( context ,{ commit: mockCommit });
    expect(data).toEqual(getAddData);
  });
});

describe('EditUser', () => {
  it('Should edit a user info', async () => {
    let mockCommit = (state, payload) => {
      let mockData = payload;
    };

    const context = {
      state: {
        editedAmount: 123,
        editedDescription: 'abc def ghi',
        editedUserName: 'Jouana Obeidat',
        id: 'abc'
       }
    };

    const EditUser = (state, id) => {
      db.collection('UsersInfo')
      .doc(id)
      .update({
        Amount: state.editedAmount,
        Description: state.editedDescription,
        Name: state.editedUserName
        })
        .then(() => {
        })
        .catch(err => {
          console.log(err);
        });
    };

    const getEditData = EditUser(context.state,'abc');

    const data = await actions.EditUser( context, 'abc' );
    expect(data).toEqual(getEditData);
  });
});
