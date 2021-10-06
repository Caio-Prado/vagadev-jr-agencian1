<template>
      <header>
        <nav class="nav-bar">
            <ul class="left-items">
                <li>
                    <p id="icon-burguer"><img src="../assets/svgs/icon_hamburguer.svg" alt=""></p>
                    <div class="dropdown-menu">
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
                <img alt="" id="logo" src="../assets/img/logoN1rush.png">
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
                   <a href=""><img src="../assets/svgs/shopping-bag-solid.svg" alt=""></a>
                </div>
            </div>
        </nav>
      </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    header {
        background-image: url('../assets/img/principal_banner_desktop.jpg');
        background-repeat: no-repeat;
        width: 100vw;
        height: 100vh;
    }

    nav { 
        display: flex;
        justify-content: space-around;    
    }

    .left-items {
        margin: 50px;
    }

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


    .container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
    }

    nav ul li{
        width: 120px;
        float: left;
        text-align: center;
        margin-top: 10px;
    } 
    
    .dropdown-menu {
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
        visibility:hidden;
        opacity: 0;
    }

    .dropdown-menu p {
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

</style>