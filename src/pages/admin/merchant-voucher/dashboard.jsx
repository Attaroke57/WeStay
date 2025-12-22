import React, { useState } from "react";
import { TrendingUp, TrendingDown, Ticket, Users, DollarSign, CheckCircle, Clock, XCircle, BarChart3, Calendar } from "lucide-react";

export default function VoucherDashboardPage() {
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  // Summary Stats
  const stats = {
    totalVouchers: 48,
    activeVouchers: 32,
    totalClaims: 1256,
    usedVouchers: 892,
    pendingClaims: 364,
    totalDiscount: 125000000,
    conversionRate: 71,
    avgDiscountPerUser: 140000
  };

  // Top Performing Vouchers
  const topVouchers = [
    { code: "NEWUSER50", claims: 342, usage: 289, conversionRate: 84.5, revenue: 42000000 },
    { code: "FLASHSALE", claims: 256, usage: 198, conversionRate: 77.3, revenue: 38500000 },
    { code: "WEEKDAY20", claims: 198, usage: 156, conversionRate: 78.8, revenue: 28000000 },
    { code: "WEEKEND30", claims: 167, usage: 132, conversionRate: 79.0, revenue: 24500000 },
    { code: "LOYALTY25", claims: 145, usage: 117, conversionRate: 80.7, revenue: 21000000 }
  ];

  // Recent Claims Activity
  const recentClaims = [
    { id: 1, code: "NEWUSER50", customer: "Ahmad Rizki", time: "5 menit lalu", status: "used" },
    { id: 2, code: "WEEKDAY20", customer: "Siti Nurhaliza", time: "12 menit lalu", status: "claimed" },
    { id: 3, code: "FLASHSALE", customer: "Budi Santoso", time: "18 menit lalu", status: "used" },
    { id: 4, code: "WEEKEND30", customer: "Dewi Lestari", time: "23 menit lalu", status: "claimed" },
    { id: 5, code: "LOYALTY25", customer: "Eko Prasetyo", time: "35 menit lalu", status: "used" }
  ];

  // Monthly Trend Data (simplified for display)
  const monthlyTrend = [
    { month: "Jul", claims: 856, used: 612 },
    { month: "Aug", claims: 923, used: 678 },
    { month: "Sep", claims: 1047, used: 756 },
    { month: "Oct", claims: 1134, used: 834 },
    { month: "Nov", claims: 1189, used: 871 },
    { month: "Dec", claims: 1256, used: 892 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Voucher Dashboard</h1>
          <p className="text-sm text-gray-600">Overview performa voucher dan aktivitas claim real-time</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <select className="px-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none font-medium">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Ticket className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Total Vouchers</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">{stats.totalVouchers}</p>
          <p className="text-xs text-green-600 font-medium mt-1">+8 this month</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Total Claims</p>
          <p className="text-2xl md:text-3xl font-bold text-green-600">{stats.totalClaims.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">{stats.usedVouchers} used</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Total Discount</p>
          <p className="text-base md:text-xl font-bold text-purple-600">{formatRupiah(stats.totalDiscount)}</p>
          <p className="text-xs text-gray-500 mt-1">Given to customers</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Conversion Rate</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">{stats.conversionRate}%</p>
          <p className="text-xs text-green-600 font-medium mt-1">+5% vs last month</p>
        </div>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Active</p>
              <p className="text-xl font-bold text-green-600">{stats.activeVouchers}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Pending</p>
              <p className="text-xl font-bold text-yellow-600">{stats.pendingClaims}</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Used</p>
              <p className="text-xl font-bold text-blue-600">{stats.usedVouchers}</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Avg/User</p>
              <p className="text-sm font-bold text-purple-600">{formatRupiah(stats.avgDiscountPerUser)}</p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Vouchers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Top Performing Vouchers</h3>
            <span className="text-xs text-gray-500">This Month</span>
          </div>
          <div className="space-y-3">
            {topVouchers.map((voucher, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white ${
                    index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                    index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                    index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                    'bg-gradient-to-br from-blue-400 to-blue-600'
                  }`}>
                    #{index + 1}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 mb-1">{voucher.code}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{voucher.claims} claims</span>
                    <span>•</span>
                    <span>{voucher.usage} used</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-green-600">{formatRupiah(voucher.revenue)}</p>
                  <p className="text-xs text-purple-600 font-medium">{voucher.conversionRate}% rate</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Claims Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Recent Claims</h3>
            <span className="text-xs text-gray-500">Live</span>
          </div>
          <div className="space-y-3">
            {recentClaims.map((claim) => (
              <div key={claim.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{claim.customer}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-medium text-pink-600">{claim.code}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{claim.time}</span>
                  </div>
                </div>
                <div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-semibold ${
                    claim.status === 'used' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      claim.status === 'used' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></span>
                    {claim.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Trend Chart (Simplified) */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Monthly Trend</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Claims</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Used</span>
            </div>
          </div>
        </div>
        
        {/* Simple Bar Chart */}
        <div className="flex items-end justify-between gap-2 h-48">
          {monthlyTrend.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col gap-1">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all hover:from-blue-600 hover:to-blue-500"
                  style={{ height: `${(data.claims / 1300) * 100}%`, minHeight: '20px' }}
                  title={`Claims: ${data.claims}`}
                ></div>
                <div 
                  className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg transition-all hover:from-green-600 hover:to-green-500"
                  style={{ height: `${(data.used / 1300) * 100}%`, minHeight: '15px' }}
                  title={`Used: ${data.used}`}
                ></div>
              </div>
              <span className="text-xs font-medium text-gray-600">{data.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}