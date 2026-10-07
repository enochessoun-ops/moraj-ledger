// Videos play only while they are on screen (kinder to phones and data bundles), muted,
// because browsers refuse to autoplay sound. A "Sound on" button on each one turns its
// sound on (and every other video's off); tapping again mutes it.
(() => {
  const vids = [...document.querySelectorAll('video[data-autoplay]')]
  const ICON_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  const ICON_OFF = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9l5 6M22 9l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  const label = (b, v) => { b.innerHTML = (v.muted ? ICON_OFF + '<span>Sound on</span>' : ICON_ON + '<span>Sound off</span>'); b.setAttribute('aria-pressed', String(!v.muted)) }
  vids.forEach((v) => {
    if (v.hasAttribute('controls')) return   // the real-app recordings have the browser's own controls
    const box = v.parentElement; box.classList.add('has-sound')
    const b = document.createElement('button'); b.type = 'button'; b.className = 'sound-btn'; label(b, v)
    b.addEventListener('click', () => {
      const turnOn = v.muted
      vids.forEach((o) => { if (o !== v) { o.muted = true; const ob = o.parentElement.querySelector('.sound-btn'); if (ob) label(ob, o) } })
      v.muted = !turnOn
      if (turnOn) { v.currentTime = 0; v.play().catch(() => {}) }
      label(b, v)
    })
    box.appendChild(b)
  })
  if (!('IntersectionObserver' in window)) { vids.forEach((v) => v.play().catch(() => {})); return }
  const io = new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause())), { threshold: 0.35 })
  vids.forEach((v) => io.observe(v))
})()
