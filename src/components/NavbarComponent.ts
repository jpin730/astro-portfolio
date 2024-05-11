import { initTheme } from '../scripts/theme'

const menuContainer = document.getElementById('menu-container')

document.addEventListener('click', (event) => {
  const isHidden = menuContainer?.classList.contains('hidden') ?? true

  const target = event.target as HTMLElement
  const targetInnerText = target.innerText

  const iconClicked = target instanceof HTMLImageElement
  const anyAnchorClicked = target instanceof HTMLAnchorElement

  const menuButtonClicked = targetInnerText === 'menu'
  const closeClicked = targetInnerText === 'close'

  if (isHidden && menuButtonClicked) {
    menuContainer?.classList.toggle('hidden')
    menuContainer?.classList.toggle('flex')
  }

  if (!isHidden && (iconClicked || anyAnchorClicked || closeClicked)) {
    menuContainer?.classList.add('hidden')
    menuContainer?.classList.remove('flex')
  }
})

initTheme()
