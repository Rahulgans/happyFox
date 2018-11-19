
 import Axios from 'axios';

export default {

	data () {

		return {


		}

	},

	methods: {

		$_mixin_getAppData() {

			Axios.get('../../assets/appData.json')

    	.then((response) => {

        return response.data ;


      	}).catch((error) => {

        	console.log(error);

    	})

    }

	}

}