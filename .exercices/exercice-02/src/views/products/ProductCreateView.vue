<script setup lang="ts">
import type { ProductItem } from '@/models/product-item.model';
import { inject, ref, watch } from 'vue';
import { v4 as uuid } from 'uuid';
import { productStoreKey } from '@/keys';
import { useRouter } from 'vue-router';

    const router = useRouter();

    const { addNewProduct } = inject(productStoreKey)!;

    const productName = ref<string>('');
    const productNameTouched = ref(false);
    const productNameValid = ref(false);

    watch(productName, (newValue) => {
        productNameTouched.value = true;
        productNameValid.value = !!newValue.trim();
    })

    const productDescription = ref<string>('');
    const productPictureUrl = ref<string>('');
    const productPrice = ref<number>(0);

    const submitFormHandler = () => {
        const newProduct: ProductItem = {
            id: uuid(),
            price: productPrice.value,
            name: productName.value,
            description: productDescription.value,
            pictureUrl: productPictureUrl.value
        };

        if (addNewProduct(newProduct)) {
            router.push('/products')
        } else {
            alert('Problème lors de l\'ajout du produit!');
        }
    }
</script>

<template>
    <h1>Add a new product</h1>
    <hr>
    <form @submit.prevent="submitFormHandler">
        <div>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" v-model="productName" required>
            <span v-if="productNameTouched && !productNameValid">Product name is not valid</span>
        </div>
        <div>
            <label for="description">Description: </label>
            <textarea name="description" id="description" v-model="productDescription" required></textarea>
        </div>
        <div>
            <label for="price">Price: </label>
            <input type="number" step="0.01" min="0.00" id="price" name="price" v-model="productPrice" required>
        </div>
        <div>
            <label for="pictureUrl">Picture Url: </label>
            <input type="text" id="pictureUrl" name="pictureUrl" v-model="productPictureUrl" required>
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
</template>