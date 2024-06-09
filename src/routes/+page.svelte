<script lang="ts">
  import MoodySvg from '$lib/assets/moody.svg';
  import SelectUser from '$lib/components/SelectUser/index.svelte';
</script>

<div>
  <header class="flex justify-center py-5 shadow-md">
    <div class="flex gap-2 items-center ml-5">
      <img class="h-[30px] pt-1" src={MoodySvg} alt="moody logo" />
      <span class="text-3xl font-thin">/</span>
      <span class="text-2xl font-thin tracking-[0.1em]">Prototipe</span>
    </div>

    <button class="btn ml-auto variant-filled-primary mr-5">Como Usar?</button>
  </header>

  <main class="flex w-full items-center flex-col">
    <div class="max-w-[1200px] w-full mt-10">
      <h1>Selecione um usuário</h1>
      <SelectUser />
    </div>
  </main>
</div>
