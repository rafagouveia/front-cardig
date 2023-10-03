import { Button } from "@nextui-org/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function StoreNotFound() {
  return (
    <div className="flex flex-col h-full flex-1 justify-center items-center py-1">
      <Image src="/404.svg" width={500} alt="Store not found"/>
      <span>Store not found</span>
      <Button
        as={Link}
        href="/"
        color="warning"
        variant="shadow"
        className="mt-5"
        startContent={<MdKeyboardArrowLeft size="1.2em" />}
      >
        Voltar para o site
      </Button>
    </div>
  );
}
