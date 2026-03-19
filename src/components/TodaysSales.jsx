import CustomerIcon from "../icons/CustomerIcon";
import OrderIcon from "../icons/OrderIcon";
import ProductIcon from "../icons/ProductIcon";
import SalesIcon from "../icons/SalesIcon";
import GraphIcon from "./ui/GraphIcon";
// Figma assets for icons
const ICON_SALES = "https://www.figma.com/api/mcp/asset/52e82765-3143-4b18-9015-6091155dbe47";
const ICON_ORDER = "https://www.figma.com/api/mcp/asset/f8708f19-d412-45c1-985d-43d879f39a33";
const ICON_PRODUCTS = "https://www.figma.com/api/mcp/asset/9723e168-ce95-4e7c-a3bc-9f204b2405b7";
const ICON_CUSTOMER = "https://www.figma.com/api/mcp/asset/7a03d5fa-e696-4037-951a-7c1f6d32a2b2";
const EXPORT_ICON = "https://www.figma.com/api/mcp/asset/f8185515-b40c-4e03-a45a-df598d251a8d";

const ICON_ORDER_IMG = "https://www.figma.com/api/mcp/asset/dfb40135-ddcb-434b-b7af-c7183e81310e";
const ICON_PRODUCT_IMG = "https://www.figma.com/api/mcp/asset/35c67604-86ad-445f-9ff5-07965b9e2c7d";
const ICON_CUSTOMER_IMG = "https://www.figma.com/api/mcp/asset/d9f3c366-30fe-4a89-9e70-5c551d02a28e";
const ICON_SALES_IMG = "https://www.figma.com/api/mcp/asset/54ff4935-e3b1-4a4b-bb9c-c88fd67382a3";

const cards = [
  {
    bg: '#FFE2E5',
    icon: SalesIcon,
    value: '$1k',
    label: 'Total Sales',
    change: '+8% from yesterday',
    changeColor: '#4079ED',
  },
  {
    bg: '#FFF4DE',
    icon: OrderIcon,
    value: '300',
    label: 'Total Order',
    change: '+5% from yesterday',
    changeColor: '#4079ED',
  },
  {
    bg: '#DCFCE7',
    icon: ProductIcon,
    value: '5',
    label: 'Product Sold',
    change: '+1,2% from yesterday',
    changeColor: '#4079ED',
  },
  {
    bg: '#F3E8FF',
    icon: CustomerIcon,
    iconImg: ICON_CUSTOMER_IMG,
    value: '8',
    label: 'New Customers',
    change: '0,5% from yesterday',
    changeColor: '#4079ED',
  },
];

export default function TodaysSales() {
  return (
    <div className="card p-3 sm:p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h2 className="font-poppins font-semibold text-[15px] sm:text-[16px] leading-6 text-[#05004E]">
            Today's Sales
          </h2>
          <p className="font-poppins font-normal text-[12px] leading-5 text-[#737791]">
            Sales Summary
          </p>
        </div>

        <button className="flex items-center gap-2 border border-[#C3D3E2] rounded-lg px-4 h-10 hover:border-primary-500 transition-colors group">
          <img src={EXPORT_ICON} alt="" className="w-4 h-4" />
          <span className="font-poppins font-medium text-[13px] text-[#0F3659] group-hover:text-primary-500">
            Export
          </span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {cards.map(card => (
          <div
            key={card.label}
            className="rounded-2xl h-[90px] p-3.5 flex flex-col"
            style={{ backgroundColor: card.bg }}
          >
            {/* Top row */}
            <div className="flex items-center gap-3">
              <div className="shrink-0">
                {card.icon && (
                  typeof card.icon === 'string' ? (
                    <img src={card.icon} alt="" className="w-9 h-9" />
                  ) : (
                    <card.icon />
                  )
                )}
              </div>

              <div className="flex flex-col">
                <p className="text-[17px] font-semibold text-[#151D48] leading-tight">
                  {card.value}
                </p>

                <p className="text-[12px] text-[#425166] leading-tight">
                  {card.label}
                </p>
              </div>
            </div>

            {/* Bottom increment */}
            <p className="text-[12px] text-[#4079ED] mt-[0.5rem]">
              {card.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
