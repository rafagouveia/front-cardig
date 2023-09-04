import { useProduct } from "../../stores/Products";
import Product from "../Product";
import { CategoryProps } from "../../stores/Category";

type ProductListProps = {
    category: CategoryProps;
}


export default function ProductList({ category }: ProductListProps) {
    const products = useProduct(state => state.products);
    return (
        <div>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-4">
                {products.filter((product) => product.category === category.id).map((product) => (
                    <Product key={product.title} product={product} />
                ))}
            </div>
        </div>
    )
}