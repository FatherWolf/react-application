import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers)
    yield put(actions.getUsersSuccess({
      items: result.data.data
    }));
  } catch (e) {

  }
}

//take every is running a while true loop watches for what ever action is passed in

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
  fork(watchGetUsersRequest)
];

export default usersSagas;
//process creation fork main process in main process creats a child process and another fork makes another.

// root saga - watcher saga comes off of root logic allows for easy c`12346780=-0543457890-atches due to them being organized. also allows logic to run in parallel 