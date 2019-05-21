/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    configuratorTitle: '',
    configuredCake: {
      cake: {
        cat: '',
        id: null,
        name: '',
        img: '',
        price: null,
      },
      taste: {
        id: null,
        name: '',
        img: '',
        price: null,
      },
      price: null,
      weight: null,
    },
    pricePerKilo: 40,
    occasions: [
      {
        name: 'ślub/wesele',
        img: 'wedding.jpg',
        slug: 'wedding',
      },
      {
        name: 'urodziny dziecka',
        img: 'kids.jpg',
        slug: 'kids',
      },
      {
        name: 'komunia',
        img: 'baptism.jpg',
        slug: 'baptism',
      },
      {
        name: 'chrzest święty',
        img: 'communion.jpg',
        slug: 'communion',
      },
      {
        name: 'inne okazje',
        img: 'other.jpg',
        slug: 'other',
      },
    ],
    cakes: [
      {
        id: 1,
        name: 'TO-320-300',
        img: 'TO-320-300.jpg',
        cat: 'other',
        tastes: [1, 2, 4],
        pricePerCake: 1,
      },
      {
        id: 2,
        name: 'TO-338-300',
        img: 'TO-338-300.jpg',
        cat: 'other',
        tastes: [1, 3, 4],
        pricePerCake: 1.15,
      },
      {
        id: 3,
        name: 'TO-310-300',
        img: 'TO-310-300.jpg',
        cat: 'other',
        tastes: [1, 3, 5],
        pricePerCake: 1.2,
      },
      {
        id: 4,
        name: 'TW-001-623',
        img: 'TW-001-623.jpg',
        cat: 'wedding',
        tastes: [2, 3, 5],
        pricePerCake: 1,
      },
      {
        id: 5,
        name: 'TW-001-619',
        img: 'TW-001-619.jpg',
        cat: 'wedding',
        tastes: [2, 3, 4, 5],
        pricePerCake: 1.15,
      },
      {
        id: 6,
        name: 'TW-001-620',
        img: 'TW-001-620.jpg',
        cat: 'wedding',
        tastes: [2, 3, 4, 6],
        pricePerCake: 1.2,
      },
    ],
    tastes: [
      {
        id: 1,
        name: 'Biszkopt waniliowy, bita śmietana, wiśnie, poncz',
        img: 'cream-cherries.jpg',
        pricePerTaste: 1.1,
      },
      {
        id: 2,
        name: 'Biszkopt waniliowy, bita śmietana, poncz',
        img: 'vanilla.jpg',
        pricePerTaste: 1.0,
      },
      {
        id: 3,
        name: 'Biszkopt waniliowy, bita śmietana, owoce, poncz',
        img: 'cream-fruits.jpg',
        pricePerTaste: 1.1,
      },
      {
        id: 4,
        name: 'Biszkopt czekoladowy, bita śmietana, mus porzeczkowy, poncz',
        img: 'blackcurrant.jpg',
        pricePerTaste: 1.15,
      },
      {
        id: 5,
        name: 'Biszkopt czekoladowy, bita śmietana, wiśnie, poncz',
        img: 'cherry-chocolate.jpg',
        pricePerTaste: 1.15,
      },
    ],
    locations: [
      {
        id: 1,
        title: 'Jędryka',
        address: 'Piastowska 78, Częstochowa',
        marker: [19.1035627, 50.7956766],
      },
      {
        id: 2,
        title: 'Jędryka',
        address: 'aleja Wolności 12, Częstochowa',
        marker: [19.1156691, 50.8100666],
      },
      {
        id: 3,
        title: 'Jędryka',
        address: 'Generała Stanisława Sosabowskiego 21, Częstochowa',
        marker: [19.1304955, 50.8471224],
      },
      {
        id: 4,
        title: 'Jędryka',
        address: 'Świętego Rocha 56, Częstochowa',
        marker: [19.0867299, 50.8186278],
      },
    ],
  },
  getters: {
    pricePerKilo: state => state.pricePerKilo,
    occasions: state => state.occasions,
    cakes: state => state.cakes,
    tastes: state => state.tastes,
    configuratorTitle: state => state.configuratorTitle,
    locations: state => state.locations,
    currentPrice: state => state.configuredCake.price,
  },
  mutations: {
    chooseOccasion: (state, payload) => {
      this.state.chosenOccasion = payload;
    },
    setConfigurationTitle: (state, payload) => {
      state.configuratorTitle = payload;
    },
    setPriceByWeight: (state, payload) => {
      state.configuredCake.weight = payload;
      state.configuredCake.price = state.pricePerKilo * payload;
    },
    setPriceByCake: (state, payload) => {
      state.configuredCake.cake.price = payload;
      state.configuredCake.price = state.pricePerKilo * state.configuredCake.weight * payload;
    },
    setPriceByTaste: (state, payload) => {
      state.configuredCake.price =
        state.pricePerKilo
        * state.configuredCake.weight
        * state.configuredCake.cake.price
        * payload;
    },
  },
  actions: {},
});
