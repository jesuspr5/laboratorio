<template>
 
    <div class="menu">
      <v-navigation-drawer 
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
         
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
           
           
          </v-list-item-avatar>
   
          <v-list-item-title >
              
             bienvenido
              
            </v-list-item-title>
         
  
          <v-btn
            icon
            @click.stop="mini = !mini"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      
      </v-navigation-drawer>
    </div>
  
  </template>


    <script>

  export default {
    name : 'MenuBar',
    data: () =>(

      {
      
        drawer: "false",
        items: [
        { title : 'DashBoard', icon: 'mdi-view-dashboard',to:'dashboard' },
          { title: 'Tabla', icon: 'mdi-table' ,to:'table' } 
        ],
        mini: true,
      }
    
    )
  }
</script>

<style>
.menu{
  position: relative;
}

</style>