<template>
  <v-app>

    <v-app-bar
      app
      color="primary"
      dark
    >

      <div class="d-flex align-center">
        <h1>Django + Vuetify + GraphQL = 🤍</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="isDebug === true"
        color="white"
        class="primary--text font-weight-bold"
        href="/graphql/"
        target="_blank"
        style="margin-right: 20px;"
      >GRAPHiQL</v-btn>

      <v-btn
        color="white"
        class="primary--text font-weight-bold"
        href="/admin/"
        target="_blank"
        style="margin-right: 20px;"
      >Admin</v-btn>

      <v-btn
        color="white"
        class="primary--text font-weight-bold"
        href="/logout/?next=/"
      >Logout</v-btn>

    </v-app-bar>

    <v-main>
      <v-container fluid fill-height >
        <v-layout align-center justify-center>

            <v-flex xs12 sm12 md8>

                <QueryExample />

                <MutationExample />
              
            </v-flex>

        </v-layout>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import gql from 'graphql-tag';
import QueryExample from '../../components/QueryExample';
import MutationExample from '../../components/MutationExample';

export default {
  name: 'App',

  components: {
    QueryExample,
    MutationExample,
  },

  apollo: {
    isDebug: {
      query: gql`
        query {
          isDebug
        }
      `
    }
  }
};
</script>

<style>
div[data-app='true'] {
  background: url('~@/assets/background.jpg') no-repeat center center fixed !important;
  background-size: cover !important;
}
</style>
