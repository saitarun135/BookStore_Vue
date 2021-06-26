/*************************************************************************
* Purpose : to test registration component
*
* @file : Register.spec.js
* @author : Sai Tarun <saitarun800@gmail.com>
* @version : 1.0
* @since : 31/01/2021
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
        expect(wrapper.contains('#signup')).toBe(true);
        expect(wrapper.contains('#login')).toBe(true);
    });
    it('has a full name input box',()=>{
        expect(wrapper.contains('#name-input')).toBe(true);
    });
    it('has a email input box',()=>{
        expect(wrapper.contains('#Email-input')).toBe(true);
    });
    it('has a password input box',()=>{
        expect(wrapper.contains('#passField')).toBe(true);
    });
    it('has a eye icons',()=>{
        expect(wrapper.contains('#togglePassword')).toBe(true);
    });
    it('has a mobile input field',()=>{
        expect(wrapper.contains('.telephone')).toBe(true);
    });
    it('has a button field',()=>{
        expect(wrapper.contains('.btn-section')).toBe(true);
    });
   
})
