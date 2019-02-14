
import Vuex from 'vuex';
import { createLocalVue, shallow, shallowMount, mount } from 'vue-test-utils';
import index from '@/components/index';
import state from '@/store/state';
// import store from '@/store/store';
import getters from '@/store/getters';

const localVue = createLocalVue();
localVue.use(Vuex);
let store = new Vuex.Store({
  state: state
});

describe('index', () => {
  const wrapper = mount(index, {
    localVue,
    store,
    getters,
    stubs: ['router-link', 'modal']
  })

  test('Is index a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('index should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('index has the section tag', () => {
    const section = wrapper.find('section')
    expect(wrapper.find('section').exists()).toBe(true);

  });

  test('Section tag has children: 1 h1, 3 div ', () => {
    const section = wrapper.find('section')
    expect(section.findAll('h1').length).toBe(1);
    expect(section.findAll('div').length).toBe(3);
  });

  test('Section tag has children: 1 h1, 3 div classes', () => {
    const section = wrapper.find('section')
    expect(section.findAll('.tbl-header').length).toBe(1);
    expect(section.findAll('.tbl-content').length).toBe(1);
    expect(section.findAll('.delete-all').length).toBe(1);
  });

  test('Section tag check the title of h2', () => {
    const section = wrapper.find('section')
    const h1 = section.findAll('h1').wrappers[0]
    expect(h1.text()).toBe('Payments Data');
  });

  test('Table Head has 5 th tag ', () => {
    const tableHead = wrapper.find('table-head')
    expect(tableHead.findAll('th').length).toBe(5);
  });

  test('Check the title of th tag inside Table Head', () => {
    const tableHead = wrapper.find('table-head')
    const th1 = tableHead.findAll('th').wrappers[0]
    const th2 = tableHead.findAll('th').wrappers[1]
    const th3 = tableHead.findAll('th').wrappers[2]
    const th4 = tableHead.findAll('th').wrappers[3]
    const th5 = tableHead.findAll('th').wrappers[4]
    expect(th1.text().split('\n')[0]).toBe('Name');
    expect(th2.text().split('\n')[0]).toBe('Description');
    expect(th3.text().split('\n')[0]).toBe('Amount');
    expect(th4.text().split('\n')[0]).toBe('Edit');
    expect(th5.text().split('\n')[0]).toBe('Delete');
  });

  test('Div has class delete-all: inside it i tag text delete', () => {
    const div = wrapper.find('.delete-all')
    expect(div.find('i').text()).toBe('delete');
  });
});