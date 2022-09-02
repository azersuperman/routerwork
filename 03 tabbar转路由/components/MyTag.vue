<template>
  <div>
    <button
      v-if="isShowBtn"
      @click="isShowBtn = false"
      type="button"
      class="btn btn-primary btn-sm"
    >
      +Tag
    </button>
    <input
      v-else
      type="text"
      v-focus
      @blur="addTag"
      v-model.trim="tag"
      @keydown.enter="addTag"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowBtn: true,
      tag: ''
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  methods: {
    addTag() {
      this.isShowBtn = true
      this.$emit('addLabel', this.tag)
      if (this.tag !== '') {
        this.tag = ''
      }
    }
  }
}
</script>

<style></style>
