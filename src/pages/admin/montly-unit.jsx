import React, { useState } from "react";
import { Calendar, TrendingUp, TrendingDown, Home, DollarSign, Users, Target, Download, ChevronDown } from "lucide-react";

export default function MonthlyUnitMonitorPage() {
  const [selectedMonth, setSelectedMonth] = useState("2024-12");
  const [selectedView, setSelectedView] = useState("all");
  
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  const monthlyData = [
    {
      id: 1,
      unitName: "Kos Mawar Jakarta A-101",
      monthlyRevenue: 2550000,
      lastMonthRevenue: 2500000,
      avgOccupancy: 97,
      daysOccupied: 29,
      totalDays: 30,
      maintenanceCost: 150000,
      netRevenue: 2400000,
      rating: 4.8,
      complaints: 0,
      trend: "up",
      performance: "excellent"
    },
    {
      id: 2,
      unitName: "Kos Mawar Jakarta A-102",
      monthlyRevenue: 1700000,
      lastMonthRevenue: 2500000,
      avgOccupancy: 67,
      daysOccupied: 20,
      totalDays: 30,
      maintenanceCost: 100000,
      netRevenue: 1600000,
      rating: 4.5,
      complaints: 1,
      trend: "down",
      performance: "average"
    },
    {
      id: 3,
      unitName: "Kos Melati Bandung B-201",
      monthlyRevenue: 2250000,
      lastMonthRevenue: 2200000,
      avgOccupancy: 100,
      daysOccupied: 30,
      totalDays: 30,
      maintenanceCost: 200000,
      netRevenue: 2050000,
      rating: 4.9,
      complaints: 0,
      trend: "up",
      performance: "excellent"
    },
    {
      id: 4,
      unitName: "Kos Melati Bandung B-202",
      monthlyRevenue: 2100000,
      lastMonthRevenue: 2150000,
      avgOccupancy: 93,
      daysOccupied: 28,
      totalDays: 30,
      maintenanceCost: 120000,
      netRevenue: 1980000,
      rating: 4.6,
      complaints: 0,
      trend: "stable",
      performance: "good"
    },
    {
      id: 5,
      unitName: "Kos Anggrek Yogya C-301",
      monthlyRevenue: 1950000,
      lastMonthRevenue: 1800000,
      avgOccupancy: 100,
      daysOccupied: 30,
      totalDays: 30,
      maintenanceCost: 80000,
      netRevenue: 1870000,
      rating: 4.7,
      complaints: 0,
      trend: "up",
      performance: "excellent"
    },
    {
      id: 6,
      unitName: "Kos Anggrek Yogya C-302",
      monthlyRevenue: 1300000,
      lastMonthRevenue: 1950000,
      avgOccupancy: 67,
      daysOccupied: 20,
      totalDays: 30,
      maintenanceCost: 150000,
      netRevenue: 1150000,
      rating: 4.3,
      complaints: 2,
      trend: "down",
      performance: "poor"
    },
  ];

  const filteredData = selectedView === "all" 
    ? monthlyData 
    : monthlyData.filter(item => item.performance === selectedView);

  const totalRevenue = monthlyData.reduce((sum, item) => sum + item.monthlyRevenue, 0);
  const totalNetRevenue = monthlyData.reduce((sum, item) => sum + item.netRevenue, 0);
  const avgOccupancy = Math.round(monthlyData.reduce((sum, item) => sum + item.avgOccupancy, 0) / monthlyData.length);
  const excellentUnits = monthlyData.filter(item => item.performance === "excellent").length;

  const lastMonthTotal = monthlyData.reduce((sum, item) => sum + item.lastMonthRevenue, 0);
  const revenueGrowth = ((totalRevenue - lastMonthTotal) / lastMonthTotal * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Monthly Unit Monitor</h1>
          <p className="text-sm text-gray-600">Analisis performa unit bulanan dan trend revenue</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none font-medium"
          />
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
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Total Revenue</p>
          <p className="text-base md:text-2xl font-bold text-gray-900">{formatRupiah(totalRevenue)}</p>
          <p className="text-xs text-green-600 font-medium mt-1">+{revenueGrowth}% vs last month</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Net Revenue</p>
          <p className="text-base md:text-2xl font-bold text-blue-600">{formatRupiah(totalNetRevenue)}</p>
          <p className="text-xs text-gray-500 mt-1">After maintenance</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Avg Occupancy</p>
          <p className="text-2xl md:text-3xl font-bold text-purple-600">{avgOccupancy}%</p>
          <p className="text-xs text-gray-500 mt-1">This month</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Top Performers</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">{excellentUnits}</p>
          <p className="text-xs text-gray-500 mt-1">Excellent units</p>
        </div>
      </div>

      {/* Performance Filter Pills */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {["all", "excellent", "good", "average", "poor"].map((view) => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              selectedView === view
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {view.charAt(0).toUpperCase() + view.slice(1)}
            {view !== "all" && (
              <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                {monthlyData.filter(item => item.performance === view).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Unit Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Net Revenue</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Occupancy</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Days</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Maintenance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((item) => {
                const revenueChange = ((item.monthlyRevenue - item.lastMonthRevenue) / item.lastMonthRevenue * 100).toFixed(1);
                return (
                  <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-semibold text-gray-900">{item.unitName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-bold text-green-600">{formatRupiah(item.monthlyRevenue)}</p>
                        <p className={`text-xs font-medium ${revenueChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {revenueChange >= 0 ? '+' : ''}{revenueChange}%
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-blue-600">{formatRupiah(item.netRevenue)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full transition-all"
                            style={{ width: `${item.avgOccupancy}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-purple-600">{item.avgOccupancy}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-700">{item.daysOccupied}/{item.totalDays}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{formatRupiah(item.maintenanceCost)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm font-bold text-gray-900">{item.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold ${
                        item.performance === 'excellent' ? 'bg-green-100 text-green-700 border border-green-200' :
                        item.performance === 'good' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                        item.performance === 'average' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                        'bg-red-100 text-red-700 border border-red-200'
                      }`}>
                        {item.performance}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      ) : item.trend === 'down' ? (
                        <TrendingDown className="w-5 h-5 text-red-500" />
                      ) : (
                        <div className="w-5 h-0.5 bg-gray-400 rounded"></div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredData.map((item) => {
          const revenueChange = ((item.monthlyRevenue - item.lastMonthRevenue) / item.lastMonthRevenue * 100).toFixed(1);
          return (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 flex-1">
                  <Home className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{item.unitName}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                        item.performance === 'excellent' ? 'bg-green-100 text-green-700' :
                        item.performance === 'good' ? 'bg-blue-100 text-blue-700' :
                        item.performance === 'average' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {item.performance}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-sm">⭐</span>
                        <span className="text-xs font-bold text-gray-900">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {item.trend === 'up' ? (
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : item.trend === 'down' ? (
                  <TrendingDown className="w-5 h-5 text-red-500 flex-shrink-0" />
                ) : (
                  <div className="w-5 h-0.5 bg-gray-400 rounded"></div>
                )}
              </div>

              {/* Revenue Info */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                  <p className="text-xs text-green-600 font-medium mb-1">Revenue</p>
                  <p className="text-sm font-bold text-green-700">{formatRupiah(item.monthlyRevenue)}</p>
                  <p className={`text-xs font-medium mt-1 ${revenueChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {revenueChange >= 0 ? '+' : ''}{revenueChange}%
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="text-xs text-blue-600 font-medium mb-1">Net Revenue</p>
                  <p className="text-sm font-bold text-blue-700">{formatRupiah(item.netRevenue)}</p>
                  <p className="text-xs text-gray-500 mt-1">After costs</p>
                </div>
              </div>

              {/* Occupancy & Days */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600 font-medium">Occupancy</span>
                  <span className="text-sm font-bold text-purple-600">{item.avgOccupancy}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full transition-all"
                    style={{ width: `${item.avgOccupancy}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.daysOccupied} of {item.totalDays} days occupied</p>
              </div>

              {/* Footer Info */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                <div>
                  <span className="text-gray-500">Maintenance: </span>
                  <span className="font-semibold text-gray-700">{formatRupiah(item.maintenanceCost)}</span>
                </div>
                <div>
                  <span className="text-gray-500">Complaints: </span>
                  <span className={`font-semibold ${item.complaints > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {item.complaints}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}