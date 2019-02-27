var body = document.getElementsByTagName('body')[0]
var content = document.getElementsByClassName('content')[0]
var articleSmall1 = document.querySelectorAll('.content__article--small')
var articleBig = document.querySelectorAll('.content__article--big')

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
