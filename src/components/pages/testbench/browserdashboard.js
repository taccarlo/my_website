import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import './browserdashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

const MAX_HISTORY = 30;

// ── Helpers ──────────────────────────────────────────────────────────────────

export function formatDuration(ms) {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}h ${String(m).padStart(2, '0')}m ${String(sec).padStart(2, '0')}s`;
  if (m > 0) return `${m}m ${String(sec).padStart(2, '0')}s`;
  return `${sec}s`;
}

function formatTime(date) {
  return date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function formatDate(date) {
  return date.toLocaleDateString('it-IT', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
  });
}

export function formatMB(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getConnectionInfo() {
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!conn) return null;
  return conn.effectiveType || conn.type || null;
}

export function parseUserAgent(ua) {
  const browser = (() => {
    if (/OPR\/(\d+)/.test(ua)) return `Opera ${ua.match(/OPR\/(\d+)/)[1]}`;
    if (/Edg\/(\d+)/.test(ua)) return `Edge ${ua.match(/Edg\/(\d+)/)[1]}`;
    if (/SMART-TV|Tizen/.test(ua)) return 'Samsung Tizen TV';
    if (/Chrome\/(\d+)/.test(ua)) return `Chrome ${ua.match(/Chrome\/(\d+)/)[1]}`;
    if (/Firefox\/(\d+)/.test(ua)) return `Firefox ${ua.match(/Firefox\/(\d+)/)[1]}`;
    if (/Safari\/(\d+)/.test(ua)) return 'Safari';
    return 'Unknown';
  })();
  const os = (() => {
    if (/Windows NT 10|Windows NT 11/.test(ua)) return 'Windows 10 / 11';
    if (/Windows NT 6.1/.test(ua)) return 'Windows 7';
    if (/Windows/.test(ua)) return 'Windows';
    if (/Android ([\d.]+)/.test(ua)) return `Android ${ua.match(/Android ([\d.]+)/)[1]}`;
    if (/iPhone|iPad/.test(ua)) return 'iOS';
    if (/Mac OS X/.test(ua)) return 'macOS';
    if (/Tizen ([\d.]+)/.test(ua)) return `Tizen ${ua.match(/Tizen ([\d.]+)/)[1]}`;
    if (/Linux/.test(ua)) return 'Linux';
    return 'Unknown OS';
  })();
  return { browser, os };
}

// ── Shared chart options factory ──────────────────────────────────────────────

function baseChartOptions(yCallbackFn) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 400 },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#161b22',
        titleColor: '#e6edf3',
        bodyColor: '#8b949e',
        borderColor: '#21262d',
        borderWidth: 1,
        ...(yCallbackFn ? { callbacks: { label: yCallbackFn } } : {}),
      },
    },
    scales: {
      x: {
        ticks: { color: '#7d8590', maxTicksLimit: 6, font: { size: 10 } },
        grid: { color: 'rgba(255,255,255,0.04)' },
      },
      y: {
        ticks: { color: '#7d8590', font: { size: 10 } },
        grid: { color: 'rgba(255,255,255,0.04)' },
      },
    },
  };
}

// ── Component ─────────────────────────────────────────────────────────────────

function BrowserDashboard() {
  const startTime = useRef(Date.now());

  const [now, setNow] = useState(() => new Date());
  const [uptime, setUptime] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connType, setConnType] = useState(getConnectionInfo);
  const [memory, setMemory] = useState(null);
  const [clientInfo, setClientInfo] = useState({ ip: null, countryCode: null, country: null, loading: true, error: false });

  // History arrays (parallel — same length)
  const [labels, setLabels] = useState([]);
  const [memoryHistory, setMemoryHistory] = useState([]);
  const [connHistory, setConnHistory] = useState([]);

  // ── Read memory ────────────────────────────────────────────────────────────
  const readMemory = useCallback(() => {
    if (performance && performance.memory) {
      return {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
      };
    }
    return null;
  }, []);

  // ── Main 2-second tick ─────────────────────────────────────────────────────
  useEffect(() => {
    function tick() {
      const n = new Date();
      setNow(n);
      setUptime(Date.now() - startTime.current);

      const mem = readMemory();
      setMemory(mem);

      const label = n.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const onlineNow = navigator.onLine ? 1 : 0;
      const memMB = mem ? parseFloat((mem.used / (1024 * 1024)).toFixed(1)) : null;

      setLabels(prev => [...prev.slice(-(MAX_HISTORY - 1)), label]);
      setMemoryHistory(prev => [...prev.slice(-(MAX_HISTORY - 1)), memMB]);
      setConnHistory(prev => [...prev.slice(-(MAX_HISTORY - 1)), onlineNow]);
    }

    tick();
    const id = setInterval(tick, 2000);
    return () => clearInterval(id);
  }, [readMemory]);

  // ── Online / Offline ───────────────────────────────────────────────────────
  useEffect(() => {
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off); };
  }, []);

  // ── Network change ─────────────────────────────────────────────────────────
  useEffect(() => {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!conn) return;
    const handler = () => setConnType(getConnectionInfo());
    conn.addEventListener('change', handler);
    return () => conn.removeEventListener('change', handler);
  }, []);

  // ── Public IP + Geolocation (once on mount, with fallback chain) ───────────
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function resolveIp() {
      // 1) ipwho.is — IP + country in one call
      try {
        const r = await fetch('https://ipwho.is/', { signal });
        const d = await r.json();
        if (d.success && d.ip) {
          return { ip: d.ip, countryCode: d.country_code || null, country: d.country || null };
        }
      } catch (_) {}

      // 2) ipapi.co — IP + country (1000 req/day free)
      try {
        const r = await fetch('https://ipapi.co/json/', { signal });
        const d = await r.json();
        if (d.ip && !d.error) {
          return { ip: d.ip, countryCode: d.country_code || null, country: d.country_name || null };
        }
      } catch (_) {}

      // 3) api.ipify.org — solo IP, ultra-affidabile
      try {
        const r = await fetch('https://api.ipify.org?format=json', { signal });
        const d = await r.json();
        if (d.ip) {
          return { ip: d.ip, countryCode: null, country: null };
        }
      } catch (_) {}

      return null;
    }

    resolveIp().then(result => {
      if (!signal.aborted) {
        if (result) {
          setClientInfo({ ...result, loading: false, error: false });
        } else {
          setClientInfo({ ip: null, countryCode: null, country: null, loading: false, error: true });
        }
      }
    });

    return () => controller.abort();
  }, []);

  // ── Derived ────────────────────────────────────────────────────────────────
  const memPercent = memory ? Math.round((memory.used / memory.limit) * 100) : null;
  const memBarClass = memPercent === null ? 'low' : memPercent < 40 ? 'low' : memPercent < 70 ? 'mid' : 'high';
  const uaParsed = parseUserAgent(navigator.userAgent);
  const languages = navigator.languages ? [...navigator.languages] : [navigator.language];

  // ── Chart data ─────────────────────────────────────────────────────────────
  const memoryChartData = {
    labels,
    datasets: [{
      label: 'JS Heap (MB)',
      data: memoryHistory,
      borderColor: '#00d4ff',
      backgroundColor: 'rgba(0, 212, 255, 0.08)',
      fill: true,
      tension: 0.4,
      pointRadius: 2,
      borderWidth: 2,
    }],
  };

  const memoryChartOptions = {
    ...baseChartOptions(),
    scales: {
      x: { ticks: { color: '#7d8590', maxTicksLimit: 6, font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
      y: { ticks: { color: '#7d8590', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' }, min: 0 },
    },
  };

  const connChartData = {
    labels,
    datasets: [{
      label: 'Connessione',
      data: connHistory,
      backgroundColor: connHistory.map(v => v === 1 ? 'rgba(57,211,83,0.65)' : 'rgba(248,81,73,0.65)'),
      borderColor: connHistory.map(v => v === 1 ? '#39d353' : '#f85149'),
      borderWidth: 1,
      borderRadius: 3,
    }],
  };

  const connChartOptions = {
    ...baseChartOptions(ctx => ctx.raw === 1 ? 'Online' : 'Offline'),
    scales: {
      x: { ticks: { color: '#7d8590', maxTicksLimit: 6, font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
      y: {
        ticks: {
          color: '#7d8590', font: { size: 10 }, stepSize: 1,
          callback: v => v === 1 ? 'ON' : v === 0 ? 'OFF' : '',
        },
        grid: { color: 'rgba(255,255,255,0.04)' }, min: 0, max: 1,
      },
    },
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <Helmet>
        <title>Browser Dashboard | Testbench</title>
        <meta name="description" content="Dashboard real-time per monitorare lo stato del browser, memoria e connessione." />
        <link rel="canonical" href="https://taccarlo.web.app/testbench/browserdashboard" />
      </Helmet>

      <div className="bd-dashboard">

        {/* ── Header ── */}
        <div className="bd-header">
          <h1 className="bd-title">
            <span className="bd-title-icon">◈</span>
            Browser Dashboard
          </h1>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span className={`bd-badge ${isOnline ? 'online' : 'offline'}`}>
              <span className={`bd-status-dot ${isOnline ? 'green' : 'red'}`} style={{ margin: 0 }} />
              {isOnline ? 'Online' : 'Offline'}
            </span>
            <span className="bd-live-indicator">
              <span className="bd-live-dot" />
              LIVE
            </span>
            <Link to="/testbench" className="bd-back-btn">Testbench</Link>
          </div>
        </div>

        {/* ── Row 1: 6 compact metric + client cards ── */}
        <div className="bd-grid-6">

          {/* Connection */}
          <div className="bd-card">
            <div className="bd-metric-label">Connessione</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className={`bd-status-dot ${isOnline ? 'green' : 'red'}`} />
              <span className="bd-metric-value" style={{ color: isOnline ? '#39d353' : '#f85149', fontSize: '1.1rem' }}>
                {isOnline ? 'ONLINE' : 'OFFLINE'}
              </span>
            </div>
            {connType && <span className="bd-chip">{connType}</span>}
            <div className="bd-metric-sublabel">navigator.onLine</div>
          </div>

          {/* Uptime */}
          <div className="bd-card">
            <div className="bd-metric-label">Uptime Pagina</div>
            <div className="bd-metric-value" style={{ fontSize: '1.15rem' }}>{formatDuration(uptime)}</div>
            <div className="bd-metric-sublabel">Dall'apertura</div>
          </div>

          {/* Clock */}
          <div className="bd-card">
            <div className="bd-metric-label">Data &amp; Ora</div>
            <div className="bd-metric-value" style={{ fontSize: '1.1rem' }}>{formatTime(now)}</div>
            <div className="bd-metric-sublabel" style={{ textTransform: 'capitalize' }}>{formatDate(now)}</div>
          </div>

          {/* IP Address */}
          <div className="bd-card">
            <div className="bd-metric-label">IP Pubblico</div>
            {clientInfo.loading ? (
              <div className="bd-metric-value" style={{ color: '#7d8590', fontSize: '0.9rem' }}>Rilevamento…</div>
            ) : clientInfo.error ? (
              <div className="bd-metric-value" style={{ color: '#f85149', fontSize: '0.9rem' }}>N/D</div>
            ) : (
              <div className="bd-metric-value" style={{ fontSize: '0.95rem', letterSpacing: '0.03em' }}>{clientInfo.ip}</div>
            )}
            {clientInfo.countryCode && (
              <span className="bd-chip">{clientInfo.countryCode} · {clientInfo.country}</span>
            )}
            <div className="bd-metric-sublabel">ipwho.is</div>
          </div>

          {/* User Agent */}
          <div className="bd-card" style={{ overflow: 'visible' }}>
            <div className="bd-metric-label">User Agent</div>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
              <span className="bd-chip">{uaParsed.browser}</span>
              <span className="bd-chip" style={{ background: 'rgba(124,58,237,0.12)', color: '#a78bfa', borderColor: 'rgba(124,58,237,0.25)' }}>{uaParsed.os}</span>
            </div>
            <div style={{ fontSize: '0.58rem', color: '#7d8590', wordBreak: 'break-all', lineHeight: 1.5, fontFamily: 'monospace', userSelect: 'all' }}>
              {navigator.userAgent}
            </div>
          </div>

          {/* Language */}
          <div className="bd-card">
            <div className="bd-metric-label">Lingua &amp; Piattaforma</div>
            <div className="bd-metric-value" style={{ fontSize: '1.1rem' }}>{languages[0]}</div>
            <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginTop: '0.35rem' }}>
              {languages.slice(0, 4).map((lang, i) => (
                <span key={i} className="bd-chip" style={i === 0 ? {} : { opacity: 0.55, fontSize: '0.6rem' }}>{lang}</span>
              ))}
            </div>
            <div className="bd-metric-sublabel" style={{ marginTop: '0.35rem' }}>
              {navigator.platform || 'N/D'} · Port: <span style={{ color: '#4d5562' }}>N/A</span>
            </div>
          </div>

        </div>

        {/* ── Row 2: Memory + 2 charts ── */}
        <div className="bd-grid-3" style={{ marginTop: '0.6rem' }}>

          {/* Memory */}
          <div className="bd-card">
            <div className="bd-metric-label">Memoria JS Heap</div>
            {memory ? (
              <>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '0.58rem', color: '#7d8590', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Usata</div>
                    <div className="bd-metric-value" style={{ fontSize: '1.2rem' }}>{formatMB(memory.used)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.58rem', color: '#7d8590', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Allocata</div>
                    <div className="bd-metric-value" style={{ color: '#8b949e', fontSize: '1rem' }}>{formatMB(memory.total)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.58rem', color: '#7d8590', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Limite</div>
                    <div className="bd-metric-value" style={{ color: '#8b949e', fontSize: '1rem' }}>{formatMB(memory.limit)}</div>
                  </div>
                </div>
                <div className="bd-progress-bar-wrapper">
                  <div className={`bd-progress-bar-fill ${memBarClass}`} style={{ width: `${memPercent}%` }} />
                </div>
                <div className="bd-metric-sublabel">{memPercent}% heap utilizzato</div>
              </>
            ) : (
              <div style={{ paddingTop: '0.4rem' }}>
                <div className="bd-metric-sublabel">
                  <code style={{ color: '#7d8590' }}>performance.memory</code> non disponibile.
                </div>
                <span className="bd-badge hidden-tab" style={{ marginTop: '0.4rem', display: 'inline-flex' }}>Chrome / Edge only</span>
              </div>
            )}
          </div>

          {/* Chart: Connection */}
          <div className="bd-card">
            <div className="bd-metric-label">Connessione · Online / Offline</div>
            <div className="bd-chart-wrapper">
              <Bar data={connChartData} options={connChartOptions} />
            </div>
          </div>

          {/* Chart: Memory */}
          <div className="bd-card">
            <div className="bd-metric-label">Memoria · JS Heap (MB)</div>
            {memory ? (
              <div className="bd-chart-wrapper">
                <Line data={memoryChartData} options={memoryChartOptions} />
              </div>
            ) : (
              <div style={{ height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7d8590', fontSize: '0.8rem' }}>
                performance.memory non disponibile
              </div>
            )}
          </div>

        </div>

        <div className="bd-footer-note">
          Dati locali · Non inviati a server
        </div>

      </div>
    </>
  );
}

export default BrowserDashboard;
