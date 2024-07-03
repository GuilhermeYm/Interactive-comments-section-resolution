import "./globals.css"
export const metadata = {
  title: "Interactive comments section Resolution",
  description: "Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
