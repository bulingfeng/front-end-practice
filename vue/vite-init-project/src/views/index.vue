<!-- <script setup lang="ts">
import HomeBanner from "./components/HomeBanner.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeProduct from "./components/HomeProduct.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeHot />
  <HomeProduct />
</template> -->

<!-- <template>
  <div>
    <label for="link">输入链接:</label>
    <input type="text" id="link" v-model="url" placeholder="输入 URL" />

    <a v-bind:[attributeName]="url">点击访问链接</a>
  </div>
</template> -->

<!-- <script setup>
// 测试动态属性如何做
// export default {
//   data() {
//     return {
//       url: 'https://www.baidu.com',
//       attributeName: 'href'
//     };
//   }
// };
import { ref } from 'vue';
const url = ref('https://www.baidu.com');
const attributeName = ref('href');
</script>

<style>
/* 你可以在这里添加样式 */
</style> -->


<!-- <template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="name" placeholder="输入姓名" />
    <button type="submit">提交</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    };
  },
  methods: {
    onSubmit() {
      alert(`提交的姓名是: ${this.name}`);
      // 这里可以添加其他处理逻辑，例如发送请求
    }
  }
};
</script> -->


<!-- <template>
  <div>
    <input ref="input" placeholder="输入一些内容">
    <button @click="focusInput">聚焦输入框</button>
  </div>
</template> -->
<!-- 获取到输入框的两种方式-->
<script setup>
// export default {
//   methods: {
//     focusInput() {
//       alert('聚焦输入框'+this.$refs.input.value);
//     }
//   }
// };
// import { ref } from 'vue';
// const input = ref('');
// const focusInput = () => {
//   console.log('聚焦输入框'+input.value.value);
//   alert('聚焦输入框'+input.value.value);
// };
// </script>


