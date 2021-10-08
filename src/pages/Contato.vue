<template>
<div>
    <header>
        <nav class="nav-bar">
            <ul class="left-items">
                <li>
                    <img v-on:click="openMenu" v-if="showButtonBurguer" id="icon-burguer" alt="burguer" src="../assets/svgs/icon_hamburguer.svg">
                    <div id="dropdown-menu" v-if="menuActive" :class="{active:menuActive}">
                        <div class="dropdown-luta">
                            <p class="title-luta">Luta</p>
                            <p class="items-dropdown">Mortal Kombat</p>
                            <p class="items-dropdown">Smash Bros</p>
                            <p class="items-dropdown">Killer Instict</p>
                            <p class="items-dropdown">DBZ Kakarot</p>
                        </div>

                        <div class="dropdown-acao">
                            <p class="title-acao">Ação / Aventura</p>
                            <p class="items-dropdown">GTA V</p>
                            <p class="items-dropdown">Tomb Raider</p>
                            <p class="items-dropdown">Call of Duty</p>
                        </div>

                        <div class="dropdown-corrida">
                            <p class="title-corrida">Corrida</p>
                            <p class="items-dropdown">NEED for SPEED</p>
                            <p class="items-dropdown">Forza Horizon</p>
                        </div>
                    </div>
                </li>
               <img v-on:click="closeMenu" v-if="showButtonClose" id="close-button" src="../assets/svgs/close.svg" style="width:30px" alt="close">
               <img id="logo" alt="logoN1" src="../assets/img/logoN1rush.png">
            </ul>
            <div class="right-items">
                <div class="right-item">
                    <router-link to="/">
                        <img src="../assets/svgs/home.svg" alt="">
                    </router-link>   
                        <span><router-link to="/">Home</router-link></span>
                </div>

                <div class="right-item">
                    <router-link to="/"><img src="../assets/svgs/search-solid.svg" alt=""></router-link>
                        <span href="">Buscar</span>
                </div>

                <div class="right-item">
                    <img src="../assets/svgs/shopping-bag-solid.svg" alt="">
                </div>
            </div>
        </nav>
        <div class="container-form">
          <div class="form">
            <form id="form" class="topBefore">  
                <input id="name" type="text" placeholder="NOME">
                <input id="email" type="text" placeholder="E-MAIL">
                <textarea id="message" type="text" placeholder="MENSAGEM"></textarea>
                <input id="submit" type="submit" value="ENVIAR">
            </form> 
          </div>
        </div>
    </header>
</div>   
  
</template>

<script>


export default {
    name: 'Contato',
    components: {
    },

    data() {
        return {
            menuActive: false,
            showButtonClose: false,
            showButtonBurguer: true,
        }
    },

    props: [
        'countItem'
    ],

     methods: {

        openMenu: function() {
            this.menuActive = true;
            this.showButtonClose = true;
            this.showButtonBurguer = false;
        },

        closeMenu: function() {
            this.menuActive = false;
            this.showButtonClose = false;
            this.showButtonBurguer = true;
        }
    }
}
</script>

<style scoped>

/******************************Header******************************/

     header {
        position: sticky;
        background-image: url('../assets/img/principal_banner_desktop_02.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
    }

    nav { 
        display: flex;
        justify-content: space-around;
        background-color: #0000003d;
        box-shadow: 10px 5px 5px #00000080;    
    }

    nav ul li{
        width: 120px;
        float: left;
        text-align: center;
        margin-top: 10px;
    } 

    /******************************itens navbar******************************/

    /****itens da esquerda****/ 
    .left-items {
        margin: 50px;
    }

    #logo{
        margin-left: 40px;
        width: 163px;
        height: 35px;
        left: 446px;
        top: 44px;
    }

    #icon-burguer {
       left: calc(50% - 30px/2 - 572px);
       top: calc(50% - 24px/2 - 1011px);
       margin-left: 80px;
       cursor: pointer;
    }

    #close-button {
        margin-left: -30px;
        cursor: pointer;
    }


    /****itens da direita*****/
    .right-items {
        margin: 45px;
        display: flex;
        margin-right: 105px;
    }

    .right-item span {
        color: #fff;
        display: block;
    }

    .right-item:last-child {
        border-right: none;
    }

    .right-item {
       display: flex;
       align-items: center;
       text-transform: uppercase;
       margin-left: 20px;
       border-right: 1px solid #fff;
       padding: 5px 20px 5px 0;
    }

    .right-item a {
        padding-left: 10px;
        padding-right: 10px;
    }

    .right-item img {
        padding-left: 10px;
    }

    .count-purchased {
        margin-top: 5px;
        margin-left: 3px;
        text-align: center;
        width: 23px;
        height: 23px;
        line-height: 23px;
        font-size: 14px;
        background: var(--color--blue);
        color: #fff;
        border-radius: 100%;
    }




    /**************Menu dropdown da nav*****************/
    #dropdown-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        color: #fff;
        top: 80px;
        width: 565px;
        height: 249px;
        background: var(--color--dark-blue);
        transition: all 0.4s ease;
        box-sizing: border-box;
        margin-top: 15px;
        margin-left: 55px;
        border-radius: 5px;
        border: 1px solid var(--color--blue);
        box-shadow: 10px 10px 0px var(--color--blue);
        visibility: hidden;
        opacity: 0;
    }

    #dropdown-menu.active {
        z-index: 999999;
        visibility: visible;
        opacity: 1;
    }

    #dropdown-menu p {
        padding: 10px 0 10px 10px;
        transition: all 0.2s ease;
    }

    .nav-bar ul li:hover  .dropdown-menu{
        visibility: visible;
        opacity: 1;
    }

    .title-acao,
    .title-luta,
    .title-corrida {
        cursor: default;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
    }

    .dropdown-luta, 
    .dropdown-acao, 
    .dropdown-corrida {
        font-size: 14px;
        line-height: 16px;
        width: 30%;
        float: left;
        margin-right: 1%;
        text-align: start;
        margin-left: 20px;
    }

    .dropdown-luta {
        padding-left: 15px;
    }

    .dropdown-acao {
        padding-left: 20px;
        margin-bottom: 35px;
    }

    .dropdown-corrida {
        padding-left: 20px;
        margin-bottom: 70px;
    }
    
    .items-dropdown:hover {
        cursor: pointer;
        border-radius: 5px;
        background-color: var(--color--blue);
    }


    @media (max-width: 960px) {
        header {
            background-image: url('../assets/img/principal_banner_mobile_02.jpg');
            height: 100vh;
        }

        #dropdown-menu {
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            margin: 0%;
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 0%;
            box-shadow: none;
        }

        .dropdown-acao,
        .dropdown-corrida,
        .dropdown-luta {
            width: 60% !important;
            margin-bottom: 20px;
            border-bottom: 1px solid #062C38
        }

        .dropdown-corrida {
            margin-bottom: 0px !important;
        }

        .items-dropdown:last-child {
            padding-bottom: 20px;
        }

        .items-dropdown {
            font-size: 18px;
            font-weight: 400;
            line-height: 21,09px;
        }

        p.title-acao,
        p.title-corrida,
        p.title-luta {
            font-size: 24px;
            font-weight: 900;
            line-height: 28,13px;

        }

        #icon-burguer {
            margin-left: 160px;
            z-index: 99999999;
            width: 30px;
        }

        #logo {
            z-index: 99999999;
            margin-top: 10px;
            margin-left: 80px;
            width: 120px;
            height: 25px;
        }

         #close-button {
            z-index: 99999999;
            display: block;
            width: 30px;
            margin-right: -75px;
            margin-top: -32px;
            margin-left: 0 !important;
        }

        .right-item {
            border-right: none;
            padding: 5px 5px 0px 0;
        }

        .right-items {
            z-index: 99999999;
            margin-top: 25px;
            margin-left: 50px;
        }

       .right-item span {
            display: none;
        }

        .right-item img {
            width: 40px;
            
        }

        .left-items {
            display: flex;
            margin: 25px 20px 5px -50px;
        }

    }





/******************************Form******************************/

#form {
  position: relative;
  width: 500px;
  margin: 50px 20px 100px auto;
}

input {
  font-size: 0.875em;
  width: 470px;
  height: 50px;
  padding: 0px 15px 0px 15px;
  
  background: #3c3c3c;
  outline: none;
  color: #726659;
  
  border: solid 1px #b3aca7;
  border-bottom: none;
  
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

input:hover {
  box-shadow: 0 0 0.5em#fff;  
  color: #e2dedb;
}

textarea {
  width: 470px;
  max-width: 470px;
  height: 110px;
  max-height: 110px;
  padding: 15px;
  
  background: #3c3c3c;
  outline: none;
  
  color: #726659;
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  
  border: solid 1px #b3aca7;
  
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

textarea:hover {
  box-shadow: 0 0 0.5em#fff;  
  color: #e2dedb;
}

#submit {
 
  padding: 0;
  margin: -5px 0px 0px 0px;
  background-color: #101010;
  font-size: 0.875em;
  color: #b3aca7; 
  outline:none;
  cursor: pointer; 
  border: solid 1px #b3aca7;
  border-top: none;
}

#submit:hover {
  color: #e2dedb;
}

/*********div form**********/
    .container-form {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 70px;
    }

    .form {
        position: absolute;
        bottom: 0;
        margin-bottom: 50px;
        border-radius: 20px;
    }

@media (max-width: 960px) {
    #form {
        position: relative;
        width: 100px;
        margin: 50px 20px 100px -60px;
    }
}



</style>