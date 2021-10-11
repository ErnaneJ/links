<script>
  const socials = [
    {name: "Instagram", url: "https://www.instagram.com/ernane.jx/", classIcon: "fab fa-instagram"},
    {name: "Github", url: "https://github.com/ErnaneJ", classIcon: "fab fa-github"},
    {name: "Telegram", url: "https://t.me/ErnaneJR", classIcon: "fab fa-telegram"},
  ]
</script>

<div id="social">
  {#each socials as social}
    <a href="{social.url}">
      <i class="{social.classIcon}"></i>
    </a>
  {/each}
</div>

<style>
  #social {
  display: flex;
  height: 65px;
  width: 223px;
  justify-content: space-around;
  align-items: center;
  background: rgba(200, 200, 255, 0.3);
  border-radius: 50px;
  position: absolute;
  top: -32px;
  left: calc(50% - 111px);
}

#social a {
  background: #eee;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#social i {
  color: #2525DD;
  cursor:pointer;
}
</style>