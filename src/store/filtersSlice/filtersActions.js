export const showAll = () => {
  return {
    type: 'filters/showAll',
    payload: 'all'
  };
};

export const showCompleted = () => {
  return {
    type: 'filters/showCompleted',
    payload: 'completed'
  };
};

export const showActive = () => {
  return {
    type: 'filters/showActive',
    payload: 'active'
  };
};