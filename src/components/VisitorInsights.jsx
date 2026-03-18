import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot } from 'recharts';

const data = [
  { month: 'Jan', loyal: 330, newC: 260, unique: 330 },
  { month: 'Feb', loyal: 270, newC: 280, unique: 290 },
  { month: 'Mar', loyal: 200, newC: 240, unique: 310 },
  { month: 'Apr', loyal: 220, newC: 150, unique: 280 },
  { month: 'May', loyal: 220, newC: 220, unique: 220 },
  { month: 'Jun', loyal: 240, newC: 275, unique: 230 },
  { month: 'Jul', loyal: 300, newC: 360, unique: 280 },
  { month: 'Sept', loyal: 290, newC: 320, unique: 300 },
  { month: 'Oct', loyal: 270, newC: 295, unique: 260 },
  { month: 'Nov', loyal: 210, newC: 200, unique: 230 },
  { month: 'Des', loyal: 150, newC: 145, unique: 195 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className=" bg-white border border-gray-100 rounded-xl p-3 shadow-lg text-xs">
        <p className="font-semibold text-[#151D48] mb-2">{label}</p>
        {payload.map(e => (
          <div key={e.name} className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: e.color }} />
            <span className="text-[#737791]">{e.name}:</span>
            <span className="font-semibold text-[#151D48]">{e.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function VisitorInsights() {
  return (
    <div className="card p-3 sm:p-4 h-full">
      <h2 className="font-poppins font-semibold text-[15px] sm:text-[16px] leading-6 text-[#05004E] mb-3">
        Visitor Insights
      </h2>

      <ResponsiveContainer width="100%" height={185}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="0" stroke="rgba(70,78,95,0.04)" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontFamily: 'Poppins', fontSize: 10, fill: '#464E5F' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 400]}
            ticks={[0, 100, 200, 300, 400]}
            tick={{ fontFamily: 'Poppins', fontSize: 10, fill: '#7B91B0', opacity: 0.7 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          {/* Vertical reference line at Jul */}
          <ReferenceLine x="Jul" stroke="#EF4444" strokeDasharray="4 3" strokeWidth={1} />
          <Line type="monotone" dataKey="loyal" name="Loyal Customers" stroke="#A700FF" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="newC" name="New Customers" stroke="#EF4444" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="unique" name="Unique Customers" stroke="#3CD856" strokeWidth={2.5} dot={false} />
          {/* Dot at Jul intersection */}
          <ReferenceDot x="Jul" y={360} r={7} fill="#EF4444" stroke="white" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex items-center justify-center gap-3 mt-2 flex-wrap text-[12px]">
        {[
          { color: '#A700FF', label: 'Loyal Customers' },
          { color: '#EF4444', label: 'New Customers' },
          { color: '#3CD856', label: 'Unique Customers' },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm inline-block" style={{ background: color }} />
            <span className="font-poppins text-[11px] text-[#464E5F]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
