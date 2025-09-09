import type { InjectionKey, Reactive } from "vue";
import type { ProductContext } from "./contexts/product-context";

export const productStoreKey: InjectionKey<Reactive<ProductContext>> = Symbol('productStoreKey'); 