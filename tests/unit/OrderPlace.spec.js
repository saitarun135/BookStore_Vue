/*************************************************************************
* Purpose : to test the OrderPlace component
*
* @file : OrderPlace.spec.js
* @author : Sai Tarun <saitarun800@gmail.com>
* @version : 1.0
* @since : 14/07/2021
*
**************************************************************************/
import OrderPlace from '../../src/components/OrderPlace.vue';
import { createLocalVue, shallowMount} from '@vue/test-utils'
describe('OrderPlace.vue', ()=>{
    let wrapper;
    let successTitle="Order placed Successfully";
    let adminEmailSection="Email-us";
    let adminContactSection="Contact-us";
    let adminAddressSection="Address";
    let adminEmail='admin@bookstore.com';
    let adminMobNum='+918163475881';
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(OrderPlace, localVue);  
    });
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
    it('renders a vue instance', () => {
        expect(shallowMount(OrderPlace).vm).toBeTruthy();
    })
    it('has a success image at the top',()=>{
        expect(wrapper.find('.image-container')).toBeTruthy();
    }); 
    it('has a title container for success message',()=>{
        expect(wrapper.find('.title-container')).toBeTruthy();
    });
    it('Checks the content of a success title', () => {
        expect(wrapper.vm.successTitle).toMatch("Order placed Successfully");
    }); 
    it('has a success message container',()=>{
        expect(wrapper.find('.message-section')).toBeTruthy();
    });
    it('has a admin email field',()=>{
        expect(wrapper.find('.email-us')).toBeTruthy();
    });
    it('Checks the content of a Email paragraph tag', () => {
        expect(wrapper.vm.adminEmailSection).toMatch("Email-us");
    }); 
    it('has a admin contact field',()=>{
        expect(wrapper.find('.contact-us')).toBeTruthy();
    });
    it('Checks the content of a contact paragraph tag', () => {
        expect(wrapper.vm.adminContactSection).toMatch("Contact-us");
    }); 
    it('has a admin address field',()=>{
        expect(wrapper.find('.address')).toBeTruthy();
    });
    it('Checks the content of a contact paragraph tag', () => {
        expect(wrapper.vm.adminAddressSection).toMatch("Address");
    }); 
    it('Checks the admin email address', () => {
        expect(wrapper.vm.adminEmail).toMatch("admin@bookstore.com");
    }); 
    it('Checks the admin ', () => {
        expect(wrapper.vm.adminMobNum).toMatch("+918163475881");
    }); 
        
});