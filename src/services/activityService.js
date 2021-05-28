export default class ActivityService {
  constructor() {
    this._apiBase = "http://www.boredapi.com/api/activity";
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getActivity(activityData) {
    const data = new URLSearchParams();
    if (activityData.minprice === activityData.maxprice) {
      activityData.maxprice = 1;
    }
    if (activityData.minaccessability === activityData.maxaccessability) {
      activityData.maxaccessability = 1;
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
    data.append("key", key);
    const res = await this.getResource(`?${data}`);    
    return await res;
  }
}
