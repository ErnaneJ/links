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
      <a href="{link.url}" class="link">
        <i class="{link.classIcon} im" ></i>
        {link.name}
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
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #bcbcbc;
    border-radius: 16px;
    text-decoration: none;
    color: #1C1C1C;
    cursor: pointer;
    -webkit-box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.72);
    -moz-box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.72);
    box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.72);
  }
</style>