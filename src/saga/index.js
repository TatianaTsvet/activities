import ActivityService from "../services/activityService";
import { put, takeEvery, call } from "redux-saga/effects";
import { activitiesInMyList } from "./actions";

export function* fetchActivityById(activitiesInList) {
  const ActivityKeyService = new ActivityService();
  const myListActivities = activitiesInList.payload.activity.map((item) =>
    ActivityKeyService.getActivityByKey(item)
  );
  const res = yield call(() => Promise.all(myListActivities));
  yield put(activitiesInMyList(res));
}

export default function* mySaga() {
  yield takeEvery("activitiesInList", fetchActivityById);
}
