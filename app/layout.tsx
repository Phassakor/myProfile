
import "./globals.css";
import { Kanit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";

const kanit = Kanit({
  subsets: ["thai", "latin"], // รองรับภาษาไทย
  weight: ["300", "400", "600"], // เลือกน้ำหนักฟอนต์
  display: "swap",
});

export const metadata = {
  title: "Phassakorn's Portfolio",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${kanit.className} antialiased w-full`}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeProvider>
    </body>
  </html>
  );
}
