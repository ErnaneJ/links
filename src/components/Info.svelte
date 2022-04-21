<script>
  import { fly } from 'svelte/transition';
	import Social from './Social.svelte';
	import Links from './Links.svelte';
  import Footer from './Footer.svelte';

  let showAnimation = false;
  setTimeout(() => showAnimation = true, 0);
</script>

{#key showAnimation}
  <section id="info" in:fly="{{ y: 1000, duration: 1000 }}">
    <div class="content" in:fly="{{ y: 200, duration: 600, delay: 600 }}">
      <Social/>
      <Links/>
    </div>
    <Footer/>
  </section>
{/key}

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
    justify-content: space-between;
  }
  .content{
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }
</style>