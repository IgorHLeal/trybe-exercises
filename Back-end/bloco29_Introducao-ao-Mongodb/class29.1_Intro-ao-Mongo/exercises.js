// Exercise 1
db.bios.find( { _id: { $eq: 8 } } );


// Exercise 2
db.bios.find( { _id: { $eq: 8 } }, { name: 1} );


// Exercise 3
db.bios.find( { _id: { $eq: 8 } }, { name: 1, birth: 1, _id: 0} );


// Exercise 4
db.bios.find( { "name.first": { $eq: 'John' } } ).pretty();


// Exercise 5
db.bios.find().limit(3).pretty();


// Exercise 6
db.bios.find().skip(5).limit(2).pretty();


// Para os exercícios seguintes:
// Utilizando o mongoimport, importe o arquivo books.json para a sua instância local do MongoDB e utilize a coleção books para construir as seguintes consultas:

// Copiar json para dentro do container: docker cp books.json mongoDB:/tmp/books.json 
// Executar o mongo import dentro do container: docker exec -it mongoDB mongoimport -d class -c books --file /tmp/books.json


// Exercise 7
db.books.countDocuments({});


// Exercise 8
db.books.countDocuments({ status: 'PUBLISH' });


// Exercise 9
db.books.find({}, { title: 1, isbn: 1, pageCount:1}, {_id: 0} ).limit(3);


// Exercise 10
db.books.find(
  {},
  { title: 1, authors: 1, status: 1}, { status: 'MEAP'},
)
.skip(5).limit(10).pretty();
