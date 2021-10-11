<script>
  const links = [
    {name: "Instagram", url: "/", classIcon: "fab fa-instagram"},
    {name: "Linkedin", url: "/", classIcon: "fab fa-linkedin"},
    {name: "Github", url: "/", classIcon: "fab fa-github"},
    {name: "Spotify", url: "/", classIcon: "fab fa-spotify"}
  ]
</script>

<div class="content">
  <div class="main-content">
    {#each links as link}
      <a href="{link.url}" class="link">
        <i class="{link.classIcon}" ></i>
        {link.name}
      </a>
    {/each}
 </div>
</div>

<style>
  .content {
    padding: 50px 30px 20px;
    width: 100%;
    color: #1C1C1C;
    overflow: hidden;
    position: relative;
  }
  .link{
    margin: 15px auto;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
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