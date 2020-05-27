<template>
  <div v-if="show" class="vx-password-wrap" @touchend.stop>
    <div v-if="mask" class="mask"></div>
    <div class="input-wrap" @touchend.stop>
      <div class="top-wrapper">
        <!-- 上方标题 -->
        <div class="tip-wrapper">
          <p class="text-center" style="margin:0">{{title}}</p>
        </div>
        <div class="tip-count text-center" v-if="tradeAmount">
          支付金额为
          <a href="javascript:">{{tradeAmount}}</a> 元
        </div>
        <!-- 密码框 -->
        <div class="input-list clearfix">
          <template v-for="(num,index) in passLength">
            <input type="password" readonly :key="index" :value="passwords[num-1]" />
          </template>
        </div>
      </div>
      <!-- 数字键盘 -->
      <div class="vx-wrapper">
        <div class="wrapper-column">
          <div class="keybord" @touchend.stop="inputPasswordHandler(1)">1</div>
          <div class="keybord" @touchend.stop="inputPasswordHandler(2)">2</div>
          <div class="keybord" @touchend.stop="inputPasswordHandler(3)">3</div>
        </div>
        <div class="wrapper-column">
          <div class="keybord" @touchend.stop="inputPasswordHandler(4)">4</div>
          <div class="keybord" @touchend.stop="inputPasswordHandler(5)">5</div>
          <div class="keybord" @touchend.stop="inputPasswordHandler(6)">6</div>
        </div>
        <div class="wrapper-column">
          <div class="keybord" @touchend.stop="inputPasswordHandler(7)">7</div>
          <div class="keybord" @touchend.stop="inputPasswordHandler(8)">8</div>
          <div class="keybord" @touchend.stop="inputPasswordHandler(9)">9</div>
        </div>
        <div class="wrapper-column">
          <div class="keybord" @touchend.stop style="background: #B2B8C2"></div>
          <div class="keybord" @touchend.stop="inputPasswordHandler(0)">0</div>
          <!-- 退格键 -->
          <div
            class="keybord backspace"
            @touchend.stop="passwords.pop()"
            style="background: #B2B8C2"
          >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#vx-backspace" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'password-keybord',
  data() {
    return {
      passwords: []
    }
  },
  watch: {
    show() {
      this.passwords = [...[]]
    }
  },
  methods: {
    inputPasswordHandler(num) {
      if (this.passwords.length < this.passLength) {
        this.passwords.push(num)
      }
      if (this.passwords.length === this.passLength) {
        this.$emit('complet', this.passwords.join(''))
      }
    }
  },
  props: {
    //交易金额
    tradeAmount: [String, Number],
    title: {
      type: String,
      default: '请输入密码'
    },
    passLength: {
      type: Number,
      default: 6
    },
    mask: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<!-- 密码输入组件 -->
<style  scoped>
.icon {
  width: 2rem;
  height: 2rem;
}
.mask {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
}
.vx-password-wrap {
  width: 100%;
  padding-top: env(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  user-select: none;
  color: #333;
  z-index: 1000;
  position: fixed;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
}
.input-wrap {
  animation-name: fadeInDown;
  animation-duration: 0.5s;
  z-index: 1001;
  width: 100%;
  padding-top: env(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  background: #f8f8f8;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.top-wrapper {
  padding: 0 0px 10px;
  border-bottom: 1px solid #e7e7e7;
}
.font-primary {
  font-size: 16px;
}
.title-wrapper {
  line-height: 35px;
  border-bottom: 1px solid #e7e7e7;
}
.tip-wrapper {
  text-align: center;
  font-size: 16px;
  line-height: 48px;
  border-width: thin;
  width: 100%;
  border-bottom: 1px solid #cdcdcd;
  position: relative;
  margin-bottom: 5px;
}
.tip-count {
  font-size: 14px;
  line-height: 35px;
}
.input-list {
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 0;
  height: auto;
  line-height: 0;
  margin: 0 10px;
}
.input-list input {
  padding: 0;
  font-size: 24px;
  height: 45px;
  line-height: 45px;
  appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  border: none;
  border-radius: 0;
  border-right: 1px solid #e7e7e7;
  border-width: thin;
  text-align: center;
  width: 16.55%;
}
.input-list input:last-child {
  border-right: none;
}
.vx-wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
}
.wrapper-column {
  display: flex;
  flex-direction: row;
}
.keybord {
  user-select: none;
  box-sizing: border-box;
  flex: 1;
  height: 60px;
  font-size: 20px;
  border-right: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  background: #fff;
  border-width: thin;
  display: flex;
  justify-content: center;
  align-items: center;
}
.backspace:active {
  background: #fff !important;
}
.vx-wrapper .keybord:active {
  background: #b2b8c2;
}
.vx-wrapper .keybord img {
  height: 20px;
  width: auto;
}
.vx-wrapper .keybord:nth-child(3n) {
  border-right: none;
}
/* 必需 */
.expand-transition {
  transition: all 2s ease;
  overflow: hidden;
}

/* .expand-leave 定义离开的结束状态 */
.expand-enter,
.expand-leave {
  opacity: 0;
}
a {
  text-decoration: none;
  color: #4395ff;
  font-weight: 600;
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    bottom: -100px;
  }
  to {
    opacity: 1;
    bottom: 0px;
  }
}

@-webkit-keyframes fadeInDown /* Safari 与 Chrome */ {
  from {
    opacity: 0;
    bottom: -100px;
  }
  to {
    opacity: 1;
    bottom: 0px;
  }
}
</style>
