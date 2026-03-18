import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { BagCardIcon, TicketStarIcon } from './UiIcons';

const data = [
  { month: 'Jan', target: 80, reality: 60 },
  { month: 'Feb', target: 70, reality: 55 },
  { month: 'Mar', target: 90, reality: 75 },
  { month: 'Apr', target: 70, reality: 55 },
  { month: 'May', target: 100, reality: 80 },
  { month: 'Jun', target: 100, reality: 80 },
  { month: 'Jul', target: 100, reality: 80 },
];

const REALITY_AVATAR = "https://www.figma.com/api/mcp/asset/ac030b9c-823b-4be2-a14e-cb2ceef6e80f";

export default function TargetVsReality() {
  return (
    <div className="card p-3 sm:p-4 h-full flex flex-col ">
      <h2 className="font-poppins font-semibold text-[15px] sm:text-[16px] leading-6 text-[#05004E] mb-2">
        Target Vs Reality
      </h2>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={data} margin={{ top: 5, right: 0, left: -60, bottom: 0 }} barSize={10} barGap={2}>
            <CartesianGrid strokeDasharray="0" stroke="rgba(70,78,95,0.05)" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontFamily: 'Poppins', fontSize: 11, fill: '#737791' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={false} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ fontFamily: 'Poppins', fontSize: 12, borderRadius: 12, border: '1px solid #F8F9FA' }}
            />
            <Bar dataKey="reality" name="Reality" radius={[4, 4, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={i === data.length - 1 ? '#4AB58E' : '#4AB58E'} />
              ))}
            </Bar>
            <Bar dataKey="target" name="Target" radius={[4, 4, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={i === data.length - 1 ? '#FFCF00' : '#FFCF00'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Divider + people stats */}
      <div className="border-t border-[#F8F9FA] pt-2 mt-2 space-y-2 text-[12px]">
        {/* Reality Sales */}
        <div className="flex items-center gap-2">
          <BagCardIcon />
          <div className="flex-1">
            <p className="font-poppins font-normal text-[12px] text-[#151D48]">Reality Sales</p>
            <p className="font-poppins font-normal text-[11px] text-[#737791]">Global</p>
          </div>
          <span className="font-poppins font-medium text-[12px] text-[#4AB58E]">8,823</span>
        </div>

        {/* Target Sales */}
        <div className="flex items-center gap-2">
          <TicketStarIcon />
          <div className="flex-1">
            <p className="font-poppins font-normal text-[12px]  text-[#151D48]">Target Sales</p>
            <p className="font-poppins font-normal text-[11px] text-[#737791]">Commercial</p>
          </div>
          <span className="font-poppins font-medium text-[12px] text-[#FFCF00]">12,122</span>
        </div>
      </div>
    </div>
  );
}

