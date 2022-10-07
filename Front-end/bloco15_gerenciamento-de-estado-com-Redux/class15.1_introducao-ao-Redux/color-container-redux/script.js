const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow', 'gray'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

// ---------- ACTIONS ----------
const actionNextColor = () => {
  store.dispatch({ type: 'NEXT_COLOR' })
}

const actionPreviousColor = () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' })
}

const randomColor = () => {
  store.dispatch({ type: 'RANDOM_COLOR'})
}

// Crie um reducer, implementando um switch retornando apenas o estado inicial como default
const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      }
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length -1 : state.index -1,
      }
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      }
    default:
      return state;
  };
}


// Criar a store
const store = Redux.createStore(reducer);

store.subscribe(() => {
const { colors, index } = store.getState();
document.getElementById('value').innerHTML = colors[index];
document.getElementById('container').style.backgroundColor = colors[index];
});

const buttonNext = document.getElementById('next');
const buttonPrevious = document.getElementById('previous');
const randomColorId = document.getElementById('random');

buttonNext.addEventListener('click', actionNextColor);
buttonPrevious.addEventListener('click', actionPreviousColor);
randomColorId.addEventListener('click', randomColor);
