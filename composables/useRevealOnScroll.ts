export function useRevealOnScroll() {
  const elements = new Set<HTMLElement>()
  let observer: IntersectionObserver | null = null

  const registerElement = (element: Element | null) => {
    if (!(element instanceof HTMLElement) || elements.has(element)) {
      return
    }

    elements.add(element)
    observer?.observe(element)
  }

  onMounted(() => {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return
        }

        entry.target.classList.add('show')
        observer?.unobserve(entry.target)
      })
    })

    elements.forEach(element => observer?.observe(element))
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
    elements.clear()
  })

  return {
    registerElement,
  }
}
