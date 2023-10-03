import React from "react";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-1 overflow-y-auto">
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  );
}
