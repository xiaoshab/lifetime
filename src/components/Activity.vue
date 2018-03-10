<template>
	<div class="act">
		<Head />
		<img src="../assets/1.jpg" alt="">
		<img src="../assets/2.jpg" alt="">
		<img src="../assets/3.jpg" alt="">
		<Footer />
	</div>
</template>
<script>
	import Head from './Head.vue'
	import Footer from './Footer.vue'
	export default {
		components:{
			Head,
			Footer
		}
	}
</script>
<style>
    .act{overflow: hidden;} 
	.act img{width: 100%;
		float: left;
		}
</style>