<script lang="ts">
  import MoodySvg from '$lib/assets/moody.svg';
  import SelectUser from '$lib/components/SelectUser/index.svelte';

  let selectedUser = 1;
  let users = [
    {
      id: 1,
      name: 'User 1',
      image:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'User 2',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'User 3',
      image:
        'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  $: currentUser = users.find((x) => x.id === selectedUser);
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
      <h1 class="text-xl">Selecione um usuário:</h1>
      <SelectUser {users} bind:selectedUser />
    </div>

    {#if selectedUser != 0}
      <div class="max-w-[1200px] w-full mt-10">
        <h2 class="text-xl">
          Lugares selecionados para {currentUser && currentUser.name}:
        </h2>
      </div>
    {/if}
  </main>
</div>
