const initialState = {
  int: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GO': {
      return applyListen(state, action);
    }
    case 'INCREMENT': {
      return { ...state, int: state.int + 1 };
    }

    case 'DECREMENT': {
      return { ...state, int: state.int - 1 };
    }

    default:
      return state;
  }
};

const applyListen = (state, action) => {};
