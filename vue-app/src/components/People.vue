<template>
  <div class="container">
      {{title}}
  </div>
</template>

<script>
export default {
name:"people",
data:()=>{
    return{
        title:"people"
    }
},
created(){
    this.title = this.$route.name
}
}
</script>

<style>

</style>