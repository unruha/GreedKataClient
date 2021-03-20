<template>
    <div>
        <h2>Get Random Roll</h2>
        <!-- number input fields -->
        <div class="values">
            <b>Roll Values: </b>
            <label class="inputLabel">
                <input type="number" id="num1" name="num1" min="1" max="5" disabled>
            </label>
            <label class="inputLabel">
                <input type="number" id="num2" name="num2" min="1" max="5" disabled>
            </label>
            <label class="inputLabel">
                <input type="number" id="num3" name="num3" min="1" max="5" disabled>
            </label>
            <label class="inputLabel">
                <input type="number" id="num4" name="num4" min="1" max="5" disabled>
            </label>
            <label class="inputLabel">
                <input type="number" id="num5" name="num5" min="1" max="5" disabled>
            </label>
        </div>
        <!-- score field -->
        <div class="scoreDiv">
            <label class="inputLabel">
                <b>Score: </b>
                <input class="score" type="number" id="score" name="score" disabled>
            </label>
        </div>
        <!-- submit button -->
        <div class="buttonDiv">
            <button @click="getRollValues" class="randomButton">Get Random!</button>
        </div>
    </div>
</template>

<script>
import RollsService from '../services/RollsService';

export default {
    name: "RandomRoll",
    data() {
        return {
            // the values of the rolls
            nums: [],
            // score obtained from rolls
            score: 0
        }
    },
    methods: {
        // calls the rolls api to get a random set of roll values and the score
        getRollValues() {
            let rollsService = new RollsService();
            rollsService.getRandomRoll().then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
}

</script>

<style scoped>
.inputLabel {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 15px;
    margin-left: 15px;
}
.values {
    margin-top: 50px;
    margin-bottom: 50px;
}
.score {
    width: 10%;
}
.randomButton {
    display: inline-block;
    padding: 15px 25px;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #1E90FF;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px #999;
}
.randomButton:active {
    background-color: #3e8e41;
    box-shadow: 0 4px #666;
    transform: translateY(2px);
}
.buttonDiv {
    height: 200px;
}
.scoreDiv {
    height: 100px;
}
</style>
