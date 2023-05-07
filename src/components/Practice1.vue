<script setup lang="ts">
let Numero = 101;
if (Numero >= 5 &&  Numero<=10) {
    console.log("la condicion es buena")
}else{
    console.log('La condicion es mala')
}
//operador ternario // 
// ? si//
// : no//
Numero >=10 ? console.log('La condicion es ok')  : Numero <=20 && console.log('La condicion es mala ')

</script>

<template>
    <!---directivas-->
    <h3 v-if="Numero>=10">Practice1</h3>
    <h4 v-else>:o</h4>
    <h5 v-show="Numero>100">Hola</h5>

</template>

<style>

</style>