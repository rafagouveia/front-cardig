import { Chip } from "@nextui-org/react";

type StatusStoreProps = {
    status: boolean;
}
export default function StatusStore({ status }: StatusStoreProps) {

    const toStatus = (status) ? "Aberto" : "Fechado"
    const toColor = (status) ? "success" : "danger"
    return (
        <Chip variant="dot" color={toColor} radius="sm">
            {toStatus}
        </Chip>
    )
}