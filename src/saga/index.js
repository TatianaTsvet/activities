import ActivityService from "../services/activityService";
import { put, takeEvery, call } from "redux-saga/effects";
import { activitiesInMyList, activityFetched } from "./actions";

export function* fetchActivityById(activitiesInList) {
  const ActivityKeyService = new ActivityService();
  const myListActivities = ActivityKeyService.getActivityByKey(
    activitiesInList.payload.key
  );
  const res = yield call(() => myListActivities);

  yield put(activitiesInMyList(res));
}

export function* fetchActivityByDetails(details) {
  const ActivityDetailsService = new ActivityService();
  const getNewActivity = ActivityDetailsService.getActivity(
    details.payload.details
  );
  const res = yield call(() => getNewActivity);
  yield put(activityFetched(res));
}

export function* asyncResetDetails(details) {
  const res = yield call(() => getNewActivity);
  yield put(activityFetched(res));
}

export default function* mySaga() {
  yield takeEvery("activitiesInList", fetchActivityById);
  yield takeEvery("getNewActivity", fetchActivityByDetails);
  yield takeEvery("getNewActivity", asyncResetDetails);
}
