import { ChevronDown } from 'lucide-react';

// Figma assets
const AVATAR = "https://www.figma.com/api/mcp/asset/ac030b9c-823b-4be2-a14e-cb2ceef6e80f";
const FLAG_US = "https://www.figma.com/api/mcp/asset/525175d0-0d9f-4692-9dce-ba298e70831c";
const CHEVRON_DOWN = "https://www.figma.com/api/mcp/asset/a86a9740-c9d4-4890-976c-4b353bc08b63";
const ARROW_DOWN = "https://www.figma.com/api/mcp/asset/8e4d13c4-6e15-4121-bb46-852d08d09987";
const BELL = "https://www.figma.com/api/mcp/asset/b805f5e0-0a7e-449b-8edf-efaf2a62fa61";
const BELL_DOT = "https://www.figma.com/api/mcp/asset/8b8734c1-4663-411b-89e3-6be3dec0217b";
const SEARCH_ICON = "https://www.figma.com/api/mcp/asset/03cd05eb-bbb6-450e-9f54-f1263937df0f";

export default function TopBar() {
  return (
    // Height adjusted responsively for smaller screens.
    <header className="bg-white border-b border-[#F8F9FA] h-[50px] sm:h-[60px] md:h-[70px] flex items-center px-3 sm:px-4 lg:px-8 shadow-[0px_2px_10px_0px_rgba(55,69,87,0.03)] sticky top-0 z-30">
      {/* Left: Title - Scaled responsively for better fit */}
      <div className="flex flex-col">
        <h1 className="font-poppins font-semibold text-[18px] sm:text-[22px] md:text-[22px] leading-none text-[#151D48]">
          Dashboard
        </h1>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search - Width adjusted responsively, hidden on small screens */}
      <div className="hidden sm:flex items-center gap-2 bg-[#F9FAFB] rounded-lg px-3 sm:px-4 py-1.5 h-[36px] sm:h-[42px] w-[180px] sm:w-[220px] md:w-[280px] lg:w-[400px] mr-3 sm:mr-4">
        <img src={SEARCH_ICON} alt="search" className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
          onError={e => { e.target.replaceWith(Object.assign(document.createElement('span'), { innerHTML: '🔍', className: 'text-sm' })); }} />
        <span className="font-poppins font-normal text-[12px] sm:text-[13px] text-[#737791]">Search here...</span>
      </div>

      {/* Language - Hidden on small screens, scaled down font */}
      <div className="hidden md:flex items-center gap-1.5 mr-3 sm:mr-4 cursor-pointer">
        <img src={FLAG_US} alt="US Flag" className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm object-cover"
          onError={e => { e.target.style.display = 'none'; }} />
        <span className="font-poppins font-semibold text-[12px] sm:text-[13px] text-[#374557]">Eng (US)</span>
        <img src={CHEVRON_DOWN} alt="↓" className="w-2.5 h-2.5 sm:w-3 sm:h-3"
          onError={e => { e.target.replaceWith(Object.assign(document.createElement('span'), { innerHTML: '▾', className: 'text-[#374557]' })); }} />
      </div>

      {/* Notifications - Container scaled responsively */}
      <div className="relative mr-2 sm:mr-3">
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FFFAF1] rounded-lg flex items-center justify-center cursor-pointer hover:bg-yellow-50 transition-colors">
          <img src={BELL} alt="notifications" className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            onError={e => { e.target.replaceWith(Object.assign(document.createElement('span'), { innerHTML: '🔔', className: 'text-sm' })); }} />
        </div>
        <img src={BELL_DOT} alt="" className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-[4px] h-[4px] sm:w-[5px] sm:h-[5px]"
          onError={e => {
            e.target.replaceWith(Object.assign(document.createElement('span'), {
              className: 'absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#EB5757] rounded-full block border border-white'
            }));
          }} />
      </div>

      {/* User profile - Avatar and text scaled responsively */}
      <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
        <img src={AVATAR} alt="Musfiq" className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] rounded-xl object-cover"
          onError={e => {
            e.target.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Musfiq&backgroundColor=5D5FEF';
          }} />
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="font-poppins font-medium text-[12px] sm:text-[13px] text-[#151D48]">Musfiq</span>
          <span className="font-poppins font-normal text-[10px] sm:text-[11px] text-[#737791]">Admin</span>
        </div>
        <img src={ARROW_DOWN} alt="▾" className="w-2.5 h-2.5 hidden sm:block"
          onError={e => { e.target.replaceWith(Object.assign(document.createElement('span'), { innerHTML: '▾', className: 'text-[#737791] text-xs' })); }} />
      </div>
    </header>
  );
}