<template>
<div>
    <b-card ><h2><strong>Welcome to Weblog</strong></h2>
    <b-list-group>
      <b-list-group-item href="+titles.body" v-for="titles in title"
      :key="titles.title"  :value=titles.title ><strong><h4>{{titles.title}}</h4></strong>
      </b-list-group-item>
  
     
    </b-list-group>
     
    <b-overlay :show="show" rounded="sm">
    
       
    </b-overlay>
  </b-card>
   <p :disabled="show" style="cursor:pointer" variant="primary" @click="shows()">
          See more...
        </p>
  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        title: []
        
      }
    },

 created(){
          this.$http.get('https://jsonplaceholder.typicode.com/posts')
          .then(
            response=>{
                return response.json()
            }
        ).then(data=>{
            this.title= data
        })  
      } , 

   methods: {

        shows(){
            if(this.show=true){
                 setTimeout(this.show, 3000)
            }else{
                this.show=false;
            }
           
        }                
            
      
           
       
    }
   }
</script>