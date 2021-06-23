const waitingTime = 2000;
export default class ActivityService {
  constructor() {
    this._apiBase = "http://www.boredapi.com/api/activity";
  }
  sleepFor(sleepDuration) {
    const now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {}
  }
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`, { timeout: 2000 });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getActivity(activityData) {
    const startTime = new Date().getTime();
    const data = new URLSearchParams();

    for (let key in activityData) {
      if (
        activityData[key] !== "" &&
        activityData[key] !== 0 &&
        activityData[key] !== 1
      ) {
        data.append(key, activityData[key]);
      }
    }
    if (activityData.minaccessability === activityData.maxaccessability) {
      data.delete("maxaccessability");
    }
    if (activityData.minprice === activityData.maxprice) {
      data.delete("maxprice");
    }
    const newData = await this.getResource(`?${data}`);
    const endTime = new Date().getTime();

    const leftTime = waitingTime - (endTime - startTime);

    this.sleepFor(leftTime);

    return newData;
  }

  async getActivityByKey(key) {
    const startTime = new Date().getTime();

    const data = new URLSearchParams();
    data.append("key", key);
    const res = await this.getResource(`?${data}`);
    const endTime = new Date().getTime();
    const leftTime = waitingTime - (endTime - startTime);
    this.sleepFor(leftTime);
    return await res;
  }
}
