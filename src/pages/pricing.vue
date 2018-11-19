
<template>

  <div class="hf__row">
    
    <div class="hf__col-12">
      
      <pricing-toggle-component :pricingPlan="pricingPlanData"></pricing-toggle-component>

      <pricing-table-component :pricingTable="pricingFeaturesTable" :pricingTableHeader="pricingPlanData">
        
      </pricing-table-component>

    </div>

  </div>

</template>

<script>

  import Vue from 'vue';

  import pricingToggleComponent from '../components/pricing-toggle.vue';

  import Axios from 'axios';

  import pricingTableComponent from '../components/pricing-table.vue';

  export default {

    name: 'pricing-page',

    props: [],

    components: {

      pricingToggleComponent,

      pricingTableComponent

    },

    data() {

      return {

        pricingPlanData: [],

        pricingFeaturesTable: []

      }
    
    },

    computed: {

        
    },

    created() {

      Axios.get('../../assets/appData.json')

      .then((response) => {

        this.pricingPlanData = response.data.appData.pricingOptions;

        this.pricingFeaturesTable = response.data.appData.pricingFeatures


      }).catch((error) => {

        console.log(error);

      })

    },
  
    mounted() {


    },

    methods: {


    }

  }

</script>

<style scoped>

</style>

