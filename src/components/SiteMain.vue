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

    </section>
    <!-- /.hero -->

    <section class="dev_courses">

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
    background-color:red;

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
    
  }
    

</style>