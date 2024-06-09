<script lang="ts">
  import { onMount } from 'svelte';

  interface User {
    id: number;
    name: string;
    image: string;
    metrics: {
      id: number;
      name: string;
      interactions: number;
    }[];
  }

  export let users: User[];
  export let selectedUser: number = 0;

  onMount(() => {
    // Fetch users data from API or any other source
    // and update the 'users' array
  });

  function handleUserSelection(event: Event): void {
    const target = event.target as HTMLInputElement;
    selectedUser = parseInt(target.value, 10);
  }
</script>

<div
  class="w-full flex justify-around gap-10 mt-5 pb-3 overflow-x-auto scrollbar-custom"
>
  {#each users as user}
    <label
      class={`flex gap-3 w-full bg-primary-100 border-2 cursor-pointer ${
        user.id === selectedUser ? 'border-primary-500' : 'border-primary-300'
      } rounded-lg p-3`}
    >
      <input
        type="radio"
        name="user"
        value={user.id}
        bind:group={selectedUser}
        on:change={handleUserSelection}
        class="form-radio text-indigo-600 h-4 w-4 hidden"
      />
      <div class="w-[80px] h-[80px] overflow-hidden rounded-lg">
        <img class="w-full" src={user.image} alt="user profile" />
      </div>

      <div class="flex flex-col">
        <span class="text-gray-700 font-bold">{user.name}</span>

        <span class="text-sm mt-2">Gosta de:</span>
        <div class="flex items-center mt-1 gap-2">
          {#each user.metrics as metric}
            <span
              class="bg-secondary-200 py-1 px-2 text-sm rounded-xl border-2 border-secondary-500"
              >{metric.name}</span
            >
          {/each}
        </div>
      </div>
    </label>
  {/each}
</div>

<style>
  .scrollbar-custom::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem vertical */
    height: 12px; /* Altura da barra de rolagem horizontal */
  }

  .scrollbar-custom::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor de fundo da trilha da barra de rolagem */
  }

  .scrollbar-custom::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do polegar (a parte que se move) da barra de rolagem */
    border-radius: 10px; /* Bordas arredondadas do polegar */
    border: 3px solid #f1f1f1; /* Espaçamento entre o polegar e a trilha */
  }

  .scrollbar-custom::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor do polegar ao passar o mouse */
  }

  /* Estilos para Firefox */
  .scrollbar-custom {
    scrollbar-width: thin; /* Barra de rolagem fina */
    scrollbar-color: #c5c5c5 #f1f1f1; /* Cor do polegar e da trilha */
  }
</style>
