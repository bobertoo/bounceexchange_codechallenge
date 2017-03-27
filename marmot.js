//get item count and pictures
let cartStuff = {total: '', itemCount: 0, pix: []}
for(let i = 0; i < document.getElementsByClassName('mini-cart-pricing').length; i++){
	cartStuff.itemCount += parseInt(document.getElementsByClassName('mini-cart-pricing')[i].children[1].innerHTML)
  cartStuff.pix.push(document.getElementsByClassName('mini-cart-image')[i].children[0].children[0].src)
}

//cart total
cartStuff.total = document.getElementsByClassName('order-value')[0].innerHTML

//onscroll script

window.onscroll = function () {
                if (document.body.scrollTop > 600){
                // console.log(document.body.scrollTop)
                console.log('hi')
              }
            }

// get window width and height
window.innerHeight
window.innerWidth

// scroll info
document.body.scrollHeight
5525
document.window.scrollHeight
VM15057:1 Uncaught TypeError: Cannot read property 'scrollHeight' of undefined
    at <anonymous>:1:16
(anonymous) @ VM15057:1
document.body.offsetHeight
5525
document.window.scrollHeight
VM15092:1 Uncaught TypeError: Cannot read property 'scrollHeight' of undefined
    at <anonymous>:1:16
(anonymous) @ VM15092:1
document.body.scrollHeight
5525
document.body.offsetHeight
5525

document.documentElement.scrollHeight
5525
document.documentElement.clientHeight
681
document.documentElement.clientHeight
388
document.documentElement.clientHeight
670
document.documentElement.clientHeight
681
document.documentElement.offsetHeight
