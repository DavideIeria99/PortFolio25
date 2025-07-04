import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/ui/footer";
import { roboto, amiri } from "@/components/fonts/fonts";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "next-themes";

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
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
