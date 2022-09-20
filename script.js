document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const imageLink = document.querySelector('#imageLink')
    if (imageLink.value === '') {
      return;
    }
    const memeTextTop = document.querySelector('#memeTextTop');
    const memeTextBot = document.querySelector('#memeTextBottom')
    const img = document.createElement('img');
    const testDiv = document.createElement('div');
    const textDivTop = document.createElement('p');
    const textDivBot = document.createElement('p');
    testDiv.style.position = 'relative';
    testDiv.style.display = 'inline-block'; //inline-block;
    testDiv.style.padding = '0px';
    textDivTop.style.position = 'absolute';
    textDivBot.style.position = 'absolute';
    testDiv.style.padding = '10px';
    textDivTop.style.top = '0px';
    textDivTop.style.left = '50%';
    textDivTop.style.transform = 'translate(-50%, 0%)';
    textDivBot.style.bottom = '0px';
    textDivBot.style.left = '50%';
    textDivBot.style.transform = 'translate(-50%, 0%)';
    textDivTop.style.fontSize = '30px';
    textDivTop.style.marginTop = '5px';
    textDivTop.style.fontWeight = 'bolder';
    textDivBot.style.fontSize = '30px';
    textDivBot.style.marginBottom = '10px';
    textDivBot.style.fontWeight = 'bolder';
    textDivTop.style.color = 'rgb(237, 0, 170)';
    textDivBot.style.color = 'rgb(237, 0, 170)';

    body.appendChild(testDiv);
    // form.append(testDiv);
    textDivTop.textContent = memeTextTop.value;
    textDivBot.textContent = memeTextBot.value;
    testDiv.append(textDivTop);
    testDiv.append(textDivBot);
    img.src = imageLink.value;
    imageLink.value = '';
    memeTextTop.value = '';
    memeTextBot.value = '';
    testDiv.append(img);
    const delButt = document.createElement('button');
    delButt.textContent = 'Delete';
    body.appendChild(delButt);
    delButt.onclick = function() {
      body.removeChild(body.lastChild);
      body.removeChild(body.lastChild);
    }
    // flexFont();
  });

  // flexFont = function () {
  //   var divs = document.querySelectorAll('div');
  //   for(var i = 0; i < divs.length; i++) {
  //       var text = divs[i].querySelectorAll('p');
  //       var relFontsize = divs[i].offsetWidth*0.05;
  //       // divs[i].style.fontSize = relFontsize+'px';
  //       for (var j = 0; j < text.length; j++) {
  //         text[j].style.fontSize = relFontsize + 'px';
  //       }
  //   }
  // };
});

