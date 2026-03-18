import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: 'Jan', thisMonth: 30, lastMonth: 20 },
  { month: 'Feb', thisMonth: 40, lastMonth: 28 },
  { month: 'Mar', thisMonth: 35, lastMonth: 55 },
  { month: 'Apr', thisMonth: 50, lastMonth: 45 },
  { month: 'May', thisMonth: 49, lastMonth: 48 },
  { month: 'Jun', thisMonth: 60, lastMonth: 38 },
  { month: 'Jul', thisMonth: 70, lastMonth: 50 },
];

export default function CustomerSatisfaction() {
  return (
    <div className="card p-3 sm:p-5 h-full flex flex-row sm:flex-col justify-between">
      <h2 className="font-poppins font-semibold text-[15px] sm:text-[16px] leading-6 text-[#05004E] mb-2">
        Customer Satisfaction
      </h2>


      <div className="flex-1">
        <ResponsiveContainer width="100%" height={190}>
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -30, bottom: 0 }}>
            {/* Gradients */}
            <defs>
              <linearGradient id="blueFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0095FF" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#0095FF" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="greenFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00E096" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#00E096" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="rgba(0,0,0,0.04)" />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#96A5B8", fontSize: 11 }}
            />

            {/* Remove YAxis for cleaner design */}
            <YAxis hide />

            <Tooltip />

            {/* Areas FIRST (background fade) */}
            <Area
              type="natural"
              dataKey="thisMonth"
              fill="url(#blueFade)"
              stroke="none"
            />

            <Area
              type="natural"
              dataKey="lastMonth"
              fill="url(#greenFade)"
              stroke="none"
            />

            {/* Lines ON TOP */}
            <Line
              type="natural"
              dataKey="thisMonth"
              stroke="#0095FF"
              strokeWidth={3}
              dot={{ r: 5, fill: "#0095FF" }}
              activeDot={{ r: 6 }}
            />

            <Line
              type="natural"
              dataKey="lastMonth"
              stroke="#00E096"
              strokeWidth={3}
              dot={{ r: 5, fill: "#00E096" }}
              activeDot={{ r: 6 }}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Divider + Stats */}
      <div className="border-t border-[#F8F9FA] pt-2 mt-2">
        <div className="flex items-center justify-around text-[12px]">

          {/* Last Month */}
          <div className="flex items-center gap-1.5">

            <svg width="15" height="7" viewBox="0 0 22 9" fill="none">
              <path d="M1.5 4.5H20.5" stroke="#0080DA" strokeWidth="3" strokeLinecap="round" />
              <circle cx="11" cy="4.5" r="4.5" fill="#0095FF" />
            </svg>

            <div>
              <p className="font-poppins font-normal text-[10px] text-[#737791]">
                Last Month
              </p>
              <p className="font-poppins font-medium text-[11px] text-[#151D48]">
                $3,004
              </p>
            </div>
          </div>

          <div className="w-px h-4 bg-[#F8F9FA]" />

          {/* This Month */}
          <div className="flex items-center gap-1.5">

            <svg width="15" height="7" viewBox="0 0 22 9" fill="none">
              <path d="M1.5 4.5H20.5" stroke="#05C283" strokeWidth="3" strokeLinecap="round" />
              <circle cx="11" cy="4.5" r="4.5" fill="#07E098" />
            </svg>

            <div>
              <p className="font-poppins font-normal text-[10px] text-[#737791]">
                This Month
              </p>
              <p className="font-poppins font-medium text-[11px] text-[#151D48]">
                $4,504
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



