// Fixar 1
// Ordene alfabeticamente os restaurantes pelo nome (atributo name).
db.restaurants.find().sort({ "name": 1 }).pretty();


// Fixar 2
// Ordene os restaurantes de forma decrescente baseado nas avaliações.
db.restaurants.find().sort({ "rating": -1 }).pretty();