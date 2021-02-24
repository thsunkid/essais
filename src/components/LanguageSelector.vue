<template>
  <div class="language" data-cy="language-selector">
    <b-row class="justify-content-center">
      <span class="mr-2 ml-4 my-4">
        <!-- <strong>Native language:</strong> -->
      </span>
      <b-col class="p-0 my-3" col lg="3" md="3" sm="10" cols="9">
        <!-- <b>Navite Language:</b>: -->
        <b-form-select
          class="language__selectors"
          v-model="optionTo"
          @input="onOptionToSelect"
          aria-label="Output text translated"
          style="margin: 0px 30px 0px 0px;width:70%;"
        >
          <option value="vi">Vietnamese (default)</option>;
          <option
            v-for="(option, index) in languageOptions"
            :key="index"
            :value="option"
            >{{ option.text }}</option
          >
        </b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import langcodes from "./../assets/langcodes.json";

export default {
  name: "LanguageSelector",
  data() {
    return {
      languageOptions: langcodes,
      optionTo: "vi",
      btnRotated: false
    };
  },
  methods: {
    onOptionToSelect() {
      this.$emit("onLangSelect", this.optionTo);
    }
  }
};
</script>

<style lang="scss" scoped>
.language {
  &__selectors {
    &:hover {
      cursor: pointer;
    }
  }
  &__interchange {
    background-color: rgb(204, 201, 201);
    border-radius: 50px;
    border: none;
    color: #000;
    cursor: pointer;
    padding: 10px 15px;
    margin-top: 16px;
    &:hover {
      background-color: rgb(128, 125, 125);
      transition: 0.4s background-color, 0.1s transform;
    }
    &.btnRotated {
      transform: rotate(180deg);
    }
  }
  @media only screen and (max-width: 765px) {
    &__interchange {
      margin-top: 0;
    }
  }
}
</style>
