export default function({ store, redirect }) {
  if (!store.getters.isLoggedIn) {
    return redirect('/security/authorization')
  }
}
