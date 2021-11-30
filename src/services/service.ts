import axios from "axios"
import {baseUrl, SERP_API_KEY} from '../shared/constants';

axios.defaults.baseURL = baseUrl;

const serpAPI = {
    search : async function (searchText: string) {
        let response  = await axios.get('search', {
            params: {
                q: searchText,
                api_key: SERP_API_KEY
            }
        });
        return response.data;
    }
}

export default serpAPI;