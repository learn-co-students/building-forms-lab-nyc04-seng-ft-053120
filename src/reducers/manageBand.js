export default function manageBand(state = {
  bands: [],
}, action) {
  if (action.type === 'ADD_BAND') {
    return {
      ...state,
      bands: [...state.bands, action.name]
    };
  }

  return state
};
