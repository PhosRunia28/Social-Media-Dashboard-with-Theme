import cn from "classnames";
import { useEffect, useState } from "react";
import caretDown from "../images/icon-down.svg";
import caretUp from "../images/icon-up.svg";
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
    <main className="px-6 py-8 font-inter md:px-16 lg:px-28">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="">
          <h2 className="text-2xl font-bold">Social Media Dashboard</h2>
          <p className="text-sm font-semibold text-secondaryText">
            Total Followers: 23,004
          </p>
        </div>
        <hr className="my-6 border border-gray-400 sm:hidden" />
        {/* toggle bar */}
        <div className="flex items-center justify-between gap-5 sm:flex-row">
          <h3 className="text-sm font-semibold text-secondaryText">
            Dark Mode
          </h3>
          <label
            htmlFor="toggle"
            className="relative inline-block rounded-full bg-gray-400 px-8 py-4"
          >
            <input
              type="checkbox"
              className="peer absolute inset-0 z-20 cursor-pointer opacity-0"
              name="toggle"
              onClick={themeHandler}
            />
            <span className="absolute right-[7px] top-[4px] inline-block h-6 w-6 rounded-full bg-white transition duration-300 peer-checked:right-8"></span>
          </label>
        </div>
      </div>
      {/* cards */}
      <div className=" mt-10 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-center lg:flex-nowrap xl:justify-between">
        {cardsSub.map((card, index) => {
          return (
            <div
              className={cn(
                "rounded-md bg-cardBg py-7 text-center font-bold sm:w-full sm:max-w-[16rem]  sm:px-8",
                {
                  "border-t-4 border-facebook": card.app == "facebook",
                  "border-t-4 border-twitter": card.app == "twitter",
                  "border-t-4 border-youtube": card.app == "youtube",
                  "border-t-4 border-[#fdc468]": card.app == "instagram",
                },
              )}
              key={index}
            >
              <div className="flex items-center justify-center gap-4">
                <img
                  src={card.icon}
                  alt="icon"
                  className="bg-cover bg-center"
                />
                <h3 className="text-sm text-secondaryText">{card.account}</h3>
              </div>
              <h2 className="mt-6 text-6xl">{card.follower}</h2>
              <p className="pb-6 pt-2 text-sm font-light uppercase tracking-[0.3em] text-secondaryText">
                {card.description}
              </p>
              <div
                className={cn("flex items-center justify-center gap-2", {
                  "text-brightRed": !card.valueUp,
                  "text-limeGreen": card.valueUp,
                })}
              >
                {card.valueUp ? (
                  <img
                    src={caretUp}
                    alt="icon"
                    className="w-4 bg-cover bg-center"
                  />
                ) : (
                  <img
                    src={caretDown}
                    alt="icon"
                    className="w-4 bg-cover bg-center"
                  />
                )}
                <p className="text-sm">{card.view}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
