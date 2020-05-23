// Selectors
function getItems(state) {
  if (state.imageState.items !== null) {
    return state.imageState.items;
  } else {
    return false;
  }
}

function getItemsIsLoading(state) {
  return state.imageState.itemsIsLoading;
}

function getItemsHasErrored(state) {
  return state.imageState.itemsGetErrored;
}
function getItemsError(state) {
  return state.imageState.itemsError;
}

function getItem(id, items) {
  let elem = null;
  if (items) {
    items.forEach(function(element) {
      if (id === element.id) {
        elem = element;
      }
    });
    return elem;
  } else {
    return false;
  }
}

export {
  getItems,
  getItemsHasErrored,
  getItemsIsLoading,
  getItem,
  getItemsError,
};
