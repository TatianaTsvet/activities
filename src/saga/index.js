import { put, takeEvery, call } from "redux-saga/effects";
import { activitiesInMyList } from "../actions/";

const _apiBase = "http://www.boredapi.com/api/activity";

async function getActivity(activityData) {
  const data = new URLSearchParams();
  data.append("key", activityData);
  const res = await fetch(`${_apiBase}?${data}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${res}, received ${res.status}`);
  }
  return await res.json();
}

function* fetchActivityById(activitiesInList) {
  const myListActivities = activitiesInList.payload.activity.map((item) =>
    getActivity(item)
  );
  const res = yield call(() => Promise.all(myListActivities));
  yield put(activitiesInMyList(res));
}

export default function* mySaga() {
  yield takeEvery("activitiesInList", fetchActivityById);
}
