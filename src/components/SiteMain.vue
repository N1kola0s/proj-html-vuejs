<template>
  <main id="site_main">

    <section class="banner_courses_category">
      
      <ul class="d-flex justify-content-center align-items-center">
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-chart-column" class="icon" />Business</a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-palette" class="icon" />Design</a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-gear" class="icon" />Development</a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-face-smile" class="icon"/>Lifestyle</a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-print" class="icon"/>Office Productivity</a></li>
      </ul>
    
    </section>
    <!-- /.banner_courses_category -->

    <section class="hero">

      <div class="row row-cols-2">

        <div class="col">
          <div class="hero_text text-white d-flex flex-column justify-content-center">
            <h1>Udemy Affiliate Sales</h1>
            <p>Monetize your audience and attract new customers with Udemy!</p>
          </div>
        </div>
        <!-- /.col -->


        <div class="col">
          <div class="hero_image">
            <img src="../assets/img/slide-1.jpg" alt="udemy_affiliate">
          </div>
        </div>
        <!-- /.col -->

      </div>
      <!-- /.row -->

    </section>
    <!-- /.hero -->

    <section class="dev_courses">

      <div class="container_lg">
        <h2>Popoular Develompent Courses</h2>
        <div class="row row-cols-6">
          <div class="col">
            <div class="card rounded-0 border-0" style="width: 18rem;">
              <img src="../assets/img/895786_7b4b_2-272x161.jpg" class="card-img-top border-0" alt="image_tablet">
              <div class="card-body">
                <div>Development</div>
                <h5 class="card-title">The Complete iOS 10 & Swift3 Developer Course</h5>
                <div class="card_info d-flex justify-content-between">
                  <div class="vote_average">

                  </div>
                  <!-- /.vote_average -->
                  <div class="price d-flex flex-column justify-content-end align-items-end">
                    <div class="original_price"><del>$199.99</del></div>
                    <!-- /.original_price -->
                    <div class="price_discounted"><strong>$100</strong></div>
                    <!-- /.price_discounted -->
                  </div>
                  <!-- /.price -->

                </div>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                
              </div>
            </div>

          </div>
          <!-- /.col -->
          <div class="col"></div>
          <!-- /.col -->
          <div class="col"></div>
          <!-- /.col -->
          <div class="col"></div>
          <!-- /.col -->
          <div class="col"></div>
          <!-- /.col -->
          <div class="col"></div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

      </div>
      <!-- .container_lg -->


    </section>
    <!-- /.dev_courses -->

    <section class="learning">

    </section>
    <!-- /.learning -->

    <section class="recent_courses">
  
    </section>
    <!-- /.recent_courses -->

    <section class="banner_subscription">

    </section>
    <!-- /.banner_subscription -->

    <section class="popular_courses">

    </section>
    <!-- /.popular_courses -->

    <section class="affiliate_prog">

    </section>
    <!-- /.affiliate_prog -->

    <section class="testimonials">

    </section>
    <!-- /.testimonials -->


  </main>
  <!-- /#site_main -->
    
</template>

<script>
export default {
  name: 'SiteMain',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  main{
    min-height: calc(100vh - 412px);
    background-color:green;

    .banner_courses_category{
      background-color:$oxford-blue;
      margin-bottom:1.375rem;
      ul{
        padding:1.375rem 0;
        li{
          a{
            color: $white;
            display:flex;
            justify-content: center;
            align-items: center;
            padding: 0 2.875rem;
            .icon{
              padding-right:6px;
              font-size:20px;
            }
          }
        }
      }
    }

    .hero{
      background-color: $coral-red;
        .row{
          .col{
            position:relative;
          

              .hero_text{
            width: 75%;
            position: absolute;
            top: 90px;
            left: 230px;
            
            h1{
            font-size: 50px;
            }

            p{
              font-size:24px;
            }
          }
        }
          
        }
      }
    }
    
  
    

</style>