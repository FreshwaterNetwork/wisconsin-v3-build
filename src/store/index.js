import { defineStore } from 'pinia';
import { markRaw } from 'vue';

export const useMapStore = defineStore('mapStore', () => ({
  // MODELS
  splitterModel: 25,
  mobileSplitterModel: 35,
  leftPanelInfo: false,
  rightPanelVis: true,

  // Layer groups
  mukwonagoLayers: '',
  wetlandsByDesignLayers: '',
  allRasters: '',

  // FUNCTIONS
  getLayersInfo() {
    // get and assign layers
    const webMap = document.querySelector('arcgis-map').view.map;
    const mapView = document.querySelector('arcgis-map').view;
    mapView.when(() => {
      console.log(webMap);
      webMap.allLayers.items.forEach((layer) => {
        if (layer.title === 'Mukwonago') {
          this.mukwonagoLayers = markRaw(layer);
        }
        if (layer.title === 'WetlandsByDesign') {
          this.wetlandsByDesignLayers = markRaw(layer);
        }
      });
    });
  },
}));
