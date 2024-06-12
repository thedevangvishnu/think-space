import React from "react";

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string;
}

export const TitleSection = ({
  title,
  subheading,
  pill,
}: TitleSectionProps) => {
  return (
    <React.Fragment>
      <section className="flex flex-col gap-6 justify-center items-start md:items-center">
        <article className="rounded-full p-[1px] text-sm bg-primary-purple-100/50">
          <div className="rounded-full text-sm md:text-base px-3 py-1 bg-home-bg text-home-text">
            ✨ {pill}
          </div>
        </article>

        {subheading ? (
          <>
            <h2 className="text-left text-3xl sm:text-5xl sm:max-w-[750px] md:text-center font-semibold">
              {title}
            </h2>
            <p className="text-washed-purple-700 sm:max-w-[450px]">
              {subheading}
            </p>
          </>
        ) : (
          <h1 className="text-left text-4xl sm:text-6xl sm:max-w-[850px] md:text-center font-semibold md:leading-[4rem]">
            {title}
          </h1>
        )}
      </section>
    </React.Fragment>
  );
};
