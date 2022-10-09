<template>
  <div class="AlertBg">
    <div
      :style="{
        height: alertData.alertHeight ? alertData.alertHeight / 7.5 + 'vw' : '78vw',
        width: alertData.alertWidth ? alertData.alertWidth / 7.5 + 'vw' : '78vw',
      }"
      :class="{ alertCon: true, comfirm: alertData.cancelText != '' }"
    >
      <img class="icon" :src="alertData.icon ? alertData.icon : alerIcon" alt="" />
      <div class="alertContent" v-html="alertData.alertContent"></div>
      <div :class="{ bntbox: true, comfirmBnt: alertData.cancelText !== '' }">
        <span class="sureBnt" @click="sure">{{ alertData.btnText }}</span>
        <span v-if="alertData.alertType === 'confirm'" class="cancelBnt" @click="cancel">{{
          alertData.cancelText
        }}</span>
      </div>
    </div>
  </div>
</template>
<script type="text/babel" lang="ts" setup>
import { AlertData } from './interface/Alert'
import alerIcon from '@/assets/images/alerIcon.png'
defineProps<{
  alertData:AlertData
}>()
const emit = defineEmits<{
	(e: 'sure'): void
  (e: 'cancel'): void
}>()
const sure=()=>{
  emit("sure")
}
const cancel=()=>{
  emit("cancel")
}
</script>
<style lang="scss" scoped>
.AlertBg {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);

  .alertCon {
    position: relative;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 100%;
    border: 2vw solid rgba(255, 255, 255, 0.2);
    background-clip: padding-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    img {
      display: block;
      width: 12vw;
      margin: 9vw auto 0;
    }
  }
  .alertContent {
    flex: 1;
    font-size: 3.733vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #494fb2;
    flex-wrap: wrap;
    line-height: 1.5;
  }
  .bntbox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8vw;
    .sureBnt {
      width: 33.067vw;
      height: 6.533vw;
      line-height: 6.533vw;
      text-align: center;
      color: #fff;
      font-size: 3.733vw;
      background: linear-gradient(160deg, #7c61ff 20%, #7299ff 80%);
      border-radius: 100vw;
    }
    .cancelBnt {
      position: absolute;
      left: 50%;
      bottom: -12vw;
      width: 6.8vw;
      height: 15.867vw;
      margin-left: -3.4vw;
      background: url(@/assets/images/alertClose.png) no-repeat;
      background-size: 100%;
    }
  }
}
/*弹框end*/
</style>
