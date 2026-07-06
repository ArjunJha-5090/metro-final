import React, { useState } from 'react';
import { Coffee, Flame, UtensilsCrossed, Soup, Sparkles, IceCream, ChevronDown, MessageCircle, Phone } from 'lucide-react';

interface MenuItem {
  name: string;
  isVeg: boolean;
  description?: string;
  badge?: string;
}

interface MenuCategory {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  items: MenuItem[];
}

const FoodSymbol: React.FC<{ isVeg: boolean }> = ({ isVeg }) => {
  return (
    <div 
      className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 ${
        isVeg ? 'border-green-600' : 'border-red-600'
      }`}
      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
    >
      <div 
        className={`w-2 h-2 rounded-full ${
          isVeg ? 'bg-green-600' : 'bg-red-600'
        }`}
      />
    </div>
  );
};

const vegMenu: MenuCategory[] = [
  {
    title: 'Welcome Drink (Choose 2)',
    icon: Coffee,
    description: 'Refreshing hot and cold beverages to greet your guests',
    items: [
      { name: 'Soft Drinks (Coke, Sprite, Fanta, Thums Up)', isVeg: true },
      { name: 'Jal Jeera', isVeg: true },
      { name: 'Fruit Punch', isVeg: true },
      { name: 'Tea', isVeg: true },
      { name: 'Coffee', isVeg: true },
      { name: 'Khus Surprise', isVeg: true },
      { name: 'Rose Blossom', isVeg: true },
      { name: 'Blue Lagoon', isVeg: true },
      { name: 'Aam Ka Panna', isVeg: true },
      { name: 'Mint Mojito', isVeg: true }
    ]
  },
  {
    title: 'Soup Veg (Choose 1)',
    icon: Soup,
    description: 'Warm, savory vegetable broths',
    items: [
      { name: 'Veg. Manchow Soup', isVeg: true },
      { name: 'Veg. Lemon Coriander Soup', isVeg: true },
      { name: 'Veg. Hot & Sour Soup', isVeg: true },
      { name: 'Veg. Sweet Corn Soup', isVeg: true },
      { name: 'Tomato Soup', isVeg: true },
      { name: 'Tamater Dhaniya Shorba', isVeg: true }
    ]
  },
  {
    title: 'Starter Vegetable (Choose 2)',
    icon: Flame,
    description: 'Crispy and spiced starters cooked to perfection',
    items: [
      { name: 'Choice of Paneer Tikka (Hariyali, Lahsuni, Achari)', isVeg: true, badge: 'Popular' },
      { name: 'Hara Bhara Kebab', isVeg: true },
      { name: 'Aloo Corn Tikki', isVeg: true },
      { name: 'Paneer Kurkure', isVeg: true },
      { name: 'Paneer Chilli Dry', isVeg: true },
      { name: 'Cheese Corn Ball', isVeg: true },
      { name: 'Chilli Baby Corn', isVeg: true },
      { name: 'Crispy Veg.', isVeg: true },
      { name: 'Veg Cutlet', isVeg: true },
      { name: 'Veg. Spring Roll', isVeg: true },
      { name: 'Honey Chilli Potato', isVeg: true },
      { name: 'Mushroom Chilli Dry', isVeg: true }
    ]
  },
  {
    title: 'Hi-Tea Counter (Choose 2)',
    icon: Sparkles,
    description: 'Interactive street food and fast-food counters',
    items: [
      { name: 'Pani-Poori Counter', isVeg: true, badge: 'Live Counter' },
      { name: 'Aloo Tikki Chaat', isVeg: true },
      { name: 'Papdi Chaat', isVeg: true },
      { name: 'Chhola Chaat', isVeg: true },
      { name: 'Noodle Manchurian', isVeg: true },
      { name: 'Litti Chokha', isVeg: true },
      { name: 'Moong Dal Chilla Counter', isVeg: true, badge: 'Live Counter' },
      { name: 'Mini Dosa Counter', isVeg: true, badge: 'Live Counter' },
      { name: 'Pasta Counter', isVeg: true, badge: 'Live Counter' },
      { name: 'Pav-Bhaji', isVeg: true },
      { name: 'Chole Bhature', isVeg: true }
    ]
  },
  {
    title: 'Salad (Choose 2)',
    icon: Sparkles,
    description: 'Healthy green and flavored accompaniments',
    items: [
      { name: 'Green Salad', isVeg: true },
      { name: 'Fruits Salad', isVeg: true },
      { name: 'Aloo Ki Chaat', isVeg: true },
      { name: 'Macaroni Salad', isVeg: true },
      { name: 'Sprouted Salad', isVeg: true },
      { name: 'Russian Salad', isVeg: true },
      { name: 'Pasta Salad', isVeg: true },
      { name: 'Chana Chaat Salad', isVeg: true }
    ]
  },
  {
    title: 'Flavored Of Curd (Choose 1)',
    icon: Sparkles,
    description: 'Cooling spiced yogurts and dahi preparations',
    items: [
      { name: 'Mix Veg. Raita', isVeg: true },
      { name: 'Boondi Raita', isVeg: true },
      { name: 'Aloo And Pudina Raita', isVeg: true },
      { name: 'Lauki Raita', isVeg: true },
      { name: 'Fruit Raita', isVeg: true },
      { name: 'Pineapple Mint Raita', isVeg: true },
      { name: 'Dahi Wada', isVeg: true }
    ]
  },
  {
    title: 'Paneer Specialty (Choose 1)',
    icon: UtensilsCrossed,
    description: 'Exquisite cottage cheese preparations in various rich gravies',
    items: [
      { name: 'Paneer Butter Masala', isVeg: true },
      { name: 'Paneer Lababdar', isVeg: true },
      { name: 'Paneer Chatpata Masala', isVeg: true },
      { name: 'Paneer Tawa Masala', isVeg: true },
      { name: 'Paneer Do Pyaza', isVeg: true },
      { name: 'Paneer Begum Bahar', isVeg: true },
      { name: 'Paneer Kaliya', isVeg: true },
      { name: 'Paneer Jafrani', isVeg: true },
      { name: 'Paneer Punjabi', isVeg: true },
      { name: 'Matar Paneer', isVeg: true },
      { name: 'Kadhai Paneer', isVeg: true },
      { name: 'Paneer Handi', isVeg: true },
      { name: 'Chilly Paneer', isVeg: true }
    ]
  },
  {
    title: 'Vegetables Main (Choose 2)',
    icon: UtensilsCrossed,
    description: 'Delicious vegetable and potato-based slow cooked curries',
    items: [
      { name: 'Aloo Dum Banarsi', isVeg: true },
      { name: 'Veg. Kofta Curry', isVeg: true },
      { name: 'Mushroom Matar', isVeg: true },
      { name: 'Bhindi Do Pyaza', isVeg: true },
      { name: 'Aloo Gobi Adrakhi', isVeg: true },
      { name: 'Subz Mela', isVeg: true },
      { name: 'Corn Palak', isVeg: true },
      { name: 'Mix Veg.', isVeg: true },
      { name: 'Subz Nizami', isVeg: true },
      { name: 'Veg. Jhalfrezi', isVeg: true },
      { name: 'Veg. Kolhapuri', isVeg: true },
      { name: 'Kathal Kofta', isVeg: true },
      { name: 'Malai Kofta', isVeg: true },
      { name: 'Methi Matar Malai', isVeg: true },
      { name: 'Jafrani Vegetable', isVeg: true },
      { name: 'Aloo Patal Dry', isVeg: true },
      { name: 'Methi Aloo', isVeg: true },
      { name: 'Kadhai Vegetable', isVeg: true },
      { name: 'Veg Manchurian', isVeg: true },
      { name: 'Aloo Parwal', isVeg: true },
      { name: 'Dum Aloo', isVeg: true },
      { name: 'Aloo Kathal', isVeg: true }
    ]
  },
  {
    title: 'Rice & Biryani (Choose 1)',
    icon: Soup,
    description: 'Fragrant basmati rice options and traditional biryanis',
    items: [
      { name: 'Moti Pulao', isVeg: true },
      { name: 'Veg. Pulao', isVeg: true },
      { name: 'Kashmiri Pulao', isVeg: true },
      { name: 'Green Peas Pulao', isVeg: true },
      { name: 'Sweet Pulao', isVeg: true },
      { name: 'Steamed Rice', isVeg: true },
      { name: 'Jeera Rice', isVeg: true },
      { name: 'Veg. Biryani', isVeg: true },
      { name: 'Kathal Biryani', isVeg: true },
      { name: 'Paneer Biryani', isVeg: true }
    ]
  },
  {
    title: 'Dal Specialty (Choose 1)',
    icon: Soup,
    description: 'Rich slow-cooked lentils and beans',
    items: [
      { name: 'Dal Makhani', isVeg: true },
      { name: 'Dal Panchmel', isVeg: true },
      { name: 'Dhaba Dal', isVeg: true },
      { name: 'Yellow Dal Tadka', isVeg: true },
      { name: 'Chana Dal Tadka', isVeg: true },
      { name: 'Dal Maharani', isVeg: true },
      { name: 'Dal Makhana', isVeg: true },
      { name: 'Chana Dal Fry', isVeg: true },
      { name: 'Rajma Raseela', isVeg: true }
    ]
  },
  {
    title: 'Assorted Indian Breads (Choose 3)',
    icon: Soup,
    description: 'Clay-oven baked flatbreads and deep-fried poories',
    items: [
      { name: 'Naan', isVeg: true },
      { name: 'Laccha Paratha', isVeg: true },
      { name: 'Methi Paratha', isVeg: true },
      { name: 'Pudina Paratha', isVeg: true },
      { name: 'Missi Roti', isVeg: true },
      { name: 'Tandoori Roti', isVeg: true },
      { name: 'Stuffed Poori', isVeg: true },
      { name: 'Palak Poori', isVeg: true },
      { name: 'Ajwain Poori', isVeg: true },
      { name: 'Plain Poori', isVeg: true }
    ]
  },
  {
    title: 'Indian Dessert (Choose 1)',
    icon: IceCream,
    description: 'Authentic Indian hot and cold desserts',
    items: [
      { name: 'Gulab Jamun', isVeg: true },
      { name: 'Moong Dal Halwa', isVeg: true },
      { name: 'Chana Dal Halwa', isVeg: true },
      { name: 'Rasgulla', isVeg: true },
      { name: 'Gajar Halwa', isVeg: true },
      { name: 'Jalebi with Rabdi', isVeg: true, badge: 'Special' },
      { name: 'Coconut Halwa', isVeg: true },
      { name: 'Raj Bhog', isVeg: true },
      { name: 'Semiya Payasam', isVeg: true },
      { name: 'Rice Kheer', isVeg: true }
    ]
  },
  {
    title: 'Choice of Ice-Cream (Choose 1)',
    icon: IceCream,
    description: 'Chilled premium ice cream flavors',
    items: [
      { name: 'Vanilla', isVeg: true },
      { name: 'Butterscotch', isVeg: true },
      { name: 'Chocolate', isVeg: true },
      { name: 'Strawberry', isVeg: true },
      { name: 'Mango', isVeg: true }
    ]
  }
];

const nonVegMenu: MenuCategory[] = [
  {
    title: 'Welcome Drink (Choose 2)',
    icon: Coffee,
    description: 'Refreshing hot and cold beverages to greet your guests',
    items: [
      { name: 'Soft Drinks (Coke, Sprite, Fanta, Thums Up)', isVeg: true },
      { name: 'Jal Jeera', isVeg: true },
      { name: 'Fruit Punch', isVeg: true },
      { name: 'Tea', isVeg: true },
      { name: 'Coffee', isVeg: true },
      { name: 'Khus Surprise', isVeg: true },
      { name: 'Rose Blossom', isVeg: true },
      { name: 'Blue Lagoon', isVeg: true },
      { name: 'Aam Ka Panna', isVeg: true },
      { name: 'Mint Mojito', isVeg: true }
    ]
  },
  {
    title: 'Soup Veg (Choose 1)',
    icon: Soup,
    description: 'Warm, savory vegetable broths',
    items: [
      { name: 'Veg. Manchow Soup', isVeg: true },
      { name: 'Veg. Lemon Coriander Soup', isVeg: true },
      { name: 'Veg. Hot & Sour Soup', isVeg: true },
      { name: 'Veg. Sweet Corn Soup', isVeg: true },
      { name: 'Tomato Soup', isVeg: true },
      { name: 'Tamater Dhaniya Shorba', isVeg: true }
    ]
  },
  {
    title: 'Soup (Non-Veg) (Choose 1)',
    icon: Soup,
    description: 'Flavorful non-vegetarian broths',
    items: [
      { name: 'Chix Manchow Soup', isVeg: false },
      { name: 'Chix Lemon Coriander Soup', isVeg: false },
      { name: 'Chix Hot & Sour Soup', isVeg: false }
    ]
  },
  {
    title: 'Starter Vegetable (Choose 2)',
    icon: Flame,
    description: 'Crispy and spiced starters cooked to perfection',
    items: [
      { name: 'Choice of Paneer Tikka (Hariyali, Lahsuni, Achari)', isVeg: true, badge: 'Popular' },
      { name: 'Hara Bhara Kebab', isVeg: true },
      { name: 'Aloo Corn Tikki', isVeg: true },
      { name: 'Paneer Kurkure', isVeg: true },
      { name: 'Paneer Chilli Dry', isVeg: true },
      { name: 'Cheese Corn Ball', isVeg: true },
      { name: 'Chilli Baby Corn', isVeg: true },
      { name: 'Crispy Veg.', isVeg: true },
      { name: 'Veg cutlet', isVeg: true },
      { name: 'Veg. Spring Roll', isVeg: true },
      { name: 'Honey Chilli Potato', isVeg: true },
      { name: 'Mushroom Chilli Dry', isVeg: true }
    ]
  },
  {
    title: 'Starter Non-Vegetable (Choose 1)',
    icon: Flame,
    description: 'Succulent meat kebabs and crispy seafood starters',
    items: [
      { name: 'Choice of Chicken Tikka (Hariyali, Lahsuni, Achari)', isVeg: false, badge: 'Tandoor Special' },
      { name: 'Mahi Fish Tikka', isVeg: false },
      { name: 'Chicken Kalimirch Tikka', isVeg: false },
      { name: 'Fish Goli Kebab', isVeg: false },
      { name: 'Chicken Malai Tikka', isVeg: false },
      { name: 'Chicken Chilli Dry (Boneless / Bone)', isVeg: false },
      { name: 'Fish Finger', isVeg: false }
    ]
  },
  {
    title: 'Hi-Tea Counter (Choose 2)',
    icon: Sparkles,
    description: 'Interactive street food and fast-food counters',
    items: [
      { name: 'Pani-Poori Counter', isVeg: true, badge: 'Live Counter' },
      { name: 'Aloo Tikki Chaat', isVeg: true },
      { name: 'Papdi Chaat', isVeg: true },
      { name: 'Chhola Chaat', isVeg: true },
      { name: 'Noodle Manchurian', isVeg: true },
      { name: 'Litti Chokha', isVeg: true },
      { name: 'Moong Dal Chilla Counter', isVeg: true, badge: 'Live Counter' },
      { name: 'Mini Dosa Counter', isVeg: true, badge: 'Live Counter' },
      { name: 'Pasta Counter', isVeg: true, badge: 'Live Counter' },
      { name: 'Pav-Bhaji', isVeg: true }
    ]
  },
  {
    title: 'Salad (Choose 2)',
    icon: Sparkles,
    description: 'Healthy green and flavored accompaniments',
    items: [
      { name: 'Green Salad', isVeg: true },
      { name: 'Kuchumber Salad', isVeg: true },
      { name: 'Aloo Ki Chaat', isVeg: true },
      { name: 'Macaroni Salad', isVeg: true },
      { name: 'Sprouted Salad', isVeg: true },
      { name: 'Three Beans Salad', isVeg: true },
      { name: 'Russian Salad', isVeg: true },
      { name: 'Pasta Salad', isVeg: true },
      { name: 'Fruits Salad', isVeg: true },
      { name: 'Chana Chaat Salad', isVeg: true }
    ]
  },
  {
    title: 'Flavored Of Curd (Choose 1)',
    icon: Sparkles,
    description: 'Cooling spiced yogurts and dahi preparations',
    items: [
      { name: 'Mix Veg. Raita', isVeg: true },
      { name: 'Boondi Raita', isVeg: true },
      { name: 'Aloo And Pudina Raita', isVeg: true },
      { name: 'Lauki Raita', isVeg: true },
      { name: 'Fruit Raita', isVeg: true },
      { name: 'Dahi Wada', isVeg: true }
    ]
  },
  {
    title: 'Main Course Non-Veg (Choose 2)',
    icon: UtensilsCrossed,
    description: 'Slow-cooked non-vegetarian chicken and fish options',
    items: [
      { name: 'Choice of Chicken (Kassa, Adrakhi, Curry, Kadhai, Bhuna, Dehati, Stew, Handi, Do Pyaza, Jafrani, Dhaniya Wala)', isVeg: false, badge: 'Signature' },
      { name: 'Choice Of Fish (Rahu Fish Fry, Fish Amritsari, Bengali Fish Curry, Fish Masala, Fish Curry)', isVeg: false }
    ]
  },
  {
    title: 'Main Course Paneer (Choose 1)',
    icon: UtensilsCrossed,
    description: 'Exquisite cottage cheese preparations in various rich gravies',
    items: [
      { name: 'Paneer Butter Masala', isVeg: true },
      { name: 'Paneer Lababdar', isVeg: true },
      { name: 'Paneer Chatpata Masala', isVeg: true },
      { name: 'Paneer Tawa Masala', isVeg: true },
      { name: 'Paneer Do Pyaza', isVeg: true },
      { name: 'Paneer Punjabi', isVeg: true },
      { name: 'Matar Paneer', isVeg: true },
      { name: 'Kadhai Paneer', isVeg: true },
      { name: 'Paneer Handi', isVeg: true },
      { name: 'Chilly Paneer', isVeg: true }
    ]
  },
  {
    title: 'Vegetables Main (Choose 2)',
    icon: UtensilsCrossed,
    description: 'Delicious vegetable and potato-based slow cooked curries',
    items: [
      { name: 'Aloo Dum Banarsi', isVeg: true },
      { name: 'Veg. Kofta Curry', isVeg: true },
      { name: 'Mushroom Matar', isVeg: true },
      { name: 'Aloo Gobi', isVeg: true },
      { name: 'Corn Palak', isVeg: true },
      { name: 'Mix Veg', isVeg: true },
      { name: 'Veg. Jhalfrezi', isVeg: true },
      { name: 'Veg. Kolhapuri', isVeg: true },
      { name: 'Kathal Kofta', isVeg: true },
      { name: 'Malai Kofta', isVeg: true },
      { name: 'Aloo Patal Dry', isVeg: true },
      { name: 'Methi Aloo', isVeg: true }
    ]
  },
  {
    title: 'Rice & Biryani (Choose 1)',
    icon: Soup,
    description: 'Fragrant basmati rice options and traditional biryanis',
    items: [
      { name: 'Moti Pulao', isVeg: true },
      { name: 'Veg.Pulao', isVeg: true },
      { name: 'Kashmiri Pulao', isVeg: true },
      { name: 'Green Peas Pulao', isVeg: true },
      { name: 'Sweet Pulao', isVeg: true },
      { name: 'Steamed Rice', isVeg: true },
      { name: 'Jeera Rice', isVeg: true },
      { name: 'Veg.Biryani', isVeg: true },
      { name: 'Paneer Biryani', isVeg: true }
    ]
  },
  {
    title: 'Dal Specialty (Choose 1)',
    icon: Soup,
    description: 'Rich slow-cooked lentils and beans',
    items: [
      { name: 'Chana Dal Tadka', isVeg: true },
      { name: 'Dal Maharani', isVeg: true },
      { name: 'Dal Makhana', isVeg: true },
      { name: 'Chana Dal Fry', isVeg: true },
      { name: 'Dal Makhani', isVeg: true }
    ]
  },
  {
    title: 'Assorted Indian Breads (Choose 3)',
    icon: Soup,
    description: 'Clay-oven baked flatbreads and deep-fried poories',
    items: [
      { name: 'Naan', isVeg: true },
      { name: 'Laccha Paratha', isVeg: true },
      { name: 'Methi Paratha', isVeg: true },
      { name: 'Pudina Paratha', isVeg: true },
      { name: 'Missi Roti', isVeg: true },
      { name: 'Tandoori Roti', isVeg: true },
      { name: 'Stuffed Poori', isVeg: true },
      { name: 'Palak Poori', isVeg: true },
      { name: 'Ajwain Poori', isVeg: true },
      { name: 'Plain Poori', isVeg: true }
    ]
  },
  {
    title: 'Indian Dessert (Choose 1)',
    icon: IceCream,
    description: 'Authentic Indian hot and cold desserts',
    items: [
      { name: 'Gulab Jamun', isVeg: true },
      { name: 'Moong Dal Halwa', isVeg: true },
      { name: 'Chana Dal Halwa', isVeg: true },
      { name: 'Rasgulla', isVeg: true },
      { name: 'Gajar Halwa', isVeg: true },
      { name: 'Jalebi with Rabdi', isVeg: true, badge: 'Special' },
      { name: 'Coconut Halwa', isVeg: true },
      { name: 'Rajbhog', isVeg: true },
      { name: 'Semiya Payasam', isVeg: true },
      { name: 'Rice Kheer', isVeg: true }
    ]
  },
  {
    title: 'Choice of Ice-Cream (Choose 1)',
    icon: IceCream,
    description: 'Chilled premium ice cream flavors',
    items: [
      { name: 'Vanilla', isVeg: true },
      { name: 'Butterscotch', isVeg: true },
      { name: 'Chocolate', isVeg: true },
      { name: 'Strawberry', isVeg: true },
      { name: 'Mango', isVeg: true }
    ]
  }
];

export const BanquetsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'veg' | 'nonveg'>('veg');

  const currentMenu = activeTab === 'veg' ? vegMenu : nonVegMenu;

  return (
    <div className="pt-24 md:pt-32 pb-24 min-h-screen relative">
      {/* Elegant Catering Announcement */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12 flex justify-center relative z-20">
        <button
          onClick={() => {
            const element = document.getElementById('outdoor-catering');
            if (element) {
              const y = element.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-secondary text-white rounded-full overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 border border-white/5"
        >
          {/* Subtle glow border pulse */}
          <div className="absolute inset-[-1px] rounded-full border border-primary/40 animate-pulse pointer-events-none"></div>
          
          <Sparkles className="w-5 h-5 text-accent" />
          <span className="font-heading font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2">
            Discover Our Premium Outdoor Catering
            <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-white/30 mx-2"></span>
            <span className="text-accent group-hover:text-white transition-colors underline decoration-accent/50 underline-offset-4 hidden sm:inline">
              Click to Explore
            </span>
          </span>
          <ChevronDown className="w-5 h-5 text-accent group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none mt-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2">
        
        {/* Page Hero Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <img 
            src="/assets/images/logo.png" 
            alt="Metro Food Court Logo" 
            className="w-24 h-24 object-contain rounded-full border-2 border-accent/30 shadow-md mb-6 animate-fade-in"
          />
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium tracking-wider uppercase mb-4">
            Banquet Packages
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary mb-6">
            Grand Banquet Silver Menus
          </h1>
          <p className="max-w-2xl text-text/80 text-lg leading-relaxed">
            Crafting memorable catering experiences for your grand events, weddings, and parties. Select a package below and hover over categories to preview our exquisite items.
          </p>
          <div className="indian-divider mt-8 mb-0"></div>
        </div>

        {/* Veg/Non-Veg Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-secondary/5 p-1.5 rounded-full border border-secondary/10 flex gap-2 sm:gap-4">
            <button
              onClick={() => setActiveTab('veg')}
              className={`px-6 sm:px-8 py-3 rounded-full font-heading font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === 'veg'
                  ? 'bg-secondary text-white shadow-md'
                  : 'text-secondary hover:bg-secondary/5'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-600 border border-white flex-shrink-0" />
              Silver Veg (@900)
            </button>
            <button
              onClick={() => setActiveTab('nonveg')}
              className={`px-6 sm:px-8 py-3 rounded-full font-heading font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === 'nonveg'
                  ? 'bg-secondary text-white shadow-md'
                  : 'text-secondary hover:bg-secondary/5'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 border border-white flex-shrink-0" />
              Silver Non-Veg (@1100)
            </button>
          </div>
        </div>

        {/* Categories Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {currentMenu.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className="group premium-card p-6 flex flex-col transition-all duration-300 relative border border-accent/20 hover:border-primary/50 cursor-pointer bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-heading font-bold text-xl text-secondary group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-text/60 text-xs mt-0.5">
                      {category.items.length} Culinary Delights
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-accent group-hover:rotate-180 transition-transform duration-500" />
                </div>
                
                <p className="text-text/75 text-sm mt-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Dropdown items reveal container (Hover Reveal with slide & fade animation) */}
                <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-[800px] group-hover:opacity-100 group-hover:mt-6">
                  <div className="pt-4 border-t border-accent/15 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-500">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex gap-2 items-center group/item p-1.5 rounded-lg hover:bg-orange-50/50 transition-colors">
                        <FoodSymbol isVeg={item.isVeg} />
                        <span className="font-sans font-semibold text-text text-sm group-hover/item:text-primary transition-colors leading-tight">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="text-[8px] font-semibold bg-accent/20 text-secondary border border-accent/30 rounded-full px-1.5 py-0.5 uppercase tracking-wider whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outdoor Catering Service */}
        <div id="outdoor-catering" className="mt-20 bg-gradient-to-br from-primary to-[#ff8c00] rounded-[2.5rem] shadow-2xl p-8 md:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between text-white border-4 border-white scroll-mt-32">
          <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />
          
          <div className="relative z-10 lg:w-2/3 mb-10 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-white" />
              Premium Service
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white drop-shadow-md leading-tight">
              Outdoor Catering Services
            </h2>
            <p className="text-white/95 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Bring the Metro Food Court experience to your chosen venue! From destination weddings to corporate galas and private parties, we provide complete luxury catering setups, interactive live counters, and impeccable hospitality anywhere you desire.
            </p>
          </div>

          <div className="relative z-10 lg:w-1/3 flex flex-col gap-4 w-full sm:w-auto">
            <a
              href="https://api.whatsapp.com/send/?phone=916287601908&text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20Outdoor%20Catering%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-secondary hover:bg-orange-50 font-bold text-lg transition-all shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-95"
            >
              <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </a>
            <a 
              href="tel:+916287601908" 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-secondary text-white hover:bg-secondary/90 font-bold text-lg transition-all shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-white/10 active:scale-95"
            >
              <Phone className="w-6 h-6" />
              Call 6287601908
            </a>
          </div>
        </div>
        {/* Booking Call to Action */}
        <div className="mt-20 text-center bg-white rounded-3xl shadow-xl p-12 border border-accent/15 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-4">Book Your Banquet Today</h2>
            <p className="text-text/80 text-lg mb-8 leading-relaxed">
              Whether you need customized menus, extra live stalls, or structural setups, our team handles it all with perfection. Reach out to schedule a testing session or book the venue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=916287601908"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg shadow-sm text-white bg-[#25D366] hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a 
                href="tel:+916287601908" 
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border border-secondary text-base font-semibold rounded-lg text-secondary bg-white hover:bg-secondary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Call Directly
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
