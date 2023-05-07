<script setup lang="ts">
import { ref } from "vue";
//variable reactiva//
let NumeroIngresado = ref<number>(0);
// let  Name: string ="Jose";
//let Numeros = ref<Array<number>>([1,2,3,4,5,6]);
let Numeros = ref<number[]>([1,2,3,4,5,6,7,8,9,10]);
function AgregarNumero() {
    Numeros.value.push(Numeros.value.length +1)
}
//multiplicacion de un numero ingresado en un input//
function NuevoNumero() {
    Numeros.value.map((numero)=>{
        console.log(`${numero} * ${NumeroIngresado.value} =${numero*NumeroIngresado.value}`)
    })
}
//mostrar en consola los numeros pares//
function NumeroPar() {
    const Numeropar  = Numeros.value.filter((numero)=> numero %2 === 0)
    return Numeropar;
    
}
function NumeroImpar() {
    const Numeroimpar  = Numeros.value.filter((numero)=> numero %2 !== 0)
    console.log(Numeroimpar)
    return Numeroimpar;
    
}

function MultiplicarNumeros() {
 NumeroImpar().map((numero) =>{
    console.log(`${numero} * ${NumeroIngresado.value} =${numero*NumeroIngresado.value}`)
   });
}

//const NumeroAgregado =() =>{}
</script>

<template>
  
  <input type="number" v-model="NumeroIngresado" />
  <button @click="AgregarNumero">Change</button>
   <button @click="NumeroPar">Numero Par</button>
   <button @click="NumeroImpar">Numero  Impar</button>
   <button @click="MultiplicarNumeros">Multiplicar</button>
  <ul>
    <li v-for="numero in Numeros">{{ numero }}</li>
  </ul>
  <button id="New" @click="NuevoNumero">New</button>
</template>

<style>

</style>
