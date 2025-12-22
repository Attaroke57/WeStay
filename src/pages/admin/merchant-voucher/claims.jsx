import React, { useState } from "react";
import { Download, Filter, CheckCircle, XCircle, Clock, User, Ticket, Calendar, Search } from "lucide-react";

export default function VoucherClaimsPage() {
  const [statusFilter, setStatusFilter] = useState("all");
  
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  const claimsData = [
    {
      id: 1,
      voucherCode: "NEWUSER50",
      customerName: "Ahmad Rizki",
      customerEmail: "ahmad.rizki@email.com",
      claimDate: "2024-12-20 14:30",
      usedDate: "2024-12-21 10:15",
      discount: "50%",
      maxDiscount: 100000,
      transactionAmount: 500000,
      discountAmount: 100000,
      status: "used",
      merchant: "Tokopedia"
    },
    {
      id: 2,
      voucherCode: "WEEKDAY20",
      customerName: "Siti Nurhaliza",
      customerEmail: "siti.nur@email.com",
      claimDate: "2024-12-19 09:20",
      usedDate: null,
      discount: "20%",
      maxDiscount: 50000,
      transactionAmount: 0,
      discountAmount: 0,
      status: "claimed",
      merchant: "Traveloka"
    },
    {
      id: 3,
      voucherCode: "FLASHSALE",
      customerName: "Budi Santoso",
      customerEmail: "budi.santoso@email.com",
      claimDate: "2024-12-18 16:45",
      usedDate: "2024-12-19 11:30",
      discount: "30%",
      maxDiscount: 150000,
      transactionAmount: 1200000,
      discountAmount: 150000,
      status: "used",
      merchant: "Mamikos"
    },
    {
      id: 4,
      voucherCode: "NEWUSER50",
      customerName: "Dewi Lestari",
      customerEmail: "dewi.lestari@email.com",
      claimDate: "2024-12-15 13:10",
      usedDate: null,
      discount: "50%",
      maxDiscount: 100000,
      transactionAmount: 0,
      discountAmount: 0,
      status: "expired",
      merchant: "Tokopedia"
    },
    {
      id: 5,
      voucherCode: "WEEKDAY20",
      customerName: "Eko Prasetyo",
      customerEmail: "eko.prasetyo@email.com",
      claimDate: "2024-12-22 08:00",
      usedDate: null,
      discount: "20%",
      maxDiscount: 50000,
      transactionAmount: 0,
      discountAmount: 0,
      status: "claimed",
      merchant: "Traveloka"
    },
    {
      id: 6,
      voucherCode: "FLASHSALE",
      customerName: "Rina Amelia",
      customerEmail: "rina.amelia@email.com",
      claimDate: "2024-12-21 15:20",
      usedDate: "2024-12-22 09:45",
      discount: "30%",
      maxDiscount: 150000,
      transactionAmount: 800000,
      discountAmount: 150000,
      status: "used",
      merchant: "Mamikos"
    },
  ];

  const filteredData = statusFilter === "all" 
    ? claimsData 
    : claimsData.filter(item => item.status === statusFilter);

  const totalClaims = claimsData.length;
  const usedClaims = claimsData.filter(item => item.status === "used").length;
  const claimedClaims = claimsData.filter(item => item.status === "claimed").length;
  const totalDiscountGiven = claimsData
    .filter(item => item.status === "used")
    .reduce((sum, item) => sum + item.discountAmount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Voucher Claims</h1>
          <p className="text-sm text-gray-600">Monitor klaim dan penggunaan voucher customer</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-all hover:shadow-md active:scale-95 font-medium">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95 font-medium">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Ticket className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Total Claims</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">{totalClaims}</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Used</p>
          <p className="text-2xl md:text-3xl font-bold text-green-600">{usedClaims}</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Pending</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">{claimedClaims}</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Ticket className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Total Discount</p>
          <p className="text-base md:text-xl font-bold text-purple-600">{formatRupiah(totalDiscountGiven)}</p>
        </div>
      </div>

      {/* Status Filter Pills */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {["all", "used", "claimed", "expired"].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              statusFilter === status
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
            <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
              {status === "all" ? claimsData.length : claimsData.filter(item => item.status === status).length}
            </span>
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Voucher Code</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Merchant</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Discount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Claim Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Used Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Transaction</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.customerName}</p>
                        <p className="text-xs text-gray-500">{item.customerEmail}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Ticket className="w-4 h-4 text-pink-600" />
                      <span className="text-sm font-bold text-pink-600">{item.voucherCode}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">
                      {item.merchant}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-bold text-purple-600">{item.discount}</p>
                      <p className="text-xs text-gray-500">Max {formatRupiah(item.maxDiscount)}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{item.claimDate}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{item.usedDate || "-"}</span>
                  </td>
                  <td className="px-6 py-4">
                    {item.status === "used" ? (
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{formatRupiah(item.transactionAmount)}</p>
                        <p className="text-xs text-green-600">-{formatRupiah(item.discountAmount)}</p>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      item.status === 'used' ? 'bg-green-100 text-green-700 border border-green-200' :
                      item.status === 'claimed' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                      'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        item.status === 'used' ? 'bg-green-500' :
                        item.status === 'claimed' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></span>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            {/* Customer Info */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{item.customerName}</h3>
                  <p className="text-xs text-gray-500">{item.customerEmail}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-semibold ${
                item.status === 'used' ? 'bg-green-100 text-green-700' :
                item.status === 'claimed' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {item.status}
              </span>
            </div>

            {/* Voucher Info */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-pink-50 rounded-lg p-3 border border-pink-100">
                <p className="text-xs text-pink-600 font-medium mb-1">Voucher Code</p>
                <p className="text-sm font-bold text-pink-700">{item.voucherCode}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                <p className="text-xs text-purple-600 font-medium mb-1">Discount</p>
                <p className="text-sm font-bold text-purple-700">{item.discount}</p>
              </div>
            </div>

            {/* Merchant & Dates */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Merchant</span>
                <span className="font-semibold text-blue-600">{item.merchant}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Claim Date</span>
                <span className="font-medium text-gray-900">{item.claimDate}</span>
              </div>
              {item.usedDate && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Used Date</span>
                  <span className="font-medium text-gray-900">{item.usedDate}</span>
                </div>
              )}
              {item.status === "used" && (
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-gray-500">Transaction</span>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{formatRupiah(item.transactionAmount)}</p>
                    <p className="text-green-600">-{formatRupiah(item.discountAmount)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}