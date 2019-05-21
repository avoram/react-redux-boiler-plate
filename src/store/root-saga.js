
import { all,fork } from 'redux-saga/effects';
import { watchDashboardAction} from './dashboard/dashboard.saga'


export  function* rootSaga() {
  // yield all runs all the actions concurrent
  yield all([
    watchDashboardAction
  ].map(fork));
}
