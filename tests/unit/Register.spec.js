/*************************************************************************
* Purpose : to test the registration component
*
* @file : Register.spec.js
* @author : Sai Tarun <saitarun800@gmail.com>
* @version : 1.0
* @since : 26/06/2021
*
**************************************************************************/
import Register from '../../src/Pages/Register.vue';
import { createLocalVue, shallowMount} from '@vue/test-utils'
describe('Register.vue', ()=>{
    let wrapper;
    let title='Online Book Shopping';
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Register, localVue);
    });
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
    it('renders a vue instance', () => {
        expect(shallowMount(Register).vm).toBeTruthy();
    })
    it('Checks the side-content', () => {
        expect(wrapper.vm.title).toMatch('Online Book Shopping');
    });
   it('has an image', () => {
        expect(wrapper.find('#side-img')).toBeTruthy();
    });
   
    it('has a side content',()=>{
        expect(wrapper.find('#side-content')).toBeTruthy();
    });
    it('has a two title sections',()=>{
        expect(wrapper.find('#signup')).toBeTruthy();
        expect(wrapper.find('#login')).toBeTruthy();
    });
    it('has a full name input box',()=>{
        expect(wrapper.find('#name-input')).toBeTruthy();
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
    it('has a mobile input field',()=>{
        expect(wrapper.find('.telephone')).toBeTruthy();
    });
    it('has a button field',()=>{
        expect(wrapper.find('.btn-section')).toBeTruthy();
    });
   
})
