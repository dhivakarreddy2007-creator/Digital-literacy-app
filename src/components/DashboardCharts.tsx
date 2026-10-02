import React, { useState } from 'react';
import { SurveyResponse, Language } from '../types';

interface DashboardChartsProps {
  surveys: SurveyResponse[];
  currentLanguage: Language;
}

export default function DashboardCharts({ surveys, currentLanguage }: DashboardChartsProps) {
  const [hoveredBar, setHoveredBar] = useState<{ id: string; label: string; value: number } | null>(null);

  // 1. Process Village Participation
  const villageCounts: Record<string, number> = {};
  surveys.forEach(s => {
    const key = s.villageName || "Other";
    villageCounts[key] = (villageCounts[key] || 0) + 1;
  });
  const villageData = Object.entries(villageCounts).map(([name, count]) => ({ name, count }));

  // 2. Process Age Brackets
  let youth = 0; // 18-30
  let mid = 0;   // 31-50
  let senior = 0; // 50+
  surveys.forEach(s => {
    if (s.age <= 30) youth++;
    else if (s.age <= 50) mid++;
    else senior++;
  });
  const ageData = [
    { label: "18-30 Yrs", count: youth, color: "bg-emerald-500", fill: "#10b981" },
    { label: "31-50 Yrs", count: mid, color: "bg-blue-500", fill: "#3b82f6" },
    { label: "51+ Yrs", count: senior, color: "bg-amber-500", fill: "#f59e0b" }
  ];

  // 3. Digital Readiness Indicators
  let smartphoneCount = 0;
  let internetCount = 0;
  let awarenessCount = 0;
  surveys.forEach(s => {
    if (s.isSmartphoneUser) smartphoneCount++;
    if (s.isInternetUser) internetCount++;
    if (s.hasDigitalAwareness) awarenessCount++;
  });

  const total = surveys.length || 1;
  const metrics = [
    { label: currentLanguage === 'te' ? "స్మార్ట్‌ఫోన్ వినియోగదారులు" : currentLanguage === 'ta' ? "ஸ்மார்ட்போன் பயனர்" : currentLanguage === 'hi' ? "स्मार्टफोन धारक" : "Smartphone Ownership", val: smartphoneCount, color: "from-emerald-500 to-emerald-600" },
    { label: currentLanguage === 'te' ? "ఇంటర్నెట్ వినియోగదారులు" : currentLanguage === 'ta' ? "இணையப் பயனர்" : currentLanguage === 'hi' ? "इंटरनेट यूज़र" : "Internet Active Users", val: internetCount, color: "from-blue-500 to-blue-600" },
    { label: currentLanguage === 'te' ? "డిజిటల్ అవగాహన" : currentLanguage === 'ta' ? "பரிவர்த்தனை விழிப்புணர்வு" : currentLanguage === 'hi' ? "डिजिटल जागरूकता" : "Pre-existing Awareness", val: awarenessCount, color: "from-amber-500 to-amber-600" }
  ];

  // Max scale for SVG charts
  const maxVillageCount = Math.max(...villageData.map(v => v.count), 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="dashboard_visualizers">
      {/* 1. Village Wise Participation Bar Chart */}
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-5 rounded-2xl shadow-xs">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-mono tracking-wider uppercase mb-5">
          {currentLanguage === 'te' ? "గ్రామాల వారీగా నమోదులు" : currentLanguage === 'ta' ? "கிராமங்களின் பங்களிப்பு" : currentLanguage === 'hi' ? "गाँवों के अनुसार सर्वे संख्या" : "Village Participant Distribution"}
        </h3>
        
        {villageData.length === 0 ? (
          <div className="h-48 flex items-center justify-center text-xs text-gray-400">No data submitted yet</div>
        ) : (
          <div className="relative pt-2">
            <div className="space-y-4">
              {villageData.map((item, index) => {
                const percent = (item.count / maxVillageCount) * 100;
                return (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-800 dark:text-gray-300 flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        {item.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 font-mono">{item.count} responses</span>
                    </div>
                    <div 
                      className="w-full bg-gray-100 dark:bg-gray-800 h-6 rounded-lg overflow-hidden relative cursor-help"
                      onMouseEnter={() => setHoveredBar({ id: 'v_' + index, label: item.name, value: item.count })}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-lg transition-all duration-1000 ease-out flex items-center pl-3"
                        style={{ width: `${percent}%` }}
                      >
                        {percent > 15 && (
                          <span className="text-[10px] text-white font-bold font-mono">
                            {Math.round((item.count / total) * 100)}%
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Tooltip */}
            {hoveredBar && hoveredBar.id.startsWith('v_') && (
              <div className="absolute top-0 right-0 bg-slate-900 text-white text-[11px] px-2.5 py-1.5 rounded-lg shadow-md font-mono" id="village_tooltip">
                <strong>{hoveredBar.label}</strong>: {hoveredBar.value} ({Math.round((hoveredBar.value / total) * 100)}%)
              </div>
            )}
          </div>
        )}
      </div>

      {/* 2. Age Grid Distribution */}
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-5 rounded-2xl shadow-xs">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-mono tracking-wider uppercase mb-5">
          {currentLanguage === 'te' ? "వయస్సు వారీగా విభజన" : currentLanguage === 'ta' ? "வயது வாரியான விவரங்கள்" : currentLanguage === 'hi' ? "उम्र के अनुसार विभाजन" : "Age Demographics analysis"}
        </h3>

        {total === 0 ? (
          <div className="h-48 flex items-center justify-center text-xs text-gray-400">No data</div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 h-full min-h-[180px]">
            {/* Native SVG Circular Donut Chart */}
            <div className="relative w-36 h-36">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {/* Gray empty circle fallback */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                
                {(() => {
                  let cumPercent = 0;
                  return ageData.map((d, i) => {
                    if (d.count === 0) return null;
                    const pct = d.count / total;
                    const strokeDash = pct * 251.2; // 2 * pi * r (r=40)
                    const strokeOffset = 251.2 - strokeDash;
                    const dashArray = `${strokeDash} ${251.2 - strokeDash}`;
                    const rot = cumPercent * 360;
                    cumPercent += pct;
                    return (
                      <circle
                        key={d.label}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke={d.fill}
                        strokeWidth="12"
                        strokeDasharray={dashArray}
                        transform={`rotate(${rot} 50 50)`}
                        className="transition-all duration-1000 ease-in-out cursor-pointer hover:stroke-[14px]"
                      />
                    );
                  });
                })()}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-extrabold text-gray-800 dark:text-gray-100 font-mono">{surveys.length}</span>
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Total</span>
              </div>
            </div>

            {/* Labels and values side */}
            <div className="space-y-3 w-full sm:w-auto flex-1">
              {ageData.map((item) => {
                const percent = Math.round((item.count / total) * 100);
                return (
                  <div key={item.label} className="flex items-center justify-between text-xs border-b border-gray-50 dark:border-gray-800/50 pb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{item.label}</span>
                    </div>
                    <span className="font-mono font-bold text-gray-800 dark:text-gray-200">{item.count} ({percent}%)</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 3. Horizontal Digital indicators (full width below) */}
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-5 rounded-2xl shadow-xs md:col-span-2">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-mono tracking-wider uppercase mb-5">
          {currentLanguage === 'te' ? "అక్షరాస్యత మరియు ఇంటర్నెట్ పోలిక" : currentLanguage === 'ta' ? "டிஜிட்டல் அடைவு குறியீடுகள்" : currentLanguage === 'hi' ? "डिजिटल साक्षरता और तत्परता स्थिति" : "Core Digital Preparedness KPIs"}
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {metrics.map((m, index) => {
            const ratio = m.val / total;
            const percent = Math.round(ratio * 100);
            return (
              <div key={index} className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-gray-100/50 dark:border-gray-800/80 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 dark:text-gray-400 font-medium truncate max-w-[150px]">{m.label}</span>
                  <span className="font-mono font-bold text-gray-800 dark:text-gray-200">{percent}%</span>
                </div>
                
                {/* Visual Cylinder Gauge */}
                <div className="w-full bg-gray-200 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${m.color} h-full rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className="flex justify-between items-end">
                  <span className="text-[10px] text-gray-400 font-mono">Count: {m.val} </span>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    {m.val} / {surveys.length}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
