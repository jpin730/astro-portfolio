enum MODE {
  dark = 'dark_mode',
  light = 'light_mode',
}

const getThemeIconElements = (): Element[] => {
  const icons = document.querySelectorAll('.material-icons-outlined')
  return Array.from(icons).filter(
    (icon) => icon.textContent === MODE.dark || icon.textContent === MODE.light,
  )
}

const themeIconElements = getThemeIconElements()

const storedTheme = localStorage.getItem('theme')
const prefersDarkMode = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches

const setTheme = (theme: MODE): void => {
  if (theme === MODE.dark) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
  localStorage.setItem('theme', theme)
  themeIconElements.forEach((element) => {
    element.textContent = theme
  })
}

const handleThemeChange = (iconElement: Element): void => {
  setTheme(iconElement.textContent === MODE.dark ? MODE.light : MODE.dark)
}

export const initTheme = (): void => {
  if (
    (storedTheme != null && storedTheme === MODE.dark) ||
    storedTheme === MODE.light
  ) {
    setTheme(storedTheme)
  } else if (prefersDarkMode) {
    setTheme(MODE.dark)
  } else {
    setTheme(MODE.light)
  }

  themeIconElements.forEach((element) => {
    element.parentElement?.addEventListener('click', () => {
      handleThemeChange(element)
    })
  })
}
