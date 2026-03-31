<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <NuxtLink
      to="/tvatthjalp"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Tvätthjälp</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Få hjälp att välja rätt program för vardagstvätt, bomull, ylle och
        ömtåliga plagg.
      </p>
    </NuxtLink>

    <NuxtLink
      to="/program"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Program</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Se temperatur, max mängd och centrifugering för alla program.
      </p>
    </NuxtLink>

    <NuxtLink
      to="/produktinformation"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Produktinformation</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Se modell, kapacitet, mått, energidata och annan viktig information.
      </p>
    </NuxtLink>

    <NuxtLink
      to="/felsokning"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Felsökning</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Vanliga problem och enkla lösningar när något inte fungerar som det ska.
      </p>
    </NuxtLink>
  </div>
</template>
