import { useState } from 'react';
import { LayoutDashboard, BarChart2, ShoppingCart, ShoppingBag, TrendingUp, MessageSquare, Settings, LogOut, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// Figma asset: dummy logo icon (white abstract icon on purple)
import LOGO_ICON from "../assets/logo.svg";

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: BarChart2, label: 'Leaderboard', path: '/leaderboard' },
  { icon: ShoppingCart, label: 'Order', path: '/order' },
  { icon: ShoppingBag, label: 'Products', path: '/products' },
  { icon: TrendingUp, label: 'Sales Report', path: '/sales' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: LogOut, label: 'Sign Out', path: '/logout' },
];

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const navigate = useNavigate();
  const Content = () => (
    <div className="flex flex-col h-full py-4">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 mb-6">
        <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
          <img src={LOGO_ICON} alt="Logo" className="w-10 h-10 object-contain" onError={e => { e.target.style.display = 'none'; }} />
          <span className="text-white font-bold text-lg hidden">D</span>
        </div>
        <span className="font-semibold text-[18px] sm:text-[22px] leading-[1.3] text-[#151D48] tracking-tight">
          Dabang
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-0.5">
        {navItems.map(({ icon: Icon, label, path }) => {
          const active = activeNav === label;

          return (
            <button
              key={label}
              onClick={() => {
                setActiveNav(label);
                navigate(path);     // page change
                setMobileOpen(false); // close mobile sidebar
              }}
              className={`w-full flex items-center gap-4 px-4 py-2.5 rounded-xl text-left transition-all duration-150 group
          ${active
                  ? 'bg-primary-500 shadow-[0px_10px_24px_0px_rgba(55,69,87,0.08)]'
                  : 'hover:bg-gray-50'
                }`}
            >
              <Icon
                size={17}
                className={active ? 'text-white' : 'text-[#737791] group-hover:text-primary-500'}
              />

              <span
                className={`font-poppins text-[14px] sm:text-[15px] leading-normal
            ${active ? 'font-semibold text-white' : 'font-normal text-[#737791] group-hover:text-[#151D48]'}`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed 
  top-[25px] sm:top-[30px] md:top-[35px]
  -translate-y-1/2
  left-3 z-50 p-2 
  bg-white rounded-xl shadow-card border border-gray-100"
      >
        <Menu size={22} className="text-[#151D48]" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile sidebar */}
      <div className={`lg:hidden fixed left-0 top-0 h-full w-[240px] sm:w-[280px] bg-white z-50 transform transition-transform duration-300 shadow-xl
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={() => setMobileOpen(false)} className="absolute top-5 right-5 text-[#737791] hover:text-[#151D48]">
          <X size={22} />
        </button>
        <Content />
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:left-0 lg:top-0 lg:flex flex-col w-[240px] lg:w-[250px] h-screen bg-white border-r border-[#F8F9FA] z-20 overflow-y-auto">
        <Content />
      </aside>
    </>
  );
}
