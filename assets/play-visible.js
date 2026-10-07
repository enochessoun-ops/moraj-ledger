// Videos play only while they are on screen: kinder to phones and data bundles.
(() => {
  const vids = document.querySelectorAll('video[data-autoplay]')
  if (!('IntersectionObserver' in window)) { vids.forEach((v) => v.play().catch(() => {})); return }
  const io = new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause())), { threshold: 0.35 })
  vids.forEach((v) => io.observe(v))
})()
