import React from "react";
import { Download, RefreshCw, Home, DollarSign, MapPin, Clock } from "lucide-react";

 export default function ScrapingSummaryPage() {
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
    
  const summaryData = [
    { region: 'Jakarta Selatan', properties: 145, avgPrice: 2500000, minPrice: 1200000, maxPrice: 5000000, lastUpdate: '2 jam lalu', status: 'success' },
    { region: 'Bandung', properties: 98, avgPrice: 1800000, minPrice: 900000, maxPrice: 3500000, lastUpdate: '3 jam lalu', status: 'success' },
    { region: 'Yogyakarta', properties: 76, avgPrice: 1500000, minPrice: 800000, maxPrice: 2800000, lastUpdate: '1 jam lalu', status: 'success' },
    { region: 'Surabaya', properties: 112, avgPrice: 2000000, minPrice: 1000000, maxPrice: 4000000, lastUpdate: '5 jam lalu', status: 'warning' },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Scraping Summary</h1>
          <p className="text-sm text-gray-500 mt-1">Ringkasan data scraping kompetitor</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <RefreshCw className="w-4 h-4" />
            Refresh Data
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Properties</p>
              <p className="text-2xl font-bold">431</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg Price</p>
              <p className="text-2xl font-bold">{formatRupiah(1950000)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Regions</p>
              <p className="text-2xl font-bold">4</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Update</p>
              <p className="text-lg font-bold">1 jam lalu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Region</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Properties</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Min Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Max Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Update</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {summaryData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.region}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.properties}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{formatRupiah(row.avgPrice)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{formatRupiah(row.minPrice)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{formatRupiah(row.maxPrice)}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{row.lastUpdate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      row.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {row.status === 'success' ? 'Updated' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}