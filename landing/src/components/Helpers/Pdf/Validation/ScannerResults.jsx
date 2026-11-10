import React from "react";
import { AlertTriangle, CheckCircle, Shield, Command, FileText, Link2, Lock, Zap } from 'lucide-react';

function ScannerResults({ results }) {
  if (!results) {
    return null;
  }

  const getRiskLevel = (score) => {
    if (score === 0) return { level: 'Secure', color: 'from-green-600 to-emerald-600', textColor: 'text-white', badge: 'bg-green-100 text-green-800' };
    if (score <= 2) return { level: 'Low Risk', color: 'from-yellow-500 to-yellow-600', textColor: 'text-white', badge: 'bg-yellow-100 text-yellow-800' };
    if (score <= 4) return { level: 'Medium Risk', color: 'from-orange-500 to-orange-600', textColor: 'text-white', badge: 'bg-orange-100 text-orange-800' };
    return { level: 'High Risk', color: 'from-red-600 to-red-700', textColor: 'text-white', badge: 'bg-red-100 text-red-800' };
  };

  const riskLevel = getRiskLevel(results.riskScore);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6">
          {/* Main Risk Score Card */}
          <div
            className={`bg-gradient-to-br ${riskLevel.color} rounded-3xl p-8 shadow-2xl relative overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                }}
              ></div>
            </div>
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-white/80 text-sm font-semibold mb-2 uppercase tracking-wider">
                    Security Status
                  </p>
                  <h1 className="text-5xl font-bold text-white mb-4">
                    {riskLevel.level}
                  </h1>
                  <div className="flex items-center gap-3">
                    <div
                      className={`px-4 py-2 rounded-full ${riskLevel.badge} font-semibold text-sm`}
                    >
                      Risk Score: {results.riskScore}
                    </div>
                  </div>
                </div>
                <Shield className="w-32 h-32 text-white/10" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm mb-1">
                    Commands Found
                  </p>
                  <p className="text-3xl font-bold text-white">
                    {results.suspiciousCommands.length}
                  </p>
                </div>
                <Zap className="w-10 h-10 text-yellow-400 opacity-20" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm mb-1">
                    Suspicious URLs
                  </p>
                  <p className="text-3xl font-bold text-white">
                    {results.suspiciousUrls.length}
                  </p>
                </div>
                <Link2 className="w-10 h-10 text-red-400 opacity-20" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm mb-1">PDF Issues</p>
                  <p className="text-3xl font-bold text-white">
                    {results.pdfSecurityIssues.length}
                  </p>
                </div>
                <Lock className="w-10 h-10 text-orange-400 opacity-20" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm mb-1">Total URLs</p>
                  <p className="text-3xl font-bold text-white">
                    {results.urls.length}
                  </p>
                </div>
                <FileText className="w-10 h-10 text-blue-400 opacity-20" />
              </div>
            </div>
          </div>

          {/* Certificate Detection */}
          {results.isCertificate && (
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8 backdrop-blur">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Certificate Detected
                  </h3>
                  <p className="text-green-300/80 text-sm">
                    Document contains valid certificate indicators
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {results.certificateKeywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-green-500/20 border border-green-500/40 text-green-300 text-xs rounded-full font-semibold backdrop-blur"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Suspicious Commands */}
          {results.suspiciousCommands.length > 0 && (
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 rounded-2xl p-8 backdrop-blur">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Suspicious Commands Detected
                  </h3>
                  <p className="text-red-300/80 text-sm">
                    The following commands may pose a security risk
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {results.suspiciousCommands.map((cmd, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-all"
                  >
                    <Command className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <code className="text-sm text-red-300 font-mono font-semibold">
                      {cmd}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Suspicious URLs */}
          {results.suspiciousUrls.length > 0 && (
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-2xl p-8 backdrop-blur">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Suspicious URLs Found
                  </h3>
                  <p className="text-orange-300/80 text-sm">
                    Be cautious with these shortened or suspicious URLs
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {results.suspiciousUrls.map((url, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all"
                  >
                    <Link2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-sm text-orange-300 font-mono break-all">
                      {url}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PDF Security Issues */}
          {results.pdfSecurityIssues.length > 0 && (
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-8 backdrop-blur">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-yellow-500/20 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    PDF Security Issues
                  </h3>
                  <p className="text-yellow-300/80 text-sm">
                    Potentially risky security tokens detected in PDF
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {results.pdfSecurityIssues.map((issue, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-xs rounded-full font-mono font-semibold backdrop-blur"
                  >
                    {issue}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* All URLs Found */}
          {results.urls.length > 0 && (
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-2xl p-8 backdrop-blur">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Link2 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    All URLs Found
                  </h3>
                  <p className="text-blue-300/80 text-sm">
                    {results.urls.length} URLs extracted from document
                  </p>
                </div>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                {results.urls.map((url, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 hover:bg-blue-500/10 rounded-lg transition-all"
                  >
                    <span className="text-blue-400 font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span className="text-sm text-blue-300 break-all font-mono">
                      {url}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScannerResults;