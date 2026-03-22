import { Skeleton } from "@/components/ui/skeleton";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import type { MenuItem } from "../backend.d";
import { MenuCategory, useGetMenu } from "../hooks/useQueries";

const fallbackMenuItems: (MenuItem & { _fallback?: boolean })[] = [
  {
    name: "Vegetable Samosa",
    description:
      "Crispy pastry filled with spiced potatoes and peas, served with mint chutney",
    price: 599n,
    category: MenuCategory.appetizer,
    imageUrl: "/assets/generated/menu-samosa.dim_400x300.jpg",
  },
  {
    name: "Paneer Tikka",
    description:
      "Marinated cottage cheese grilled in tandoor, with bell peppers and onion",
    price: 849n,
    category: MenuCategory.appetizer,
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
  },
  {
    name: "Chicken Tikka Masala",
    description:
      "Tender chicken pieces in a rich, creamy tomato-based curry sauce",
    price: 1299n,
    category: MenuCategory.mainCourse,
    imageUrl: "/assets/generated/menu-butter-chicken.dim_400x300.jpg",
  },
  {
    name: "Dal Makhani",
    description:
      "Black lentils slow-cooked overnight with butter, cream and aromatic spices",
    price: 999n,
    category: MenuCategory.mainCourse,
    imageUrl:
      "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&h=300&fit=crop",
  },
  {
    name: "Lamb Rogan Josh",
    description:
      "Slow-braised tender lamb with Kashmiri spices and whole aromatic spices",
    price: 1499n,
    category: MenuCategory.mainCourse,
    imageUrl:
      "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop",
  },
  {
    name: "Gulab Jamun",
    description:
      "Soft milk-solid balls soaked in rose-flavored sugar syrup, garnished with pistachios",
    price: 449n,
    category: MenuCategory.dessert,
    imageUrl: "/assets/generated/menu-gulab-jamun.dim_400x300.jpg",
  },
  {
    name: "Kheer",
    description:
      "Creamy rice pudding with cardamom, saffron and scattered almonds and raisins",
    price: 399n,
    category: MenuCategory.dessert,
    imageUrl:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop",
  },
  {
    name: "Mango Lassi",
    description:
      "Refreshing chilled yogurt drink blended with fresh Alphonso mangoes",
    price: 299n,
    category: MenuCategory.beverage,
    imageUrl:
      "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=400&h=300&fit=crop",
  },
];

const categoryLabels: Record<string, string> = {
  [MenuCategory.appetizer]: "Appetizers",
  [MenuCategory.mainCourse]: "Main Courses",
  [MenuCategory.dessert]: "Desserts",
  [MenuCategory.beverage]: "Beverages",
};

function formatPrice(price: bigint) {
  return `₹${Number(price)}`;
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl overflow-hidden shadow-card bg-white group"
      data-ocid={`menu.item.${index + 1}`}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={
            item.imageUrl ||
            "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
          }
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, oklch(0.2 0.05 45 / 0.6), transparent)",
          }}
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-serif font-bold text-lg leading-tight"
            style={{ color: "oklch(0.22 0.05 45)" }}
          >
            {item.name}
          </h3>
          <span
            className="font-serif font-bold text-base shrink-0"
            style={{ color: "oklch(0.62 0.1 70)" }}
          >
            {formatPrice(item.price)}
          </span>
        </div>
        <p
          className="text-sm leading-relaxed font-body"
          style={{ color: "oklch(0.45 0.04 50)" }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function MenuSection() {
  const { data: menuItems, isLoading } = useGetMenu();
  const [activeCategory, setActiveCategory] = useState<string>(
    MenuCategory.appetizer,
  );

  const items =
    menuItems && menuItems.length > 0 ? menuItems : fallbackMenuItems;
  const filteredItems = items.filter(
    (item) => item.category === activeCategory,
  );

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="menu"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(0.96 0.012 68)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-3 font-body"
            style={{ color: "oklch(0.72 0.1 70)" }}
          >
            Our Offerings
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.22 0.05 45)" }}
          >
            Explore Our Menu
          </h2>
          <p
            className="text-base font-body max-w-xl mx-auto"
            style={{ color: "oklch(0.45 0.04 50)" }}
          >
            Each dish is a celebration of India's vibrant culinary heritage,
            made with love and the finest ingredients.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          data-ocid="menu.tab"
        >
          {Object.entries(categoryLabels).map(([cat, label]) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 font-body"
              style={{
                backgroundColor:
                  activeCategory === cat
                    ? "oklch(0.72 0.1 70)"
                    : "oklch(0.9 0.02 68)",
                color:
                  activeCategory === cat
                    ? "oklch(0.18 0.04 45)"
                    : "oklch(0.38 0.04 50)",
                border:
                  activeCategory === cat
                    ? "none"
                    : "1px solid oklch(0.84 0.025 68)",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {isLoading ? (
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            data-ocid="menu.loading_state"
          >
            {["sk1", "sk2", "sk3", "sk4"].map((sk) => (
              <Skeleton key={sk} className="h-72 rounded-2xl" />
            ))}
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-16" data-ocid="menu.empty_state">
            <p
              className="font-body text-lg"
              style={{ color: "oklch(0.45 0.04 50)" }}
            >
              No items in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, i) => (
              <MenuCard key={`${item.name}-${i}`} item={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
