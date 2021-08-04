/*************************************************************************
* Purpose : to test the sortBooksHightoLow
*
* @file : sortBooksHightoLow.spec.js
* @author : Sai Tarun <saitarun800@gmail.com>
* @version : 1.0
* @since : 14/07/2021
*
**************************************************************************/
import sortBooksHightoLow from '../../src/components/sortBooksHightoLow.vue';
import { createLocalVue, shallowMount} from '@vue/test-utils'
describe('sortBooksHightoLow.vue', ()=>{
    let wrapper;
    let authorPrefix='by';
    let pricePrefix='Rs.';
    let defaultStrikePrice='(2000)';
    let buttonBag='Add to Bag';
    let buttonWishlist='wishlist';
    let buttonAddedBag='Added to Bag';
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(sortBooksHightoLow, localVue);  
    });
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
    it('renders a vue instance', () => {
        expect(shallowMount(sortBooksHightoLow).vm).toBeTruthy();
    })
     it('has a card display section',()=>{
        expect(wrapper.find('.card')).toBeTruthy();
    })
    it('has an image section',()=>{
        expect(wrapper.find('.image-section')).toBeTruthy();
    })
    it('has a title section',()=>{
        expect(wrapper.find('.title-section')).toBeTruthy();
    })
    it('has an author section',()=>{
        expect(wrapper.find('.author-section')).toBeTruthy();
    })
    it('Checks the content of a author prefix', () => {
        expect(wrapper.vm.authorPrefix).toMatch("by");
    });
    it('has a price section',()=>{
        expect(wrapper.find('.price-section')).toBeTruthy();
    })
    it('has a price content prefix',()=>{
        expect(wrapper.vm.pricePrefix).toBeTruthy();
    })
    it('has a default strike price',()=>{
        expect(wrapper.vm.defaultStrikePrice).toBeTruthy();
    })
    it('has a button',()=>{
        expect(wrapper.find('.btn-grp')).toBeTruthy();
    })
    it('has a Add to bag content matches',()=>{
        expect(wrapper.vm.buttonBag).toMatch('Add to Bag');
    })
    it('has a wishlist button matches',()=>{
        expect(wrapper.vm.buttonWishlist).toMatch('wishlist');
    })
    it('has a Added to Bag button matches',()=>{
        expect(wrapper.vm.buttonAddedBag).toMatch('Added to Bag');
    })
});