function helloWorld (name, surname) {
    return <h1>Hello, ${name} ${surname}</h1>;
}

const element = helloWorld('Igor', 'Leal');
const container = <div>{element}</div>;