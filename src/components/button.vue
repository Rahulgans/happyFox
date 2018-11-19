
<template>

  <button class="hf__btn" @click="onClickAction">
    
    <slot>Button></slot>

  </button>

</template>

<script>

  import Vue from 'vue';

  export default {

    name: 'hf-button',

    props: ['onClickAction'],

    data() {

      return {


      }
      
    },

    computed: {

          
    },

    created() {


    },
    
    mounted() {


    },

    methods: {


    }

  }

</script>

<style scoped>

  .hf__btn {

    border: none;

    text-align: center;

    user-select: none;

    cursor: pointer;

  }


</style>
