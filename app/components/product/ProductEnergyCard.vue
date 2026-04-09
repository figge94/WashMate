<template>
  <ProductSpecsCard title="Energidata" :items="specItems" :columns="3">
    <p
      v-if="energidata.kommentar"
      class="mt-6 text-sm text-slate-600 dark:text-slate-300">
      {{ energidata.kommentar }}
    </p>

    <ProductEnergyPrograms
      v-if="energidata.standardprogram?.length"
      class="mt-8"
      :kommentar="energidata.kommentar"
      :standardprogram="energidata.standardprogram" />
  </ProductSpecsCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Energidata } from "~/types/machine";
import { useSpecsBuilder } from "~/composables/useSpecsBuilder";
import { spec } from "~/utils/spec";

const { isWasher } = useProductType();

const props = defineProps<{
  energidata: Partial<Energidata>;
}>();

const items = computed(() => [
  spec(
    "energi",
    "Årlig energiförbrukning",
    props.energidata.arligEnergiforbrukningKwh,
    "kWh"
  ),
  spec(
    "vatten",
    "Årlig vattenförbrukning",
    props.energidata.arligVattenforbrukningLiter,
    "liter",
    isWasher.value
  ),
  spec(
    "rest",
    "Restfukthalt",
    props.energidata.restfukthaltProcent,
    "%",
    isWasher.value
  ),
  spec(
    "ljudTvatt",
    "Ljud tvätt",
    props.energidata.ljudnivaTvattDb,
    "dB",
    isWasher.value
  ),
  spec(
    "ljud",
    isWasher.value ? "Ljud centrifugering" : "Ljudnivå",
    props.energidata.ljudnivaCentrifugeringDb,
    "dB"
  )
]);

const { specItems } = useSpecsBuilder(items);
</script>
