<template>
  <footer class="pagination">
    <div class="pagination__control-button" :class="{ disabled: isFirstPage }" @click="prev">
      &lt;
    </div>
    <div v-for="actual in pagesToShow" :key="actual" class="pagination__page" :class="{ selected: actual === page }" @click="select(actual)">
      {{ actual }}
    </div>
    <div class="pagination__control-button" :class="{ disabled: isLastPage }" @click="next">
      &gt;
    </div>
  </footer>
</template>

<script>
const range = (start, end) => {
  const size = end - start + 1;

  return Array.from({ length: size }, (_, idx) => start + idx);
};

export default {
  name: 'Pagination',
  props: {
    page: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    },
    numButtons: {
      type: Number,
      default: 5 // better if even
    },
    firstPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    lastPage () {
      return Math.ceil(this.length / this.pageSize);
    },
    totalPages () {
      return this.lastPage + 1 - this.firstPage;
    },
    isFirstPage () {
      return this.page === this.firstPage;
    },
    isLastPage () {
      return this.page === this.lastPage;
    },
    pagesToShow () {
      if (this.numButtons >= this.totalPages) {
        return range(1, this.lastPage);
      }

      const pagesAtEachSide = Math.floor(this.numButtons / 2);

      let firstPage = this.page - pagesAtEachSide;
      let lastPage = this.page + pagesAtEachSide;

      const diffFirst = this.firstPage - firstPage;
      const diffLast = lastPage - this.lastPage;

      if (diffFirst > 0) {
        firstPage = this.firstPage;
        lastPage += diffFirst;
      }

      if (diffLast > 0) {
        lastPage = this.lastPage;
        firstPage -= diffLast;
      }

      return range(firstPage, lastPage);
    }
  },
  methods: {
    select (page) {
      if (page === this.page) {
        return;
      }

      this.$emit('change', page);
    },
    prev () {
      if (this.isFirstPage) {
        return;
      }

      this.$emit('change', this.page - 1);
    },
    next () {
      if (this.isLastPage) {
        return;
      }

      this.$emit('change', this.page + 1);
    }
  }
};
</script>

<style lang="scss">
@mixin pagination-button($hover-scale) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  margin: 0 8px; // small margin - no margin collapse on flex

  color: $main-font-color;
  text-shadow: 1px 1px 1px $black;

  @include unselectable();

  cursor: pointer;
  transition: color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    opacity 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    transform 0.2s ease-in-out;
  will-change: box-shadow, transform;

  &:not(.selected):not(.disabled):hover {
    color: $secondary-font-color;
    transform: scale($hover-scale);
  }
}

.pagination {
  display: flex;
  align-items: center; // y axis
  justify-content: center; // x axis
  flex-direction: row;
  flex-wrap: nowrap; // single line
  width: 100%;
  margin: 50px 0 20px 0;

  .pagination__control-button {
    font-family: $distant-galaxy-font;
    font-size: 36px;
    @include pagination-button(1.2);

    &.disabled {
      cursor: default;
      color: lighten($main-font-color, 10%);
      opacity: 0.25;
    }
  }

  .pagination__page {
    font-size: 24px;
    @include pagination-button(1.05);
    border-radius: 4px; // background is animated, so pre-set border-radius or it looks weird

    &.selected {
      cursor: default;
      background-color: $secondary-background-color;
      box-shadow: 1px 1px 1px 0px $black;
    }
  }
}

</style>
