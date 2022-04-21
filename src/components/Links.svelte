<script>
  import { fly } from 'svelte/transition';
  import Spotfy from './Spotfy.svelte';

  const links = [
    {name: "Site - Ernane.dev", url: "https://www.ernane.dev", classIcon: "fa-solid fa-link"}, 
    {name: "Blog - Blog.ernane.dev", url: "https://blog.ernane.dev", classIcon: "fa-solid fa-blog"},
    {name: "Dev.to - @Ernanej", url: "https://dev.to/ernanej", classIcon: "fa-brands fa-dev"},
    {name: "Linkedin - @Ernane", url: "https://www.linkedin.com/in/ernane", classIcon: "fab fa-linkedin"},
    {name: "Lattes (CNPQ)", url: "http://lattes.cnpq.br/0903220832384620", classIcon: "fas fa-address-card"},
  ]

  let showAnimation = false;
  setTimeout(() => showAnimation = true, 0);
</script>

{#key showAnimation}
  <div class="content">
    <div class="main-content">
      {#each links as link, i}
        <a href="{link.url}" target="_blank" class="link" in:fly="{{ y: 200, duration: 500, delay: 200+i*200 }}">
          <span>
            <i class="{link.classIcon} icon-link" ></i>
            {link.name}
          </span>
          <i id="arrow" class="fa-solid fa-arrow-right"></i>
        </a>
      {/each}
    </div>
    <Spotfy/>
  </div>
{/key}

<style>
  .icon-link{
    font-size: 1.25rem;
    margin-right: .75rem;
  }
  .content {
    padding: 0 30px;
    width: 100%;
    color: #1C1C1C;
    position: relative;
    height: 100%;
  }
  .link{
    margin: 15px auto;
    padding: 0 20px;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #bcbcbc;
    border-radius: 16px;
    text-decoration: none;
    color: rgb(55, 62, 97);
    cursor: pointer;
    -webkit-box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.68);
    -moz-box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.68);
    box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.68);
    position:relative;
    transition: all ease .3s;
    overflow: hidden !important;
  }
  .link:hover{
    transform: translateY(-5px);
  }
  #arrow{
    transform: translateX(200px);
    transition: .3s;
    animation: arrowOut .3s normal forwards ease-in-out;
    border: 1.5px solid rgba(55, 62, 97, 0.80);
    border-radius: 50%;
    padding: .15rem .25rem;
  }
  .link:hover #arrow{
    animation: arrowIn .3s normal forwards ease-in-out;
  }
  @keyframes arrowIn{
    0%{
      transform: translateX(200px);
    }
    50%{
      transform: translateX(-10px);
    }
    100%{
      transform: translateX(0px);
    }
  }
  @keyframes arrowOut{
    0%{
      transform: translateX(0px);
    }
    50%{
      transform: translateX(-10px);
    }
    100%{
      transform: translateX(200px);
    }
  }
</style>