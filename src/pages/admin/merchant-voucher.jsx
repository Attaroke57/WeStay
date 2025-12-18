import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

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
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Merchant & Voucher</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola merchant partner dan voucher promo</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          {activeTab === 'merchants' ? 'Add Merchant' : 'Create Voucher'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        <button
          onClick={() => setActiveTab('merchants')}
          className={`px-6 py-3 font-medium transition ${
            activeTab === 'merchants'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Merchants
        </button>
        <button
          onClick={() => setActiveTab('vouchers')}
          className={`px-6 py-3 font-medium transition ${
            activeTab === 'vouchers'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Vouchers
        </button>
      </div>

      {/* Merchants Tab */}
      {activeTab === 'merchants' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-6 border">
              <p className="text-sm text-gray-500 mb-2">Total Merchants</p>
              <p className="text-3xl font-bold text-gray-900">4</p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <p className="text-sm text-gray-500 mb-2">Active</p>
              <p className="text-3xl font-bold text-green-600">3</p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <p className="text-sm text-gray-500 mb-2">Total Bookings</p>
              <p className="text-3xl font-bold text-blue-600">735</p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <p className="text-sm text-gray-500 mb-2">Total Revenue</p>
              <p className="text-xl font-bold text-purple-600">{formatRupiah(482000000)}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Commission</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Bookings</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {merchants.map((merchant) => (
                  <tr key={merchant.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{merchant.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        merchant.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {merchant.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{merchant.commission}%</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{merchant.totalBookings}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">{formatRupiah(merchant.revenue)}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Vouchers Tab */}
      {activeTab === 'vouchers' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-6 border">
              <p className="text-sm text-gray-500 mb-2">Total Vouchers</p>
              <p className="text-3xl font-bold text-gray-900">4</p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <p className="text-sm text-gray-500 mb-2">Active</p>
              <p className="text-3xl font-bold text-green-600">3</p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <p className="text-sm text-gray-500 mb-2">Total Usage</p>
              <p className="text-3xl font-bold text-blue-600">512</p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <p className="text-sm text-gray-500 mb-2">Avg Discount</p>
              <p className="text-3xl font-bold text-purple-600">27.5%</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Max Discount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Min Transaction</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valid Until</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {vouchers.map((voucher) => (
                  <tr key={voucher.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">{voucher.code}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{voucher.discount}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{formatRupiah(voucher.maxDiscount)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{formatRupiah(voucher.minTransaction)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">{voucher.usage}/{voucher.limit}</span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(voucher.usage / voucher.limit) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{voucher.validUntil}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        voucher.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {voucher.status === 'active' ? 'Active' : 'Expired'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

