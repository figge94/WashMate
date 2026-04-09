<template>
  <ProductSpecsCard title="Installation" :items="specItems" :columns="2" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ProduktVatten } from "~/types/machine";
import { useSpecsBuilder } from "~/composables/useSpecsBuilder";
import { spec } from "@/utils/spec";

const { isWasher } = useProductType();

const props = defineProps<{
  vatten?: Partial<ProduktVatten>;
  kapslingsklass?: string;
}>();

const items = computed(() => [
  spec("vatten", "Vatten", props.vatten?.inlopp, undefined, isWasher.value),
  spec(
    "minTryck",
    "Minsta tryck",
    props.vatten?.minTryckBar,
    "bar",
    isWasher.value
  ),
  spec(
    "maxTryck",
    "Högsta tryck",
    props.vatten?.maxTryckBar,
    "bar",
    isWasher.value
  ),
  spec("ip", "IP-klass", props.kapslingsklass)
]);

const { specItems } = useSpecsBuilder(items);
</script>
