<template>
  <div id="panel">
    <div>
      <q-btn
        icon="close"
        round
        flat
        color="red"
        @click="ms.rightPanelVis = !ms.rightPanelVis"
      >
        <q-tooltip
          class="bg-white text-primary text-h7 shadow-4"
          style="border: 1pt solid #ccc"
          anchor="center right"
          self="center start"
          >Close</q-tooltip
        >
      </q-btn>
    </div>
    <div class="text-center">Custom Side Panel Content</div>
  </div>
</template>

<script setup>
import { useMapStore } from '../../store/index';

const ms = useMapStore();
</script>

<style scoped>
#panel {
  width: 300px;
  height: calc(100vh - 50px);
  background-color: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  overflow-y: auto;
  position: absolute;
  right: 0px;
}

.panel-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.panel-content {
  padding: 20px;
}
</style>
