import { CARD_DATA } from '../actions/carDataAction';

const INITIAL_STATE = {
    cardData: []
  };
  
  /**
   * reducer - contains the reducer
   *
   * @param  {object} state the initial state
   *
   * @param  {object} action the action
   *
   * @return {Object} returns an Object
   *
   */
  const cardDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case CARD_DATA:
      return {
        ...state,
        cardData: action.payload
      };
    default:
      return state;
    }
  };
  
  export default cardDataReducer;