import { useStore } from "zustand";
import { useCategory } from "../../stores/Category";
import ProductList from "../ProductList";
import Section from "../Section";
import { useStoreProfile } from "../../stores/StoreProfile";

export default function SectionList() {
    const {product_categories} = useStoreProfile(state => state.storeProfile);
    return (
        <>
            {product_categories && product_categories.map((category) => (
                <Section key={category.id} name={category.name}>
                    <ProductList key={category.id} category={category} products={category.products} />
                </Section>
            ))}
        </>
    )
}