import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { label: 'A', volume: 168, service: 120 },
  { label: 'B', volume: 185, service: 130 },
  { label: 'C', volume: 140, service: 95 },
  { label: 'D', volume: 125, service: 104 },
  { label: 'E', volume: 155, service: 115 },
];


const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  const service = payload.find(p => p.dataKey === "service")?.value || 0;
  const volumeTop = payload.find(p => p.dataKey === "volumeTop")?.value || 0;

  const volume = service + volumeTop; // ✅ real total volume

  return (
    <div className="bg-white border border-[#F1F1F4] rounded-xl p-3 shadow-md text-xs min-w-[120px]">
      <p className="font-semibold text-[#151D48] mb-2">{label}</p>

      {/* Volume */}
      <div className="flex items-center justify-between gap-3 mb-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#1E88E5]" />
          <span className="text-[#737791]">Volume</span>
        </div>
        <span className="font-semibold text-[#151D48]">
          {volume}
        </span>
      </div>

      {/* Service */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#16C784]" />
          <span className="text-[#737791]">Service</span>
        </div>
        <span className="font-semibold text-[#151D48]">
          {service}
        </span>
      </div>
    </div>
  );
};
export default function VolumeVsService() {
  const chartData = data.map(d => ({
    ...d,
    volumeTop: d.volume - d.service, // floating blue part
  }));
  return (
    <div className="card p-3 sm:p-4 h-full flex flex-col">
      <h2 className="font-poppins font-semibold text-[15px] sm:text-[16px] leading-6 text-[#05004E] mb-2">
        Volume Vs Service Level
      </h2>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height={175}>
          <BarChart data={chartData} barSize={18} barCategoryGap={40}>
            <XAxis hide />
            <YAxis hide />

            {/* GREEN BASE */}
            <Bar
              dataKey="service"
              stackId="a"
              fill="#16C784"
              radius={[0, 0, 4, 4]}
            />

            {/* BLUE FLOATING TOP */}
            <Bar
              dataKey="volumeTop"
              stackId="a"
              fill="#1E88E5"
              radius={[4, 4, 0, 0]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
              wrapperStyle={{ outline: "none" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Divider + stats */}
      <div className="border-t border-[#F8F9FA] pt-2 mt-2 flex items-center justify-around text-[12px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#0095FF] inline-block" />
          <div>
            <p className="font-poppins font-normal text-[11px] text-[#737791]">Volume</p>
            <p className="font-poppins font-medium text-[12px] text-[#151D48]">1,135</p>
          </div>
        </div>
        <div className="w-px h-4 bg-[#F8F9FA]" />
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00E096] inline-block" />
          <div>
            <p className="font-poppins font-normal text-[11px] text-[#737791]">Services</p>
            <p className="font-poppins font-medium text-[12px] text-[#151D48]">635</p>
          </div>
        </div>
      </div>
    </div>
  );
}
