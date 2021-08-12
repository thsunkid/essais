<template>
  <b-container class="bv-example-row">
    <!-- <SpinnerAnimation v-if="loading" /> -->

    <!-- <div v-else> -->
    <div>
      <b-img :src="require('../assets/logo.png')" alt="Logo Essais" height="130"> </b-img>

      <language-selector @onLangSelect="updateNativeLang"></language-selector>
      <!-- <LanguageSelector /> -->
      <MetaData />

      <b-row class="align-items-center no-gutters">
        <b-col class="mt-3" lg="5" md="5" sm="12">
          <b-form-textarea
            class="textarea w-100"
            data-cy="source-text-translation-form"
            type="text"
            rows="9"
            v-model="inputValue"
            :placeholder="placeholder"
            @keyup="translate"
            maxlength="400"
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

        <div class="col-sm-2 mb-4" onclick="void(0);">
          <b-button variant="success" @click="translate" style="font-size:20px;">👉</b-button>
        </div>

        <b-col
          class=" mt-3" lg="5" md="5" sm="12"
          style="padding-bottom: 0px; min-height: 255px;"
        >
          <div style="height: 100%;">
           <!-- <b-form-textarea
             id="translation-result"
             class="w-100 textarea-container"
             data-cy="target-text-translation-form"
             rows="9"
             style="font-family: monospace; font-size: 15px; background-color: white;"
             spellcheck="false"
             disabled
           >
           </b-form-textarea> -->
            <div
              v-if="this.inputValue"
              v-html="this.htmlTranslated"
              class="form-control"
              style="font-family: monospace; font-size: 15px;
              text-align: left; border: 1px solid #ced4da; border-radius: 0.25rem;
              padding: 0.375rem 0.75rem; height: 100%; min-height:255px;"
            ></div>
            <div
              v-else
              v-html="this.tmp"
              class="form-control"
              style="font-family: monospace; font-size: 15px;
              text-align: left; border: 1px solid #ced4da; border-radius: 0.25rem;
              padding: 0.375rem 0.75rem; height: 100%; min-height:255px;"
            ></div>
          </div>

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
// import DiffMatchPatch from "diff-match-patch";
import * as Diff from "diff";
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
  },
  data() {
    return {
      placeholder: "ฅ^•ﻌ•^ฅ Write what you think here...",
      wordTranslated: "",
      tmp:
        '<span style="color: rgb(109, 117, 125);">Here is a (maybe) better version of it. </span>',
      htmlTranslated: "",
      inputValue: "",
      counter: 0,
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
      if (
        e.key == "Enter" ||
        e.type == "click"
        // e instanceof PointerEvent ||
        // e instanceof MouseEvent
      ) {
        this.tmp = await this.callAPI(this.nativeLang, "en", this.inputValue);

        this.wordTranslated = await this.callAPI(
          "en",
          this.nativeLang,
          this.tmp
        );

        // compare diff word
        const diff = Diff.diffWords(
          this.inputValue,
          this.wordTranslated,
          false
        );
        // const dmp = new DiffMatchPatch();
        // const diff = dmp.diff_main(this.inputValue, this.wordTranslated);
        // dmp.diff_cleanupEfficiency(diff);
        const fragment = document.createElement("span");
        const fragment1 = document.createElement("span");

        if (
          this.inputValue.trim().toLowerCase() !=
          this.wordTranslated.trim().toLowerCase()
        ) {
          let createhtmlTranslated = async function(part) {
            // Create span
            const color =
              // part[0] == 1 ? "#bfeaa6" : part[0] == -1 ? "#f9efef" : "#ffffff00";
              part.added ? "#bfeaa6" : part.removed ?  "#f9efef" : "#ffffff00";
            const textdec =
              // part[0] == 1 ? "" : part[0] == -1 ? "line-through" : "";
              part.added ? "" : part.removed ?  "line-through" : "";
            const span = document.createElement("span");
            span.style.background = color;
            span.style.textDecoration = textdec;

            // Resolve space problem
            // if (idx > 0 && 
            // ((part.added && diff[idx-1].removed) || 
            // (part.removed && diff[idx-1].added))){
            //   fragment.appendChild(document.createTextNode(" "));
            //   fragment1.appendChild(document.createTextNode(" "));
            // }
            // fragment.appendChild(document.createTextNode(" "));

            // Add span
            // span.appendChild(document.createTextNode(part[1]));

            if (part.value.slice(-1) == " " && (part.added || part.removed)) {
              span.appendChild(document.createTextNode(part.value.slice(0,-1)));
              // if (!part.added) {
              //   fragment.appendChild(document.createTextNode(" "));
              // }
              // if (!part.removed) {
              //   fragment1.appendChild(document.createTextNode(" "));
              // }

              const span_clone = span.cloneNode(true);

              if (!part.added) {
                fragment.appendChild(span);
                fragment.appendChild(document.createTextNode(" "));
              }
              if (!part.removed) {
                fragment1.appendChild(span_clone);
                fragment1.appendChild(document.createTextNode(" "));
              }
            } else {
              span.appendChild(document.createTextNode(part.value));
              const span_clone = span.cloneNode(true);

              if (!part.added) {
                fragment.appendChild(span);
              }
              if (!part.removed) {
                fragment1.appendChild(span_clone);
              }
            }
            // span.appendChild(document.createTextNode(part.value));

            // fragment.appendChild(span);
          };

          diff.forEach(createhtmlTranslated);

          // Add 2 linebreak
          fragment.appendChild(document.createElement("br"));
          fragment.appendChild(document.createElement("br"));
          fragment.append(fragment1);
          fragment.innerHTML;
          this.htmlTranslated = fragment.innerHTML;
          // this.htmlTranslated = dmp.diff_prettyHtml(diff);
        } else {
          this.htmlTranslated = this.inputValue + "✔";
        }
        this.tmp =
          '<span style="color: rgb(109, 117, 125);">Here is a (maybe) better version of it. </span>';
      }
      if (e.key == "Backspace" || e.key == "Delete"){
        this.htmlTranslated = "";
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
.mb-4 .my-4 {
  margin-bottom: 3rem !important;
}
</style>
