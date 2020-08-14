<template>
<div>
  <b-jumbotron sm-variant="info" header="Country Directory" text-variant="dark" border-variant="light">
      <div class="form-controls">
                            <label for="countries" class="select-label">Select Country</label>
                            <select name="countries" id="countries" v-model="selectedCountry" @change="onCountrySelect($event)" class="count-select">
                                <option :value=country.name v-for="country in countries" :key="country.id" class="count-option">{{ country.name }}</option>
                            </select>
                        </div>

       <div class="form-controls">
                            <label for="state">Select State</label>
                            <select name="states" id="states" v-model="selectedState" @change="onStateSelect($event)" class="count-select">
                                <option :value="state.name" v-for="state in states" :key="state.id" class="count-option">{{ state.name}}</option>
                            </select>
                            <div v-if="stateError" :class="{empty: stateError}">
                                <p>please select a country with a state</p>
                            </div>
                        </div>
                    
        <div class="form-controls">
                            <label for="cities">Select City</label>
                            <select name="cities" id="cities" v-model="selectedCity" class="count-select">
                                <option :value="city.name" v-for="city in cities" :key="city.id" class="count-option">{{ city.name}}</option>
                            </select>
                            <div v-if="cityError" :class="{empty: cityError}">
                                <p>please select a state with a city</p>
                            </div>
                        </div>     
 

    
  </b-jumbotron>

   
</div>
</template>

<script>
//window.axios =require("axios");
  export default {
    data() {
     
      return {
            title: 'Countries',
            selectedCountry: "",
            selectedState: "",
            selectedCity: "",
            stateError: false,
            cityError: false,
            countries: [],
            states: [],
            cities: [],
            country: "",
            state: "",
            city: ""
           
            
       
      }
    },


    
      created(){
          this.$http.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json")
          .then(
            response=>{
                return response.json()
            }
        ).then(data=>{
            this.countries = data;
        })  
      } , 
      
    
   methods: {
        onCountrySelect(event) {
            const state = event.target.value
            const index = this.countries.findIndex((x=>x.name === state))
            const countryState = this.countries[index]['states']
            if (countryState.length === 0) {
                this.stateError = !this.stateError 
                this.states = null   
                this.cities = ""
            } else {
                this.states = countryState
                this.stateError = false
            }
        },
        onStateSelect(event) {
            const state = event.target.value
            const index = this.states.findIndex((x=>x.name === state))
            const city = this.states[index]['cities']
            if (city.length === 0) {
                this.cityError = !this.cityError
            } else {
                this.cities = city
                this.cityError = false
            }
        }
    }
}
  




 
</script>