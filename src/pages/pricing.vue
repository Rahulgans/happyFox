
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

  import pricingTableComponent from '../components/pricing-table.vue';

  export default {

    name: 'pricing-page',

    props: ['pricingPlanData', 'pricingFeaturesTable'],

    components: {

      pricingToggleComponent,

      pricingTableComponent

    },

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

</style>

