<template>
<div>
 <Nav></Nav>
 <form>
   <div class="form-group">
     <label for="email">ID :</label>
     <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="customerId">
   </div>
   <div class="form-group">
     <label for="pwd">Password:</label>
     <input type="text" class="form-control" id="pwd" placeholder="Enter password" v-model="password">
   </div>
   <div class="checkbox">
     <label><input type="checkbox"> Remember me</label>
   </div>
   <button class="btn btn-default" @click="count">count</button>
   <button class="btn btn-default" @click="deleteById">deleteById</button>
   <button class="btn btn-default" @click="existsById">existsById</button>
   <button class="btn btn-default" @click="findAll">findAll</button>
   <button class="btn btn-default" @click="findById">findById</button>
   <button class="btn btn-default" @click="save">save</button>
   <button class="btn btn-default" @click="login">login</button>

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
     context : 'http://localhost:9000/customers',
     customerId:'hong',
     customerName : '홍길동',
     password : '1234',
     ssn : '931229-111111',
     phone : '01055754786',
     city: '서울 종로',
     address : 'ymca',
     postalcode : '123456',
     photo : 'hong.jpg'
   }
 },

 components: {
   Nav,
   Footer
 },

 methods :{
     count (e) {
       e.preventDefault();
       axios.get(`${this.context}/count`)
         .then(res=>{
           alert(`count() SUCCESS : ${res.data}`)
         })
         .catch(e=>{
           alert('ERROR')
         })
     },
     deleteById (e) {
       e.preventDefault();
       axios.delete(`${this.context}/1`)
         .then(res=>{
           alert(`SUCCESS2 : ${res.data}`)
         })
         .catch(e=>{
           alert('ERROR')
         })
     },
     existsById (e) {
       e.preventDefault();
       axios.get(`${this.context}/exists/1`)
         .then(res=>{
           alert(`existsById (e) SUCCESS : ${res.data}`)
         })
         .catch(e=>{
           alert('ERROR')
         })
     },
     findAll (e) {
       e.preventDefault();
       axios.get(`${this.context}`)
         .then(res=>{
           alert(`SUCCESS2 : ${res.data[0].customerName}`)
         })
         .catch(e=>{
           alert('ERROR')
         })
     },
     findById (e) {
       e.preventDefault();
       axios.get(`${this.context}/1`)
         .then(res=>{
           alert(`findById() SUCCESS : ${res.data.customerName}`)
         })
         .catch(e=>{
           alert('ERROR')
         })
     },
     save (e) {
       let data = {
         id: 40,
         customerId: this.customerId,
         customerName: this.customerName,
         password : this.password,
         ssn : this.ssn,
         phone  : this.phone,
         city: this.city,
         address: this.address,
         postalcode: this.postalcode,
         photo: this.photo
       }
       let headers = {
         'Content-Type': 'application/json',
         'Authorization' : 'JWT fefege..'
       }
       e.preventDefault();
       axios.post(`${this.context}`,
                 JSON.stringify(data),
                 {headers: headers})
         .then(res=>{
           alert(`SUCCESS2 : ${res.data}`)
         })
         .catch(e=>{
           alert('ERROR')
         })
     },
     login(e){
        let data = {
         customerId: this.customerId,
         password : this.password
         }
       let headers = {
         'Content-Type': 'application/json',
         'Authorization' : 'JWT fefege..'
       }
       e.preventDefault();
       axios.post(`${this.context}/login`,
                 JSON.stringify(data),
                 {headers: headers})
         .then(res=>{
           alert(`SUCCESS2 : ${res.data}`)
         })
         .catch(e=>{
           alert('ERROR')
         })
     }
    

 }
}


</script>

<style scoped>
</style>