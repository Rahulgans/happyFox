

<template>

  <div>

    <navbar></navbar>

    <pricing-page class="hf__pricing-container"></pricing-page>

  </div>

</template>

<script>

import Vue from 'vue';

import navbar from './components/navbar.vue';

import pricingPage from './pages/pricing.vue';

export default {

  name: 'App',

  components: {

    navbar,

    pricingPage

  },

  data() {

    return {


    }

  },

  created() {

    // data available but DOM not yet ready

  },

  mounted() {

    // data available & DOM ready

  },

  methods: {



  }

}

</script>

<style>

.hf__pricing-container {

  padding-top: 75px;

}


</style>
