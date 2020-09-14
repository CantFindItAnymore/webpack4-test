import style from './font.css'

export default function Header () {
  var dom = document.getElementById('root')
  const header = document.createElement('div')
  header.classList.add(style.webFont)
  header.innerHTML = '心之所向，素履以往，生如逆旅。'
  dom.append(header)
}