import { Input } from "@nextui-org/react";
import { MdSearch } from "react-icons/md";
import CategoryScroller from "../Category";
import SectionList from "../SectionsList";
import CartButtonFloat from "../CartButtonFloat";

export default function ContentHome() {
  return (
    <>
      <div className="mt-10">
        <Input
          variant="bordered"
          color="default"
          size="lg"
          endContent={<MdSearch size={"1.2em"} />}
          classNames={{
            inputWrapper:
              "bg-white border-zinc-300 border-3 hover:border-zinc-300",
            input: "h-32 ",
          }}
        />
      </div>
      <div className="mt-10">
        <CategoryScroller />
      </div>
      <div className="mt-10">
        <SectionList />
      </div>
      <div className="mt-10 w-[200px]">
        <CartButtonFloat />
      </div>
    </>
  );
}
