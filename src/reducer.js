export default function reducer(state, action) {
  switch (action.type) {
    case "SHOW_NAV":
      return {
        ...state,
        showNav: action.payload,
      };
    default:
      return state;
  }
}
