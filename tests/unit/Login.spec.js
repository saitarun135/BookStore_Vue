/*************************************************************************
* Purpose : to test the logincomponent
*
* @file : Login.spec.js
* @author : Sai Tarun <saitarun800@gmail.com>
* @version : 1.0
* @since : 28/06/2021
*
**************************************************************************/
import Login from '../../src/Pages/Login.vue';
import { createLocalVue, shallowMount} from '@vue/test-utils'
describe('Login.vue', ()=>{
    let wrapper;
    let sideContent='Online Book Shopping';
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Login, localVue);
    });
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
    it('renders a vue instance', () => {
        expect(shallowMount(Login).vm).toBeTruthy();
    })
    it('Checks the side-content', () => {
        expect(wrapper.vm.sideContent).toMatch('Online Book Shopping');
    });
    it('has an image', () => {
        expect(wrapper.find('#side-img')).toBeTruthy();
    });
    it('has a two title sections',()=>{
        expect(wrapper.find('#signup')).toBeTruthy();
        expect(wrapper.find('#login')).toBeTruthy();
    });
    it('has a email input box',()=>{
        expect(wrapper.find('#Email-input')).toBeTruthy();
    });
    it('has a password input box',()=>{
        expect(wrapper.find('#passField')).toBeTruthy();
    });
    it('has a eye icons',()=>{
        expect(wrapper.find('#togglePassword')).toBeTruthy();
    });
    it('has a button field',()=>{
        expect(wrapper.find('.btn-section')).toBeTruthy();
    });
    it('has a two unused button fields',()=>{
        expect(wrapper.find('.btn-primary')).toBeTruthy();
        expect(wrapper.find('.btn-light')).toBeTruthy();
    });
    
   
})
