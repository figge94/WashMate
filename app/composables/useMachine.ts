import { machines } from "~/data/machines";
import type { ProgramFunktionKey } from "~/types/machine";

export function useMachine() {
  const getMachine = (id: string) => {
    return machines.find((machine) => machine.id === id) ?? null;
  };

  const getProgramByName = (id: string, namn: string) => {
    const machine = getMachine(id);
    return machine?.program.find((program) => program.namn === namn) ?? null;
  };

  const harFunktion = (
    id: string,
    programNamn: string,
    funktion: ProgramFunktionKey
  ) => {
    const machine = getMachine(id);

    const hittatProgram = machine?.program.find(
      (item) => item.namn === programNamn
    );

    return hittatProgram?.funktioner.includes(funktion) ?? false;
  };

  return {
    getMachine,
    getProgramByName,
    harFunktion
  };
}
