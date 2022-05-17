<template>

    <a href="#"><font-awesome-icon  :icon="element.icon" class="pe-2"/></a>
    
</template>

<script>

    export default {

    name: 'NavbarSocialList',
    props:{
        element: Object,   
    }
    }
</script>

<style lang="scss" scoped>

    a{
    color:$venus
    } 

</style>
