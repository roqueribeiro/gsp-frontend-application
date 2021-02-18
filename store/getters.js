export default {
  isLoggedIn: (state) => {
    console.log(state)
    try {
      return state.authUser.id !== null
    } catch (e) {
      return false
    }
  }
}
