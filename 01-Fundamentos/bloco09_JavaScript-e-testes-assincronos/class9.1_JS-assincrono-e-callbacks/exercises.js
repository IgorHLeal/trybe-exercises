// -----> EXERCÍCIO 3 <-----
const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    setTimeout(() => console.log("Returned planet: ", mars), 4000);
  };
  
  getPlanet(); // imprime Marte depois de 4 segundos


// -----> EXERCÍCIO 4 <-----
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
sendMarsTemperature = () => {
    const currentTemperature = getMarsTemperature();
    setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celcius.`), messageDelay());
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo