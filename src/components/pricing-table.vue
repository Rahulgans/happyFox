
<template>

  <div class="hf__pricing-table-container">

    <div class="hf__row" ref="pricingTableHeader">
      
      <div class="hf__col-12 hf__pricing-table-header" :class="{'hf__pricing-table-header--fixed': isTableHeaderFixed}">

        <div class="hf__container hf__pricing-table-header-block">

          <div class="hf__row">
          
            <div class="hf__col-4">
              
              <p class="hf__pricing-table-title">Compare All Plans</p>

            </div>

            <div class="hf__col-8">

              <div class="hf__row">

                <div class="hf__col-3" v-for="(pricingItem, index) in pricingTableHeader">
                  
                  <h3 class="hf__pricing-plan-heading" 

                  :class="{'hf__pricing-plan-card--mighty': pricingItem.plan_type == 'Mighty',

                    'hf__pricing-plan-card--fantastic': pricingItem.plan_type == 'Fantastic', 

                    'hf__pricing-plan-card--enterprise': pricingItem.plan_type == 'Enterprise',

                    'hf__pricing-plan-card--plus': pricingItem.plan_type == 'Enterprise Plus'}">

                      {{ pricingItem.plan_type }}

                  </h3>

                  <span class="hf__pricing-support--text">${{ pricingItem.plan_price_monthly }}/mo</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="hf__container">

        <div class="hf__col-12 hf__pricing-table-section" v-for="(featureSection, index) in pricingTable">
          
          <h5 class="hf__pricing-table-section-title hf__primary--text">{{ featureSection.title }}</h5>

          <div class="hf__row hf__pricing-feature-row" v-for="(field, index) in featureSection.fields" 

          :class="{'hf__pricing-feature-row--body': featureSection.title == 'pricing'}">
            
            <div class="hf__col-12">
              
              <div class="hf__row">
                
                <div class="hf__col-4">
                    
                  <p class="hf__pricing-table-feature-title">{{ field.sub_title }}

                    <span v-show="field.status_planned">*</span>

                  </p>

                </div>

                <div class="hf__col-8">
                  
                  <div class="hf__row">
                    
                    <div class="hf__col-3">
                      
                      <p v-if="typeof field.mighty_plan === 'boolean'" class="hf__pricing-table-plan-values">

                        <span v-show="field.mighty_plan">

                          <img src="https://hfweb-assets.s3.amazonaws.com/v2/images/pricing-tick.svg">

                        </span>

                        <span v-show="!field.mighty_plan">

                          <img src="https://hfweb-assets.s3.amazonaws.com/v2/images/pricing-no-tick.svg">

                        </span>

                      </p>

                      <p v-else class="hf__pricing-table-plan-values">{{ field.mighty_plan }}</p>

                    </div>

                    <div class="hf__col-3">
                      
                      <p v-if="typeof field.fantastic_plan === 'boolean'" class="hf__pricing-table-plan-values">

                        <span v-show="field.fantastic_plan">

                          <img src="https://hfweb-assets.s3.amazonaws.com/v2/images/pricing-tick.svg">

                        </span>

                        <span v-show="!field.fantastic_plan">

                          <img src="https://hfweb-assets.s3.amazonaws.com/v2/images/pricing-no-tick.svg">

                        </span>

                      </p>

                      <p v-else class="hf__pricing-table-plan-values">{{ field.fantastic_plan }}</p>

                    </div>

                    <div class="hf__col-3">
                      
                      <p v-if="typeof field.enterprise_plan === 'boolean'" class="hf__pricing-table-plan-values">

                        <span v-show="field.enterprise_plan">

                          <img src="https://hfweb-assets.s3.amazonaws.com/v2/images/pricing-tick.svg">

                        </span>

                        <span v-show="!field.enterprise_plan">

                          <img src="https://hfweb-assets.s3.amazonaws.com/v2/images/pricing-no-tick.svg">

                        </span>

                      </p>

                      <p v-else class="hf__pricing-table-plan-values">{{ field.enterprise_plan }}</p>

                    </div>

                    <div class="hf__col-3">
                      
                      <p v-if="typeof field.enterprise_plus_plan === 'boolean'" class="hf__pricing-table-plan-values">

                        <span v-show="field.enterprise_plus_plan">

                          <img src="https://hfweb-assets.s3.amazonaws.com/v2/images/pricing-tick.svg">

                        </span>

                        <span v-show="!field.enterprise_plus_plan">

                          <img src="https://hfweb-assets.s3.amazonaws.com/v2/images/pricing-no-tick.svg">

                        </span>

                      </p>

                      <p v-else class="hf__pricing-table-plan-values">{{ field.enterprise_plus_plan }}</p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div class="hf__pricing-table-action">

          <p class="hf__pricing-feature-planned--text"><span class="hf__pricing-legend--symbol">*</span>Planned</p>

          <hf-button-component :onClickAction="scheduleDemo" class="hf__primary-btn hf__schedule-btn">Schedule a Demo</hf-button-component>

        </div>

      </div>

    </div>

  </div>


</template>

<script>

  import Vue from 'vue';

  import hfButtonComponent from './button.vue';

  import throttle from 'lodash.throttle';

  export default {

    name: 'pricing-table',

    props: ['pricingTable', 'pricingTableHeader'],

    components: {

      hfButtonComponent

    },

    data() {

      return {

        isTableHeaderFixed: false

      }
      
    },

    computed: {

          
    },

    created() {


    },
    
    mounted() {

      document.addEventListener('scroll', this.fixHeaderOnScroll);


    },

    methods: {

      fixHeaderOnScroll: throttle(function() { // throttle scroll event

        this.getTableHeaderPosition();

      },200),

      getTableHeaderPosition() {

        let tableHeaderPosition = this.$refs.pricingTableHeader.getBoundingClientRect().top;

        let navbar = document.getElementsByClassName('hf__navigation')[0];

        if(tableHeaderPosition < navbar.clientHeight && !this.isTableHeaderFixed) {

          let pricingTableHeader = document.getElementsByClassName('hf__pricing-table-header')[0];

          this.isTableHeaderFixed = true;

          pricingTableHeader.style.top = navbar.clientHeight + 'px';

        } else if(tableHeaderPosition > navbar.clientHeight) {

          this.isTableHeaderFixed = false;

        }

      },

      scheduleDemo() {

        return

      }

    },


    beforeDestroy() {

      document.removeEventListener('scroll', this.fixHeaderOnScroll)

    }


  }

</script>

<style scoped>


.hf__pricing-table-container {

  padding-bottom: 24px;

}

.hf__pricing-table-title {

  font-size: 20px;

  color: #989DAD;

}

.hf__pricing-table-header {

  padding-top: 16px;

}

.hf__pricing-table-header--fixed {

  position: fixed;

  width: 100%;

  background-color: white;

  z-index: 8;

  box-shadow: 0 6px 30px 0 rgba(0,0,0,0.05);

}

.hf__pricing-table-header-block {

  padding-bottom: 24px;

  border-bottom: 1px solid rgba(179, 179, 179, 0.25);

}

.hf__pricing-table-section {

  margin-top: 32px;

}

.hf__pricing-table-section-title {

  font-size: 16px;

  font-weight: 500;

  text-transform: uppercase;

  margin-bottom: 16px;

}

.hf__pricing-feature-row {

  padding: 12px 0px;

  background-color: white;

}

.hf__pricing-feature-row--body p {

  color: black;

  font-weight: 400;

}

.hf__pricing-feature-row:nth-child(2n+1) {

  padding: 6px 0px;

  background-color: #FAFAFA;

}

.hf__pricing-table-feature-title {

  font-size: 16px;

  font-weight: 300;

  text-transform: capitalize;

  padding-right: 6px;

  margin-bottom: 0px;

}

.hf__pricing-table-plan-values {

  margin-bottom: 0px;

  font-weight: 300;

}

.hf__pricing-table-action {

  margin: 56px 0px;

  text-align: center;

}

.hf__pricing-feature-planned--text {

  text-align: left;

}

.hf__pricing-legend--symbol {

  padding-right: 8px;

  font-weight: 300;

}

</style>
