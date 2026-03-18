import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Monday', online: 13000, offline: 11500 },
  { day: 'Tuesday', online: 16000, offline: 11000 },
  { day: 'Wednesday', online: 5000, offline: 21000 },
  { day: 'Thursday', online: 15500, offline: 6500 },
  { day: 'Friday', online: 11000, offline: 10500 },
  { day: 'Saturday', online: 15500, offline: 12500 },
  { day: 'Sunday', online: 20500, offline: 10500 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-lg text-xs">
        <p className="font-semibold text-[#151D48] mb-2">{label}</p>
        {payload.map(e => (
          <div key={e.name} className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: e.fill }} />
            <span className="text-[#737791]">{e.name}:</span>
            <span className="font-semibold text-[#151D48]">${(e.value / 1000).toFixed(0)}k</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }) => (
  <div className="flex items-center justify-center gap-6 mt-2">
    {payload.map(({ value, color }) => (
      <div key={value} className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: color }} />
        <span className="font-poppins font-normal text-[12px] text-[#222B45]">{value}</span>
      </div>
    ))}
  </div>
);

export default function TotalRevenue({ className = "" }) {
  return (
    <div className={`card p-3 sm:p-5 h-full flex flex-row sm:flex-col justify-between ${className}`}>
      <h2 className="font-poppins font-semibold text-[15px] sm:text-[16px] leading-6 text-[#05004E] mb-3">
        Total Revenue
      </h2>

      <ResponsiveContainer width="100%" height={220} >
        <BarChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }} barSize={14} barGap={4}>
          <CartesianGrid strokeDasharray="0" stroke="rgba(70,78,95,0.06)" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fontFamily: 'Poppins', fontSize: 11, fill: '#7B91B0' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            ticks={[0, 5000, 10000, 15000, 20000, 25000]}
            tickFormatter={v => v === 0 ? '0' : `${v / 1000}k`}
            tick={{ fontFamily: 'Poppins', fontSize: 11, fill: '#7B91B0' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
          <Legend content={<CustomLegend />} />
          <Bar dataKey="online" name="Online Sales" fill="#0095FF" radius={[2, 2, 0, 0]} />
          <Bar dataKey="offline" name="Offline Sales" fill="#00E096" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
