import Block from './Block';

export default function renderDOM(block: Block) {
  const root = document.querySelector('#app');

  console.log(block.getContent);

  root!.innerHTML = '';
  root!.appendChild(block.getContent());
}
