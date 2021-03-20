const { default: axios } = require("axios");
import CONSTANTS from '../config';

export default class RollsService {
    getRandomRoll() {
        return axios({
            method: 'get',
            url: CONSTANTS.BASE_URL + '/randomRoll'
        });
    }
}