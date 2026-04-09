<template>
  <ProductSpecsCard title="Allmänt" :items="specItems" :columns="2" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Produkt } from "~/types/machine";
import { useSpecsBuilder } from "~/composables/useSpecsBuilder";
import { spec } from "~/utils/spec";

const props = defineProps<{
  produkt: Partial<Pick<Produkt, "marke" | "modell" | "pnc" | "kapacitetKg">>;
}>();

const items = computed(() => [
  spec("marke", "Märke", props.produkt.marke),
  spec("modell", "Modell", props.produkt.modell),
  spec("pnc", "PNC", props.produkt.pnc),
  spec("kapacitet", "Kapacitet", props.produkt.kapacitetKg, "kg")
]);

const { specItems } = useSpecsBuilder(items);
</script>
