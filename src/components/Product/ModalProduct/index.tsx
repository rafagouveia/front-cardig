import {
  Button, Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader, Radio,
  RadioGroup,
  Spinner
} from "@nextui-org/react";
import { MdChevronLeft, MdShoppingCart } from "react-icons/md";
import { ProductProps } from "../../../stores/Products";
import SectionModalProduct from "./Dishgarnish";
import ProductCounter from "../ProductCounter/indext";
import { getAProduct } from "../../../services/product-services";
import { useEffect, useState } from "react";

export default function ModalProduct({
  isOpen,
  setModal,
  product,
}: {
  isOpen: boolean;
  setModal: (param: boolean) => void;
  product: ProductProps;
}) {
  const [{ dish_garnishs, ...productInfo}, setProductInfo] = useState<ProductProps>(product);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = () => setModal(false);

  const fetchProduct = async () => {
    setLoading(true);
    const data = await getAProduct(product.id!);
    setProductInfo(data);
    setLoading(false);
  };

  const RenderModalContent = () => (
    <>
      <ModalHeader>
        <div className="flex items-center gap-5">
          <Button onClick={closeModal} isIconOnly variant="light" size="lg">
            <MdChevronLeft size="2em" className="text-danger" />
          </Button>
          <h1 className="text-xl font-semibold text-zinc-700">
            {productInfo.name}
          </h1>
        </div>
      </ModalHeader>
      <ModalBody className="p-0">
        <Image
          radius="none"
          removeWrapper
          alt="Relaxing app background"
          src={product.image}
          className="h-[30vh] bg-red-300 w-full object-cover"
        />
        <div>
          {!!dish_garnishs && dish_garnishs.map((garnish) => (
            <SectionModalProduct key={garnish.name} dishgarnish={garnish}>
              <RadioGroup defaultValue="1" size="lg" color="danger">
               {garnish.dish_garnish_choices.map((choice) => (
                 <Radio value={choice.id} key={choice.id}>
                   {choice.name}
                 </Radio>
               ))}

              </RadioGroup>
            </SectionModalProduct>
          ))}
        </div>
      </ModalBody>
      <ModalFooter className="items-center gap-5">
        <ProductCounter />
        <Button
          variant="shadow"
          startContent={<MdShoppingCart size="1.2em" />}
          color="danger"
          onClick={closeModal}
        >
          Adicionar ao carrinho
        </Button>
      </ModalFooter>
    </>
  );
  return (
    <Modal
      size="5xl"
      placement="center"
      scrollBehavior="inside"
      isOpen={isOpen}
      hideCloseButton
    >
      <ModalContent>
        {loading ? (
          <Spinner className="p-10" color="danger" />
        ) : (
          RenderModalContent()
        )}
      </ModalContent>
    </Modal>
  );
}
