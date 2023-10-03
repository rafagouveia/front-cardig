import { Chip } from "@nextui-org/react";
import { DishGarnish } from "../../../utils/types";

export type SectionProductProps = {
  dishgarnish: DishGarnish;
  children?: React.ReactNode;
};

export default function SectionModalProduct({
  dishgarnish,
  children,
}: SectionProductProps) {
  const { name, mandatory } = dishgarnish;

  const getMaxValueAndMinValue = () => {

  }
  const moreThenOne = dishgarnish.maximum > 1
    return (
    <div>
      <div className="flex items-center justify-between bg-gray-100 px-5 py-2">
        <div>
          <h1 className="font-bold text-md text-zinc-700">{name}</h1>
          <div className="text-sm">Escolha {dishgarnish.maximum } { moreThenOne ? "opções" : "opção"} </div>
        </div>
        <div>
          {mandatory && (
            <Chip
              radius="sm"
              variant="shadow"
              color="danger"
              classNames={{ content: "text-tiny" }}
            >
              Obrigatório
            </Chip>
          )}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
