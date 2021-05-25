import { put, takeEvery, call } from "redux-saga/effects";
import { activitiesInListSuccess } from "../actions/";

const _apiBase = "http://www.boredapi.com/api/activity";

async function getActivity(activityData) {
  const data = new URLSearchParams();
  if (activityData.type === "Choose any type") {
    activityData.type = "";
  }
  for (let key in activityData) {
    if (
      activityData[key] !== "" &&
      activityData[key] !== 0 &&
      activityData[key] !== 1
    ) {
      data.append(key, activityData[key]);
    }
  }
  const res = await fetch(`${_apiBase}?${data}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${data}, received ${res.status}`);
  }
  return await res.json();
}

function* fetchActivityById(activitiesInList) {
  const myListActivities = activitiesInList.payload.activity.map((item) =>
    getActivity(item)
  );

  const res = yield call(() => Promise.all(myListActivities));
  yield put(activitiesInListSuccess(res));
}

export default function* mySaga() {
  yield takeEvery("activitiesInList", fetchActivityById);
}
