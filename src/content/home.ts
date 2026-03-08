export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: "antipasti" | "pasta" | "pizza" | "dolci" | "drink";
};

export type HomeContent = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  menu: MenuItem[];
  highlights: string[];
};

export const homeContent: HomeContent = {
  hero: {
    title: "Italienische Küche.",
    subtitle: "Kirchenklause im Herzen von Beeskow",
    cta: "Speisekarte entdecken",
  },
  highlights: ["Steinofenpizza", "Frische Pasta", "Hausgemachtes Tiramisu", "Täglich 11:00-23:00"],
  menu: [
    { name: "Bruschetta Classica", description: "Tomaten, Basilikum, Olivenöl", price: "€7,50", category: "antipasti" },
    { name: "Insalata Mista", description: "Blattsalate, Gurke, Tomate, Hausdressing", price: "€8,90", category: "antipasti" },
    { name: "Spaghetti Carbonara", description: "Pancetta, Pecorino, Ei, Pfeffer", price: "€14,90", category: "pasta" },
    { name: "Gnocchi al Pesto", description: "Basilikumpesto, Parmesan, Pinienkerne", price: "€13,90", category: "pasta" },
    { name: "Pizza Margherita", description: "Tomatensauce, Fior di Latte, Basilikum", price: "€12,50", category: "pizza" },
    { name: "Pizza Salame", description: "Tomatensauce, Mozzarella, Salami", price: "€13,90", category: "pizza" },
    { name: "Tiramisu", description: "Klassisch nach Hausrezept", price: "€6,90", category: "dolci" },
    { name: "Panna Cotta", description: "Vanille, Beerenspiegel", price: "€6,50", category: "dolci" },
    { name: "Aperol Spritz", description: "Aperol, Prosecco, Soda", price: "€7,90", category: "drink" },
    { name: "San Pellegrino", description: "0,75l", price: "€5,50", category: "drink" },
  ],
};
