<template>
  <v-app>
 
    <v-layout fluid fill-height>
      <MenuBar/>
      <router-view/>
    </v-layout>
   
  </v-app>
</template>

<script>
   import MenuBar from '@/components/MenuBar.vue'
export default {
  name: 'App',
   components:{MenuBar},
  data: () => ({
    //
  }),
};
</script>
