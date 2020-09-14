import dogeIcon from './img/doge.jpg'
// 配置了并且这样写才是css modules，缺一不可
import style1 from './doge.css'
import style2 from './doge.less'

export default function Header () {
  var dom = document.getElementById('root')
  const doge = new Image()
  doge.classList.add(style1.img, style2.img)
  doge.src = dogeIcon
  dom.append(doge)
}