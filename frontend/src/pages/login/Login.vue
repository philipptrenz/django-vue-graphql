<template>
   <v-app>
      <v-main>
         <v-container fluid fill-height >
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login</v-toolbar-title>
                     </v-toolbar>
                     <v-form method="post" ref="form">
                        <v-card-text>
                      
                          <v-text-field
                              v-show="false"
                              :name="csrfName"
                              :value="csrfValue"
                              type="hidden"
                          ></v-text-field>

                          <v-text-field
                              name="username"
                              label="User"
                              type="text"
                              autocomplete="username"
                          ></v-text-field>
                          <v-text-field
                              name="password"
                              label="Password"
                              type="password"
                              autocomplete="current-password"
                          ></v-text-field>
                            
                        </v-card-text>
                        <v-card-actions>

                            <v-spacer></v-spacer>
                            <v-btn type="submit" color="primary">Login</v-btn>
                            
                        </v-card-actions>
                     </v-form>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
export default {
  name: 'Login',
  computed: {
    csrfName() {
      return document.getElementById('csrf').getElementsByTagName('input')[0].name;
    },
    csrfValue() {
      return document.getElementById('csrf').getElementsByTagName('input')[0].value;
    }
  },
};
</script>

<style>
div[data-app='true'] {
  background: url('~@/assets/background.jpg') no-repeat center center fixed !important;
  background-size: cover !important;
}
</style>

