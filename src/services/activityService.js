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

    async getType() {
        const res = await this.getResource(`?type=:type`)
    }

    async getPerticipants() {
        const res = await this.getPerticipants(`http://www.boredapi.com/api/activity?participants=:participants`)
    }
    async getBudget() {
        const res = await this.getBudget(`?price=:price`)
    }

}
const service = new ActivityService;
service.getPerticipants()
    then(res => console.log(res));