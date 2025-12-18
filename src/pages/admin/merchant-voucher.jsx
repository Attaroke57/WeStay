import { useState } from "react";
import { Plus, Edit, Trash2, Store, Ticket, TrendingUp, Users, DollarSign, Calendar, Percent } from "lucide-react";

export default function MerchantVoucherPage() {
  const [activeTab, setActiveTab] = useState("merchants");

  const formatRupiah = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);

  const merchants = [
    { id: 1, name: 'Tokopedia', status: 'active', commission: 15, totalBookings: 234, revenue: 156000000 },
    { id: 2, name: 'Traveloka', status: 'active', commission: 12, totalBookings: 189, revenue: 128000000 },
    { id: 3, name: 'Tiket.com', status: 'inactive', commission: 10, totalBookings: 0, revenue: 0 },
    { id: 4, name: 'Mamikos', status: 'active', commission: 18, totalBookings: 312, revenue: 198000000 },
  ];

  const vouchers = [
    { id: 1, code: 'NEWUSER50', discount: '50%', maxDiscount: 100000, minTransaction: 500000, usage: 45, limit: 100, validUntil: '2024-12-31', status: 'active' },
    { id: 2, code: 'WEEKDAY20', discount: '20%', maxDiscount: 50000, minTransaction: 200000, usage: 128, limit: 200, validUntil: '2024-12-31', status: 'active' },
    { id: 3, code: 'FLASHSALE', discount: '30%', maxDiscount: 150000, minTransaction: 1000000, usage: 89, limit: 100, validUntil: '2024-12-20', status: 'active' },
    { id: 4, code: 'OLDUSER10', discount: '10%', maxDiscount: 30000, minTransaction: 100000, usage: 250, limit: 250, validUntil: '2024-11-30', status: 'expired' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Merchant & Voucher</h1>
          <p className="text-sm text-gray-600">Kelola merchant partner dan voucher promo secara terpadu</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95 font-medium">
          <Plus className="w-4 h-4" />
          {activeTab === 'merchants' ? 'Add Merchant' : 'Create Voucher'}
        </button>
      </div>

      {/* Modern Tabs */}
      <div className="flex gap-2 mb-6 bg-white rounded-xl p-1.5 shadow-sm border border-gray-100 w-fit">
        <button
          onClick={() => setActiveTab('merchants')}
          className={`flex items-center gap-2 px-6 py-2.5 font-medium rounded-lg transition-all ${
            activeTab === 'merchants'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          <Store className="w-4 h-4" />
          Merchants
        </button>
        <button
          onClick={() => setActiveTab('vouchers')}
          className={`flex items-center gap-2 px-6 py-2.5 font-medium rounded-lg transition-all ${
            activeTab === 'vouchers'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          <Ticket className="w-4 h-4" />
          Vouchers
        </button>
      </div>

      {/* Merchants Tab */}
      {activeTab === 'merchants' && (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Store className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-1">Total Merchants</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">4</p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-1">Active</p>
              <p className="text-2xl md:text-3xl font-bold text-green-600">3</p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-1">Total Bookings</p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">735</p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-1">Total Revenue</p>
              <p className="text-base md:text-xl font-bold text-purple-600">{formatRupiah(482000000)}</p>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Merchant</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Commission</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Total Bookings</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {merchants.map((merchant) => (
                  <tr key={merchant.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                          <Store className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{merchant.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold ${
                        merchant.status === 'active' 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                          merchant.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                        }`}></span>
                        {merchant.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-purple-600">{merchant.commission}%</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-900">{merchant.totalBookings}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-blue-600">{formatRupiah(merchant.revenue)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards - Merchants */}
          <div className="lg:hidden space-y-4">
            {merchants.map((merchant) => (
              <div key={merchant.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                      <Store className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{merchant.name}</h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-semibold mt-1 ${
                        merchant.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          merchant.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                        }`}></span>
                        {merchant.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                    <p className="text-xs text-purple-600 font-medium mb-1">Commission</p>
                    <p className="text-sm font-bold text-purple-700">{merchant.commission}%</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="text-xs text-blue-600 font-medium mb-1">Bookings</p>
                    <p className="text-sm font-bold text-blue-700">{merchant.totalBookings}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                    <p className="text-xs text-green-600 font-medium mb-1">Revenue</p>
                    <p className="text-xs font-bold text-green-700">{formatRupiah(merchant.revenue)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Vouchers Tab */}
      {activeTab === 'vouchers' && (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Ticket className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-1">Total Vouchers</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">4</p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-1">Active</p>
              <p className="text-2xl md:text-3xl font-bold text-green-600">3</p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-1">Total Usage</p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">512</p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Percent className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-1">Avg Discount</p>
              <p className="text-2xl md:text-3xl font-bold text-purple-600">27.5%</p>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Code</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Discount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Max Discount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Min Transaction</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Usage</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Valid Until</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {vouchers.map((voucher) => (
                    <tr key={voucher.id} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-pink-600" />
                          <span className="text-sm font-bold text-pink-600">{voucher.code}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-purple-600">{voucher.discount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{formatRupiah(voucher.maxDiscount)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{formatRupiah(voucher.minTransaction)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">{voucher.usage}/{voucher.limit}</span>
                          <div className="w-20 bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all"
                              style={{ width: `${(voucher.usage / voucher.limit) * 100}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{voucher.validUntil}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold ${
                          voucher.status === 'active' 
                            ? 'bg-green-100 text-green-700 border border-green-200' 
                            : 'bg-red-100 text-red-700 border border-red-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                            voucher.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                          }`}></span>
                          {voucher.status === 'active' ? 'Active' : 'Expired'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards - Vouchers */}
          <div className="lg:hidden space-y-4">
            {vouchers.map((voucher) => (
              <div key={voucher.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center">
                      <Ticket className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-pink-600">{voucher.code}</h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-semibold mt-1 ${
                        voucher.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          voucher.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                        }`}></span>
                        {voucher.status === 'active' ? 'Active' : 'Expired'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                    <p className="text-xs text-purple-600 font-medium mb-1">Discount</p>
                    <p className="text-sm font-bold text-purple-700">{voucher.discount}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="text-xs text-blue-600 font-medium mb-1">Max Discount</p>
                    <p className="text-xs font-bold text-blue-700">{formatRupiah(voucher.maxDiscount)}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Min Transaction</span>
                    <span className="font-semibold text-gray-900">{formatRupiah(voucher.minTransaction)}</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-600">Usage</span>
                      <span className="font-semibold text-gray-900">{voucher.usage}/{voucher.limit}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${(voucher.usage / voucher.limit) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs pt-2 border-t border-gray-100">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-600">Valid until {voucher.validUntil}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}