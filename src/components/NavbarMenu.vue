<template>

    <li><a href="#">{{list.item}}</a></li>
    
</template>

<script>

export default {
    name: 'FooterMenu',
    props:{
        list: Object,
    }
}
</script>

<style lang="scss" scoped>

     .nav_top_right{
        .main_menu{
            margin-right: 0.445rem;
            ul{
            li{
                padding:0 1.43rem 0 0;

                a {
                color:$venus
                } 
            }
            }
        }
    }

</style>
