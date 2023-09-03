import { Avatar, Chip } from "@nextui-org/react";
import CartButton from "../CartButton";
import StatusStore from "../Store/StatusStore";
import {
  MdAccessAlarm,
  MdDeliveryDining,
  MdLocationPin
} from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useStoreProfile } from "../../stores/StoreProfile";
import { toMoney } from "../../utils/commons-masks";



export default function HeaderStore() {
  const { name, location, image, opened, waitTime, minimal, local, delivery } = useStoreProfile(state => state.storeProfile);
  return (
    <div className="bg-white -mt-28  rounded-[2rem] py-10 px-5 shadow-xl">
      <div className="flex">
        <div className="flex flex-1 gap-4 items-center">
          <Avatar
            src={image}
            showFallback
            className="w-32 h-32 rounded-3xl"
          />
          <div>
            <span>
              <h1 className="text-2xl font-bold text-zinc-700">
                {name}
              </h1>
            </span>
            <div className="flex items-center flex-wrap text-sm gap-2">
              {location && (
                <Chip
                  variant="dot"
                  startContent={
                    <MdLocationPin className="text-danger-400" size="1.2em" />
                  }
                  color="success"
                  size="md"
                  radius="sm"
                >
                  {location}
                </Chip>
              )}
              {local && (
                <Chip
                  variant="dot"
                  startContent={
                    <MdLocationPin className="text-danger-400" size="1.2em" />
                  }
                  color="success"
                  size="md"
                  radius="sm"
                >
                  Retirada
                </Chip>
              )}
              {delivery && (
                <Chip
                  variant="dot"
                  startContent={
                    <MdDeliveryDining className="text-danger-400" size="1.2em" />
                  }
                  color="success"
                  size="md"
                  radius="sm"
                >
                  Delivery
                </Chip>
              )}
            </div>
            <div className="flex item-center flex-wrap gap-2 mt-2">
              <Chip
                variant="dot"
                startContent={<MdAccessAlarm size="1.2em" />}
                color="success"
                size="md"
                radius="sm"
              >
                {waitTime}
              </Chip>
              {minimal && (
                <Chip
                  variant="dot"
                  startContent={<RiMoneyDollarCircleLine size="1.4em" />}
                  color="success"
                  size="md"
                  radius="sm"
                >
                  Minimo {toMoney(minimal)}
                </Chip>

              )}
              <StatusStore status={opened} />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <CartButton />
        </div>
      </div>
    </div>
  );
}
