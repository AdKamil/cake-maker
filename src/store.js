import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
        name: 'TO-320-300',
        img: 'TO-320-300.jpg',
        cat: 'other',
        tastes: [1, 2, 4],
      },
      {
        name: 'TO-338-300',
        img: 'TO-338-300.jpg',
        cat: 'other',
        tastes: [1, 3, 4],
      },
      {
        name: 'TO-310-300',
        img: 'TO-310-300.jpg',
        cat: 'other',
        tastes: [1, 3, 5],
      },
      {
        name: 'TW-001-623',
        img: 'TW-001-623.jpg',
        cat: 'wedding',
        tastes: [2, 3, 5],
      },
      {
        name: 'TW-001-619',
        img: 'TW-001-619.jpg',
        cat: 'wedding',
        tastes: [2, 3, 4, 5],
      },
      {
        name: 'TW-001-620',
        img: 'TW-001-620.jpg',
        cat: 'wedding',
        tastes: [2, 3, 4, 6],
      },
    ],
    tastes: [

    ],
  },
  getters: {
    occasions: state => state.occasions,
    cakes: state => state.cakes,
  },
  mutations: {
    chooseOccasion(state, payload) {
      this.state.chosenOccasion = payload;
    },
  },
  actions: {},
});
