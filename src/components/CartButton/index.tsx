import { Badge, Button } from "@nextui-org/react";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "../../stores/Cart";

export default function CartButton() {
    const cart = useCart(state => state.cart);
    return (
        <div className="flex flex-col items-center">

            <div>
                <Badge content={cart.length} isInvisible={cart.length === 0} shape="circle" color="primary">
                    <Button
                        radius="full"
                        isIconOnly
                        aria-label="more than 99 notifications"
                        className="text-zinc-700"
                        variant="light"
                    >
                        <MdShoppingCart color="red" size="1.8em" />
                    </Button>
                </Badge>
            </div>
            <p className="text-zinc-700 font-bold text-sm">Carrinho</p>
        </div>
    )
}