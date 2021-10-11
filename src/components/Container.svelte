
<main>
  <section id="container">
    <slot></slot>
  </section>
</main>

<style>
  main{
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  #container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width:100%;
    height: 100%;
    color: #fff;
    /* box-shadow: inset 0 0 20px rgba(255, 255, 255, .8); */
  }
</style>