export default class ActivityService {
  constructor() {
    this._apiBase = "http://www.boredapi.com/api/activity";
  }

  async getResource(url) {
    const res = await fetch(
      `${this._apiBase}${url}`,
      new Headers({
        Pragma: "no-cache",
        "Cache-Control": "no-store, no-cache, must-revalidate",
        Expires: "-1",
      })
    );

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getActivity(details) {
    const activityData = { ...details };
    const data = new URLSearchParams();

    const t = Date.now();
    data.append("time", t);

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
    return newData;
  }

  async getActivityByKey(key) {
    const data = new URLSearchParams();
    const t = Date.now();
    data.append("time", t);
    data.append("key", key);
    const res = await this.getResource(`?${data}`);
    return await res;
  }
}
