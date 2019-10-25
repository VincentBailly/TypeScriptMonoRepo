const message1: string = 'Have a look at the console ;)';

function h1(text: string): string {
  return `<h1>${text}</h1>`;
}

export * from './SomeComponent';

document.body.innerHTML = h1(message1);

export default { message3: 'Hi from module C', key: 2, index: 0 };
