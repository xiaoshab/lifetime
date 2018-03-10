<template>
	<div class="footer">
		<ul class="footer_nav">
			<li>联系电话:04-5201-2031314</li>
			<li>联系地址：贵阳市观山湖区</li>
			<li>在线服务：QQ 1597243154</li>
		</ul>
			<ul class="footer_location">
			<li>农林旗舰店地址：越秀区农林下路26号 电话：1314-520-203</li>
			<li>天河体验店地址：天河南一路86号 电话1314-520-203</li>
			<li>天河又一城体验店地址：体育西路54号天河又一城D011铺 电话：1314-520-203</li>
			<li>海珠体验店地址：海珠区江南新地商业街负一层D09铺 电话：1314-520-203</li>
			<li>番禺体验店地址：番禺区光明北路21&middot;23号 电话：1314-520-203</li>
			<li>钻汇体验店地址：番禺区钻汇广场 电话：1314-520-203</li>
			<li>永泰体验店：白云区永泰地铁站A出口永泰生活广场 电话：1314-520-203</li>
			<li>嘉州体验店地址：佛山市南海区黄岐嘉州广场首层C1058铺 电话：1314-520-203</li>
		</ul>		
		<p class="footer_under">
		粤ICP备14009512ACH62号-1一生挚爱摄影 [贵阳总部，联系电话：1314-520-520]</p>
	</div>
</template>
<script>
	
</script>

<style>
.footer{
}
	.footer_nav{
		display: flex;
		height: 120px;
		justify-content: space-around;
		background: white;
	}
	.footer_nav li{
		width: 35%;
		line-height: 120px;
		text-align: center;
		font-size: 20px;
		background-color: #f99;
		opacity: .3
	}
	.footer_nav li:nth-child(2){
		border-right: 5px solid #ccc;
		border-left: 5px solid #ccc;
	}
.footer_location{
	display: flex;
	text-align: left;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 8px;
}
.footer_location li{
	width: 46%;
	line-height: 20px;
}
.footer_under{
	text-align: center;
	margin-top: 10px;
}
</style>