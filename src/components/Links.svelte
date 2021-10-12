<script>
  const links = [
    {name: "Linkedin", url: "https://www.linkedin.com/in/ernane", classIcon: "fab fa-linkedin"},
    {name: "Codepen", url: "https://codepen.io/ernanej", classIcon: "fab fa-codepen"},
    {name: "Spotify", url: "https://open.spotify.com/user/22zlrh2ifrpdvah4gfrlllpdi?si=a8b0723bb1f04cf6", classIcon: "fab fa-spotify"},
    {name: "Lattes", url: "http://lattes.cnpq.br/0903220832384620", classIcon: "fas fa-address-card"},
  ]
</script>

<div class="content">
  <div class="main-content">
    {#each links as link}
      <a href="{link.url}" target="_blank" class="link">
        <span>
          <i class="{link.classIcon} im" ></i>
          {link.name}
        </span>
        <i id="arrow" class="fas fa-arrow-circle-right"></i>
      </a>
    {/each}
 </div>
</div>

<style>
  .content {
    padding: 0 30px;
    width: 100%;
    color: #1C1C1C;
    overflow: hidden;
    position: relative;
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
    color: #1C1C1C;
    cursor: pointer;
    -webkit-box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.72);
    -moz-box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.72);
    box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.72);
    position:relative;
    transition: .3s;
    overflow: hidden;
  }
  .link:hover{
    transform: translateY(-5px);
  }
  #arrow{
    transform: translateX(200px);
    transition: .3s;
    animation: arrowOut .3s normal forwards ease-in-out;
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