import cardData from '../mock/cardData';

export const CARD_DATA = 'card_data';

/**
 * @description Get card data and dispatch
 *
 * @return {object} dispatch object
 *
 */
export const getCardDataAction = (searchInput) => (dispatch) => {
  let searchedData = []
  searchInput && cardData.map(eachData => {
    if(eachData.name && eachData.name.toLowerCase().includes(searchInput)) {
      searchedData.push(eachData);
    }
  })
  dispatch({
    type: CARD_DATA,
    payload: searchInput && searchedData.length > 0 ? searchedData : searchInput && searchedData.length < 1 ? [] : cardData
  });
}



