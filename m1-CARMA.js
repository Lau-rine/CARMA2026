/* =========================================
   CARMA architecture — variante logo centré
   ========================================= */

// Animation d'entrée
document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    document.body.classList.add('is-loaded');
  });
});

// Hover panel : actif seulement dans la moitié basse de l'écran
const HOVER_THRESHOLD = 0.65; // 0.5 = moitié, 0.6 = en bas du tiers, etc.

document.querySelectorAll('.panel').forEach(panel => {
  panel.addEventListener('mousemove', (e) => {
    const rect = panel.getBoundingClientRect();
    const inBottomZone = (e.clientY - rect.top) > rect.height * HOVER_THRESHOLD;
    panel.classList.toggle('is-hovered', inBottomZone);
  });
  panel.addEventListener('mouseleave', () => {
    panel.classList.remove('is-hovered');
  });
});