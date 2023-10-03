import { Badge, Button } from "@nextui-org/react";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "../../stores/Cart";
import { useRouter } from "next/navigation";
import { toQuantity } from "../../utils/commons-masks";

export default function CartButton() {
    const navigate = useRouter();
    const cart = useCart(state => state.cart);
    const goToCart = () => {
        navigate.replace("/cart")
    }
    const quantity = toQuantity(cart)
    return (
        <div className="flex flex-col items-center">

            <div>
                <Badge content={quantity} isInvisible={!quantity ? true : false} shape="circle" color="primary">
                    <Button
                        radius="full"
                        isIconOnly
                        onClick={goToCart}
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