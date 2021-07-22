const waitingTime = 2000;

export default class ActivityService {
  constructor() {
    this._apiBase = "http://www.boredapi.com/api/activity";
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getActivity(details) {
    const startTime = new Date().getTime();
    let newData = "";
    const activityData = { ...details };

    const data = new URLSearchParams();

    if (!activityData.participants) {
      newData = await this.getResource(`?`);
    } else {
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

      newData = await this.getResource(`?${data}`);
    }
    const endTime = new Date().getTime();
    const leftTime = waitingTime - (endTime - startTime);
    await new Promise((resolve) => setTimeout(resolve, leftTime));
    return newData;
  }
  async getActivityByKey(key) {
    const startTime = new Date().getTime();

    const data = new URLSearchParams();
    data.append("key", key);
    const res = await this.getResource(`?${data}`);
    const endTime = new Date().getTime();
    const leftTime = waitingTime - (endTime - startTime);

    await new Promise((resolve) => setTimeout(resolve, leftTime));
    return await res;
  }
}
