

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

    async getActivity(valueType, participants, minBudget, maxBudget, access) {
        
        const data = new URLSearchParams();       
        data.append('minprice', minBudget)
        data.append('maxprice', maxBudget)        
        data.append('participants', participants)
        data.append('accessibility', access)
        data.append('type', valueType.toLowerCase())
        
        
        data.forEach(function (value, key) {
            if (value === "" || value === "0") {
               data.delete(key) 
            }
        });
        
       
        const newData = await this.getResource(`?${data}`);
        console.log(`?${data}`);
        return newData;
        
    }
    

}
