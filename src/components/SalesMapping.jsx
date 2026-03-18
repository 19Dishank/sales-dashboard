// Simple SVG world map representation with colored regions
// Matching Figma's "Sales Mapping" card

const regions = [
  { name: 'North America', x: 12, y: 28, w: 22, h: 18, color: '#5D5FEF', sales: '$12.4k' },
  { name: 'South America', x: 22, y: 52, w: 12, h: 22, color: '#5D5FEF', sales: '$5.1k' },
  { name: 'Europe', x: 43, y: 20, w: 14, h: 14, color: '#0095FF', sales: '$9.8k' },
  { name: 'Africa', x: 43, y: 38, w: 14, h: 22, color: '#00E096', sales: '$3.2k' },
  { name: 'Asia', x: 58, y: 18, w: 28, h: 26, color: '#FFA412', sales: '$18.6k' },
  { name: 'Australia', x: 72, y: 52, w: 14, h: 14, color: '#EF4444', sales: '$2.8k' },
];

export default function SalesMapping() {
  return (
    <div className="card p-3 sm:p-4 h-full flex flex-col">
      <h2 className="font-poppins font-semibold text-[15px] sm:text-[16px] leading-6 text-[#05004E] mb-2">
        Sales Mapping
      </h2>

      {/* Map */}
      <div className="flex-1 bg-[#F9FAFB] rounded-md overflow-hidden relative">
        <svg
          viewBox="0 0 100 80"
          className="w-full h-full"
          style={{ minHeight: 140 }}
        >
          {/* Ocean background */}
          <rect x="0" y="0" width="100" height="80" fill="#EEF2FF" />

          {/* Continents simplified */}
          {regions.map(({ name, x, y, w, h, color }) => (
            <g key={name}>
              <rect
                x={x} y={y} width={w} height={h}
                rx="2" ry="2"
                fill={color}
                opacity="0.75"
                className="cursor-pointer hover:opacity-100 transition-opacity"
              />
              {/* Dot indicator */}
              <circle cx={x + w / 2} cy={y + h / 2} r="1.5" fill="white" />
            </g>
          ))}

          {/* Grid lines */}
          {[20, 40, 60].map(yy => (
            <line key={yy} x1="0" y1={yy} x2="100" y2={yy} stroke="rgba(70,78,95,0.06)" strokeWidth="0.3" />
          ))}
          {[25, 50, 75].map(xx => (
            <line key={xx} x1={xx} y1="0" x2={xx} y2="80" stroke="rgba(70,78,95,0.06)" strokeWidth="0.3" />
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-2 grid grid-cols-2 gap-1.5 text-[11px]">
        {regions.slice(0, 4).map(({ name, color, sales }) => (
          <div key={name} className="flex items-center gap-1.5 min-w-0">
            <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: color }} />
            <span className="font-poppins text-[#737791] truncate text-[10px]">{name}</span>
            <span className="font-poppins font-medium text-[#151D48] ml-auto whitespace-nowrap">{sales}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
