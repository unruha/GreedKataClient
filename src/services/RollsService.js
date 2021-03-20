const { default: axios } = require("axios");
import CONSTANTS from '../config';

export default class RollsService {

    // call random roll api to get random roll values and calculate the score
    getRandomRoll() {
        return axios({
            method: 'get',
            url: CONSTANTS.BASE_URL + '/randomRoll'
        });
    }

    // call set roll api iand pass roll values and calculate score
    getSetRoll(diceNumbers) {
        return axios({
            method: 'post',
            url: CONSTANTS.BASE_URL + '/rollValues' ,
            data: {
                diceNumbers: diceNumbers
            }
        });
    }
}