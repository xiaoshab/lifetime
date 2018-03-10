<template>
  <div class="position">
    <Head />
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item,idx) in img" :key="idx">
     <img :src="item.img" alt="">
    </el-carousel-item>
  </el-carousel>
      <Content />
      <Footer />
</div>
</template>

<script>
import Footer from './Footer.vue'
import Content from './Content.vue'
import Head from './Head.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
           img:[
                {img:'/static/102705gbzprsoxxjt2stoe.jpg'},
                {img:'/static/4473131_094227691167_2.jpg'},
                {img:'/static/4473131_184338804000_2.jpg'},
                {img:'/static/2013100802423679279.jpg'}

            ]
    }
  },
  components:{
    Footer,
    Content,
    Head
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.el-carousel__container{
  border-radius: 15px;
}
.el-carousel__container img{
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .position{
    position: relative;
    background: #eee;
  }

</style>
