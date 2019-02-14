import { shallowMount, mount } from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';
import AddUser from '@/components/AddUserInfo';

describe('Navbar', () => {
  const wrapper = shallowMount(Navbar, {
    stubs: ['router-link', 'modal']
  });

  test('Is Navbar a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Navbar should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Navbar has the span BriteCore', () => {
    expect(wrapper.find('span').isVisible()).toBe(true);
    expect(wrapper.find('span').text()).toBe('BriteCore');
    expect(wrapper.find('span').attributes('class')).toBe('nav-title');
  });

  test('AddUserInfo is exists in Navbar', () => {
    expect(wrapper.find(AddUser).exists()).toBe(true);
  });

  test('Search is exists in Navbar', () => {
    expect(wrapper.find('input').attributes('name')).toBe('search');
  });
});
