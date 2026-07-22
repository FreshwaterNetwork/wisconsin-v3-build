<template>
  <div class="q-pt-none">
    <q-splitter
      style="overflow: hidden"
      v-model="splitterModel"
      unit="px"
      :limits="[55, 130]"
    >
      <template v-slot:before>
        <q-tabs
          dark
          v-model="tab"
          vertical
          class="text-primary"
          active-color="white"
          active-bg-color="primary"
          indicator-color="white"
          dense
        >
          <!--each tab has two presentations, full or condensed, based on the size of the screen-->

          <q-separator></q-separator>
          <q-route-tab
            v-if="!$store.state.condensedTabs && !smallScreen"
            style="padding: 10px; height: 31.5vh"
            to="/get-started"
            name="get-started"
          >
            <q-icon name="fas fa-info" size="sm" />
            Get <br />Started
          </q-route-tab>
          <q-route-tab
            v-if="$store.state.condensedTabs || smallScreen"
            style="padding: 10px"
            to="/get-started"
            name="get-started"
          >
            <q-icon name="fas fa-info" size="lg"></q-icon>
          </q-route-tab>
          <q-separator></q-separator>
          <q-route-tab
            v-if="!$store.state.condensedTabs && !smallScreen"
            style="padding: 10px; height: 31.5vh"
            to="/wetlands-by-design"
            name="wetlands-by-design"
            @click="this.wbdApp = true"
          >
            <q-icon name="fas fa-water" size="sm"></q-icon>
            Wetlands <br />By Design
          </q-route-tab>
          <q-route-tab
            v-if="$store.state.condensedTabs || smallScreen"
            style="padding: 10px"
            to="/wetlands-by-design"
            name="wetlands-by-design"
            @click="this.wbdApp = true"
          >
            <q-icon name="fas fa-water" size="lg"></q-icon>
          </q-route-tab>
          <q-separator></q-separator>
          <q-route-tab
            v-if="!$store.state.condensedTabs && !smallScreen"
            style="padding: 10px; height: 31.5vh"
            to="/protecting-groundwater"
            name="protecting-groundwater"
            @click="this.wbdApp = false"
          >
            <q-icon name="fas fa-hand-holding-water" size="sm"></q-icon>
            Protecting <br />
            Groundwater <br />
            Dependent <br />
            Ecosystems</q-route-tab
          >
          <q-route-tab
            v-if="$store.state.condensedTabs || smallScreen"
            style="padding: 10px"
            to="/protecting-groundwater"
            name="protecting-groundwater"
            @click="this.wbdApp = false"
          >
            <q-icon name="fa fa-hand-holding-water" size="lg"></q-icon>
          </q-route-tab>
          <q-separator></q-separator>
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels v-model="tab" animated vertical keep-alive>
          <q-tab-panel
            name="get-started"
            class="q-pr-none q-pl-lg q-pt-lg q-pb-lg"
          >
            <q-scroll-area
              id=""
              class="panel panelM"
              :thumb-style="{ width: '7px' }"
            >
              <div class="q-mr-lg">
                <keep-alive><get-started></get-started></keep-alive>
              </div>
            </q-scroll-area>
          </q-tab-panel>

          <q-tab-panel
            name="wetlands-by-design"
            class="q-pr-none q-pl-lg q-pt-lg q-pb-lg"
          >
            <q-scroll-area
              id=""
              class="panel panelM"
              :thumb-style="{ width: '7px' }"
            >
              <div class="q-mr-lg">
                <keep-alive
                  ><wetlands-by-design></wetlands-by-design
                ></keep-alive>
              </div>
            </q-scroll-area>
          </q-tab-panel>

          <q-tab-panel
            name="protecting-groundwater"
            class="q-pr-none q-pl-lg q-pt-lg q-pb-lg"
          >
            <q-scroll-area
              id=""
              class="panel panelM"
              :thumb-style="{ width: '7px' }"
            >
              <div class="q-mr-lg">
                <keep-alive
                  ><protecting-groundwater></protecting-groundwater
                ></keep-alive>
              </div>
            </q-scroll-area>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import { useMapStore } from '../store/index';
import IconButton from './UI/IconButton.vue';
import Tooltip from './UI/Tooltip.vue';
import GetStarted from './AppTools/GetStarted.vue';
import WetlandsByDesign from './AppTools/WetlandsByDesign.vue';
import ProtectingGroundwater from './AppTools/ProtectingGroundwater.vue';

const $q = useQuasar();
const ms = useMapStore();
const smallScreen = computed(() => $q.screen.lt.md);

let tab = 'supporting';
let splitterModel = ms.splitterModel;
</script>

<style scoped>
#panel-title {
  display: flex;
}
</style>
