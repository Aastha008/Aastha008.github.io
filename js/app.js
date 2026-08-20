/* ==========================================================================
   Aastha Gupta - Portfolio Interactivity (Filters, Solvers & Mobile Menu)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. MOBILE MENU TOGGLE
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isVisible = mainNav.style.display === 'flex';
            mainNav.style.display = isVisible ? 'none' : 'flex';
            if (!isVisible) {
                mainNav.style.flexDirection = 'column';
                mainNav.style.position = 'absolute';
                mainNav.style.top = '100%';
                mainNav.style.left = '0';
                mainNav.style.width = '100%';
                mainNav.style.background = '#ffffff';
                mainNav.style.padding = '1.5rem';
                mainNav.style.borderBottom = '1px solid #e2e8f0';
                mainNav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
            }
        });
    }

    // 2. PROJECT CATEGORY FILTERING TABS
    const filterPills = document.querySelectorAll('.filter-pill');
    const projectCards = document.querySelectorAll('.project-case-card');

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const filterValue = pill.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. INTERACTIVE BLACK-SCHOLES SOLVER
    function CND(x) {
        const a1 = 0.319381530;
        const a2 = -0.356563782;
        const a3 = 1.781477937;
        const a4 = -1.821255978;
        const a5 = 1.330274429;
        const L = Math.abs(x);
        const k = 1.0 / (1.0 + 0.2316419 * L);
        let w = 1.0 - 1.0 / Math.sqrt(2 * Math.PI) * Math.exp(-L * L / 2) * (a1 * k + a2 * k * k + a3 * Math.pow(k, 3) + a4 * Math.pow(k, 4) + a5 * Math.pow(k, 5));
        if (x < 0) w = 1.0 - w;
        return w;
    }

    function ND(x) {
        return (1.0 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x);
    }

    function calculateBS() {
        const S0 = parseFloat(document.getElementById('lab-spot')?.value || 100);
        const K = parseFloat(document.getElementById('lab-strike')?.value || 100);
        const r = parseFloat(document.getElementById('lab-rate')?.value || 5) / 100;
        const sigma = parseFloat(document.getElementById('lab-vol')?.value || 20) / 100;
        const T = parseFloat(document.getElementById('lab-time')?.value || 1.0);

        if (S0 <= 0 || K <= 0 || sigma <= 0 || T <= 0) return;

        const d1 = (Math.log(S0 / K) + (r + (sigma * sigma) / 2.0) * T) / (sigma * Math.sqrt(T));
        const d2 = d1 - sigma * Math.sqrt(T);

        const callPrice = S0 * CND(d1) - K * Math.exp(-r * T) * CND(d2);
        const putPrice = K * Math.exp(-r * T) * CND(-d2) - S0 * CND(-d1);

        const deltaCall = CND(d1);
        const gamma = ND(d1) / (S0 * sigma * Math.sqrt(T));
        const vega = (S0 * ND(d1) * Math.sqrt(T)) / 100.0;

        const resCall = document.getElementById('lab-call-res');
        const resPut = document.getElementById('lab-put-res');
        const resDelta = document.getElementById('lab-delta-res');
        const resGamma = document.getElementById('lab-gamma-res');
        const resVega = document.getElementById('lab-vega-res');

        if (resCall) resCall.textContent = `$${callPrice.toFixed(2)}`;
        if (resPut) resPut.textContent = `$${putPrice.toFixed(2)}`;
        if (resDelta) resDelta.textContent = deltaCall.toFixed(3);
        if (resGamma) resGamma.textContent = gamma.toFixed(4);
        if (resVega) resVega.textContent = vega.toFixed(3);
    }

    ['lab-spot', 'lab-strike', 'lab-rate', 'lab-vol', 'lab-time'].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', calculateBS);
        }
    });

    calculateBS();
});
