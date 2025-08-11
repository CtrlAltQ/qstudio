// CtrlAltQ Main JavaScript
// Year stamp
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('y');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Thank-you toast when redirected with #thanks
if (location.hash === '#thanks') {
  document.addEventListener('DOMContentLoaded', function() {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 bg-stone-900 text-white px-4 py-3 rounded-lg shadow-lg z-50';
    toast.textContent = 'Thanks! I\'ll get back to you shortly.';
    document.body.appendChild(toast);
    
    // Remove toast after animation
    setTimeout(() => {
      if (toast && toast.parentNode) {
        toast.remove();
      }
    }, 4500);
    
    // Clean URL hash after showing toast
    setTimeout(() => {
      if (history.replaceState) {
        history.replaceState(null, null, window.location.pathname);
      }
    }, 100);
  });
}

// Form enhancement (optional progressive enhancement)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form[name="contact"]');
  if (form) {
    form.addEventListener('submit', function(e) {
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
      }
    });
  }
});