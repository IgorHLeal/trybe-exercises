/* Link para realização dos exercícios:
https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1 */


/* Bônus 01 - Selecione todos os registros em que a Citycoluna tenha o valor "Berlim". */
# SELECT * FROM Customers
WHERE City = 'Berlin';


/* Bônus 02 - Use a NOTpalavra-chave para selecionar todos os registros em que CityNÃO seja "Berlin". */
# SELECT * FROM Customers
WHERE NOT City = 'Berlin';


/* Bônus 03 - Selecione todos os registros em que a CustomerIDcoluna tenha o valor 32. */
# SELECT * FROM Customers
WHERE CustomerID = 32;


/* Bônus 04 - Selecione todos os registros em que a Citycoluna tenha o valor 'Berlin' e a PostalCodecoluna tenha o valor 12209. */
# SELECT * FROM Customers
WHERE City = 'Berlin' AND PostalCode = 12209;


/* Bônus 05 - Selecione todos os registros em que a Citycoluna tenha o valor 'Berlin' ou 'London'. */
# SELECT * FROM Customers
WHERE City = 'Berlin' OR City = 'London';
