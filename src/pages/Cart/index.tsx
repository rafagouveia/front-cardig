import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Input,
} from "@nextui-org/react";
import { useCart } from "../../stores/Cart";
import { toMoney } from "../../utils/commons-masks";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const cart = useCart((state) => state.cart);
  const TotalPedido = cart.reduce((acc, item) => acc + item.price, 0);

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
        <div className="grid gap-5 grid-cols-5 col-span-1">
          {cart.map((item) => {
            return (
              <Card
                shadow="sm"
                key={item.id}
                className=""
                isPressable
                onPress={() => console.log("item pressed")}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover  h-[140px]"
                    src={item.image}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.price}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="grid gap-5">
          <div className="">
            <label htmlFor="cupom">Tem cupom</label>
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
                Subtotal do pedido {toMoney(TotalPedido)}
              </span>
            </div>
            <Divider />
            <div>
              <span className="font-bold text-lg text-zinc-700">
                Total do pedido {toMoney(TotalPedido)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
