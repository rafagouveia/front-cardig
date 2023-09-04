import {
  Button,
  Card,
  CardBody,
  Divider,
  Image,
  Input,
} from "@nextui-org/react";
import { useCart } from "../../stores/Cart";
import { toAmount, toMoney } from "../../utils/commons-masks";
import {
  MdAdd,
  MdDeliveryDining,
  MdKeyboardArrowLeft,
  MdRemove,
  MdRunCircle,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useStoreProfile } from "../../stores/StoreProfile";

export default function Cart() {
  const navigate = useNavigate();
  const cart = useCart((state) => state.cart);
  const frete = useStoreProfile((state) => state.storeProfile.frete);
  const { deleteItem, addToCart } = useCart((state) => state.actions);
  const totalAmount = toAmount(cart);
  const goToCardapio = () => {
    navigate("/");
  };

  return (
    <>
      <Button
        startContent={<MdKeyboardArrowLeft size="1.2em" />}
        className="mt-5"
        onClick={goToCardapio}
      >
        Voltar pro cardapio
      </Button>
      <div className="mt-5 bg-white h-full rounded-3xl shadow-xl space-y-5 p-5 ">
        <div className="grid gap-5 grid-cols-1">
          {cart.map((item, index) => {
            return (
              <div className="flex items-center gap-5">
                <div className="flex px-5">
                  <div className="flex flex-col items-center gap-4">
                    <Button
                      onClick={() => addToCart(item)}
                      isIconOnly
                      startContent={<MdAdd />}
                    />
                    {item.quantity}
                    <Button
                      onClick={() => deleteItem(index)}
                      isIconOnly
                      startContent={<MdRemove />}
                    />
                  </div>
                </div>
                <Card
                  shadow="sm"
                  key={item.id}
                  className="w-[170px]"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardBody className="overflow-visible p-5">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={item.title}
                      className="w-full object-cover h-[140px]"
                      src={item.image}
                    />
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="grid gap-5">
          <div className="">
            <label htmlFor="cupom">Tem cupom?</label>
            <Input
              id="cupom"
              name="cupom"
              placeholder="Cupom"
              label="Cupom de desconto"
            />
          </div>
          <div className="rounded-xl bg-default-200 p-5">
            <div>
              <span className="font-bold text-lg text-zinc-700">
                Subtotal do pedido {toMoney(totalAmount)}
              </span>
            </div>
            <div>
              <span className="font-bold text-lg text-zinc-700">
                Frete {toMoney(frete)}
              </span>
            </div>
            <Divider />
            <div>
              <span className="font-bold text-lg text-zinc-700">
                Total do pedido {toMoney(totalAmount + frete)}
              </span>
            </div>
          </div>
          <Button
            startContent={<MdDeliveryDining size="2em" />}
            size="lg"
            isDisabled={cart.length === 0}
            className="text-zinc-800 font-bold"
            color="success"
            variant="shadow"
          >
            Pedir pra entrega
          </Button>
          <Button
            className="text-zinc-800 font-bold"
            startContent={<MdRunCircle size="2em" />}
            size="lg"
            isDisabled={cart.length === 0}
            color="warning"
            variant="shadow"
          >
            Retirar no Local
          </Button>
        </div>
      </div>
    </>
  );
}
