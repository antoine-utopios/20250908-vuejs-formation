import { describe, it, expect } from "vitest"
import ReactiveComponent from '@/components/ReactiveComponent.vue'
import { mount } from "@vue/test-utils"

const thumbnainImgSelector = 'img[data-test="thumbnail-img"]';
const visibilityBtnSelector = 'button[data-test="visibility-btn"]'
const secretDivSelector = 'div[data-test="secret-div"]'
const maskDivSelector = 'div[data-test="mask-div"]'

describe('ReactiveComponent', () => {
  it('should have a <h3> element', () => {
    const wrapper = mount(ReactiveComponent);

    expect(wrapper.find('h3').exists()).toBe(true);
  })

  it('should have a thumbnail image', () => {
    const wrapper = mount(ReactiveComponent);
    const imgFound = wrapper.find<HTMLImageElement>(thumbnainImgSelector);

    expect(imgFound.exists()).toBe(true);
  })

  it('should have a thumbnail image with correct alt', () => {
    const wrapper = mount(ReactiveComponent);
    const imgFound = wrapper.find<HTMLImageElement>(thumbnainImgSelector);

    expect(imgFound.element?.alt).toEqual('Banana');
  })

  it('should not display the secret div', () => {
    const wrapper = mount(ReactiveComponent);
    const maskDivElement = wrapper.find(maskDivSelector);
    const secretDivElement = wrapper.find(secretDivSelector);

    expect(maskDivElement.exists()).toBe(true);
    expect(secretDivElement.exists()).toBe(false);
  })

  it('should switch display of secret div when pressing the button', async () => {
    const wrapper = mount(ReactiveComponent);
    const visibilityBtnElement = wrapper.find(visibilityBtnSelector);

    await visibilityBtnElement.trigger('click');

    const secretDivElement = wrapper.find(secretDivSelector);
    expect(secretDivElement.exists()).toBe(true);
    expect(secretDivElement.text()).toContain('Je suis le secret');
  })
})