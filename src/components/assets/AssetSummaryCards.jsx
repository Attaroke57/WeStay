import { Package, CheckCircle, AlertTriangle, XCircle, TrendingUp, Sparkles } from "lucide-react";

export default function AssetSummaryCards({ stats }) {
  const cards = [
    {
      label: "Total Aset",
      value: stats.total || 0,
      icon: Package,
      color: "blue",
      bgGradient: "from-blue-500 via-indigo-500 to-purple-500",
      iconBg: "bg-gradient-to-br from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
      cardGradient: "from-blue-50 via-indigo-50 to-purple-50",
      borderColor: "border-blue-200",
      glowColor: "shadow-blue-500/30",
      accentColor: "bg-blue-500"
    },
    {
      label: "Kondisi Baik",
      value: stats.good || 0,
      icon: CheckCircle,
      color: "green",
      bgGradient: "from-green-500 via-emerald-500 to-teal-500",
      iconBg: "bg-gradient-to-br from-green-100 to-emerald-100",
      iconColor: "text-green-600",
      cardGradient: "from-green-50 via-emerald-50 to-teal-50",
      borderColor: "border-green-200",
      glowColor: "shadow-green-500/30",
      accentColor: "bg-green-500"
    },
    {
      label: "Perlu Perbaikan",
      value: stats.maintenance || 0,
      icon: AlertTriangle,
      color: "yellow",
      bgGradient: "from-yellow-500 via-amber-500 to-orange-500",
      iconBg: "bg-gradient-to-br from-yellow-100 to-amber-100",
      iconColor: "text-yellow-600",
      cardGradient: "from-yellow-50 via-amber-50 to-orange-50",
      borderColor: "border-yellow-200",
      glowColor: "shadow-yellow-500/30",
      accentColor: "bg-yellow-500"
    },
    {
      label: "Tidak Aktif",
      value: stats.inactive || 0,
      icon: XCircle,
      color: "red",
      bgGradient: "from-red-500 via-rose-500 to-pink-500",
      iconBg: "bg-gradient-to-br from-red-100 to-rose-100",
      iconColor: "text-red-600",
      cardGradient: "from-red-50 via-rose-50 to-pink-50",
      borderColor: "border-red-200",
      glowColor: "shadow-red-500/30",
      accentColor: "bg-red-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const percentage = stats.total > 0 ? Math.round((card.value / stats.total) * 100) : 0;
        
        return (
          <div
            key={index}
            className={`relative bg-gradient-to-br ${card.cardGradient} rounded-2xl border-2 ${card.borderColor} p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group ${card.glowColor}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Animated Background Decoration */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Top Accent Line */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.bgGradient} rounded-t-2xl`}></div>

            {/* Sparkle Effect */}
            <Sparkles className="absolute top-5 right-5 w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            
            <div className="relative flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide">{card.label}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-black text-gray-900 group-hover:scale-110 transition-transform duration-300 origin-left">{card.value}</p>
                  <TrendingUp className={`w-5 h-5 ${card.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>
              
              <div className="relative">
                <div className={`absolute inset-0 ${card.iconBg} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`relative ${card.iconBg} p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <Icon className={`w-7 h-7 ${card.iconColor}`} />
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="relative mt-5 pt-5 border-t-2 border-white/60">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-gray-600 font-semibold">Persentase</span>
                <span className={`font-black text-base ${card.iconColor} group-hover:scale-125 transition-transform duration-300`}>
                  {percentage}%
                </span>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="relative h-3 bg-white/80 rounded-full overflow-hidden shadow-inner">
                <div 
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${card.bgGradient} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                  style={{ 
                    width: `${percentage}%`,
                    animation: 'slideIn 1s ease-out'
                  }}
                >
                  {/* Shine effect on progress bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
              
              {/* Percentage Badge */}
              <div className="absolute -top-3 right-0">
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${card.bgGradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {percentage}%
                </div>
              </div>
            </div>

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none"></div>

            {/* Floating Particles Effect */}
            <div className={`absolute bottom-5 left-5 w-2 h-2 ${card.accentColor} rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all duration-700`}></div>
            <div className={`absolute bottom-8 left-10 w-1.5 h-1.5 ${card.accentColor} rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 transition-all duration-1000 delay-100`}></div>
            <div className={`absolute bottom-6 left-16 w-1 h-1 ${card.accentColor} rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all duration-900 delay-200`}></div>
          </div>
        );
      })}
    </div>
  );
}