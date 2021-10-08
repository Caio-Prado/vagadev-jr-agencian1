<template>

      <footer class="container-footer">
          <div class="content-left"><img src="../assets/img/logo-n1.png" alt=""></div>
          <div class="content-right">Agência N1 - Todos os direitos reservados</div>
      </footer>
      
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

    .container-footer {

        display: flex;
        bottom: 0;
        width: 100%;
        text-align: center;
    }

    .content-left {
        display: flex;
        align-items: center;
        justify-content: end;
        padding-right: 20px;
        width: 30%;
        background-color: var(--color--dark-blue);
        height: 50px;
    }

    .content-left img {
        width: 42px;
    }

    .content-right {
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 15px;
        font-size: 14px;
        font-weight: 400;
        color: #FFFFFF;
        background-color: var(--color--blue);
        width: 70%;
        height: 50px;
    }

</style>