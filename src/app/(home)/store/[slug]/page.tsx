"use client";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getAStore } from "@/services/get-a-store";
import { useStoreProfile } from "@/stores/StoreProfile";
import FooterSite from "@/components/HomeSite/FooterSite";
import StoreNotFound from "../../../not-found";
import PageContainer from "@/components/PageContainer";
import StoreContainer from "@//components/Store/StoreContainer";
import StoreContent from "@/components/Store/StoreContent";

export default function Store({ params }: { params: { slug: string } }) {
  const [error, setError] = useState(false);
  const { loading } = useStoreProfile((state) => state);
  useEffect(() => {
    redirectWhenNotfound();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const redirectWhenNotfound = async () => {
    try {
      setError(false);
      await getAStore(params.slug);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      {!loading && !error && (
        <StoreContainer>
          <StoreContent>
            {loading && (
              <div className="flex justify-center items-center h-full py-5">
                <Spinner size="lg" color="danger" />
              </div>
            )}
          </StoreContent>
        </StoreContainer>
      )}
      {error && !loading && <StoreNotFound />}
    </>
  );
}
