export function useShownOnScroll(el: Element) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show')
      } else {
        e.target.classList.remove('show')
      }
    })
  })

  return observer.observe(el)
}
