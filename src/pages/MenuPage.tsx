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

const MenuSectionDisplay: React.FC<{ section: MenuSection; filter: string }> = ({ section, filter }) => {
  // Filter items based on dietary preference
  const filteredItems = section.items.filter(item => {
    if (filter === 'veg') return item.isVeg === true && !item.isEgg;
    if (filter === 'nonveg') return item.isVeg === false || item.isEgg === true;
    return true;
  });

  if (filteredItems.length === 0) return null;

  return (
    <div className="mb-16 md:mb-20">
      <div className="text-center mb-8 md:mb-10 relative px-2">
        <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent -translate-y-1/2"></div>
        <span className="relative z-10 bg-[#FDFBF7] px-6 md:px-8 py-2 md:py-3 border border-accent/30 rounded-full font-heading text-2xl md:text-4xl text-secondary inline-block shadow-sm mx-auto max-w-full leading-tight">
          {section.title}
        </span>
        {section.note && (
          <p className="text-accent text-xs md:text-sm mt-3 md:mt-4 font-bold uppercase tracking-widest">{section.note}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-6 md:gap-y-7">
        {filteredItems.map((item, i) => (
          <div key={i} className="flex items-end group w-full">
            <div className="flex items-start gap-2.5 pb-1 shrink">
              <div className="mt-1 md:mt-1.5 flex-shrink-0">
                {item.isVeg !== undefined && (
                  <VegDot isVeg={item.isVeg} isEgg={item.isEgg} />
                )}
              </div>
              <span className="font-sans text-[15px] sm:text-base md:text-lg text-secondary group-hover:text-primary transition-colors leading-snug md:leading-none font-medium break-words">
                {item.name}
              </span>
            </div>
            <div className="flex-1 border-b-[2px] md:border-b-[3px] border-dotted border-accent/30 mx-2 md:mx-4 mb-2 opacity-60 group-hover:opacity-100 group-hover:border-primary/50 transition-all min-w-[1rem]"></div>
            <span className="font-heading font-bold text-primary text-[17px] sm:text-lg md:text-2xl leading-none pb-1 shrink-0">
              ₹{item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

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
  { id: 'all', label: 'All Categories' },
  { id: 'veg', label: 'Pure Veg Only' },
  { id: 'nonveg', label: 'Non-Veg Only' },
  { id: 'rolls', label: 'Rolls' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'tandoor', label: 'Tandoor' },
  { id: 'more', label: 'More Delights' },
];

// ── page ─────────────────────────────────────────────────────────
export const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const isDietaryFilter = activeTab === 'veg' || activeTab === 'nonveg';
  const dietaryFilter = isDietaryFilter ? activeTab : 'all';

  const showRolls = activeTab === 'all' || activeTab === 'rolls' || isDietaryFilter;
  const showVeg = activeTab === 'all' || activeTab === 'indian' || isDietaryFilter; // Indian Veg
  const showNonVeg = activeTab === 'all' || activeTab === 'indian' || isDietaryFilter; // Indian Non Veg
  const showChinese = activeTab === 'all' || activeTab === 'chinese' || isDietaryFilter;
  const showTandoor = activeTab === 'all' || activeTab === 'tandoor' || isDietaryFilter;
  const showMore = activeTab === 'all' || activeTab === 'more' || isDietaryFilter;

  return (
    <div className="pb-24 min-h-screen bg-background relative selection:bg-accent selection:text-white">
      {/* subtle pattern */}
      <div className="fixed inset-0 bg-indian-pattern opacity-[0.02] pointer-events-none z-0" />

      {/* ── Hero Banner ── */}
      <div className="w-full h-[40vh] md:h-[50vh] relative mb-12 shadow-xl z-10">
        <img 
          src="https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Authentic Indian Spices" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 text-center px-4">
          <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-black/40 backdrop-blur-md border border-accent/40 text-xs font-bold tracking-[0.25em] text-accent uppercase mb-6">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Culinary Heritage
            <span className="w-1 h-1 rounded-full bg-accent" />
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 drop-shadow-lg">
            Our Grand Menu
          </h1>
          <div className="w-24 h-1 bg-accent mt-2 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 relative z-20 -mt-10 md:-mt-8">
        
        {/* ── Legend ── */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 text-xs md:text-sm font-semibold text-secondary/80 bg-white/90 backdrop-blur-md py-3 md:py-4 px-6 md:px-8 rounded-full shadow-sm border border-accent/10 w-fit mx-auto">
          <span className="flex items-center gap-2">
            <VegDot isVeg={true} /> Vegetarian
          </span>
          <span className="flex items-center gap-2">
            <VegDot isVeg={false} /> Non-Vegetarian
          </span>
          <span className="flex items-center gap-2">
            <VegDot isEgg={true} /> Egg
          </span>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="w-full overflow-x-auto scrollbar-none mb-10 pb-4 px-4" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-2.5 lg:justify-center w-max min-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full font-sans text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white border-primary shadow-[0_8px_20px_rgba(138,46,40,0.3)] transform scale-105'
                    : 'bg-white text-secondary/70 border-accent/20 hover:border-primary/50 hover:text-primary hover:bg-[#FFF9F9]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Menu Book Canvas ── */}
        <div className="bg-[#FDFBF7] rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-accent/20 overflow-hidden relative">
          
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-[6px] border-l-[6px] border-accent/30 rounded-tl-[3rem] m-3 md:m-4 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-24 border-t-[6px] border-r-[6px] border-accent/30 rounded-tr-[3rem] m-3 md:m-4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-[6px] border-l-[6px] border-accent/30 rounded-bl-[3rem] m-3 md:m-4 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[6px] border-r-[6px] border-accent/30 rounded-br-[3rem] m-3 md:m-4 pointer-events-none"></div>
          
          <div className="absolute inset-0 bg-henna-pattern opacity-[0.02] pointer-events-none mix-blend-multiply"></div>

          <div className="px-4 py-10 md:px-16 md:py-24 relative z-10">
            {showRolls && <MenuSectionDisplay section={rolls} filter={dietaryFilter} />}
            {showVeg && <MenuSectionDisplay section={indianVeg} filter={dietaryFilter} />}
            {showNonVeg && <MenuSectionDisplay section={indianNonVeg} filter={dietaryFilter} />}
            {showChinese && <MenuSectionDisplay section={chinese} filter={dietaryFilter} />}
            {showTandoor && <MenuSectionDisplay section={tandoor} filter={dietaryFilter} />}
            {showMore && (
              <>
                <MenuSectionDisplay section={soup} filter={dietaryFilter} />
                <MenuSectionDisplay section={momo} filter={dietaryFilter} />
                <MenuSectionDisplay section={roti} filter={dietaryFilter} />
                <MenuSectionDisplay section={thali} filter={dietaryFilter} />
              </>
            )}
            {(activeTab === 'all' || activeTab === 'more' || isDietaryFilter) && (
              <>
                <MenuSectionDisplay section={beverage} filter={dietaryFilter} />
                <MenuSectionDisplay section={dessert} filter={dietaryFilter} />
              </>
            )}
          </div>
        </div>

        {/* ── Footer note ── */}
        <p className="text-center text-text/50 text-sm mt-12 font-medium max-w-2xl mx-auto">
          * Prices are inclusive of all taxes. Menu items and prices subject to change without prior notice.
          Half portions available for select items as indicated.
        </p>
      </div>
    </div>
  );
};
