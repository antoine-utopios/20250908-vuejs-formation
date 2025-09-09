<script setup lang="ts">
import type { ProductItem } from '@/models/product-item.model';
import { inject, ref, watch } from 'vue';
import { v4 as uuid } from 'uuid';
import { productStoreKey } from '@/keys';
import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();

    const { getProductById, addNewProduct, deleteProductById, updateProductById } = inject(productStoreKey)!;

    const productId = route.params.productId as string;
    const mode = route.query.mode as string;
    const formattedMode = mode.substring(0, 1).toUpperCase() + mode.substring(1).toLowerCase();

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

    const productFound = getProductById(productId);

    if (productFound) {
        productName.value = productFound.name;
        productPrice.value = productFound.price;
        productDescription.value = productFound.description;
        productPictureUrl.value = productFound.pictureUrl;
    }

    const submitFormHandler = () => {
        const newProduct: ProductItem = {
            id: uuid(),
            price: productPrice.value,
            name: productName.value,
            description: productDescription.value,
            pictureUrl: productPictureUrl.value
        };

        if (mode === 'add') {
            if (addNewProduct(newProduct)) {
                router.push('/products')
            } else {
                alert('Problème lors de l\'ajout du produit!');
            }
        } else if (mode === 'delete') {
            if (deleteProductById(productId)) {
                router.push('/products')
            } else {
                alert('Problème lors de la suppression du produit!');
            }
        } else if (mode === 'edit') {
            if (updateProductById(productId, newProduct)) {
                router.push('/products')
            } else {
                alert('Problème lors de l\'édition du produit!');
            }
        } else {
            router.push('/products')
        }

    }
</script>

<template>
    <h1>{{ formattedMode }} a product</h1>
    <hr>
    <form @submit.prevent="submitFormHandler">
        <div>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" v-model="productName" v-bind="{ required: mode === 'add' || mode === 'edit', readonly: mode === 'view' || mode === 'delete'}">
            <span v-if="productNameTouched && !productNameValid">Product name is not valid</span>
        </div>
        <div>
            <label for="description">Description: </label>
            <textarea name="description" id="description" v-model="productDescription" v-bind="{ required: mode === 'add' || mode === 'edit', readonly: mode === 'view' || mode === 'delete'}"></textarea>
        </div>
        <div>
            <label for="price">Price: </label>
            <input type="number" step="0.01" min="0.00" id="price" name="price" v-model="productPrice" v-bind="{ required: mode === 'add' || mode === 'edit', readonly: mode === 'view' || mode === 'delete'}">
        </div>
        <div>
            <label for="pictureUrl">Picture Url: </label>
            <input type="text" id="pictureUrl" name="pictureUrl" v-model="productPictureUrl" v-bind="{ required: mode === 'add' || mode === 'edit', readonly: mode === 'view' || mode === 'delete'}">
        </div>
        <div>
            <button v-if="mode !== 'view'">{{ formattedMode }}</button>
            <RouterLink to="/products">Back to Link</RouterLink>
        </div>
    </form>
</template>