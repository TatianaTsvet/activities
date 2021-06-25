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

  async getActivity(activityData) {
    const data = new URLSearchParams();
    const t = Date.now();
    data.append("time", t);
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
