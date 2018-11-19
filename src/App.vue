

<template>

  <div>

    <navbar :productFeatures="pricingProductFeatures"></navbar>

    <pricing-page class="hf__pricing-container" :pricingPlanData="pricingPlanData" :pricingFeaturesTable="pricingFeaturesTable">
      

    </pricing-page>

  </div>

</template>

<script>

import Vue from 'vue';

import navbar from './components/navbar.vue';

import pricingPage from './pages/pricing.vue';

import Axios from 'axios';

export default {

  name: 'App',

  components: {

    navbar,

    pricingPage

  },

  data() {

    return {

      pricingPlanData: [],

      pricingFeaturesTable: [],

      pricingProductFeatures: []


    }

  },

  created() { // data available but DOM not yet ready


    Axios.get('../../assets/appData.json')

    .then((response) => {

      this.pricingPlanData = response.data.appData.pricingOptions;

      this.pricingFeaturesTable = response.data.appData.pricingFeatures;

      this.pricingProductFeatures = response.data.appData.productFeatures;


    }).catch((error) => {

      console.log(error);

    })

  },

  mounted() {

    // data available & DOM ready


  },

  methods: {



  },

  beforeDestroy() {


  }

}

</script>

<style>

.hf__pricing-container {

  padding-top: 75px;

}


</style>
