import facebookIcon from "../../images/icon-facebook.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import youtubeIcon from "../../images/icon-youtube.svg";
const countViewProfile = (viewProfile) => {
  if (viewProfile >= 10000) {
    return parseFloat(viewProfile / 1000) + "k";
  }
  return parseFloat(viewProfile);
};
export const cardsOverview = [
  {
    app: "facebook",
    icon: facebookIcon,
    view: countViewProfile("87"),
    viewPercent: "3%",
    description: "Page Views",
    valueUp: true,
  },
  {
    app: "facebook",
    icon: facebookIcon,
    view: countViewProfile("52"),
    viewPercent: "2%",
    description: "Likes",
    valueUp: false,
  },
  {
    app: "instagram",
    icon: instagramIcon,
    view: countViewProfile("5462"),
    viewPercent: "2257%",
    description: "Likes",
    valueUp: true,
  },
  {
    app: "instagram",
    icon: instagramIcon,
    view: countViewProfile("52000"),
    viewPercent: "1375%",
    description: "Profile Views",
    valueUp: true,
  },
  {
    app: "twitter",
    icon: twitterIcon,
    view: countViewProfile("117"),
    viewPercent: "303%",
    description: "Retweets",
    valueUp: true,
  },
  {
    app: "twitter",
    icon: twitterIcon,
    view: countViewProfile("507"),
    viewPercent: "553%",
    description: "Likes",
    valueUp: true,
  },
  {
    app: "youtube",
    icon: youtubeIcon,
    view: countViewProfile("107"),
    viewPercent: "19%",
    description: "Likes",
    valueUp: false,
  },
  {
    app: "youtube",
    icon: youtubeIcon,
    view: countViewProfile("1407"),
    viewPercent: "12%",
    description: "Profile Views",
    valueUp: false,
  },
];
