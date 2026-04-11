<template>
  <BaseCard
    :title="program.namn"
    :description="program.beskrivning"
    :clickable="true"
    @click="openProgram">
    <ProgramMetaChips :program="program" :machine-type="machineType" />

    <ProgramFunctionChips
      v-if="program.funktioner?.length"
      class="mt-5"
      :funktioner="program.funktioner"
      :programfunktioner="programfunktioner" />
  </BaseCard>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type {
  MachineType,
  Program,
  ProgramFunktion,
  ProgramFunktionKey
} from "~/types/machine";

const props = defineProps<{
  program: Program;
  machineType: MachineType;
  machineId: string;
  programfunktioner: Partial<Record<ProgramFunktionKey, ProgramFunktion>>;
}>();

const router = useRouter();

const openProgram = () => {
  router.push(`/${props.machineId}/program/${props.program.id}`);
};
</script>
