<template>
    <main>
      <div class="container">
        <div class="img-left">
            <img src="../assets/img/sekiro_banner.jpg" alt="">
            <div class="text-imgs">
              SEKIRO - Shadows die twice 
              <div class="line-sekiro"></div>
            </div>
        </div>

        <div class="img-right">
            <img src="../assets/img/zelda_banner.jpg" alt="">
            <div class="text-imgs">
              The Legend of Zelda - Breath of th wild 
              <div class="line-zelda"></div>
            </div>
        </div> 
      </div>
      <div>sasassasas</div> 
      <div>asasasas</div>
      <div>asasas</div>
      <div>asasasa</div>
      <div>sas</div>

    </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

  div .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -150px;
  }

  .img-left,
  .img-right {
    width: 627px;
    height: 368px;
    padding-right: 20px;
  }

  .img-left img {
    width: 100%
  }

  .img-right img {
    width: 100%
  }

  .text-imgs {
    font-size: 16px;
    line-height: 18,75px;
    font-weight: 700;
    color: var(--color--dark-blue);
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 20px;
    margin-top: -5px;
    width: 100%;
    height: 61px;
    border-left: 11px solid var(--color--dark-blue);
    background-color: var(--color--blue);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;    
  }

  .line-sekiro {
    width: 248px;
    margin-left: 100px;
    border: 1px solid var(--color--dark-blue);
  }

  .line-zelda {
     width: 248px;
    margin-left: 30px;
    border: 1px solid var(--color--dark-blue);
  }
  
</style>