import '@babel/polyfill'
// index.js

// let dom = document.getElementById('root')
// const header = document.createElement('div')
// header.innerHTML = 'header'
// dom.append(header)
import doge from './doge.js'
import Header from './header.js'
import createDoge from './createDoge.js'
new Header()
new doge()
createDoge()

const promise = new Promise()