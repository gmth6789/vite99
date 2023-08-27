<script setup>
// import './views/Home.vue';
// import './views/Mission.vue';
// import './views/Profile.vue';
// import './views/Rank.vue';
// import './views/Chat.vue';


</script>

<template>

<div class="container container22243">
				<div class="diygw-title diygw-top solid-bottom" style="color: white; background: #ff5098">
					<div class="title flex1 text-center">หน้าหลัก</div>
				</div>
<div class="flex flex-wrap diygw-col-0 items-stretch flex9-clz">
					<div class="diygw-col-0 text3-clz">กิจกรรมพิเศษ</div>
					<img src="./static/sd.png" class="image-size diygw-image diygw-col-0 image-clz" mode="heightFix" />
				</div>



<div class="flex diygw-col-24 diygw-bottom">
					<div class="diygw-grid diygw-actions">
						<button class="diygw-action">
							<div class="diygw-grid-inner">
								<div class="diygw-grid-icon diygw-avatar" style="">
									<img mode="aspectFit" class="diygw-avatar-img" src="./static/grid1.png" />
								</div>
								<div class="diygw-grid-title">
                <router-link to="/home">
                หน้าหลัก
                </router-link>
                </div>
							</div>
						</button>
						<button class="diygw-action">
							<div class="diygw-grid-inner">
								<div class="diygw-grid-icon diygw-avatar" style="">
                <router-view to="/mission">
									<img mode="aspectFit" class="diygw-avatar-img" src="./static/grid2.png" />
                </router-view>
								</div>
								<div class="diygw-grid-title">
                
                ภารกิจ
              
                </div>
							</div>
						</button>

						<button class="diygw-action">
							<div class="diygw-grid-inner">
								<div class="diygw-grid-icon diygw-avatar" style="">
									<img mode="aspectFit" class="diygw-avatar-img" src="./static/grid3.png" />
								</div>
								<div class="diygw-grid-title">
                <router-link to="/rank">
                อันดับ
                </router-link>
                </div>
							</div>
						</button>

            <button class="diygw-action">
							<div class="diygw-grid-inner">
								<div class="diygw-grid-icon diygw-avatar" style="">
									<img mode="aspectFit" class="diygw-avatar-img" src="./static/grid5.png" />
								</div>
								<div class="diygw-grid-title">
                <router-link to="/chat">
                แชท
                </router-link>
                </div>
							</div>
						</button>


						<button class="diygw-action">
							<div class="diygw-grid-inner">
								<div class="diygw-grid-icon diygw-avatar" style="">
									<img mode="aspectFit" class="diygw-avatar-img" src="./static/grid4.png" />
								</div>
								<div class="diygw-grid-title">
                <router-link to="/profile">
                ข้อมูล
                </router-link>
                </div>
							</div>
						</button>

					</div>
				</div>


  <component :is="currentView" />
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
