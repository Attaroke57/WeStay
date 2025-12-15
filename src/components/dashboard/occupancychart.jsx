export default function OccupancyChart({ data }) {
  return (
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
      <div className="mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">Okupansi per Properti</h3>
        <p className="text-xs md:text-sm text-gray-500 mt-1">Perbandingan tingkat hunian</p>
      </div>
      <div className="space-y-4 md:space-y-5">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm font-medium text-gray-700 truncate pr-2">{item.name}</span>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[10px] md:text-xs text-gray-500">{item.occupied}/{item.total}</span>
                <span className={`text-[10px] md:text-xs font-semibold ${
                  item.rate === 100 ? 'text-green-600' :
                  item.rate >= 80 ? 'text-blue-600' :
                  item.rate >= 60 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {item.rate}%
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
              <div 
                className={`h-2 md:h-3 rounded-full transition-all duration-700 ease-out ${
                  item.rate === 100 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                  item.rate >= 80 ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
                  item.rate >= 60 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                  'bg-gradient-to-r from-red-500 to-red-400'
                }`}
                style={{ width: `${item.rate}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
