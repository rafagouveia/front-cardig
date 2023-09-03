type SectionProps = {
    name: string;
    children?: React.ReactNode
}
export default function Section({ name, children }: SectionProps) {
    return (
        <div>
            <h1 className="prose text-2xl font-bold py-4">{name}</h1>
            {children}
        </div>
    )
}