<template>
  <div id="app">
    <div class="console-wrapper">
      <textarea class="console" readonly v-model="result" />
    </div>
    <button @click="simulate" class="btn-play">Simulate</button>
  </div>
</template>

<script>
import TournamentFactory from './models/tournament/TournamentFactory';
export default {
  name: 'App',
  data(){
    return {
      result: '',
      tournamentFactory: new TournamentFactory()
    }
  },
  methods:{
      simulate(){
        this.result = 'simulated';
      }
  },
  mounted(){
    console.log(this.tournamentFactory.createRandomHockeySeries());
  }
}
</script>

<style>
  body{
    background-color: black;
  }
  #app {
    text-align: center;
    color: #2c3e50;
    background-color: black;
  }
  .console{
    background-color: black;
    color: greenyellow;
    width: 50%;
    height:600px;
  }
</style>
