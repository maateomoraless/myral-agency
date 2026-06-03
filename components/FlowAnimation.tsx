'use client'

export default function FlowAnimation() {
  const nodes = [
    { label: 'Lead', x: 60 },
    { label: 'IA', x: 190 },
    { label: 'Email', x: 320 },
    { label: 'PDF', x: 450 },
    { label: 'CRM', x: 580 },
  ]

  return (
    <div className="relative w-full max-w-2xl mx-auto" style={{background:'#07070f', borderRadius:12, padding:'32px 24px'}}>
      <style>{`
        @keyframes nodeGlow {
          0% { opacity: 0 }
          5% { opacity: 1 }
          25% { opacity: 1 }
          35% { opacity: 0 }
          100% { opacity: 0 }
        }
        .glow-0 { animation: nodeGlow 6s infinite 0s; }
        .glow-1 { animation: nodeGlow 6s infinite 1.5s; }
        .glow-2 { animation: nodeGlow 6s infinite 3.0s; }
        .glow-3 { animation: nodeGlow 6s infinite 4.5s; }
        .glow-4 { animation: nodeGlow 6s infinite 5.8s; }
      `}</style>
      <svg width="100%" viewBox="0 0 640 80" style={{overflow:'visible'}}>
        {/* Línea de fondo */}
        <line x1="60" y1="40" x2="580" y2="40" stroke="#222" strokeWidth="2"/>

        {/* Punto viajando — antes de los nodos para quedar detrás */}
        <circle r={4} fill="#F5E614">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M 60 40 L 580 40"
          />
        </circle>

        {/* Nodos */}
        {nodes.map((node, i) => (
          <g key={i}>
            {/* Nodo base */}
            <rect x={node.x - 36} y="22" width="72" height="36" rx="6" fill="#111" stroke="#2a2a2a" strokeWidth="1.5"/>
            {/* Glow cuando llega el punto */}
            <rect x={node.x - 36} y="22" width="72" height="36" rx="6" fill="none" stroke="#F5E614" strokeWidth="1.5" className={`glow-${i}`}/>
            {/* Texto */}
            <text x={node.x} y="44" textAnchor="middle" fill="white" fontSize="11" fontFamily="Syne, sans-serif">{node.label}</text>
          </g>
        ))}
      </svg>
      <p style={{textAlign:'center', color:'rgba(240,237,232,0.4)', fontSize:11, marginTop:16, fontFamily:'DM Sans'}}>
        Cada lead activa el flujo automáticamente. Sin intervención humana.
      </p>
    </div>
  )
}
