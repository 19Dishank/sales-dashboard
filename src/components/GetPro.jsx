const LOGO_ICON = "https://www.figma.com/api/mcp/asset/fc8f58ac-0592-498f-8383-24e2372f7c4b";

export default function GetPro() {
  return (
    <div
      className="rounded-lg p-4 flex flex-col items-center text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #5D5FEF 0%, #7B2FBE 100%)',
        minHeight: 200,
      }}
    >
      {/* Decorative circles - matching Figma ellipses */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 242, height: 242,
          background: 'rgba(255,255,255,0.07)',
          top: -80, right: -60,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 306, height: 303,
          background: 'rgba(255,255,255,0.05)',
          bottom: -120, left: -60,
        }}
      />

      {/* Logo */}
      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center mb-2.5 relative z-10">
        <img
          src={LOGO_ICON}
          alt="Dabang"
          className="w-5 h-5 object-contain brightness-0 invert"
          onError={e => { e.target.style.display = 'none'; }}
        />
        <span className="text-white text-lg font-bold hidden">D</span>
      </div>

      {/* Title */}
      <h3 className="font-poppins font-semibold text-[16px] leading-6 text-white mb-1.5 relative z-10">
        Dabang Pro
      </h3>

      {/* Description */}
      <p className="font-poppins font-normal text-[12px] leading-4 text-white/80 mb-4 relative z-10 max-w-[120px]">
        Get access to all features
      </p>

      {/* CTA Button */}
      <button className="bg-white text-[#5D5FEF] font-poppins font-semibold text-[13px] leading-5 px-6 py-1.5 rounded-lg hover:bg-opacity-90 transition-all relative z-10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transform duration-150">
        Get Pro
      </button>
    </div>
  );
}
