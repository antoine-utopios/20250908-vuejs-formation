<script setup lang="ts">
import { provide, reactive, ref } from 'vue';
import type { ProductItem } from './models/product-item.model';
import type { ProductContext } from './contexts/product-context';
import { productStoreKey } from './keys';
import { v4 as uuid } from 'uuid';

  const products = ref<ProductItem[]>([
    {
      id: uuid(),
      name: "Banana",
      price: 1.29,
      description: 'Super fruit!',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1162px-Banana-Single.jpg'
    }
  ])

  const getProductById = (productId: string) => products.value.find(x => x.id === productId);

  const addNewProduct = (newProduct: ProductItem) => {
    products.value.push(newProduct);
    return true;
  };

  const updateProductById = (productId: string, newProductData: ProductItem) => {
    const found = products.value.find(x => x.id === productId);
    if (!found) return false;
    
    found.description = newProductData.description;
    found.name = newProductData.name;
    found.pictureUrl = newProductData.pictureUrl;
    found.price = newProductData.price;
    
    return true;
  }
  
  const deleteProductById = (productId: string) => {
    if (!products.value.find(x => x.id === productId)) return false;

    products.value = products.value.filter(x => x.id !== productId);
    return true;
  };

  const productsStore: ProductContext = reactive({
    products,
    getProductById,
    addNewProduct,
    updateProductById,
    deleteProductById    
  });

  provide(productStoreKey, productsStore);
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
