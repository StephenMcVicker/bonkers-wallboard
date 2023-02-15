import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCar,
  faCreditCard,
  faHandHoldingDollar,
  faHouse,
  faHouseLock,
  faHouseUser,
  faLightbulb,
  faLifeRing,
  faMoneyBillTransfer,
  faMoneyBillTrendUp,
  faPersonWalkingWithCane,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUser); // regular
library.add(
  faCar,
  faCreditCard,
  faHandHoldingDollar,
  faHouse,
  faHouseLock,
  faHouseUser,
  faLifeRing,
  faLightbulb,
  faMoneyBillTransfer,
  faMoneyBillTrendUp,
  faPersonWalkingWithCane,
  faWifi
); // solid

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
