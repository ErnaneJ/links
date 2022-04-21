<script>
  import { fly } from 'svelte/transition';
  let showAnimation = false;
  setTimeout(() => showAnimation = true, 0);
</script>
{#key showAnimation}
  <span class="span-iframe" in:fly="{{ y: 250, duration: 1000, delay: 1100 }}">Ouça minha playlist! <i class="fa-solid fa-headphones-simple"></i></span>
  <iframe 
    id="playlist"
    src="https://open.spotify.com/embed/playlist/2w8RMnKka65dXPvcX35xU6?utm_source=generator" 
    width="100%" 
    height="80" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    title="Playlist on Sporfy - Programming Mode | by: Ernane Ferreira"
    in:fly="{{ y: 250, duration: 1000, delay: 1200 }}"
  ></iframe>
{/key}

<style>
  #playlist{
   border-radius: .75rem;
   margin-top: 1rem; 
  }
  .span-iframe{
    width: 100%;
    text-align: center;
    display: inline-block;
    margin-top: 1rem;
    color: rgba(55, 62, 97, 1)
  }
</style>