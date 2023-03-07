export type MenuItem = {
  name: string;
  description: string;
  price: number[];
  sizes?: string[];
};
export type MenuSection = {
  name: string;
  contents: MenuItem[];
};

const burgerSection: MenuItem[] = [
  {
    name: "Dodo Classic",
    description:
      "Twice fried skin on chicken thighs, toasted brioche bun, house made garlic aioli,succulent tomatoes and Lolla rosso lettuce.",
    price: [12.0],
  },
  {
    name: "Dodo Signature",
    description:
      "Twice fried skin on chicken thighs submerged in our special Dodo glaze topped with our zingy Asian slaw and garlic aioli",
    price: [12.5],
  },
  {
    name: "Dodo Buffalo",
    description:
      "Twice fried skin on chicken thighs in our luxurious buffalo sauce, toasted brioche bun, creamy blue cheese sauce, succulent tomatoes and lollo rosso lettuce",
    price: [13.0],
  },
];

const wingSection: MenuItem[] = [
  {
    name: "Dodo's Signature Wings",
    description: "Twice fried wings in our signature sweet and sticky glaze",
    price: [5, 8],
    sizes: ["Half Beak", "Full Beak"],
  },
  {
    name: "Dodo Buffalo Wings",
    description: "Twice fried wings tossed in our luxurious buffalo sauce",
    price: [5, 8],
    sizes: ["Half Beak", "Full Beak"],
  },
];

const chipsSection: MenuItem[] = [
  {
    name: "Dodo's Chips",
    description: "Chips dusted in our salt and szechuan rub",
    price: [5, 6.5],
    sizes: ["Half Beak", "Full Beak"],
  },
  {
    name: "Dodo Spice Bag",
    description:
      "Twice fried chicken and chips, juicy sautéed bell pepper and onion dusted with out house salt and szechuan rub",
    price: [10],
  },
];

export const menu: MenuSection[] = [
  { name: "Dodo's Beautiful Burgers", contents: burgerSection },
  { name: "Dodo's Wonderful Wings", contents: wingSection },
  { name: "Dodo's Delicious Chips", contents: chipsSection },
];
