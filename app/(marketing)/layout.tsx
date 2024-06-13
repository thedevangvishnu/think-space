import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="bg-home-bg text-home-text pt-36">{children}</main>
      <Footer />
    </>
  );
};

export default MarketingLayout;
