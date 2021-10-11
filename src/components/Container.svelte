
<main>
  <section id="container">
    <slot></slot>
  </section>
</main>

<style>
  main{min-width: 100vw;max-width: 100vw;min-height: 100vh;max-height: 100vh;display:flex;justify-content:center;}
  #container{min-height: 100%;min-width: 100%;
    margin: auto;
  width: 500px;
  height: calc(100vh - 20px);
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  }
</style>