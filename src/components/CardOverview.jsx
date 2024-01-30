/* eslint-disable react/prop-types */
import cn from "classnames";
import caretDown from "../../images/icon-down.svg";
import caretUp from "../../images/icon-up.svg";
export default function CardOverview({ card }) {
  return (
    <div className="flex w-full flex-col justify-between gap-6 rounded-md bg-cardBg px-6 py-6 dark:bg-darkCardBg sm:max-w-[16rem] lg:max-w-none">
      <div className="flex justify-between gap-4">
        <h4 className="font-semibold text-secondaryText dark:text-darkSecondaryText">
          {card.description}
        </h4>
        <img
          src={card.icon}
          alt="icon"
          className="h-6 w-6 bg-cover bg-center"
        />
      </div>
      <div className="flex justify-between gap-4">
        <h5 className="text-3xl font-bold text-darkPrimaryText dark:text-primaryText">
          {card.view}
        </h5>
        <div
          className={cn("flex items-center gap-1", {
            "text-limeGreen": card.valueUp,
            "text-brightRed": !card.valueUp,
          })}
        >
          {card.valueUp ? (
            <img
              src={caretUp}
              alt="icon"
              className="h-2 w-2 bg-cover bg-center"
            />
          ) : (
            <img
              src={caretDown}
              alt="icon"
              className="h-2 w-2 bg-cover bg-center"
            />
          )}
          <p className="text-sm">{card.viewPercent}</p>
        </div>
      </div>
    </div>
  );
}
