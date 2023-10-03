import { Avatar } from "@nextui-org/react";
import {
  MdLocationPin,
  MdAccessAlarm,
  MdDeliveryDining
} from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { PiForkKnifeBold } from "react-icons/pi";
import { useStoreProfile } from "../../../stores/StoreProfile";
import { toMoney } from "../../../utils/commons-masks";
import ChipInfo from "../ChipInfo";
import StatusStore from "../StatusStore";


type HeaderConfig = {
  size: "sm" | "md" | "lg";
  textSize: "sm" | "md" | "lg";
};

const configChips: HeaderConfig = {
  size: "sm",
  textSize: "sm",
};

export default function StoreHeader() {
  const { name, location, image, is_open, waitTime, minimumOrder, local, delivery } =
    useStoreProfile((state) => state.storeProfile);

  return (
    <div className="bg-white -mt-28 rounded-[2rem] py-5 px-5 shadow-xl">
      <div className="space-y-5">
        <div className="flex gap-5">
          <Avatar
            src={image}
            showFallback
            classNames={{ base: "w-32 h-full rounded-3xl" }}
          />
          <div className="flex flex-col justify-center ">
            <h1 className="text-[1.3rem] font-bold text-zinc-700 leading-none">
              {name}
            </h1>
            <div className="text-sm flex gap-1 items-center text-zinc-700 whitespace-nowrap">
              <PiForkKnifeBold size="1.2em" />
              Restaurante & bar
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center flex-wrap text-sm gap-2">
            {location && (
              <ChipInfo
                startContent={
                  <MdLocationPin className="text-danger-400" size="1em" />
                }
                size={configChips.size}
              >
                {location}
              </ChipInfo>
            )}
            {local && (
              <ChipInfo
                startContent={
                  <MdLocationPin className="text-danger-400" size="1.2em" />
                }
                size={configChips.size}
              >
                Retirada
              </ChipInfo>
            )}
            {delivery && (
              <ChipInfo
                startContent={
                  <MdDeliveryDining className="text-danger-400" size="1.2em" />
                }
                size={configChips.size}
              >
                Delivery
              </ChipInfo>
            )}

            <ChipInfo
              startContent={<MdAccessAlarm size="1.2em" />}
              size={configChips.size}
            >
              {waitTime}
            </ChipInfo>
            {minimumOrder && (
              <ChipInfo
                startContent={<AiFillDollarCircle size="1.4em" />}
                size={configChips.size}
              >
                Minimo {toMoney(minimumOrder)}
              </ChipInfo>
            )}
            <StatusStore status={is_open} />
          </div>
        </div>
      </div>
    </div>
  );
}
