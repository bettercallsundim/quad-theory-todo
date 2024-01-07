import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ReduxProvider from "./components/ReduxProvider";
import "./globals.css";

export const metadata = {
  title: "Quad Theory Todo",
  description: "Quad Theory Todo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className="dmsans bg-[#EEEFF0]  w-full min-h-screen overflow-x-hidden">
          <Navbar />
          {children}

          <Footer />
        </body>
      </ReduxProvider>
    </html>
  );
}
