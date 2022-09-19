document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const imageLink = document.querySelector('#imageLink')
    const memeText = document.querySelector('#memeText');
    const img = document.createElement('img');
    const testDiv = document.createElement('div');
    const textDiv = document.createElement('p');
    testDiv.style.position = 'relative';
    textDiv.style.position = 'absolute';
    testDiv.style.padding = '10px';
    textDiv.innerHTML = 'testing';
    textDiv.style.top = '0px';
    form.append(testDiv);
    textDiv.textContent = memeText.value;
    testDiv.appendChild(textDiv);
    img.src = imageLink.value;
    imageLink.value = '';
    memeText.value = '';
    testDiv.append(img);
  });
});
