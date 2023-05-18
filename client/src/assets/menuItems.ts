import buffaloBurgerImg from "../assets/menuImgs/buffalloBurgerImage.jpeg";
import buffaloWingsImg from "../assets/menuImgs/buffaloWings.jpeg";
import chipsImg from "../assets/menuImgs/chipsImage.jpeg";
import classicBurgerImg from "../assets/menuImgs/classicBurger.jpeg";
import signatureBurgerImg from "../assets/menuImgs/signatureBurger.jpeg";
import signatureWingsimg from "../assets/menuImgs/signatureWings.jpeg";
import spiceBagImg from "../assets/menuImgs/spiceBagImage.jpeg";

import cokeZero from "../assets/menuImgs/cokeZero.webp";
import cokeClassic from "../assets/menuImgs/cokeClassic.png";
import sevenUp from "../assets/menuImgs/sevenUp.png";
import fanta from "../assets/menuImgs/fanta.png";

export type MenuItem = {
  name: string;
  description: string;
  price: number[];
  sizes?: string[];
  image?: string;
};
export type MenuSection = {
  name: string;
  contents: MenuItem[];
};

const burgerSection: MenuItem[] = [
  {
    name: "Dodo Classic",
    description:
      "Twice fried chicken thighs, toasted brioche bun, house made garlic aioli,succulent tomatoes and Lolla rosso lettuce.",
    price: [10.5],
    image: classicBurgerImg,
  },
  {
    name: "Dodo Signature",
    description:
      "Twice fried chicken thighs submerged in our special Dodo glaze topped with our zingy Asian slaw and garlic aioli",
    price: [12.0],
    image: signatureBurgerImg,
  },
  {
    name: "Dodo Buffalo",
    description:
      "Twice fried chicken thighs in our luxurious buffalo sauce, toasted brioche bun, creamy blue cheese sauce, succulent tomatoes and lollo rosso lettuce",
    price: [12.0],
    image: buffaloBurgerImg,
  },
];

const wingSection: MenuItem[] = [
  {
    name: "Dodo's Signature Wings",
    description: "Twice fried wings in our signature sweet and sticky glaze",
    price: [9],
    image: signatureWingsimg,
  },
  {
    name: "Dodo Buffalo Wings",
    description: "Twice fried wings tossed in our luxurious buffalo sauce",
    price: [9],
    image: buffaloWingsImg,
  },
];

const chipsSection: MenuItem[] = [
  {
    name: "Dodo's Chips",
    description: "Chips dusted in our salt and szechuan rub",
    price: [3],
    image: chipsImg,
  },
  {
    name: "Dodo Spice Bag",
    description:
      "Twice fried chicken and chips, juicy sautéed bell pepper and onion dusted with out house salt and szechuan rub",
    price: [10.5],
    image: spiceBagImg,
  },
];

const drinksSection: MenuItem[] = [
  { name: "Coke", description: "33cl", price: [2.5], image: cokeClassic },
  { name: "Coke Zero", description: "33cl", price: [2.5], image: cokeZero },
  { name: "Fanta Orange", description: "33cl", price: [2.5], image: fanta },
  { name: "7UP", description: "33cl", price: [2.5], image: sevenUp },
];

export const menu: MenuSection[] = [
  { name: "Dodo's Beautiful Burgers", contents: burgerSection },
  { name: "Dodo's Wonderful Wings", contents: wingSection },
  { name: "Dodo's Delicious Chips", contents: chipsSection },
  { name: "Drinks", contents: drinksSection },
];
