import { Button } from "@nextui-org/react";
import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

export default function ProductCounter() {
  const [quantity, setQuantity] = useState(1);
  const StartContent = () => (
    <Button className="text-md text-danger" variant="light" isIconOnly onClick={() => setQuantity(quantity - 1)}>
      <MdRemove />
    </Button>
  );
  const EndContent = () => (
    <Button className="text-md text-danger" variant="light" isIconOnly onClick={() => setQuantity(quantity + 1)}>
      <MdAdd />
    </Button>
  );
  return (
    <div>
      <div className="flex items-center border-3 rounded-xl">
        <div>
          <StartContent />
        </div>
        <div className="min-w-[50px]">
          <p className="font-bold text-lg text-center">{quantity}</p>
        </div>
        <div>
          <EndContent />
        </div>
      </div>
    </div>
  );
}
