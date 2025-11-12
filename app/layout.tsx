import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/footer";
import { roboto, amiri } from "@/components/fonts/fonts";
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
    title: {
        default: "DavideDev",
        template: "%s | DavideDev",
    },
    description: "Portfolio Davide",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={` ${roboto.className} ${amiri.variable}`}>
                    <Navbar />
                    {children}
                    <Footer />
            </body>
        </html>
    );
}
