const initialState = {
  status: 'all'
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filters/showAll':
      return {
        ...state,
        status: 'all'
      };

    case 'filters/showActive':
      return {
        ...state,
        status: 'active'
      };

    case 'filters/showCompleted':
      return {
        ...state,
        status: 'completed'
      };

    default:
      return state;
  }
};