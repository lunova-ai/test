export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/home/gallery-1.jpg",
    alt: "Mediterranes Gericht mit Polenta und Gemüse auf schwarzem Teller.",
    title: "Holzofen-Klassiker",
    subtitle: "Knackig, saftig, ehrlich",
  },
  {
    src: "/images/home/gallery-2.jpg",
    alt: "Pasta mit Tomatensauce, Topping und Rucola.",
    title: "Pasta & Sauce",
    subtitle: "Hausgemacht wie in Italien",
  },
  {
    src: "/images/home/gallery-3.jpg",
    alt: "Lasagne in einem Keramiktopf vor dem Holzofen.",
    title: "Ofen & Feuer",
    subtitle: "Wärme, Aroma, Crunch",
  },
  {
    src: "/images/home/gallery-4.jpg",
    alt: "Fritto misto mit Meeresfrüchten, Zitronen und Dip.",
    title: "Fritto & Teilen",
    subtitle: "Perfekt für die Runde",
  },
];
