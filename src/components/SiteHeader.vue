<template>
  <header id="site_header">
    <div class="container">

      <nav class="nav_top d-flex justify-content-between align-items-center">

        <div class="nav_top_left">

          <div class="language_selector">
            English
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </div>
          <!-- ./language_selector -->

        </div>
        <!-- /.nav_top_left -->
        
        <div class="nav_top_right d-flex">
          
          <span class="main_menu ">
            <ul class="d-flex align-items-center mb-0">
              <li><a href="#">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Course Formats</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Demos</a></li>
            </ul>
          </span>
          <span class="socials">
            <font-awesome-icon icon="fa-brands fa-facebook" class="pe-2"/>
            <font-awesome-icon icon="fa-brands fa-twitter" class="pe-2" />
            <font-awesome-icon icon="fa-brands fa-instagram" class="pe-2" />
            <font-awesome-icon icon="fa-brands fa-linkedin" class="pe-2" />
            <font-awesome-icon icon="fa-brands fa-google-plus" class="pe-2" />
            <font-awesome-icon icon="fa-brands fa-youtube" class="pe-2" />
          </span>
          <!-- /.socials -->
          

        </div>
        <!-- /.nav_top_right -->
        


      </nav> 

      <nav class="nav_bottom">

      </nav>
    </div>
  </header>
  <!-- /#site_header -->
</template>

<script>
export default {
  name: 'SiteHeader',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header{
    height: 124px;
    background-color: $apple;
    color:$venus;

    .container{
      .nav_top{
          padding: 10px;
          background-color:white ;
          font-size: 10px;

          .nav_top_right{
            .main_menu{
              margin-right: 0.445rem;
              ul{
                li{
                  padding:0 1.43rem 0 0;
                  a{
                    color:$venus;
                  }
                }
              }
            }
          }

          
      }

    }
  }

</style>