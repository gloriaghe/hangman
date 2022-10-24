//shared state
import { reactive } from 'vue';

export const resetSharedState = reactive({
  reset: true,
  resetFalse (){
    this.reset = false;
  },
  resetTrue (){
    this.reset = true;
  }
})