<template>
	<div>
		<Head />
		<h1 class="works_title">作品图片集</h1>
		<ul class="works_img">
			<li v-for='img in href'><img :src="img" alt=""></li>
		</ul>
		<Footer />
	</div>
	
</template>
<script>
import Head from './Head.vue'
import Footer from './Footer.vue'
	export default{
		data(){
			return {
				index:'1',
				href:[],
				imgs:[{idx:0,src:['./static/CaseImg/1/1.jpg',
								   './static/CaseImg/1/2.jpg',
								   './static/CaseImg/1/3.jpg',
								   './static/CaseImg/1/4.jpg',
								   './static/CaseImg/1/5.jpg',
								   './static/CaseImg/1/6.jpg',
								   './static/CaseImg/1/7.jpg',
								   './static/CaseImg/1/8.jpg'
								   ]
								},
								{idx:1,src:['./static/CaseImg/2/1.jpg',
								   './static/CaseImg/2/2.jpg',
								   './static/CaseImg/2/3.jpg',
								   './static/CaseImg/2/4.jpg',
								   './static/CaseImg/2/5.jpg',
								   './static/CaseImg/2/6.jpg',
								   './static/CaseImg/2/7.jpg',
								   './static/CaseImg/2/8.jpg'
								   ]
								},
								{idx:2,src:['./static/CaseImg/3/1.jpg',
								   './static/CaseImg/3/2.jpg',
								   './static/CaseImg/3/3.jpg',
								   './static/CaseImg/3/4.jpg',
								   './static/CaseImg/3/5.jpg',
								   './static/CaseImg/3/6.jpg',
								   './static/CaseImg/3/7.jpg',
								   './static/CaseImg/3/8.jpg'
								   ]
								},
								{idx:3,src:['./static/CaseImg/4/1.jpg',
								   './static/CaseImg/4/2.jpg',
								   './static/CaseImg/4/3.jpg',
								   './static/CaseImg/4/4.jpg',
								   './static/CaseImg/4/5.jpg',
								   './static/CaseImg/4/6.jpg',
								   './static/CaseImg/4/7.jpg',
								   './static/CaseImg/4/8.jpg'
								   ]
								},
				]
			}
 		},
		components:{
			Head,
			Footer
		},
		created(){
			
			let j = this.$route.params.id==':id'?0:this.$route.params.id;
			let len = this.imgs.length
			for(let i=0;i<len;i++){
				if(j==this.imgs[i].idx){
					this.href = this.imgs[i].src
				}
			}
		}
	}
</script>
<style>
	.works_title{
		text-align: center;
		line-height: 50px;
		color: #999;
		background: #9cc;
	}
	.works_img li{
		overflow: hidden;
	}	
	.works_img li img{
		width: 100%;
		float: left;
		margin-bottom: 15px;
	}
</style>