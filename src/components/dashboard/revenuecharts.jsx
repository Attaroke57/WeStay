// src/components/dashboard/RevenueChart.jsx
export default function RevenueChart({ data }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const maxRevenue = Math.max(...data.map(d => d.amount));
  const minRevenue = Math.min(...data.map(d => d.amount));
  const range = maxRevenue - minRevenue;

  return (
    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Pendapatan 6 Bulan Terakhir</h3>
          <p className="text-sm text-gray-500 mt-1">Tren pendapatan bulanan</p>
        </div>
      </div>
      
      {/* Chart Container */}
      <div className="relative" style={{ height: '280px' }}>
        <div className="absolute inset-0 flex items-end justify-between gap-3 pb-6">
          {data.map((item, index) => {
            // Calculate height percentage (minimum 20% for visibility)
            const heightPercent = range > 0 
              ? Math.max(20, ((item.amount - minRevenue) / range) * 80 + 20)
              : 50;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                {/* Bar */}
                <div 
                  className="w-full relative group cursor-pointer transition-all duration-300 hover:opacity-80"
                  style={{ height: `${heightPercent}%` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"></div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10 pointer-events-none">
                    <div className="font-semibold">{formatRupiah(item.amount)}</div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                  </div>
                </div>
                
                {/* Month Label */}
                <span className="text-sm font-medium text-gray-600 mt-3">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}