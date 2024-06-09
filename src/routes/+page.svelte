<script lang="ts">
  import { api } from '$lib/api';
  import MoodySvg from '$lib/assets/moody.svg';
  import SelectUser from '$lib/components/SelectUser/index.svelte';
  import Place from '$lib/components/Place/index.svelte';
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
  let places = [
    {
      name: 'Café do Ponto',
      image: 'https://picsum.photos/300/300',
      rating: 4.5,
      likes: 10,
    },
    {
      name: 'Pizzaria Bella',
      image: 'https://picsum.photos/200/300',
      rating: 4.5,
      likes: 12,
    },
    {
      name: 'Hamburgueria',
      image: 'https://picsum.photos/205/330',
      rating: 4.3,
      likes: 18,
    },
    {
      name: 'Restaurante de Sushi',
      image: 'https://picsum.photos/240/340',
      rating: 4.7,
      likes: 25,
    },
    {
      name: 'Cafeteria',
      image: 'https://picsum.photos/250/250',
      rating: 4.2,
      likes: 15,
    },
    {
      name: 'Padaria Delícia',
      image: 'https://picsum.photos/270/270',
      rating: 4.6,
      likes: 8,
    },
    {
      name: 'Paraíso do Sorvete',
      image: 'https://picsum.photos/280/280',
      rating: 4.8,
      likes: 20,
    },
    {
      name: 'Café no Parque',
      image: 'https://picsum.photos/220/220',
      rating: 4.4,
      likes: 14,
    },
    {
      name: 'Trattoria Italiana',
      image: 'https://picsum.photos/230/230',
      rating: 4.6,
      likes: 22,
    },
    {
      name: 'Cantina Mexicana',
      image: 'https://picsum.photos/240/240',
      rating: 4.3,
      likes: 17,
    },
    {
      name: 'Churrascaria',
      image: 'https://picsum.photos/250/250',
      rating: 4.7,
      likes: 28,
    },
    {
      name: 'Cozinha Tailandesa',
      image: 'https://picsum.photos/260/260',
      rating: 4.5,
      likes: 19,
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
  <header
    class="flex justify-center py-5 shadow-md flex-col md:flex-row items-center gap-5 md:gap-0 md:items-start"
  >
    <div class="flex gap-2 items-center ml-5">
      <img class="h-[30px] pt-1" src={MoodySvg} alt="moody logo" />
      <span class="text-3xl font-thin">/</span>
      <span class="text-2xl font-thin tracking-[0.1em]">Prototipe</span>
    </div>

    <button class="btn ml-auto variant-filled-primary mr-5 w-[90%] md:w-fit"
      >Como Usar?</button
    >
  </header>

  <main class="flex w-full items-center flex-col px-5 md:px-0">
    <div class="max-w-[1200px] w-full mt-10">
      <h1 class="text-xl">Selecione um usuário:</h1>
      <SelectUser {users} bind:selectedUser />
    </div>

    {#if selectedUser != 0}
      <div class="max-w-[1200px] w-full mt-10">
        <h2 class="text-xl">
          Lugares selecionados para {currentUser && currentUser.name}:
        </h2>

        <div class="w-full flex flex-wrap items-start gap-10 my-10">
          {#each places as place}
            <Place {place} />
          {/each}
        </div>
      </div>
    {/if}
  </main>
</div>
