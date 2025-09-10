import { describe, it, expect } from "vitest"
import PropsEmitsComponent from '@/components/PropsEmitsComponent.vue'
import { mount, shallowMount } from "@vue/test-utils"

const productDisplaySelector = 'div[data-test="product-display"]';
const productDeleteSelector = 'button[data-test="product-delete-btn"]'

describe('ReactiveComponent', () => {
  it('should render', () => {
    const wrapper = mount(PropsEmitsComponent)
    expect(wrapper.exists()).toBe(true);
  })

  it('should have the correct <h3>', () => {
    const wrapper = mount(PropsEmitsComponent)
    const h3Element = wrapper.find('h3');

    expect(h3Element.exists()).toBe(true);
    expect(h3Element.text()).toContain('Props and Emits Component');
  })

  it('should render the correct display with the props', () => {
    const wrapper = shallowMount(PropsEmitsComponent, {
      props: {
        productId: 25
      }
    });

    const productDisplayDiv = wrapper.find(productDisplaySelector);

    expect(productDisplayDiv.text()).toContain('25')
  })

  it('should emit the correct event when clicking the button', async () => {
    const wrapper = shallowMount(PropsEmitsComponent, {
      props: {
        productId: 25
      }
    });

    const productDeleteBtnElement = wrapper.find(productDeleteSelector);

    await productDeleteBtnElement.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('deleteProduct')

    // const eventEmitted = wrapper.emitted('deleteProduct')
    // expect(eventEmitted).toHaveLength(1);

  })

  it('should emit the correct event with the correct parameter', async () => {
    const wrapper = shallowMount(PropsEmitsComponent, {
      props: {
        productId: 23
      }
    });

    const productDeleteBtnElement = wrapper.find(productDeleteSelector);

    await productDeleteBtnElement.trigger('click');

    const eventEmitted = wrapper.emitted('deleteProduct') as Event[];
    expect(eventEmitted[0]).toEqual([23]);

  })
})