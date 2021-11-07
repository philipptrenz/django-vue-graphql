<template>
  <v-card class="elevation-12 my-12 px-8 py-8" >

    <v-row class="text-center" align="center" justify="center">

      <v-col cols="12">
        <h2>{{ $options.name }}</h2>
      </v-col>

      <v-col v-if="result == null" cols="12">
        <v-row>

          <v-text-field
            v-model="input"
            color="primary"
            label="Enter a text and send it to Django"
            
            required
            clearable
          ></v-text-field>

          <v-btn 
            @click="execute"
            class="ml-8"
          >
            Execute
          </v-btn>

        </v-row>
      </v-col>

      <v-col v-else cols="12">
        <p>
          <span class="font-weight-bold">Result:</span>
          "{{ result }}"
        </p>
      </v-col>

    </v-row>
    
  </v-card>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'MutationExample',

  data: () => ({
    input: '',
    result: null
  }),
  methods: {
    execute() {
      this.$apollo.mutate({
        mutation: gql`
          mutation Test($data: String!) {
            test(input: $data)
          }
        `,
        variables: {
          data: this.input
        }
    }).then((res) => {
      this.result = res.data.test;
    }).catch((error) => {
      console.error(JSON.stringify(error, null, 2))
    });
    }
  }
}
</script>
