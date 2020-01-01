import '../../style/main/rechargeBox.less'   //支付样式

import FN from "../common/fn"
// window.SDKAPI.__rechargeBox__ = function(data) {

export default function(data) {
  let div = document.createElement('div')
  div.innerHTML = `
  <div id="recharge-box">
    <div id="recharge-box-3k">
      <a href="javascript:;" class="close" id="recharge-close"></a>
      <h3>确认支付方式</h3>
      <p class="name">金额</p>
      <p class="num">￥<span>${data.amount}</span></p>
      <div class="list">
        <a href="${data.alipay}" onclick="FN.App_alipay('http:${data.alipay}')">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAMAAAAPkIrYAAACXlBMVEUAAAAHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPgHoPhTfSWHAAAAyXRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0gISIjJCUmJygpKissLS8wMTIzNDU2ODk7PT5AQUJDRUZHSUpOT1BRVFZXWltcXWBiY2RlZmdoaWtsbW5wcnN0dXh5ent9gIGCg4SFhoqMjY6QkZKWmJmam5ydnp+goaKjpaaoqaqrrK6vsLGytLW3uLm6u72+wMHExcbHyMnKy8zNztDS09TV1tfY2tvc3d7f4OLj5Obn6Onq6+zu7/Dx8vT19vf4+fr7/f59SP5mAAADhUlEQVRYw+XY+V8MYRwH8E8t1apIJBRKOkiHO0euIkQ5QkrRKUdukQ6hY22JlOiQyhEbNomKWB1qn//KDzWzU/vMM7vN/MCr70+z8zzznp1nvt+Z5xkAADAztvh93+TiozbeDaaYfrqPyImB804c5dFI5IbOb5Ra2E7kR48/AEyrI0qEzhlAIrvPZ/1odEthlwF1L7NHJDeokVLWnwXYw+zwCxZbJBm5zPY+K6wqNCpmfYVeMcuooEWmmlWSZxZXeSskjxJaUWsxrI2g/87q1JtFK3/YVj0lvkzp/PqHrQqX8THL9A6d0OKyXcrSWJ5bmQpaTVJWb41E7OUoN6O1Y28WgZwVTeRaH/hLLJdtneMvcVi2tYyzjhG5Vi1/ifWSlrGrQaspvP+oTjdItQ5wVIBE3r9M3ehsSh+30OjM0o4Jb2Y7rjWHZQ1e86Ul5LzdV9pMndP4Ew0wrMfe4gnuk1gzQgghxDCX25XGqO1UG3a9uMZWDhOSzv1UfxW3jlpQfq6xGhduO0H8mTN2PuedZ+5oyzUFV1NiwlxZrFOXqPXMFgC8c/uF+7vKTq62FbEyRJ+FxkAANilD5m3fbkfYUyhVvahVDEBVKNL84/o6iuaX9opuhQPIYtRNyxFHGnfKfHKKZhUQYmRW4fcsN9qwLYqvHhlvXQHwQHLxtJl+F+Yc0AjuGA4CjkNSVpl4Lqsjcns4az3gK0W1ODLTWBWW3U4IIVgJ+EtQnZ7SZbEi9QVBMKCWoJZyB9gUFawQ5zyxDUAzi+rgKWQTQio2iGvJAI6zxsqD73pidE9dpFhxVQJw+CBK3TMN+z4+m94dUlMtfRCAtf106XecqWOEMDF70ufRrCIA2GGgURVLQPlXY+mb429ujawBgIAGM6k+XNAtiXaqLRMt8tYJAGwjnwir8uct4QPC/gZ9DFpjHMZbRKMa3ZwfdaGsqU2vq7+bEmYn7OMlvmDtznAfZxGNAyulbQ4bmGv2/GChRV4wlhyhzyWnBk932ZosYki0o0urSiyaaHxKmMlbhHQkmL97ZsXUWjxt+XXJSzCfGNTGLVfxzuxNKdXDVs2nJq7d+988LMrLy69o7CZWhxHyv1fxr1TcVMyqQpRiVhIcehSiBtxFJy1Wx0UA02oVoXROAOCuyPfCsdm6u/wvhm99+LVhcq8syXB2hqDyHPfffd07qc++39+VHhmr5L8BvkRD9vlYHgAAAABJRU5ErkJggg=="/>
          <p>支付宝支付</p>
        </a>
        <a href="${data.wxpay}" onclick="FN.App_wxpay('http:${data.wxpay}')">
          <img src="data:image/png;base64,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"/>
          <p>微信支付</p>
        </a>
      </div>
    </div>
  </div>
  `



//   let Webview = document.createElement('div')
//   Webview.innerHTML = `
//   <div id="recharge-box">
//   <div id="recharge-box-3k">
//     <a href="javascript:;" class="close" id="recharge-close"></a>
//     <h3>确认支付方式</h3>
//     <p class="name">金额</p>
//     <p class="num">￥<span>${data.amount}</span></p>
//     <div class="list">
//       <a href="javascript:void(0);" onclick="FN.App_alipay('http://${data.alipay}')">
//         <img src="data:image/png;base64,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"/>
//         <p>支付宝支付</p>
//       </a>
//       <a href="javascript:void(0);" onclick="FN.App_wxpay('http://${data.wxpay}')">
//         <img src="data:image/png;base64,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"/>
//         <p>微信支付</p>
//       </a>
//     </div>
//   </div>
// </div>
//   `

  //判断是否安卓微端
  // if ((window.WebViewJavascriptBridge || window.BRIDGE.H5CallClient) && window.navigator.userAgent.indexOf('UCBrowser') == -1) {
  //   return Webview
  // } else{
  //   return div
  // }
  return div
}
