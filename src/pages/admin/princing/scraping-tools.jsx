import React, { useState } from "react";
import { Plus, Play, Pause, Edit, Trash2, ExternalLink, Activity } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Scraping Tools</h1>
          <p className="text-sm text-gray-600">Kelola proses scraping data kompetitor secara real-time</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95 font-medium">
          <Plus className="w-4 h-4" />
          New Scraping Job
        </button>
      </div>

      {/* Quick Start Form */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Quick Start Scraping</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Job Name (e.g., Jakarta - Mamikos)"
            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
          />
          <input
            type="url"
            placeholder="Target URL"
            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
          />
          <button className="px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 font-medium">
            <Play className="w-4 h-4" />
            Start Scraping
          </button>
        </div>
      </div>

      {/* Active Jobs List */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-900">Active Jobs</h3>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
            {scrapingJobs.length}
          </span>
        </div>

        {scrapingJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
            <div className="p-5 md:p-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{job.name}</h4>
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 w-fit">
                    {job.url}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {job.status === 'running' && (
                    <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors" title="Pause">
                      <Pause className="w-5 h-5" />
                    </button>
                  )}
                  {job.status === 'idle' && (
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Start">
                      <Play className="w-5 h-5" />
                    </button>
                  )}
                  {job.status === 'completed' && (
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Restart">
                      <Play className="w-5 h-5" />
                    </button>
                  )}
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Progress Section */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-sm text-gray-600 font-medium">Progress</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-sm font-semibold text-gray-900">
                      {job.found} properties found
                    </span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      job.status === 'running' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                      job.status === 'completed' ? 'bg-green-100 text-green-700 border border-green-200' :
                      'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        job.status === 'running' ? 'bg-blue-500 animate-pulse' :
                        job.status === 'completed' ? 'bg-green-500' :
                        'bg-gray-500'
                      }`}></span>
                      {job.status === 'running' ? 'Running' :
                       job.status === 'completed' ? 'Completed' :
                       'Idle'}
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        job.status === 'running' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        job.status === 'completed' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                        'bg-gray-400'
                      }`}
                      style={{ width: `${job.progress}%` }}
                    >
                      {job.status === 'running' && (
                        <div className="w-full h-full bg-white opacity-20 animate-pulse"></div>
                      )}
                    </div>
                  </div>
                  <span className="absolute right-2 -top-5 text-xs font-semibold text-gray-600">
                    {job.progress}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (jika tidak ada jobs) */}
      {scrapingJobs.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Active Jobs</h3>
          <p className="text-sm text-gray-500 mb-6">Start your first scraping job to begin collecting data</p>
          <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all inline-flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create New Job
          </button>
        </div>
      )}
    </div>
  );
}