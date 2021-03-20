<template>
    <div>
        <h2>Get Set Roll</h2>
        <h3>Enter 5 values between 1 and 5 inclusive, then press "Get Score!"</h3>
        <!-- number input fields -->
        <div class="values">
            <b>Roll Values: </b>
            <label class="inputLabel">
                <input type="number" v-model="num1" id="num1" name="num1" min="1" max="5">
            </label>
            <label class="inputLabel">
                <input type="number" v-model="num2" id="num2" name="num2" min="1" max="5">
            </label>
            <label class="inputLabel">
                <input type="number" v-model="num3" id="num3" name="num3" min="1" max="5">
            </label>
            <label class="inputLabel">
                <input type="number" v-model="num4" id="num4" name="num4" min="1" max="5">
            </label>
            <label class="inputLabel">
                <input type="number" v-model="num5" id="num5" name="num5" min="1" max="5">
            </label>
        </div>
        <!-- score field -->
        <div class="scoreDiv">
            <label class="inputLabel">
                <b>Score: </b>
                <input class="score" v-model="score" type="number" id="score" name="score" disabled>
            </label>
        </div>
        <!-- submit button -->
        <div class="buttonDiv">
            <button @click="handleButtonClick" class="setButton">Get Score!</button>
        </div>
        <div>
            <b class="errorMsg" v-bind:hidden="!hasError">Please enter values between 1 and 5 inclusive</b>
        </div>
    </div>
</template>

<script>
import RollsService from '../services/RollsService';

export default {
    name: "SetRoll",
    data() {
        return {
            num1: null,
            num2: null,
            num3: null,
            num4: null,
            num5: null,
            score: null,
            hasError: false
        }
    },
    methods: {
        
        // handles client side validation to make sure the correct values are being passed to the api
        handleButtonClick() {
            
            // cast string input values to integers
            this.num1 = parseInt(this.num1);
            this.num2 = parseInt(this.num2);
            this.num3 = parseInt(this.num3);
            this.num4 = parseInt(this.num4);
            this.num5 = parseInt(this.num5);

            // check whether inputs are valid
            if (isNaN(this.num1) || this.num1 === null || this.num1 > 5 || this.num1 < 1) {
                this.hasError = true;
            }
            else if (isNaN(this.num2) || this.num2 === null || this.num2 > 5 || this.num2 < 1) {
                this.hasError = true;
            }
            else if (isNaN(this.num3) || this.num3 === null || this.num3 > 5 || this.num3 < 1) {
                this.hasError = true;
            }
            else if (isNaN(this.num4) || this.num4 === null || this.num4 > 5 || this.num4 < 1) {
                this.hasError = true;
            }
            else if (isNaN(this.num5) || this.num5 === null || this.num5 > 5 || this.num5 < 1) {
                this.hasError = true;
            }
            else {
                this.hasError = false;
                // when there are no more errors, call rolls service
                this.getSetRoll();
            }      
        },
        getSetRoll() {
            // add all input values to an array to pass to api
            let nums = [this.num1, this.num2, this.num3, this.num4, this.num5];

            let rollsService = new RollsService();
            
            // call the rolls service with the numbers array and get the score of the rolls
            rollsService.getSetRoll(nums).then(res => {
                this.score = res.data.Score;
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>
.errorMsg {
    color: crimson;
}
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
.setButton {
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
.setButton:active {
    background-color: #3e8e41;
    box-shadow: 0 4px #666;
    transform: translateY(2px);
}
.buttonDiv {
    height: 80px;
}
.scoreDiv {
    height: 100px;
}
</style>
