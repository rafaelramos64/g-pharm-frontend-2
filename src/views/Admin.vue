<template>
  <b-container>
    <ListMedicines />

    <MedicinesRegistration v-if="true" />
  </b-container>
</template>

<script>

import ListMedicines from "../components/ListMedicines";
import MedicinesRegistration from "../components/MedicinesRegistration";

export default {
  components: { MedicinesRegistration, ListMedicines },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
