import "../styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "My Blog",
  description: "A simple blog built with Next.js and Tailwind CSS",
  icons: {
    icon: "/SVG/favicon.ico", // 指定 favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
