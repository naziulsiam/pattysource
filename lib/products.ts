export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  spiceLevel: number; // 1–5
  spiceLabel: string;
  tags: string[];
  unitPrice: number;
}

export const products: Product[] = [
  {
    id: "beef",
    name: "Beef Patty",
    description:
      "Our signature patty — seasoned Jamaican-style beef with scotch bonnet, thyme, and allspice wrapped in a golden, flaky crust.",
    image: "/images/beef.png",
    spiceLevel: 2,
    spiceLabel: "Mild",
    tags: ["Bestseller", "Halal available"],
    unitPrice: 1.85,
  },
  {
    id: "chicken",
    name: "Chicken Patty",
    description:
      "Tender seasoned chicken with spring onion, thyme, and Jamaican spices — lighter on heat, big on Caribbean flavour.",
    image: "/images/chicken.png",
    spiceLevel: 1,
    spiceLabel: "Mild",
    tags: ["Popular", "Halal"],
    unitPrice: 1.85,
  },
  {
    id: "vegetable",
    name: "Vegetable Patty",
    description:
      "A vibrant mix of sweet potato, corn, peppers, and Caribbean herbs — hearty, wholesome, and entirely plant-based.",
    image: "/images/vegetable.png",
    spiceLevel: 1,
    spiceLabel: "Mild",
    tags: ["Vegan", "Plant-based"],
    unitPrice: 1.75,
  },
  {
    id: "jerk-chicken",
    name: "Jerk Chicken Patty",
    description:
      "Smoky jerk-marinated chicken with scotch bonnet heat and authentic Caribbean seasoning — bold, fiery, and unforgettable.",
    image: "/images/jerk-chicken.png",
    spiceLevel: 4,
    spiceLabel: "Hot",
    tags: ["Spicy", "Halal"],
    unitPrice: 1.95,
  },
  {
    id: "cheese",
    name: "Cheese Patty",
    description:
      "Molten cheese nestled inside a buttery, golden pastry — rich, indulgent, and irresistibly crowd-pleasing.",
    image: "/images/cheese.png",
    spiceLevel: 0,
    spiceLabel: "No heat",
    tags: ["Crowd favourite", "Vegetarian"],
    unitPrice: 1.80,
  },
];
