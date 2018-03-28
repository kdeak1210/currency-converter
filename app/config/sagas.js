import { takeEvery } from 'redux-saga/effects';

// 1. Swap currency
// 2. Change base currency
// 3. Upon initial app load (Home screen CDM)

/** Listen for these events, by listening to the actions that are
 * emitted when these events take place. Import those actions...
 */

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION
} from '../actions/currencies';

function* fetchLatestConversionRates(action) {
  console.log('TODO: Update the things', JSON.stringify(action));
  yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
