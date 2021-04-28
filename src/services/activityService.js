import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

export default class ActivityService {
    constructor() {
        this._apBase = "http://www.boredapi.com/api/activity";
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
        }
        return await res.json();
    }

    async getActivity(valueType, participants, budget) {
        const res = await this.getResource(`?price=${budget}&participants=${participants}&type=${valueType}`);
    }
   

}
//const service = new ActivityService();
//service.getActivity('social', 0, 0)
 //   then(res => console.log(res));