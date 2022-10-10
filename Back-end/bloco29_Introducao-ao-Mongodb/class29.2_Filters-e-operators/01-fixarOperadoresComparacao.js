// Fixar 1
// Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx. (utilizando o atributo borough)
db.restaurants.countDocuments({borough: { $in: ['Queens', ' Staten Island', ' Bronx'] } });


// Fixar 2
// Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American. (utilizando o atributo cuisine)
db.restaurants.countDocuments({cuisine: { $ne: ['American'] } });


// Fixar 3
// Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8. (utilizando o atributo rating)
db.restaurants.countDocuments({rating: { $gte: 8 } });


// Fixar 4
// Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4.
db.restaurants.countDocuments({rating: { $gte: 8 } });



// Fixar 5
//Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7
db.restaurants.countDocuments({rating: { $nin: [5, 6, 7] } });