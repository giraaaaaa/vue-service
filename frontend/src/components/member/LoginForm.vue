<template>
<div>
 <Nav></Nav>
 <form>
   <div class="form-group">
     <label for="email">Email:</label>
     <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
   </div>
   <div class="form-group">
     <label for="pwd">Password:</label>
     <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="pwd">
   </div>
   <div class="checkbox">
     <label><input type="checkbox"> Remember me</label>
   </div>
   <button @click="get" class="btn btn-default">조 회</button>
   <button @click="post" class="btn btn-default">입 력</button>
   <button @click="pub" class="btn btn-default">수 정</button>
   <button @click="del" class="btn btn-default">삭 제</button>
   <br>
   <br>
   <input tyep="bab">
 </form>
 <Footer></Footer>
</div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'
import axios from 'axios'

export default {
 data : () => {
   return {
     localhost : 'http://localhost:9000/',
     id : '',
     password : ''
   }
 },
 methods : {
   summit() {

     var data = {
       id : this.id,
       pass : this.password
     }

      axios.post(this.localhost + 'customers/join', data).then(e => {
       alert('SUCCESS' + e.data);
     }).catch(e => {
       alert('ERROR');
     })
      axios.post(this.localhost + 'customers/count', data).then(e => {
       alert('SUCCESS' + e.data);
     }).catch(e => {
       alert('ERROR');
     })
   }
 },
 components: {
   Nav,
   Footer
 }
}</script>

<style scoped>
</style>