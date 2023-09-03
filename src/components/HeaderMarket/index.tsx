import { Avatar, Chip } from "@nextui-org/react";
import CartButton from "../CartButton";

export default function HeaderMarket() {
  return (
    <div className="bg-white -mt-28  rounded-[2rem] py-10 px-5 shadow-xl">
      <div className="flex">
        <div className="flex flex-1 gap-4 items-center">
          <Avatar
            src="https://i.imgur.com/bqsz2Ut.png"
            showFallback
            className="w-32 h-32"
          />
          <div>
            <span>
              <h1 className="text-2xl font-bold text-zinc-700">
                Restaurante Filiado
              </h1>
            </span>
            <span className=" text-zinc-700">rua fulano de tal</span>
            <div className="mt-2">
              <Chip variant="dot" color="success" radius="sm">
                Aberto agora
              </Chip>
            </div>
          </div>
        </div>
        <div className="">
          <CartButton />
        </div>
      </div>
    </div>
  )
}