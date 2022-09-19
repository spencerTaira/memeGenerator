document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const imageLink = document.querySelector('#imageLink')
    const memeTextTop = document.querySelector('#memeTextTop');
    const memeTextBot = document.querySelector('#memeTextBottom')
    const img = document.createElement('img');
    const testDiv = document.createElement('div');
    const textDivTop = document.createElement('p');
    const textDivBot = document.createElement('p');
    testDiv.style.position = 'relative';
    testDiv.style.display = 'inline-block'; //inline-block;
    textDivTop.style.position = 'absolute';
    textDivBot.style.position = 'absolute';
    testDiv.style.padding = '10px';
    textDivTop.style.top = '0px';
    textDivTop.style.left = '50%';
    textDivTop.style.transform = 'translate(-50%, 0%)';
    textDivBot.style.bottom = '0px';
    textDivBot.style.left = '50%';
    textDivBot.style.transform = 'translate(-50%, 0%)';
    textDivBot.style.fontSize = '20px';
    form.append(testDiv);
    textDivTop.textContent = memeTextTop.value;
    textDivBot.textContent = memeTextBot.value;
    testDiv.appendChild(textDivTop);
    testDiv.appendChild(textDivBot);
    img.src = imageLink.value;
    imageLink.value = '';
    memeTextTop.value = '';
    memeTextBot.value = '';
    testDiv.append(img);
  });
});
