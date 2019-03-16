import Hello from './hello';

document.addEventListener('DOMContentLoaded', () => {
  const world = document.getElementById('world');
  const hello = new Hello(world);
  hello.print('!');
  hello.target = 'planet';
  hello.print('.');
});
