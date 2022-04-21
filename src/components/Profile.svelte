<script>
  import { fly } from 'svelte/transition';
  let showAnimation = false;
  setTimeout(() => showAnimation = true, 0);
</script>

{#key showAnimation}
  <section id="profile"  in:fly="{{ y: -250, duration: 1000 }}">
    <img src="./images/profile.png" alt="profile" in:fly="{{ y: -200, duration: 1000 }}"/>
    <h1 in:fly="{{ y: -250, duration: 1400 }}">Ernane Ferreira</h1>
    <p class="subtitle" in:fly="{{ y: -300, duration: 1400 }}"><i class="fas fa-code subtitle-icon"></i>Desenvolvedor de Software</p>
  </section>
{/key}

<style>
  #profile { 
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    padding: 10px;
    margin-top: 20px;
  }
  #profile img{
    border-radius: 50%;
    width: 9em;
    margin-bottom: 15px;
    padding: 2px 0px 0px 2px;
    border: 2px solid rgb(161, 165, 218);
  }
  #profile h1 {
    margin: 0;
    font-size: 1rem;
    margin: 0;
  }
  #profile .subtitle {
    font-size: .8rem;
    color: #e3e3e3;
  }
  #profile .subtitle-icon{
    margin-right: .25rem;
  }
</style>