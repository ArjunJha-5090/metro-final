import React, { useState } from 'react';

interface MenuItem {
  name: string;
  price: string;
  isVeg?: boolean;
  isEgg?: boolean;
}

interface MenuSection {
  title: string;
  note?: string;
  items: MenuItem[];
}

// ── veg indicator dot ────────────────────────────────────────────
const VegDot: React.FC<{ isVeg?: boolean; isEgg?: boolean }> = ({ isVeg, isEgg }) => {
  if (isEgg)
    return (
      <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-yellow-500 flex-shrink-0">
        <span className="w-2 h-2 rounded-full bg-yellow-500" />
      </span>
    );
  if (isVeg)
    return (
      <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-green-600 flex-shrink-0">
        <span className="w-2 h-2 rounded-full bg-green-600" />
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-red-600 flex-shrink-0">
      <span className="w-2 h-2 rounded-full bg-red-600" />
    </span>
  );
};

// ── section card ─────────────────────────────────────────────────
const MenuCard: React.FC<{ section: MenuSection; accent?: string }> = ({
  section,
  accent = 'bg-primary',
}) => (
  <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
    {/* Header */}
    <div className={`${accent} px-6 py-4`}>
      <h3 className="font-heading text-xl font-bold text-white uppercase tracking-widest">
        {section.title}
      </h3>
      {section.note && (
        <p className="text-white/70 text-xs mt-1 font-medium">{section.note}</p>
      )}
    </div>
    {/* Items */}
    <ul className="divide-y divide-orange-50">
      {section.items.map((item, i) => (
        <li
          key={i}
          className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-orange-50/60 transition-colors group"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            {item.isVeg !== undefined && (
              <VegDot isVeg={item.isVeg} isEgg={item.isEgg} />
            )}
            <span className="font-sans text-sm text-secondary group-hover:text-primary transition-colors leading-snug">
              {i + 1}. {item.name}
            </span>
          </div>
          <span className="font-heading font-bold text-primary text-sm whitespace-nowrap">
            ₹{item.price}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

// ── data ─────────────────────────────────────────────────────────
const indianVeg: MenuSection = {
  title: 'Indian Veg.',
  note: 'Full / Half available',
  items: [
    { name: 'Paneer Tikka Masala', price: '370 / 190', isVeg: true },
    { name: 'Paneer Butter Masala', price: '300', isVeg: true },
    { name: 'Mushroom Masala', price: '350 / 180', isVeg: true },
    { name: 'Kadhai Paneer', price: '290', isVeg: true },
    { name: 'Paneer Punjabi', price: '300', isVeg: true },
    { name: 'Paneer Do Pyaza', price: '290', isVeg: true },
    { name: 'Malai Kofta', price: '310', isVeg: true },
    { name: 'Matar Paneer', price: '200', isVeg: true },
    { name: 'Mix Veg', price: '200', isVeg: true },
    { name: 'Chana Dal Tadka', price: '140', isVeg: true },
    { name: 'Plain Rice', price: '120', isVeg: true },
    { name: 'Jeera Rice', price: '140', isVeg: true },
    { name: 'Veg Pulao', price: '180', isVeg: true },
    { name: 'Veg Biryani', price: '180', isVeg: true },
    { name: 'Paneer Pakoda', price: '120', isVeg: true },
    { name: 'Raita', price: '50', isVeg: true },
  ],
};

const indianNonVeg: MenuSection = {
  title: 'Indian Non Veg.',
  note: 'Full / Half available',
  items: [
    { name: 'Chicken Biryani + Raita', price: '230', isVeg: false },
    { name: 'Egg Biryani', price: '180', isEgg: true },
    { name: 'Chicken Biryani Special', price: '300', isVeg: false },
    { name: 'Chicken Kassa', price: '350 / 180', isVeg: false },
    { name: 'Chicken Butter Masala', price: '350 / 180', isVeg: false },
    { name: 'Chicken Dehati', price: '330 / 170', isVeg: false },
    { name: 'Chicken Dehati (Full Murga)', price: '540', isVeg: false },
    { name: 'Chicken Kadai', price: '340 / 180', isVeg: false },
    { name: 'Chicken Do Pyaza', price: '340 / 180', isVeg: false },
    { name: 'Chicken Punjabi', price: '350', isVeg: false },
    { name: 'Mutton Curry', price: '480 / 250', isVeg: false },
    { name: 'Fish Curry', price: '290', isVeg: false },
    { name: 'Fish Fry (4 pcs)', price: '240', isVeg: false },
    { name: 'Mutton Rogan Josh', price: '480', isVeg: false },
    { name: 'Egg Curry (4 pcs)', price: '180', isEgg: true },
    { name: 'Murgh Musallam', price: '590', isVeg: false },
    { name: 'Chicken Lababdar', price: '360', isVeg: false },
    { name: 'Chicken Fry (12 pcs)', price: '360', isVeg: false },
    { name: 'Chicken Methi', price: '340', isVeg: false },
  ],
};

const tandoor: MenuSection = {
  title: 'Tandoor',
  note: 'Full / Half available',
  items: [
    { name: 'Paneer Tikka', price: '250', isVeg: true },
    { name: 'Paneer Malai Tikka', price: '260', isVeg: true },
    { name: 'Chicken Tikka', price: '310', isVeg: false },
    { name: 'Chicken Malai Tikka', price: '310', isVeg: false },
    { name: 'Chicken Haryali Tikka', price: '310', isVeg: false },
    { name: 'Chicken Tandoori', price: '420 / 220', isVeg: false },
    { name: 'Chicken Tandoori Kabab', price: '340', isVeg: false },
    { name: 'Chicken Reshmi Kabab', price: '360', isVeg: false },
    { name: 'Chicken Patiala', price: '380 / 200', isVeg: false },
    { name: 'Tandoori Momo', price: '190', isVeg: true },
    { name: 'Barra Kabab', price: '480 / 250', isVeg: false },
    { name: 'Murg Whole Tandoori', price: '480', isVeg: false },
    { name: 'Mutton Seekh Kabab', price: '540 / 260', isVeg: false },
    { name: 'Murg Anmol', price: '480 / 250', isVeg: false },
    { name: 'Mushroom Tikka', price: '360', isVeg: true },
    { name: 'Veg Seekh Kabab', price: '330', isVeg: true },
    { name: 'Chicken Seekh Kabab', price: '380', isVeg: false },
  ],
};

const chinese: MenuSection = {
  title: 'Chinese',
  note: 'Full / Half available',
  items: [
    { name: 'Veg Manchurian', price: '220', isVeg: true },
    { name: 'Paneer Manchurian', price: '240', isVeg: true },
    { name: 'Spring Roll (Veg)', price: '150', isVeg: true },
    { name: 'Spring Roll (Non Veg)', price: '190', isVeg: false },
    { name: 'Crispy Baby Corn Chilli', price: '240', isVeg: true },
    { name: 'Paneer Chilli', price: '240', isVeg: true },
    { name: 'Chicken Lollipop', price: '300', isVeg: false },
    { name: 'Chicken Fried Rice', price: '220', isVeg: false },
    { name: 'Veg Fried Rice', price: '180', isVeg: true },
    { name: 'Egg Fried Rice', price: '180', isEgg: true },
    { name: 'Veg Noodles', price: '150', isVeg: true },
    { name: 'Chilli Garlic Noodles', price: '200', isVeg: true },
    { name: 'Chicken Noodles', price: '230', isVeg: false },
    { name: 'Paneer Noodles', price: '180', isVeg: true },
    { name: 'Egg Noodles', price: '180', isEgg: true },
    { name: 'Schezwan Noodles', price: '190', isVeg: true },
    { name: 'Chicken Chilli Bone', price: '300 / 160', isVeg: false },
    { name: 'Chicken Chilli Boneless', price: '300 / 160', isVeg: false },
    { name: 'Paneer Satte', price: '270', isVeg: true },
    { name: 'Tost Chilli Momo (Veg)', price: '180', isVeg: true },
    { name: 'Tost Chilli Momo (Non Veg)', price: '200', isVeg: false },
    { name: 'Mushroom Chilli', price: '270', isVeg: true },
    { name: 'Corn Salt & Pepper', price: '240', isVeg: true },
    { name: 'Honey Chicken Chilli', price: '300', isVeg: false },
    { name: 'Garlic Chilli', price: '300', isVeg: true },
  ],
};

const soup: MenuSection = {
  title: 'Soup',
  items: [
    { name: 'Veg Hot & Sour', price: '100', isVeg: true },
    { name: 'Chicken Hot & Sour', price: '120', isVeg: false },
    { name: 'Veg Manchow', price: '100', isVeg: true },
    { name: 'Sweet Corn Veg Soup', price: '100', isVeg: true },
    { name: 'Sweet Corn Chicken Soup', price: '120', isVeg: false },
  ],
};

const rolls: MenuSection = {
  title: 'Rolls',
  items: [
    { name: 'Egg Roll', price: '70', isEgg: true },
    { name: 'Double Egg Roll', price: '80', isEgg: true },
    { name: 'Chicken Roll', price: '100', isVeg: false },
    { name: 'Chicken Egg Roll', price: '110', isVeg: false },
    { name: 'Double Egg & Double Chicken Roll', price: '150', isVeg: false },
    { name: 'Chicken Tikka Egg Roll', price: '140', isVeg: false },
    { name: 'Paneer Roll', price: '100', isVeg: true },
  ],
};

const momo: MenuSection = {
  title: 'Momo',
  items: [
    { name: 'Paneer Momo Steam', price: '90', isVeg: true },
    { name: 'Paneer Momo Fried', price: '100', isVeg: true },
    { name: 'Chicken Momo Steam', price: '130', isVeg: false },
    { name: 'Chicken Momo Fried', price: '140', isVeg: false },
  ],
};

const roti: MenuSection = {
  title: 'Roti',
  items: [
    { name: 'Tandoori Roti / Butter Roti', price: '25 / 30', isVeg: true },
    { name: 'Lachha Paratha', price: '40', isVeg: true },
    { name: 'Naan / Butter Naan', price: '35 / 40', isVeg: true },
    { name: 'Stuffed Naan', price: '50', isVeg: true },
    { name: 'Garlic Naan', price: '45', isVeg: true },
    { name: 'Rumali Roti', price: '50', isVeg: true },
    { name: 'Veg Kulcha', price: '150', isVeg: true },
    { name: 'Non Veg Kulcha', price: '150', isVeg: false },
  ],
};

const thali: MenuSection = {
  title: 'Thali',
  items: [
    { name: 'Veg Thali', price: '210', isVeg: true },
    { name: 'Non Veg Thali', price: '250', isVeg: false },
  ],
};

const beverage: MenuSection = {
  title: 'Beverage',
  items: [
    { name: 'Tea', price: '30', isVeg: true },
    { name: 'Coffee', price: '30', isVeg: true },
    { name: 'Cold Drink', price: 'On request', isVeg: true },
    { name: 'Water', price: 'Complimentary', isVeg: true },
  ],
};

const dessert: MenuSection = {
  title: 'Dessert',
  items: [
    { name: 'Sweets', price: 'Seasonal', isVeg: true },
    { name: 'Rasgulla', price: 'Seasonal', isVeg: true },
    { name: 'Halwa', price: 'Seasonal', isVeg: true },
    { name: 'Dahi Sudha', price: 'Seasonal', isVeg: true },
  ],
};

// ── tab config ───────────────────────────────────────────────────
const tabs = [
  { id: 'all', label: 'All' },
  { id: 'veg', label: '🟢 Veg' },
  { id: 'nonveg', label: '🔴 Non Veg' },
  { id: 'tandoor', label: '🔥 Tandoor' },
  { id: 'chinese', label: '🥢 Chinese' },
  { id: 'snacks', label: '🥙 Snacks & More' },
];

// ── page ─────────────────────────────────────────────────────────
export const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const showVeg = activeTab === 'all' || activeTab === 'veg';
  const showNonVeg = activeTab === 'all' || activeTab === 'nonveg';
  const showTandoor = activeTab === 'all' || activeTab === 'tandoor';
  const showChinese = activeTab === 'all' || activeTab === 'chinese';
  const showSnacks = activeTab === 'all' || activeTab === 'snacks';

  return (
    <div className="pt-24 pb-24 min-h-screen bg-background relative">
      {/* subtle pattern */}
      <div className="absolute inset-0 bg-indian-pattern opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Hero ── */}
        <div className="text-center mb-14 mt-4">
          <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-surface border border-accent/30 text-xs font-bold tracking-[0.25em] text-primary uppercase mb-6 shadow-sm">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Metro Food Court
            <span className="w-1 h-1 rounded-full bg-accent" />
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-secondary mb-4 leading-tight">
            Our Full Menu
          </h1>
          <p className="text-text/60 max-w-xl mx-auto text-lg font-light">
            Fresh ingredients · Authentic recipes · Cooked to order
          </p>

          {/* legend */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm font-medium text-text/70">
            <span className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-green-600">
                <span className="w-2 h-2 rounded-full bg-green-600" />
              </span>
              Vegetarian
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-red-600">
                <span className="w-2 h-2 rounded-full bg-red-600" />
              </span>
              Non-Vegetarian
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-yellow-500">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
              </span>
              Egg
            </span>
          </div>
        </div>

        {/* ── Free delivery badge ── */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-primary text-white font-heading text-lg uppercase tracking-widest px-8 py-3 border-4 border-secondary shadow-[4px_4px_0px_#111] rotate-[-1deg]">
            🚀 Free Home Delivery Available
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full font-heading text-sm font-semibold uppercase tracking-wide transition-all duration-200 border-2 ${
                activeTab === tab.id
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-white text-secondary border-secondary/20 hover:border-primary hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {/* Indian Veg */}
          {showVeg && (
            <div className="md:col-span-2 xl:col-span-1">
              <MenuCard section={indianVeg} accent="bg-green-700" />
            </div>
          )}

          {/* Indian Non Veg */}
          {showNonVeg && (
            <div className="md:col-span-2 xl:col-span-1">
              <MenuCard section={indianNonVeg} accent="bg-red-700" />
            </div>
          )}

          {/* Tandoor */}
          {showTandoor && (
            <div className="md:col-span-2 xl:col-span-1">
              <MenuCard section={tandoor} accent="bg-orange-700" />
            </div>
          )}

          {/* Chinese */}
          {showChinese && (
            <div className="md:col-span-2 xl:col-span-1">
              <MenuCard section={chinese} accent="bg-red-600" />
            </div>
          )}

          {/* Soup + Rolls side by side */}
          {showSnacks && (
            <>
              <div>
                <MenuCard section={soup} accent="bg-teal-700" />
              </div>
              <div>
                <MenuCard section={rolls} accent="bg-amber-700" />
              </div>
              <div>
                <MenuCard section={momo} accent="bg-purple-700" />
              </div>
              <div>
                <MenuCard section={roti} accent="bg-yellow-700" />
              </div>
              <div>
                <MenuCard section={thali} accent="bg-primary" />
              </div>
            </>
          )}

          {/* Beverage + Dessert — always shown */}
          {(activeTab === 'all' || activeTab === 'snacks') && (
            <>
              <div>
                <MenuCard section={beverage} accent="bg-sky-700" />
              </div>
              <div>
                <MenuCard section={dessert} accent="bg-pink-700" />
              </div>
            </>
          )}
        </div>

        {/* ── Footer note ── */}
        <p className="text-center text-text/40 text-xs mt-16 font-light">
          * Prices are inclusive of all taxes. Menu items and prices subject to change without prior notice.
          Half portions available for select items as indicated.
        </p>
      </div>
    </div>
  );
};
