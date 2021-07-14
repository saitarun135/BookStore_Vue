/*************************************************************************
* Purpose : to test the Cart
*
* @file : cart.spec.js
* @author : Sai Tarun <saitarun800@gmail.com>
* @version : 1.0
* @since : 14/07/2021
*
**************************************************************************/
import Cart from '../../src/components/Cart.vue';
import { createLocalVue, shallowMount} from '@vue/test-utils'
describe('Cart.vue', ()=>{
    let wrapper;
    let cart='MyCart';
    let nameField = 'Name';
    let  phoneField = 'Phone Number';
    let  pincodeField = 'PinCode';
    let  AddressField = 'Address';
    let cityField = 'CityTown';
    let landmarkField = 'LandMark';
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Cart, localVue);  
    });
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
    it('renders a vue instance', () => {
        expect(shallowMount(Cart).vm).toBeTruthy();
    })
    it('Checks the content of a mycart', () => {
        expect(wrapper.vm.cart).toMatch("MyCart");
    });
    it('has a image  at the top',()=>{
        expect(wrapper.find('.image-section')).toBeTruthy();
    }); 
    it('has a title-section',()=>{
        expect(wrapper.find('.title-section')).toBeTruthy();
    }); 
    it('has a author name',()=>{
        expect(wrapper.find('.author-name')).toBeTruthy();
    }); 
    it('has a price section',()=>{
        expect(wrapper.find('.price-section')).toBeTruthy();
    }); 
    it('has a minus icon',()=>{
        expect(wrapper.find('.fa-minus-circle')).toBeTruthy();
    }); 
    it('has a plus icon',()=>{
        expect(wrapper.find('.fa-plus-circle')).toBeTruthy();
    }); 
    it('has a rectangle section ',()=>{
        expect(wrapper.find('.rectangle')).toBeTruthy();
    }); 
    it('has a button section of place order',()=>{
        expect(wrapper.find('.initial-btn')).toBeTruthy();
    });  
    it('has a form for filling address of a customer',()=>{
        expect(wrapper.find('.address')).toBeTruthy();
    }); 
    it('has a label of name field matches the content',()=>{
        expect(wrapper.vm.nameField).toMatch('Name');
    });
    it('has a label of Name field',()=>{
        expect(wrapper.find('.label')).toBeTruthy();
    }); 
    it('has a label ofphone number field matches the content',()=>{
        expect(wrapper.vm.phoneField).toMatch('Phone Number');
    });
    it('has a label of phonenumber field',()=>{
        expect(wrapper.find('.label')).toBeTruthy();
    }); 
    it('has a label of postal-code field matches the content',()=>{
        expect(wrapper.vm.pincodeField).toMatch('PinCode');
    });
    it('has a label of zipcode  field',()=>{
        expect(wrapper.find('.label')).toBeTruthy();
    }); 
    it('has a label of address field matches the content',()=>{
        expect(wrapper.vm.AddressField).toMatch('Address');
    });
    it('has a label of address field',()=>{
        expect(wrapper.find('.label')).toBeTruthy();
    }); 
    it('has a label of city field matches the content',()=>{
        expect(wrapper.vm.cityField).toMatch('CityTown');
    });
    it('has a label of city/Town field',()=>{
        expect(wrapper.find('.label')).toBeTruthy();
    }); 
    it('has a label of landmark field matches the content',()=>{
        expect(wrapper.vm.landmarkField).toMatch('LandMark');
    });
    it('has a label oflandmark field',()=>{
        expect(wrapper.find('.label')).toBeTruthy();
    }); 
    it('has a label of home radio button field',()=>{
        expect(wrapper.find('.home')).toBeTruthy();
    }); 
    it('has a label of home radio button field',()=>{
        expect(wrapper.find('.home')).toBeTruthy();
    }); 
    it('has a label of work radio button field',()=>{
        expect(wrapper.find('.work-label')).toBeTruthy();
    }); 
    it('has a label of Other radio button field',()=>{
        expect(wrapper.find('.other-label')).toBeTruthy();
    }); 
    it('has a button for continue ',()=>{
        expect(wrapper.find('.continue')).toBeTruthy();
    }); 
        
});