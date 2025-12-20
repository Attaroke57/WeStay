import React, { useState } from "react";
import { Trophy, Medal, Award, TrendingUp, TrendingDown, Star, DollarSign, Users, Target, Home, Filter, Download, ArrowUp, ArrowDown } from "lucide-react";

export default function UnitPerformancePage() {
  const [sortBy, setSortBy] = useState("revenue");
  const [timeRange, setTimeRange] = useState("month");
  
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  const performanceData = [
    {
      id: 1,
      rank: 1,
      unitName: "Kos Melati Bandung B-201",
      revenue: 2250000,
      occupancyRate: 100,
      avgRating: 4.9,
      totalBookings: 12,
      revenueGrowth: 8.5,
      customerSatisfaction: 98,
      target: 2000000,
      achievement: 112.5,
      category: "Premium",
      location: "Bandung"
    },
    {
      id: 2,
      rank: 2,
      unitName: "Kos Mawar Jakarta A-101",
      revenue: 2550000,
      occupancyRate: 97,
      avgRating: 4.8,
      totalBookings: 15,
      revenueGrowth: 7.2,
      customerSatisfaction: 96,
      target: 2500000,
      achievement: 102,
      category: "Premium",
      location: "Jakarta"
    },
    {
      id: 3,
      rank: 3,
      unitName: "Kos Melati Bandung B-202",
      revenue: 2100000,
      occupancyRate: 93,
      avgRating: 4.6,
      totalBookings: 11,
      revenueGrowth: 5.8,
      customerSatisfaction: 92,
      target: 2000000,
      achievement: 105,
      category: "Premium",
      location: "Bandung"
    },
    {
      id: 4,
      rank: 4,
      unitName: "Kos Anggrek Yogya C-301",
      revenue: 1950000,
      occupancyRate: 100,
      avgRating: 4.7,
      totalBookings: 10,
      revenueGrowth: 12.3,
      customerSatisfaction: 94,
      target: 1800000,
      achievement: 108.3,
      category: "Standard",
      location: "Yogyakarta"
    },
    {
      id: 5,
      rank: 5,
      unitName: "Kos Mawar Jakarta A-102",
      revenue: 1700000,
      occupancyRate: 67,
      avgRating: 4.5,
      totalBookings: 8,
      revenueGrowth: -15.2,
      customerSatisfaction: 85,
      target: 2500000,
      achievement: 68,
      category: "Premium",
      location: "Jakarta"
    },
    {
      id: 6,
      rank: 6,
      unitName: "Kos Anggrek Yogya C-302",
      revenue: 1300000,
      occupancyRate: 67,
      avgRating: 4.3,
      totalBookings: 6,
      revenueGrowth: -25.6,
      customerSatisfaction: 78,
      target: 1800000,
      achievement: 72.2,
      category: "Standard",
      location: "Yogyakarta"
    },
  ];

  const sortedData = [...performanceData].sort((a, b) => {
    if (sortBy === "revenue") return b.revenue - a.revenue;
    if (sortBy === "occupancy") return b.occupancyRate - a.occupancyRate;
    if (sortBy === "rating") return b.avgRating - a.avgRating;
    return 0;
  });

  const totalRevenue = performanceData.reduce((sum, item) => sum + item.revenue, 0);
  const avgOccupancy = Math.round(performanceData.reduce((sum, item) => sum + item.occupancyRate, 0) / performanceData.length);
  const topPerformers = performanceData.filter(item => item.achievement >= 100).length;
  const avgRating = (performanceData.reduce((sum, item) => sum + item.avgRating, 0) / performanceData.length).toFixed(1);

  const getRankBadge = (rank) => {
    if (rank === 1) return { IconComponent: Trophy, color: "from-yellow-400 to-yellow-600", text: "text-yellow-600" };
    if (rank === 2) return { IconComponent: Medal, color: "from-gray-300 to-gray-500", text: "text-gray-600" };
    if (rank === 3) return { IconComponent: Award, color: "from-orange-400 to-orange-600", text: "text-orange-600" };
    return { IconComponent: Home, color: "from-blue-400 to-blue-600", text: "text-blue-600" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Unit Performance</h1>
          <p className="text-sm text-gray-600">Ranking dan analisis performa unit terbaik</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none font-medium"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
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
          <p className="text-xs text-green-600 font-medium mt-1">All units combined</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Avg Occupancy</p>
          <p className="text-2xl md:text-3xl font-bold text-purple-600">{avgOccupancy}%</p>
          <p className="text-xs text-gray-500 mt-1">Overall performance</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Top Performers</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">{topPerformers}</p>
          <p className="text-xs text-gray-500 mt-1">Above target</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Avg Rating</p>
          <p className="text-2xl md:text-3xl font-bold text-pink-600">{avgRating}</p>
          <p className="text-xs text-gray-500 mt-1">Customer satisfaction</p>
        </div>
      </div>

      {/* Sort Pills */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {[
          { value: "revenue", label: "Revenue", icon: DollarSign },
          { value: "occupancy", label: "Occupancy", icon: Users },
          { value: "rating", label: "Rating", icon: Star }
        ].map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setSortBy(value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              sortBy === value
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Top 3 Podium (Desktop Only) */}
      <div className="hidden lg:block mb-6">
        <div className="grid grid-cols-3 gap-4 items-end">
          {/* Rank 2 */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 border-2 border-gray-300 h-64 flex flex-col justify-between">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
                <Medal className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">#2</div>
              <h3 className="font-bold text-gray-900 mb-2">{sortedData[1]?.unitName}</h3>
              <div className="text-2xl font-bold text-green-600">{formatRupiah(sortedData[1]?.revenue)}</div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-yellow-500">⭐</span>
                <span className="font-semibold">{sortedData[1]?.avgRating}</span>
              </div>
            </div>
          </div>

          {/* Rank 1 */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-6 border-2 border-yellow-400 h-80 flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <Trophy className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-600 mb-2">#1</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{sortedData[0]?.unitName}</h3>
              <div className="text-3xl font-bold text-green-600">{formatRupiah(sortedData[0]?.revenue)}</div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="font-bold text-lg">{sortedData[0]?.avgRating}</span>
              </div>
              <div className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold">
                🏆 Champion
              </div>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 border-2 border-orange-300 h-56 flex flex-col justify-between">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">#3</div>
              <h3 className="font-bold text-gray-900 mb-2">{sortedData[2]?.unitName}</h3>
              <div className="text-2xl font-bold text-green-600">{formatRupiah(sortedData[2]?.revenue)}</div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-yellow-500">⭐</span>
                <span className="font-semibold">{sortedData[2]?.avgRating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Unit Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Occupancy</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Bookings</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Growth</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Target Achievement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sortedData.map((item, index) => {
                const badge = getRankBadge(index + 1);
                const IconComponent = badge.IconComponent;
                return (
                  <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center shadow-md`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className={`text-xl font-bold ${badge.text}`}>#{index + 1}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.unitName}</p>
                        <p className="text-xs text-gray-500">{item.location} · {item.category}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-green-600">{formatRupiah(item.revenue)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${item.occupancyRate}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-purple-600">{item.occupancyRate}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold text-gray-900">{item.avgRating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-700">{item.totalBookings}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        {item.revenueGrowth >= 0 ? (
                          <>
                            <ArrowUp className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-bold text-green-600">+{item.revenueGrowth}%</span>
                          </>
                        ) : (
                          <>
                            <ArrowDown className="w-4 h-4 text-red-500" />
                            <span className="text-sm font-bold text-red-600">{item.revenueGrowth}%</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              item.achievement >= 100 ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-yellow-500 to-yellow-600'
                            }`}
                            style={{ width: `${Math.min(item.achievement, 100)}%` }}
                          />
                        </div>
                        <span className={`text-xs font-bold ${item.achievement >= 100 ? 'text-green-600' : 'text-yellow-600'}`}>
                          {item.achievement}%
                        </span>
                      </div>
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
        {sortedData.map((item, index) => {
          const badge = getRankBadge(index + 1);
          const IconComponent = badge.IconComponent;
          return (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
              {/* Header with Rank */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className={`text-2xl font-bold ${badge.text} mb-1`}>#{index + 1}</div>
                  <h3 className="text-sm font-bold text-gray-900">{item.unitName}</h3>
                  <p className="text-xs text-gray-500">{item.location} · {item.category}</p>
                </div>
              </div>

              {/* Revenue & Rating */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                  <p className="text-xs text-green-600 font-medium mb-1">Revenue</p>
                  <p className="text-sm font-bold text-green-700">{formatRupiah(item.revenue)}</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-100">
                  <p className="text-xs text-yellow-600 font-medium mb-1">Rating</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-yellow-700">{item.avgRating}</span>
                  </div>
                </div>
              </div>

              {/* Occupancy */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600 font-medium">Occupancy Rate</span>
                  <span className="text-sm font-bold text-purple-600">{item.occupancyRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full"
                    style={{ width: `${item.occupancyRate}%` }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Bookings</p>
                  <p className="text-sm font-bold text-gray-900">{item.totalBookings}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Growth</p>
                  <p className={`text-sm font-bold ${item.revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.revenueGrowth >= 0 ? '+' : ''}{item.revenueGrowth}%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Target</p>
                  <p className={`text-sm font-bold ${item.achievement >= 100 ? 'text-green-600' : 'text-yellow-600'}`}>
                    {item.achievement}%
                  </p>
                </div>
              </div>

              {/* Achievement Bar */}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600 font-medium">Target Achievement</span>
                  <span className={`text-xs font-bold ${item.achievement >= 100 ? 'text-green-600' : 'text-yellow-600'}`}>
                    {formatRupiah(item.target)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      item.achievement >= 100 ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-yellow-500 to-yellow-600'
                    }`}
                    style={{ width: `${Math.min(item.achievement, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}