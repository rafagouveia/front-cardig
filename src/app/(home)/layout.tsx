import FooterSite from "@/components/HomeSite/FooterSite";
import PageContainer from "@/components/PageContainer";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <PageContainer>
            {children}
            <FooterSite />
        </PageContainer>
    )
}