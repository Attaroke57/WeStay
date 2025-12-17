import { useState } from "react";
import { Plus, Search, Mail, Phone, MapPin, Edit, Trash2, UserCheck, UserX, Filter, Calendar, DollarSign, Home as HomeIcon } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Ahmad Saputra",
    email: "ahmad.saputra@email.com",
    phone: "081234567890",
    avatar: "https://i.pravatar.cc/150?img=12",
    status: "Active",
    property: "Kos Mawar",
    room: "A-12",
    joinDate: "2024-01-15",
    rentDue: "2024-12-18",
    monthlyRent: 1200000,
    totalPaid: 12000000,
    daysLeft: 3,
    paymentStatus: "Pending"
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    email: "siti.nur@email.com",
    phone: "081234567891",
    avatar: "https://i.pravatar.cc/150?img=5",
    status: "Active",
    property: "Kos Melati",
    room: "B-08",
    joinDate: "2024-03-20",
    rentDue: "2024-12-19",
    monthlyRent: 900000,
    totalPaid: 8100000,
    daysLeft: 4,
    paymentStatus: "Pending"
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    phone: "081234567892",
    avatar: "https://i.pravatar.cc/150?img=33",
    status: "Active",
    property: "Kos Anggrek",
    room: "C-05",
    joinDate: "2024-02-10",
    rentDue: "2024-12-20",
    monthlyRent: 1100000,
    totalPaid: 11000000,
    daysLeft: 5,
    paymentStatus: "Paid"
  },
  {
    id: 4,
    name: "Dewi Lestari",
    email: "dewi.lestari@email.com",
    phone: "081234567893",
    avatar: "https://i.pravatar.cc/150?img=45",
    status: "Active",
    property: "Kos Dahlia",
    room: "D-03",
    joinDate: "2023-11-05",
    rentDue: "2024-12-05",
    monthlyRent: 750000,
    totalPaid: 9750000,
    daysLeft: -10,
    paymentStatus: "Overdue"
  },
  {
    id: 5,
    name: "Rudi Hartono",
    email: "rudi.hart@email.com",
    phone: "081234567894",
    avatar: "https://i.pravatar.cc/150?img=68",
    status: "Inactive",
    property: "Kos Kenanga",
    room: "E-01",
    joinDate: "2023-08-15",
    rentDue: "2024-11-15",
    monthlyRent: 850000,
    totalPaid: 13600000,
    daysLeft: -30,
    paymentStatus: "Ended"
  },
  {
    id: 6,
    name: "Rina Wulandari",
    email: "rina.wulan@email.com",
    phone: "081234567895",
    avatar: "https://i.pravatar.cc/150?img=20",
    status: "Active",
    property: "Kos Mawar",
    room: "A-05",
    joinDate: "2024-05-12",
    rentDue: "2024-12-12",
    monthlyRent: 1200000,
    totalPaid: 8400000,
    daysLeft: -3,
    paymentStatus: "Overdue"
  }
];

export default function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPayment, setFilterPayment] = useState("all");

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const filteredUsers = users.filter(user => {
    const matchSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.property.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchStatus = filterStatus === "all" || 
      (filterStatus === "active" && user.status === "Active") ||
      (filterStatus === "inactive" && user.status === "Inactive");
    
    const matchPayment = filterPayment === "all" ||
      (filterPayment === "paid" && user.paymentStatus === "Paid") ||
      (filterPayment === "pending" && user.paymentStatus === "Pending") ||
      (filterPayment === "overdue" && user.paymentStatus === "Overdue");

    return matchSearch && matchStatus && matchPayment;
  });

  const stats = {
    total: users.length,
    active: users.filter(u => u.status === "Active").length,
    inactive: users.filter(u => u.status === "Inactive").length,
    overdue: users.filter(u => u.paymentStatus === "Overdue").length,
    totalRevenue: users.reduce((sum, u) => sum + u.totalPaid, 0)
  };

  const getPaymentBadge = (status, daysLeft) => {
    if (status === "Paid") {
      return "bg-green-100 text-green-700";
    } else if (status === "Pending" && daysLeft <= 3) {
      return "bg-red-100 text-red-700";
    } else if (status === "Pending") {
      return "bg-yellow-100 text-yellow-700";
    } else if (status === "Overdue") {
      return "bg-red-100 text-red-700";
    } else {
      return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manajemen Penyewa</h1>
            <p className="text-sm text-gray-500 mt-1">Kelola data semua penyewa kos</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
            <Plus className="w-5 h-5" />
            <span>Tambah Penyewa</span>
          </button>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Penyewa</p>
                <p className="text-xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Aktif</p>
                <p className="text-xl font-bold text-gray-900">{stats.active}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <UserX className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Tidak Aktif</p>
                <p className="text-xl font-bold text-gray-900">{stats.inactive}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Terlambat</p>
                <p className="text-xl font-bold text-gray-900">{stats.overdue}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Pendapatan</p>
                <p className="text-sm font-bold text-gray-900">{formatRupiah(stats.totalRevenue)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* FILTERS & SEARCH */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama, email, atau properti..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Status */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Semua Status</option>
                <option value="active">Aktif</option>
                <option value="inactive">Tidak Aktif</option>
              </select>
            </div>

            {/* Filter Payment */}
            <select
              value={filterPayment}
              onChange={(e) => setFilterPayment(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Semua Pembayaran</option>
              <option value="paid">Lunas</option>
              <option value="pending">Pending</option>
              <option value="overdue">Terlambat</option>
            </select>
          </div>
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penyewa</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kontak</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properti</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sewa Bulanan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jatuh Tempo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">Bergabung {formatDate(user.joinDate)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <Mail className="w-3 h-3" />
                          <span className="text-xs">{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-3 h-3" />
                          <span className="text-xs">{user.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{user.property}</p>
                        <p className="text-xs text-gray-500">Kamar {user.room}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm font-semibold text-gray-900">{formatRupiah(user.monthlyRent)}</p>
                      <p className="text-xs text-gray-500">Total: {formatRupiah(user.totalPaid)}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm text-gray-900">{formatDate(user.rentDue)}</p>
                      <p className={`text-xs font-medium ${
                        user.daysLeft < 0 ? 'text-red-600' : 
                        user.daysLeft <= 3 ? 'text-yellow-600' : 
                        'text-green-600'
                      }`}>
                        {user.daysLeft < 0 ? `${Math.abs(user.daysLeft)} hari terlambat` : 
                         user.daysLeft === 0 ? 'Jatuh tempo hari ini' :
                         `${user.daysLeft} hari lagi`}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                          user.status === "Active" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-gray-100 text-gray-700"
                        }`}>
                          {user.status === "Active" ? "Aktif" : "Tidak Aktif"}
                        </span>
                        <span className={`block px-2 py-1 rounded-full text-xs font-semibold text-center ${getPaymentBadge(user.paymentStatus, user.daysLeft)}`}>
                          {user.paymentStatus === "Paid" ? "Lunas" :
                           user.paymentStatus === "Pending" ? "Pending" :
                           user.paymentStatus === "Overdue" ? "Terlambat" :
                           "Berakhir"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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

        {/* MOBILE CARDS */}
        <div className="lg:hidden space-y-4">
          {filteredUsers.map((user) => (
            <div key={user.id} className="bg-white rounded-lg border border-gray-200 p-4">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 truncate">{user.name}</h3>
                  <p className="text-xs text-gray-500">Bergabung {formatDate(user.joinDate)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === "Active" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {user.status === "Active" ? "Aktif" : "Tidak Aktif"}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPaymentBadge(user.paymentStatus, user.daysLeft)}`}>
                      {user.paymentStatus === "Paid" ? "Lunas" :
                       user.paymentStatus === "Pending" ? "Pending" :
                       user.paymentStatus === "Overdue" ? "Terlambat" :
                       "Berakhir"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 break-all">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">{user.phone}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <HomeIcon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{user.property}</p>
                    <p className="text-xs text-gray-500">Kamar {user.room}</p>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Sewa Bulanan</p>
                    <p className="font-semibold text-gray-900">{formatRupiah(user.monthlyRent)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Total Dibayar</p>
                    <p className="font-semibold text-gray-900">{formatRupiah(user.totalPaid)}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500 mb-1">Jatuh Tempo</p>
                    <p className="font-medium text-gray-900">{formatDate(user.rentDue)}</p>
                    <p className={`text-xs font-medium mt-1 ${
                      user.daysLeft < 0 ? 'text-red-600' : 
                      user.daysLeft <= 3 ? 'text-yellow-600' : 
                      'text-green-600'
                    }`}>
                      {user.daysLeft < 0 ? `${Math.abs(user.daysLeft)} hari terlambat` : 
                       user.daysLeft === 0 ? 'Jatuh tempo hari ini' :
                       `${user.daysLeft} hari lagi`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium">
                  <Trash2 className="w-4 h-4" />
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <UserCheck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada penyewa ditemukan</h3>
            <p className="text-gray-500 mb-4">Coba ubah filter atau kata kunci pencarian Anda</p>
            <button 
              onClick={() => { 
                setSearchQuery(""); 
                setFilterStatus("all"); 
                setFilterPayment("all");
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}