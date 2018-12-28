<template>
	<header class="head_games">
		<h1 class="logo_games">
			<router-link to="/docs/" class="link_logo" exact>
				<img src="../../assets/img/logo_games.png" class="img_logo" alt="dk techin">
					<span class="txt_logo">모션 가이드</span>
			</router-link>
		</h1>

		<ul class="menu_games">
			<router-link to="/docs/" active-class="on" tag="li" exact><a href="#none" class="link_menu">사이트</a></router-link>
			<router-link to="/docs/ScrollList" active-class="on" tag="li"><a href="#none" class="link_menu">스크롤 모션</a></router-link>
			<router-link to="/docs/ParticleList" active-class="on" tag="li"><a href="#none" class="link_menu">파티클</a></router-link>
			<router-link to="/docs/SlideList" active-class="on" tag="li"><a href="#none" class="link_menu">슬라이드</a></router-link>
			<router-link to="/docs/LayerList" active-class="on" tag="li"><a href="#none" class="link_menu">레이어 팝업</a></router-link>
			<router-link to="/docs/BtnList" active-class="on" tag="li"><a href="#none" class="link_menu">버튼</a></router-link>
		</ul>
		<!-- //lnb -->
		<hr class="hide" />
	</header>
	<!-- //header -->
</template>

<script>
  import { mapState } from 'vuex'

  export default {
	name: 'AppHeader',
	data: function () {
	  return {
	  }
	},
	methods: {
	  
	},
	computed: {
	  
	},
	created () {
	}
  }
</script>
