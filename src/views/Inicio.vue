<template>
  <div>
    <v-container fluid class=" ma-2">
    <v-layout >
       <v-flex class="bg" xs9 pa-1>
         <h3 class="blue--text" pa-3>Hola, Jimena</h3>
       </v-flex>
    </v-layout>
    <h3 class="bgtitle--text py-3">Panel de indicadores</h3>
    <PanelIndicators/>
    <h3 class="bgtitle--text py-3">Resultados del equipo</h3> 
    <TeamResult/>
    <Leyend/>
  </v-container>
  </div>
  

</template>

<script>
// @ is an alias to /src
import PanelIndicators from '@/components/PanelIndicators.vue'
import TeamResult from '@/components/TeamResult.vue'
import Leyend from '@/components/Leyend.vue'

export default {
  name: 'Inicio',
  components: {
    PanelIndicators,
    TeamResult,
    Leyend
  }
}
</script>
