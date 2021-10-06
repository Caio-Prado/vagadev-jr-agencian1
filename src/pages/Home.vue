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

       <h2 class="title-products">Produtos em destaque</h2> 

      <section class="destaques">
        <article class="item-destaques">
          <img src="../assets/img/outriders.png" alt="outriders">
          <div class="description-item">
              <p class="title-item">Outriders</p>
              <p class="price-item">R$ 200,00</p>
          </div>
            <button class="button-item">Comprar</button>      
        </article>

        <article class="item-destaques">
          <img src="../assets/img/ciberpunk.png" alt="ciberpunk">
          <div class="description-item">
              <p class="title-item">CYBERPUNK 2077</p>
              <p class="price-item">R$ 200,00</p>
          </div>
           <button class="button-item">Comprar</button> 
        </article>

        <article class="item-destaques">
          <img src="../assets/img/kong.png" style="height: 250px" alt="kong">
          <div class="description-item">
              <p class="title-item">Donkey Kong Country Tropical Freeze</p>
              <p class="price-item">R$ 200,00</p>
          </div>
            <button class="button-item">Comprar</button> 
        </article>

      </section>

      <Slider/>
    </main>
</template>

<script>
import Slider from '../components/Slider.vue'
export default {
  name: 'Home',
  components: {
    Slider,
  }
}
</script>

<style scoped>

  main {
    background-color: #fff;
  }

  div .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -250px;
    margin-bottom: 150px;
    background-color: #fff;
  }

  .img-left,
  .img-right {
    width: 627px;
    height: 368px;
  }

  .img-left img {
    width: 100%
  }

  .img-right img {
    width: 100%
  }

  .img-left {
      margin-right: 10px;
      z-index: 9999999;
    }

    .img-right {
      margin-left: 10px;
      z-index: 9999999;
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

  .title-products {
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    color: var(--color--dark-blue);
  }

  .destaques {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;

  }

  .item-destaques {
    flex-direction: column;
    border-radius: 10px;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 350px;
    box-shadow: 0 0 1em rgb(189 189 189);
    margin: 50px;
  }

  .item-destaques img {
    padding: 20px;
    width: 200px;
  }

  .description-item {
    padding: 20px 0 20px 20px;
    width: 280px;
    height: 250px;
    background-color: #f5f5f5;
    margin-bottom: -50px;
    border-top: 2px solid var(--color--blue);
    border-end-start-radius: 10px;
    border-end-end-radius: 10px;
    box-shadow: 0 0 1em rgb(189 189 189);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  } 

  .title-item {
    color: var(--color--dark-blue);
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    font-weight: 400;
    padding-bottom: 10px;
  }

  .price-item {
    color: var(--color--dark-blue);
    font-size: 18px;
    line-height: 21,09px;
    font-weight: 900;
    padding-bottom: 40px;
  }

  .button-item {
    border: none;
    background-color: var(--color--blue);
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 900;
    border-radius: 5px;
    padding: 8px 50px 8px 50px;
  }



  @media (max-width: 920px) {

    div .container {
      flex-direction: column;
      margin-top: 45px;
    }

    .img-left,
    .img-right {
      width: 450px;
    }

    .img-right {
      margin-top: -20px;
      margin-right: 10px;
    }

    .img-left {
      margin-right: 0px;
    }

    .text-imgs {
      font-size: 12px;
      line-height: 14,06px;
    }

    .line-sekiro {
      width: 230px;
      margin-left: 20px;
    }

    .line-zelda {
      width: 170px;
      margin-left: 20px;
    }
  }
  
</style>