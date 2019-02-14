import Vuex from 'vuex';
import { createLocalVue, shallow, shallowMount, mount } from 'vue-test-utils';
import AddUserInfo from '@/components/AddUserInfo';
import state from '@/store/state';

const localVue = createLocalVue();
localVue.use(Vuex);
let store = new Vuex.Store({
  state: state
});

describe('AddUserInfo', () => {
  const wrapper = shallow(AddUserInfo, {
    localVue,
    store
  });

  test('Is AddUserInfo a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('AddUserInfo should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('AddUserInfo has the form tag (has 5 children)', () => {
    const form = wrapper.find('form');
    expect(wrapper.find('form').exists()).toBe(true);
  });

  test('Form tag has children: 1 h2, 3 lablels and 1 div ', () => {
    const form = wrapper.find('form');
    expect(form.findAll('h2').length).toBe(1);
    expect(form.findAll('label').length).toBe(3);
    expect(form.findAll('div').length).toBe(1);
  });

  test('Form tag check the children title: h2 and lablels', () => {
    const form = wrapper.find('form');
    const h2 = form.findAll('h2').wrappers[0];
    const label1 = form.findAll('label').wrappers[0];
    const label2 = form.findAll('label').wrappers[1];
    const label3 = form.findAll('label').wrappers[2];
    expect(h2.text()).toBe('Add new user');
    expect(label1.find(':first-child').text()).toBe('User name');
    expect(label2.find(':first-child').text()).toBe('Description');
    expect(label3.find(':first-child').text()).toBe('Amount');
  });

  test('Form tag check the child : div must has button with text Add User Info', () => {
    const form = wrapper.find('form');
    const div = form.findAll('div').wrappers[0];
    expect(div.find('button').exists()).toBe(true);
    expect(div.find('button').text()).toBe('Add User Info');
  });
});
