/* eslint-disable react/prop-types */
import cn from "classnames";
import caretDown from "../../images/icon-down.svg";
import caretUp from "../../images/icon-up.svg";
export default function CardSub({ card }) {
  return (
    <div
      className={cn(
        "rounded-md bg-cardBg py-7 text-center font-bold dark:bg-darkCardBg sm:w-full sm:px-8",
        {
          "border-t-4 border-facebook": card.app == "facebook",
          "border-t-4 border-twitter": card.app == "twitter",
          "border-t-4 border-youtube": card.app == "youtube",
          "border-t-4 border-[#fdc468]": card.app == "instagram",
        },
      )}
    >
      <div className="flex items-center justify-center gap-4">
        <img src={card.icon} alt="icon" className="bg-cover bg-center" />
        <h3 className="text-sm text-secondaryText dark:text-darkSecondaryText">
          {card.account}
        </h3>
      </div>
      <h2 className="mt-6 text-6xl text-darkPrimaryText dark:text-primaryText">
        {card.follower}
      </h2>
      <p className="pb-6 pt-2 text-sm font-light uppercase tracking-[0.3em] text-secondaryText dark:text-darkSecondaryText">
        {card.description}
      </p>
      <div
        className={cn("flex items-center justify-center gap-2", {
          "text-brightRed": !card.valueUp,
          "text-limeGreen": card.valueUp,
        })}
      >
        {card.valueUp ? (
          <img src={caretUp} alt="icon" className="w-4 bg-cover bg-center" />
        ) : (
          <img src={caretDown} alt="icon" className="w-4 bg-cover bg-center" />
        )}
        <p className="text-sm">{card.view}</p>
      </div>
    </div>
  );
}
