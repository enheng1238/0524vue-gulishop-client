<template>
  <div class="pay-main">
    <div class="pay-container">
      <div class="checkout-tit">
        <h4 class="tit-txt">
          <span class="success-icon"></span>
          <span class="success-info">订单提交成功，请您及时付款，以便尽快为您发货~~</span>
        </h4>
        <div class="paymark">
          <span class="fl">
            请您在提交订单
            <em class="orange time">4小时</em>之内完成支付，超时订单会自动取消。订单号：
            <em>{{$route.query.orderId}}</em>
          </span>
          <span class="fr">
            <em class="lead">应付金额：</em>
            <em class="orange money">￥{{orderInfo.totalFee}}</em>
          </span>
        </div>
      </div>
      <div class="checkout-info">
        <h4>重要说明：</h4>
        <ol>
          <li>
            尚品汇商城支付平台目前支持
            <span class="zfb">支付宝</span>支付方式。
          </li>
          <li>其它支付渠道正在调试中，敬请期待。</li>
          <li>为了保证您的购物支付流程顺利完成，请保存以下支付宝信息。</li>
        </ol>
        <h4>
          支付宝账户信息：（很重要，
          <span class="save">请保存！！！</span>）
        </h4>
        <ul>
          <li>支付帐号：11111111</li>
          <li>密码：111111</li>
          <li>支付密码：111111</li>
        </ul>
      </div>
      <div class="checkout-steps">
        <div class="step-tit">
          <h5>支付平台</h5>
        </div>
        <div class="step-cont">
          <ul class="payType">
            <li>
              <img src="./images/pay2.jpg" />
            </li>
            <li>
              <img src="./images/pay3.jpg" />
            </li>
          </ul>
        </div>
        <div class="hr"></div>

        <div class="payshipInfo">
          <div class="step-tit">
            <h5>支付网银</h5>
          </div>
          <div class="step-cont">
            <ul class="payType">
              <li>
                <img src="./images/pay10.jpg" />
              </li>
              <li>
                <img src="./images/pay11.jpg" />
              </li>
              <li>
                <img src="./images/pay12.jpg" />
              </li>
              <li>
                <img src="./images/pay13.jpg" />
              </li>
              <li>
                <img src="./images/pay14.jpg" />
              </li>
              <li>
                <img src="./images/pay15.jpg" />
              </li>
              <li>
                <img src="./images/pay16.jpg" />
              </li>
              <li>
                <img src="./images/pay17.jpg" />
              </li>
              <li>
                <img src="./images/pay18.jpg" />
              </li>
              <li>
                <img src="./images/pay19.jpg" />
              </li>
              <li>
                <img src="./images/pay20.jpg" />
              </li>
              <li>
                <img src="./images/pay21.jpg" />
              </li>
              <li>
                <img src="./images/pay22.jpg" />
              </li>
            </ul>
          </div>
        </div>
        <div class="hr"></div>

        <div class="submit">
          <!-- <router-link class="btn" to="/paysuccess">立即支付</router-link> -->
          <a href="javascript:;" class="btn" @click="pay">立即支付</a>
        </div>
        <div class="otherpay">
          <div class="step-tit">
            <h5>其他支付方式</h5>
          </div>
          <div class="step-cont">
            <span>
              <a href="weixinpay.html" target="_blank">微信支付</a>
            </span>
            <span>中国银联</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 支付流程：
 *  1.生成了二维码
 *  2.messageBox展示了二维码
 *  3.刚展示完二维码:立马就需要发送请求(这个请求要连续的去发) 隔2秒发一次,去查询支付状态是否支付完成
 *  4.后台会在发请求后返回支付状态码  支付状态码如果是205代表还在支付中,如果是200代表支付成功
 *  5.根据返回的支付状态码去决定后续操作
 *          1)如果在查询回来是200的时候，我们要自动跳转到支付成功页面
 *          2)把这个状态码还要保存在data当中,用来去作为用户点击已成功支付按钮的判断依据
 *  6.去单独处理点击我已成功支付或者支付遇到问题按钮的逻辑
 *          1)点击我已成功支付,那么要根据data当中存储的状态码判断是否真的支付完成,
 *              如果完成跳转到支付成功页面,关闭messageBox
 *              如果没有完成,停在当前页面并提示,不关闭messageBox
 * 
 *          2)点击支付遇到问题,那么我们要提示用户找谁处理,停止往后台发请求,关闭messageBox
 * 
 */
import QRCode from "qrcode";
export default {
  name: "Pay",
  data() {
    return {
      orderInfo: {},
      orderStatus:0
    };
  },
  mounted() {
    // 发送请求获取支付信息
    this.getOrderInfo();
  },
  methods: {
    async getOrderInfo() {
      // this.$API.reqPayInfo(this.$route.query.orderId)
      const result = await this.$API.reqPayInfo(this.$route.query.orderId);
      if (result.code === 200) {
        this.orderInfo = result.data;
      }
    },

    async pay() {
      // With promises
      // 1.生成二维码图片的url
      try {
        let imgUrl = await QRCode.toDataURL(this.orderInfo.codeUrl);

        // console.log(imgUrl); //img的路径
        // 2.弹出消息盒子,展示二维码
        this.$alert(
         `<img src="${imgUrl}">`,
          "请使用微信扫码支付",
          {
            dangerouslyUseHTMLString: true, //是否将 message 属性作为 HTML 片段处理
            showCancelButton: true, //是否显示取消按钮
            cancelButtonText: "支付遇到问题", //取消按钮的文本内容
            confirmButtonText: "我已成功支付", //确定按钮的文本内容
            showClose: true, //MessageBox 是否显示右上角关闭按钮
            center: true, //是否居中布局
          }
        );

        // 3.发请求连续发送去查询状态码
        // 定时器一旦设置，立马会返回这个定时器的id编号,它的任务会交给管理模块管理
        if(!this.timer){
          // 保证同时一个订单只开启一个定时器
          this.timer = setInterval(async () => {
            // 如果用await，那await上边一定是个函数 把async放到离await最近的上边的函数
            // 4.发请求 拿状态码
            // 5.如果状态码成功自动跳转到支付成功

            const result = await this.$API.reqOrderStatus(this.orderInfo.orderId)
            if(result.code === 200){
              // 把状态码保存一下 后续点击按钮判断
              this.orderStatus = 200
              // 清除循环定时器
              clearInterval(this.timer)//清除管理模块中的异步任务
              this.timer = null //保证下次还是false 否则下次定时器就开不起来了
              /**
               * clearInterval(this.timer)  循环定时器停了，编号还在
               * 如果你设置一个定时器，它返回的是一个定时器的id,也就是它的编号
               * 当你设置一个定时器的时候       定时器管理模块 
               * 定时器会把它的任务交给定时器模块管理  定时器的编号被永远存在变量里边
               * 当你clearInterval || clearTimeOut的时候 它只是从管理器模块中把定时器的异步任务给清了，但是这个变量当中的编号被永久保存
               * setTimeOut  ---- clearTimeOut
               * setInterval --- clearInterval
               * clearTimeOut clearInterval 都可以清定时器
               * 
               */
              // 关闭messagebox
                this.$msgbox.close()//关闭当前的消息盒子
              // 跳转到支付成功页面
              this.$router.push('/paysuccess')
            }

          },2000);
        }
        

      } catch (error) {
        this.$message.error("生成微信二维码失败");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.pay-main {
  margin-bottom: 20px;

  .pay-container {
    margin: 0 auto;
    width: 1200px;

    a:hover {
      color: #4cb9fc;
    }

    .orange {
      color: #e1251b;
    }

    .money {
      font-size: 18px;
    }

    .zfb {
      color: #e1251b;
      font-weight: 700;
    }

    .checkout-tit {
      padding: 10px;

      .tit-txt {
        font-size: 14px;
        line-height: 21px;

        .success-icon {
          width: 30px;
          height: 30px;
          display: inline-block;
          background: url(./images/icon.png) no-repeat 0 0;
        }

        .success-info {
          padding: 0 8px;
          line-height: 30px;
          vertical-align: top;
        }
      }

      .paymark {
        overflow: hidden;
        line-height: 26px;
        text-indent: 38px;

        .fl {
          float: left;
        }

        .fr {
          float: right;

          .lead {
            margin-bottom: 18px;
            font-size: 15px;
            font-weight: 400;
            line-height: 22.5px;
          }
        }
      }
    }

    .checkout-info {
      padding-left: 25px;
      padding-bottom: 15px;
      margin-bottom: 10px;
      border: 2px solid #e1251b;

      h4 {
        margin: 9px 0;
        font-size: 14px;
        line-height: 21px;
        color: #e1251b;
      }

      ol {
        padding-left: 25px;
        list-style-type: decimal;
        line-height: 24px;
        font-size: 14px;
      }

      ul {
        padding-left: 25px;
        list-style-type: disc;
        line-height: 24px;
        font-size: 14px;
      }
    }

    .checkout-steps {
      border: 1px solid #ddd;
      padding: 25px;

      .hr {
        height: 1px;
        background-color: #ddd;
      }

      .step-tit {
        line-height: 36px;
        margin: 15px 0;
      }

      .step-cont {
        margin: 0 10px 12px 20px;

        ul {
          font-size: 0;

          li {
            margin: 2px;
            display: inline-block;
            padding: 5px 20px;
            border: 1px solid #ddd;
            cursor: pointer;
            line-height: 18px;
          }
        }
      }
    }

    .submit {
      text-align: center;

      .btn {
        display: inline-block;
        padding: 15px 45px;
        margin: 15px 0 10px;
        font: 18px "微软雅黑";
        font-weight: 700;
        border-radius: 0;
        background-color: #e1251b;
        border: 1px solid #e1251b;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        text-decoration: none;
      }
    }
  }
}
</style>