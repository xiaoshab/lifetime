
<template>
	<div>
		<Head />
		<ul class="case">
			<li v-for="(img,idx) in imgs" :key="idx" @click="click(idx)">
				<h2>{{img.title}}</h2>
				 <router-link :to='img.herf'><img :src="img.path" alt=""></router-link>
			</li>
		</ul>
		 <router-view></router-view> 
		<Footer />
	</div>
	
</template>
<script>
import Head from './Head.vue'
import Footer from './Footer.vue'

	export	default{
		data(){
			return {
				imgs:[
				{path:'./static/CaseImg/1/1.jpg',title:'欧美风情',herf:'/wokrs/:id'},
				{path:'./static/CaseImg/2/1.jpg',title:'复古风情',herf:'/wokrs/:id'},
				{path:'./static/CaseImg/3/1.jpg',title:'田园风光',herf:'/wokrs/:id'},
				{path:'./static/CaseImg/4/1.jpg',title:'阳光海滩',herf:'/wokrs/:id'}
				]
			}
		},
		components:{
				Head,
				Footer	
			},
			methods:{
				click(idx){
					window.location = `http://localhost:8080/#/wokrs/${idx}`
				}
			}
	}

</script>
<style>
.case li{
	overflow: hidden;
}
	.case li img{
		width: 100%;
		float: left;
	}
	.case li h2{
		text-align: center;
		line-height: 50px;
		background: rgba(255,182,193,.5);
	}
</style>