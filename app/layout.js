import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "A dark analytics dashboard UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
