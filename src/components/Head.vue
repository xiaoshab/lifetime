<template>
	<div class="position_nav">
        <h1 class="web_title" style="font-family:华文琥珀"><i>一生挚爱</i></h1>
      	<ul class="index_nav"> 
         <li v-for="(ele,idx) in msg" @click="hide(idx)"
         :key="idx" style="font-family:方正舒体">
              <router-link :to='ele.path'>
              {{ ele.name }}
              </router-link>
          </li>
         <p class="CityBox">城市：[{{val}}]</p>
      </ul>
      <router-view></router-view> 
       <City :style="{display:show}" v-on:City="City"/>
  </div>
</template>
<script>
import City from './City.vue'
	export default{
		data(){
			return {
				val:'成都',
			      show:'none',
			      msg: [
			            {name:'首页',path:'/'},
			            {name:'想去哪',path:'/'},
			            {name:'案例',path:'/case'},
			            {name:'作品',path:'/wokrs/:id'},
			            {name:'活动',path:'/activity'}
			           ]
			}
		},
		props:['citys'],
		  methods:{
		      hide(idx){
		        if(idx==1){
		          this.show = 'block'
		        }else{
		          this.show = 'none'
		        }
      	},
      City(city){
      this.val = city;
      this.show = 'none'
      }
  },
  components:{
  	City
  }

	}
</script>
<style>
	.index_nav{
  width: 56%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-left: 442px
}
.index_nav li{
  width: 20%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  color: black;
  border-radius: 5px;
  font-size: 20px;
}
.index_nav li:hover{
  background: red
}
.index_nav li a{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.web_title{
      position: absolute;
      top:0;
      left: 100px;
      letter-spacing:15px;
      font-size: 45px;
      color: #c0c;
      text-shadow: 15px 5px  5px pink;
    }
    .CityBox{
      width: 100px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      position: absolute;
      top: 0px;
      right: -100px;
      text-align: left;
    }
</style>