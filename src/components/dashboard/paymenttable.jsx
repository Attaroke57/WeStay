export default function PaymentTable({ payments }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100">
      <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">Pembayaran Mendekati Jatuh Tempo</h3>
        <p className="text-xs md:text-sm text-gray-500 mt-1">Tagihan yang perlu segera ditindaklanjuti</p>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penyewa</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properti</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jatuh Tempo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{payment.tenant}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{payment.property}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{formatRupiah(payment.amount)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      payment.daysLeft <= 3 ? 'bg-red-100 text-red-700' :
                      payment.daysLeft <= 7 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {payment.daysLeft} hari lagi
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Kirim Reminder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-gray-200">
        {payments.map((payment) => (
          <div key={payment.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">{payment.tenant}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{payment.property}</p>
              </div>
              <span className={`ml-2 px-2 py-1 text-[10px] font-medium rounded-full whitespace-nowrap flex-shrink-0 ${
                payment.daysLeft <= 3 ? 'bg-red-100 text-red-700' :
                payment.daysLeft <= 7 ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {payment.daysLeft} hari
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">{formatRupiah(payment.amount)}</div>
              <button className="text-xs text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap">
                Kirim Reminder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
