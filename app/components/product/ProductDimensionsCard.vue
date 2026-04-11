<template>
  <ProductSpecsCard title="Mått" :items="specItems" :columns="4" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ProduktDimensioner } from "~/types/machine";
import { useSpecsBuilder } from "~/composables/useSpecsBuilder";
import { spec } from "~/utils/spec";

const props = defineProps<{
  dimensioner: Partial<ProduktDimensioner>;
}>();

const items = computed(() => [
  spec("bredd", "Bredd", props.dimensioner.breddCm, "cm"),
  spec("hojd", "Höjd", props.dimensioner.hojdCm, "cm"),
  spec("djup", "Djup", props.dimensioner.djupCm, "cm"),
  spec(
    "totalDjup",
    "Totalt djup inkl. lucka",
    props.dimensioner.totalDjupCm,
    "cm"
  )
]);

const { specItems } = useSpecsBuilder(items);
</script>
