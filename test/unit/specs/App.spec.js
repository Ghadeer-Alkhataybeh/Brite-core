import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import App from '@/App.vue';
import VueRouter from 'vue-router';
import Index from '@/components/index';
import EditUserInfo from '@/components/EditUserInfo';
import Navbar from '@/components/Navbar';
import routing from '@/router/index.js';
let routes = routing.routes;
const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
  const router = new VueRouter({ routes });
  const wrapper = shallowMount(App, {
    localVue,
    router,
    stubs: ['router-link', 'router-view']
  });
  test('should be a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('should renders a child component (Navbar)', () => {
    expect(wrapper.find(Navbar).exists()).toBe(true);
  });
  
  test('should renders a (Router-view)', () => {
    expect(wrapper.html().includes('router-view')).toBe(true);
  });
})
