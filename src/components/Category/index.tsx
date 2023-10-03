import { Button, ScrollShadow } from "@nextui-org/react";
import Section from "../Section";
import { useStoreProfile } from "../../stores/StoreProfile";

export default function CategoryScroller() {
  const { product_categories } = useStoreProfile((state) => state.storeProfile);
  return (
    <Section name="Categorias">
      <ScrollShadow hideScrollBar offset={100} orientation="horizontal">
        <div className="flex gap-2">
          {product_categories &&
            product_categories.map((category) => (
              <Button
                key={category.id}
                variant="solid"
                className="font-semibold"
              >
                {category.name}
              </Button>
            ))}
        </div>
      </ScrollShadow>
    </Section>
  );
}
