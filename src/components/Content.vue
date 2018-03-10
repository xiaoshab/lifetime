<template>
	<div class="banner">
		<h2 class="banner_title">店内精品</h2>
		<ul class="banner_img">
			<li v-for="(item,idx) in imgs" :key="idx">
				<h3>{{ item.title }}</h3>
				<img :src="item.img" alt="">
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data () {
		return {
			imgs:[
					{img:'/static/0fe4746c75ac1b5908c1af2ce28bfd33.jpg',title:'欧美风格'},
					{img:'/static/31Q58PIC8Zm_1024.jpg',title:'复古风情'},
					{img:'/static/145519bspyjj7407z0ji1y.jpg',title:'田园风光'},
					{img:'/static/4473131_094227691167_2.jpg',title:'阳光海滩'},
					{img:'/static/2014042216270686.jpg',title:'山水之间'},
					{img:'/static/2014091414041394.jpg',title:'霸道总裁'},
					{img:'/static/147042048482105233.JPEG',title:'温柔系'},
					{img:'/static/20166161438361578540.jpg',title:'ROMANTIC'},

				]
		}
	}
}
	
</script>
<style>
	.banner{
	}
	.banner_title{
		font-size: 50px;
		text-align: center;
		margin-bottom: 20px;
	}
	.banner_img{
		width: 100%;
	}
	.banner_img li img{
	width: 100%;
	height: auto;
	}
	.banner_img li h3{
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: #9cf
	}
</style>