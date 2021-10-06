<template>
  <div class="slider">
        <button @click="prev" type="button" class="btn btn-left">
          <img src="../assets/svgs/angle-left-solid.svg" alt="" class="icone">
        </button>
    
      <div class="container-slides">

        <article class="item-destaques">
          <img src="../assets/img/outriders.png" alt="outriders">
          <div class="description-item">
              <p class="title-item">Outriders</p>
              <p class="price-item">R$ 200,00</p>
          </div>
            <button class="button-item">Comprar</button>      
        </article>

        <article class="item-destaques">
          <img src="../assets/img/outriders.png" alt="outriders">
          <div class="description-item">
              <p class="title-item">Outriders</p>
              <p class="price-item">R$ 200,00</p>
          </div>
            <button @click="next" class="button-item">Comprar</button>      
        </article>

        <article class="item-destaques">
          <img src="../assets/img/outriders.png" alt="outriders">
          <div class="description-item">
              <p class="title-item">Outriders</p>
              <p class="price-item">R$ 200,00</p>
          </div>
            <button class="button-item">Comprar</button>      
        </article>
      </div>
        <button type="button" class="btn btn-right">
          <img src="../assets/svgs/angle-right-solid.svg" alt="" class="icone">
        </button>

  </div>
</template>

<script>
export default {
    name: 'Slider',
    data: function() {
        return {
            index: 0
        }
    }

}
</script>

<style scoped>

.slider {
    width: 500px;
    height: 300px;
    margin: 100px auto 0;
    overflow: hidden;
    position: relative;
}

.container-slider {
    display: flex;
}

.btn {
    outline: none;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    z-index: 1000;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icone {
    width: 15px;
}

.btn-left {
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
}

.btn-right {
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
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

</style>