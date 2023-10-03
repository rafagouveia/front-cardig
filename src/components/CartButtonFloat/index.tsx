import { Button, Chip } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowRight, MdShoppingCart, MdDelete } from "react-icons/md";
import { toPlural, toQuantity } from "../../utils/commons-masks";
import { useCart } from "../../stores/Cart";
import { useRouter } from "next/navigation";

export default function CartButtonFloat() {
  const navigate = useRouter();
  const cart = useCart((state) => state.cart);
  const cleanCart = useCart((state) => state.actions.cleanCart);
  
  const goToCart = () => {
    navigate.replace("cart");
  };

  const quantity = toQuantity(cart);

  return (
    <AnimatePresence>
      {quantity > 0 && (
        <motion.div
          initial={{ bottom: -100 }}
          exit={{ bottom: -100 }}
          animate={{ bottom: 30 }}
          className="fixed bottom-0 left-0 right-0 flex gap-2 justify-center z-[999]"
        >
          <Button
            onClick={goToCart}
            radius="md"
            size="lg"
            color="success"
            variant="shadow"
            endContent={<MdKeyboardArrowRight size="1.5em" />}
          >
            <Chip
              className="overflow-hidden"
              startContent={
                <motion.div
                  initial={{ transform: "translateX(-100px)", rotate: 180 }}
                  animate={{
                    transform: "translateX(0px)",
                    rotate: 180,
                    transition: { duration: 0.3, delay: 0.2 },
                  }}
                >
                  <MdShoppingCart size="1.2em" />
                </motion.div>
              }
              color="default"
              radius="sm"
            >
              {quantity} {toPlural(cart.length, "item", "itens")} no carrinho
            </Chip>{" "}
            Finalizar Pedido
          </Button>
          <Button
            onClick={cleanCart}
            startContent={<MdDelete size="1.2em" />}
            radius="md"
            size="lg"
            variant="shadow"
            color="danger"
          >
            Limpar tudo
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
