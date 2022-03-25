const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// ---------- ACTIONS ----------
const actionNextColor = () => {
  store.dispatch({ type: 'NEXT_COLOR' })
}

const actionPreviousColor = () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' })
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
    default:
      return state;
  };
}


// Criar a store
const store = Redux.createStore(reducer);

const buttonNext = document.getElementById('next');
const buttonPrevious = document.getElementById('previous');

buttonNext.addEventListener('click', actionNextColor);
buttonPrevious.addEventListener('click', actionPreviousColor);
