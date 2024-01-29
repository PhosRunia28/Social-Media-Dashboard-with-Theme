import facebookIcon from "../../images/icon-facebook.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import youtubeIcon from "../../images/icon-youtube.svg";
const followerCount = (followerCount) => {
  if (followerCount >= 10000) {
    return parseFloat(followerCount / 1000) + "k";
  }
  return parseFloat(followerCount);
};

export const cardsSub = [
  {
    app: "facebook",
    icon: facebookIcon,
    account: "@nathanf",
    follower: followerCount("1987"),
    description: "followers",
    view: "12 Today",
    valueUp: true,
  },
  {
    app: "twitter",
    icon: twitterIcon,
    account: "@nathanf",
    follower: followerCount("1044"),
    description: "followers",
    view: "99 Today",
    valueUp: true,
  },
  {
    app: "instagram",
    icon: instagramIcon,
    account: "@nathanf",
    follower: followerCount("11000"),
    description: "followers",
    view: "1099 Today",
    valueUp: true,
  },
  {
    app: "youtube",
    icon: youtubeIcon,
    account: "@nathanf",
    follower: followerCount("8239"),
    description: "subcribers",
    view: "144 Today",
    valueUp: false,
  },
];
