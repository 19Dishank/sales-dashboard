const products = [
  { rank: '01', name: 'Home Decor Range', popularity: 45, sales: '32%', barColor: '#A700FF' },
  { rank: '02', name: 'Disney Princess Pink', popularity: 29, sales: '20%', barColor: '#0095FF' },
  { rank: '03', name: 'Bathroom Essentials', popularity: 21, sales: '15%', barColor: '#00E096' },
  { rank: '04', name: 'Apple Smartwatches', popularity: 43, sales: '30%', barColor: '#FFA412' },
];

export default function TopProducts({ className = "" }) {
  return (
    <div className={`card p-3 sm:p-4 h-full ${className}`}>
      <h2 className="font-poppins font-semibold text-[15px] sm:text-[16px] leading-6 text-[#05004E] mb-3">
        Top Products
      </h2>

      {/* Table header */}
      <div className="grid grid-cols-[25px_1fr_140px_50px] gap-3 items-center pb-2 border-b border-[#F8F9FA] text-[12px]">
        <span className="font-poppins font-normal text-[12px] text-[#737791]">#</span>
        <span className="font-poppins font-normal text-[12px] text-[#737791]">Name</span>
        <span className="font-poppins font-normal text-[12px] text-[#737791]">Popularity</span>
        <span className="font-poppins font-normal text-[12px] text-[#737791]">Sales</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-[#F8F9FA]">
        {products.map(({ rank, name, popularity, sales, barColor }) => (
          <div key={rank} className="grid grid-cols-[25px_1fr_140px_50px] gap-3 items-center py-2.5 text-[12px]">
            <span className="font-poppins font-medium text-[#737791]">{rank}</span>
            <span className="font-poppins font-medium text-[#151D48] truncate">{name}</span>
            {/* Progress bar */}
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${popularity * 2}%`, backgroundColor: barColor }}
              />
            </div>
            {/* Sales badge */}
            <div className="flex justify-end">
              <span
                className="h-[20px] min-w-[34px] px-2 
               flex items-center justify-center
               text-[11px] font-medium font-poppins
               rounded-[6px] border"
                style={{
                  color: barColor,
                  borderColor: barColor,
                  backgroundColor: barColor + "12"
                }}
              >
                {sales}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
