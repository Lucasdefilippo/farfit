import Footer from "@/components/layout/footer";
import "../globals.css";
import { Header } from "@/components/layout/header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="">
            <Header />
            <body className="">{children}</body>
            <Footer />
        </html>
    );
}
