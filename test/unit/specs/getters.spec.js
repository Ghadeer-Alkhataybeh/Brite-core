import getters from '@/store/getters.js';

const usersInfo = [
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

const state = { usersInfo , searchTerm : 'Ghadeer'};

describe('filteredItems', () => {
  it('returns filteredItems', () => {
    const actual = getters.filteredItems(state);

    expect(actual).toEqual([usersInfo[0]]);
  });
});
