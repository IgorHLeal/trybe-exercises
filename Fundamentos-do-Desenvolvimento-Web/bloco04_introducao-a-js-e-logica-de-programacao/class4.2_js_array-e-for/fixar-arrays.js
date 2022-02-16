// Exemplo 1
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);



// Fixar 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

console.log(menuServices);


// Fixar 2 
let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
let menuServices = menu.indexOf('Portifólio');

console.log(menuServices);



// Fixar 3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

for (let index = 0; index < menu.length; index += 1) {
    console.log(menu[index]);
}