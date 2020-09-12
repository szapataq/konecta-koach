<template>
  <nav>
    <v-app-bar color="primary" app >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn text>
        <v-icon >power_settings_new</v-icon>
        <span right>Cerrar sesion</span>
      </v-btn>
    </v-app-bar>
    
    <v-navigation-drawer  v-model="drawer" app class="bg">
      <h3 class="subheading mt-4 text-center">COACHING</h3>

      <v-layout column align-center>
        <v-flex class="mt-5"> 
          <v-avatar size="100">
            <img src="/avatar.png" alt="">
          </v-avatar>
          <p class="blue--text subheading mt-1 text-center">Jimena Lozano</p>
        </v-flex>
      </v-layout>

      <v-list flat>
        <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
          <v-list-item-action>
            <v-icon >{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content >
            <v-list-item-title >{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data: () => ({
    drawer:true,
    links: [
      {icon: 'home', text:'Inicio', route:'/'},
      {icon: 'supervisor_account', text:'Seguimiento', route:'/seguimiento'},
      {icon: 'notifications', text:'Notificaciones', route:'/notificaciones'},
      {icon: 'person', text:'Perfil', route:'/perfil'},
    ]
  })
}
</script>
<style scoped>
.border {
  border-left: 4px solid #03dac5;
}
</style>