import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { v4 as uuid } from "uuid";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const productCount = computed(() => products.value.length);
  const addProduct = (newProduct: Omit<Product, 'id'>) => {
    products.value.push({
      id: uuid(),
      ...newProduct
    })
  }

  return { products, productCount, addProduct }
});