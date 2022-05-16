import Vue from 'vue'
import App from './App.vue'

import "@fontsource/open-sans"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/600.css"

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faUserSecret, faMagnifyingGlass, faChevronDown, faBars, faBullhorn, faBriefcase, faChartColumn, faPalette, faGear, faFaceSmile, faPrint, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBookmark } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faUserSecret, faMagnifyingGlass, faChevronDown, faFacebook, faTwitter, faInstagram, faLinkedin, faGooglePlus, faYoutube, faBars, faUser, faBookmark, faBullhorn, faBriefcase, faChartColumn, faPalette, faGear, faFaceSmile, faPrint, faChevronRight)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')