export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  spiceLevel: number; // 0–5
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
    unitPrice: 1.79,
  },
  {
    id: "cheesy-beef",
    name: "Cheesy Beef Patty",
    description:
      "All the bold flavour of our classic beef patty with a generous layer of melted cheese — rich, indulgent, and absolutely irresistible.",
    image: "/images/cheese.png",
    spiceLevel: 2,
    spiceLabel: "Mild",
    tags: ["Popular", "Halal available"],
    unitPrice: 1.89,
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
    unitPrice: 1.79,
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
    unitPrice: 1.89,
  },
  {
    id: "lamb",
    name: "Lamb Patty",
    description:
      "Slow-seasoned minced lamb with aromatic Caribbean herbs and warm spices, encased in a perfectly golden, flaky pastry shell.",
    image: "/images/lamb.png",
    spiceLevel: 2,
    spiceLabel: "Mild",
    tags: ["Halal", "Premium"],
    unitPrice: 1.79,
  },
  {
    id: "veg",
    name: "Veg Patty",
    description:
      "A vibrant mix of sweet potato, corn, peppers, and Caribbean herbs — hearty, wholesome, and entirely plant-based.",
    image: "/images/vegetable.png",
    spiceLevel: 1,
    spiceLabel: "Mild",
    tags: ["Vegan", "Plant-based"],
    unitPrice: 1.79,
  },
];
