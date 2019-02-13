var body = document.getElementsByTagName('body')[0]
var content = document.getElementsByClassName('content')[0]
var articleSmall1 = document.querySelectorAll('.content__article--small')
var articleBig = document.querySelectorAll('.content__article--big')

function lightSwitch() {
  console.log(articleSmall1)
  if (content.className == 'content') {
    body.className = 'body darkmode'
    content.className = 'content darkmode'
    content.style = 'transform: rotate(0deg);'
    articleBig[0].style = 'transform: rotate(0deg);'
    articleSmall1[0].style =
      'grid-column-start: 2; background-color: black; transform: rotate(0deg);'
    articleSmall1[1].style =
      'grid-column-start: 2; background-color: black; transform: rotate(0deg);'
    articleSmall1[2].style =
      'grid-column-start: 2; background-color: black; transform: rotate(0deg);'
    articleSmall1[3].style =
      'grid-column-start: 2; background-color: black; transform: rotate(0deg);'
    articleSmall1[4].style =
      'grid-column-start: 2; background-color: black; transform: rotate(0deg);'
    articleSmall1[5].style =
      'grid-column-start: 2; background-color: black; transform: rotate(0deg);'
  } else {
    body.className = 'body'
    content.className = 'content'
    content.style = 'transform: rotate(2deg);'
    articleBig[0].style = ''
    articleSmall1[0].style = ''
    articleSmall1[1].style = ''
    articleSmall1[2].style = ''
    articleSmall1[3].style = ''
    articleSmall1[4].style = ''
    articleSmall1[5].style = ''
    articleSmall1[0].class = ''
    articleSmall1[1].class = ''
    articleSmall1[2].class = ''
    articleSmall1[3].class = ''
    articleSmall1[4].class = ''
    articleSmall1[5].class = ''
  }
}
