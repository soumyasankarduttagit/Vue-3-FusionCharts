import { createApp } from "vue";
import App from "./App.vue";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import Power from "fusioncharts/fusioncharts.powercharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

//import Charts from './components/Charts'

const app = createApp(App);
//app.component('Charts', Charts);
app.use(VueFusionCharts, FusionCharts, Power, FusionTheme);
app.mount("#app");
