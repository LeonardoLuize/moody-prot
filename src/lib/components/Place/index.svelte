<script lang="ts">
  import { api } from '$lib/api';

  interface Place {
    id: number;
    name: string;
    image: string;
    likes: number;
    rating: number;
    liked?: boolean;
  }
  export let place: Place;

  function handleLike() {
    api.post(`/local/${place.id}/like`).then((res) => {
      place.likes += 1;
      place.liked = true;
    });
  }
</script>

<div class="w-full md:w-[200px] card hover:shadow-md transition-all">
  <img
    src={place.image}
    alt={place.name}
    class="w-full h-32 object-cover rounded-t-lg"
  />

  <div class="p-4">
    <h2 class="text-xl font-semibold mb-2">{place.name}</h2>
    <div class="w-full flex justify-between items-center gap-5">
      <div class="flex items-center gap-2">
        <span class="material-symbols-rounded"> verified </span>
        <p class="text-gray-600">{place.rating}</p>
      </div>
      <button
        on:click={handleLike}
        class="btn variant-ghost-primary py-1 px-3 flex items-center gap-2"
      >
        <span
          class={`material-symbols-rounded text-primary-700 ${
            place.liked ? 'filled' : ''
          }`}
        >
          thumb_up
        </span>
        <p class="text-gray-600">{place.likes}</p>
      </button>
    </div>
  </div>
</div>

<style>
  .filled {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
  }
</style>
