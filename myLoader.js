module.exports = function myLoader(item) {
    console.log('hello myLoader!!');
    // item의 대상은 js (app.js 와 plus.js)
    return item.replace('console.log(', 'alert(');
    // replace 문자열 메소드 -> 콘솔로그를 alert로 바꾼다.
};
