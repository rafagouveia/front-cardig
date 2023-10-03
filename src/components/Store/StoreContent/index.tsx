import ContentHome from "../../ContentHome";
import StoreHeader from "../StoreHeader";

export default function StoreContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto flex-col flex-1">
      <StoreHeader />
      <ContentHome />
      {children}
    </div>
  );
}
