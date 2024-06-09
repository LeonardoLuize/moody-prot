<script lang="ts">
  import { onMount } from 'svelte';

  interface User {
    id: number;
    name: string;
    image: string;
  }

  let users: User[] = [
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
  let selectedUser: number | null = null;

  onMount(() => {
    // Fetch users data from API or any other source
    // and update the 'users' array
  });

  function handleUserSelection(event: Event): void {
    const target = event.target as HTMLInputElement;
    selectedUser = parseInt(target.value, 10);
  }
</script>

<div class="w-full flex justify-around gap-10 mt-5">
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
          <span
            class="bg-secondary-200 py-1 px-2 text-sm rounded-xl border-2 border-secondary-500"
            >Café</span
          >
          <span
            class="bg-secondary-200 py-1 px-2 text-sm rounded-xl border-2 border-secondary-500"
            >Sushi</span
          >
        </div>
      </div>
    </label>
  {/each}
</div>
