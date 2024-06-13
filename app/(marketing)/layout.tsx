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
      {/* <MarketingNavbar /> */}
      <main className="bg-home-bg text-home-text">{children}</main>
    </>
  );
};

export default MarketingLayout;
