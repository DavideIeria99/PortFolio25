import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { geist, lato, roboto } from "@/components/fonts/fonts";

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
        <html lang="en">
            <body className={`${geist.className} ${roboto.variable}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
