
import "./globals.css";
import { Kanit } from "next/font/google";
import { ThemeProvider } from "next-themes";

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
    <html lang="en">
      <body className={`${kanit.className} antialiased w-full min-h-screen`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
