<template>
    <v-data-table
      :headers="headers"
      :items="asesores"
      class="elevation-1"
    >
      <template v-slot:item.state="{ item }">
        <v-icon pa-0 :color="getColor(item.state)" dark>person</v-icon>
      </template>
      <template v-slot:item.action="{ item }">
        <router-link :to="'/inicio/' + item._id">
          <v-btn small class="mr-2" color="success"> Crear diagnostico</v-btn>
        </router-link>
        
      </template>
    </v-data-table>
</template>
<script>

import data from '../data/data';
const items = data.map(item => {
    return item;
})

export default {
  data () {
    return {
      headers: [
        {
          text: 'Nombres y Apellidos',
          align: 'center',
          sortable: false,
          value: 'name',
        },
        { text: 'Estado', value: 'state', align: 'start'},
        { text: 'KPI 1', value: 'kpi1',align: 'start' },
        { text: 'KPI 2', value: 'kpi2',align: 'start'},
        { text: 'KPI 3', value: 'kpi3', align: 'start'},
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'action',
        },
      ],
      asesores: items
      
    }
  },
  methods: {
    getColor (state) {
      if (state < 5) return 'red';
      if (state > 5 && state <=10) return 'yellow';
      if (state > 10 && state <=15) return 'green';
    },
  },
}
</script>