export default function({ store, redirect, route }) {
  if (!store.getters.isLoggedIn) {
    return redirect('/security/authorization')
  }
}
