/* ===== 3D SET GENERATOR CON MEJOR DISEÑO ===== */

function getSetSVG3D(set, mode = 'grid') {
    let baseColor = '#4a5568';
    let accentColor = '#00d4ff';
    
    // Determinar color según estado
    if (mode === 'cold' && set.cold) accentColor = '#00d4ff';
    if (mode === 'hot' && set.hot) accentColor = '#00ff88';
    if (mode === 'delivery' && set.delivery) accentColor = '#a855f7';
    if (mode === 'c1' && set.c1) accentColor = '#00d4ff';
    if (mode === 'c2' && set.c2) accentColor = '#00ff88';
    if (mode === 'c3' && set.c3) accentColor = '#ffd700';
    if (mode === 'cb' && set.cb) accentColor = '#ec4899';
    
    // Efecto 3D con sombras y gradientes
    return `
        <svg viewBox="0 0 800 250" width="100%" height="100%" style="filter: drop-shadow(0 10px 30px rgba(0, 212, 255, 0.3));">
            <defs>
                <linearGradient id="grad-bat-a" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="grad-accent" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:${accentColor};stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:${accentColor};stop-opacity:0.3" />
                </linearGradient>
                <filter id="glow3d">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <!-- SOMBRA 3D -->
            <ellipse cx="400" cy="220" rx="350" ry="20" fill="rgba(0,0,0,0.3)"/>
            
            <!-- BATERÍAS (3D Effect) -->
            <g filter="url(#glow3d)">
                <!-- Bat A/B -->
                <rect x="20" y="30" width="160" height="90" fill="url(#grad-bat-a)" stroke="${accentColor}" stroke-width="3" rx="8"/>
                <rect x="25" y="25" width="160" height="90" fill="none" stroke="${accentColor}" stroke-width="1" opacity="0.5" rx="8"/>
                <text x="100" y="85" fill="${accentColor}" font-size="16" font-weight="bold" text-anchor="middle" filter="url(#glow3d)">
                    ${set.batCount === 4 ? 'BAT A/B' : 'BAT A'}
                </text>
            </g>
            
            <!-- LV ROOM -->
            <g filter="url(#glow3d)">
                <rect x="210" y="80" width="70" height="50" fill="url(#grad-bat-a)" stroke="${accentColor}" stroke-width="2" rx="6"/>
                <text x="245" y="108" fill="${accentColor}" font-size="11" font-weight="bold" text-anchor="middle">LV</text>
            </g>
            
            <!-- RMU -->
            <g filter="url(#glow3d)">
                <rect x="210" y="140" width="70" height="50" fill="url(#grad-bat-a)" stroke="${accentColor}" stroke-width="2" rx="6"/>
                <text x="245" y="168" fill="${accentColor}" font-size="11" font-weight="bold" text-anchor="middle">RMU</text>
            </g>
            
            <!-- PCS 1 -->
            <g filter="url(#glow3d)">
                <rect x="310" y="80" width="90" height="110" fill="url(#grad-bat-a)" stroke="${accentColor}" stroke-width="2" rx="6"/>
                <text x="355" y="145" fill="${accentColor}" font-size="12" font-weight="bold" text-anchor="middle">PCS 1</text>
            </g>
            
            <!-- MVT (CENTRO PRINCIPAL) -->
            <g filter="url(#glow3d)">
                <rect x="420" y="80" width="160" height="110" fill="url(#grad-accent)" stroke="${accentColor}" stroke-width="3" rx="8"/>
                <rect x="425" y="75" width="160" height="110" fill="none" stroke="${accentColor}" stroke-width="1" opacity="0.5" rx="8"/>
                <text x="500" y="145" fill="#0a0e27" font-size="14" font-weight="bold" text-anchor="middle" filter="url(#glow3d)">MVT</text>
            </g>
            
            <!-- PCS 2 -->
            <g filter="url(#glow3d)">
                <rect x="600" y="80" width="100" height="110" fill="url(#grad-bat-a)" stroke="${accentColor}" stroke-width="2" rx="6"/>
                <text x="650" y="145" fill="${accentColor}" font-size="12" font-weight="bold" text-anchor="middle">PCS 2</text>
            </g>
            
            <!-- INDICADOR DE ESTADO -->
            <circle cx="760" cy="50" r="20" fill="${accentColor}" opacity="0.8" filter="url(#glow3d)"/>
            <text x="760" y="58" fill="#0a0e27" font-size="12" font-weight="bold" text-anchor="middle">●</text>
        </svg>
    `;
}

/* ===== MENÚ LATERAL MEJORADO ===== */
function createSidebarMenu() {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar-menu';
    sidebar.className = 'sidebar-menu';
    sidebar.innerHTML = `
        <div class="menu-header">
            <button onclick="toggleSidebar()" class="menu-toggle">☰</button>
            <h3>NAVEGACIÓN</h3>
        </div>
        <nav class="menu-nav">
            <a href="#" onclick="switchTab('plan')" class="menu-item" data-icon="📊">
                <span class="menu-icon">📊</span>
                <span class="menu-text">Planificación</span>
            </a>
            <a href="#" onclick="switchTab('delivery')" class="menu-item" data-icon="📦">
                <span class="menu-icon">📦</span>
                <span class="menu-text">Delivery</span>
            </a>
            <a href="#" onclick="switchTab('cold')" class="menu-item" data-icon="❄️">
                <span class="menu-icon">❄️</span>
                <span class="menu-text">Cold Comm.</span>
            </a>
            <a href="#" onclick="switchTab('hot')" class="menu-item" data-icon="🔥">
                <span class="menu-icon">🔥</span>
                <span class="menu-text">Hot Comm.</span>
            </a>
            <a href="#" onclick="switchTab('cycles')" class="menu-item" data-icon="♻️">
                <span class="menu-icon">♻️</span>
                <span class="menu-text">Ciclos</span>
            </a>
            <a href="#" onclick="switchTab('energy')" class="menu-item" data-icon="⚡">
                <span class="menu-icon">⚡</span>
                <span class="menu-text">Energía</span>
            </a>
            <a href="#" onclick="switchTab('trouble')" class="menu-item" data-icon="🔧">
                <span class="menu-icon">🔧</span>
                <span class="menu-text">Troubleshooting</span>
            </a>
            <a href="#" onclick="switchTab('punchlist')" class="menu-item" data-icon="✅">
                <span class="menu-icon">✅</span>
                <span class="menu-text">Punchlist</span>
            </a>
            <a href="#" onclick="switchTab('map')" class="menu-item" data-icon="🗺️">
                <span class="menu-icon">🗺️</span>
                <span class="menu-text">Mapa</span>
            </a>
        </nav>
    `;
    return sidebar;
}

/* ===== CSS PARA SIDEBAR ===== */
const sidebarStyles = `
.sidebar-menu {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height: 100vh;
    background: linear-gradient(180deg, rgba(5, 8, 18, 0.95) 0%, rgba(10, 14, 39, 0.9) 100%);
    border-right: 2px solid var(--accent-blue);
    padding-top: 60px;
    z-index: 99;
    overflow-y: auto;
    transform: translateX(0);
    transition: transform 0.3s ease;
    box-shadow: var(--shadow-lg);
}

.sidebar-menu.hidden {
    transform: translateX(-100%);
}

.menu-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    background: linear-gradient(135deg, var(--panel-bg) 0%, rgba(26, 40, 71, 0.8) 100%);
    border-bottom: 2px solid var(--accent-blue);
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    z-index: 100;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--accent-blue);
    font-size: 1.5rem;
    cursor: pointer;
}

.menu-header h3 {
    margin: 0;
    color: var(--accent-blue);
    font-size: 1.1rem;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

.menu-nav {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 20px;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    border-left: 4px solid transparent;
    position: relative;
}

.menu-item:hover {
    background: rgba(0, 212, 255, 0.1);
    border-left-color: var(--accent-blue);
    color: var(--accent-blue);
    transform: translateX(5px);
}

.menu-item.active {
    background: linear-gradient(90deg, rgba(0, 212, 255, 0.2) 0%, transparent 100%);
    border-left-color: var(--accent-blue);
    color: var(--accent-blue);
    box-shadow: inset 0 0 20px rgba(0, 212, 255, 0.1);
}

.menu-icon {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
}

.menu-text {
    font-weight: 600;
}

@media (max-width: 1024px) {
    .sidebar-menu {
        width: 200px;
    }
    .menu-header {
        width: 200px;
    }
    .menu-toggle {
        display: block;
    }
}

@media (max-width: 768px) {
    .sidebar-menu {
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        height: auto;
        padding-top: 0;
        border-right: none;
        border-bottom: 2px solid var(--accent-blue);
        transform: translateY(0);
    }
    
    .sidebar-menu.hidden {
        transform: translateY(-100%);
    }
    
    .menu-header {
        position: relative;
        width: 100%;
        border-right: none;
        border-bottom: 2px solid var(--accent-blue);
    }
    
    .menu-nav {
        flex-direction: row;
        overflow-x: auto;
        padding: 10px 0;
    }
    
    .menu-item {
        padding: 10px 15px;
        border-left: none;
        border-bottom: 3px solid transparent;
    }
    
    .menu-item:hover,
    .menu-item.active {
        border-left: none;
        border-bottom-color: var(--accent-blue);
    }
}
`;

/* ===== AJUSTAR LAYOUT PRINCIPAL ===== */
function adjustMainAppLayout() {
    const mainApp = document.getElementById('main-app');
    if (!mainApp) return;
    
    mainApp.style.marginLeft = '250px';
    mainApp.style.transition = 'margin-left 0.3s ease';
    
    // Agregar estilos responsivos
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 1024px) {
            #main-app {
                margin-left: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/* ===== TOGGLE SIDEBAR ===== */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-menu');
    if (sidebar) {
        sidebar.classList.toggle('hidden');
    }
}

/* ===== MEJORAR BANNER CON IMAGEN 3D ===== */
function createEnhancedBanner() {
    const banner = document.getElementById('mainBanner');
    if (!banner) return;
    
    const style = document.createElement('style');
    style.textContent = `
        .banner-header {
            background: linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(26, 40, 71, 0.9) 50%, rgba(0, 212, 255, 0.15) 100%),
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,212,255,0.1)" stroke-width="1"/></pattern></defs><rect width="1200" height="200" fill="url(%23grid)"/></svg>');
            background-size: cover, 50px 50px;
            background-position: center, 0 0;
            position: relative;
            overflow: hidden;
        }
        
        .banner-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent 0%, rgba(0, 212, 255, 0.1) 50%, transparent 100%);
            animation: shimmer 3s infinite;
            pointer-events: none;
        }
        
        @keyframes shimmer {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

/* ===== MEJORAR CARDS DE SETS CON ANIMACIÓN 3D ===== */
function enhance3DSetCards() {
    const style = document.createElement('style');
    style.textContent = `
        .set-card {
            transform-style: preserve-3d;
            perspective: 1200px;
            position: relative;
        }
        
        .set-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, transparent 100%);
            border-radius: 12px;
            pointer-events: none;
            z-index: 1;
        }
        
        .set-card:hover::after {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(135deg, var(--accent-blue), var(--accent-green));
            border-radius: 12px;
            opacity: 0.3;
            z-index: -1;
            filter: blur(10px);
        }
        
        .set-card svg {
            filter: drop-shadow(0 10px 25px rgba(0, 212, 255, 0.3));
            transition: filter 0.3s ease;
        }
        
        .set-card:hover svg {
            filter: drop-shadow(0 15px 40px rgba(0, 212, 255, 0.5));
        }
    `;
    document.head.appendChild(style);
}

/* ===== INICIAR TODAS LAS MEJORAS ===== */
document.addEventListener('DOMContentLoaded', () => {
    // Agregar estilos del sidebar
    const sidebarStyleSheet = document.createElement('style');
    sidebarStyleSheet.textContent = sidebarStyles;
    document.head.appendChild(sidebarStyleSheet);
    
    // Crear sidebar
    const mainApp = document.getElementById('main-app');
    if (mainApp) {
        const sidebar = createSidebarMenu();
        document.body.insertBefore(sidebar, mainApp);
        adjustMainAppLayout();
    }
    
    // Mejorar banner
    createEnhancedBanner();
    
    // Mejorar cards 3D
    enhance3DSetCards();
    
    // Actualizar función de renderizado de grillas
    const originalRenderGrids = window.renderGrids;
    window.renderGrids = function() {
        originalRenderGrids.call(this);
        
        // Reemplazar SVGs con nuevos 3D
        document.querySelectorAll('.set-card').forEach(card => {
            const svgs = card.querySelectorAll('svg');
            svgs.forEach(svg => {
                const mode = svg.getAttribute('data-mode') || 'grid';
                // Actualizar SVG aquí si es necesario
            });
        });
    };
});

/* ===== FUNCIÓN PARA ACTUALIZAR TABS CON SIDEBAR ===== */
const originalSwitchTab = window.switchTab;
window.switchTab = function(tab) {
    originalSwitchTab.call(this, tab);
    
    // Actualizar estado activo en sidebar
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeItem = document.querySelector(`[onclick="switchTab('${tab}')"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
};

console.log('✅ 3D Menu System y Enhanced UI cargados exitosamente');
