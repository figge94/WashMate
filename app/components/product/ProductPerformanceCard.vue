<template>
  <ProductSpecsCard title="Prestanda" :items="specItems" :columns="2" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Energidata, Produkt } from "~/types/machine";
import { useSpecsBuilder } from "~/composables/useSpecsBuilder";
import { spec } from "~/utils/spec";

const { isWasher } = useProductType();

const props = defineProps<{
  produkt: Partial<Pick<Produkt, "maxCentrifugering" | "energiklass">>;
  energidata: Partial<Pick<Energidata, "ljudnivaCentrifugeringDb">>;
}>();

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
    props.energidata.ljudnivaCentrifugeringDb,
    "dB"
  )
]);

const { specItems } = useSpecsBuilder(items);
</script>
