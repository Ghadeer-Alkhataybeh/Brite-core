import mutations from '@/store/mutations.js';

describe('updateSearchTerm', () => {
  it('update the searchTerm of the state', () => {
    const searchTerm = 'Ghadeer';
    const state = {
      searchTerm: null
    };
    mutations.updateSearchTerm(state, searchTerm);
    expect(state).toEqual({
      searchTerm: 'Ghadeer'
    });
  });
});

describe('updateUsersInfo', () => {
  it('update the users info of the state', () => {
    const fetchedData = () => {
      db.collection('UsersInfo')
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let userInfo = doc.data();
            userInfo.id = doc.id;
            data.push(userInfo);
          });

          mutations.updateUsersInfo(state, snapshot);
        });
    };
    let data = [];
    const state = {
      usersInfo: []
    };

    // mutations.updateUsersInfo(state, snapshot)
    expect(state).toEqual({
      usersInfo: data
    });
  });
});

describe('updateAllDeleted', () => {
  it('should empty the usersInfo of the state', () => {
    const usersInfo = [];
    const state = {
      usersInfo: null
    };
    mutations.updateAllDeleted(state, usersInfo);
    expect(state).toEqual({
      usersInfo: []
    });
  });
});

describe('updateUserInfo', () => {
  it('should edit targeted userInfo of the state', () => {
    const editData = () => {
      let ref = db.collection('UsersInfo').where('Name', '==', 'April Obeidat');

      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          let user = doc.data();
          userD.Name = user.Name;
          userD.Description = user.Description;
          userD.Amount = user.Amount;
          userD.id = doc.id;
        });
        mutations.updateUserInfo(state, snapshot);
      });
    };

    const userD = {
      Name: null,
      Description: null,
      Amount: null,
      id: null
    };
    const state = {
      editedUserName: null,
      editedDescription: null,
      editedAmount: null,
      id: null
    };
    expect(state).toEqual({
      editedUserName: userD.Name,
      editedDescription: userD.Description,
      editedAmount: userD.Amount,
      id: userD.id
    });
  });
});

describe('getAddedUserId', () => {
  const addedId = () => {
    let ref = db
      .collection('UsersInfo')
      .where('Name', '==', state.addedUserName);

    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        let user = doc.data();
        user.Name = user.Name;
        user.Description = user.Description;
        user.Amount = user.Amount;
        user.id = doc.id;
      });
      mutations.getAddedUserId(state, snapshot);
    });
  };
  it('should save the recent added user id to the state', () => {
    const user = {
      id: null
    };

    const state = {
      addedId: null
    };

    expect(state).toEqual({
      addedId: user.id
    });
  });
  it('should save the data of the added user to the state', () => {
    const user = {
      Name: null,
      Description: null,
      Amount: null
    };

    const state = {
      addeddUserName: null,
      addeddDescription: null,
      addeddAmount: null
    };

    expect(state).toEqual({
      addeddUserName: user.Name,
      addeddDescription: user.Description,
      addeddAmount: user.Amount
    });
  });
});

describe('updateDeletedUser', () => {
  it('should update the usersInfo table after deleting one user', () => {
    let newUsersInfo = [
      {
        Name: 'Ghadeer',
        Description: 'Software Engineer',
        Amount: 1990,
        id: 'asd'
      },
      {
        Name: 'Kyra Lester',
        Description: 'Curabitur dictum. Phasellus in',
        Amount: 345.54,
        id: 'zxc'
      },
      {
        Name: 'Buckminster Alvarado',
        Description: 'dui, in sodales elit erat vitae risus. Duis a mi',
        Amount: 2018,
        id: 'qwe'
      }
    ];

    const state = {
      usersInfo: [
        {
          Name: 'Ghadeer',
          Description: 'Software Engineer',
          Amount: 1990,
          id: 'asd'
        },
        {
          Name: 'Kyra Lester',
          Description: 'Curabitur dictum. Phasellus in',
          Amount: 345.54,
          id: 'zxc'
        },
        {
          Name: 'Buckminster Alvarado',
          Description: 'dui, in sodales elit erat vitae risus. Duis a mi',
          Amount: 2018,
          id: 'qwe'
        }
      ]
    };

    const deletedUser = id => {
      newUsersInfo = newUsersInfo.filter(userInfo => {
        return userInfo.id != id;
      });
    };

    deletedUser('asd');

    mutations.updateDeletedUser(state, 'asd');
    expect(state).toEqual({
      usersInfo: newUsersInfo
    });
  });
});

describe('updateing state props ', () => {
  it('update the addedUserName of the state', () => {
    const addedUserName = 'Ghadeer';
    const state = {
      addedUserName: null
    };
    mutations.addUserName(state, addedUserName);
    expect(state).toEqual({
      addedUserName: 'Ghadeer'
    });
  });

  it('update the addedDescription of the state', () => {
    const addedDescription = 'abc def ghi';
    const state = {
      addedDescription: null
    };
    mutations.addDescription(state, addedDescription);
    expect(state).toEqual({
      addedDescription: 'abc def ghi'
    });
  });

  it('update the addedAmount of the state', () => {
    const addedAmount = 123;
    const state = {
      addedAmount: null
    };
    mutations.addAmount(state, addedAmount);
    expect(state).toEqual({
      addedAmount: 123
    });
  });

  it('update the editedUserName of the state', () => {
    const editedUserName = 'Jouana';
    const state = {
      editedUserName: 'Laith'
    };
    mutations.editUserName(state, editedUserName);
    expect(state).toEqual({
      editedUserName: 'Jouana'
    });
  });

  it('update the editedDescription of the state', () => {
    const editedDescription = 'healthy life';
    const state = {
      editedDescription: 'should be updated'
    };
    mutations.editDescription(state, editedDescription);
    expect(state).toEqual({
      editedDescription: 'healthy life'
    });
  });

  it('update the editedAmount of the state', () => {
    const editedAmount = 317.199;
    const state = {
      editedAmount: 550
    };
    mutations.editAmount(state, editedAmount);
    expect(state).toEqual({
      editedAmount: 317.199
    });
  });

 
});
