import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

// const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="h-full">
//       <Navbar />
//       <main className="h-full pt-40">{children}</main>
//     </div>
//   );
// };

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
