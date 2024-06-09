<script lang="ts">
  import { api } from '$lib/api';
  import MoodySvg from '$lib/assets/moody.svg';
  import SelectUser from '$lib/components/SelectUser/index.svelte';
  import { onMount } from 'svelte';

  let selectedUser = 1;
  let users = [
    {
      id: 1,
      name: 'Ullyses',
      image:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      metrics: [
        {
          id: 1,
          name: 'Café',
          interactions: 10,
        },
        {
          id: 2,
          name: 'Sushi',
          interactions: 5,
        },
      ],
    },
    {
      id: 2,
      name: 'Rachel',
      metrics: [
        {
          id: 1,
          name: 'Bar',
          interactions: 10,
        },
        {
          id: 2,
          name: 'Pizza',
          interactions: 5,
        },
      ],
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Zach',
      metrics: [
        {
          id: 1,
          name: 'Café',
          interactions: 10,
        },
        {
          id: 2,
          name: 'Pizza',
          interactions: 5,
        },
      ],
      image:
        'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  $: currentUser = users.find((x) => x.id === selectedUser);

  onMount(() => {
    api.get('/users/1').then((res) => {
      const user = res.data.data;
      users.push({
        id: user.id,
        name: 'Ulysses',
        image:
          'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        musicGenre: user.music_genre,
        age: user.age,
        metrics: user.metrics.sort((a, b) => b.interactions - a.interactions),
      });
    });

    api.get('/users/2').then((res) => {
      const user = res.data.data;
      users.push({
        id: user.id,
        name: 'Rachel',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        musicGenre: user.music_genre,
        age: user.age,
        metrics: user.metrics.sort((a, b) => b.interactions - a.interactions),
      });
    });

    api.get('/users/3').then((res) => {
      const user = res.data.data;
      users.push({
        id: user.id,
        name: 'Zach',
        image:
          'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        musicGenre: user.music_genre,
        age: user.age,
        metrics: user.metrics.sort((a, b) => b.interactions - a.interactions),
      });
    });
  });
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
