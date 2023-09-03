import { Button, Chip } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowRight, MdShoppingCart, MdDelete } from "react-icons/md";
import { toPlural } from "../../utils/commons-masks";
import { useCart } from "../../stores/Cart";
import { useNavigate } from "react-router-dom";

export default function CartButtonFloat() {
    const navigate = useNavigate();
    const cart = useCart(state => state.cart);
    const cleanCart = useCart(state => state.actions.cleanCart);
    const goToCart = () => {
        navigate("cart")
    }
    return (
        <AnimatePresence>
            {cart.length > 0 && (
                <motion.div initial={{ bottom: -100 }} exit={{ bottom: -100 }} animate={{ bottom: 0 }} className="fixed bottom-0 flex gap-2 justify-center w-full pb-5 z-[999]">
                    <Button onClick={goToCart} radius="md" size="lg" color="success" endContent={<MdKeyboardArrowRight size="1.5em" />}>
                        <Chip className="overflow-hidden" startContent={<motion.div initial={{ transform: "translateX(-100px)", rotate: 180 }} animate={{ transform: "translateX(0px)", rotate: 180, transition: { duration: 0.3, delay: 0.2 } }}>
                            <MdShoppingCart size="1.2em" />
                        </motion.div>} color="default" radius="sm">{cart.length} {toPlural(cart.length, "item", "itens")} no carrinho</Chip> Finalizar Pedido
                    </Button>
                    <Button onClick={cleanCart} startContent={<MdDelete size="1.2em" />} radius="md" size="lg" color="danger">
                        Limpar tudo
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}