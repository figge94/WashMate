<template>
  <ProductSpecsCard
    v-if="specItems.length"
    title="Prestanda"
    :items="specItems"
    :columns="2" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Energidata, MachineType, Produkt } from "~/types/machine";
import { useSpecsBuilder } from "~/composables/useSpecsBuilder";
import { spec } from "~/utils/spec";

const props = defineProps<{
  produkt: Partial<Pick<Produkt, "maxCentrifugering" | "energiklass">>;
  energidata: Partial<
    Pick<Energidata, "ljudnivaCentrifugeringDb" | "ljudnivaTvattDb">
  >;
  type: MachineType;
}>();

const isWasher = computed(() => props.type === "washer");

const items = computed(() => [
  spec(
    "centrifugering",
    "Max centrifugering",
    props.produkt.maxCentrifugering,
    "varv/min",
    isWasher.value
  ),
  spec("energiklass", "Energiklass", props.produkt.energiklass),
  spec(
    "ljud",
    isWasher.value ? "Ljud centrifugering" : "Ljudnivå",
    isWasher.value
      ? props.energidata.ljudnivaCentrifugeringDb
      : props.energidata.ljudnivaTvattDb,
    "dB"
  )
]);

const { specItems } = useSpecsBuilder(items);
</script>
