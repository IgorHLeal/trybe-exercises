_1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA:_

  * `SELECT UCASE('trybe');`

_2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?':_

  * `SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');`

_3. Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer':_

  * `SELECT CHAR_LENGTH('Uma frase qualquer');`

_4. Extraia e retorne apenas a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas':_
  
  * `SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);`

_5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa:_

  * `SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');`