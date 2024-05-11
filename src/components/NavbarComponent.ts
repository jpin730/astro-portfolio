const menuButton = document.getElementById('menu-button')
const menuContainer = document.getElementById('menu-container')

menuButton?.addEventListener('click', () => {
  menuContainer?.classList.toggle('hidden')
  menuContainer?.classList.toggle('flex')
})

document.addEventListener('click', (event) => {
  const isHidden = menuContainer?.classList.contains('hidden') ?? true

  const target = event.target as HTMLElement
  const targetInnerText = target.innerText

  const iconClicked = target instanceof HTMLImageElement
  const anyAnchorClicked = target instanceof HTMLAnchorElement

  const closeClicked = targetInnerText === 'close'

  if (!isHidden && (iconClicked || anyAnchorClicked || closeClicked)) {
    menuContainer?.classList.add('hidden')
    menuContainer?.classList.remove('flex')
  }

  const themeButtonClicked = ['dark_mode', 'light_mode'].includes(
    targetInnerText,
  )
  if (themeButtonClicked) {
    target.innerText =
      targetInnerText === 'dark_mode' ? 'light_mode' : 'dark_mode'
    document.body.classList.toggle('dark')
  }
})
