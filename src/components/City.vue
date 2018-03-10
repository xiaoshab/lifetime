<template>
	<ul class="cityStyle">
		<li v-for="city in citys" @click="City">{{city}}</li>
	</ul>
</template>
<script>
	export default{
		data(){
			return {
				citys:["北京","上海","广州","深圳","成都","杭州","香港","厦门",
						"昆明","廊坊","丽水","洛阳","临沂"]
			}
		},
		methods:{
			City(e){
				this.$emit('City',e.target.innerText)
			}
		}
	}
</script>
<style>
	.cityStyle{
		width: 141px;
		position: absolute;
		top: 50px;
		left:46.2%;
		z-index: 3;
		line-height: 30px;
		letter-spacing: 30px;
		background: rgba(135,206,235,.5);
	}
	.cityStyle li{
		margin-right: 13px;
	}
</style>