export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
    // console.log("ACTION", action);
    return { bands: [...state.bands, action.name] }
    default:
    return state
  }
};
