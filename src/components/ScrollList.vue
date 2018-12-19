<template>
  <div id="contents" class="cont_games">
	<div class="spot_games">
		<h2 class="tit_cate">스크롤 모션</h2>
    </div>
	<div class="inner_cont">

    <ul class="list_pages">
      <li>
          <strong class="tit_pages">#1.</strong>
          <span class="txt_pages">휠스크롤 시 해당영역의 네비게이션이 활성화 됩니다. ex. Bootstrap Scrollspy</span>
          <div class="group_link">
            <a href="https://codepen.io/run-hani/full/bOemoj" target="_blank" class="link_page">가로형</a>
            <a href="https://codepen.io/run-hani/full/VqeVNw" target="_blank" class="link_page">세로형</a>
          </div>
      </li>
      <li>
          <strong class="tit_pages">#2.</strong>
          <span class="txt_pages">휠스크롤 시 한페이지씩 아래로 이동합니다.</span>
          <div class="group_link">
            <a href="https://codepen.io/run-hani/full/NerOrM" target="_blank" class="link_page">가로형</a>
            <a href="https://codepen.io/run-hani/full/NexVWE" target="_blank" class="link_page">세로형</a>
          </div>
      </li>
      <li>
          <strong class="tit_pages">#3.</strong>
          <span class="txt_pages">휠스크롤 시 아래에서 한페이지씩 올라옵니다.</span>
          <div class="group_link">
            <a href="https://codepen.io/run-hani/full/xmOyWV" target="_blank" class="link_page">가로형</a>
            <a href="https://codepen.io/run-hani/full/KbgBVj" target="_blank" class="link_page">세로형</a>
          </div>
      </li>
    </ul>
	</div>
  </div>
</template>

<script>
  import axios from '../axios-auth';

  export default {
    name: 'ScrollList',
    data: function () {
      return {

      }
    },
    computed: {

    },
    methods: {

    },
    created () {

    }
  }
</script>