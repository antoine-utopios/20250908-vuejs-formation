import type { InjectionKey, Ref } from "vue";

export const myTextKey: InjectionKey<Ref<string, string>> = Symbol('myText')