<template>
  <v-card class="elevation-12 my-12 px-8 py-8">

    <v-row class="text-center" align="center" justify="center">

      <v-col cols="12">
        <h2>{{ $options.name }}</h2>
      </v-col>

      <v-col cols="12">
        <p>
          <span class="font-weight-bold">Result:</span>
          "{{ test }}"
        </p>
      </v-col>

    </v-row>

  </v-card>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'QueryExample',
  apollo: {
    test: {
      query: gql`
        query {
          test
        }
      `
    }
  }
    
}
</script>
