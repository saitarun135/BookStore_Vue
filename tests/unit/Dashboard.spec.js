/*************************************************************************
* Purpose : to test the Dashboard
*
* @file : Dashboard.spec.js
* @author : Sai Tarun <saitarun800@gmail.com>
* @version : 1.0
* @since : 04/07/2021
*
**************************************************************************/
import Dashboard from '../../src/components/Dashboard.vue';
import { createLocalVue, shallowMount} from '@vue/test-utils'
describe('Dashboard.vue', ()=>{
    let wrapper;
    let brand='Bookstore';
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Dashboard, localVue);
    });
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
    it('renders a vue instance', () => {
        expect(shallowMount(Dashboard).vm).toBeTruthy();
    })
    it('Checks the content of a brand', () => {
        expect(wrapper.vm.brand).toMatch("Bookstore");
    });
    it('has a Top navigation bar',()=>{
        expect(wrapper.find('.navbar')).toBeTruthy();
    }); 
    it('has a Brand logo inside navigation-bar',()=>{
        expect(wrapper.find('.education-image')).toBeTruthy();
    }); 
    it('has a search icon inside search box',()=>{
        expect(wrapper.find('.fa-search')).toBeTruthy();
    }); 
    it('has a search box inside navigation-bar',()=>{
        expect(wrapper.find('.form-control')).toBeTruthy();
    }); 
    it('has a profile icon at the rightSide of navbar',()=>{
        expect(wrapper.find('.fa-user')).toBeTruthy();
    }); 
    it('has a cart icon at the rightSide of navbar after profile icon',()=>{
        expect(wrapper.find('.fa-cart-plus')).toBeTruthy();
    }); 
});