import React, { useState } from "react";
import { Plus, Edit, Trash2, Ticket, Calendar, Percent, Users, Download, Filter } from "lucide-react";

export default function VoucherPage() {
  const formatRupiah = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);

  const vouchers = [
    { id: 1, code: 'NEWUSER50', discount: '50%', maxDiscount: 100000, minTransaction: 500000, usage: 45, limit: 100, validUntil: '2024-12-31', status: 'active' },
    { id: 2, code: 'WEEKDAY20', discount: '20%', maxDiscount: 50000, minTransaction: 200000, usage: 128, limit: 200, validUntil: '2024-12-31', status: 'active' },
    { id: 3, code: 'FLASHSALE', discount: '30%', maxDiscount: 150000, minTransaction: 1000000, usage: 89, limit: 100, validUntil: '2024-12-20', status: 'active' },
    { id: 4, code: 'OLDUSER10', discount: '10%', maxDiscount: 30000, minTransaction: 100000, usage: 250, limit: 250, validUntil: '2024-11-30', status: 'expired' },
  ];

  const totalVouchers = vouchers.length;
  const activeVouchers = vouchers.filter(v => v.status === 'active').length;
  const totalUsage = vouchers.reduce((sum, v) => sum + v.usage, 0);
  const avgDiscount = vouchers.reduce((sum, v) => sum + parseFloat(v.discount), 0) / vouchers.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Voucher Management</h1>
          <p className="text-sm text-gray-600">Kelola voucher promo dan tracking penggunaan</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-all hover:shadow-md active:scale-95 font-medium">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95 font-medium">
            <Plus className="w-4 h-4" />
            Create Voucher
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Ticket className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Total Vouchers</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">{totalVouchers}</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Ticket className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Active</p>
          <p className="text-2xl md:text-3xl font-bold text-green-600">{activeVouchers}</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Total Usage</p>
          <p className="text-2xl md:text-3xl font-bold text-blue-600">{totalUsage}</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Percent className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Avg Discount</p>
          <p className="text-2xl md:text-3xl font-bold text-purple-600">{avgDiscount.toFixed(1)}%</p>
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

      {/* Mobile Cards */}
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
    </div>
  );
}