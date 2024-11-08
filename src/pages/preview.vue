<template>
  <main class="flex grow flex-col items-center py-8">
    <article class="space-y-7">
      <section class="space-y-3">
        <h2>Персональные данные</h2>
        <p class="font-bold">Василий, 30 лет</p>
      </section>

      <section class="space-y-3">
        <h2>Дети</h2>
        <ChildSection name="Петр" :age="10" />
        <ChildSection name="Василий" :age="14" />
      </section>
    </article>
  </main>
</template>
