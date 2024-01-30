import { useEffect, useState } from "react";
import CardOverview from "./components/CardOverview";
import CardSub from "./components/CardSub";
import { cardsOverview } from "./js/cardsOverview";
import { cardsSub } from "./js/cardsSub";
function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function themeHandler() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <main className="bgColor relative px-6 pb-12 pt-8 font-inter dark:bg-darkBgColor md:px-16 lg:px-28">
      <div className="relative z-20 flex flex-col sm:flex-row sm:justify-between">
        <div className="">
          <h2 className="text-2xl font-bold text-darkPrimaryText dark:text-primaryText">
            Social Media Dashboard
          </h2>
          <p className="text-sm font-semibold text-secondaryText dark:text-darkSecondaryText">
            Total Followers: 23,004
          </p>
        </div>
        <hr className="my-6 border border-gray-400 sm:hidden" />
        {/* toggle bar */}
        <div className="flex items-center justify-between gap-5 sm:flex-row">
          <h3 className="text-sm font-semibold text-secondaryText dark:text-darkSecondaryText">
            Dark Mode
          </h3>
          <label
            htmlFor="toggle"
            className="relative inline-block rounded-full bg-[#aeb3cb] px-8 py-4 dark:bg-gradient-to-r dark:from-[#378fe6] dark:to-[#3eda82]"
          >
            <input
              type="checkbox"
              className="peer absolute inset-0 z-20 cursor-pointer opacity-0"
              name="toggle"
              onClick={themeHandler}
            />
            <span className="absolute right-8 top-[4px] inline-block h-6 w-6 rounded-full bg-white transition duration-300 peer-checked:right-[7px] dark:bg-black"></span>
          </label>
        </div>
      </div>
      {/* cards Sub */}
      <section className=" relative z-20 mt-10 grid grid-cols-1 grid-rows-1 gap-5 sm:grid-cols-2 sm:grid-rows-2 sm:justify-items-center lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
        {cardsSub.map((card) => {
          return <CardSub key={card.app} card={card} />;
        })}
      </section>
      {/* cards Overview */}
      <section className="relative z-20 mt-12">
        <h3 className="text-2xl font-semibold text-secondaryText dark:text-primaryText">
          Overview - Today
        </h3>
        <div className="mt-7 grid grid-cols-1 grid-rows-1 justify-center gap-5 sm:grid-cols-3 sm:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2">
          {cardsOverview.map((card, index) => {
            return <CardOverview card={card} key={index} />;
          })}
        </div>
      </section>

      {/* background pattern */}
      <div className="bg-patternColorBg absolute left-0 top-0 h-[10%] w-full dark:bg-darkPatternColorBg sm:h-[20%] lg:h-[30%]"></div>
    </main>
  );
}

export default App;
