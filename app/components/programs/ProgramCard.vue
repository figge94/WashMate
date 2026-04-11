<template>
  <BaseCard
    :title="program.namn"
    :description="program.beskrivning"
    :clickable="true">
    <ProgramMetaChips :program="program" :machine-type="machineType" />

    <ProgramFunctionChips
      v-if="program.funktioner?.length"
      class="mt-5"
      :funktioner="program.funktioner"
      :programfunktioner="programfunktioner" />
  </BaseCard>
</template>

<script setup lang="ts">
import type {
  MachineType,
  Program,
  ProgramFunktion,
  ProgramFunktionKey
} from "~/types/machine";

defineProps<{
  program: Program;
  machineType: MachineType;
  programfunktioner: Partial<Record<ProgramFunktionKey, ProgramFunktion>>;
}>();
</script>
