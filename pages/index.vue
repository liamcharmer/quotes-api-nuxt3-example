<template>
  <div class="landing" v-bind:class="{ searched: quotes.length > 0 }">
    <h1>Quotes</h1>
    <h2>
      Created by Liam Charmer, Viewable on
      <a
        href="https://github.com/liamcharmer/quotes-api-nuxt3-example"
        target="_blank"
        >Github
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          /></svg
      ></a>
    </h2>
    <div class="search__bar">
      <form @submit.prevent="manyQuotes(textInput)">
        <input type="text" v-model="textInput" placeholder="Search Author" />
        <button type="submit">Search</button>
      </form>
      <button @click="randomQuote">Random Quote</button>
    </div>
    <code>{{ apiurl }}</code>
    <p v-if="quotes.length > 0">
      Showing {{ quotes.length }} out of {{ total }} quotes
    </p>
    <template v-if="quotes.length > 0 && total !== 0">
      <blockquote v-for="(quote, index) in quotes" v-bind:key="index">
        <p>{{ quote.quote }}</p>
        <cite>{{ quote.author }}</cite>
      </blockquote>
    </template>
    <p v-else-if="total !== 0">There were no quotes found</p>
  </div>
</template>
<script setup>
let { quotes, apiurl, randomQuote, manyQuotes, total } = await quotesData();
</script>
<script>
export default {
  methods: {},
  data: function () {
    return {
      textInput: "",
      randomQuote: this.quote,
    };
  },
};
</script>

<style>
.landing {
  max-width: 1100px;
  margin: 0 auto;
}
body {
  margin: 0px;
  background: #00dc81;
}
.landing.searched {
  align-items: flex-start;
  justify-content: flex-start;
}
.landing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #013543;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
}

.search__bar {
  display: flex;
  padding: 5px;
  background: #fff;
  border-radius: 50px;
  min-width: 60vw;
  box-sizing: border-box;
}

.search__bar input {
  border: 0px;
  padding: 5px 25px;
  outline: none;
  flex-grow: 1;
  background: none;
}

.search__bar button {
  background: #013543;
  color: #fff;
  border: 0px;
  border-radius: 25px;
  padding: 15px 25px;
  display: inline-block;
  margin-left: 5px;
  font-weight: 600;
  cursor: pointer;
}

.search__bar form button {
  background: #00dc80;
  color: #013542;
}

.search__bar form {
  flex-grow: 1;
  display: flex;
}

h1 {
}

blockquote {
  background: #013542;
  color: #fff;
  padding: 15px 25px;
  border-radius: 50px;
  align-self: flex-end;
  margin: 0 0 25px;
  display: flex;
  flex-direction: column;
}

blockquote cite {
  align-self: flex-end;
}

blockquote p {
  font-weight: 700;
}
code {
  background: #7fedc0;
  border-radius: 5px;
  min-width: 60vw;
  text-align: center;
  padding: 15px;
  box-sizing: border-box;
  margin: 50px 0;
  overflow: hidden;
  font-weight: 700;
  position: relative;
}

code:after {
  content: "GET";
  position: absolute;
  bottom: 0;
  right: 0;
  background: #013542;
  display: block;
  color: #fff;
  padding: 0 5px;
}
h2 {
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 svg {
  margin-left: 5px;
}

h2 svg path {
  fill: #013542;
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  text-decoration: underline;
  color: inherit;
}
@media (max-width: 650px) {
  .search__bar,
  .search__bar form {
    flex-direction: column;
  }
  h2 {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  code {
    width: 100%;
  }
  .search__bar {
    padding: 25px;
    border-radius: 15px;
    width: 100%;
  }
  .search__bar button {
    margin: 0;
    margin-top: 15px;
  }
}
@media (max-width: 450px) {
  .landing {
    padding: 0 25px;
  }
}
</style>