<script setup lang="ts">
import { productStoreKey } from '@/keys';
import type { ProductItem } from '@/models/product-item.model';
import { inject, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

    const { getProductById, updateProductById } = inject(productStoreKey)!;

    const route = useRoute();
    const router = useRouter();

    const productId = route.params.productId as string;

    const productFound = getProductById(productId) 

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

    if (productFound) {
        productName.value = productFound.name;
        productPrice.value = productFound.price;
        productDescription.value = productFound.description;
        productPictureUrl.value = productFound.pictureUrl;
    }

    const submitFormHandler = () => {
        const newProduct: ProductItem = {
            id: productId,
            price: productPrice.value,
            name: productName.value,
            description: productDescription.value,
            pictureUrl: productPictureUrl.value
        };

        if (updateProductById(productId, newProduct)) {
            router.push('/products')
        } else {
            alert('Problème lors de l\'édition du produit!');
        }
    };
</script>

<template>
    <div v-if="productFound">
        <h1>Edit a new product</h1>
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
                <button>Edit</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .img-thumbnail {
        height: 250px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }
</style>