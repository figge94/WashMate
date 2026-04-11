<template>
  <ProductSpecsCard
    v-if="specItems.length"
    title="Installation"
    :items="specItems"
    :columns="2" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MachineType, ProduktVatten } from "~/types/machine";
import { useSpecsBuilder } from "~/composables/useSpecsBuilder";
import { spec } from "@/utils/spec";

const props = defineProps<{
  vatten?: Partial<ProduktVatten>;
  kapslingsklass?: string;
  type: MachineType;
}>();

const isWasher = computed(() => props.type === "washer");

const items = computed(() => [
  spec(
    "vatten",
    "Vattenanslutning",
    props.vatten?.inlopp,
    undefined,
    isWasher.value
  ),

  spec(
    "minTryck",
    "Min tryck",
    props.vatten?.minTryckBar,
    "bar",
    isWasher.value
  ),

  spec(
    "maxTryck",
    "Max tryck",
    props.vatten?.maxTryckBar,
    "bar",
    isWasher.value
  ),

  spec("ip", "Kapslingsklass (IP)", props.kapslingsklass)
]);

const { specItems } = useSpecsBuilder(items);
</script>
