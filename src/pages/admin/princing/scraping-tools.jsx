import React, { useState } from "react";
import { Plus, Play, Pause, Edit, Trash2 } from "lucide-react";


export default function ScrapingToolsPage() {
  const [scrapingJobs, setScrapingJobs] = useState([
    {
      id: 1,
      name: "Jakarta Selatan - Mamikos",
      url: "https://mamikos.com/jakarta-selatan",
      status: "running",
      progress: 65,
      found: 45,
    },
    {
      id: 2,
      name: "Bandung - Infokost",
      url: "https://infokost.id/bandung",
      status: "completed",
      progress: 100,
      found: 38,
    },
    {
      id: 3,
      name: "Yogyakarta - Rukita",
      url: "https://rukita.co/yogyakarta",
      status: "idle",
      progress: 0,
      found: 0,
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Scraping Tools</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola proses scraping data kompetitor</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          New Scraping Job
        </button>
      </div>

      {/* Add New Job Form */}
      <div className="bg-white rounded-lg border p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Quick Start Scraping</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Job Name"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="Target URL"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
            <Play className="w-4 h-4" />
            Start Scraping
          </button>
        </div>
      </div>

      {/* Active Jobs */}
      <div className="space-y-4">
        {scrapingJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900">{job.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{job.url}</p>
              </div>
              <div className="flex items-center gap-2">
                {job.status === 'running' && (
                  <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                    <Pause className="w-5 h-5" />
                  </button>
                )}
                {job.status === 'idle' && (
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                    <Play className="w-5 h-5" />
                  </button>
                )}
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 font-medium">{job.found} properties found</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    job.status === 'running' ? 'bg-blue-100 text-blue-700' :
                    job.status === 'completed' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {job.status}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    job.status === 'running' ? 'bg-blue-600' :
                    job.status === 'completed' ? 'bg-green-600' :
                    'bg-gray-400'
                  }`}
                  style={{ width: `${job.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
