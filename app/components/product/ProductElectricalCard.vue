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
  spec("volt", "Spänning", props.el.spanningV, "V"),
  spec("watt", "Effekt", props.el.effektW, "W"),
  spec("amp", "Säkring", props.el.sakringA, "A"),
  spec("hz", "Frekvens", props.el.frekvensHz, "Hz")
]);

const { specItems } = useSpecsBuilder(items);
</script>
