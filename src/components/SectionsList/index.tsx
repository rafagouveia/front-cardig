import { useCategory } from "../../stores/Category";
import ProductList from "../ProductList";
import Section from "../Section";

export default function SectionList() {
    const categories = useCategory(state => state.categories);
    return (
        <>
            {categories.map((category) => (
                <Section key={category.id} name={category.name}>
                    <ProductList key={category.id} category={category} />
                </Section>
            ))}
        </>
    )
}