
<template>

  <header class="hf__navigation">

    <div class="hf__container">
    
      <div class="hf__row hf__navigation-row">

        <div class="hf__col-2">
          
          <a class="hf__logo-link" href="https://www.happyfox.com/help-desk-price/">
            
            <img src="https://hfweb-assets.s3.amazonaws.com/v2/images/Help-desk-customer-support.svg" class="hf__logo"

            alt="happyfox logo">

          </a>

        </div>

        <div class="hf__col-7">

          <ul class="hf__list hf__navigation-menuList">
            
            <li class="hf__navigation-list-item" v-for="(productType, index) in productFeatures">

              <a class="hf__navigation-link" href="#">{{ productType.category }}</a>

              <!-- <div class="hf__navigation-dropdown" v-show="currentIndex == index">

                <div class="hf__container">
                
                  <div class="hf__navigation-dropdown-block">
                    
                    <div class="hf__row">

                      <div class="hf__col-3">
                        
                        <p class="hf__navigation-dropdown-title">{{ productType.category }}</p>

                      </div>


                    </div>

                  </div>

                </div>

              </div> -->

            </li>


          </ul>

        </div>

        <div class="hf__col-3">

          <div class="hf__navigation-actionList">

            <a href="#" class="hf__login-link">Login</a>
          
            <hf-button-component :onClickAction="scheduleDemo" class="hf__demo-btn hf__primary-btn">See a Demo</hf-button-component>

          </div>

        </div>
      
      </div>

    </div>


  </header>

</template>

<script>

  import Vue from 'vue';

  import hfButtonComponent from './button.vue';


  export default {

    name: 'navbar',

    components: {

      hfButtonComponent

    },

    props: ["productFeatures"],

    data() {

      return {

        currentIndex: -1,

      }
      
    },

    computed: {

          
    },

    created() {


    },
    
    mounted() {


    },

    methods: {

      scheduleDemo() {

        return

      },

      onListItemHover(index) {

        this.currentIndex = index;

      },

      onListItemBlur(index) {

        this.currentIndex = -1;

      }

    }

  }

</script>

<style scoped>

  .hf__navigation {

    position: fixed;

    width: 100%;

    background-color: white;

    z-index: 10;

    box-shadow: 0 0 30px 0 rgba(0,0,0,0.05);

  }

  .hf__navigation-row {

    padding-top: 24px;

  }

  .hf__logo--text {

    font-size: 24px;

    font-weight: 600;

  }

  .hf__navigation-menuList {

    display: flex;

  }

  .hf__navigation-list-item {

    padding: 0px 0px 27px 0px;

    margin-right: 10px;

    cursor: pointer;

  }

  .hf__navigation-link {

    text-transform: capitalize;

    padding: 5px 10px;

  }

  .hf__navigation-dropdown {

    position: absolute;

    right: 0;

    left: 0;

    top: 100%;

    background-color: white;

    z-index: 10;

  }

  .hf__navigation-dropdown-title {

    font-size: 24px;

    font-weight: 300;

    text-transform: capitalize;

  }

  .hf__navigation-dropdown-block {

    display: flex;

    padding: 24px 0px;

  }

  .hf__navigation-list-item:hover .hf__navigation-link {

    background-color: #EAEBEF;

    border-radius: 3px;

  }

  .hf__navigation-actionList {

    margin-left: auto;

  }

  .hf__login-link {

    padding: 7px 10px;

  }

  .hf__login-link:hover {

    color: gray;

  }

  .hf__demo-btn {

    padding: 8px 24px;

    margin-left: 10px;

  }


</style>
