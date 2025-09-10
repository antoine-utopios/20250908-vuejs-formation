import { describe, it, expect, vi } from "vitest"
import OtherReactiveComponent from '@/components/OtherReactiveComponent.vue'
import { mount } from "@vue/test-utils"

const visibilityBtnSelector = 'button[data-test="visibility-btn"]'

describe('OtherReactiveComponent', () => {
  it('should call switchVisibility() when clicking the button', async () => {
    const wrapper = mount(OtherReactiveComponent);
    const spy = vi.spyOn(wrapper.vm, 'switchVisibility');
    const visibilityButtonElement = wrapper.get(visibilityBtnSelector);

    await visibilityButtonElement.trigger('click');

    expect(spy).toHaveBeenCalledTimes(1);
  })
})