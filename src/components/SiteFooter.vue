<template>
  <footer id="site_footer">
    
    <div class="footer_top">
      <div class="container_footer">

        <div class="row row-cols-2">

          <div class="col">

            <div class="row row-cols-2">
              <FooterMenu  :item="item" v-for="(item, index) in FooterMenu" :key="index" />
            </div>

          </div>
          <!-- /.col -->

          <div class="col">
            <div class="row row-cols-2">
              <div class="col">
                <h3 class="footer_title text-white text-uppercase">
                  social netwoork
                </h3>

                <div class="footer_socials text-white">

                  <div class="row row-cols-4">

                    <FooterSocialList  :social="social" v-for="social in socials" :key="social.id" />
      
                  </div>
                  <!-- /.row -->
                
                </div>
                <!-- /.footer_socials -->

              </div>
              <!-- /.col -->

              <div class="col">
                <div class="udemy_adv">
                  <img src="../assets/img/Top-udemy-courses-90-percent-off.jpg" alt="udemy_adv_banner">
                </div>
                <!-- /.adv -->

              </div>
              <!-- /.col -->

            </div>
            <!-- /.row -->

          </div>
          <!-- .col -->
          
        </div>
        <!-- /.row -->

      </div>
      <!-- /.container_footer -->


    </div>
    <!-- /.footer_top -->

    <div class="footer_bottom">

      <div class="container_footer d-flex align-items-center text-white">

        <div class="footer_logo pe-4">
          <img src="../assets/img/footer-logo2x-50x56.png" alt="footer_logo">
        </div>
        <!-- /.footer_logo -->

        <div>
          Copyright &#169; 2020. <u>MasterStudy</u> Theme by <u>StylemixThemes</u>
        </div>
      </div>
      <!-- /.footer_container -->

    </div>
    <!-- /.footer_bottom -->

  </footer>
  <!-- /#site_footer -->
</template>

<script>
import FooterMenu from "@/components/FooterMenu.vue";
import FooterSocialList from "@/components/FooterSocialList.vue";


export default {
  name: 'SiteFooter',
  components: {
    FooterMenu,
    FooterSocialList,
  },
  data(){
    return{
      FooterMenu:[
        {
          title: 'ABOUT',
          text: 'Sed nec felis pellentesque, lacrinia dui sed, ultricies sapien. Pellentesque orci lectus, consectur vel, rutrum eu ipsum. Mauris accumsan eros eget libero posuere vulputate.',
          address:'',
          tel: '',
          fax:'',
          email: ''
        },
        {
          title: 'CONTACT',
          text: '',
          address:'Usa, California 20, First Avenue, California.',
          tel: '+1 212 458 300 32',
          fax:'+1 212 375 24 14',
          email: 'info@masterstydy.com'
        }
      ],
      socials:[
        {
          id:1,
          name:'facebook',
          icon:'fa-brands fa-facebook'
        },
        {
          id:2,
          name:'instagram',
          icon:'fa-brands fa-instagram'
        },
        {
          id:3,
          name:'linkedin',
          icon:'fa-brands fa-linkedin'

        },
        {
          id:4,
          name:'pinterest',
          icon:'fa-brands fa-pinterest'
        },
        {
          id:5,
          name:'twitter',
          icon:'fa-brands fa-twitter'
        },
        {
          id:6,
          name:'dribbble',
          icon:'fa-brands fa-dribbble'
        },
        {
          id:7,
          name:'google',
          icon:'fa-brands fa-google-plus'
        },
        {
          id:8,
          name:'skype',
          icon:'fa-brands fa-skype'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer{
    height: 348px;
    background-color: $ebony-clay;

    .footer_top{

      .container_footer{
        padding: 2.875rem 0;
      }
    }

    .footer_bottom{
        border-top: 1px solid lightgray;
        height:60px;
        padding:20px;

        .footer_logo>img{
          height:30px;
        }
        
      }

  }

</style>