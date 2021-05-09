// 1. Make sure to import 'vue' before declaring augmented types
import Vue from 'vue'
import firebase from 'firebase/app'


// 2. Specify a file with the types you want to augment
//    Vue has the constructor type in types/vue.d.ts
declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    $firestore: firebase.firestore.Firestore,
    $messaging: firebase.messaging.Messaging,
    $storage: firebase.storage.Storage,
    $auth: firebase.auth.Auth,
  }

  interface VueConstructor {
    $firestore: firebase.firestore.Firestore,
    $messaging: firebase.messaging.Messaging,
    $storage: firebase.storage.Storage,
    $auth: firebase.auth.Auth,
    $foo: {
      name: string
    }
  }

  interface VueConstructor {
  }
}

export interface User {
  firstName: string,
  lastName: string,
  twitterHandle: string,
  location: {
    city: string,
    state: string
  }
}