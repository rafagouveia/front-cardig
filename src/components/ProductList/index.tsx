import { ProductProps, useProduct } from "../../stores/Products";
import Product from "../Product";
import { CategoryProps } from "../../stores/Category";
import { ProductCategoryProps } from "@/stores/StoreProfile";

type ProductListProps = {
  category: ProductCategoryProps,
  products: ProductProps[];
};

export default function ProductList({ category, products }: ProductListProps) {
  return (
    <div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-4">
        {products
          .map((product) => (
            <Product key={product.name} product={product} />
          ))}
      </div>
    </div>
  );
}
