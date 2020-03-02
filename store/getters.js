export default {
  isLoggedIn: (state) => {
    try {
      return state.authUser.id !== null
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
      return false
    }
  }
}
