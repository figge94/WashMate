<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div
        class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Produktinformation
        </p>

        <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {{ machine.produkt.marke }} {{ machine.produkt.modell }}
        </h1>

        <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          Här hittar du teknisk information och specifikationer för din
          tvättmaskin.
        </p>
      </div>

      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <!-- Allmänt -->
        <div
          class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 class="text-lg font-semibold tracking-tight">Allmänt</h2>

          <div
            class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Märke:</span
              >
              {{ machine.produkt.marke }}
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Modell:</span
              >
              {{ machine.produkt.modell }}
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >PNC:</span
              >
              {{ machine.produkt.pnc }}
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Kapacitet:</span
              >
              {{ machine.produkt.kapacitetKg }} kg
            </p>
          </div>
        </div>

        <!-- Prestanda -->
        <div
          class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 class="text-lg font-semibold tracking-tight">Prestanda</h2>

          <div
            class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Max centrifugering:</span
              >
              {{ machine.produkt.maxCentrifugering }} varv/min
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Energiklass:</span
              >
              {{ machine.produkt.energiklass }}
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Ljudnivå:</span
              >
              {{ machine.produkt.ljudnivaDb }} dB
            </p>
          </div>
        </div>
      </div>

      <!-- Mått -->
      <div
        class="mt-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 class="text-lg font-semibold tracking-tight">Mått</h2>

        <div class="mt-6 grid gap-4 sm:grid-cols-4">
          <div
            class="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/60">
            <p
              class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Bredd
            </p>
            <p class="mt-2 text-lg font-semibold">
              {{ machine.produkt.dimensioner.breddCm }} cm
            </p>
          </div>

          <div
            class="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/60">
            <p
              class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Höjd
            </p>
            <p class="mt-2 text-lg font-semibold">
              {{ machine.produkt.dimensioner.hojdCm }} cm
            </p>
          </div>

          <div
            class="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/60">
            <p
              class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Djup
            </p>
            <p class="mt-2 text-lg font-semibold">
              {{ machine.produkt.dimensioner.djupCm }} cm
            </p>
          </div>

          <div
            v-if="machine.produkt.dimensioner.totalDjupCm"
            class="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/60">
            <p
              class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Totalt djup
            </p>
            <p class="mt-2 text-lg font-semibold">
              {{ machine.produkt.dimensioner.totalDjupCm }} cm
            </p>
          </div>
        </div>
      </div>

      <!-- Teknik -->
      <div class="mt-4 grid gap-4 sm:grid-cols-2">
        <div
          class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 class="text-lg font-semibold tracking-tight">El</h2>

          <div
            class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Spänning:</span
              >
              {{ machine.produkt.el.spanningV }} V
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Effekt:</span
              >
              {{ machine.produkt.el.effektW }} W
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Säkring:</span
              >
              {{ machine.produkt.el.sakringA }} A
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Frekvens:</span
              >
              {{ machine.produkt.el.frekvensHz }} Hz
            </p>
          </div>
        </div>

        <div
          class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 class="text-lg font-semibold tracking-tight">Installation</h2>

          <div
            class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Vatten:</span
              >
              {{ machine.produkt.vatten.inlopp }}
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Min tryck:</span
              >
              {{ machine.produkt.vatten.minTryckBar }} bar
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >Max tryck:</span
              >
              {{ machine.produkt.vatten.maxTryckBar }} bar
            </p>
            <p>
              <span class="font-medium text-slate-900 dark:text-slate-100"
                >IP-klass:</span
              >
              {{ machine.produkt.kapslingsklass }}
            </p>
          </div>
        </div>
      </div>
      <!-- Energidata -->
      <section
        class="mt-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 class="text-lg font-semibold tracking-tight">Energidata</h2>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {{ machine.energidata.kommentar }}
        </p>

        <!-- Snabb fakta -->
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Årlig energiförbrukning
            </p>
            <p class="mt-1 font-semibold">
              {{ machine.energidata.arligEnergiforbrukningKwh }} kWh
            </p>
          </div>

          <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Årlig vattenförbrukning
            </p>
            <p class="mt-1 font-semibold">
              {{ machine.energidata.arligVattenforbrukningLiter }} liter
            </p>
          </div>

          <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Restfukthalt
            </p>
            <p class="mt-1 font-semibold">
              {{ machine.energidata.restfukthaltProcent }} %
            </p>
          </div>

          <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <p class="text-xs text-slate-500 dark:text-slate-400">Ljud tvätt</p>
            <p class="mt-1 font-semibold">
              {{ machine.energidata.ljudnivaTvattDb }} dB
            </p>
          </div>

          <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Ljud centrifugering
            </p>
            <p class="mt-1 font-semibold">
              {{ machine.energidata.ljudnivaCentrifugeringDb }} dB
            </p>
          </div>
        </div>

        <!-- Standardprogram -->
        <div class="mt-8">
          <h3 class="text-base font-semibold">
            Standardprogram (energietikett)
          </h3>

          <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {{ machine.energidata.kommentar }}
          </p>

          <!-- Mobil: kort -->
          <div class="mt-4 grid gap-3 sm:hidden">
            <div
              v-for="item in machine.energidata.standardprogram"
              :key="item.namn + item.last"
              class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
              <p class="font-semibold text-slate-900 dark:text-slate-100">
                {{ item.namn }}
              </p>
              <div
                class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <p>
                  <span class="font-medium text-slate-900 dark:text-slate-100"
                    >Last:</span
                  >
                  {{ item.last }}
                </p>
                <p>
                  <span class="font-medium text-slate-900 dark:text-slate-100"
                    >Energi:</span
                  >
                  {{ item.energiKwh }} kWh
                </p>
                <p>
                  <span class="font-medium text-slate-900 dark:text-slate-100"
                    >Tid:</span
                  >
                  {{ item.tidMinuter }} min
                </p>
              </div>
            </div>
          </div>

          <!-- Desktop/tablet: tabell -->
          <div
            class="mt-4 hidden overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 sm:block">
            <div class="overflow-x-auto">
              <table class="min-w-full text-sm">
                <thead class="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th class="px-4 py-3 text-left">Program</th>
                    <th class="px-4 py-3 text-left">Last</th>
                    <th class="px-4 py-3 text-left">Energi</th>
                    <th class="px-4 py-3 text-left">Tid</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="item in machine.energidata.standardprogram"
                    :key="item.namn + item.last"
                    class="border-t border-slate-200 dark:border-slate-700">
                    <td class="px-4 py-3">{{ item.namn }}</td>
                    <td class="px-4 py-3">{{ item.last }}</td>
                    <td class="px-4 py-3">{{ item.energiKwh }} kWh</td>
                    <td class="px-4 py-3">{{ item.tidMinuter }} min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useMachine } from "~/composables/useMachine";

const { machine } = useMachine();

useHead({
  title: "Produktinformation | WashMate",
  meta: [
    {
      name: "description",
      content: "Mått, kapacitet och teknisk information om tvättmaskinen."
    }
  ]
});
</script>
