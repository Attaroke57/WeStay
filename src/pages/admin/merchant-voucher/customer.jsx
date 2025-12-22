import React, { useState } from "react";
import { Download, Filter, User, Mail, Phone, MapPin, Calendar, Star, Ticket, Eye, Edit, Ban } from "lucide-react";

export default function CustomerPage() {
  const [customerType, setCustomerType] = useState("all");
  
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  const customerData = [
    {
      id: 1,
      name: "Ahmad Rizki",
      email: "ahmad.rizki@email.com",
      phone: "+62 812-3456-7890",
      location: "Jakarta Selatan",
      joinDate: "2024-01-15",
      totalBookings: 8,
      totalSpent: 18500000,
      vouchersClaimed: 3,
      vouchersUsed: 2,
      rating: 4.8,
      status: "active",
      type: "premium",
      lastBooking: "2024-12-15"
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      email: "siti.nur@email.com",
      phone: "+62 813-9876-5432",
      location: "Bandung",
      joinDate: "2024-03-20",
      totalBookings: 5,
      totalSpent: 9800000,
      vouchersClaimed: 2,
      vouchersUsed: 2,
      rating: 4.6,
      status: "active",
      type: "regular",
      lastBooking: "2024-12-10"
    },
    {
      id: 3,
      name: "Budi Santoso",
      email: "budi.santoso@email.com",
      phone: "+62 815-1111-2222",
      location: "Yogyakarta",
      joinDate: "2024-02-10",
      totalBookings: 12,
      totalSpent: 24500000,
      vouchersClaimed: 5,
      vouchersUsed: 4,
      rating: 4.9,
      status: "active",
      type: "vip",
      lastBooking: "2024-12-20"
    },
    {
      id: 4,
      name: "Dewi Lestari",
      email: "dewi.lestari@email.com",
      phone: "+62 816-3333-4444",
      location: "Surabaya",
      joinDate: "2024-06-05",
      totalBookings: 2,
      totalSpent: 3200000,
      vouchersClaimed: 1,
      vouchersUsed: 0,
      rating: 4.3,
      status: "inactive",
      type: "regular",
      lastBooking: "2024-08-15"
    },
    {
      id: 5,
      name: "Eko Prasetyo",
      email: "eko.prasetyo@email.com",
      phone: "+62 817-5555-6666",
      location: "Jakarta Pusat",
      joinDate: "2023-11-10",
      totalBookings: 15,
      totalSpent: 32000000,
      vouchersClaimed: 7,
      vouchersUsed: 6,
      rating: 5.0,
      status: "active",
      type: "vip",
      lastBooking: "2024-12-22"
    },
    {
      id: 6,
      name: "Rina Amelia",
      email: "rina.amelia@email.com",
      phone: "+62 818-7777-8888",
      location: "Bandung",
      joinDate: "2024-05-12",
      totalBookings: 6,
      totalSpent: 12500000,
      vouchersClaimed: 2,
      vouchersUsed: 1,
      rating: 4.7,
      status: "active",
      type: "premium",
      lastBooking: "2024-12-18"
    },
  ];

  const filteredData = customerType === "all" 
    ? customerData 
    : customerData.filter(item => item.type === customerType);

  const totalCustomers = customerData.length;
  const activeCustomers = customerData.filter(item => item.status === "active").length;
  const vipCustomers = customerData.filter(item => item.type === "vip").length;
  const totalRevenue = customerData.reduce((sum, item) => sum + item.totalSpent, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Customer Management</h1>
          <p className="text-sm text-gray-600">Kelola data customer dan analisis behavior</p>
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
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Total Customers</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">{totalCustomers}</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Active</p>
          <p className="text-2xl md:text-3xl font-bold text-green-600">{activeCustomers}</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">VIP Customers</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">{vipCustomers}</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Ticket className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Total Revenue</p>
          <p className="text-base md:text-xl font-bold text-purple-600">{formatRupiah(totalRevenue)}</p>
        </div>
      </div>

      {/* Customer Type Filter Pills */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {["all", "vip", "premium", "regular"].map((type) => (
          <button
            key={type}
            onClick={() => setCustomerType(type)}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              customerType === type
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
            <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
              {type === "all" ? customerData.length : customerData.filter(item => item.type === type).length}
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Bookings</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Vouchers</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
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
                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{item.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{item.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold ${
                      item.type === 'vip' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                      item.type === 'premium' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                      'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-900">{item.totalBookings}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-green-600">{formatRupiah(item.totalSpent)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="text-gray-600">{item.vouchersUsed}/{item.vouchersClaimed} used</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-gray-900">{item.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      item.status === 'active' 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        item.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                      }`}></span>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Ban">
                        <Ban className="w-4 h-4" />
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
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            {/* Customer Info */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <User className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                      item.type === 'vip' ? 'bg-yellow-100 text-yellow-700' :
                      item.type === 'premium' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                      item.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{item.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{item.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{item.location}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 text-center">
                <p className="text-xs text-blue-600 font-medium mb-1">Bookings</p>
                <p className="text-lg font-bold text-blue-700">{item.totalBookings}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-100 text-center">
                <p className="text-xs text-green-600 font-medium mb-1">Spent</p>
                <p className="text-xs font-bold text-green-700">{formatRupiah(item.totalSpent)}</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-100 text-center">
                <p className="text-xs text-yellow-600 font-medium mb-1">Rating</p>
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <p className="text-lg font-bold text-yellow-700">{item.rating}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-3 border-t border-gray-100">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all">
                <Eye className="w-4 h-4" />
                View
              </button>
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-all">
                <Edit className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-all">
                <Ban className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}