export default{
    //修改底部导航栏是否显示
    updateAppBottomShow(state,appBottomShow){
        state.appBottomShow = appBottomShow;
    },
    state_performAnimation_True(state) {
        state.performAnimation = true;
    },
    state_performAnimation_False(state) {
        state.performAnimation = false;
    },
    state_In(state) {
        state.direction = true;
    },
    state_Out(state) {
        state.direction = false;
    }
}