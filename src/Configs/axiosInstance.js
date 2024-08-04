import axios from "axios";

const instance = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    headers: {
        'Accept': '*/*'
    }
});




export const apikey = '4479c0e8080e207ad3cdcb63f1d540cf';
export const ts = '1722603293325';
export const hash = '078aef99d5fd4ede300e813c675a3eeb';


export default instance;

