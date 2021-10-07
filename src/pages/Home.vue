<template>
    <main>
      <Header :countItem="countItem"/>
    <!----------------------------Divs Sekiro e Zelda-------------------------------->
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

       <div class="title-products">
         <h2>Produtos em destaque</h2>
       </div>

    <!----------------------------Produtos em destaque-------------------------------->
      <div class="slider">
        <button @click="prev" v-if="showIcons" type="button" class="btn btn-left">
          <img src="../assets/svgs/angle-left-solid.svg" alt="" class="icone">
        </button>
    
        <div class="container-slides" :style="{transform: `translateX(${index}px)`, display:`${display}`, transition:`${transition}`}">

          <article class="item-destaques">
            <img src="../assets/img/outriders.png" alt="outriders">
            <div class="description-item">
              <p class="title-item">Outriders</p>
              <p class="price-item">R$ 200,00</p>
            </div>
              <button @click="incrementPurchased()" class="button-item">Comprar</button>      
          </article>

          <article class="item-destaques">
            <img src="../assets/img/ciberpunk.png" alt="outriders">
            <div class="description-item">
              <p class="title-item">CYBERPUNK 2077</p>
              <p class="price-item">R$ 200,00</p>
            </div>
              <button @click="incrementPurchased()" class="button-item">Comprar</button>      
          </article>

          <article class="item-destaques">
            <img src="../assets/img/kong.png" style="height: 250px" alt="outriders">
            <div class="description-item">
              <p class="title-item">Donkey Kong Country Tropical Freeze</p>
              <p class="price-item">R$ 200,00</p>
            </div>
              <button @click="incrementPurchased()" class="button-item">Comprar</button>      
          </article>

        </div>
        <button @click="next" v-if="showIcons" type="button" class="btn btn-right">
          <img src="../assets/svgs/angle-right-solid.svg" alt="" class="icone">
        </button>
      </div>
<!----------------------------Modal-------------------------------->
      <div v-if="showOverlay" class="overlay">
        <div class="item-overlay">
          <div class="img-closeButton">
            <img @click="CloseModal()" src="../assets/img/closeModal.png" alt="buttonClose">
          </div>
          <div class="content-overlay">
            <p>Pedido realizado com sucesso!</p>
            <img src="../assets/img/mario.png" alt="mario">
          </div>
        </div>
      </div>
  </main>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
  },

  data() {
    return {
      showIcons: true,
      showOverlay: false,
      countItem: 0,
      index: 0,
      display: "flex",
      transition: "transform 0.2s ease",
    }
  },

  methods: {
   next() {
        if(this.index === -760) {      
          this.index = 0;
        } else {
          this.transition = "transform 0.2s ease";
          this.index -= 380;
        }
      },

      prev() {
        if(this.index === 0) {
          this.transition = 'none';
          this.index = -760;
        } else {
          this.transition = "transform 0.2s ease";
          this.index += 380;
        }
      },

      incrementPurchased() {
        this.countItem++
        this.showIcons = false
        this.showOverlay = true
      },

      CloseModal() {
        this.showOverlay = false
        this.showIcons = true
      }
  }

}
</script>

<style scoped>


.overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(8, 65, 84, 0.62);
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-overlay{
  border-radius: 5px;
  background-color: #fff;
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: end;
}
.img-closeButton {
  cursor: pointer;
  margin-left: 350px;
  margin-bottom: 430px;
  width: 400px;
  height: 50px;
}

#closeImg img {
  width: 30px;
  height: 30px;
}

.item-overlay img {
  width: 30px;
  height: 30px;
}

.content-overlay {
  position: absolute;
}

.content-overlay img {
  display: flex;
  width: 218px;
  height: 279px;
  margin-left: 20px;
}

.content-overlay p {
  font-size: 30px;
  line-height: 35px;
  width: 261px;
  height: 95px;
  text-align: center;
  color: var(--color--dark-blue);
}

@media (max-width: 920px) {
  .item-overlay {
    width: 344px;
  }

  .img-closeButton {
    margin-left: 300px;
  }
}

  main {
    background-color: #fff;
  }

  /*********************Estilização divs Sekiro e Zelda**********************/
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
      z-index: 0;
    }

    .img-right {
      margin-left: 10px;
      z-index: 0;
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

  @media (max-width: 920px) {

    div .container {
      flex-direction: column;
      margin-top: 45px;
      margin-bottom: 30px;
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


/*********************Estilização produtos em destaque**********************/
  .title-products {
    display: flex;
    justify-content: center;
  }

  .title-products h2{
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    color: var(--color--dark-blue);
  }

  .slider {
    display: flex;
    justify-content: center;
    width: 380px;
    height: 435px;
    margin: 20px auto 0;
    position: relative;
    margin-bottom: 100px;
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
    background: #fff0;
    display: none;
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
  
  @media (max-width: 920px) {

    .title-products h2 {
      font-size: 18px;
    }

    .slider {
      display: block;
      margin-top: -5px;
      overflow: hidden;
    }

    .btn {
      display: block;
    }
  }
</style>