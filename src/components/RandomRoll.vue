<template>
    <div>
        <h2>Get Random Roll</h2>
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
        <div>
            <label class="inputLabel">
                <b>Score: </b>
                <input class="score" type="number" id="score" name="score" disabled>
            </label>
        </div>
    </div>
</template>

<script>

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
</style>
