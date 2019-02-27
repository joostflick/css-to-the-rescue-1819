var body = document.getElementsByTagName('body')[0]
var content = document.getElementsByClassName('content')[0]
var articleSmall1 = document.querySelectorAll('.content__article--small')
var articleBig = document.querySelectorAll('.content__article--big')
var mouse = document
  .getElementsByClassName('mouse')[0]
  .contentDocument.getElementById('Capa_1')
console.log(mouse)

function Switch() {
  positionSwitch()
  lightSwitch()
}

function positionSwitch() {
  if (content.className.includes('busy')) {
    content.classList.add('calm')
    content.classList.remove('busy')
    articleSmall1.forEach(function(article) {
      article.classList.add('calm')
      article.classList.remove('busy')
    })
    articleBig.forEach(function(article) {
      article.classList.add('calm')
      article.classList.remove('busy')
    })
  } else {
    content.classList.add('busy')
    content.classList.remove('calm')
    articleSmall1.forEach(function(article) {
      article.classList.add('busy')
      article.classList.remove('calm')
    })
    articleBig.forEach(function(article) {
      article.classList.add('busy')
      article.classList.remove('calm')
    })
  }
}

function lightSwitch() {
  if (content.className.includes('dark')) {
    mouse.style.setProperty('fill', 'initial')
    content.classList.add('light')
    content.classList.remove('dark')
    body.classList.remove('dark')
    articleSmall1.forEach(function(article) {
      article.classList.add('light')
      article.classList.remove('dark')
    })
    articleBig.forEach(function(article) {
      article.classList.add('light')
      article.classList.remove('dark')
    })
  } else {
    mouse.style.setProperty('fill', 'white')
    content.classList.add('dark')
    content.classList.remove('light')
    body.classList.add('dark')
    articleSmall1.forEach(function(article) {
      article.classList.add('dark')
      article.classList.remove('light')
    })
    articleBig.forEach(function(article) {
      article.classList.add('dark')
      article.classList.remove('light')
    })
  }
}

let root = document.documentElement

root.addEventListener('mousemove', e => {
  root.style.setProperty('--mouse-x', e.clientX + 'px')
  root.style.setProperty('--mouse-y', e.clientY + 'px')
})

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function getSemiRandomColor() {
  var colors = [
    '#C2D5A5',
    '#2F287A',
    '#A13B71',
    '#034458',
    '#70EF31',
    '#ECD576',
    '#1B4ED3',
    '#9F4B53',
    '#B9EDF8',
    '#F7BF72',
    '#5BDC7F'
  ]

  return colors[Math.floor(Math.random() * colors.length)]
}

root.style.setProperty('--main-color', getSemiRandomColor())
