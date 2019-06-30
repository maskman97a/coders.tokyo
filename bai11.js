/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */
var rectangle = {
    width : 3,
    height : 4
  }
  function getWidth(a){
    var width = a.width;
    return width;
  }
  console.log(getWidth(rectangle));
  
  function getHeight(a){
    var height = a.height;
    return height;
  }
  console.log(getHeight(rectangle));
  
  function getArea(a,b){
    var s = a*b;
    return s;
  }
  console.log(getArea(getWidth(rectangle), getHeight(rectangle)));