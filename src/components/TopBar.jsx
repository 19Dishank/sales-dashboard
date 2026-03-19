import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Figma assets
const AVATAR = "https://www.figma.com/api/mcp/asset/ac030b9c-823b-4be2-a14e-cb2ceef6e80f";
const FLAG_US = "https://www.figma.com/api/mcp/asset/525175d0-0d9f-4692-9dce-ba298e70831c";
const CHEVRON_DOWN = "https://www.figma.com/api/mcp/asset/a86a9740-c9d4-4890-976c-4b353bc08b63";
const ARROW_DOWN = "https://www.figma.com/api/mcp/asset/8e4d13c4-6e15-4121-bb46-852d08d09987";
const BELL = "https://www.figma.com/api/mcp/asset/b805f5e0-0a7e-449b-8edf-efaf2a62fa61";
const BELL_DOT = "https://www.figma.com/api/mcp/asset/8b8734c1-4663-411b-89e3-6be3dec0217b";
const SEARCH_ICON = "https://www.figma.com/api/mcp/asset/03cd05eb-bbb6-450e-9f54-f1263937df0f";

export default function TopBar() {
  const [query, setQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("Eng (US)");
  const [notifOpen, setNotifOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);


  useEffect(() => {
    const close = () => setNotifOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);


  useEffect(() => {
    const close = () => setProfileOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);
  return (
    // Height adjusted responsively for smaller screens.
    <header className="bg-white border-b border-[#F8F9FA] h-[50px] sm:h-[60px] md:h-[70px] flex items-center pl-14 sm:pl-16 md:pl-16 lg:px-8 pr-3 shadow-[0px_2px_10px_0px_rgba(55,69,87,0.03)] sticky top-0 z-30">
      {/* Left: Title - Scaled responsively for better fit */}
      <div className="flex flex-col">
        <h1 className="font-poppins font-semibold text-[18px] sm:text-[22px] md:text-[22px] leading-none text-[#151D48]">
          Dashboard
        </h1>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search - Width adjusted responsively, hidden on small screens */}
      <div className="hidden sm:flex items-center gap-2 bg-[#F9FAFB] rounded-lg px-3 sm:px-4 py-1.5 h-[36px] sm:h-[42px] w-[180px] sm:w-[220px] md:w-[280px] lg:w-[400px] mr-3 sm:mr-4 focus-within:ring-2 focus-within:ring-[#5D5FEF]">

        <img
          src={SEARCH_ICON}
          alt="search"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
          onError={(e) => {
            e.target.replaceWith(
              Object.assign(document.createElement("span"), {
                innerHTML: "🔍",
                className: "text-sm",
              })
            );
          }}
        />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here..."
          className="bg-transparent outline-none w-full font-poppins font-normal text-[12px] sm:text-[13px] text-[#737791] placeholder:text-[#737791]"
        />
      </div>

      {/* Language - Hidden on small screens, scaled down font */}
      <div className="relative hidden md:flex items-center gap-1.5 mr-3 sm:mr-4 cursor-pointer select-none"
        onClick={() => setLangOpen(prev => !prev)}
      >

        <img
          src={FLAG_US}
          alt="US Flag"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm object-cover"
          onError={(e) => { e.target.style.display = "none"; }}
        />

        <span className="font-poppins font-semibold text-[12px] sm:text-[13px] text-[#374557]">
          {language}
        </span>

        <img
          src={CHEVRON_DOWN}
          alt="↓"
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition ${langOpen ? "rotate-180" : ""}`}
          onError={(e) => {
            e.target.replaceWith(
              Object.assign(document.createElement("span"), {
                innerHTML: "▾",
                className: "text-[#374557]",
              })
            );
          }}
        />

        {/* Dropdown */}
        {langOpen && (
          <div className="absolute top-7 right-0 bg-white shadow-lg rounded-lg py-2 w-[140px] z-50">

            <div
              onClick={() => {
                setLanguage("Eng (US)");
                setLangOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 text-[13px]"
            >
              Eng (US)
            </div>

            <div
              onClick={() => {
                setLanguage("Hindi");
                setLangOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 text-[13px]"
            >
              Hindi
            </div>

            <div
              onClick={() => {
                setLanguage("Gujarati");
                setLangOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 text-[13px]"
            >
              Gujarati
            </div>

          </div>
        )}
      </div>

      {/* Notifications - Container scaled responsively */}
      <div
        className="relative mr-2 sm:mr-3"
        onClick={(e) => {
          e.stopPropagation();
          setNotifOpen((prev) => !prev);
          setHasUnread(false);
        }}
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FFFAF1] rounded-lg flex items-center justify-center cursor-pointer hover:bg-yellow-50 transition-colors">
          <img
            src={BELL}
            alt="notifications"
            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            onError={(e) => {
              e.target.replaceWith(
                Object.assign(document.createElement("span"), {
                  innerHTML: "🔔",
                  className: "text-sm",
                })
              );
            }}
          />
        </div>

        {/* unread dot */}
        {hasUnread && (
          <span className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#EB5757] rounded-full block border border-white"></span>
        )}

        {/* Dropdown Panel */}
        {notifOpen && (
          <div className="absolute right-0 mt-2 w-[260px] bg-white rounded-xl shadow-lg p-3 z-50">
            <p className="font-semibold text-[14px] mb-2">Notifications</p>

            <div className="text-[13px] py-2 border-b">New order received</div>
            <div className="text-[13px] py-2 border-b">Payment successful</div>
            <div className="text-[13px] py-2">Profile updated</div>
          </div>
        )}
      </div>

      {/* User profile - Avatar and text scaled responsively */}
      <div
        className="relative flex items-center gap-1.5 sm:gap-2 cursor-pointer select-none"
        onClick={(e) => {
          e.stopPropagation();
          setProfileOpen((prev) => !prev);
        }}
      >
        <img
          src={AVATAR}
          alt="Musfiq"
          className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] rounded-xl object-cover"
          onError={(e) => {
            e.target.src =
              "https://api.dicebear.com/7.x/avataaars/svg?seed=Musfiq&backgroundColor=5D5FEF";
          }}
        />

        <div className="hidden sm:flex flex-col leading-tight">
          <span className="font-poppins font-medium text-[12px] sm:text-[13px] text-[#151D48]">
            Musfiq
          </span>
          <span className="font-poppins font-normal text-[10px] sm:text-[11px] text-[#737791]">
            Admin
          </span>
        </div>

        <img
          src={ARROW_DOWN}
          alt="▾"
          className={`w-2.5 h-2.5 hidden sm:block transition ${profileOpen ? "rotate-180" : ""
            }`}
          onError={(e) => {
            e.target.replaceWith(
              Object.assign(document.createElement("span"), {
                innerHTML: "▾",
                className: "text-[#737791] text-xs",
              })
            );
          }}
        />

        {/* Dropdown */}
        {profileOpen && (
          <div className="absolute right-0 top-12 w-[180px] bg-white rounded-xl shadow-lg py-2 z-50">
            <div className="px-4 py-2 hover:bg-gray-100 text-[13px]">My Profile</div>
            <div className="px-4 py-2 hover:bg-gray-100 text-[13px]">Settings</div>
            <div className="px-4 py-2 hover:bg-gray-100 text-[13px] text-red-500">
              Logout
            </div>
          </div>
        )}
      </div>
    </header>
  );
}