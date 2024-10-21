<!-- <template>
    <div>
        <h2>Login</h2>
        <input type="text" v-model="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <button @click="login">Login</button>
    </div>
</template> -->
  
<!-- <script setup>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            axios.post('http://127.0.0.1:8080/login/login', { username: this.username, password: this.password })
                .then(response => {
                    // 处理登录成功的逻辑
                    console.log(response.data);
                })
                .catch(error => {
                    // 处理登录失败的逻辑
                    console.error(error);
                });
        }
    }
};
</script> -->
  


<template>
    <div>
        <h2>Login</h2>
        <input type="text" v-model="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <button @click="login">Login</button>
    </div>
</template>

<script setup>
import axios from 'axios'; // 假设已创建 axios 配置文件
import {ref} from 'vue'
const username = ref('');
const password = ref('');

const login = async () => {
    try {
        alert(username.value)
        const response = await axios.post('http://127.0.0.1:8080/login/login', { username: username.value, password: password.value });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
</script>

<style scoped>
/* 登录页面的样式 */
</style> 