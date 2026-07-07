import { useState, useEffect, useRef } from "react";

const GOLD = "#B8860B";
const GOLD_LIGHT = "#D4AF37";
const GOLD_PALE = "#F5EDD3";
const CREAM = "#FAF7F0";
const CHARCOAL = "#1A1A1A";
const MUTED = "#6B6B6B";

// ─── Responsive hook ────────────────────────────────────────────
function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    return w < 640 ? "mobile" : w < 1024 ? "tablet" : "desktop";
  });
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setBp(w < 640 ? "mobile" : w < 1024 ? "tablet" : "desktop");
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return bp;
}

// ─── Data ───────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    category: "Necklaces",
    name: "Kundan Bridal Necklace",
    price: 85000,
    rating: 5,
    desc: "Hand-crafted Kundan set with meenakari enamel detailing and polki stones.",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop&crop=center",
    tags: ["Bridal", "Gold"],
  },
  {
    id: 2,
    category: "Earrings",
    name: "Jhumka Drop Earrings",
    price: 12500,
    rating: 5,
    desc: "Traditional bell-shaped jhumkas with filigree work and ruby accents.",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&h=400&fit=crop&crop=center",
    tags: ["Traditional", "Festive"],
  },
  {
    id: 3,
    category: "Bangles",
    name: "Temple Gold Bangles (Set of 4)",
    price: 45000,
    rating: 4,
    desc: "22KT gold-finish temple bangles with goddess motifs and floral borders.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9519f94815b5?w=400&h=400&fit=crop&crop=center",
    tags: ["Gold", "Set"],
  },
  {
    id: 4,
    category: "Rings",
    name: "Diamond Solitaire Ring",
    price: 125000,
    rating: 5,
    desc: "Elegant solitaire setting with brilliant-cut stone on a polished gold band.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
    tags: ["Diamond", "Minimal"],
  },
  {
    id: 5,
    category: "Necklaces",
    name: "Layered Mangalsutra",
    price: 32000,
    rating: 5,
    desc: "Contemporary layered mangalsutra with black beads and gold pendants.",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&crop=center",
    tags: ["Bridal", "Contemporary"],
  },
  {
    id: 6,
    category: "Earrings",
    name: "Chandbali Earrings",
    price: 18000,
    rating: 4,
    desc: "Moon-shaped chandbali with pearl drops — perfect for weddings and receptions.",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=400&fit=crop&crop=center",
    tags: ["Festive", "Bridal"],
  },
  {
    id: 7,
    category: "Bangles",
    name: "Kada Cuff Bangle",
    price: 28000,
    rating: 4,
    desc: "Bold open cuff kada with engraved paisley motifs and matte gold finish.",
    image:
      "https://images.unsplash.com/photo-1601121141499-f2c16d2cd59f?w=400&h=400&fit=crop&crop=center",
    tags: ["Bold", "Gold"],
  },
  {
    id: 8,
    category: "Rings",
    name: "Floral Cocktail Ring",
    price: 55000,
    rating: 5,
    desc: "Statement cocktail ring with emerald centre and surrounding petal diamonds.",
    image:
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&h=400&fit=crop&crop=center",
    tags: ["Statement", "Diamond"],
  },
  {
    id: 9,
    category: "Necklaces",
    name: "Pearl Haar Necklace",
    price: 22000,
    rating: 4,
    desc: "Classic South Sea pearl haar with gold spacers — timeless elegance.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
    tags: ["Pearl", "Classic"],
  },
  {
    id: 10,
    category: "Earrings",
    name: "Gold Hoop Earrings",
    price: 9500,
    rating: 4,
    desc: "Lightweight 22KT gold hoops with twisted rope detailing — everyday elegance.",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop&crop=center",
    tags: ["Everyday", "Gold"],
  },
  {
    id: 11,
    category: "Rings",
    name: "Antique Jadau Ring",
    price: 38000,
    rating: 5,
    desc: "Intricate jadau ring set with uncut diamonds and coloured gemstones.",
    image:
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=400&h=400&fit=crop&crop=center",
    tags: ["Antique", "Diamond"],
  },
  {
    id: 12,
    category: "Necklaces",
    name: "Gold Coin Necklace",
    price: 41000,
    rating: 4,
    desc: "Traditional Lakshmi coin necklace with hand-engraved motifs on 22KT gold.",
    image:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop&crop=center",
    tags: ["Traditional", "Gold"],
  },
];

const categories = ["All", "Necklaces", "Earrings", "Bangles", "Rings"];

const heroSlides = [
  {
    label: "Bridal Collection",
    heading: "Adorn Your\nMost Precious\nMoment",
    sub: "Hand-crafted bridal jewellery — Kundan, Polki & Diamond sets.",
    emoji: "💍",
    accent: "#E0A96D",
    bg: "linear-gradient(135deg, #1F1512 0%, #331F14 50%, #1F1512 100%)",
  },
  {
    label: "Festive Specials",
    heading: "Glow With\nEvery\nCelebration",
    sub: "Temple jewellery, jhumkas & bangles crafted for every festivity.",
    emoji: "📿",
    accent: "#A8324D",
    bg: "linear-gradient(135deg, #150A12 0%, #2A1120 50%, #150A12 100%)",
  },
  {
    label: "Everyday Elegance",
    heading: "Wear Gold\nEvery\nSingle Day",
    sub: "Lightweight, wearable jewellery for the modern Indian woman.",
    emoji: "✨",
    accent: "#4E8C7C",
    bg: "linear-gradient(135deg, #0A1412 0%, #12241F 50%, #0A1412 100%)",
  },
];

const reviews = [
  {
    name: "Lakshmi P.",
    city: "Hyderabad",
    text: "The Kundan necklace was stunning — exactly what I wanted for my wedding.",
    stars: 5,
  },
  {
    name: "Meera R.",
    city: "Chennai",
    text: "Beautiful jhumkas, great finish. Wore them at my sister's engagement!",
    stars: 5,
  },
  {
    name: "Sujatha K.",
    city: "Vijayawada",
    text: "Kusuma Jewelss never disappoints. The bangles are gorgeous.",
    stars: 5,
  },
  {
    name: "Divya N.",
    city: "Proddatur",
    text: "Love the mangalsutra design — contemporary yet traditional.",
    stars: 5,
  },
  {
    name: "Anitha B.",
    city: "Guntur",
    text: "Excellent craftsmanship. The cocktail ring is my favourite piece.",
    stars: 5,
  },
];

function formatPrice(p) {
  return "₹" + p.toLocaleString("en-IN");
}

function StarRating({ count }) {
  return (
    <span style={{ color: GOLD_LIGHT, fontSize: 13 }}>
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

// ─── Quick View Modal ────────────────────────────────────────────
function QuickView({ product, onClose, onAdd, inCart, bp }) {
  const isMob = bp === "mobile";
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        display: "flex",
        alignItems: isMob ? "flex-end" : "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      />
      <div
        style={{
          position: "relative",
          background: "#fff",
          borderRadius: isMob ? "20px 20px 0 0" : 20,
          width: isMob ? "100%" : "min(680px, 94vw)",
          maxHeight: isMob ? "88vh" : "90vh",
          overflow: "auto",
          display: "flex",
          flexDirection: isMob ? "column" : "row",
          zIndex: 1,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            flex: isMob ? "0 0 220px" : "0 0 260px",
            background: GOLD_PALE,
            minHeight: isMob ? 220 : 340,
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: isMob ? "20px 20px 24px" : "28px 28px 24px",
            position: "relative",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 14,
              right: 16,
              background: "none",
              border: "none",
              fontSize: 20,
              cursor: "pointer",
              color: MUTED,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
          <div
            style={{
              fontSize: 10,
              color: GOLD,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 6,
              fontFamily: "sans-serif",
            }}
          >
            {product.category}
          </div>
          <h2
            style={{
              fontSize: isMob ? 17 : 20,
              fontWeight: 700,
              margin: "0 0 8px",
              lineHeight: 1.3,
              color: CHARCOAL,
            }}
          >
            {product.name}
          </h2>
          <StarRating count={product.rating} />
          <div
            style={{
              fontSize: isMob ? 22 : 26,
              fontWeight: 700,
              color: GOLD,
              margin: "12px 0 8px",
              fontFamily: "sans-serif",
            }}
          >
            {formatPrice(product.price)}
          </div>
          <p
            style={{
              fontSize: 14,
              color: MUTED,
              lineHeight: 1.7,
              fontFamily: "sans-serif",
              margin: "0 0 16px",
            }}
          >
            {product.desc}
          </p>
          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            {product.tags.map((t) => (
              <span
                key={t}
                style={{
                  background: GOLD_PALE,
                  color: "#7A5C00",
                  fontSize: 11,
                  padding: "3px 10px",
                  borderRadius: 20,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button
              onClick={() => {
                onAdd(product);
                onClose();
              }}
              style={{
                background: inCart ? CHARCOAL : GOLD,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 0",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "sans-serif",
              }}
            >
              {inCart ? "✓ Added to Cart" : "Add to Cart"}
            </button>
            <button
              style={{
                background: "transparent",
                color: CHARCOAL,
                border: "1px solid #E8DCC8",
                borderRadius: 8,
                padding: "11px 0",
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "sans-serif",
              }}
            >
              Enquire About This Piece
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Product Card ────────────────────────────────────────────────
function ProductCard({ product, onAdd, inCart, onQuickView }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: "#fff",
        border: "0.5px solid #E8DCC8",
        borderRadius: 16,
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
        display: "flex",
        flexDirection: "column",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 8px 32px rgba(184,134,11,0.15)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          height: 200,
          background: GOLD_PALE,
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={() => onQuickView(product)}
      >
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.4s",
              transform: hovered ? "scale(1.06)" : "scale(1)",
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
            }}
          >
            💎
          </div>
        )}
        <span
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: "rgba(255,255,255,0.92)",
            color: CHARCOAL,
            fontSize: 9,
            fontWeight: 700,
            padding: "3px 9px",
            borderRadius: 20,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          {product.category}
        </span>
        {hovered && (
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(255,255,255,0.95)",
              color: CHARCOAL,
              fontSize: 11,
              padding: "5px 16px",
              borderRadius: 20,
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: 0.5,
              whiteSpace: "nowrap",
            }}
          >
            Quick View
          </div>
        )}
      </div>
      <div
        style={{
          padding: "14px 16px 16px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 14,
            color: CHARCOAL,
            marginBottom: 4,
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </div>
        <div
          style={{
            fontSize: 12,
            color: MUTED,
            marginBottom: 8,
            lineHeight: 1.5,
            flex: 1,
          }}
        >
          {product.desc}
        </div>
        <StarRating count={product.rating} />
        <div
          style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}
        >
          {product.tags.map((t) => (
            <span
              key={t}
              style={{
                background: GOLD_PALE,
                color: "#7A5C00",
                fontSize: 10,
                padding: "2px 8px",
                borderRadius: 20,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 14,
            gap: 8,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: GOLD,
                fontFamily: "sans-serif",
              }}
            >
              {formatPrice(product.price)}
            </div>
            <div
              style={{ fontSize: 10, color: MUTED, fontFamily: "sans-serif" }}
            >
              Incl. of taxes
            </div>
          </div>
          <button
            onClick={() => onAdd(product)}
            style={{
              background: inCart ? CHARCOAL : GOLD,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "9px 14px",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: 0.3,
              transition: "background 0.2s",
              whiteSpace: "nowrap",
              fontFamily: "sans-serif",
            }}
          >
            {inCart ? "✓ In Cart" : "+ Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Cart Sidebar ────────────────────────────────────────────────
function CartSidebar({ cart, setCart, onClose, bp }) {
  const isMob = bp === "mobile";
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        flexDirection: isMob ? "column" : "row",
        justifyContent: isMob ? "flex-end" : "flex-end",
      }}
    >
      <div
        style={{ flex: 1, background: "rgba(0,0,0,0.5)" }}
        onClick={onClose}
      />
      <div
        style={{
          width: isMob ? "100%" : 340,
          maxHeight: isMob ? "85vh" : "100vh",
          background: "#fff",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          overflowY: "auto",
          borderRadius: isMob ? "20px 20px 0 0" : 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700 }}>
            Your Cart ({cart.length})
          </span>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: 20,
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
        {cart.length === 0 ? (
          <p style={{ color: MUTED, fontSize: 14 }}>
            Your cart is empty. Browse our jewellery!
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: 12,
                borderBottom: "0.5px solid #EEE",
                paddingBottom: 12,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: GOLD_PALE,
                  borderRadius: 8,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: MUTED,
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.category}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: GOLD,
                    fontWeight: 700,
                    fontFamily: "sans-serif",
                  }}
                >
                  {formatPrice(item.price)}
                </div>
              </div>
              <button
                onClick={() =>
                  setCart((c) => c.filter((x) => x.id !== item.id))
                }
                style={{
                  background: "none",
                  border: "none",
                  color: "#999",
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                ✕
              </button>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <>
            <div
              style={{
                borderTop: "0.5px solid #EEE",
                paddingTop: 12,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{ fontFamily: "sans-serif", fontSize: 13, color: MUTED }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: GOLD,
                }}
              >
                {formatPrice(cart.reduce((s, i) => s + i.price, 0))}
              </span>
            </div>
            <button
              style={{
                background: GOLD,
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: 0.5,
                fontFamily: "sans-serif",
              }}
            >
              Proceed to Checkout →
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Mobile Bottom Nav ───────────────────────────────────────────
function MobileBottomNav({ page, setPage, cartCount, setCartOpen }) {
  const tabs = [
    { icon: "🏠", label: "Home", pg: "home" },
    { icon: "📿", label: "Shop", pg: "collections" },
    { icon: "ℹ️", label: "About", pg: "about" },
    { icon: "📞", label: "Contact", pg: "contact" },
  ];
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        background: "#fff",
        borderTop: "0.5px solid #E8DCC8",
        display: "flex",
        alignItems: "stretch",
        height: 60,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {tabs.map((t) => (
        <button
          key={t.pg}
          onClick={() => setPage(t.pg)}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            cursor: "pointer",
            color: page === t.pg ? GOLD : MUTED,
            fontSize: 10,
            fontFamily: "sans-serif",
            fontWeight: page === t.pg ? 700 : 400,
            borderTop:
              page === t.pg ? `2px solid ${GOLD}` : "2px solid transparent",
            transition: "all 0.2s",
          }}
        >
          <span style={{ fontSize: 18 }}>{t.icon}</span>
          {t.label}
        </button>
      ))}
      <button
        onClick={() => setCartOpen(true)}
        style={{
          flex: 1,
          background: "none",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          cursor: "pointer",
          color: MUTED,
          fontSize: 10,
          fontFamily: "sans-serif",
          position: "relative",
          borderTop: "2px solid transparent",
        }}
      >
        <span style={{ fontSize: 18 }}>🛒</span>
        Cart
        {cartCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: 6,
              right: "calc(50% - 16px)",
              background: GOLD,
              color: "#fff",
              borderRadius: "50%",
              width: 16,
              height: 16,
              fontSize: 9,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
}

// ─── Main App ────────────────────────────────────────────────────
export default function KusumaJewels() {
  const bp = useBreakpoint();
  const isMob = bp === "mobile";
  const isTab = bp === "tablet";

  const [activeCategory, setActiveCategory] = useState("All");
  const [heroIdx, setHeroIdx] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [page, setPage] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const heroTimer = useRef(null);

  useEffect(() => {
    heroTimer.current = setInterval(
      () => setHeroIdx((i) => (i + 1) % heroSlides.length),
      4000,
    );
    return () => clearInterval(heroTimer.current);
  }, []);

  const addToCart = (p) => {
    if (!cart.find((c) => c.id === p.id)) {
      setCart((prev) => [...prev, p]);
      setToast(`${p.name} added to cart!`);
      setTimeout(() => setToast(null), 2500);
    }
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);
  const slide = heroSlides[heroIdx];

  // Grid columns based on breakpoint
  const productGridCols = isMob
    ? "repeat(2, 1fr)"
    : isTab
      ? "repeat(3, 1fr)"
      : "repeat(4, 1fr)";
  const reviewGridCols = isMob
    ? "1fr"
    : isTab
      ? "repeat(2, 1fr)"
      : "repeat(3, 1fr)";
  const catGridCols = isMob
    ? "repeat(2, 1fr)"
    : isTab
      ? "repeat(4, 1fr)"
      : "repeat(4, 1fr)";

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "Collections", page: "collections" },
    { label: "About", page: "about" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: CREAM,
        minHeight: "100vh",
        color: CHARCOAL,
        paddingBottom: isMob ? 60 : 0,
      }}
    >
      {/* Quick View */}
      {quickViewProduct && (
        <QuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAdd={addToCart}
          inCart={!!cart.find((c) => c.id === quickViewProduct.id)}
          bp={bp}
        />
      )}

      {/* Toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: isMob ? "auto" : 20,
            bottom: isMob ? 70 : "auto",
            left: isMob ? 16 : "auto",
            right: isMob ? 16 : 20,
            zIndex: 9999,
            background: CHARCOAL,
            color: "#fff",
            padding: "12px 20px",
            borderRadius: 8,
            fontSize: 13,
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            textAlign: isMob ? "center" : "left",
          }}
        >
          {toast}
        </div>
      )}

      {/* Cart Sidebar */}
      {cartOpen && (
        <CartSidebar
          cart={cart}
          setCart={setCart}
          onClose={() => setCartOpen(false)}
          bp={bp}
        />
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 900,
            background: "rgba(0,0,0,0.5)",
          }}
          onClick={() => setMobileMenu(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 260,
              height: "100%",
              background: "#fff",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  fontFamily: "sans-serif",
                }}
              >
                Menu
              </span>
              <button
                onClick={() => setMobileMenu(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 22,
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => {
                  setPage(l.page);
                  setMobileMenu(false);
                }}
                style={{
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  fontSize: 16,
                  padding: "12px 0",
                  borderBottom: "0.5px solid #E8DCC8",
                  cursor: "pointer",
                  color: page === l.page ? GOLD : CHARCOAL,
                  fontWeight: page === l.page ? 700 : 400,
                  fontFamily: "sans-serif",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── HEADER ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(250,247,240,0.97)",
          backdropFilter: "blur(8px)",
          borderBottom: "0.5px solid #E8DCC8",
          padding: isMob ? "0 16px" : "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            height: isMob ? 56 : 64,
            gap: isMob ? 0 : 32,
          }}
        >
          {/* Logo */}
          <div
            style={{
              cursor: "pointer",
              flex: "0 0 auto",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onClick={() => setPage("home")}
          >
            <img
              src="/logo3.png"
              alt="Kusuma Jewels"
              style={{
                height: isMob ? 36 : 70,
                width: isMob ? 36 : 70,
                objectFit: "contain",
                borderRadius: "10%",
              }}
            />
            <span
              style={{
                fontSize: isMob ? 12 : 15,
                fontWeight: 700,
                color: CHARCOAL,
                letterSpacing: 1,
                fontFamily: "sans-serif",
                lineHeight: 1.2,
              }}
            >
              KUSUMA
              <br />
              <span
                style={{
                  fontSize: isMob ? 9 : 11,
                  fontWeight: 400,
                  color: GOLD,
                  letterSpacing: 3,
                }}
              >
                JEWELS
              </span>
            </span>
          </div>

          {/* Desktop/Tablet Nav */}
          {!isMob && (
            <nav
              style={{
                display: "flex",
                gap: isTab ? 16 : 28,
                flex: 1,
                justifyContent: "center",
              }}
            >
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => setPage(l.page)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: isTab ? 12 : 13,
                    letterSpacing: 0.5,
                    color: page === l.page ? GOLD : CHARCOAL,
                    fontWeight: page === l.page ? 700 : 400,
                    borderBottom:
                      page === l.page
                        ? `2px solid ${GOLD}`
                        : "2px solid transparent",
                    paddingBottom: 2,
                    transition: "color 0.2s",
                    fontFamily: "sans-serif",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </nav>
          )}

          {/* Spacer on mobile */}
          {isMob && <div style={{ flex: 1 }} />}

          {/* Cart Button (desktop/tablet) */}
          {!isMob && (
            <button
              onClick={() => setCartOpen(true)}
              style={{
                background: GOLD,
                color: "#fff",
                border: "none",
                padding: isTab ? "7px 12px" : "8px 16px",
                borderRadius: 8,
                fontSize: isTab ? 11 : 12,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              🛒 Cart
              {cart.length > 0 && (
                <span
                  style={{
                    background: "#fff",
                    color: GOLD,
                    borderRadius: "50%",
                    width: 18,
                    height: 18,
                    fontSize: 10,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cart.length}
                </span>
              )}
            </button>
          )}

          {/* Mobile: Cart icon + Hamburger */}
          {isMob && (
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button
                onClick={() => setCartOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 22,
                  cursor: "pointer",
                  position: "relative",
                  padding: 4,
                }}
              >
                🛒
                {cart.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: GOLD,
                      color: "#fff",
                      borderRadius: "50%",
                      width: 16,
                      height: 16,
                      fontSize: 9,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {cart.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenu(true)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 22,
                  cursor: "pointer",
                  padding: 4,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: 20,
                    height: 2,
                    background: CHARCOAL,
                    borderRadius: 2,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 20,
                    height: 2,
                    background: CHARCOAL,
                    borderRadius: 2,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 20,
                    height: 2,
                    background: CHARCOAL,
                    borderRadius: 2,
                  }}
                />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ══════════════════════════════════ HOME PAGE ══════════════════════════════════ */}
      {page === "home" && (
        <>
          {/* HERO */}
          <section
            style={{
              background: slide.bg,
              minHeight: isMob ? 420 : isTab ? 480 : 520,
              display: "flex",
              alignItems: "center",
              padding: isMob ? "48px 20px 64px" : "60px 24px",
              transition: "background 0.8s",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: -80,
                top: -80,
                width: 400,
                height: 400,
                borderRadius: "50%",
                border: "1px solid rgba(212,175,55,0.15)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: -30,
                top: -30,
                width: 250,
                height: 250,
                borderRadius: "50%",
                border: "1px solid rgba(212,175,55,0.1)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 48,
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "inline-block",
                    fontSize: 10,
                    letterSpacing: 3,
                    color: slide.accent,
                    border: `1px solid ${slide.accent}`,
                    padding: "4px 12px",
                    borderRadius: 20,
                    marginBottom: 20,
                    textTransform: "uppercase",
                    fontFamily: "sans-serif",
                  }}
                >
                  {slide.label}
                </div>
                <h1
                  style={{
                    fontSize: isMob
                      ? "clamp(28px,8vw,36px)"
                      : "clamp(36px, 6vw, 72px)",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.1,
                    margin: "0 0 16px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {slide.heading}
                </h1>
                <p
                  style={{
                    fontSize: isMob ? 14 : 16,
                    color: "rgba(255,255,255,0.6)",
                    maxWidth: 400,
                    lineHeight: 1.6,
                    marginBottom: isMob ? 24 : 32,
                    fontFamily: "sans-serif",
                  }}
                >
                  {slide.sub}
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    onClick={() => setPage("collections")}
                    style={{
                      background: GOLD_LIGHT,
                      color: CHARCOAL,
                      border: "none",
                      padding: isMob ? "11px 20px" : "13px 28px",
                      borderRadius: 8,
                      fontSize: isMob ? 12 : 13,
                      fontWeight: 700,
                      cursor: "pointer",
                      letterSpacing: 0.5,
                      fontFamily: "sans-serif",
                    }}
                  >
                    Shop Collection
                  </button>
                  <button
                    onClick={() => setPage("about")}
                    style={{
                      background: "transparent",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.3)",
                      padding: isMob ? "11px 16px" : "13px 24px",
                      borderRadius: 8,
                      fontSize: isMob ? 12 : 13,
                      cursor: "pointer",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Our Story
                  </button>
                </div>
              </div>
              {!isMob && (
                <div
                  style={{
                    fontSize: isTab ? 80 : 120,
                    flex: "0 0 auto",
                    opacity: 0.9,
                    filter: "drop-shadow(0 0 40px rgba(212,175,55,0.3))",
                  }}
                >
                  {slide.emoji}
                </div>
              )}
            </div>

            {/* Slide dots */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 8,
              }}
            >
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIdx(i)}
                  style={{
                    width: i === heroIdx ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background:
                      i === heroIdx ? GOLD_LIGHT : "rgba(255,255,255,0.3)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </section>

          {/* CATEGORY TILES */}
          <section
            style={{
              padding: isMob ? "40px 16px" : "64px 24px",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: isMob ? 28 : 48 }}>
              <div
                style={{
                  fontSize: 11,
                  color: GOLD,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginBottom: 8,
                  fontFamily: "sans-serif",
                }}
              >
                ✦ Our Collections ✦
              </div>
              <h2
                style={{
                  fontSize: isMob ? 26 : 36,
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                Crafted for Every Occasion
              </h2>
              <p
                style={{
                  color: MUTED,
                  marginTop: 10,
                  fontSize: isMob ? 13 : 15,
                  fontFamily: "sans-serif",
                }}
              >
                Discover fine jewellery across bridal, festive, and everyday
                styles.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: catGridCols,
                gap: isMob ? 12 : 20,
              }}
            >
              {[
                { cat: "Necklaces", emoji: "📿", label: "Bridal & Everyday" },
                { cat: "Earrings", emoji: "💎", label: "Jhumkas & Chandbalis" },
                { cat: "Bangles", emoji: "⭕", label: "Temple & Kada" },
                { cat: "Rings", emoji: "💍", label: "Solitaire & Cocktail" },
              ].map((c) => (
                <div
                  key={c.cat}
                  onClick={() => {
                    setActiveCategory(c.cat);
                    setPage("collections");
                  }}
                  style={{
                    background: "#fff",
                    border: "0.5px solid #E8DCC8",
                    borderRadius: 16,
                    padding: isMob ? "20px 12px" : "28px 20px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = GOLD_PALE;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <div style={{ fontSize: isMob ? 36 : 48, marginBottom: 10 }}>
                    {c.emoji}
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: isMob ? 13 : 16,
                      marginBottom: 4,
                    }}
                  >
                    {c.cat}
                  </div>
                  <div
                    style={{
                      fontSize: isMob ? 11 : 12,
                      color: MUTED,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: GOLD,
                      fontFamily: "sans-serif",
                      letterSpacing: 1,
                      marginTop: 6,
                    }}
                  >
                    Explore →
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MARQUEE */}
          <div
            style={{
              background: CHARCOAL,
              padding: "12px 0",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                display: "inline-block",
                animation: "marquee 20s linear infinite",
                color: GOLD_LIGHT,
                fontSize: isMob ? 11 : 13,
                letterSpacing: 3,
                fontFamily: "sans-serif",
              }}
            >
              {Array(6)
                .fill(
                  "✦ FREE JEWELLERY COLLECTION &nbsp;&nbsp; ✦ PREMIUM CRAFTSMANSHIP &nbsp;&nbsp; ✦ KUSUMA JEWELS Kadapa &nbsp;&nbsp; ✦ BRIDAL SPECIAL &nbsp;&nbsp; ",
                )
                .join("")}
            </div>
          </div>

          {/* FEATURED PRODUCTS */}
          <section
            style={{
              padding: isMob ? "40px 16px" : "64px 24px",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: isMob ? 28 : 48 }}>
              <div
                style={{
                  fontSize: 11,
                  color: GOLD,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginBottom: 8,
                  fontFamily: "sans-serif",
                }}
              >
                ✦ Featured ✦
              </div>
              <h2
                style={{
                  fontSize: isMob ? 26 : 36,
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                Our Finest Pieces
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: productGridCols,
                gap: isMob ? 12 : 20,
              }}
            >
              {products.slice(0, isMob ? 4 : 4).map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAdd={addToCart}
                  inCart={!!cart.find((c) => c.id === p.id)}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <button
                onClick={() => setPage("collections")}
                style={{
                  background: "none",
                  border: `1.5px solid ${GOLD}`,
                  color: GOLD,
                  padding: "12px 32px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: 0.5,
                  fontFamily: "sans-serif",
                }}
              >
                View All Jewellery →
              </button>
            </div>
          </section>

          {/* REVIEWS */}
          <section
            style={{
              background: CHARCOAL,
              padding: isMob ? "40px 16px" : "64px 24px",
            }}
          >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div
                style={{ textAlign: "center", marginBottom: isMob ? 28 : 48 }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: GOLD,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    marginBottom: 8,
                    fontFamily: "sans-serif",
                  }}
                >
                  ✦ Reviews ✦
                </div>
                <h2
                  style={{
                    fontSize: isMob ? 26 : 36,
                    margin: 0,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  What Our Customers Say
                </h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: reviewGridCols,
                  gap: isMob ? 12 : 20,
                }}
              >
                {reviews.slice(0, isMob ? 4 : 5).map((r, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "0.5px solid rgba(212,175,55,0.2)",
                      borderRadius: 14,
                      padding: isMob ? 16 : 20,
                      color: "#fff",
                    }}
                  >
                    <StarRating count={r.stars} />
                    <p
                      style={{
                        fontSize: isMob ? 12 : 13,
                        color: "rgba(255,255,255,0.7)",
                        margin: "10px 0",
                        lineHeight: 1.6,
                        fontFamily: "sans-serif",
                      }}
                    >
                      "{r.text}"
                    </p>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        fontFamily: "sans-serif",
                      }}
                    >
                      {r.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: GOLD,
                        fontFamily: "sans-serif",
                      }}
                    >
                      {r.city}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ══════════════════════════════ COLLECTIONS PAGE ══════════════════════════════ */}
      {page === "collections" && (
        <section
          style={{
            padding: isMob ? "32px 16px" : "48px 24px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: isMob ? 24 : 40 }}>
            <div
              style={{
                fontSize: 11,
                color: GOLD,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 8,
                fontFamily: "sans-serif",
              }}
            >
              ✦ All Jewellery ✦
            </div>
            <h1
              style={{
                fontSize: isMob ? 28 : 36,
                margin: "0 0 10px",
                fontWeight: 700,
              }}
            >
              Our Jewellery Collection
            </h1>
            <p
              style={{
                color: MUTED,
                fontSize: isMob ? 13 : 15,
                fontFamily: "sans-serif",
              }}
            >
              Browse our complete range. Tap any piece for a closer look.
            </p>
          </div>

          {/* Filter pills — horizontal scroll on mobile */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 28,
              overflowX: isMob ? "auto" : "visible",
              paddingBottom: isMob ? 4 : 0,
              WebkitOverflowScrolling: "touch",
            }}
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 24,
                  border: `1.5px solid ${activeCategory === c ? GOLD : "#E8DCC8"}`,
                  background: activeCategory === c ? GOLD : "transparent",
                  color: activeCategory === c ? "#fff" : CHARCOAL,
                  fontSize: 12,
                  cursor: "pointer",
                  fontFamily: "sans-serif",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: productGridCols,
              gap: isMob ? 12 : 20,
            }}
          >
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAdd={addToCart}
                inCart={!!cart.find((c) => c.id === p.id)}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════ ABOUT PAGE ══════════════════════════════════ */}
      {page === "about" && (
        <section
          style={{
            padding: isMob ? "40px 16px" : "64px 24px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: GOLD,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 16,
              fontFamily: "sans-serif",
            }}
          >
            ✦ Our Story ✦
          </div>
          <h1
            style={{
              fontSize: isMob ? 30 : 40,
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            Kusuma Jewels
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMob ? "1fr" : "1fr 1fr",
              gap: isMob ? 28 : 40,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: isMob ? 15 : 16,
                  lineHeight: 1.8,
                  color: MUTED,
                  fontFamily: "sans-serif",
                }}
              >
                Founded in 1985 in Proddatur, Andhra Pradesh,{" "}
                <strong>Kusuma Jewels</strong> has been crafting fine jewellery
                for generations. From traditional Kundan bridal sets to
                contemporary diamond rings, every piece is made with devotion
                and precision.
              </p>
              <p
                style={{
                  fontSize: isMob ? 15 : 16,
                  lineHeight: 1.8,
                  color: MUTED,
                  fontFamily: "sans-serif",
                }}
              >
                Our artisans carry forward centuries-old techniques of
                Meenakari, Filigree, and Temple jewellery — blending heritage
                with modern sensibility for the discerning Indian woman.
              </p>
            </div>
            <div>
              {[
                { num: "38+", label: "Years of Craftsmanship" },
                { num: "5000+", label: "Happy Customers" },
                { num: "500+", label: "Unique Designs" },
                { num: "100%", label: "Handcrafted Quality" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "14px 0",
                    borderBottom: "0.5px solid #E8DCC8",
                  }}
                >
                  <div
                    style={{
                      fontSize: isMob ? 24 : 28,
                      fontWeight: 700,
                      color: GOLD,
                      minWidth: 64,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: MUTED,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════ CONTACT PAGE ══════════════════════════════════ */}
      {page === "contact" && (
        <section
          style={{
            padding: isMob ? "40px 16px" : "64px 24px",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: GOLD,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 16,
              fontFamily: "sans-serif",
            }}
          >
            ✦ Reach Us ✦
          </div>
          <h1
            style={{
              fontSize: isMob ? 28 : 36,
              fontWeight: 700,
              marginBottom: 28,
            }}
          >
            Contact Kusuma Jewels
          </h1>
          {[
            {
              icon: "📍",
              label: "Address",
              val: "11/316, Main Bazar, Proddatur, Kadapa – 516360",
            },
            { icon: "📞", label: "Phone", val: "+91 98491 34500" },
            { icon: "✉️", label: "Email", val: "nagendrajewellers1@gmail.com" },
            {
              icon: "⏰",
              label: "Hours",
              val: "Mon–Sat: 10AM – 8PM | Sun: 11AM – 6PM",
            },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                display: "flex",
                gap: 16,
                padding: "14px 0",
                borderBottom: "0.5px solid #E8DCC8",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: 22 }}>{c.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    color: GOLD,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontFamily: "sans-serif",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    fontSize: isMob ? 14 : 15,
                    marginTop: 4,
                    fontFamily: "sans-serif",
                  }}
                >
                  {c.val}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: 36,
              background: "#fff",
              border: "0.5px solid #E8DCC8",
              borderRadius: 16,
              padding: isMob ? 20 : 28,
            }}
          >
            <h3
              style={{
                margin: "0 0 18px",
                fontFamily: "sans-serif",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Send us a message
            </h3>
            {["Your Name", "Phone Number", "Email Address"].map((ph) => (
              <input
                key={ph}
                placeholder={ph}
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: 12,
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #E8DCC8",
                  fontSize: 14,
                  fontFamily: "sans-serif",
                  boxSizing: "border-box",
                }}
              />
            ))}
            <textarea
              placeholder="Your enquiry..."
              rows={4}
              style={{
                display: "block",
                width: "100%",
                marginBottom: 16,
                padding: "10px 14px",
                borderRadius: 8,
                border: "1px solid #E8DCC8",
                fontSize: 14,
                fontFamily: "sans-serif",
                resize: "vertical",
                boxSizing: "border-box",
              }}
            />
            <button
              style={{
                background: GOLD,
                color: "#fff",
                border: "none",
                padding: "12px 28px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "sans-serif",
                width: isMob ? "100%" : "auto",
              }}
            >
              Send Message →
            </button>
          </div>
        </section>
      )}

      {/* ══════════════════════════════ PRIVACY POLICY ══════════════════════════════ */}
      {page === "privacy" && (
        <section
          style={{
            padding: isMob ? "40px 16px" : "64px 24px",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: GOLD,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 16,
              fontFamily: "sans-serif",
            }}
          >
            ✦ Legal ✦
          </div>
          <h1
            style={{
              fontSize: isMob ? 28 : 38,
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: 12,
              color: MUTED,
              fontFamily: "sans-serif",
              marginBottom: 36,
            }}
          >
            Last updated: June 2026
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: MUTED,
                fontFamily: "sans-serif",
                margin: 0,
              }}
            >
              KUSUMA JEWELS ("we" or "us") respects the privacy of our users. We
              make every effort to treat your personal information safely and
              securely. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your data.
            </p>
            <div
              style={{
                background: GOLD_PALE,
                border: `1px solid ${GOLD}`,
                borderRadius: 10,
                padding: "14px 18px",
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: CHARCOAL,
                  fontFamily: "sans-serif",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                If You Do Not Agree With The Terms Of This Privacy Policy,
                Please Do Not Access The Website.
              </p>
            </div>
            {[
              {
                title: "Information We Collect",
                text: "We may collect personal information such as your name, email address, phone number, and shipping address when you register, place an order, or contact us through our platform.",
              },
              {
                title: "How We Use Your Information",
                text: "Your information is used to process orders, send confirmations, provide customer support, and improve our services. We may also send promotional communications with your consent.",
              },
              {
                title: "Data Security",
                text: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.",
              },
              {
                title: "Cookies",
                text: "Our website uses cookies to enhance your browsing experience. You may choose to disable cookies through your browser settings, though this may affect site functionality.",
              },
              {
                title: "Contact Us",
                text: "If you have any questions about this Privacy Policy, please contact us at nagendrajewellers1@gmail.com or visit our store in Proddatur, Andhra Pradesh.",
              },
            ].map((s) => (
              <div
                key={s.title}
                style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 20 }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    margin: "0 0 8px",
                    color: CHARCOAL,
                    fontFamily: "sans-serif",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.9,
                    color: MUTED,
                    fontFamily: "sans-serif",
                    margin: 0,
                  }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════ TERMS PAGE ══════════════════════════════════ */}
      {page === "terms" && (
        <section
          style={{
            padding: isMob ? "40px 16px" : "64px 24px",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: GOLD,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 16,
              fontFamily: "sans-serif",
            }}
          >
            ✦ Legal ✦
          </div>
          <h1
            style={{
              fontSize: isMob ? 28 : 38,
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            Terms & Conditions
          </h1>
          <p
            style={{
              fontSize: 12,
              color: MUTED,
              fontFamily: "sans-serif",
              marginBottom: 36,
            }}
          >
            Last updated: June 2026
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                num: "01",
                title: "Product Information and Accuracy",
                text: "While we strive for accuracy in product descriptions and images, variations may occur. Jewellery pieces may differ slightly in colour, texture, and finish due to screen calibration and photographic lighting.",
              },
              {
                num: "02",
                title: "Pricing and Payment",
                text: "All prices are listed in Indian Rupees (INR) and are subject to change without notice. Additional charges such as taxes and shipping fees may apply and will be displayed at checkout.",
              },
              {
                num: "03",
                title: "Returns and Exchanges",
                text: "We offer returns and exchanges within 7 days of delivery, provided the item is in its original condition, unworn, and in original packaging. Custom pieces are not eligible for return.",
              },
              {
                num: "04",
                title: "Intellectual Property",
                text: "All content on this website — including text, images, logos, and jewellery designs — is the exclusive property of Kusuma Jewels. Reproduction without prior written consent is strictly prohibited.",
              },
              {
                num: "05",
                title: "Governing Law",
                text: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Proddatur, Andhra Pradesh.",
              },
              {
                num: "06",
                title: "Limitation of Liability",
                text: "Kusuma Jewels shall not be liable for any indirect or consequential damages. Our total liability shall not exceed the amount paid for the product in question.",
              },
            ].map((s) => (
              <div
                key={s.num}
                style={{
                  display: "flex",
                  gap: isMob ? 14 : 24,
                  alignItems: "flex-start",
                  background: "#fff",
                  border: "0.5px solid #E8DCC8",
                  borderRadius: 14,
                  padding: isMob ? "16px" : "22px 24px",
                }}
              >
                <div
                  style={{
                    fontSize: isMob ? 18 : 24,
                    fontWeight: 700,
                    color: GOLD_PALE,
                    lineHeight: 1,
                    minWidth: 36,
                    fontFamily: "sans-serif",
                    WebkitTextStroke: `1px ${GOLD}`,
                  }}
                >
                  {s.num}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: isMob ? 14 : 16,
                      fontWeight: 700,
                      margin: "0 0 6px",
                      color: CHARCOAL,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: isMob ? 13 : 15,
                      lineHeight: 1.9,
                      color: MUTED,
                      fontFamily: "sans-serif",
                      margin: 0,
                    }}
                  >
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
            <div
              style={{
                background: GOLD_PALE,
                border: `0.5px solid ${GOLD}`,
                borderRadius: 12,
                padding: "16px 20px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  color: CHARCOAL,
                  fontFamily: "sans-serif",
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                By using our website or purchasing our products, you agree to
                these Terms & Conditions.
                <br />
                Questions? Contact <strong>nagendrajewellers1@gmail.com</strong>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════ FOOTER ══════════════════════════════════════ */}
      <footer
        style={{
          background: CHARCOAL,
          color: "#fff",
          padding: isMob ? "40px 16px 20px" : "48px 24px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMob
                ? "1fr 1fr"
                : isTab
                  ? "1fr 1fr 1fr"
                  : "repeat(4, 1fr)",
              gap: isMob ? 24 : 32,
              marginBottom: 28,
            }}
          >
            <div style={{ gridColumn: isMob ? "1 / -1" : "auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                  cursor: "pointer",
                }}
                onClick={() => setPage("home")}
              >
                <img
                  src="/logo3.png"
                  alt="Kusuma Jewels"
                  style={{
                    height: 70,
                    width: 70,
                    objectFit: "contain",
                    borderRadius: "10%",
                  }}
                />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: 1,
                    fontFamily: "sans-serif",
                    lineHeight: 1.2,
                  }}
                >
                  KUSUMA
                  <br />
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 400,
                      color: GOLD,
                      letterSpacing: 3,
                    }}
                  >
                    JEWELS
                  </span>
                </span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "#888",
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "sans-serif",
                }}
              >
                Crafting timeless jewellery in Proddatur since 1985. Every
                piece, a story.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  marginBottom: 14,
                  fontSize: 13,
                  fontFamily: "sans-serif",
                }}
              >
                Shop
              </div>
              {["Necklaces", "Earrings", "Bangles", "Rings"].map((l) => (
                <div
                  key={l}
                  onClick={() => {
                    setActiveCategory(l);
                    setPage("collections");
                  }}
                  style={{
                    fontSize: 13,
                    color: "#888",
                    marginBottom: 8,
                    cursor: "pointer",
                    fontFamily: "sans-serif",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  marginBottom: 14,
                  fontSize: 13,
                  fontFamily: "sans-serif",
                }}
              >
                Company
              </div>
              {[
                { label: "About Us", pg: "about" },
                { label: "Contact", pg: "contact" },
                { label: "Privacy Policy", pg: "privacy" },
                { label: "Terms & Conditions", pg: "terms" },
              ].map((l) => (
                <div
                  key={l.label}
                  onClick={() => setPage(l.pg)}
                  style={{
                    fontSize: 13,
                    color: "#888",
                    marginBottom: 8,
                    cursor: "pointer",
                    fontFamily: "sans-serif",
                  }}
                >
                  {l.label}
                </div>
              ))}
            </div>
            {!isMob && (
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    marginBottom: 14,
                    fontSize: 13,
                    fontFamily: "sans-serif",
                  }}
                >
                  Contact
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#888",
                    marginBottom: 8,
                    fontFamily: "sans-serif",
                  }}
                >
                  📍 11/316, Main Bazar, Proddatur, Kadapa – 516360
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#888",
                    marginBottom: 8,
                    fontFamily: "sans-serif",
                  }}
                >
                  📞 +91 98491 34500
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#888",
                    fontFamily: "sans-serif",
                  }}
                >
                  ✉️ nagendrajewellers1@gmail.com
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              borderTop: "0.5px solid rgba(255,255,255,0.1)",
              paddingTop: 18,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <div
              style={{ fontSize: 11, color: "#666", fontFamily: "sans-serif" }}
            >
              © 2026 Kusuma Jewels. All rights reserved.
            </div>
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span
                onClick={() => setPage("privacy")}
                style={{
                  fontSize: 11,
                  color: "#888",
                  cursor: "pointer",
                  fontFamily: "sans-serif",
                  textDecoration: "underline",
                }}
              >
                Privacy Policy
              </span>
              <span
                onClick={() => setPage("terms")}
                style={{
                  fontSize: 11,
                  color: "#888",
                  cursor: "pointer",
                  fontFamily: "sans-serif",
                  textDecoration: "underline",
                }}
              >
                Terms & Conditions
              </span>
              <div
                style={{ fontSize: 11, color: GOLD, fontFamily: "sans-serif" }}
              >
                Made with ✦ in Andhra Pradesh
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      {isMob && (
        <MobileBottomNav
          page={page}
          setPage={setPage}
          cartCount={cart.length}
          setCartOpen={setCartOpen}
        />
      )}

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        * { -webkit-tap-highlight-color: transparent; }
        input:focus, textarea:focus { outline: 1px solid ${GOLD}; }
      `}</style>
    </div>
  );
}
