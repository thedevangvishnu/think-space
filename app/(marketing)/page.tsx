import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";
import { TitleSection } from "./_components/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CLIENTS, USERS } from "@/lib/constants";
import { randomUUID } from "crypto";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./_components/testimonial-card";

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

      {/* features */}
      <section className="px-6 sm:px-8 flex justify-center items-center flex-col relative">
        <div className="w-[70%] md:w-[40%] blur-[120px] rounded-full h-[300px] absolute bg-brand-primaryPurple/90 top-[40%]" />
        <TitleSection
          title="Keep track of all your documents in one place"
          subheading="Capture your ideas, thoughts and meeting notes in a structured and organized manner."
          pill="Features"
        />
        <div className="mt-10 w-fit h-fit  flex justify-center items-center relative sm:ml-0 rounded-2xl border-4 border-washed-purple-300 border-opacity-10 z-10">
          <Image
            src="/images/cal.png"
            alt="Banner"
            width={600}
            height={300}
            className="rounded-2xl object-contain"
          />
        </div>
      </section>

      {/* testimonails section */}
      <section className="mt-20 px-6 sm:px-8 flex justify-center items-center flex-col relative pb-40">
        <div className="w-[70%] md:w-[40%] blur-[120px] rounded-full h-48 md:h-[300px] absolute bg-brand-primaryPurple/80 md:bg-brand-primaryPurple/50 top-[20%]" />
        <div className="z-10 flex flex-col w-full overflow-hidden">
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their personal and professional productivity needs"
            pill="Testimonials"
          />

          {/* testimonials */}
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={cn(
                "mt-10 flex flex-nowrap animate-[slide_5s_linear_infinite hover:paused hover:cursor-pointer w-full gap-x-8",
                index === 1 &&
                  "flex-row-reverse animate-[slide_5s_linear_infinite_reverse"
              )}
            >
              {[...Array(2)].map((arr) => (
                <div key={randomUUID()} className="flex gap-x-8">
                  {USERS.map((user, index) => (
                    <TestimonialCard
                      key={user.name}
                      name={user.name}
                      title={user.title}
                      message={user.message}
                      src={`/images/avatars/${index + 1}.png`}
                    />
                    // <div
                    //   key={user.name}
                    //   className="w-[340px] shrink-0 h-32 bg-gradient-to-b from-brand-primaryPurple to-washed-blue-800 rounded-xl flex items-center justify-center"
                    // >
                    //   <p>{user.name}</p>
                    // </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* testimonails section
      <section className="mt-20 px-6 sm:px-8 flex justify-center items-center flex-col relative">
        <div className="w-[70%] md:w-[40%] blur-[120px] rounded-full h-48 md:h-[300px] absolute bg-brand-primaryPurple/80 md:bg-brand-primaryPurple/40 top-[20%]" />
        <div className="z-10 flex flex-col w-full overflow-hidden">
          <TitleSection
            title="The Perfect Plan For You"
            subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
            pill="Pricing"
          />
        </div>
      </section> */}
    </>
  );
}
