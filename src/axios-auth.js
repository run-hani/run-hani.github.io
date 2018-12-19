import axios from 'axios'
import Router from "./router";
import { mapActions } from 'vuex'

const instance = axios.create({
	baseURL: 'https://hanirunk.cafe24app.com'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
