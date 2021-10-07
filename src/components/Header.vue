<template>
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
                    <img src="../assets/svgs/paper-plane.svg" alt="">
                    <a href="">Contato</a>
                </div>

                <div class="right-item">
                    <img src="../assets/svgs/search-solid.svg" alt="">
                    <a href="">Buscar</a>
                </div>

                <div class="right-item">
                    <img src="../assets/svgs/shopping-bag-solid.svg" alt="">
                    <div class="count-purchased">
                        <p>{{ countItem }}</p>
                    </div>
                   <a href=""></a>
                </div>
            </div>
        </nav>

        <div class="container">
            <div class="content">
                <div class="title-content">
                    <h1>Mortal Kombat</h1>
                </div>
                <div class="itemOne">
                    <p>R$ 299<span>,99</span></p>
                </div>
                <div class="itemTwo">
                    <p>Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</p>
                </div>
            </div>
        </div>
      </header>
</template>

<script>
export default {

    name: 'Header',
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
    header {
        position: sticky;
        background-image: url('../assets/img/principal_banner_desktop.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }

    nav { 
        display: flex;
        justify-content: space-around;    
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
        margin: 50px;
        display: flex;
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




    /*********div mortal kombat**********/
    .container {
        display: flex;
        float: right;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        margin-right: 450px;
        margin-top: 100px;
        width: 420px;
        height: 327px;
        color: #fff;
        text-align: right;  
    }

    .title-content h1 {
        font-size: 46px;
        text-transform: uppercase;
        color: #fff;
    }

    .itemOne p {
        font-size: 70px;
        font-weight: 900;
        line-height: 82,03px;
        color: var(--color--blue);
    }

    .itemOne span {
        font-size: 28px;
        line-height: 32,81px;
        font-weight: 900;
        float: right;
        margin-top: 10px;
    }

    .itemTwo {
        font-size: 16px;
        line-height: 24,8px;
        font-weight: 400;
        color: #fff;
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
            height: 600px;
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
            margin-left: 150px;
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
            margin-top: 5px;
            margin-right: 100px;
        }

        .right-item a {
            display: none;
            
        }

        .right-item img {
            width: 40px;
            
        }

        .left-items {
            display: flex;
            margin: 10px 20px 5px -80px;
        }

        .container {
            background: rgba(0, 0, 0, 0.65);
            position:absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 200px;
            color: #fff;        
        }

        .content {
            padding-right: 30px;
        }

  
        .title-content h1 {
            font-size: 26px;
            text-transform: uppercase;
            color: #fff;
        }

        .itemOne p {
            font-size: 48px;
            font-weight: 900;
            line-height: 82,03px;
            color: var(--color--blue);
        }

        .itemOne span {
            font-size: 28px;
            line-height: 32,81px;
            font-weight: 900;
            float: right;
            margin-top: 10px;
        }

        .itemTwo p{
            font-size: 12px;
            line-height: 24,8px;
            font-weight: 400;
            color: #fff;
        }
    }

</style>