<template>
  <header id="site_header">
    <div class="container_lg">

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
              <NavbarMenu :list="list" v-for="list in NavLists" :key="list.id" />
            </ul>
          </span>
          <span class="socials">
            
            <NavbarSocialList :element="element" v-for="element in NavSocialList" :key="element.id" />

          </span>
          <!-- /.socials -->

        </div>
        <!-- /.nav_top_right -->
        


      </nav> 

      <nav class="nav_bottom d-flex align-items-center justify-content-between w-100">
        <div class="logo">
          <img src="../assets/MasterStudy.svg" alt="logo">
        </div>

        <div class="course_selection d-flex align-items-center">
          <div class="category text-uppercase">
            <font-awesome-icon icon="fa-solid fa-bars" class="icon" />
            category
          </div>
          <!-- /.category -->

          <div class="search_box">
            <div class="input-group rounded-0">
              <input type="text" class="form-control" placeholder="Search courses" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-secondary btn_blue" type="button" id="button-addon2">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon p-0" />
              </button>
            </div>
            <!-- /.input-group -->
          </div>
          <!-- /.search_box -->
        </div>
        <!-- /.course_selection -->

        <div class="affiliate1-menu">
          <ul class="d-flex align-items-center m-0 p-0">
            <li><a href="#"><font-awesome-icon icon="fa-solid fa-bullhorn" class="icon" />Become an Instructor</a></li>
            <li><a href="#"><font-awesome-icon icon="fa-solid fa-briefcase" class="icon" />For Enterprise</a></li>
          </ul>
        </div>
        <!-- /.affiliate_menu -->
          
        <div class="user_area">
          <a href="#"><font-awesome-icon icon="fa-regular fa-user" class="icon"/>Log in</a>
          <button class="btn btn_coral text-uppercase">sign up</button>
          <font-awesome-icon icon="fa-regular fa-bookmark" class="icon bookmark" />
        </div>
        <!-- /.user_area -->
      </nav>
      <!-- /.nav_bottom -->
    </div>
    <!-- /.container -->
  </header>
  <!-- /#site_header -->
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
import NavbarSocialList from "@/components/NavbarSocialList.vue";


export default {
  name: 'SiteHeader',
  components:{
    NavbarMenu,
    NavbarSocialList,
  },
  data(){
    return{
      NavLists:[
        {
          id:1,
          item:'Home'
        },
        {
          id:2,
          item:'Pages'
        },
        {
          id:3,
          item:'Course Formats'
        },
        {
          id:4,
          item:'Courses'
        },
        {
          id:5,
          item:'Demos'
        },
      ],
      NavSocialList:[
        {
          id:1,
          icon:'fa-brands fa-facebook'
        },
        {
          id:2,
          icon:'fa-brands fa-twitter'
        },
        {
          id:3,
          icon:'fa-brands fa-instagram'
        },
        {
          id:4,
          icon:'fa-brands fa-linkedin'
        },
        {
          id:5,
          icon:'fa-brands fa-google-plus'
        },
        {
          id:6,
          icon:'fa-brands fa-youtube'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header{
    height: 124px;
    color:$venus;

    .container_lg{
      .nav_top{
          padding: 10px;
          background-color:white ;
          font-size: 12px;
          border-bottom: 1px solid lightgray;  
      }

      .nav_bottom{
        
        padding:11px 10px;
        font-size: 13px;
        .logo{
          height: 36px;
          width: 200px;
        }

        .icon{
          padding-right: 6px;
        }

         .bookmark{
            font-size:18px;
          }

        .input-group{
          width: 448px;
          height: 36px;
          padding: 0 8px;
          input{
            background-color: $mystic;
            border-radius: 0;
            
          }

          button{
            background-color: $azure;
          }
        }

        a{
          color:$venus;
        }

        ul{
          li{
            padding:0 20px;
          }
        }

        .user_area{
          button:hover{
            background-color:$btn-hover-bg-primary;
            color:$white;
            transition: 0.5s ease;
          }
        }
      }

    }
  }

</style>