<template>
  <div class="people-list">
    <Title message="Star Wars characters:" />
    <ul class="people-list__people">
      <Person v-for="person in people" :key="person.id" :person="person" extra-class="people-list__person" />
    </ul>
    <Pagination v-if="hasPeople" :page="page" :page-size="pageSize" :length="peopleLength" @change="setPage" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Title from '@/js/components/Title';
import Person from '@/js/components/Person';
import Pagination from '@/js/components/Pagination';
import { DEFAULT_ITEMS_PER_PAGE } from '@/js/constants';

export default {
  name: 'People',
  components: {
    Title, Person, Pagination
  },
  data () {
    return {
      page: 1,
      pageSize: DEFAULT_ITEMS_PER_PAGE
    };
  },
  computed: {
    ...mapGetters(['peopleLength', 'hasPeople', 'getPeopleByPage']),
    people: function () {
      return this.hasPeople ? this.getPeopleByPage(this.page, this.pageSize) : [];
    }
  },
  methods: {
    setPage (page) {
      this.page = page;
    }
  }
};
</script>

<style lang="scss">
.people-list {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: $main-font-color;
  text-shadow: 1px 1px 1px $black;
}
</style>
