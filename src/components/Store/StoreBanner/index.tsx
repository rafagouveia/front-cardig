import { Button } from "@nextui-org/react";
import { MdShoppingCart } from "react-icons/md";

export default function StoreBanner() {
    return (
        <div className="h-80 bg-slate-500 bg-[url('https://i.imgur.com/mQ1dLlv.png')] bg-contain rounded-b-[2rem] shadow-xl">
        <Button
          isIconOnly
          variant="shadow"
          className="absolute right-5 top-5 backdrop-blur-sm bg-white/30 p-3 rounded-full"
        >
          <MdShoppingCart color="white" size="1.5em" />
        </Button>
      </div>
    )
}