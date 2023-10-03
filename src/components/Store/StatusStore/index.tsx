import ChipInfo from "../ChipInfo";

type StatusStoreProps = {
    status: boolean;
}
export default function StatusStore({ status }: StatusStoreProps) {

    const toStatus = (status) ? "Aberto" : "Fechado" 
    const toColor = (status) ? "success" : "danger"
    return (
        <ChipInfo startContent={<span className={`w-2 h-2 bg-${toColor} rounded-full`} />}  size="sm">
            {toStatus}
        </ChipInfo>
    )
}