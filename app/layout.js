import Wrapper from "@/components/wrapper/Wrapper";
import "./globals.css";

export const metadata = {
  title: "Ecomm",
  description: "React Ecommece",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
