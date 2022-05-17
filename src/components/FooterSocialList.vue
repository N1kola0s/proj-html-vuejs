<template>
    <div class="col">
        
        <!--  v-for="social in socials" :key="social.id"  -->
        <div class="media_channel d-flex align-items-center justify-content-center" :class="social.name">
        <font-awesome-icon :icon="social.icon" class="brand"/>
        </div>
        <!-- /.channel -->
    </div>
    <!-- /.col -->
</template>


<script>
export default {

  name: 'FooterSocialList',
  props:{
      social: Object,   
  }
}
</script>

<style lang="scss" scoped>

.footer_title{
font-size:18px;
font-weight: 600;
padding-bottom:10px;

}

.media_channel{
height:38px;
width: 38px;
padding:5px;
margin: 5px 0;
border-radius:100%;
}

.brand{
font-size:20px;
}

.udemy_adv img{
margin-left:25px;
}

.facebook {
background-color: #3b5998;
}

.instagram {
    background-color: #c32aa3;
}

.linkedin {
    background-color: #0077b5;
}

.pinterest {
    background: #bd081c;
}

.twitter {
    background-color: #1da1f2;
}

.dribbble {
    background-color: #ea4c89;
}

.google {
    background-color: #db4437;
}

.skype {
    background-color: #00aff0;
}

</style>
