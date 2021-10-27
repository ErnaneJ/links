<script>
	import Social from './Social.svelte';
	import Links from './Links.svelte';
  import ReposGithub from './ReposGithub.svelte';
</script>

<section id="info">
  <Social/>
  <Links/>
  <ReposGithub/>
  <slot/>
</section>

<style>
  #info {
    background: rgba(255,255,255,.94);
    width: 100%;
    height: 100%;
    border-radius: 50px 50px 0 0;
    position: relative;
    margin-top: 40px;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
</style>