<template>
  <ProductSpecsCard title="El" :items="specItems" :columns="2" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ProduktEl } from "~/types/machine";
import { useSpecsBuilder } from "~/composables/useSpecsBuilder";
import { spec } from "~/utils/spec";

const props = defineProps<{
  el: Partial<ProduktEl>;
}>();

const items = computed(() => [
  spec("spanning", "Spänning", props.el.spanningV, "V"),
  spec("effekt", "Effekt", props.el.effektW, "W"),
  spec("sakring", "Säkring", props.el.sakringA, "A"),
  spec("frekvens", "Frekvens", props.el.frekvensHz, "Hz")
]);

const { specItems } = useSpecsBuilder(items);
</script>
