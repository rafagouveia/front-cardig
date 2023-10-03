"use client";
import { MdSearch } from "react-icons/md";
import { Input } from "@nextui-org/react";
import PageContainer from "../../components/PageContainer";
import HeaderSite from "../../components/HomeSite/HeaderSite";
import { useEffect } from "react";
import FooterSite from "../../components/HomeSite/FooterSite";
import Section from "../../components/Section";
import StoreCard from "../../components/Store/StoreCard";
import { getAllStores } from "../../services/list-restaurants";
import { useCategory } from "../../stores/Category";
import { StoreProfileProps } from "@/stores/StoreProfile";

export default function Home() {
  const categories = useCategory((state) => state.categories);

  useEffect(() => {
    getAllStores();
  }, []);

  return (
    <>
      <HeaderSite />
      <div className="pb-20 container mx-auto h-full">
        <Input
          variant="bordered"
          color="default"
          size="lg"
          endContent={<MdSearch size={"1.2em"} />}
        />
        {!!categories &&
          categories.map((category) => (
            <Section key={category.id} name={category.name}>
              <div className="flex gap-4 overflow-x-auto p-2 scrollbar-hide scroll-smooth">
                {category.store.map((store) => (
                  <StoreCard key={category.id} store={store as StoreProfileProps} />
                ))}
              </div>
            </Section>
          ))}
      </div>
    </>
  );
}
