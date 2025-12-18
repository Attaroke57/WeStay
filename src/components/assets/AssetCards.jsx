import { CheckCircle, AlertTriangle, XCircle, Package, MapPin, Sparkles } from "lucide-react";

export default function AssetCards({ assets }) {
  const getStatusConfig = (status) => {
    switch (status) {
      case "good":
        return {
          label: "Baik",
          containerClass: "border-green-300 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-50",
          badgeClass: "text-green-800 bg-gradient-to-r from-green-200 to-emerald-200 border-green-300 shadow-lg shadow-green-200/50",
          icon: CheckCircle,
          iconClass: "text-green-600",
          dotColor: "bg-green-500",
          headerGradient: "from-green-500 via-emerald-500 to-teal-500",
          glowColor: "shadow-green-500/20"
        };
      case "maintenance":
        return {
          label: "Perlu Perbaikan",
          containerClass: "border-yellow-300 bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-50",
          badgeClass: "text-yellow-800 bg-gradient-to-r from-yellow-200 to-amber-200 border-yellow-300 shadow-lg shadow-yellow-200/50",
          icon: AlertTriangle,
          iconClass: "text-yellow-600",
          dotColor: "bg-yellow-500",
          headerGradient: "from-yellow-500 via-amber-500 to-orange-500",
          glowColor: "shadow-yellow-500/20"
        };
      case "inactive":
        return {
          label: "Tidak Aktif",
          containerClass: "border-red-300 bg-gradient-to-br from-red-100 via-rose-50 to-pink-50",
          badgeClass: "text-red-800 bg-gradient-to-r from-red-200 to-rose-200 border-red-300 shadow-lg shadow-red-200/50",
          icon: XCircle,
          iconClass: "text-red-600",
          dotColor: "bg-red-500",
          headerGradient: "from-red-500 via-rose-500 to-pink-500",
          glowColor: "shadow-red-500/20"
        };
      default:
        return {
          label: status,
          containerClass: "border-gray-300 bg-gradient-to-br from-gray-100 via-slate-50 to-zinc-50",
          badgeClass: "text-gray-800 bg-gradient-to-r from-gray-200 to-slate-200 border-gray-300 shadow-lg shadow-gray-200/50",
          icon: Package,
          iconClass: "text-gray-600",
          dotColor: "bg-gray-500",
          headerGradient: "from-gray-500 via-slate-500 to-zinc-500",
          glowColor: "shadow-gray-500/20"
        };
    }
  };

  return (
    <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
      {assets.map((asset, index) => {
        const statusConfig = getStatusConfig(asset.status);
        const StatusIcon = statusConfig.icon;
        
        return (
          <div
            key={asset.id}
            className={`relative rounded-2xl border-2 p-6 ${statusConfig.containerClass} shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden ${statusConfig.glowColor}`}
            style={{ 
              animationDelay: `${index * 50}ms`,
              transform: 'translateY(0)',
            }}
          >
            {/* Animated Background Decoration */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Sparkle Effect */}
            <Sparkles className="absolute top-4 right-4 w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

            {/* Header with Gradient Avatar and Status */}
            <div className="relative flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${statusConfig.headerGradient} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {asset.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-base group-hover:scale-105 transition-transform duration-300 origin-left">
                    {asset.name}
                  </h4>
                  <p className="text-xs text-gray-600 font-mono mt-1 bg-white/60 px-2 py-0.5 rounded inline-block">
                    {asset.assetCode}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full blur-sm group-hover:blur-md transition-all"></div>
                <StatusIcon className={`relative w-6 h-6 ${statusConfig.iconClass} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
              </div>
            </div>

            {/* Details with Colorful Icons */}
            <div className="relative space-y-3 mb-5">
              <div className="flex items-start gap-3 group/item">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0 bg-white/50 rounded-lg p-2 group-hover/item:bg-white/80 transition-colors">
                  <p className="text-xs text-gray-600 font-semibold mb-0.5">Properti</p>
                  <p className="text-sm font-bold text-gray-900 truncate">{asset.property}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0 bg-white/50 rounded-lg p-2 group-hover/item:bg-white/80 transition-colors">
                  <p className="text-xs text-gray-600 font-semibold mb-0.5">Kategori</p>
                  <p className="text-sm font-bold text-gray-900 truncate">{asset.category}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0 bg-white/50 rounded-lg p-2 group-hover/item:bg-white/80 transition-colors">
                  <p className="text-xs text-gray-600 font-semibold mb-0.5">Lokasi</p>
                  <p className="text-sm font-bold text-gray-900 truncate">{asset.location}</p>
                </div>
              </div>
            </div>

            {/* Status Badge with Glow Effect */}
            <div className="relative pt-4 border-t-2 border-white/60">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border-2 ${statusConfig.badgeClass} group-hover:scale-105 transition-all duration-300`}>
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusConfig.dotColor} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${statusConfig.dotColor}`}></span>
                </span>
                {statusConfig.label}
              </span>
            </div>

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none"></div>
          </div>
        );
      })}
    </div>
  );
}