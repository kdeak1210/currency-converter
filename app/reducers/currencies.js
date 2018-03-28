import {
  SWAP_CURRENCY,
  CHANGE_CURRENCY_AMOUNT,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {}
};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {}
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return {
    ...state.conversions,
    [action.currency]: conversion
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWAP_CURRENCY:
      // console.log('SWAP_CURRENCY');
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency
      };
    case CHANGE_CURRENCY_AMOUNT:
      // console.log(`CHANGE_CURRENCY_AMOUNT: ${JSON.stringify(action)}`);
      return {
        ...state,
        amount: action.amount || 0
      };
    case CHANGE_BASE_CURRENCY:
      // console.log(`CHANGE_BASE_CURRENCY: ${action.currency}`);
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action)
      };
    case CHANGE_QUOTE_CURRENCY:
      // console.log(`CHANGE_QUOTE_CURRENCY: ${action.currency}`);
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversions(state, action)
      };
    default:
      return state;
  }
};

export default reducer;
