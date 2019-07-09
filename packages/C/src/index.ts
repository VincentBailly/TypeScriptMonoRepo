const message: string = "Have a look at the console ;)";

function h1(text: string): string {
    return `<h1>${text}</h1>`;
}


document.body.innerHTML = h1(message)

export default { message: "Hi from module C", key: 2, index: 0 }
