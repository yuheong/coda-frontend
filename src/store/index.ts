import type { Product } from "@/types/Product";
import { reactive } from "vue";
import products from "../api/mocks/products.json";

export const store = reactive({
  products: products.products,
  updateProduct(product: Product) {
    const pdtIndex = this.products.findIndex((pdt) => pdt.id === product.id);
    this.products[pdtIndex] = { ...product };
  },
});
