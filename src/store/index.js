import Vue from 'vue';
import Vuex from 'vuex';

import { vuexfireMutations, firestoreAction } from 'vuexfire';
import 'firebase/firestore';
import db from '@/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: { ...vuexfireMutations },
  actions: {
    bindUsersRef: firestoreAction(context => context.bindFirestoreRef('users', db.collection('users').orderBy('rating', 'desc'))),
    bindDocuments: firestoreAction(({ bindFirestoreRef }, direction) => bindFirestoreRef('users', db.collection('users').orderBy('age', direction))),
  },
});