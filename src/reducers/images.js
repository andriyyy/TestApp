const INITIAL_STATE = {
  items: null,
  itemsGetErrored: false,
  itemsIsLoading: false,
};

const applySetItems = (state, action) => ({
  ...state,
  items: action.items,
});

const applySetItemsHasErrored = (state, action) => ({
  ...state,
  itemsGetErrored: action.hasErrored,
});

const applyItemsIsLoading = (state, action) => ({
  ...state,
  itemsIsLoading: action.isLoading,
});

function imageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ITEMS_SET': {
      return applySetItems(state, action);
    }

    case 'ITEMS_HAS_ERRORED': {
      return applySetItemsHasErrored(state, action);
    }
    case 'ITEMS_IS_LOADING': {
      return applyItemsIsLoading(state, action);
    }

    default:
      return state;
  }
}

export default imageReducer;
