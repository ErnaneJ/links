<section id="profile">
  <img class="profile" src="./images/profile.png" alt="profile"/>
  <h2>Ernane Ferreira</h2>
  <p class="subtitle">Programador</p>
</section>

<style>
  #profile { 
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    padding: 10px;

    width: 104px;
  margin-bottom: 20px;
  height: 104px;
  border-radius: 50%;
  object-fit: cover;
  z-index: 99;
  border:2px solid white;
  }
  #profile img{
    border-radius: 50%;
    width: 8em;
  }
  #profile h2 {
    margin: 0;
    font-size: 18px;
  }
  #profile .subtitle {
    font-size: 14px;
    color: #e3e3e3;
  }
</style>