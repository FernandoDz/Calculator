<script setup lang="ts">
import { Input } from "postcss";
import { ref } from "vue";
//variable reactiva//
let Boton = ref<string>("");

function Resultado() {
    let text = eval(Boton.value);
     Boton.value=text;
}
function Limpiar() {
     Boton.value= "";
}

</script>
<template>
    <!--Creamos distintos botones -->
    <div class="w-screen h-screen flex justify-center items-center">
     <div class=" w-96 h-96  p-5  bg-[#0d0d0d] flex flex-col rounded-lg">
        <input  @click="Resultado" readonly disabled v-model="Boton" placeholder="0" class=" w-80 h-12 mx-4 p-4 text-lg text-white text-end bg-[#1f1f1f] rounded-lg">
        <div class="w-full grid grid-cols-4 p-1">
            <button  @click="Limpiar" class=" text-lg bg-red-600 p-2 rounded-lg text-white w-18 m-2" >AC</button>
            <button @click="Boton += '*'" class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2" >X</button>
            <button @click="Boton +='/'"  class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2" >÷</button>
            <button @click="Boton +='+'"  class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2" >+</button>
            <button  @click="Boton +='7'"  class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">7</button>
            <button @click="Boton +='8'"  class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2 " >8</button>
            <button  @click="Boton +='9'"  class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2 " >9</button>
            <button @click="Boton +='-'"  class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18  m-2">-</button>
            <button  @click="Boton +='5'"  class="bg-gray-500 text-lg  p-2 rounded-lg text-white w-18 m-2">5</button>
            <button @click="Boton +='6'"  class="bg-gray-500  text-lg p-2 rounded-lg text-white w-18 m-2" >6</button>
            <button  @click="Boton +='7'"  class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2" >7</button>
            <button @click="Resultado"   class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2" >=</button>
            <button  @click="Boton +='1'"  class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">1</button>
            <button @click="Boton +='2'"  class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">2</button>
            <button  @click="Boton +='3'"  class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">3</button>
            <button  @click="Boton +='0'"   class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">0</button>
        </div>
     </div>
    </div>
</template>
