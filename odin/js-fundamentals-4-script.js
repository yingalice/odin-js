const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
para.textContent = `Hey I'm red!`;
para.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = `I'm a blue h3!`;
h3.style.setProperty('color', 'blue');

const div = document.createElement('div');
div.style.cssText = 'border: solid black; background-color: pink';

const h1 = document.createElement('h1');
h1.textContent = `I'm in a div`;

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';

div.appendChild(h1);
div.appendChild(para2);

container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(div);

