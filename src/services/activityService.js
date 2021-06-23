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

    const activityData = { ...details };

    const data = new URLSearchParams();
    if (activityData.minaccessability === activityData.maxaccessability) {
      data.append("accessibility", activityData.minaccessability);
      activityData.minaccessability = 0;
      activityData.maxaccessability = 1;
    }
    if (activityData.minprice === activityData.maxprice) {
      data.append("price", activityData.minprice);
      activityData.minprice = 0;
      activityData.maxprice = 1;
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
