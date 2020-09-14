import dogeIcon from './img/doge.jpg'

export default function createDoge() {
  var dom = document.getElementById('root')
  const doge = new Image()
  doge.classList.add('img')
  doge.src = dogeIcon
  dom.append(doge)
}