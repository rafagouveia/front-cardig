import StoreBanner from "../StoreBanner";

export default function StoreContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <StoreBanner />
      {children}
    </div>
  );
}
