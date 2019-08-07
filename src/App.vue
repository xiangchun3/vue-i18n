<template>
  <div id="app">
    <van-nav-bar
      :title="$t('message.my')"
      :left-text="$t('message.back')"
      :right-text="$t('message.confirm')"
      left-arrow
    />
    <van-swipe :autoplay="3000" class="banner">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="4">
      <van-grid-item
        v-for="(value, index) in 8"
        :key="value"
        icon="photo-o"
        :text="$t('message.icon', [index])"
      />
    </van-grid>

    <van-button icon="setting-o" type="default" size="small" @click="showPicker = true">{{$t('message.languages')}}</van-button>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :confirm-button-text="$t('message.confirm')"
        :cancel-button-text="$t('message.cancel')"
        :columns="langs"
        @cancel="showPicker = false"
        @confirm="language"
      />
    </van-popup>
    
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">{{$t('message.home')}}</van-tabbar-item>
      <van-tabbar-item icon="search">{{$t('message.search')}}</van-tabbar-item>
      <van-tabbar-item icon="friends-o">{{$t('message.friends')}}</van-tabbar-item>
      <van-tabbar-item icon="setting-o">{{$t('message.setting')}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      active: 0,
      langs: ['zh', 'en'],
      showPicker: false,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg'
      ]
    }
  },
  // components: {
  //   HelloWorld
  // },
  methods: {
    language(picker) {
      this.$i18n.locale = picker
      localStorage.setItem('lang', picker)
      this.showPicker = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.banner {
  height: 200px;
}
.banner img {
  width: 100%;
  height: 100%;
}
</style>
