import { Chip, ChipProps } from "@nextui-org/react";




export default function ChipInfo(props: ChipProps) {
    return (
        <Chip radius="sm" classNames={{content: "text-tiny"}}  {...props} />
    )
}