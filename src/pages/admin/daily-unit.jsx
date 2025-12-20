import React, { useState } from "react";
import { Calendar, TrendingUp, TrendingDown, Home, DollarSign, Users, CheckCircle, XCircle, Clock, Download } from "lucide-react";

export default function DailyUnitMonitorPage() {
  const [selectedDate, setSelectedDate] = useState("2024-12-20");
  
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  const dailyData = [
    {
      id: 1,
      unitName: "Kos Mawar Jakarta A-101",
      status: "occupied",
      todayRevenue: 85000,
      checkIn: 0,
      checkOut: 0,
      occupancyRate: 100,
      maintenanceStatus: "good",
      paymentStatus: "paid",
      trend: "stable"
    },
    {
      id: 2,
      unitName: "Kos Mawar Jakarta A-102",
      status: "vacant",
      todayRevenue: 0,
      checkIn: 1,
      checkOut: 0,
      occupancyRate: 0,
      maintenanceStatus: "good",
      paymentStatus: "none",
      trend: "up"
    },
    {
      id: 3,
      unitName: "Kos Melati Bandung B-201",
      status: "occupied",
      todayRevenue: 75000,
      checkIn: 0,
      checkOut: 1,
      occupancyRate: 100,
      maintenanceStatus: "maintenance",
      paymentStatus: "pending",
      trend: "down"
    },
    {
      id: 4,
      unitName: "Kos Melati Bandung B-202",
      status: "occupied",
      todayRevenue: 75000,
      checkIn: 0,
      checkOut: 0,
      occupancyRate: 100,
      maintenanceStatus: "good",
      paymentStatus: "paid",
      trend: "stable"
    },
    {
      id: 5,
      unitName: "Kos Anggrek Yogya C-301",
      status: "reserved",
      todayRevenue: 0,
      checkIn: 1,
      checkOut: 0,
      occupancyRate: 0,
      maintenanceStatus: "good",
      paymentStatus: "paid",
      trend: "up"
    },
    {
      id: 6,
      unitName: "Kos Anggrek Yogya C-302",
      status: "occupied",
      todayRevenue: 65000,
      checkIn: 0,
      checkOut: 0,
      occupancyRate: 100,
      maintenanceStatus: "good",
      paymentStatus: "paid",
      trend: "stable"
    },
  ];

  const totalRevenue = dailyData.reduce((sum, item) => sum + item.todayRevenue, 0);
  const occupiedUnits = dailyData.filter(item => item.status === "occupied").length;
  const vacantUnits = dailyData.filter(item => item.status === "vacant").length;
  const totalCheckIns = dailyData.reduce((sum, item) => sum + item.checkIn, 0);
  const totalCheckOuts = dailyData.reduce((sum, item) => sum + item.checkOut, 0);
  const occupancyPercentage = Math.round((occupiedUnits / dailyData.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Daily Unit Monitor</h1>
          <p className="text-sm text-gray-600">Monitor aktivitas dan performa unit harian</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
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
          <p className="text-xs md:text-sm text-gray-500 mb-1">Today Revenue</p>
          <p className="text-base md:text-2xl font-bold text-gray-900">{formatRupiah(totalRevenue)}</p>
          <p className="text-xs text-green-600 font-medium mt-1">+12% vs yesterday</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Occupancy Rate</p>
          <p className="text-2xl md:text-3xl font-bold text-blue-600">{occupancyPercentage}%</p>
          <p className="text-xs text-gray-500 mt-1">{occupiedUnits} of {dailyData.length} units</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Check-ins Today</p>
          <p className="text-2xl md:text-3xl font-bold text-purple-600">{totalCheckIns}</p>
          <p className="text-xs text-gray-500 mt-1">New guests arriving</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Check-outs Today</p>
          <p className="text-2xl md:text-3xl font-bold text-orange-600">{totalCheckOuts}</p>
          <p className="text-xs text-gray-500 mt-1">Guests departing</p>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Occupied</p>
              <p className="text-xl font-bold text-green-600">{occupiedUnits}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Vacant</p>
              <p className="text-xl font-bold text-gray-600">{vacantUnits}</p>
            </div>
            <XCircle className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Reserved</p>
              <p className="text-xl font-bold text-blue-600">
                {dailyData.filter(item => item.status === "reserved").length}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Maintenance</p>
              <p className="text-xl font-bold text-yellow-600">
                {dailyData.filter(item => item.maintenanceStatus === "maintenance").length}
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Unit Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Today Revenue</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Check-in</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Check-out</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Occupancy</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Maintenance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Payment</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {dailyData.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-semibold text-gray-900">{item.unitName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold ${
                      item.status === 'occupied' ? 'bg-green-100 text-green-700 border border-green-200' :
                      item.status === 'vacant' ? 'bg-gray-100 text-gray-700 border border-gray-200' :
                      'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        item.status === 'occupied' ? 'bg-green-500' :
                        item.status === 'vacant' ? 'bg-gray-500' :
                        'bg-blue-500'
                      }`}></span>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-green-600">
                      {item.todayRevenue > 0 ? formatRupiah(item.todayRevenue) : '-'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-semibold ${item.checkIn > 0 ? 'text-purple-600' : 'text-gray-400'}`}>
                      {item.checkIn}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-semibold ${item.checkOut > 0 ? 'text-orange-600' : 'text-gray-400'}`}>
                      {item.checkOut}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.occupancyRate === 100 ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gray-400'
                          }`}
                          style={{ width: `${item.occupancyRate}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-700">{item.occupancyRate}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-semibold ${
                      item.maintenanceStatus === 'good' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.maintenanceStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-semibold ${
                      item.paymentStatus === 'paid' ? 'bg-green-100 text-green-700' :
                      item.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.paymentStatus}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {dailyData.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2 flex-1">
                <Home className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <h3 className="text-sm font-bold text-gray-900">{item.unitName}</h3>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-semibold flex-shrink-0 ${
                item.status === 'occupied' ? 'bg-green-100 text-green-700' :
                item.status === 'vacant' ? 'bg-gray-100 text-gray-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                  item.status === 'occupied' ? 'bg-green-500' :
                  item.status === 'vacant' ? 'bg-gray-500' :
                  'bg-blue-500'
                }`}></span>
                {item.status}
              </span>
            </div>

            {/* Revenue & Occupancy */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                <p className="text-xs text-green-600 font-medium mb-1">Today Revenue</p>
                <p className="text-sm font-bold text-green-700">
                  {item.todayRevenue > 0 ? formatRupiah(item.todayRevenue) : '-'}
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <p className="text-xs text-blue-600 font-medium mb-1">Occupancy</p>
                <p className="text-sm font-bold text-blue-700">{item.occupancyRate}%</p>
              </div>
            </div>

            {/* Check-in/out & Status */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Check-in</span>
                <span className={`text-sm font-bold ${item.checkIn > 0 ? 'text-purple-600' : 'text-gray-400'}`}>
                  {item.checkIn}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Check-out</span>
                <span className={`text-sm font-bold ${item.checkOut > 0 ? 'text-orange-600' : 'text-gray-400'}`}>
                  {item.checkOut}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex gap-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  item.maintenanceStatus === 'good' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {item.maintenanceStatus}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  item.paymentStatus === 'paid' ? 'bg-green-100 text-green-700' :
                  item.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {item.paymentStatus}
                </span>
              </div>
              {item.trend === 'up' ? (
                <TrendingUp className="w-5 h-5 text-green-500" />
              ) : item.trend === 'down' ? (
                <TrendingDown className="w-5 h-5 text-red-500" />
              ) : (
                <div className="w-5 h-0.5 bg-gray-400 rounded"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}