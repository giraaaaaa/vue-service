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
 data(){
   return{
     context:'http://localhost:9000/customers'
   }
 },
 components: {
   Nav,
   Footer
 },
 methods:{
     count(e){
        e.preventDefault();
        axios.get(`${this.context}/count`)
        .then(res=>{
            alert(`count : ${res.data}`)
        })
        .catch(e=>{
            alert('ERROR')
        })
     },

     // post(e){
     //   e.preventDefault();
     //   axios.post(`${this.context}/`, {
     //       customerId: 'test',
     //       customerName: 'test12345'
     //     })
     //   .then(res=>{
     //     alert(`POST 연동성공: ${res.data}`)
     //   })
     // },
     deleteById(){
       axios.delete(`${this.context}/1`)
       .then(res=>{
         alert(`deleteById 연동성공: ${res.data}`)
       })
       .catch(e=>{
            alert('ERROR')
        })
     },

     existsById(){
       axios.get(`${this.context}/exists/1`)
       .then(res=>{
         alert(`existsById 연동성공: ${res.data}`)
       })
       .catch(e=>{
            alert('ERROR')
        })
     },

     findAll(){
       axios.get(`${this.context}`)
       .then(res=>{
         alert(`findAll 연동성공: ${res.data}`)
       })
       .catch(e=>{
            alert('ERROR')
        })
     },

     findById(){
       axios.get(`${this.context}/1`)
       .then(res=>{
         alert(`findById 연동성공: ${res.data}`)
       })
       .catch(e=>{
            alert('ERROR')
        })
     },

     save(){
       axios.post(`${this.context}`)
       .then(res=>{
         alert(`save 연동성공: ${res.data}`)
       })
       .catch(e=>{
            alert('ERROR')
        })
     },
 }
}
</script>

<style scoped>
</style>
