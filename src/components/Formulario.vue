<script setup lang="ts">
import Login from '../login.ts'

let email ='';
let password='';
const onSubmit  =async () => {
   await Login (email,password)
}

</script>
<template>
    <div class="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-[#CC95C0,#DBD4B4] to-[#7AA1D2]">
    <div class="bg-white rounded-lg w-96 flex  flex-col  justify-center items-center ">
    <h2 class=" text-xl  m-3 text-not-italic text-[#6b6b83]">Inicio de Sesión</h2>
     <input type="email" v-model="email" placeholder="Email" class="m-3  w-80 outline-none h-8 rounded-lg drop-shadow-xl">
      <input v-model="password" placeholder="Password" type="password" class="m-3 outline-none w-80 h-8 rounded-lg drop-shadow-xl">
      <button @click="onSubmit" class=" bg-gray-500 text-white w-32 m-3 items-center rounded-lg h-8 hover:bg-[#E684AE] active:bg-[#E684AE] focus:outline-none focus:ring focus:ring-[#E684AE]" >Enviar</button>
    </div>

    </div>

</template>
<style>
</style>