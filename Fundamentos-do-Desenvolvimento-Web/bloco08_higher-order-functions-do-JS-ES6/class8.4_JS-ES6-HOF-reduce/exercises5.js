const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const containsA = (book) => book.reduce((acc, curr) => acc + curr.split('').reduce((accumulator, current) => 
  current === 'A' || current === 'a' ? accumulator + 1 : accumulator));

  console.log(containsA(names));
