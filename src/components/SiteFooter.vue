<template>
  <footer id="site_footer">
    
    <div class="footer_top">
      <div class="container_footer">

        <div class="row row-cols-2">

          <div class="col">

            <div class="row row-cols-2">
             <!--  <div class="col">
                <h3 class="footer_title text-uppercase text-white"> 
                  about
                </h3>

                <div class="footer_txt text-white">
                  Sed nec felis pellentesque, lacrinia dui sed, ultricies sapien. Pellentesque orci lectus, consectur vel, rutrum eu ipsum. Mauris accumsan eros eget libero posuere vulputate.
                </div>

              </div> -->
              <!-- /.col -->
              <div class="col" v-for="(item, index) in FooterMenu" :key="index">
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

                    <div class="col">
                      <div class="media_channel facebook d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-brands fa-facebook" class="brand"/>
                      </div>
                      <!-- /.channel -->
                    </div>
                    <!-- /.col -->

                    <div class="col">
                      <div class="media_channel instagram d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-brands fa-instagram" class="brand"/>
                      </div>
                      <!-- /.channel -->
                    </div>
                    <!-- /.col -->

                    <div class="col">
                      <div class="media_channel linkedin d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-brands fa-linkedin" class="brand"/>
                      </div>
                      <!-- /.channel -->
                    </div>
                    <!-- /.col -->

                    <div class="col">
                      <div class="media_channel pinterest d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-brands fa-pinterest" class="brand"/>
                      </div>
                      <!-- /.channel -->
                    </div>
                    <!-- /.col -->

                    <div class="col">
                      <div class="media_channel twitter d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-brands fa-twitter" class="brand" />
                      </div>
                      <!-- /.channel -->
                    </div>
                    <!-- /.col -->

                    <div class="col">
                      <div class="media_channel dribbble d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-brands fa-dribbble" class="brand"/>
                      </div>
                      <!-- /.channel -->
                    </div>
                    <!-- /.col -->

                    <div class="col">
                      <div class="media_channel google d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-brands fa-google-plus" class="brand" />
                      </div>
                      <!-- /.channel -->
                    </div>
                    <!-- /.col -->

                    <div class="col">
                      <div class="media_channel skype d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-brands fa-skype" class="brand"/>
                      </div>
                      <!-- /.channel -->
                      
                    </div>
                    <!-- /.col -->

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
export default {
  name: 'SiteFooter',
  props: {
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

      }

    }

    .footer_bottom{
        border-top: 1px solid lightgray;
        height:60px;
        padding:20px;

        .footer_logo img{
          height:30px;
        }
        
      }

  }

</style>