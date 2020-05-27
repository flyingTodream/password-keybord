### 适用于vue的移动端密码输入框插件

#### 安装

```vue
npm install password-keybord --save
```

#### 使用

```javascript
//main.js，全局注册
import passwordKeybord from 'password-keybord'
Vue.use(passwordKeybord)

//局部注册
import passwordKeybord from 'password-keybord'
components:{
    passwordKeybord
}
```

#### 属性

```javascript
//密码输入框是否显示，默认不显示
show
//交易金额，不传时不显示，无默认值
tradeAmount
//不传时不显示，默认'请输入密码'
title
//密码长度，默认为6
passLength
//是否显示遮罩，默认显示
mask
```

#### 方法

```javascript
//输入完成后触发，（输入长度为密码长度时完成）
complet
```

