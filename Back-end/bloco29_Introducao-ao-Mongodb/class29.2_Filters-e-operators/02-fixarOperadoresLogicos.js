// Fixar 1
// Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.
db.restaurants.countDocuments({rating: { $not: { $lte: 5 } } });


// Fixar 2
// Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.
db.restaurants.countDocuments({ $or: [ { rating: { $gte: 6 } }, { borough: { $eq: 'Brooklin' } }]  });


// Fixar 3
// Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.
db.restaurants.countDocuments({
  $and: [
    { borough: { $in: ['Queens', ' Staten Island', ' Brooklin'] }},
    { rating: { $gte: 4 }}
  ]
});


// Fixar 4
// Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.
db.restaurants.countDocuments({
  $nor: [
    { rating: { $eq: 1 }},
    { cuisine: 'American' }
  ]
});


// Fixar 5
// Selecione e faça a contagem dos restaurantes em que a avaliação seja maior que 6 ou menor que 10, E esteja localizado no bairro Brooklyn OU não possuem culinária do tipo Delicatessen.
db.restaurants.countDocuments({
  $and: [
    { $or: [{ rating: { $gt: 6, $lt: 10 } }] },
    {
      $or: [
        { borough: { $eq: 'Brooklin' }},
        { cuisine: { $ne: 'Delicatessen' } }
      ]
    }
  ]
});

