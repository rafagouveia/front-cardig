import { Badge, Button } from "@nextui-org/react";
import { MdArrowDropDown, MdPerson, MdShoppingCart } from "react-icons/md";
import Link from "next/link";
import { useCart } from "../../../stores/Cart";

export default function HeaderSite() {
  const cart = useCart((state) => state.cart);

  return (
    <div className="px-10 py-5 sticky top-0 z-50 backdrop-blur-sm bg-white/10">
      <div className="container mx-auto flex items-center flex-wrap">
        <div className="order-first">
          <h1 className="text-4xl font-bold">Cardig</h1>
        </div>
        <div className="flex flex-1 order-2 justify-between ">
          <div className="pl-5 text-sm">
            <p>Entregar em</p>
            <div>
              <Link href="dasda">
                <div className="flex">
                  <strong>Av. Bento Gonçalves 2</strong>
                  <MdArrowDropDown size="1.4em" />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex  order-2 gap-2">
            <Link href={"/cart"}>
              <Button
                isIconOnly
                startContent={
                  (cart.length > 0 && (
                    <Badge content={cart.length} color="danger" variant="solid">
                      <MdShoppingCart size="1.4em" />
                    </Badge>
                  )) || <MdShoppingCart size="1.4em" />
                }
              />
            </Link>
            <Button startContent={<MdPerson size="1.4em" />}>Entrar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
