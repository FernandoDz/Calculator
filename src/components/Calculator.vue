<script setup lang="ts"></script>
<template>
    <div class="w-screen h-screen flex justify-center items-center">
     <div class=" w-96 h-96  p-5  bg-[#0d0d0d] flex flex-col rounded-lg">
        <input placeholder="0" class=" w-80 h-12 mx-4 p-4 text-lg text-white text-end bg-[#1f1f1f] rounded-lg">
        <div class="w-full grid grid-cols-4 p-1">
            <button class=" text-lg bg-red-600 p-2 rounded-lg text-white w-18 m-2 ">AC</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">X</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2  ">÷</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2 ">+</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">7</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2 ">8</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2 ">9</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18  m-2">-</button>
            <button class="bg-gray-500 text-lg  p-2 rounded-lg text-white w-18 m-2">5</button>
            <button class="bg-gray-500  text-lg p-2 rounded-lg text-white w-18 m-2">6</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">7</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">=</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">1</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">2</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">3</button>
            <button class="bg-gray-500 text-lg p-2 rounded-lg text-white w-18 m-2">0</button>
        </div>
     </div>
    </div>
</template>
