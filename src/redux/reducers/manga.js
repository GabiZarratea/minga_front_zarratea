const initialState = {
  manga: {},
  chapters: [],
  pagination: {
    prev: false,
    next: true,
    currentPage: 1
  }
}

  const mangasReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MANGA':
        return {
          ...state,
          manga: action.payload
        };
      case 'SET_CHAPTERS':
        return {
          ...state,
          chapters: action.payload
        }
        case 'SET_PAGINATION':
        return {
          ...state,
          pagination: action.payload
        }
      default:
        return state
    }
  }
  
  export default mangasReducer