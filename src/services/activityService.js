export default class ActivityService {
  constructor() {
    this._apiBase = 'http://www.boredapi.com/api/activity';
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    async getActivity(activityData) {
        const data = new URLSearchParams(); 
        if (activityData.type === 'Choose any type') {
            activityData.type = "";
        }
        
        for (let key in activityData) {
            if (activityData[key] !== '' && activityData[key] !== 0 && activityData[key] !== 1) {
                data.append(key, activityData[key])
            }       
        }
        const newData = await this.getResource(`?${data}`);
        return newData;
        
    }
    return await res.json();
  }

  
}
