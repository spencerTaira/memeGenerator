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
    textDivTop.style.position = 'absolute';
    textDivBot.style.position = 'absolute';
    testDiv.style.padding = '10px';
    textDivTop.style.top = '0px';
    textDivBot.style.bottom = '0px';
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
