import type { ProductItem } from "@/models/product-item.model";

export interface ProductContext {
    products: ProductItem[];
    getProductById: (productId: string) => ProductItem | undefined;
    deleteProductById: (productId: string) => boolean;
    updateProductById: (productId: string, newProductData: ProductItem) => boolean;
    addNewProduct: (newProduct: ProductItem) => boolean;
}