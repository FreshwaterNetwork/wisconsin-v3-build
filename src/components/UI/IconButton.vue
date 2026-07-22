<template>
  <q-btn
    flat
    :style="iconInfo.style"
    round
    :color="iconInfo.color"
    text-color="primary"
    :padding="iconInfo.padding"
    :icon="iconInfo.icon"
    @click="$emit(method)"
    :size="iconInfo.size"
  >
    <tool-tip
      v-if="iconInfo.tooltip"
      :text="iconInfo.tooltip"
      :delay="400"
    ></tool-tip>
  </q-btn>
</template>
<script>
import ToolTip from './Tooltip.vue';
export default {
  components: {
    ToolTip,
  },
  props: {
    method: { type: String },
    type: { type: String },
    otherTooltip: { type: String, required: false },
  },
  computed: {
    // This is where icons are chosen for the button, including their size, positioning, and tooltip.
    iconInfo() {
      let icon = '';
      let size = '';
      let padding = '';
      let tooltip = '';
      let style = 'height: 25px; width: 25px;';
      let color = '';
      // info icon
      if (this.type === 'info') {
        icon = 'info_outlined';
        size = '10pt';
        padding = '1px';
        tooltip = 'Info';
      }
      // close icon
      if (this.type === 'close') {
        icon = 'close';
        size = '11pt';
        padding = '0px';
        tooltip = 'Close';
      }
      // handle other tooltip
      if (this.otherTooltip) {
        tooltip = this.otherTooltip;
        if (this.otherTooltip === 'none') {
          tooltip = false;
        }
      }
      return { icon, size, padding, tooltip, style, color };
    },
  },
};
</script>
