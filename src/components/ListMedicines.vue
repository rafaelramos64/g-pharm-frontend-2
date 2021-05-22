<template>
  <b-container>
    <b-row>
      <b-col>
        <b-table
          striped
          hover
          :items="items"
          :fields="fields"
        >
          <template #cell(action)="data">

            <b-button @click="gotToEditById(data.item.id)">aaaa</b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: "name",
          sortable: true,
        },
        {
          key: "price",
          sortable: false,
        },
        {
          key: "purchase_date",
          label: "Data de compra",
          sortable: true,
        },
        {
          key: "due_date",
          sortable: true,
        },
        {
          key: "stock",
          sortable: true,
        },
        {
          key: "action",
          sortable: true,
          variant: "danger",
        },
      ],
      items: [
        {
          "id": 3,
          "name": "Teste1",
          "price": 12,
          "purchase_date": "2021-01-01T00:00:00.000Z",
          "due_date": "2030-01-01T00:00:00.000Z",
          "stock": 5,
          "pharmacy_id": 6,
          "updatedAt": "2021-05-22T03:26:01.544Z",
          "createdAt": "2021-05-22T03:26:01.544Z"
        }
      ],
    };
  },

  methods: {
    gotToEditById(id){
      this.$router.push({name:'MedicinesRegistrationEdit', params:{id}})
    }
  },
};
</script>

<style scoped></style>
