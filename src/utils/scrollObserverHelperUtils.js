export function observeScrollItems(callback) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (callback) callback(entry);

        // observer.unobserve(entry.target);

      });
    },
    { threshold: 0.8 }
  );

  const elements = document.querySelectorAll('.scroll-item');
  elements.forEach(el => observer.observe(el));
}
