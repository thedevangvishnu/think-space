import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";
import { TitleSection } from "./_components/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CLIENTS } from "@/lib/constants";

// export default function Home() {
//   return (
//     <div className="min-h-full flex flex-col">
//       <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
//         <Heading />
//         <Heroes />
//         <Footer />
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className="overflow-hidden px-6 sm:px-8 pt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <TitleSection
          pill="Your workspace, perfected!"
          title="
          All-In-One Tool for Your Ideas, Documents And Plans."
        />
        <div className="w-fit bg-foreground p-[2px] mt-4 rounded-full bg-gradient-to-r from-primary to-washed-blue-200 z-20">
          <Button
            variant="secondary"
            className=" text-home-text rounded-full p-6 text-base md:text-lg bg-home-bg hover:bg-home-bg hover:text-white transition-colors duration-200"
          >
            Get Think Space Free
          </Button>
        </div>
        <div className="md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px] h-[400px] md:h-[600px] z-10">
          <Image
            src="/images/appBanner.png"
            alt="Application Banner"
            fill
            className="object-contain"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t from-home-bg left-0 right-0 absolute z-10"></div>
        </div>
      </section>

      {/* clients section */}
      <section className="relative">
        {/* <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute"
        >
          <div className="flex flex-nowrap w-full md:w-[800px] animate-slide">
            {CLIENTS.map((client) => (
              <div
                key={client.alt}
                className="relative w-[200px] m-10 md:m-20 shrink-0 flex items-center"
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={200}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div> */}

        <div className="overflow-hidden flex after:absolute after:content['']  after:bg-gradient-to-l after:from-home-bg after:to-transparent after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 before:absolute before:content[''] before:bg-gradient-to-r before:from-home-bg  before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10">
          {[...Array(2)].map((arr) => (
            <div className="flex flex-nowrap animate-slide" key={arr}>
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="relative w-[150px] md:w-[200px] m-10 md:m-20 shrink-0 flex items-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
