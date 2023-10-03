import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import { GiKnifeFork } from "react-icons/gi";
import { MdOutlineShoppingBag, MdSportsMotorsports } from "react-icons/md";
import Link from "next/link";
import { StoreProfileProps } from "../../../stores/StoreProfile";


type StoreCardProps = {
  store: StoreProfileProps;
};
const toURL = (name: string) => {
 return name.replace(" ", "-").replace(/[^\w-]+/g, "").toLowerCase();
}
export default function StoreCard({ store }: StoreCardProps) {
  console.log(store)
  return (

      <Card
        isPressable

        isDisabled={!store.is_open}
        as={Link}
        href={`/store/${store.slug}`}
        className="min-w-[250px] h-[200px] overflow-hidden shadow-none"
      >
        <CardHeader className="absolute  backdrop-blur-sm bg-white h-0 py-4">
          <h3 className="text-current font-medium text-sm">{store.name}</h3>
        </CardHeader>
        <Image
          radius="lg"
          isZoomed
          removeWrapper
          src={store.image}
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
        />
        <CardFooter className="absolute bottom-0 bg-white h-0 py-4">
          <div className="flex w-full justify-between">
            <div className="flex items-center">
              {store.rating && (
                <>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ml-2 text-tiny font-bold"></p>
                </>
              )}
            </div>
            <div className="flex items-center gap-1 text-tiny ">
              {store.on_the_table && <GiKnifeFork size="1em" />}
              {store.pickup && <MdOutlineShoppingBag size="1em" />}
              {store.delivery && <MdSportsMotorsports size="1em" />}
            </div>
          </div>
        </CardFooter>
      </Card>
  );
}
