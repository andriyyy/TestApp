export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_SET',
    items,
  };
}

export function itemsError(bool) {
  return {
    type: 'ITEMS_ERROR',
    error,
  };
}
export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool,
  };
}

export function itemsFetchData() {
  return (dispatch, getState, {unsplash}) => {
    dispatch(itemsIsLoading(true));

    unsplash
      .items()
      .then(res => res.json())
      .then(
        result => {
          var items = [];
          result.map(item => {
            items.push({
              id: item.id,
              urls: item.urls,
              name: item.user.name,
              alt_description: item.alt_description,
            });
          });
          dispatch(itemsFetchDataSuccess(items));
          dispatch(itemsIsLoading(false));
        },
        error => {
          itemsHasErrored(true);
          itemsError(error);
        },
      );
  };
}
