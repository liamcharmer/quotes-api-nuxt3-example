<template>
  <div class="landing" v-bind:class="{ searched: quotes.length > 0 }">
    <h1>Quotes</h1>

    <div class="search__bar">
      <form @submit.prevent="manyQuotes(textInput)">
        <input type="text" v-model="textInput" placeholder="Search Author" />
        <button type="submit">Search</button>
      </form>
      <button @click="randomQuote">Random Quote</button>
    </div>
    <code>{{ apiurl }}</code>
    <blockquote v-for="(quote, index) in quotes" v-bind:key="index">
      <p>{{ quote.quote }}</p>
      <cite>{{ quote.author }}</cite>
    </blockquote>
  </div>
</template>
<script setup>
let { quotes, apiurl, randomQuote, manyQuotes } = await quotesData();
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
  background: #00dc81;
}
body {
  margin: 0px;
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
@media (max-width: 650px) {
  .search__bar,
  .search__bar form {
    flex-direction: column;
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
</style>