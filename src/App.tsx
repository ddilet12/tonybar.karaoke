/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, MapPin, Phone, Instagram, Music, GlassWater, Star, ChevronDown, Download, User, X } from 'lucide-react';
import { PdfMenuViewer } from './components/PdfMenuViewer';
import { menuData } from './data/menu';

// Components
const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "px-8 py-4 rounded-full font-display font-bold uppercase tracking-[2px] text-xs transition-all duration-300 flex items-center justify-center gap-2 border-none";
  const variants = {
    primary: "bg-tony-pink text-white shadow-[0_0_20px_rgba(255,31,191,0.5)] hover:bg-white hover:text-tony-pink",
    secondary: "bg-transparent border border-white text-white hover:border-tony-pink hover:text-tony-pink",
    whatsapp: "bg-[#25D366] text-white hover:bg-white hover:text-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.5)]"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Sections
const HeroSection = () => (
  <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
    {/* Dark Overlay over Video/Image */}
    <div className="absolute inset-0 bg-tony-black/70 z-10 mix-blend-multiply" />
    <div className="absolute inset-0 bg-gradient-to-b from-tony-purple/30 via-transparent to-tony-black z-10" />
    
    {/* Background Image (Fallback for video) */}
    <img 
      src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop" 
      alt="Lounge Vibe" 
      className="absolute inset-0 w-full h-full object-cover z-0 object-top"
    />

    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20"
    >
      <div className="mb-6 inline-block">
         <span className="text-xl md:text-2xl font-display font-bold text-white tracking-[4px] uppercase border-b border-tony-pink pb-2">
            TONY
         </span>
      </div>
      <h1 className="font-display text-[72px] md:text-[96px] font-[800] uppercase leading-[0.9] mb-4 text-white text-shadow-pink">
        Karaoke <br/>
        <span className="text-tony-pink">Lounge</span> <br/>
        VIP Nights
      </h1>
      <p className="text-[18px] text-white tracking-[4px] font-bold uppercase opacity-70 mb-10 mt-5">
        Premium Nightlife Experience
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button onClick={() => document.getElementById('vip')?.scrollIntoView({ behavior: 'smooth'})}>
          Забронировать стол
        </Button>
        <Button variant="secondary" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth'})}>
          Открыть меню
        </Button>
      </div>
      
    </motion.div>

    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 z-20 text-white/50"
    >
      <ChevronDown className="w-8 h-8" />
    </motion.div>
  </section>
);

const AboutSection = () => (
  <section className="py-24 bg-transparent relative overflow-hidden" id="about">
    <div className="absolute top-0 right-0 w-96 h-96 bg-tony-purple rounded-full mix-blend-screen filter blur-[128px] opacity-20" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-tony-pink rounded-full mix-blend-screen filter blur-[128px] opacity-10" />
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/5">
            <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1974&auto=format&fit=crop" alt="Premium Service" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-lg max-w-xs border-l-4 border-l-tony-pink">
             <p className="font-display font-bold text-2xl text-tony-pink">5</p>
             <p className="text-sm text-gray-300">Эксклюзивных VIP-кабинок</p>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="font-display text-tony-blue text-lg uppercase tracking-widest mb-2 font-semibold">The Tony Experience</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6 text-white text-shadow-pink leading-tight">
            Место, где ночь <br/>обретает цвет
          </h3>
          <p className="text-gray-400 mb-8 text-lg font-light leading-relaxed">
            Погрузитесь в киберпанк-атмосферу премиального караоке-бара. До 50 гостей в основном зале, топовый звук, авторские коктейли и обслуживание, которое предугадывает ваши желания.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-panel p-4 rounded-lg flex items-center gap-4">
              <Music className="w-8 h-8 text-tony-pink" />
              <span className="font-display font-medium text-white">PRO Караоке</span>
            </div>
            <div className="glass-panel p-4 rounded-lg flex items-center gap-4">
              <GlassWater className="w-8 h-8 text-tony-blue" />
              <span className="font-display font-medium text-white">Lounge Zone</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const OffersSection = () => {
  const offers = [
    { title: "Именинникам", discount: "-20%", desc: "Празднуй стильно. Скидка действует в день рождения и 3 дня после.", color: "tony-pink" },
    { title: "Girls Night", discount: "Special", desc: "Специальные коктейли и особая атмосфера для нее каждый четверг.", color: "tony-blue" },
    { title: "Выпускные", discount: "-15%", desc: "Ваш лучший вечер. Бронирование больших VIP-кабинок по спеццене.", color: "tony-orange" }
  ];

  return (
    <section className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <h2 className="text-center font-display text-4xl font-bold uppercase mb-16 text-white tracking-wide">
          Special <span className="text-tony-pink text-shadow-pink">Offers</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-panel p-8 rounded-xl relative overflow-hidden group hover:bg-[#1a0a24] transition-colors"
            >
              <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${offer.color}/20 rounded-full blur-2xl group-hover:bg-${offer.color}/40 transition-colors pointer-events-none`} />
              <div className="mb-2">
                <span className={`inline-block px-2 py-1 bg-${offer.color}/20 border border-${offer.color} rounded text-[10px] uppercase font-bold text-white`}>PROMO</span>
              </div>
              <h3 className="font-display text-[10px] font-bold uppercase text-tony-pink tracking-[2px] mb-2">{offer.title}</h3>
              <p className={`font-display text-[18px] font-[700] text-white mb-2`}>{offer.discount}</p>
              <p className="text-[11px] opacity-60 text-white leading-relaxed">{offer.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VIPRoomsSection = () => {
  const rooms = [
    { name: "HARMONY", capacity: "до 6 персон", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop" },
    { name: "LUXE", capacity: "до 10 персон", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" },
    { name: "ENIGMA", capacity: "до 12 персон", image: "https://images.unsplash.com/photo-1549488344-c1ab65b1bc85?q=80&w=1964&auto=format&fit=crop" },
    { name: "EUPHORIA", capacity: "до 15 персон", image: "https://images.unsplash.com/photo-1563502310703-1ffe473ad6ce?q=80&w=2070&auto=format&fit=crop" },
    { name: "PINK", capacity: "до 20 персон", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-transparent relative" id="vip">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center font-display text-4xl font-bold uppercase mb-4 text-white tracking-wide">
          <span className="text-tony-blue text-shadow-blue">VIP</span> Rooms
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Уединенная атмосфера для вашей компании. Профессиональный звук и индивидуальное обслуживание.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-xl aspect-[4/3] ${idx === 3 ? 'lg:col-span-2' : ''} ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-tony-black via-tony-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-display text-[10px] font-bold uppercase tracking-[2px] text-tony-pink mb-1 group-hover:text-white transition-colors">{room.name}</h3>
                <div className="flex items-center gap-2 text-white text-[13px] opacity-90">
                  <User className="w-4 h-4" /> {room.capacity}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
    const [activeTab, setActiveTab] = useState<'kitchen' | 'bar' | 'wine'>('kitchen');

    const renderMenuGrid = (data: Array<{ category: string, items: Array<{ name: string, price: string }> }>) => (
      <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
        {data.map((section, idx) => (
          <div key={idx} className="glass p-6 rounded-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-tony-pink/5 rounded-full blur-2xl" />
             <h3 className="font-display text-[14px] uppercase font-bold text-tony-pink mb-4 tracking-[2px]">{section.category}</h3>
             <ul className="space-y-3 relative z-10">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex justify-between items-baseline border-b border-white/5 pb-2">
                     <span className="text-white text-[14px] opacity-90 pr-4">{item.name}</span>
                     <span className="text-white font-display text-[14px] font-bold tracking-wider shrink-0">{item.price} ₸</span>
                  </li>
                ))}
             </ul>
          </div>
        ))}
      </div>
    );

    return (
      <section className="py-24 bg-transparent relative" id="menu">
         <div className="max-w-7xl mx-auto px-4 text-center z-10 relative">
            <h2 className="font-display text-4xl font-bold uppercase mb-6 text-white tracking-wide">
               <span className="text-tony-pink text-shadow-pink">Premium</span> Menu
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Изысканная кухня, барная карта с лучшими напитками мира и авторские коктейли.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="/menu/menu.pdf" download className="inline-block">
                <Button variant="secondary" className="gap-2">
                  <Download className="w-5 h-5"/> Скачать PDF Меню
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-4">
               <button 
                 onClick={() => setActiveTab('kitchen')} 
                 className={`px-6 py-2 rounded-full font-display text-xs font-bold uppercase tracking-[2px] transition-all border ${activeTab === 'kitchen' ? 'bg-tony-pink text-white border-tony-pink shadow-[0_0_15px_rgba(255,31,191,0.4)]' : 'bg-transparent text-white border-white/20 hover:border-tony-pink hover:text-tony-pink'}`}
               >
                 Кухня
               </button>
               <button 
                 onClick={() => setActiveTab('bar')} 
                 className={`px-6 py-2 rounded-full font-display text-xs font-bold uppercase tracking-[2px] transition-all border ${activeTab === 'bar' ? 'bg-tony-pink text-white border-tony-pink shadow-[0_0_15px_rgba(255,31,191,0.4)]' : 'bg-transparent text-white border-white/20 hover:border-tony-pink hover:text-tony-pink'}`}
               >
                 Бар
               </button>
               <button 
                 onClick={() => setActiveTab('wine')} 
                 className={`px-6 py-2 rounded-full font-display text-xs font-bold uppercase tracking-[2px] transition-all border ${activeTab === 'wine' ? 'bg-tony-pink text-white border-tony-pink shadow-[0_0_15px_rgba(255,31,191,0.4)]' : 'bg-transparent text-white border-white/20 hover:border-tony-pink hover:text-tony-pink'}`}
               >
                 Вино
               </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'kitchen' && renderMenuGrid(menuData.kitchen)}
                {activeTab === 'bar' && renderMenuGrid(menuData.bar)}
                {activeTab === 'wine' && renderMenuGrid(menuData.wine)}
              </motion.div>
            </AnimatePresence>
            
            <div className="w-full max-w-4xl mx-auto mt-16">
               <h3 className="font-display text-[18px] uppercase font-bold text-white mb-6 tracking-[2px]">PDF Viewer</h3>
               <PdfMenuViewer file="/menu/menu.pdf" />
            </div>
         </div>
      </section>
    );
};

const LocationSection = () => (
  <section className="py-24 bg-transparent relative">
    <div className="max-w-7xl mx-auto px-4 z-10 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
           <h2 className="font-display text-4xl font-bold uppercase mb-6 text-white tracking-wide">
            Как нас <span className="text-tony-pink text-shadow-pink">найти</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-sm">Мы находимся в самом сердце Алматы, в ЖК Шахристан. Удобная парковка и всегда отличная атмосфера.</p>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-tony-blue" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white uppercase mb-1">Адрес</h4>
                <p className="text-gray-400">Алматы, ул. Навои 208<br/>ЖК Шахристан</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0">
                <Music className="w-6 h-6 text-tony-pink" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white uppercase mb-1">Режим работы</h4>
                <p className="text-gray-400">Пн - Чт: 18:00 - 04:00<br/>Пт - Вс: 18:00 - 06:00</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="rounded-2xl overflow-hidden glass-panel h-[400px] border border-white/10 group relative">
           <iframe 
              src="https://yandex.com/map-widget/v1/?um=constructor%3A3b0c83a0058bffa80eb2ed1ecf2a5dd1ca1f8d48dfbd27d5ab2603831b1567db&amp;source=constructor" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              className="grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              title="TONY Map"
           ></iframe>
           <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </div>
  </section>
);

const GallerySection = () => {
   const items = [
      { type: 'image', src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1964&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1517457210348-703079e57d4b?q=80&w=2069&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop' },
   ];
   
   return (
      <section className="py-24 bg-transparent border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="font-display text-4xl font-bold uppercase text-white tracking-wide mb-2">
                     <span className="text-tony-blue text-shadow-blue">Tony</span> Vibes
                  </h2>
                  <p className="text-gray-400">Follow us on Instagram <a href="#" className="text-tony-pink hover:underline">@tonybar.karaoke</a></p>
               </div>
               <Button className="hidden md:flex !py-2 !px-6 !text-sm">Подписаться</Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {items.map((item, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="aspect-[9/16] rounded-xl overflow-hidden relative group cursor-pointer"
                  >
                     <img src={item.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
                     <div className="absolute inset-0 bg-tony-pink/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-color flex items-center justify-center">
                        <Instagram className="w-10 h-10 text-white drop-shadow-md" />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}

const Footer = () => (
  <footer className="bg-transparent pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-tony-pink/10 rounded-full mix-blend-screen filter blur-[128px]" />
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
           <h3 className="font-display text-3xl font-bold uppercase text-white mb-4 tracking-widest text-shadow-pink">TONY</h3>
           <p className="text-gray-400 mb-6 max-w-sm">Karaoke & Lounge Bar. Главная nightlife атмосфера Алматы.</p>
           <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-tony-pink hover:border-tony-pink transition-all">
               <Instagram className="w-5 h-5"/>
             </a>
             <a href="https://wa.me/77084017231" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#25D366] hover:border-[#25D366] transition-all">
               <Phone className="w-5 h-5"/>
             </a>
           </div>
        </div>
        
        <div>
          <h4 className="font-display font-bold uppercase text-white mb-4 text-sm tracking-wider">Контакты</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-tony-blue shrink-0 mt-0.5" />
              <span>ул. Навои 208, Алматы <br/>ЖК Шахристан</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-tony-pink shrink-0" />
              <span>+7 (708) 401-72-31</span>
            </li>
          </ul>
        </div>
        
        <div>
           <h4 className="font-display font-bold uppercase text-white mb-4 text-sm tracking-wider">Режим работы</h4>
           <ul className="space-y-4 text-gray-400 text-sm">
             <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Пн - Чт</span>
                <span className="text-white">18:00 - 04:00</span>
             </li>
             <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Пт - Вс</span>
                <span className="text-white">18:00 - 06:00</span>
             </li>
           </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4 font-light">
        <p>&copy; {new Date().getFullYear()} TONY Karaoke & Lounge Bar. Все права защищены.</p>
        <p>Premium Digital Experience.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-radial-theme min-h-screen">
      {/* Sticky Top Nav Minimal */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-t-0 border-x-0 rounded-none py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
           <span className="font-display font-bold text-xl uppercase tracking-widest text-white text-shadow-pink">TONY</span>
           <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
             <a href="#about" className="hover:text-tony-pink transition-colors">О нас</a>
             <a href="#vip" className="hover:text-tony-pink transition-colors">VIP</a>
             <a href="#menu" className="hover:text-tony-pink transition-colors">Меню</a>
           </div>
           <Button variant="whatsapp" className="px-5 py-2.5 text-xs !rounded-full" onClick={() => window.open('https://wa.me/77084017231', '_blank')}>
              Бронь
           </Button>
        </div>
      </nav>

      <HeroSection />
      <AboutSection />
      <OffersSection />
      <VIPRoomsSection />
      <GallerySection />
      <MenuSection />
      <LocationSection />
      <Footer />
      
      {/* Floating CTA for Mobile */}
      <a 
        href="https://wa.me/77084017231" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform flex items-center justify-center"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
