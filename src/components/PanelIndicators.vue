<template>
    <v-container class="max" >
        <v-layout class="bg" row wrap>
          <v-flex class="card-indicators" sm3 pa-3>
              
            <h5 class="text-center pa-5">Cantidad de ventas por hora</h5>
            <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
            ></v-sparkline>
          </v-flex>
          <v-flex class="card-indicators"  sm3 pa-3>

            <h5 class=" text-center pa-5" >AHT</h5>
            <v-progress-circular 
                :rotate="360"
                :size="100"
                :width="15"
                :value="valueInd"
                color="teal"
                >
                {{ valueInd }}
            </v-progress-circular>
          </v-flex>
          <v-flex class="card-indicators" sm3 pa-3 >
            <h5 class="text-center pa-5">Ventas acumuladas</h5>
            <v-progress-linear
            color="light-blue"
            height="40"
            value="50"
            striped
            ></v-progress-linear>
             {{ valueInd }}
          </v-flex>
          <v-flex class="card-indicators" sm3 pa-3>
            <h5 class="text-center pa-5">Ventas concretadas</h5>
            <v-progress-linear
            height="40"
            value="45"
            striped
            color="lime"
            ></v-progress-linear>
             {{ valueInd }}
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
export default {
  data: () => ({
    valueInd:70,
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  }),
}
</script>
<style scoped>
/* .center{
  margin-left:auto;
  margin-right: auto;
} */
.max{
    max-width: 98%;
}
</style>