/*************************************************************************
* Purpose : to test the Forgotcomponent
*
* @file : Forgot.spec.js
* @author : Sai Tarun <saitarun800@gmail.com>
* @version : 1.0
* @since : 29/06/2021
*
**************************************************************************/
import Forgot from '../../src/Pages/Forgot.vue';
import { createLocalVue, shallowMount} from '@vue/test-utils'
describe('Forgot.vue', ()=>{
    let wrapper;
    let title='Forgot Your Password?';
    let content="Enter your email address and we'll send you a link to reset your password.";
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Forgot, localVue);
    });
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
    it('renders a vue instance', () => {
        expect(shallowMount(Forgot).vm).toBeTruthy();
    })
  
    it('Checks the Title', () => {
        expect(wrapper.vm.title).toMatch('Forgot Your Password?');
    });
    it('Checks the content inside container', () => {
        expect(wrapper.vm.content).toMatch("Enter your email address and we'll send you a link to reset your password.");
    });
    it('has a email input box',()=>{
        expect(wrapper.find('#Email-input')).toBeTruthy();
    });   
    it('has a button field',()=>{
        expect(wrapper.find('#btn-group')).toBeTruthy();
    });
   
    
   
})
