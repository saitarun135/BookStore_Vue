/*************************************************************************
* Purpose : to test the Resetcomponent
*
* @file : Reset.spec.js
* @author : Sai Tarun <saitarun800@gmail.com>
* @version : 1.0
* @since : 30/06/2021
*
**************************************************************************/
import Reset from '../../src/Pages/Reset.vue';
import { createLocalVue, shallowMount} from '@vue/test-utils'
describe('Reset.vue', ()=>{
    let wrapper;
    let title='Reset Password';
    let newPasswordContent='NewPassword';
    let confirmPasswordContent='confirmPassword';
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Reset, localVue);
    });
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
    it('renders a vue instance', () => {
        expect(shallowMount(Reset).vm).toBeTruthy();
    })
    it('Checks the Title', () => {
        expect(wrapper.vm.title).toMatch('Reset Password');
    });
    it('Checks the content of first password field', () => {
        expect(wrapper.vm.newPasswordContent).toMatch('NewPassword');
    });
    it('checks the content of the second password field',()=>{
        expect(wrapper.vm.confirmPasswordContent).toMatch('confirmPassword');
    })
    it('has a new password input field box',()=>{
        expect(wrapper.find('#password-input')).toBeTruthy();
    });
    it('has a confirm  password field input box',()=>{
        expect(wrapper.find('#confirm-input')).toBeTruthy();
    });
    it('has a button field for update ',()=>{
        expect(wrapper.find('#btn-group')).toBeTruthy();
    });
})
