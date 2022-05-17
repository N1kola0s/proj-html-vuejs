<template>

    <div class="col">

        <h3 class="footer_title text-uppercase text-white"> 
            {{item.title}}
        </h3>

        <div class="footer_txt text-white" v-show="item.text!=''">
            {{item.text}}
        </div>
        <!-- /.footer_text -->

        <div class="footer_txt text-white" v-show="item.address!=''">
            {{item.address}}
        </div>
        <!-- /.footer_txt -->

        <div class="footer_tel_fax text-white py-2" v-show="item.tel!=''&& item.fax!=''">
            Tel.: {{item.tel}} <br> Fax: {{item.fax}}
        </div>
        <!-- /.footer_tel_fax -->

        <div class="footer_email py-2" v-show="item.email!=''">
            {{item.email}}
        </div>
        <!-- /.footer_email -->
                
    </div>
    <!-- /.col -->
    
</template>

<script>

export default {

  name: 'FooterMenu',
  props:{
      item: Object,
  }
}
</script>

<style lang="scss" scoped>

    .footer_title{
        font-size:18px;
        font-weight: 600;
        padding-bottom:10px;
        
    }

    .footer_txt{
    font-size:13px;
    }

    .footer_tel_fax{
    font-size:13px;
    }

    .footer_email{
    font-size:13px;
    color:$venus;
    }

</style>
