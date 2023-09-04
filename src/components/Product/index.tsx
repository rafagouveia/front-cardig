import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { ProductProps } from '../../stores/Products';
import { MdAddShoppingCart } from 'react-icons/md';
import { useCart } from '../../stores/Cart';
import { useCallback } from 'react';
type ProductItemProps = {
    product: ProductProps
}
export default function Product({ product }: ProductItemProps) {
    const { title } = product
    const { addToCart } = useCart(state => state.actions)
    const toPrice = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(product.price).toString()
    
    const __handleAddToCart = useCallback(() => {
            addToCart(product)
    }, [addToCart, product])
    return (
        <div>
            <Card isFooterBlurred isPressable className="w-full h-[250px] ">
                <CardHeader className="absolute bg-black/40 backdrop-blur-xl z-10 flex-col border-default-600 items-start">
                    <h4 className="text-white/90 font-medium text-xl">{title}</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    
                    isZoomed
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src={product.image}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10  border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">

                        <div className="flex flex-col">
                            <p className="text-xl font-extrabold text-white">{toPrice}</p>
                        </div>
                    </div>
                    <Button radius="full" size="md" onClick={__handleAddToCart} startContent={<MdAddShoppingCart size="1.2em" />}>Adicionar</Button>
                </CardFooter>
            </Card>
        </div>
    )
}