<script>
  import Colors from '../github/githubColors';
  export let repo = {};
  export let carousel;
  
  const mouseEnter = () => carousel.pause();
  const mouseLeave = () => carousel.resume();
</script>

<section class="slide-content" 
  on:mouseenter={mouseEnter} 
  on:mousedown={mouseEnter}
  on:mouseleave={mouseLeave}
  on:mouseup={mouseLeave}>
  <div class="card-container">
    <a href="{repo.html_url}" class="title" target="_blank">
      <i class="fas fa-bookmark"></i>
      <h2>{repo.name.substring(0,23)}{repo.name.length > 23 ? '...' : ''}</h2>
      <i class="fas fa-external-link-alt "></i>
    </a>
    
    <p class="description">{repo.description.substring(0,100)}{repo.description.length > 50 ? '...' : ''}</p>
  
    <div class="informations">
      <p><i class="fas fa-circle" style="color: {Colors[repo.language ?? 'Markdown'].color}"></i>{repo.language ?? 'Markdown'}</p>
      <p><i class="fas fa-star"></i>{repo.stargazers_count}</p>
      <p><i class="fas fa-code-branch"></i>{repo.forks_count}</p>
      <!-- <div class="topics">
        {#each repo.topics as topic}
          <span class="topic">{topic}</span>
        {/each}
      </div> -->
     
    </div>
  </div>
  
</section>

<style>
  i{margin-right: 10px;}
  .slide-content{padding: 20px; transform: translateY(10px); color:rgb(44, 44, 44); }
  .card-container{
    color:black;
    margin: 0 20px;
    padding: 10px 15px;
    -webkit-box-shadow: 4px 4px 18px -5px rgb(100 100 200 / 72%);
    -moz-box-shadow: 4px 4px 18px -5px rgba(100, 100, 200, 72%);
    box-shadow: 4px 4px 18px -5px rgb(100 100 200 / 72%);
    border-radius: 10px;
  }
  .title{display:flex;align-items: center;  color:rgb(44, 44, 44);margin-bottom: 10px; justify-content: flex-start;text-decoration: none; width: 100%;}
  .title h2{color: #0A66D6; font-size: 16px; }

  .description{margin-bottom: 10px; font-size: 14px;}

  .informations{display:flex;align-items: center; justify-content: flex-start;}
  .informations p{margin-right: 10px; font-size: 14px;}
  .fa-external-link-alt{margin-left: 5px; font-size: 10px}
</style>