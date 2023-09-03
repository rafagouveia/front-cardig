import { Button, ScrollShadow } from "@nextui-org/react";
import Section from "../Section";
import { useCategory } from "../../stores/Category";

export default function CategoryScroller() {
    const categories = useCategory(state => state.categories);
    return (
        <Section name="Categorias">
            <ScrollShadow hideScrollBar offset={100} orientation="horizontal">
                <div className="flex gap-2">
                    {categories.map((category) => (
                        <Button key={category.id} variant="solid" className="font-semibold">{category.name}</Button>
                    ))}
                </div>
            </ScrollShadow>
        </Section>
    )
}