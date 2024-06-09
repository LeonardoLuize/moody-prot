<script lang="ts">
  import { api } from '$lib/api';
  import MoodySvg from '$lib/assets/moody.svg';
  import SelectUser from '$lib/components/SelectUser/index.svelte';
  import Place from '$lib/components/Place/index.svelte';
  import { onMount } from 'svelte';
  import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

  interface User {
    id: number;
    name: string;
    image: string;
    metrics: {
      id: number;
      label: string;
      interactions: number;
    }[];
  }

  interface Place {
    id: number;
    name: string;
    image: string;
    rating: number;
    likes: number;
  }

  const modalStore = getModalStore();

  let selectedUser = 1;
  let users: User[] = [];
  let places: Place[] = [];
  $: currentUser = users.find((x) => x.id === selectedUser);

  onMount(() => {
    api.get('/user/1').then((res) => {
      const user = res.data.data;

      users = [
        ...users,
        {
          id: Number(user.user_id),
          name: 'Ulysses',
          image:
            'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          musicGenre: user.music_genre,
          age: user.age,
          metrics: user.metrics.sort((a, b) => b.interactions - a.interactions),
        },
      ];
    });

    api.get('/user/2').then((res) => {
      const user = res.data.data;
      users = [
        ...users,
        {
          id: Number(user.user_id),
          name: 'Rachel',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          musicGenre: user.music_genre,
          age: user.age,
          metrics: user.metrics.sort((a, b) => b.interactions - a.interactions),
        },
      ];
    });

    api.get('/user/3').then((res) => {
      const user = res.data.data;
      users = [
        ...users,
        {
          id: Number(user.user_id),
          name: 'Zach',
          image:
            'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          musicGenre: user.music_genre,
          age: user.age,
          metrics: user.metrics.sort((a, b) => b.interactions - a.interactions),
        },
      ];
    });
  });

  $: if (currentUser) {
    api.get(`/recommend/${selectedUser}`).then((res) => {
      const data = res.data.data;

      places = data.map((place: any) => ({
        id: place.id,
        name: place.name,
        image: place.image,
        rating: place.rating,
        likes: place.likes,
      }));
    });
  }

  function handleHelp() {
    const modal: ModalSettings = {
      type: 'confirm',
      title: 'Como Usar?',
      body: 'Esse é o protótipo do nosso motor de recomendação de lugares, para utilizar basta selecionar um usuário e intergir com as recomendações, ao dar likes nos lugares a recomendação pode mudar e gerar novos resultados únicos.',
    };
    modalStore.trigger(modal);
    localStorage.setItem('help', 'true');
  }

  onMount(() => {
    const needHelp = localStorage.getItem('help');
    if (needHelp !== 'true') handleHelp();
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

    <button
      on:click={handleHelp}
      class="btn ml-auto variant-filled-primary mr-5 w-[90%] md:w-fit gap-2"
    >
      <span class="material-symbols-rounded"> help </span>
      Como Usar?</button
    >
  </header>

  <main class="flex w-full items-center flex-col px-5 md:px-0">
    <div class="max-w-[1200px] w-full mt-10">
      <h1 class="text-xl">Selecione um usuário:</h1>
      <SelectUser bind:users bind:selectedUser />
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
