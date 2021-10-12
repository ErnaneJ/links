<script>
  const socials = [
    {name: "Instagram", url: "https://www.instagram.com/ernane.jx/", classIcon: "fab fa-instagram"},
    {name: "Github", url: "https://github.com/ErnaneJ", classIcon: "fab fa-github"},
    {name: "Telegram", url: "https://t.me/ErnaneJR", classIcon: "fab fa-telegram"},
  ]
</script>

<div id="social">
  {#each socials as social}
    <a href="{social.url}" target="_blank">
      <i class="{social.classIcon}"></i>
    </a>
  {/each}
</div>

<style>
  #social {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    width: 210px;
    background: rgba(66, 66, 112, 0.3);
    border-radius: 50px;
    transform: translateY(-50%);

    -webkit-box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.72);
    -moz-box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.72);
    box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 0.72);
  }

  #social a {
    background: #eee;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition:.3s;
  }

  #social a:hover{
    transform: translateY(-5px);
  }

  #social i {
    color: rgb(32, 32, 78);
    cursor:pointer;
  }
</style>