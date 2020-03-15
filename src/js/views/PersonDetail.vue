<template>
  <article v-if="person" class="person-detail vue-animation">
    <BackButton extra-class="person-detail__back-button" />
    <Title :message="person.name" />
    <img :src="person.image" class="person-detail__img">
    <ul class="person-detail__attributes">
      <li class="person-detail__attribute">
        Birth year: <span class="person-detail__value">{{ person.birth_year }}</span>
      </li>
      <li class="person-detail__attribute">
        Gender: <span class="person-detail__value">{{ gender }}</span>
      </li>
      <li class="person-detail__attribute">
        Height: <span class="person-detail__value">{{ person.height }}</span> centimetres
      </li>
      <li class="person-detail__attribute">
        Mass: <span class="person-detail__value">{{ person.mass }}</span> kilograms
      </li>
      <li class="person-detail__attribute">
        Skin color: <span class="person-detail__value">{{ person.skin_color }}</span>
      </li>
    </ul>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import Title from '@/js/components/Title';
import BackButton from '@/js/components/BackButton';

export default {
  name: 'ViewPersonDetail',
  components: {
    Title, BackButton
  },
  data () {
    return {
      person: null
    };
  },
  computed: {
    ...mapGetters(['findPeopleById']),
    gender: function () {
      if (!this.person) {
        return null;
      }

      return this.person.gender === 'n/a' ? this.person.gender.toUpperCase() : this.person.gender;
    }
  },
  activated () {
    const { id } = this.$route.params;

    this.person = this.findPeopleById(id);
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params;

    this.person = this.findPeopleById(id);

    next();
  }
};
</script>

<style lang="scss">
.person-detail {
  display: block;
  position: relative;

  .person-detail__back-button {
    position: absolute;
    left: 50px;
    top: 14px;
  }

  .person-detail__img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: 340px;
    max-width: 340px;
    border-radius: 4px;
    box-shadow: 1px 1px 2px 1px $black;
    margin-bottom: 50px;
  }

  .person-detail__attribute {
    padding: 15px;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: $white;
    text-shadow: 1px 1px 1px $black;
  }

  .person-detail__value {
    color: $secondary-font-color;
  }
}
</style>
