/* ==========================================================================
   Aastha Gupta Portfolio - Clean & Natural UI Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. DYNAMIC TYPING EFFECT IN HERO SECTION
    const typingElement = document.getElementById('typing-text');
    const roles = [
        "Data Engineering & Analytics",
        "Quantitative Finance & Risk Modeling",
        "Software Systems & REST APIs",
        "Computer Science @ VIT Vellore"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typingElement) return;

        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 30 : 70;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2200; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 350;
        }

        setTimeout(typeEffect, speed);
    }
    typeEffect();

    // 2. BLACK-SCHOLES OPTION PRICING & ANALYTICAL GREEKS ENGINE FOR QUANT LAB
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

    function calculateQuantLabBS() {
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
            input.addEventListener('input', calculateQuantLabBS);
        }
    });
    calculateQuantLabBS();

    // Initialize 3D Volatility surface canvas in Quant Lab
    if (window.initLab3DVolSurface) {
        setTimeout(window.initLab3DVolSurface, 300);
    }

    // 3. RESUME MODAL HANDLERS
    const openResumeBtn = document.getElementById('open-resume-btn');
    const resumeModal = document.getElementById('resume-modal');
    const closeResumeModal = document.getElementById('close-resume-modal');

    if (openResumeBtn && resumeModal) {
        openResumeBtn.addEventListener('click', () => {
            resumeModal.classList.remove('hidden');
        });
    }

    if (closeResumeModal && resumeModal) {
        closeResumeModal.addEventListener('click', () => {
            resumeModal.classList.add('hidden');
        });
    }

    if (resumeModal) {
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                resumeModal.classList.add('hidden');
            }
        });
    }

    // 4. MOBILE MENU TOGGLE
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.toggle('active');
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
            });
        });
    }

    // 5. CONTACT FORM SUBMISSION
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.background = '#10b981';
            setTimeout(() => {
                contactForm.reset();
                btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                btn.style.background = '';
            }, 3000);
        });
    }
});
