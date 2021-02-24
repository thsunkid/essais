<template>
  <b-container class="bv-example-row">
    <!-- <SpinnerAnimation v-if="loading" /> -->

    <!-- <div v-else> -->
    <div>
      <SwitcherTheme />

      <language-selector @onLangSelect="updateNativeLang"></language-selector>
      <!-- <LanguageSelector /> -->
      <MetaData />
      <b-row>
        <b-col class=" mb-3" lg="6" md="6" sm="12">
          <b-form-textarea
            class="textarea w-100"
            data-cy="source-text-translation-form"
            type="text"
            rows="9"
            v-model="inputValue"
            :placeholder="placeholder"
            @keyup="translate"
            arial-label="Original text to be correct"
            style="font-family: monospace; font-size: 15px; min-height: 255px"
          >
          </b-form-textarea>

          <div v-show="this.inputValue">
            <DeleteButton
              data-cy="delete-text-btn"
              @deleteText="deleteTextValue"
            />
          </div>

          <b-button
            id="copyBtn"
            class="textarea__buttons textarea__buttons__disabled source-text-btn bg-white p-2"
            data-cy="source-form-copy-btn"
            :disabled="!this.inputValue"
            :data-clipboard-text="this.inputValue"
            @click="showTooltipSourceText = true"
          >
            <i class="fas fa-copy"></i>
          </b-button>

          <b-tooltip
            data-cy="source-form-copy-btn-tooltip"
            triggers="click"
            :show.sync="showTooltipSourceText"
            @shown="hideTooltipLater"
            target="copyBtn"
            placement="left"
          >
            <strong>Text Copied</strong>
          </b-tooltip>
        </b-col>

        <b-col class="translated-container mb-3" lg="6" md="6" sm="12" style="padding-bottom: 40px; min-height: 255px;">
          <div v-if="this.inputValue" style="height: 100%;">
<!--            <b-form-textarea-->
<!--              id="translation-result"-->
<!--              class="w-100 textarea-container"-->
<!--              data-cy="target-text-translation-form"-->
<!--              rows="9"-->
<!--              style="font-family: monospace; font-size: 15px; background-color: white;"-->
<!--              spellcheck="false"-->
<!--              disabled-->
<!--            >-->
<!--            </b-form-textarea>-->
            <div
              v-html="this.htmlTranslated"
              style="font-family: monospace; font-size: 15px;
              text-align: left; border: 1px solid #ced4da; border-radius: 0.25rem;
              padding: 0.375rem 0.75rem; height: 100%;"
            ></div>
          </div>

<!--          <b-form-textarea-->
<!--            class="w-100"-->
<!--            rows="9"-->
<!--            placeholder="What you can fix will displayed here!"-->
<!--            aria-label="Text already corrected"-->
<!--            v-else-->
<!--            style="font-family: monospace; font-size: 15px;background-color: white;"-->
<!--            disabled-->
<!--          ></b-form-textarea>-->

          <b-button
            id="copyBtn2"
            class="textarea__buttons textarea__buttons__disabled p-2 bg-white"
            data-cy="target-form-copy-btn"
            :disabled="!this.wordTranslated"
            :data-clipboard-text="this.wordTranslated"
            @click="showTooltipTranslatedText = true"
            ><i class="fas fa-copy"></i>
          </b-button>

          <b-tooltip
            data-cy="target-form-copy-btn-tooltip"
            triggers="click"
            :show.sync="showTooltipTranslatedText"
            @shown="hideTooltipLater"
            target="copyBtn2"
            placement="left"
          >
            <strong>Text Copied</strong>
          </b-tooltip>

          <!-- <b-button
            class="textarea__buttons textarea__buttons__disabled border-0 p-2"
            data-cy="responsespeak-btn"
            @click="responseSpeak"
            :disabled="!this.wordTranslated"
            ><i class="fas fa-microphone"></i
          ></b-button> -->
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
import ClipboardJS from "clipboard";
import DeleteButton from "./DeleteButton";
import LanguageSelector from "./LanguageSelector";
import MetaData from "./MetaData";
// import SpinnerAnimation from "./SpinnerAnimation";
import SwitcherTheme from "./SwitcherTheme";
import DiffMatchPatch from "diff-match-patch";
// import * as Diff from "diff";
import "colors";
// const dmp = new DiffMatchPatch();
// const diffs = dmp.diff_main(
//   "This is the service aim to get you the best at your thoughtful writing. As it never before, now you can learn to write in English indepedently.",
//   "This is a service that is intended to help you get the most out of writing. Like never before, now you can learn to write English passionately."
// );
// dmp.diff_cleanupSemantic(diffs);
// console.log(diffs);

export default {
  name: "Translator",
  props: {
    apikey: {
      type: String,
      required: true
    }
  },
  components: {
    DeleteButton,
    LanguageSelector,
    MetaData,
    // SpinnerAnimation,
    SwitcherTheme
  },
  data() {
    return {
      placeholder: "Write down what you think ...",
      wordTranslated: "What you can fix will displayed here!",
      tmp: "",
      inputValue: "Write down what you think ...",
      languageFrom: null,
      nativeLang: "vi",
      languageTitle: null,
      loading: true,
      showTooltipSourceText: false,
      showTooltipTranslatedText: false
    };
  },
  mounted() {
    new ClipboardJS(".btn");
    this.preloaderSpinner();
  },
  computed: {
    languageTitleChange: function() {
      return this.languageTitle;
    }
  },
  methods: {
    // responseSpeak() {
    //   responsiveVoice.speak(
    //     this.wordTranslated,
    //     this.languageTitle.replace(/\s+/g, " ").trim()
    //   );
    // },
    preloaderSpinner() {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    },
    hideTooltipLater() {
      setTimeout(() => {
        this.showTooltipSourceText = false;
        this.showTooltipTranslatedText = false;
      }, 1000);
    },

    async callAPI(tgt, src, input) {
      let response = await axios.post(
        "https://translation.googleapis.com/language/translate/v2?key=" +
          this.apikey,
        { q: input, target: tgt, source: src, format: "text" }
      );
      return response.data.data.translations[0].translatedText;
    },

    async translate(e) {
      if (e.key == "Enter") {
        this.tmp = await this.callAPI(this.nativeLang, "en", this.inputValue);

        this.wordTranslated = await this.callAPI(
          "en",
          this.nativeLang,
          this.tmp
        );

        // const diff = Diff.diffWords(this.inputValue, wordTranslated, false);
        const dmp = new DiffMatchPatch();
        const diff = dmp.diff_main(this.inputValue, this.wordTranslated);
        dmp.diff_cleanupEfficiency(diff);
        const fragment = document.createElement("span");

        diff.forEach(part => {
          const color =
            part[0] == 1 ? "#bfeaa6" : part[0] == -1 ? "#f9efef" : "#ffffff00";
          const textdec =
            part[0] == 1 ? "" : part[0] == -1 ? "line-through" : "";
          const span = document.createElement("span");
          span.style.background = color;
          span.style.textDecoration = textdec;
          span.appendChild(document.createTextNode(part[1]));
          fragment.appendChild(span);
        });

        this.htmlTranslated = fragment.innerHTML;
      }
    },

    updateNativeLang(index) {
      this.languageTitle = index.text + " Female";
      this.nativeLang = index.value;
    },
    deleteTextValue() {
      this.inputValue = "";
      this.wordTranslated = "";
      this.htmlTranslated = "";
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/scss/_light-dark-theme.scss";
@import "@/styles/scss/_copy-audio-buttons.scss";
b-form-textarea:disabled {
  background-color: rgb(255, 255, 255);
}
</style>
