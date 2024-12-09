import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/app/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GISer科研数据",
  description: "地面气象资料高空气象资料海洋气象资料天气雷达资料风云气象卫星国外气象卫星实况和再分析产品数值预报产品天气预报产品天气实况产品台风与海洋预报产品气象服务产品",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-screen-md min-h-screen  mx-auto">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
