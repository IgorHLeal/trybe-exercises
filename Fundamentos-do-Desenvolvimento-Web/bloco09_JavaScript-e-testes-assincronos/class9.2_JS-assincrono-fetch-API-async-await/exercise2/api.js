const fetch = require('node-fetch');

const cryptoCurrencyList = async () => {
    const url = 'https://api.coincap.io/v2/assets';


    const coins = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());

    console.log(coins);
}

cryptoCurrencyList();