
<template>

  <div class="hf__row">
    
    <div class="hf__col-12 hf__pricing-toggle-bg">

      <div class="hf__container">
        
        <h1 class="hf__pricing-heading">Simple and Affordable <span class="hf__pricing-heading--light">Help Desk Software.</span></h1>

        <div class="hf__pricing-action-block">
            
          <hf-button-component :onClickAction="toggleAnnualPricing" class="hf__pricing-btn" 

            :class="{'hf__pricing-btn--active': pricingTypeAnnual}">Pay Annually</hf-button-component>

          <hf-button-component :onClickAction="toggleMonthlyPricing" class="hf__pricing-btn" 

            :class="{'hf__pricing-btn--active': !pricingTypeAnnual}">Pay Monthly</hf-button-component>

        </div>

        <div class="hf__pricing-card-container">

          <div class="hf__pricing-plan-card" :class="{'hf__pricing-plan-card--mighty': pricingItem.plan_type == 'Mighty',

          'hf__pricing-plan-card--fantastic': pricingItem.plan_type == 'Fantastic', 

          'hf__pricing-plan-card--enterprise': pricingItem.plan_type == 'Enterprise',

          'hf__pricing-plan-card--plus': pricingItem.plan_type == 'Enterprise Plus'}" 

          v-for="(pricingItem,index) in pricingPlan">

            <p class="hf__pricing-plan--best" v-show="pricingItem.plan_type == 'Fantastic'">

              <span >Best value</span>

            </p>

            <h3 class="hf__pricing-plan-heading">{{ pricingItem.plan_type }}</h3>

            <p class="hf__pricing-plan-amount">

              <span class="hf__pricing-plan-dollar">$</span>

              <span v-if="!pricingTypeAnnual">{{ pricingItem.plan_price_monthly }}</span>

              <span v-else>{{ pricingItem.plan_price_annual }}</span>

            </p>

            <span class="hf__pricing-support--text">per agent/mo</span>

          </div>

        </div>

        <hf-button-component :onClickAction="scheduleDemo" class="hf__primary-btn hf__schedule-btn">Schedule a Demo</hf-button-component>

        <p class="hf__pricing-toggle-note">All plans come with SSL security, unlimited tickets, smart business rules, knowledge base, multilingual support, rich text formatting in tickets and iOS & Android apps. All plans require a minimum of 3 help desk agent.</p>

      </div>

    </div>

  </div>

</template>

<script>

  import Vue from 'vue';

  import hfButtonComponent from './button.vue';

  export default {

    name: 'pricing-toggle',

    props: ['pricingPlan'],

    components: {

      hfButtonComponent

    },

    data() {

      return {

        pricingTypeAnnual: true

      }
      
    },

    computed: {

          
    },

    created() {


    },
    
    mounted() {


    },

    methods: {

      toggleAnnualPricing() {

        this.pricingTypeAnnual = true;

      },

      toggleMonthlyPricing() {

        this.pricingTypeAnnual = false;

      },

      scheduleDemo() {

        return

      }


    }

  }

</script>

<style scoped>

.hf__pricing-toggle-bg {

  padding-top: 120px;

  text-align: center;

  background-image: url(https://hfweb-assets.s3.amazonaws.com/v2/images/pricing-banner-bg.svg);

  background-repeat: no-repeat;

}

.hf__pricing-heading {

  font-size: 24px;

  font-weight: 600;

  word-spacing: 3px;

}

.hf__pricing-heading--light {

  font-weight: 300;

}

.hf__pricing-action-block {

  display: flex;

  justify-content: center;

  margin-top: 32px;

  margin-bottom: 64px;

}

.hf__pricing-btn {

  font-size: 13px;

  padding: 7px 10px;

  border-radius: 3px;

  background-color: #EAEBEF;

}

.hf__pricing-btn--active {

  background-color: black;

  color: white;

  border-radius: 6px;

}

.hf__pricing-btn--active:hover {

  cursor: default;

}

.hf__pricing-card-container {

  display: flex;

  flex-wrap: wrap;

  justify-content: center;

}

.hf__pricing-plan-card {

  position: relative;

  height: 184px;

  padding: 32px 0px 40px 0px;

  flex-basis: 232px;

  margin-right: 24px;

  margin-bottom: 16px;

  border-top: 4px solid;

  border-radius: 4px;

  background-color: white;

  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);

}

.hf__pricing-plan--best {

  position: absolute;

  top: -24px;

  height: 24px;

  line-height: 24px;

  letter-spacing: 0.5px;

  width: 100%;

  font-size: 14px;

  border-top-right-radius: 4px;

  border-top-left-radius: 4px;

  background-color: #E2434B;

  color: white;

  text-transform: uppercase;

}


.hf__pricing-plan-dollar {

  font-size: 20px;

  font-weight: 500;

  vertical-align: 3px;

}

.hf__pricing-plan-amount {

  font-weight: 600;

  font-size: 24px;

  color: black;

  margin: 16px 0px 8px 0px;

}

.hf__pricing-plan-card--mighty {

  border-color: #08C299;

  color: #08C299;

}

.hf__pricing-plan-card--fantastic {

  color: #E2434B;

  border: none;

  height: 200px;

  border-top-right-radius: 0px;

  border-top-left-radius: 0px;

}

.hf__pricing-plan-card--enterprise {

  border-color: 3px solid #429FFD;

  color: #429FFD;

}

.hf__pricing-plan-card--plus {

  border-color: #EF6C35;

  color: #EF6C35;

}

.hf__pricing-plan-card:last-of-type {

  margin-right: 0px;

}

.hf__schedule-btn {

  margin-top: 16px;

  margin-bottom: 32px;

}

.hf__pricing-toggle-note {

  font-weight: 300;

  margin-bottom: 168px;

}


@media screen and (max-width: 768px) {

  .hf__pricing-plan-card {

    flex-basis: 50%;

  }

}


</style>
