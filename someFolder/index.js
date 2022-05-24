var foo1 = 1
;(function () {
  if (foo) {
    console.log(this)
  } else {
    console.log('no')
  }
})()

var foo = 1

;(function () {
  if (foo) {
    var foo = 2
  }
  console.log(foo)
})()
