<template>
  <arcgis-map
    id="map"
    item-id="938be536dadf4709a650211ac955581a"
    @arcgisViewReadyChange="onReady"
  >
    <arcgis-placement position="top-right">
      <div id="info">
        <span id="name"></span>
        <span id="huc"></span>
      </div>
    </arcgis-placement>
    <arcgis-scale-bar position="bottom-right" unit="dual"></arcgis-scale-bar>
    <arcgis-expand
      close-on-esc
      position="bottom-left"
      mode="floating"
      collapse-tooltip="Hide Legend"
      expand-tooltip="Legend"
    >
      <arcgis-legend legend-style="classic"></arcgis-legend>
    </arcgis-expand>
    <arcgis-expand close-on-esc position="top-right" mode="floating">
      <arcgis-basemap-gallery
        position="top-right"
        :source="source"
      ></arcgis-basemap-gallery>
    </arcgis-expand>
    <arcgis-home position="top-left"></arcgis-home>
    <arcgis-zoom position="top-right"></arcgis-zoom>
    <arcgis-expand position="top-right" mode="floating">
      <arcgis-search popupDisabled="true"></arcgis-search>
    </arcgis-expand>
    <arcgis-placement position="top-left">
      <div id="toolbarDiv" class="esri-component esri-widget">
        <button
          id="distance"
          class="esri-widget--button esri-interactive esri-icon-measure-line esriCustomButton"
          title="Distance Measurement Tool"
          @click="activateLineMeasurement()"
        ></button>
        <button
          id="area"
          class="esri-widget--button esri-interactive esri-icon-measure-area esriCustomButton"
          title="Area Measurement Tool"
          @click="activateAreaMeasurement()"
        ></button>
        <button
          id="clear"
          class="esri-widget--button esri-interactive esri-icon-trash esriCustomButton"
          title="Clear Measurements"
          @click="clearMeasurements()"
        ></button>
        <button
          id="printBtn"
          class="esri-widget--button esri-interactive esri-icon-printer esriCustomButton"
          title="Print Map"
          @click="getMapPrint()"
        ></button>
      </div>
    </arcgis-placement>
  </arcgis-map>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, toRaw, watch } from 'vue';
import { useStore } from 'vuex';
import Portal from '@arcgis/core/portal/Portal';
import PortalBasemapsSource from '@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource';
import Measurement from '@arcgis/core/widgets/Measurement';
import { useMapStore } from '../store/index';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';
import Graphic from '@arcgis/core/Graphic.js';
import Point from '@arcgis/core/geometry/Point.js';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol.js';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer.js';
import Extent from '@arcgis/core/geometry/Extent.js';
import GroupLayer from '@arcgis/core/layers/GroupLayer.js';
import Circle from '@arcgis/core/geometry/Circle.js';

const WBD_FEATURE_SERVER_URL =
  'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_WetlandsByDesign/FeatureServer';

const ms = useMapStore();
const store = useStore();

const supportingMapVisibleLayers = computed(() => store.state.tree.tickedObj);
const supportingVisibleLayerOpacity = computed(
  () => store.state.supportingVisibleLayerOpacity,
);
const selectedFeatures = computed(() => store.state.selectedFeatures);
const locationValue = computed({
  get: () => store.state.locationValue,
  set: (value) => store.commit('updateLocationValue', value),
});
const removeHighlight = computed({
  get: () => store.state.removeHighlight,
  set: (value) => store.commit('updateRemoveHighlight', value),
});
const mapQuery = computed(() => store.state.mapQuery);
const addRaster = computed(() => store.state.addRaster);
const planType = computed(() => store.state.planType);
const featCounter = computed(() => store.state.featCounter);
const pointCoord = computed({
  get: () => store.state.pointCoord,
  set: (value) => store.commit('updatePointCoord', value),
});
const evalCircle = computed({
  get: () => store.state.evalCircle,
  set: (value) => store.commit('updateEvalCircle', value),
});
const circleFeatures = computed({
  get: () => store.state.circleFeatures,
  set: (value) => store.commit('updateCircleFeatures', value),
});
const resultsFeatures = computed({
  get: () => store.state.resultsFeatures,
  set: (value) => store.commit('updateResultsFeatures', value),
});
const nonCoordLoc = computed(() => store.state.nonCoordLoc);
const projectType = computed({
  get: () => store.state.projectType,
  set: (value) => store.commit('updateProjectType', value),
});
const wbdApp = computed(() => store.state.wbdApp);
const wetlandWatersheds = computed({
  get: () => store.state.wetlandWatersheds,
  set: (value) => store.commit('updateWetlandWatersheds', value),
});
const showServices = computed({
  get: () => store.state.showServices,
  set: (value) => store.commit('updateShowServices', value),
});
const hideNumServices = computed({
  get: () => store.state.hideNumServices,
  set: (value) => store.commit('updateHideNumServices', value),
});
const hideServices = computed({
  get: () => store.state.hideServices,
  set: (value) => store.commit('updateHideServices', value),
});
const showNumServices = computed({
  get: () => store.state.showNumServices,
  set: (value) => store.commit('updateShowNumServices', value),
});
const serviceType = computed({
  get: () => store.state.serviceType,
  set: (value) => store.commit('updateServiceType', value),
});
const serviceOption = computed({
  get: () => store.state.serviceOption,
  set: (value) => store.commit('updateServiceOption', value),
});
const rfOption = computed({
  get: () => store.state.rfOption,
  set: (value) => store.commit('updateRfOption', value),
});
const option = computed({
  get: () => store.state.option,
  set: (value) => store.commit('updateOption', value),
});
const hucHover = computed({
  get: () => store.state.hucHover,
  set: (value) => store.commit('updateHucHover', value),
});
const rangeOfService = computed({
  get: () => store.state.rangeOfService,
  set: (value) => store.commit('updateRangeOfService', value),
});
const guild = computed({
  get: () => store.state.guild,
  set: (value) => store.commit('updateGuild', value),
});
const optionLayers = computed(() => store.state.optionLayers);
const rfLayer = computed(() => store.state.rfLayer);
const serviceLayer = computed(() => store.state.serviceLayer);
const guildLayer = computed(() => store.state.guildLayer);
const removeGuild = computed({
  get: () => store.state.removeGuild,
  set: (value) => store.commit('updateRemoveGuild', value),
});
const watershedRange = computed({
  get: () => store.state.watershedRange,
  set: (value) => store.commit('updateWatershedRange', value),
});
const countOfServices = computed({
  get: () => store.state.countOfServices,
  set: (value) => store.commit('updateCountOfServices', value),
});
const floodAbatement = computed({
  get: () => store.state.floodAbatement,
  set: (value) => store.commit('updateFloodAbatement', value),
});
const fishAquaticHabitat = computed({
  get: () => store.state.fishAquaticHabitat,
  set: (value) => store.commit('updateFishAquaticHabitat', value),
});
const phosphorousRetention = computed({
  get: () => store.state.phosphorousRetention,
  set: (value) => store.commit('updatePhosphorousRetention', value),
});
const sedimentRetention = computed({
  get: () => store.state.sedimentRetention,
  set: (value) => store.commit('updateSedimentRetention', value),
});
const nitrogenReduction = computed({
  get: () => store.state.nitrogenReduction,
  set: (value) => store.commit('updateNitrogenReduction', value),
});
const surfaceWaterSupply = computed({
  get: () => store.state.surfaceWaterSupply,
  set: (value) => store.commit('updateSurfaceWaterSupply', value),
});
const shorelineProtection = computed({
  get: () => store.state.shorelineProtection,
  set: (value) => store.commit('updateShorelineProtection', value),
});
const carbonStorage = computed({
  get: () => store.state.carbonStorage,
  set: (value) => store.commit('updateCarbonStorage', value),
});
const floristicIntegrity = computed({
  get: () => store.state.floristicIntegrity,
  set: (value) => store.commit('updateFloristicIntegrity', value),
});
const watershedAcres = computed({
  get: () => store.state.watershedAcres,
  set: (value) => store.commit('updateWatershedAcres', value),
});
const wetlandId = computed({
  get: () => store.state.wetlandId,
  set: (value) => store.commit('updateWetlandId', value),
});
const overallFeas = computed({
  get: () => store.state.overallFeas,
  set: (value) => store.commit('updateOverallFeas', value),
});
const landUseCons = computed({
  get: () => store.state.landUseCons,
  set: (value) => store.commit('updateLandUseCons', value),
});
const invasiveSpeciesCons = computed({
  get: () => store.state.invasiveSpeciesCons,
  set: (value) => store.commit('updateInvasiveSpeciesCons', value),
});
const landOwnerCons = computed({
  get: () => store.state.landOwnerCons,
  set: (value) => store.commit('updateLandOwnerCons', value),
});
const loadingRf = computed({
  get: () => store.state.loadingRf,
  set: (value) => store.commit('updateLoadingRf', value),
});
const loadingComplete = computed({
  get: () => store.state.loadingComplete,
  set: (value) => store.commit('updateLoadingComplete', value),
});
const firstSelected = computed({
  get: () => store.state.firstSelected,
  set: (value) => store.commit('updateFirstSelected', value),
});
const previousSelected = computed(() => store.state.previousSelected);
const selectedData = computed({
  get: () => store.state.selectedData,
  set: (value) => store.commit('updateSelectedData', value),
});
const rfData = computed({
  get: () => store.state.rfData,
  set: (value) => store.commit('updateRfData', value),
});
const showCombined = computed({
  get: () => store.state.showCombined,
  set: (value) => store.commit('updateShowCombined', value),
});
const huc6Squares = computed({
  get: () => store.state.huc6Squares,
  set: (value) => store.commit('updateHuc6Squares', value),
});
const huc8Squares = computed({
  get: () => store.state.huc8Squares,
  set: (value) => store.commit('updateHuc8Squares', value),
});
let sliderOpacity = computed({
  get: () => store.state.sliderOpacity,
  set: (value) => store.commit('updateSliderOpacity', value),
});
const guildOpacity = computed({
  get: () => store.state.guildOpacity,
  set: (value) => store.commit('updateGuildOpacity', value),
});
const rfSelectLayer = computed({
  get: () => store.state.rfSelectLayer,
  set: (value) => store.commit('updateRfSelectLayer', value),
});
const layerChange = computed({
  get: () => store.state.layerChange,
  set: (value) => store.commit('updateLayerChange', value),
});
const wetlandLocation = computed({
  get: () => store.state.wetlandLocation,
  set: (value) => store.commit('updateWetlandLocation', value),
});
const locationSearch = computed({
  get: () => store.state.locationSearch,
  set: (value) => store.commit('updateLocationSearch', value),
});
const startDownload = computed({
  get: () => store.state.startDownload,
  set: (value) => store.commit('updateStartDownload', value),
});
const h6 = ref(false);
const h8 = ref(false);
const h10 = ref(false);
const h12 = ref(false);
const selectedHuc = ref('');
const upstreamFeatures = ref([
  {
    st: 'sfr_1',
    qt: 'Muk R. at Fox R.',
    lk: ['lk1', 'lk2', 'lk3', 'lk4', 'lk5', 'lk6', 'lk7', 'lk8'],
  },
  { st: 'sfr_2', qt: 'Muk Trib below I43', lk: [] },
  {
    st: 'sfr_3',
    qt: 'Muk R. below Holz Pkwy',
    lk: ['lk1', 'lk2', 'lk3', 'lk4', 'lk5', 'lk6', 'lk7', 'lk8'],
  },
  {
    st: 'sfr_4',
    qt: 'Muk R. below Lower Phantom Lake',
    lk: ['lk1', 'lk2', 'lk3', 'lk4', 'lk5', 'lk6', 'lk7', 'lk8'],
  },
  {
    st: 'sfr_5',
    qt: 'Muk R. at Lower Phantom Lake',
    lk: ['lk1', 'lk3', 'lk4', 'lk5', 'lk6', 'lk7', 'lk8'],
  },
  {
    st: 'sfr_6',
    qt: 'Muk R. below Beulah Rd',
    lk: ['lk3', 'lk4', 'lk6', 'lk7', 'lk8'],
  },
  { st: 'sfr_7', qt: 'Muk Trib at Muk R.', lk: ['lk1', 'lk5'] },
  { st: 'sfr_8', qt: 'Muk Trib below Lake Beulah', lk: ['lk1', 'lk5'] },
  { st: 'sfr_9', qt: 'Muk Trib at Town Line Rd', lk: ['lk5'] },
  {
    st: 'sfr_10',
    qt: 'Muk R. at Rainbow Spring Rd',
    lk: ['lk3', 'lk4', 'lk6', 'lk7', 'lk8'],
  },
  {
    st: 'sfr_11',
    qt: 'Muk R. below Eagle Spring Lake',
    lk: ['lk3', 'lk4', 'lk7', 'lk8'],
  },
  { st: 'sfr_12', qt: 'Jericho Ck at Co Rd LO', lk: [] },
  { st: 'sfr_13', qt: 'Jericho Ck at Co Rd NN', lk: [] },
  {
    st: 'sfr_14',
    qt: 'Muk R. at Eagle Spring Lake',
    lk: ['lk4', 'lk7', 'lk8'],
  },
  { st: 'sfr_15', qt: 'Muk R. at Lulu Lake', lk: ['lk7', 'lk8'] },
  { st: 'sfr_16', qt: 'Muk R. below Bluff Rd Fen', lk: ['lk7', 'lk8'] },
  { st: 'sfr_17', qt: 'Muk Trib below Bluff Rd Fen', lk: ['lk7'] },
  { st: 'sfr_18', qt: 'Muk R. at Bluff Rd', lk: ['lk7'] },
]);

// basemap gallery
const allowedBasemapTitles = [
  'TNC Light with Hillshade',
  'TNC Dark Gray Map',
  'Ocean Basemap',
  'Imagery Hybrid',
];
const portal = new Portal();
const source = new PortalBasemapsSource({
  portal,
  query: {
    id: 'defa1b2287604d069c70af515331e30f',
  },
  filterFunction: (basemap) =>
    allowedBasemapTitles.indexOf(basemap.portalItem.title) > -1,
});

const isExpectedArcGisAbortError = (error) => {
  if (!error) return false;
  return (
    error.name === 'AbortError' ||
    /Worker closing, aborting job/i.test(error.message || '') ||
    /aborting job calling 'getDisplayFeatures'/i.test(error.message || '')
  );
};

const handleUnhandledRejection = (event) => {
  if (isExpectedArcGisAbortError(event?.reason)) {
    event.preventDefault();
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', handleUnhandledRejection);
}

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('unhandledrejection', handleUnhandledRejection);
  }
});

// Measurement Functions
function activateAreaMeasurement() {
  const distanceButton = document.getElementById('distance');
  const areaButton = document.getElementById('area');
  esri.measurement.activeTool = 'area';
  distanceButton.classList.remove('active');
  areaButton.classList.add('active');
}

function activateLineMeasurement() {
  const distanceButton = document.getElementById('distance');
  const areaButton = document.getElementById('area');
  esri.measurement.activeTool = 'distance';
  distanceButton.classList.add('active');
  areaButton.classList.remove('active');
}

function clearMeasurements() {
  const distanceButton = document.getElementById('distance');
  const areaButton = document.getElementById('area');
  distanceButton.classList.remove('active');
  areaButton.classList.remove('active');
  esri.measurement.clear();
}

function getMapPrint() {
  esri.mapView
    .takeScreenshot({ width: 1000, height: 700, orientation: 'landscape' })
    .then((screenshot) => {
      let image = screenshot.dataUrl;
      store.commit('updateMapPrintURI', image);
      setTimeout(function () {
        // wait until all resources loaded
        window.print();
      }, 250);
    });
}

// arcgisViewReadyChange
const onReady = (event) => {
  const webMap = document.querySelector('arcgis-map').view.map;
  const mapView = document.querySelector('arcgis-map').view;
  mapView.popup = {
    dockOptions: {
      buttonEnabled: false,
    },
    visibleElements: {
      collapseButton: false,
    },
  };
  mapView.popupEnabled = false;

  ms.getLayersInfo();

  //global in order to have access to the maplayer
  let esri = {
    mapView: '',
    modelLayer: '',
    supportingMapLayer: '',
    map: '',
    mapImage: '',
    sketch: '',
    graphicsLayer: '',
    selectedWatershed: '',
    selectedWatershedLayerView: '',
    rfWatershed: '',
    rfWatershedLayerView: '',
    createEvent: false,
    selectSite: false,
    serviceChangeWs: '',
    prwLayer: '',
    rfSelectedWatershed: '',
    rfQueryLayer: '',
    boundaryOutline: '',
  };

  esri.map = webMap;
  esri.mapView = mapView;

  const isExpectedArcGisAbort = (error) => {
    if (!error) return false;
    return (
      error.name === 'AbortError' ||
      /Worker closing, aborting job/i.test(error.message || '') ||
      /aborting job calling 'getDisplayFeatures'/i.test(error.message || '')
    );
  };

  const handleArcGisAsyncError = (error) => {
    if (isExpectedArcGisAbort(error)) {
      return;
    }
    console.error(error);
  };

  let searchWidg = document.querySelector('arcgis-search');

  const muk_watershed = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_Mukwonago/FeatureServer/0',
  });

  const muk_srl = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_Mukwonago/FeatureServer/1',
  });
  let muk_srlLayerView = '';

  const muk_lakes = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_Mukwonago/FeatureServer/2',
  });
  let muk_lakesLayerView = '';

  const muk_fens = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_Mukwonago/FeatureServer/3',
  });
  let muk_fensLayerView = '';

  const muk_streams = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_Mukwonago/FeatureServer/4',
  });

  const all_results = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_Mukwonago/FeatureServer/5',
  });

  const legacyState = {
    radios: [],
    refreshSearch: false,
    wetlandIdString: '',
    searchResults: [],
  };

  const legacyBindings = {
    addRaster,
    upstreamFeatures,
    mapQuery,
    addRaster,
    planType,
    projectType,
    wbdApp,
    wetlandWatersheds,
    showServices,
    showNumServices,
    serviceType,
    optionLayers,
    rfLayer,
    serviceLayer,
    h6,
    h8,
    h10,
    h12,
    selectedHuc,
    pointCoord,
    evalCircle,
    circleFeatures,
    resultsFeatures,
    rangeOfService,
    watershedRange,
    wetlandId,
    countOfServices,
    floodAbatement,
    fishAquaticHabitat,
    phosphorousRetention,
    sedimentRetention,
    nitrogenReduction,
    surfaceWaterSupply,
    shorelineProtection,
    carbonStorage,
    floristicIntegrity,
    watershedAcres,
    showCombined,
    startDownload,
    firstSelected,
    selectedData,
    rfData,
    loadingRf,
    loadingComplete,
    overallFeas,
    landUseCons,
    invasiveSpeciesCons,
    landOwnerCons,
    rfSelectLayer,
    wetlandLocation,
  };

  const legacyMethods = {
    updateFeatureLayer,
    fixLegendLabels,
    numToRange,
    numToLoss,
  };

  const _this = new Proxy(legacyState, {
    get(target, prop) {
      if (typeof prop === 'string' && prop in legacyMethods) {
        return legacyMethods[prop];
      }
      if (typeof prop === 'string' && prop in legacyBindings) {
        return legacyBindings[prop].value;
      }
      if (prop === '$store') {
        return store;
      }
      if (typeof prop === 'string' && prop in store.state) {
        return store.state[prop];
      }
      return target[prop];
    },
    set(target, prop, value) {
      if (typeof prop === 'string' && prop in legacyBindings) {
        legacyBindings[prop].value = value;
        return true;
      }
      if (typeof prop === 'string' && prop in store.state) {
        const mutationName = `update${prop.charAt(0).toUpperCase()}${prop.slice(1)}`;
        if (store._mutations?.[mutationName]) {
          store.commit(mutationName, value);
          return true;
        }
      }
      target[prop] = value;
      return true;
    },
  });

  let highlightLake = '';
  let highlightStream = '';

  const srf_lakes = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_Mukwonago/FeatureServer/6',
    outFields: ['*'],
  });

  const srf_streams = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_Mukwonago/FeatureServer/7',
    outFields: ['*'],
  });

  // Wetlands by Design layers
  const hucMask = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_WetlandsByDesign/FeatureServer/0',
    outFields: ['*'],
    opacity: sliderOpacity.value,
  });
  const huc6ws = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_WetlandsByDesign/FeatureServer/1',
    outFields: ['*'],
    opacity: sliderOpacity.value,
    popupEnabled: false,
  });
  const huc8ws = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_WetlandsByDesign/FeatureServer/2',
    outFields: ['*'],
    opacity: sliderOpacity.value,
    popupEnabled: false,
  });
  const huc10ws = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_WetlandsByDesign/FeatureServer/3',
    outFields: ['*'],
    opacity: sliderOpacity.value,
    popupEnabled: false,
  });
  const huc12ws = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_WetlandsByDesign/FeatureServer/4',
    outFields: ['*'],
    opacity: sliderOpacity.value,
    popupEnabled: false,
  });
  esri.selectedWatershed = null;
  esri.rfWatershed = null;
  esri.prwLayer = new FeatureLayer({
    url: 'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_WetlandsByDesign/FeatureServer/57',
    title: 'Existing Wetlands',
    opacity: sliderOpacity.value,
    outFields: ['*'],
    popupEnabled: false,
    // visible: true,
  });
  esri.rfSelectedWatershed = null;
  esri.rfQueryLayer = null;

  // EVENT LISTENERS

  esri.mapView.on('pointer-move', (event) => {
    if (wbdApp.value == true) {
      if (!h12.value) {
        fixLegendLabels();

        let huc;
        let objectID;

        esri.mapView
          .hitTest(event)
          .then((e) => {
            if (e.results.length) {
              const hitGraphic = e.results[0].graphic;
              const name = hitGraphic.attributes.name;
              let query;

              if (name) {
                if (h6.value == false) {
                  huc = hitGraphic.attributes.WHUC6;
                  query = esri.featureLayer.createQuery();
                  objectID = hitGraphic.attributes.OBJECTID;
                  query.where = 'OBJECTID = ' + objectID;
                } else if (h6.value == true && h8.value == false) {
                  query = esri.featureLayer.createQuery();
                  objectID = hitGraphic.attributes.OBJECTID;
                  query.where = 'OBJECTID = ' + objectID;
                  showCombined.value = true;
                  huc6Squares.value = true;
                  //_this.huc8Squares = false;

                  huc = hitGraphic.attributes.WHUC8;
                  countOfServices.value = numToLoss(
                    hitGraphic.attributes.AllNeeds,
                  );
                  floodAbatement.value = numToLoss(
                    hitGraphic.attributes.FloodAb,
                  );
                  sedimentRetention.value = numToLoss(
                    hitGraphic.attributes.SedPhos,
                  );
                  nitrogenReduction.value = numToLoss(
                    hitGraphic.attributes.Nitrogen,
                  );
                  fishAquaticHabitat.value = numToLoss(
                    hitGraphic.attributes.FishAqua,
                  );
                  surfaceWaterSupply.value = numToLoss(
                    hitGraphic.attributes.SurfWat,
                  );
                } else if (h8.value == true && h10.value == false) {
                  query = esri.featureLayer.createQuery();
                  objectID = hitGraphic.attributes.OBJECTID;
                  query.where = 'OBJECTID = ' + objectID;
                  showCombined.value = true;
                  huc6Squares.value = false;
                  //_this.huc8Squares = true;

                  huc = hitGraphic.attributes.WHUC8;
                  countOfServices.value = numToLoss(
                    hitGraphic.attributes.AllNeeds,
                  );
                  floodAbatement.value = numToLoss(
                    hitGraphic.attributes.FloodAb,
                  );
                  sedimentRetention.value = numToLoss(
                    hitGraphic.attributes.SedPhos,
                  );
                  nitrogenReduction.value = numToLoss(
                    hitGraphic.attributes.Nitrogen,
                  );
                  fishAquaticHabitat.value = numToLoss(
                    hitGraphic.attributes.FishAqua,
                  );
                  surfaceWaterSupply.value = numToLoss(
                    hitGraphic.attributes.SurfWat,
                  );
                }
                document.getElementById('info').style.visibility = 'visible';
                document.getElementById('huc').innerHTML = huc;
                document.getElementById('name').innerHTML = name + ' - ';
              } else {
                document.getElementById('info').style.visibility = 'hidden';
                showCombined.value = false;
              }
            }
          })
          .catch(handleArcGisAsyncError);
      }
    }
  });

  esri.mapView.on('click', function (response) {
    if (_this.wbdApp == false) {
      if (_this.planType === 'evaluate') {
        // let point;

        _this.circleFeatures = [];
        _this.resultsFeatures = [];

        let markerSymbol = new SimpleMarkerSymbol({
          style: 'circle',
          color: [125, 125, 125],
          size: 5,
          outline: {
            color: [225, 0, 0],
            width: 1,
          },
        });

        let point = new Point({
          x: response.mapPoint.longitude,
          y: response.mapPoint.latitude,
          symbol: markerSymbol,
        });

        let pointGraphic = new Graphic({
          geometry: point,
          symbol: markerSymbol,
        });

        _this.pointCoord =
          response.mapPoint.longitude.toFixed(6) +
          ', ' +
          response.mapPoint.latitude.toFixed(6);

        let circle = new Circle({
          center: point,
          geodesic: true,
          radius: 2,
          radiusUnit: 'miles',
        });

        let circleGraphic = new Graphic({
          geometry: circle,
          symbol: {
            type: 'simple-fill',
            color: null,
            outline: {
              type: 'simple-line',
              color: [125, 125, 125],
              width: 2,
              style: 'short-dash',
            },
          },
        });

        const query = muk_srl.createQuery(circle);
        const queryb = muk_lakes.createQuery(circle);
        const queryc = muk_fens.createQuery(circle);
        const queryd = all_results.createQuery(point);

        query.geometry = circle;
        queryb.geometry = circle;
        queryc.geometry = circle;
        queryd.geometry = point;

        muk_srl.queryFeatures(query).then(function (result) {
          result.features.forEach((feat) => {
            _this.circleFeatures.push(feat.attributes);
          });
        });

        muk_lakes.queryFeatures(queryb).then(function (result) {
          result.features.forEach((feat) => {
            _this.circleFeatures.push(feat.attributes);
          });
        });

        muk_fens.queryFeatures(queryc).then(function (result) {
          result.features.forEach((feat) => {
            _this.circleFeatures.push(feat.attributes);
          });
        });

        all_results.queryFeatures(queryd).then(function (result) {
          result.features.forEach((feat) => {
            _this.resultsFeatures.push(feat.attributes);
          });
        });

        esri.mapView.graphics.removeAll();
        esri.mapView.graphics.add(circleGraphic);
        esri.mapView.graphics.add(pointGraphic);

        _this.evalCircle = true;
      }
    } else if (_this.wbdApp == true) {
      let huc6 = {};
      let huc8 = {};
      let huc10 = {};
      // let huc12 = {};
      let query;

      let point = new Point({
        x: response.mapPoint.longitude,
        y: response.mapPoint.latitude,
      });

      const opts = {
        include: esri.featureLayer,
      };

      let a = document.getElementsByClassName('esri-legend__layer-caption');

      for (let i = 0; i < a.length; i++) {
        if (a[i].innerHTML == 'ALL_RANK' || a[i].innerHTML == 'AllNeeds') {
          a[i].innerHTML = '';
        }
      }

      esri.mapView
        .hitTest(response, opts)
        .then((e) => {
          if (e.results.length > 0) {
            if (_this.h6 == false) {
              query = huc6ws.createQuery(point);
              query.geometry = point;

              esri.map.add(hucMask);
              hucMask.visible = true;
              muk_srl.visible = false;
              muk_lakes.visible = true;
              esri.map.add(huc8ws);

              huc6ws.queryFeatures(query).then(function (result) {
                let feature = result.features[0].attributes;
                huc6 = {
                  desc: 'HUC 6',
                  name: feature.name,
                  huc: feature.WHUC6,
                };
                _this.selectedHuc = feature.WHUC6;
                _this.h6 = true;
                _this.wetlandWatersheds.push(huc6);
                _this.showServices = true;
                _this.firstSelected = true;

                esri.defExp = "WHUC6 = '" + _this.selectedHuc + "'";

                _this.updateFeatureLayer(_this.optionLayers.id8);
              });
            } else if (_this.h6 == true && _this.h8 == false) {
              esri.map.remove(huc8ws);
              esri.map.add(huc10ws);
              huc8ws.visible = false;
              huc10ws.visible = true;

              query = huc8ws.createQuery(point);
              query.geometry = point;
              huc8ws.queryFeatures(query).then(function (result) {
                let feature = result.features[0].attributes;
                huc8 = {
                  desc: 'HUC 8',
                  name: feature.name,
                  huc: feature.WHUC8,
                };
                _this.selectedHuc = feature.WHUC8;
                _this.wetlandWatersheds.push(huc8);
                _this.h8 = true;

                esri.defExp = "WHUC8 = '" + _this.selectedHuc + "'";
                _this.updateFeatureLayer(_this.optionLayers.id10);
              });
            } else if (_this.h8 == true && _this.h10 == false) {
              // esri.map.remove(huc10ws);
              // esri.map.add(huc12ws);
              // esri.map.remove(esri.rfWatershed);
              huc10 = {};

              // if (esri.featureLayer) {
              //   esri.featureLayer.destroy();
              // }
              esri.map.remove(esri.featureLayer);

              query = huc10ws.createQuery(point);
              query.geometry = point;
              huc10ws.queryFeatures(query).then(function (result) {
                let feature = result.features[0].attributes;
                huc10 = {
                  desc: 'HUC 10',
                  name: feature.name,
                  huc: feature.WHUC10,
                };
                _this.selectedHuc = feature.WHUC10;
                _this.wetlandWatersheds.push(huc10);
                _this.h10 = true;
                _this.selectSite = true;

                hucMask.definitionExpression =
                  "WHUC10 <> '" + _this.selectedHuc + "'";

                huc10ws.definitionExpression =
                  "WHUC10 <> '" + _this.selectedHuc + "'";

                esri.defExp = "WHUC10 = '" + _this.selectedHuc + "'";

                if (!esri.map.layers.includes(esri.rfWatershed)) {
                  esri.map.add(esri.rfWatershed);
                }
                esri.mapView
                  .whenLayerView(esri.rfWatershed)
                  .then(function (layerView) {
                    esri.rfWatershedLayerView = layerView;
                  })
                  .catch(() => {});

                const rfLayerNode = findAnyLayerById(webMap, _this.rfLayer);
                if (rfLayerNode) {
                  rfLayerNode.definitionExpression =
                    "WHUC10 = '" + _this.selectedHuc + "'";
                }

                const serviceLayerNode = findAnyLayerById(
                  webMap,
                  _this.serviceLayer,
                );
                if (serviceLayerNode) {
                  serviceLayerNode.definitionExpression =
                    "WHUC10 = '" + _this.selectedHuc + "'";
                }

                hucMask.definitionExpression =
                  "WHUC10 <> '" + _this.selectedHuc + "'";

                let a = document.getElementsByClassName(
                  'esri-legend__layer-caption',
                );

                for (let i = 0; i < a.length; i++) {
                  if (
                    a[i].innerHTML == 'ALL_RANK' ||
                    a[i].innerHTML == 'AllNeeds'
                  ) {
                    a[i].innerHTML = '';
                  }
                }

                // esri.map.add(esri.selectedWatershed);
                esri.selectedWatershed.definitionExpression =
                  "WHUC10 = '" + _this.selectedHuc + "'";
                esri.selectedWatershed.visible = true;
                if (serviceLayerNode) {
                  serviceLayerNode.visible = true;
                }
                if (rfLayerNode) {
                  rfLayerNode.visible = true;
                }
              });

              esri.mapView.goTo({ center: point, zoom: 9 });

              _this.h8 = false;
              _this.h12 = true;
              _this.showServices = false;
              _this.showCombined = false;
              _this.startDownload = true;
              _this.showNumServices = true;
            }
          } else if (_this.h12 == true) {
            console.log('made it to final click function');
            _this.fixLegendLabels();

            _this.rangeOfService = true;
            _this.wetlandIdString = '';
            _this.watershedRange = [];
            let potentialId;
            esri.mapView.graphics.removeAll();
            esri.boundaryOutline = '';

            let point = new Point({
              x: response.mapPoint.longitude,
              y: response.mapPoint.latitude,
            });

            esri.selectedWatershedLayerView = '';

            esri.mapView
              .whenLayerView(esri.selectedWatershed)
              .then(function (layerView) {
                esri.selectedWatershedLayerView = layerView;
              });

            let query = esri.selectedWatershed.createQuery(point);
            let query2 = esri.rfWatershed.createQuery(point);
            query2.geometry = point;
            query.geometry = point;

            if (_this.serviceType === 'nos') {
              esri.selectedWatershed
                .queryFeatures(query)
                .then(function (result) {
                  if (result.features[0].attributes.WETLAND_TYPE !== 'PRW') {
                    let feature = result.features[0].attributes;
                    _this.selectedData = true;
                    _this.rfData = false;
                    let geom = result.features[0].geometry;

                    esri.boundaryOutline = new Graphic({
                      geometry: geom,
                      symbol: {
                        type: 'simple-fill',
                        color: null,
                        outline: {
                          type: 'simple-line',
                          color: [255, 255, 0],
                          width: 2,
                          style: 'solid',
                        },
                      },
                    });

                    esri.mapView.graphics.add(esri.boundaryOutline);

                    _this.wetlandId = feature.wetlandIdString;
                    _this.floodAbatement = _this.numToRange(feature.FA_RANK);
                    _this.sedimentRetention = _this.numToRange(feature.SS_RANK);
                    _this.phosphorousRetention = _this.numToRange(
                      feature.PR_RANK,
                    );
                    _this.nitrogenReduction = _this.numToRange(feature.NR_RANK);
                    _this.shorelineProtection = _this.numToRange(
                      feature.SP_RANK,
                    );
                    _this.fishAquaticHabitat = _this.numToRange(
                      feature.FAH_RANK,
                    );
                    _this.carbonStorage = _this.numToRange(feature.CS_RANK);
                    _this.floristicIntegrity = _this.numToRange(
                      feature.FQ_RANK,
                    );
                    _this.surfaceWaterSupply = _this.numToRange(
                      feature.SBS_RANK,
                    );
                    _this.countOfServices = _this.numToRange(feature.ALL_RANK);
                    _this.watershedAcres = feature.acres;
                  }
                });

              esri.rfWatershed.queryFeatures(query2).then(function (result) {
                console.log(result);
                if (result.features[0].attributes.WETLAND_TYPE == 'PRW') {
                  let feature = result.features[0].attributes;
                  _this.selectedData = false;
                  _this.rfData = false;

                  esri.boundaryOutline = new Graphic({
                    geometry: result.features[0].geometry,
                    symbol: {
                      type: 'simple-fill',
                      color: null,
                      outline: {
                        type: 'simple-line',
                        color: [255, 255, 0],
                        width: 2,
                        style: 'solid',
                      },
                    },
                  });

                  esri.mapView.graphics.add(esri.boundaryOutline);

                  _this.wetlandId = feature.wetlandIdString;
                  _this.floodAbatement = _this.numToRange(feature.FA_RANK);
                  _this.sedimentRetention = _this.numToRange(feature.SS_RANK);
                  _this.phosphorousRetention = _this.numToRange(
                    feature.PR_RANK,
                  );
                  _this.nitrogenReduction = _this.numToRange(feature.NR_RANK);
                  _this.shorelineProtection = _this.numToRange(feature.SP_RANK);
                  _this.fishAquaticHabitat = _this.numToRange(feature.FAH_RANK);
                  _this.carbonStorage = _this.numToRange(feature.CS_RANK);
                  _this.floristicIntegrity = _this.numToRange(feature.FQ_RANK);
                  _this.surfaceWaterSupply = _this.numToRange(feature.SBS_RANK);
                  _this.countOfServices = _this.numToRange(feature.ALL_RANK);
                  _this.watershedAcres = feature.acres;
                }
              });
            } else if (_this.serviceType === 'rf') {
              esri.map.remove(esri.selectedWatershed);
              esri.map.remove(esri.rfWatershed);

              const rfSelectLayerNode = resolveLayerNode(
                _this.rfSelectLayer,
                'Wetland Feasibility - ' + rfOption.value,
              );
              if (rfSelectLayerNode) {
                rfSelectLayerNode.visible = true;
              }

              let rfquery = esri.rfSelectedWatershed.createQuery(point);
              rfquery.geometry = point;

              _this.loadingRf = true;
              _this.loadingComplete = false;
              _this.selectedData = false;

              esri.rfSelectedWatershed
                .queryFeatures(rfquery)
                .then(function (result) {
                  let feature = result.features[0].attributes;

                  esri.boundaryOutline = new Graphic({
                    geometry: result.features[0].geometry,
                    symbol: {
                      type: 'simple-fill',
                      color: null,
                      outline: {
                        type: 'simple-line',
                        color: [255, 255, 0],
                        width: 2,
                        style: 'solid',
                      },
                    },
                  });

                  esri.mapView.graphics.add(esri.boundaryOutline);

                  potentialId = feature.wetlandIdString;

                  let prwquery = esri.rfQueryLayer.createQuery();

                  prwquery.where =
                    'wetlandIdString = ' + "'" + potentialId + "'";

                  esri.rfQueryLayer
                    .queryFeatures(prwquery)
                    .then(function (result) {
                      let feat = result.features[0].attributes;

                      _this.loadingRf = false;
                      _this.loadingComplete = true;

                      _this.wetlandId = feat.wetlandIdString;
                      _this.overallFeas = feat.FEAS_Total;
                      _this.landUseCons = feat.Num_Val;
                      _this.invasiveSpeciesCons = feat.IS_Num;
                      _this.landOwnerCons = feat.LO_Total;
                      // _this.watershedAcres = feature.acres;
                    });

                  // query rf to get watershed acres
                  esri.rfWatershed
                    .queryFeatures(query2)
                    .then(function (result) {
                      let feat = result.features[0].attributes;

                      _this.watershedAcres = feat.acres;
                    });
                });
            }
          }
        })
        .catch(handleArcGisAsyncError);
    }
  });

  // FUNCTIONS
  function calculateBySearch() {
    // if (esri.featureLayer) {
    //   esri.featureLayer.destroy();
    // }

    // findAnyLayerById(webMap, 1).visible = false;
    esri.map.remove(huc6ws);
    esri.map.remove(esri.featureLayer);

    let huc6 = {};
    let huc8 = {};
    let huc10 = {};
    let huc6name = '';
    let huc8name = '';
    let query;
    let queryb;
    let queryc;
    let geom;
    let results;
    let point;
    let layerExtent = new Extent({});

    _this.projectType = 'new';
    _this.h6 = true;
    _this.h8 = true;
    _this.h10 = true;
    _this.firstSelected = true;
    _this.refreshSearch = true;

    searchWidg.search(_this.wetlandLocation).then((event) => {
      results = event.results;
      geom = results[0].results[0].feature.geometry;
      _this.wetlandWatersheds = [];

      point = new Point({
        x: geom.longitude,
        y: geom.latitude,
      });
      query = huc10ws.createQuery(point);
      query.geometry = point;

      queryb = huc6ws.createQuery(point);
      queryb.geometry = point;
      queryc = huc8ws.createQuery(point);
      queryc.geometry = point;

      _this.showServices = false;
      _this.showNumServices = true;

      huc6ws.queryFeatures(queryb).then(function (result) {
        let feature = result.features[0].attributes;

        huc6name = feature.name;
      });

      huc8ws.queryFeatures(queryc).then(function (result) {
        let feature = result.features[0].attributes;

        huc8name = feature.name;
      });

      huc10ws.queryFeatures(query).then(function (result) {
        let feature = result.features[0].attributes;
        huc6 = {
          desc: 'HUC 6',
          name: huc6name,
          huc: feature.WHUC6,
        };
        huc8 = {
          desc: 'HUC 8',
          name: huc8name,
          huc: feature.WHUC8,
        };
        huc10 = {
          desc: 'HUC 10',
          name: feature.name,
          huc: feature.WHUC10,
        };
        layerExtent = result.features[0].geometry.extent.extent;

        _this.selectedHuc = feature.WHUC10;
        _this.wetlandWatersheds.push(huc6);
        _this.wetlandWatersheds.push(huc8);
        _this.wetlandWatersheds.push(huc10);
        _this.selectSite = true;

        esri.map.add(hucMask);
        hucMask.definitionExpression = "WHUC10 <> '" + _this.selectedHuc + "'";
        hucMask.visible = true;

        esri.map.add(huc10ws);
        huc10ws.definitionExpression = "WHUC10 <> '" + _this.selectedHuc + "'";
        huc10ws.visible = true;

        esri.defExp = "WHUC10 = '" + _this.selectedHuc + "'";

        if (!esri.map.layers.includes(esri.rfWatershed)) {
          esri.map.add(esri.rfWatershed);
        }
        esri.mapView
          .whenLayerView(esri.rfWatershed)
          .then(function (layerView) {
            esri.rfWatershedLayerView = layerView;
          })
          .catch(() => {});

        const rfLayerNode = findAnyLayerById(webMap, _this.rfLayer);
        if (rfLayerNode) {
          rfLayerNode.definitionExpression =
            "WHUC10 = '" + _this.selectedHuc + "'";
        }

        const serviceLayerNode = findAnyLayerById(webMap, _this.serviceLayer);
        if (serviceLayerNode) {
          serviceLayerNode.definitionExpression =
            "WHUC10 = '" + _this.selectedHuc + "'";
        }

        let a = document.getElementsByClassName('esri-legend__layer-caption');

        for (let i = 0; i < a.length; i++) {
          if (a[i].innerHTML == 'ALL_RANK' || a[i].innerHTML == 'AllNeeds') {
            a[i].innerHTML = '';
          }
        }
        esri.mapView.graphics.remove(esri.mapView.graphics._items[0]);
        esri.map.add(esri.selectedWatershed);
        huc10ws.visible = true;
        if (serviceLayerNode) {
          serviceLayerNode.visible = true;
        }
        if (rfLayerNode) {
          rfLayerNode.visible = true;
        }
        esri.mapView.goTo({ target: layerExtent });
      });

      // _this.h6 = false;
      // _this.h8 = false;
      // _this.h10 = false;
      _this.h12 = true;
      _this.showCombined = false;
      _this.startDownload = true;
      // _this.locationSearch = false;
    });
  }
  function findAnyLayerById(webMap, id) {
    if (!webMap) return null;
    const target = String(id);

    // recursive check for a layer-like object (supports sublayers and group children)
    function checkLayer(layer) {
      if (!layer) return null;
      if (String(layer.id) === target) return layer;

      // MapImageLayer sublayers / Dynamic sublayers: check allSublayers
      if (layer.allSublayers && Array.isArray(layer.allSublayers.items)) {
        for (const sub of layer.allSublayers.items) {
          const r = checkLayer(sub);
          if (r) return r;
        }
      }

      // GroupLayer children
      if (layer.layers && Array.isArray(layer.layers.items)) {
        for (const child of layer.layers.items) {
          const r = checkLayer(child);
          if (r) return r;
        }
      }

      // Some layers expose .sublayers or .allLayers instead — be defensive
      if (layer.sublayers && Array.isArray(layer.sublayers.items)) {
        for (const s of layer.sublayers.items) {
          const r = checkLayer(s);
          if (r) return r;
        }
      }

      return null;
    }

    // iterate top-level layers
    for (const top of webMap.layers.items) {
      const found = checkLayer(top);
      if (found) return found;
    }

    // last resort: try webMap.allLayers (if available)
    if (webMap.allLayers && Array.isArray(webMap.allLayers.items)) {
      const f = webMap.allLayers.items.find((l) => String(l.id) === target);
      if (f) return f;
    }

    return null;
  }

  function findAnyLayerByTitle(webMap, title) {
    if (!webMap || !title) return null;

    function checkLayer(layer) {
      if (!layer) return null;
      if (layer.title === title) return layer;

      if (layer.allSublayers && Array.isArray(layer.allSublayers.items)) {
        for (const sub of layer.allSublayers.items) {
          const result = checkLayer(sub);
          if (result) return result;
        }
      }

      if (layer.layers && Array.isArray(layer.layers.items)) {
        for (const child of layer.layers.items) {
          const result = checkLayer(child);
          if (result) return result;
        }
      }

      if (layer.sublayers && Array.isArray(layer.sublayers.items)) {
        for (const sub of layer.sublayers.items) {
          const result = checkLayer(sub);
          if (result) return result;
        }
      }

      return null;
    }

    for (const top of webMap.layers.items) {
      const found = checkLayer(top);
      if (found) return found;
    }

    if (webMap.allLayers && Array.isArray(webMap.allLayers.items)) {
      const found = webMap.allLayers.items.find(
        (layer) => layer.title === title,
      );
      if (found) return found;
    }

    return null;
  }

  function resolveLayerNode(layerId, fallbackTitle = '') {
    return (
      findAnyLayerById(webMap, layerId) ||
      findAnyLayerByTitle(webMap, fallbackTitle) ||
      null
    );
  }

  function normalizeFeatureLayerUrl(url) {
    if (!url) return '';
    return String(url).replace(/\/MapServer(?=\/|$)/i, '/FeatureServer');
  }

  function resolveLayerQueryUrl(layerId, fallbackTitle = '', fallbackUrl = '') {
    const layer = resolveLayerNode(layerId, fallbackTitle);
    if (!layer) return fallbackUrl;

    const candidateUrls = [
      layer.url,
      layer.sourceJSON?.url,
      layer.portalItem?.url,
      layer.parsedUrl?.path,
    ].filter(Boolean);

    for (const candidate of candidateUrls) {
      const normalizedUrl = normalizeFeatureLayerUrl(candidate);

      if (/\/FeatureServer\/\d+$/i.test(normalizedUrl)) {
        return normalizedUrl;
      }

      if (/\/FeatureServer$/i.test(normalizedUrl)) {
        const sublayerId = layer.layerId ?? layer.sourceJSON?.layerId;
        if (
          sublayerId !== undefined &&
          sublayerId !== null &&
          sublayerId !== ''
        ) {
          return normalizedUrl + '/' + sublayerId;
        }
      }
    }

    const parentUrl = normalizeFeatureLayerUrl(layer.parent?.url);
    const sublayerId = layer.layerId ?? layer.sourceJSON?.layerId;
    if (
      parentUrl &&
      sublayerId !== undefined &&
      sublayerId !== null &&
      sublayerId !== ''
    ) {
      return parentUrl + '/' + sublayerId;
    }

    return fallbackUrl;
  }

  function rebuildQueryLayer(layerKey, config) {
    const {
      layerId,
      fallbackTitle = '',
      fallbackUrl = '',
      title,
      opacity,
      visible = false,
    } = config;
    const url = resolveLayerQueryUrl(layerId, fallbackTitle, fallbackUrl);

    if (!url) {
      return null;
    }

    const existingLayer = esri[layerKey];
    const wasInMap = !!existingLayer && esri.map.layers.includes(existingLayer);
    const nextVisible = existingLayer?.visible ?? visible;
    const nextOpacity = existingLayer?.opacity ?? opacity;
    const definitionExpression = existingLayer?.definitionExpression || '';

    if (existingLayer) {
      if (wasInMap) {
        esri.map.remove(existingLayer);
      }
      existingLayer.destroy();
    }

    const nextLayer = new FeatureLayer({
      url,
      title,
      opacity: nextOpacity,
      outFields: ['*'],
      visible: nextVisible,
      popupEnabled: false,
    });

    if (definitionExpression) {
      nextLayer.definitionExpression = definitionExpression;
    }

    esri[layerKey] = nextLayer;

    if (wasInMap) {
      esri.map.add(nextLayer);
    }

    return nextLayer;
  }

  function syncWatershedQueryLayers() {
    rebuildQueryLayer('selectedWatershed', {
      layerId: _this.serviceLayer,
      fallbackTitle: 'Current Wetlands - ' + serviceOption.value,
      title: 'Current Wetlands - ' + serviceOption.value,
      opacity: 0.8,
    });

    rebuildQueryLayer('rfWatershed', {
      layerId: _this.rfLayer,
      fallbackTitle: 'Potentially Restorable Wetlands - ' + serviceOption.value,
      title: 'Potentially Restorable Wetlands - ' + serviceOption.value,
      opacity: 0.8,
    });
  }

  function syncRfSelectionQueryLayers() {
    const fallbackTitle = 'Wetland Feasibility - ' + rfOption.value;

    rebuildQueryLayer('rfSelectedWatershed', {
      layerId: _this.rfSelectLayer,
      fallbackTitle,
      fallbackUrl: WBD_FEATURE_SERVER_URL + '/65',
      title: fallbackTitle,
      opacity: sliderOpacity.value,
    });

    rebuildQueryLayer('rfQueryLayer', {
      layerId: _this.rfSelectLayer,
      fallbackTitle,
      fallbackUrl: WBD_FEATURE_SERVER_URL + '/65',
      title: fallbackTitle,
      opacity: sliderOpacity.value,
      visible: false,
    });
  }

  function hideWetlandFeasibilityLayers() {
    const mapImage = toRaw(esri.mapImage);

    (mapImage?.allLayers?.items || []).forEach((item) => {
      const layer = toRaw(item);
      if (layer?.title?.startsWith('Wetland Feasibility -')) {
        layer.visible = false;
      }
    });
  }

  syncWatershedQueryLayers();
  syncRfSelectionQueryLayers();

  function updateFeatureLayer(id) {
    let title;

    if (h6.value == false) {
      title = 'HUC 6 Boundary';
      // esri.defExp = '';
    } else if (h6.value == true && h8.value == false) {
      title = 'HUC 8 - ' + option.value;
    } else if (h8.value == true && h10.value == false) {
      title = 'HUC 10 - ' + option.value;
    }

    if (esri.featureLayer) {
      esri.featureLayer.destroy();
    }
    // let l = webMap.findLayerById(id);
    // console.log(l);
    // console.log(l.title);
    // console.log(id);
    // console.log(l);
    // if (id == 1) {
    esri.featureLayer = new FeatureLayer({
      url:
        'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_WetlandsByDesign/FeatureServer/' +
        id,
      title: title,
      outFields: ['*'],
      opacity: sliderOpacity.value,
      popupEnabled: false,
    });
    // } else {
    //   let l = findAnyLayerById(webMap, id);
    //   console.log(l);
    // esri.featureLayer = new FeatureLayer({
    //   url:
    //     'https://services.arcgis.com/F7DSX1DSNSiWmOqh/arcgis/rest/services/NST_WI_WetlandsByDesign/FeatureServer/' +
    //     id,
    //   title: title,
    //   outFields: ['*'],
    //   opacity: sliderOpacity.value,
    // });
    // }
    esri.map.add(esri.featureLayer);
    esri.featureLayer.definitionExpression = esri.defExp;
    esri.featureLayer.queryExtent().then(function (results) {
      if (results) {
        esri.mapView.goTo(results.extent);
      }
    });
  }

  function numToRange(num) {
    if (num == 1) {
      return 'Very High';
    } else if (num == 2) {
      return 'High';
    } else if (num == 3) {
      return 'Moderate';
    } else {
      return 'Not Applicable';
    }
  }

  function numToLoss(num) {
    if (num == 1) {
      return 'Most Loss';
    } else if (num == 2) {
      return 'Moderate Loss';
    } else if (num == 3) {
      return 'Least Loss';
    }
  }

  function fixLegendLabels() {
    let a = document.getElementsByClassName('esri-legend__layer-caption');

    for (let i = 0; i < a.length; i++) {
      if (a[i].innerHTML == 'ALL_RANK' || a[i].innerHTML == 'AllNeeds') {
        a[i].innerHTML = '';
      }
      if (a[i].innerHTML == 'FA_RANK' || a[i].innerHTML == 'FloodAb') {
        a[i].innerHTML = '';
      }
      if (a[i].innerHTML == 'SS_RANK' || a[i].innerHTML == 'SedPhos') {
        a[i].innerHTML = '';
      }
      if (a[i].innerHTML == 'PR_RANK') {
        a[i].innerHTML = '';
      }
      if (a[i].innerHTML == 'NR_RANK' || a[i].innerHTML == 'Nitrogen') {
        a[i].innerHTML = '';
      }
      if (a[i].innerHTML == 'SP_RANK') {
        a[i].innerHTML = '';
      }
      if (a[i].innerHTML == 'FAH_RANK' || a[i].innerHTML == 'FishAqua') {
        a[i].innerHTML = '';
      }
      if (a[i].innerHTML == 'CS_RANK') {
        a[i].innerHTML = '';
      }
      if (a[i].innerHTML == 'FQ_RANK') {
        a[i].innerHTML = '';
      }
      if (a[i].innerHTML == 'SBS_RANK' || a[i].innerHTML == 'SurfWat') {
        a[i].innerHTML = '';
      }
    }
  }

  function updateSupportingVisibility() {
    // turn off all raster layer visibility
    esri.map.layers.items.forEach((fl) => {
      if (fl.type === 'feature') {
        fl.visible = false;
      }
      if (fl.type == 'map-image') {
        fl.allSublayers.items.forEach((sl) => {
          if (sl.layer.type == 'map-image') {
            sl.visible = false;
          }
        });
      }
    });
    // turn on all sublayers that are checked in the TOC
    _this.supportingMapVisibleLayers.forEach((l) => {
      //if type is raster layer - find the sublayer and make visible
      if (l.type === 'Raster Layer') {
        console.log(l);
        let layer = esri.map.layers.items.find((layer) => {
          return (
            layer.type == 'map-image' &&
            layer.url ==
              _this.$store.state.config.supportingMapLayers[l.mapServiceIndex]
                .mapService
          );
        });
        let sublayer = layer.allSublayers.items.find((sublayer) => {
          return sublayer.id == l.id;
        });
        sublayer.visible = true;
      }
      if (l.type === 'Feature Layer') {
        //check to see if feature layer exists.  if it does make it visible, if not create it.
        let i = esri.map.layers.items.findIndex(
          (layer) =>
            layer.layerId == l.id &&
            layer.url ==
              _this.$store.state.config.supportingMapLayers[l.mapServiceIndex]
                .mapService,
        );

        if (i >= 0) {
          esri.map.layers.items[i].visible = true;
        } else {
          //check to see if fl has a popup template defined
          let layerList =
            _this.$store.state.config.supportingMapLayers[l.mapServiceIndex]
              .popupTemplate;
          let i = layerList.findIndex((layer) => layer.id == l.id);
          if (i >= 0) {
            let template = {
              title: layerList[i].title,
              content: [
                {
                  type: 'text',
                  text:
                    layerList[i].label +
                    ':  <b>{ ' +
                    layerList[i].field +
                    '}</b>',
                },
              ],
            };
            //get index of map server
            esri.map.add(
              new FeatureLayer({
                url:
                  _this.$store.state.config.supportingMapLayers[
                    l.mapServiceIndex
                  ].mapService +
                  '/' +
                  l.id,
                popupTemplate: template,
              }),
            );
          }
          //if no popup defined create the feature layer without popup
          else {
            esri.map.add(
              new FeatureLayer({
                url:
                  _this.$store.state.config.supportingMapLayers[
                    l.mapServiceIndex
                  ].mapService +
                  '/' +
                  l.id,
              }),
            );
          }
        }
      }
    });
  }

  function updateSupportingOpacity() {
    let l = _this.supportingVisibleLayerOpacity;
    // if it is a raster find the sublayer and set the opacity
    if (l.type === 'Raster Layer') {
      let layer = esri.map.layers.items.find((layer) => {
        return (
          layer.type == 'map-image' &&
          layer.url ==
            _this.$store.state.config.supportingMapLayers[l.mapServiceIndex]
              .mapService
        );
      });
      let sublayer = layer.allSublayers.items.find((sublayer) => {
        return sublayer.id == l.id;
      });
      sublayer.opacity = l.value;
    }
    //if it is a feature layers, create it if it does not exist but make visibility false.  then set its opacity so that
    //when the user turns it on, it will find the layer and match the ui opacity dial.
    if (l.type == 'Feature Layer') {
      let i = esri.map.layers.items.findIndex(
        (layer) =>
          layer.layerId == l.id &&
          layer.url ==
            _this.$store.state.config.supportingMapLayers[l.mapServiceIndex]
              .mapService,
      );

      if (i >= 0) {
        esri.map.layers.items[i].opacity = l.value;
      } else {
        //check to see if fl has a popup template defined
        let layerList =
          _this.$store.state.config.supportingMapLayers[l.mapServiceIndex]
            .popupTemplate;
        let i = layerList.findIndex((layer) => layer.id == l.id);
        if (i >= 0) {
          let template = {
            title: layerList[i].title,
            content: [
              {
                type: 'text',
                text:
                  layerList[i].label +
                  ':  <b>{ ' +
                  layerList[i].field +
                  '}</b>',
              },
            ],
          };
          //get index of map server
          esri.map.add(
            new FeatureLayer({
              url:
                _this.$store.state.config.supportingMapLayers[l.mapServiceIndex]
                  .mapService +
                '/' +
                l.id,
              popupTemplate: template,
              visible: false,
              opacity: l.value,
            }),
          );
        }
        //if no popup defined create the feature layer without popup
        else {
          esri.map.add(
            new FeatureLayer({
              url:
                _this.$store.state.config.supportingMapLayers[l.mapServiceIndex]
                  .mapService +
                '/' +
                l.id,
              visible: false,
              opacity: l.value,
            }),
          );
        }
      }
    }
  }

  function updateSelectedFeatures(val) {
    _this.$store.commit('updateSelectedFeatures', val);
  }

  function updateRfLayer() {
    esri.map.remove(esri.rfWatershed);
    esri.map.remove(esri.selectedWatershed);
    syncRfSelectionQueryLayers();

    const rfLayerNode = resolveLayerNode(
      _this.rfLayer,
      'Potentially Restorable Wetlands - ' + serviceOption.value,
    );
    const serviceLayerNode = resolveLayerNode(
      _this.serviceLayer,
      'Current Wetlands - ' + serviceOption.value,
    );

    if (rfLayerNode) {
      rfLayerNode.visible = false;
    }
    if (serviceLayerNode) {
      serviceLayerNode.visible = false;
    }

    esri.map.add(esri.rfSelectedWatershed);

    esri.prwLayer.definitionExpression = "WHUC10 = '" + _this.selectedHuc + "'";
    esri.prwLayer.visible = true;
    esri.map.add(esri.prwLayer);

    const rfSelectLayerNode = resolveLayerNode(
      _this.rfSelectLayer,
      'Wetland Feasibility - ' + rfOption.value,
    );

    if (rfSelectLayerNode) {
      rfSelectLayerNode.definitionExpression =
        "WHUC10 = '" + _this.selectedHuc + "'";
      rfSelectLayerNode.visible = true;
    }

    console.log(esri.rfSelectedWatershed.title);
    console.log(esri.prwLayer.title);
    console.log(esri.prwLayer);
    console.log(rfSelectLayerNode);
  }

  function updateNosLayer() {
    esri.map.remove(esri.prwLayer);
    esri.map.remove(esri.rfSelectedWatershed);
    syncWatershedQueryLayers();

    const rfSelectLayerNode = resolveLayerNode(
      _this.rfSelectLayer,
      'Wetland Feasibility - ' + rfOption.value,
    );
    const rfLayerNode = resolveLayerNode(
      _this.rfLayer,
      'Potentially Restorable Wetlands - ' + serviceOption.value,
    );
    const serviceLayerNode = resolveLayerNode(
      _this.serviceLayer,
      'Current Wetlands - ' + serviceOption.value,
    );

    if (rfSelectLayerNode) {
      rfSelectLayerNode.visible = false;
    }
    esri.map.add(esri.selectedWatershed);
    esri.map.add(esri.rfWatershed);

    if (rfLayerNode) {
      rfLayerNode.definitionExpression = "WHUC10 = '" + _this.selectedHuc + "'";
      rfLayerNode.visible = true;
    }

    if (serviceLayerNode) {
      serviceLayerNode.definitionExpression =
        "WHUC10 = '" + _this.selectedHuc + "'";
      serviceLayerNode.visible = true;
    }
  }

  function removeLayer() {
    if (_this.serviceType == 'nos') {
      esri.map.remove(esri.rfWatershed);
      esri.map.remove(esri.selectedWatershed);

      const mapImage = toRaw(esri.mapImage);
      (mapImage?.allLayers?.items || []).forEach((l) => {
        const layer = toRaw(l);
        // if (l.visible == true && l.id !== 0 && l.id !== 3) {
        if (
          layer.visible == true &&
          layer.title !== 'HUC - Mask' &&
          layer.title !== 'HUC - 10 - Boundary'
        ) {
          layer.visible = false;
        }
      });

      const rfLayerNode = findAnyLayerById(webMap, _this.rfLayer);
      if (rfLayerNode) {
        rfLayerNode.definitionExpression =
          "WHUC10 = '" + _this.selectedHuc + "'";
      }

      const serviceLayerNode = findAnyLayerById(webMap, _this.serviceLayer);

      if (serviceLayerNode) {
        serviceLayerNode.definitionExpression =
          "WHUC10 = '" + _this.selectedHuc + "'";
      }

      esri.map.add(esri.rfWatershed);
      // esri.map.add(esri.selectedWatershed);

      if (rfLayerNode) {
        rfLayerNode.visible = true;
      }
      if (serviceLayerNode) {
        serviceLayerNode.visible = true;
      }
    } else if (_this.serviceType == 'rf') {
      syncRfSelectionQueryLayers();
      hideWetlandFeasibilityLayers();

      esri.map.remove(esri.rfSelectedWatershed);

      const rfSelectLayerNode = resolveLayerNode(
        _this.rfSelectLayer,
        'Wetland Feasibility - ' + rfOption.value,
      );

      if (rfSelectLayerNode) {
        rfSelectLayerNode.definitionExpression =
          "WHUC10 = '" + _this.selectedHuc + "'";
      }

      esri.map.add(esri.rfSelectedWatershed);
      if (rfSelectLayerNode) {
        rfSelectLayerNode.visible = true;
      }
    }
  }

  // WATCHERS
  watch(
    wbdApp,
    () => {
      if (wbdApp.value === true) {
        let z = 6;
        let c = [-91.01424, 44.960553];

        esri.mapImage = toRaw(ms.wetlandsByDesignLayers);

        // esri.map.removeAll();
        esri.map.remove(muk_watershed);
        esri.map.remove(muk_srl);
        esri.map.remove(muk_lakes);
        esri.map.remove(muk_fens);
        esri.map.remove(muk_streams);
        if (
          esri.graphicsLayer &&
          typeof esri.graphicsLayer.removeAll === 'function'
        ) {
          esri.graphicsLayer.removeAll();
        } else if (esri.mapView?.graphics) {
          esri.mapView.graphics.removeAll();
        }

        esri.mapView.goTo({ center: c, zoom: z });
        // esri.sketch.visible = true;
        // esri.map.add(esri.mapImage);
        updateFeatureLayer(1);
      } else if (wbdApp.value === false) {
        esri.defExp = '';

        let z = 10;
        let c = [-88.47431, 42.879521];

        esri.mapImage = ms.mukwonagoLayers;

        // esri.map.removeAll();
        esri.map.remove(hucMask);
        esri.map.remove(huc6ws);
        esri.map.remove(huc8ws);
        esri.map.remove(huc10ws);
        esri.map.remove(huc12ws);
        wetlandWatersheds.value = [];
        h6.value = false;
        h8.value = false;
        h10.value = false;
        h12.value = false;
        showServices.value = false;
        showNumServices.value = false;
        rangeOfService.value = false;
        serviceType.value = '';
        selectedHuc.value = '';
        if (
          esri.graphicsLayer &&
          typeof esri.graphicsLayer.removeAll === 'function'
        ) {
          esri.graphicsLayer.removeAll();
        } else if (esri.mapView?.graphics) {
          esri.mapView.graphics.removeAll();
        }
        if (esri.featureLayer) {
          esri.featureLayer.destroy();
        }

        esri.mapView.whenLayerView(muk_srl).then(function (layerView) {
          muk_srlLayerView = layerView;
        });

        esri.mapView.whenLayerView(muk_lakes).then(function (layerView) {
          muk_lakesLayerView = layerView;
        });

        esri.mapView.whenLayerView(muk_fens).then(function (layerView) {
          muk_fensLayerView = layerView;
        });

        esri.mapView.goTo({ center: c, zoom: z });

        esri.map.add(muk_watershed);
        esri.map.add(muk_srl);
        esri.map.add(muk_lakes);
        esri.map.add(muk_fens);
        esri.map.add(muk_streams);
      }
    },
    { immediate: true },
  );

  watch(mapQuery, () => {
    if (highlightStream) {
      highlightStream.remove();
    }
    if (highlightLake) {
      highlightLake.remove();
    }
    if (_this.addRaster === true) {
      esri.map.add(srf_lakes);
      let srf_lakesLayerView;
      esri.mapView.whenLayerView(srf_lakes).then(function (layerView) {
        srf_lakesLayerView = layerView;
      });

      esri.map.add(srf_streams);
      let srf_streamsLayerView;
      esri.mapView.whenLayerView(srf_streams).then(function (layerView) {
        srf_streamsLayerView = layerView;
      });

      console.log(_this.upstreamFeatures);

      _this.upstreamFeatures.forEach((feat) => {
        if (_this.mapQuery != '') {
          if (_this.mapQuery.startsWith(feat.qt)) {
            let lake;
            let srl;
            if (feat.lk != []) {
              feat.lk.forEach((a) => {
                lake = "'" + a + "'";
                const queryLakes = srf_lakes.createQuery();
                queryLakes.where = 'lake_name = ' + lake;

                srf_lakes.queryFeatures(queryLakes).then(function (result) {
                  let feature = result.features[0];
                  if (highlightLake) {
                    highlightLake.remove();
                    highlightLake = null;
                  }
                  highlightLake = srf_lakesLayerView.highlight(
                    feature.attributes['OBJECTID'],
                  );
                });
              });
            }
            if (feat.st) {
              srl = "'" + feat.st + "'";
              const queryStreams = srf_streams.createQuery();
              queryStreams.where = 'sfr_name =' + srl;

              srf_streams.queryFeatures(queryStreams).then(function (result) {
                let feature = result.features[0];
                if (highlightStream) {
                  highlightStream.remove();
                  highlightStream = null;
                }
                highlightStream = srf_streamsLayerView.highlight(
                  feature.attributes['OBJECTID'],
                );
              });
            }
          }
        }
      });
    } else {
      if (highlightLake) {
        highlightLake.remove();
      }
      if (highlightStream) {
        highlightStream.remove();
      }
      esri.map.remove(srf_lakes);
      esri.map.remove(srf_streams);
    }
  });

  watch(locationSearch, () => {
    calculateBySearch();
  });

  watch(locationValue, () => {
    if (_this.nonCoordLoc === true) {
      searchWidg.search(_this.locationValue).then((event) => {
        _this.searchResults = event.results;
        let geom = _this.searchResults[0].results[0].feature.geometry;

        if (_this.planType === 'evaluate') {
          // let point;

          _this.circleFeatures = [];
          _this.resultsFeatures = [];

          let markerSymbol = new SimpleMarkerSymbol({
            style: 'circle',
            color: [125, 125, 125],
            size: 5,
            outline: {
              color: [225, 0, 0],
              width: 1,
            },
          });

          let point = new Point({
            x: geom.longitude,
            y: geom.latitude,
            symbol: markerSymbol,
          });

          let pointGraphic = new Graphic({
            geometry: point,
            symbol: markerSymbol,
          });

          let circle = new Circle({
            center: point,
            geodesic: true,
            radius: 2,
            radiusUnit: 'miles',
          });

          let circleGraphic = new Graphic({
            geometry: circle,
            symbol: {
              type: 'simple-fill',
              color: null,
              outline: {
                type: 'simple-line',
                color: [125, 125, 125],
                width: 2,
                style: 'short-dash',
              },
            },
          });

          const query = muk_srl.createQuery(circle);
          const queryb = muk_lakes.createQuery(circle);
          const queryc = muk_fens.createQuery(circle);
          const queryd = all_results.createQuery(point);

          query.geometry = circle;
          queryb.geometry = circle;
          queryc.geometry = circle;
          queryd.geometry = point;

          muk_srl.queryFeatures(query).then(function (result) {
            result.features.forEach((feat) => {
              _this.circleFeatures.push(feat.attributes);
            });
          });

          muk_lakes.queryFeatures(queryb).then(function (result) {
            result.features.forEach((feat) => {
              _this.circleFeatures.push(feat.attributes);
            });
          });

          muk_fens.queryFeatures(queryc).then(function (result) {
            result.features.forEach((feat) => {
              _this.circleFeatures.push(feat.attributes);
            });
          });

          all_results.queryFeatures(queryd).then(function (result) {
            result.features.forEach((feat) => {
              _this.resultsFeatures.push(feat.attributes);
            });
          });

          esri.mapView.graphics.removeAll();
          esri.mapView.graphics.add(circleGraphic);
          esri.mapView.graphics.add(pointGraphic);

          _this.evalCircle = true;
        }
      });
    }
  });

  watch(featCounter, () => {
    const rad = document.getElementsByClassName('q-radio');

    for (let i = 0; i < rad.length; i++) {
      _this.radios.push(rad[i].ariaLabel);
    }

    let i;
    let q;

    _this.radios.forEach((r) => {
      i = r.split(' -');
      q = i[0];
    });

    for (let i = 0; i < rad.length; i++) {
      rad[i].addEventListener('mouseover', function () {
        if (_this.planType === 'search') {
          let highlightLakes = '';
          let highlightSrl = '';
          let highlightFens = '';

          const querya = muk_srl.createQuery();
          querya.where = 'CommonName = ' + "'" + q + "'";

          const queryb = muk_lakes.createQuery();
          queryb.where = 'CommonName = ' + "'" + q + "'";

          const queryc = muk_fens.createQuery();
          queryc.where = 'CommonName = ' + "'" + q + "'";

          muk_srl.queryFeatures(querya).then(function (result) {
            let feature = result.features[0];

            if (feature) {
              if (highlightSrl) {
                highlightSrl.remove();
                highlightSrl = null;
              } else {
                highlightSrl = muk_srlLayerView.highlight(
                  feature.attributes['OBJECTID'],
                );
              }
            }
          });

          muk_lakes.queryFeatures(queryb).then(function (result) {
            let feature = result.features[0];

            if (feature) {
              if (highlightLakes) {
                highlightLakes.remove();
                highlightLakes = null;
              } else {
                highlightLakes = muk_lakesLayerView.highlight(
                  feature.attributes['OBJECTID'],
                );
              }
            }
          });

          muk_fens.queryFeatures(queryc).then(function (result) {
            let feature = result.features[0];

            if (feature) {
              if (highlightFens) {
                highlightFens.remove();
                highlightFens = null;
              } else {
                highlightFens = muk_fensLayerView.highlight(
                  feature.attributes['OBJECTID'],
                );
              }
            }
          });
        }
      });
    }
  });

  watch(supportingMapVisibleLayers, () => {
    _this.updateSupportingVisibility();
  });

  watch(supportingVisibleLayerOpacity, () => {
    _this.updateSupportingOpacity();
  });

  watch(mapQuery, () => {
    const webMap = document.querySelector('arcgis-map').view.map;
    const mapView = document.querySelector('arcgis-map').view;
    let layerTitle = '';
    let queryTitle = '';

    if (_this.addRaster === true) {
      // esri.mapImage.sublayers.forEach((sub) => {
      //   layerTitle = sub.title;
      //   queryTitle = _this.mapQuery;
      //   sub.visible = false;

      //   if (queryTitle === layerTitle) {
      //     sub.visible = true;
      //   } else {
      //     sub.visible = false;
      //   }
      // });
      webMap.allLayers.items.forEach((layer) => {
        if (layer.title === 'Mukwonago') {
          console.log(layer);
          layer.allLayers.items.forEach((sub) => {
            layerTitle = sub.title;
            queryTitle = _this.mapQuery;
            sub.visible = false;

            if (queryTitle === layerTitle) {
              sub.visible = true;
            } else {
              sub.visible = false;
            }
          });
        }
      });
    }
    if (_this.addRaster === false) {
      webMap.allLayers.items.forEach((layer) => {
        if (layer.title === 'Mukwonago') {
          layer.allLayers.items.forEach((sub) => {
            sub.visible = false;
          });
        }
      });
    }
  });

  watch(planType, () => {
    esri.mapView.graphics.removeAll();
  });

  watch(optionLayers, () => {
    if (_this.wetlandWatersheds.length == 1) {
      _this.updateFeatureLayer(_this.optionLayers.id8);
    } else if (_this.wetlandWatersheds.length == 2) {
      _this.updateFeatureLayer(_this.optionLayers.id10);
    } else if (_this.wetlandWatersheds.length == 3) {
      _this.updateFeatureLayer(_this.optionLayers.id12);
    }
  });

  watch(removeGuild, () => {
    if (_this.removeGuild == true) {
      findAnyLayerById(webMap, 233).visible = false;
      findAnyLayerById(webMap, 237).visible = false;
      findAnyLayerById(webMap, 234).visible = false;
      findAnyLayerById(webMap, 235).visible = false;
      findAnyLayerById(webMap, 236).visible = false;
      findAnyLayerById(webMap, 232).visible = false;
      _this.removeGuild == false;
    }
  });

  watch(guildLayer, () => {
    console.log(esri.mapImage);

    findAnyLayerById(webMap, 233).visible = false;
    findAnyLayerById(webMap, 237).visible = false;
    findAnyLayerById(webMap, 234).visible = false;
    findAnyLayerById(webMap, 235).visible = false;
    findAnyLayerById(webMap, 236).visible = false;
    findAnyLayerById(webMap, 232).visible = false;
    _this.removeGuild = false;

    console.log(_this.guildLayer);
    console.log(findAnyLayerById(webMap, _this.guildLayer));

    findAnyLayerById(webMap, _this.guildLayer).visible = true;
    findAnyLayerById(webMap, _this.guildLayer).opacity = _this.guildOpacity;
  });

  watch(serviceLayer, () => {
    syncWatershedQueryLayers();
    removeLayer();
  });

  watch(rfLayer, () => {
    syncWatershedQueryLayers();
    removeLayer();
  });

  watch(rfSelectLayer, () => {
    syncRfSelectionQueryLayers();
    removeLayer();
  });

  watch(serviceType, () => {
    if (_this.serviceType == 'nos') {
      updateNosLayer();
    } else if (_this.serviceType == 'rf') {
      updateRfLayer();
    }
  });

  watch(previousSelected, () => {
    esri.map.remove(esri.featureLayer);
    esri.map.remove(esri.selectedWatershed);
    esri.map.remove(esri.rfWatershed);
    esri.map.remove(esri.prwLayer);
    esri.map.remove(esri.rfSelectedWatershed);

    findAnyLayerById(webMap, _this.serviceLayer).visible = false;
    findAnyLayerById(webMap, _this.rfLayer).visible = false;
    findAnyLayerById(webMap, _this.rfSelectLayer).visible = false;
    esri.map.remove(esri.prwLayer);
    esri.mapView.graphics.removeAll();

    if (this.previousSelected.hucLevel == 'HUC 6') {
      _this.h8 = false;
      _this.h10 = false;
      _this.h12 = false;
      _this.showServices = true;
      _this.showNumServices = false;
      _this.selectSite = false;
      _this.rangeOfService = false;

      esri.defExp = "WHUC6 = '" + _this.previousSelected.hucNum + "'";
      hucMask.definitionExpression =
        "WHUC8 <> '" + _this.previousSelected.hucNum + "'";

      huc6ws.visible = false;
      huc10ws.visible = false;
      huc12ws.visible = false;
      huc8ws.visible = true;

      _this.updateFeatureLayer(this.optionLayers.id8);

      _this.wetlandWatersheds.forEach((i, index) => {
        if (i.desc != 'HUC 6') {
          _this.wetlandWatersheds.splice(index);
        }
      });
    } else if (this.previousSelected.hucLevel == 'HUC 8') {
      _this.h8 = true;
      _this.h10 = false;
      _this.h12 = false;
      _this.showServices = true;
      _this.showNumServices = false;
      _this.selectSite = false;
      _this.rangeOfService = false;

      esri.defExp = "WHUC8 = '" + _this.previousSelected.hucNum + "'";
      hucMask.definitionExpression =
        "WHUC10 <> '" + _this.previousSelected.hucNum + "'";

      huc6ws.visible = false;
      huc10ws.visible = true;
      huc12ws.visible = false;
      huc8ws.visible = false;

      _this.updateFeatureLayer(this.optionLayers.id10);

      _this.wetlandWatersheds.forEach((i, index) => {
        if (i.desc == 'HUC 10') {
          _this.wetlandWatersheds.splice(index);
        }
      });
    }
  });

  watch(sliderOpacity, () => {
    esri.featureLayer.opacity = _this.sliderOpacity;
    esri.prwLayer.opacity = _this.sliderOpacity;
    esri.mapImage.sublayers.forEach((layer) => {
      layer.opacity = _this.sliderOpacity;
    });
  });

  watch(guildOpacity, () => {
    findAnyLayerById(webMap, _this.guildLayer).opacity = _this.guildOpacity;
  });

  watch(projectType, () => {
    {
      if (_this.projectType == 'existing') {
        if (_this.firstSelected == true && _this.refreshSearch == true) {
          esri.mapImage.sublayers.forEach((layer) => {
            layer.visible = false;
          });
          esri.map.remove(esri.rfWatershed);
          esri.map.remove(esri.selectedWatershed);
          esri.map.remove(esri.rfSelectedWatershed);
          esri.map.remove(esri.prwLayer);
          esri.map.remove(esri.featureLayer);
          esri.mapImage.findSublayerById(3).visible = false;
          hucMask.visible = false;
          findAnyLayerById(webMap, _this.serviceLayer).visible = false;
          findAnyLayerById(webMap, _this.rfLayer).visible = false;
          _this.wetlandWatersheds = [];
          _this.refreshSearch = false;
          _this.firstSelected = false;
          _this.h6 = false;
          _this.h8 = false;
          _this.h10 = false;
          _this.h12 = false;
          _this.showCombined = false;
          _this.showNumServices = false;
          _this.showServices = false;
          _this.wetlandLocation = '';
          esri.defExp = '';
          _this.updateFeatureLayer(1);
          esri.mapView.goTo({ center: [-91.393376, 44.666754], zoom: 6 });
          _this.projectType = 'new';
          esri.mapView.graphics.remove(esri.mapView.graphics._items[0]);
        }
      }
    }
  });
};
</script>

<style>
@media screen and (max-width: 700px) {
  #map {
    width: 100%;
    min-height: 20vh;
  }
  .esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {
    height: fit-content;
  }
}
.esri-basemap-gallery {
  margin-bottom: 0px !important;
}
#toolbarDiv {
  display: flex;
}
#distance,
#area,
#clear,
#printBtn {
  border: none !important;
}

#info {
  background-color: black;
  opacity: 0.6;
  color: white;
  height: 40px;
  width: auto;
  font-size: large;
  margin: 0px 0px 5px auto;
  padding-left: 15px;
  padding-right: 15px;
  display: block;
  border-radius: 3px;
  padding-top: 5px !important;
  visibility: hidden;
}
</style>
