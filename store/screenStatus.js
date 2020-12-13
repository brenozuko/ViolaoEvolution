export const state = () => ({
    practiceShow: true,
    levelShow: false,
    levelState: 0,
    arrayShuffle: []

})


export const mutations = {
    setPracticeShow(state, bool) {
        state.practiceShow = bool
    },

    setLevelShow(state, bool) {
        state.levelShow = bool
    },

    setLevelState(state, info) {
        state.levelState = info
    },

    setArrayShuffle(state, array){
        state.arrayShuffle = array
    }
}