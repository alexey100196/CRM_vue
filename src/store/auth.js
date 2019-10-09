import firebase from 'firebase/app'

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        console.log(e)
        throw e
      }

    },
    async register({dispatch}, {email, password, name}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name: name // можно просто name
        })
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    getUid() { // user id
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async logout() {
      await firebase.auth().signOut()
    }
  }
}
