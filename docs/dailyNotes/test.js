// const statusList = {
//     3: '待认领',
//     4: '处理中',
//     5: '可入驻',
//     6: '待处理',
//     7: '入驻中',
//     8: '已开店'
// }

// // console.log(Object.values(statusList));

// const list = Object.keys(statusList).map((item) => {
//     return { 
//         label: statusList[item],
//         value: Number(item)
//     }
// })

// console.log(list.unshift({
//     label: '全部',
//     value: null
// }))

// console.log(list)

// const stamp1 = new Date(+new Date(new Date().toLocaleDateString()) + 24 * 60 * 60 * 1000 - 1); //获取当天零点的时间

// console.log(stamp1)

let arr1 = [{
    "jdFlag": 1,
    "isJdBrand": 0,
    "shopCate2DealAmt": "0",
    "amGoodQualityRate": "0"
}]

let arr2 = [{}]

// console.log(Object.values(obj));
// console.log((Object.values(obj).every((item) => item === 0 || item === '0') ));

function rmInvalidOfArray (arr) {
    const res = arr.filter((item) => {
      return Object.values(item).length > 0 && !(Object.values(item).every((currentValue) => currentValue === 0 || currentValue === '0'))
    })
    return res
}

console.log(rmInvalidOfArray(arr1),rmInvalidOfArray(arr2));