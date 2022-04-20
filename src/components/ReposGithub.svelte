<script>
  import { onMount } from 'svelte';
  import Carousel from '@beyonk/svelte-carousel'
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
  import github from '../github';

  import RepoCard from '../components/RepoCard.svelte'

  let repos = [];
  let carousel;
	onMount(async () => {
		repos = await github.getRepos();
	});
</script>

{#if repos.length > 0}
<h3><i class="fas fa-laptop-code"></i> Veja alguns dos meus projetos!</h3>

<Carousel 
  bind:this={carousel}
  perPage={1} 
  autoplay={5000}
  loop={true}
  dots = {false}
>
  <span class="control" slot="left-control">
    <ChevronLeftIcon />
  </span>
  {#each repos as repo}
    {#if repo.description}
      <RepoCard repo={repo} bind:carousel={carousel}/>
    {/if}
  {/each}
  <span class="control" slot="right-control">
    <ChevronRightIcon />
  </span>
</Carousel>
{/if}

<style>
  h3{    
    color: #1C1C1C;
    width: 100%;
    margin: 0;
    margin-top: 10px;
    padding: 0 30px;
    margin-bottom: -10px;
    font-size: 15px;
    text-align: center;
  }
</style>