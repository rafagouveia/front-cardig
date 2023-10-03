type SectionProps = {
    name: string;
    children?: React.ReactNode
}
export default function Section({ name, children }: SectionProps) {
    return (
        <div>
            <h1 className="prose text-2xl font-bold font-sans py-4 text-zinc-800">{name}</h1>
            {children}
        </div>
    )
}