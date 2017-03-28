function addOverlay(){
  let cartStuff = {total: '', itemCount: 0, pix: []}
  for(let i = 0; i < document.getElementsByClassName('mini-cart-pricing').length; i++){
  	cartStuff.itemCount += parseInt(document.getElementsByClassName('mini-cart-pricing')[i].children[1].innerHTML)
    cartStuff.pix.push(document.getElementsByClassName('mini-cart-image')[i].children[0].children[0].src)
  }

  if(document.getElementsByClassName('order-value').length > 0){
    cartStuff.total = document.getElementsByClassName('order-value')[0].innerHTML
  }else{
    cartStuff.total = '$0'
  }

  var scrollMessageSent = false
  let div = document.createElement('div')
  let innerDiv = document.createElement('div')
  let innerWrapper = document.createElement('div')
  let innerContentAsset = document.createElement('div')
  let photoDiv = document.createElement('div')
  let innerH3 = document.createElement('h3')
  let innerP = document.createElement('p')
  let innerP2 = document.createElement('p')
  let closeButton = document.createElement('button')
  let cartButton = document.createElement('div')

  function createMainDiv(){
    document.body.appendChild(div)
    div.id = 'bxOverlay'
    div.className = 'bxStuff footer-top'
    div.style.top = '0'
    div.style.width = '100%'
    div.style.height = '100%'
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.backgroundColor = 'rgba(0,0,0,.8)'
    div.style.zIndex = '450'
    div.style.position="fixed"
    div.style.visibility = 'collapse'
  }

  function createInnerDiv(){
    div.appendChild(innerDiv)
    innerDiv.id = 'bxInner'
    innerDiv.className = 'bxStuff footer-customer-service float-right grid-container'
    innerDiv.style.backgroundColor = 'rgb(255,255,255)'
    innerDiv.style.height = '75%'
    innerDiv.style.width = '50%'
    innerDiv.style.alignSelf = 'center'
  }

  function createInnerWrapper(){
    innerDiv.appendChild(innerWrapper)
    innerWrapper.id = 'bxInnerWrapper'
    innerWrapper.className = 'bxStuff footer-block-wrapper'
  }


  function createInnerContentAsset(){
    innerWrapper.appendChild(innerContentAsset)
    innerContentAsset.id = 'bxInnerContentAsset'
    innerContentAsset.className = 'bxStuff content-asset'
  }

  function createPhotoDiv(){
    innerContentAsset.appendChild(photoDiv)
    photoDiv.id = 'bxPhotoDiv'
    photoDiv.className = 'bxStuff'
    photoDiv.style.display = 'flex'
    photoDiv.style.boxOrient = 'horizontal'
    photoDiv.style.flexDirection = 'row'
    photoDiv.style.boxPack = 'center'
    photoDiv.style.justifyContent = 'center'
    photoDiv.style.boxAlign = 'center'
    photoDiv.style.alignItems = 'center'
    let itemPix = ''
    if(cartStuff.pix.length > 0){
      for(let i = 0; i < cartStuff.pix.length; i++){
        itemPix += '<div style="box-flex: 1;flex: 1 1 1 auto;padding: 10px;margin: 10px; text-align: center;"><img src=' + cartStuff.pix[i] + ' /></div>'
      }
    }else{
      let marmotLogo = 'https://marmot.com/on/demandware.static/Sites-Marmot_US-Site/-/default/dwc08b3871/images/logo.svg'
      itemPix += '<div style="box-flex: 1;flex: 1 1 1 auto;padding: 10px;margin: 10px; text-align: center;"><img src=' + marmotLogo + ' /></div>'
    }
    photoDiv.innerHTML = itemPix
  }

  function createH3(){
    innerContentAsset.appendChild(innerH3)
    innerH3.innerHTML = '<span>Hi!</span> Thanks for visiting. Would you like to see your cart?'
  }

  function createP(){
    innerContentAsset.appendChild(innerP)
    innerP.innerText = 'Items in cart: ' + cartStuff.itemCount + '. Current cart total: ' + cartStuff.total + '.'
  }

  function createP2(){
    innerContentAsset.appendChild(innerP2)
  }

  function createCloseButton(){
    innerP2.appendChild(closeButton)
    closeButton.id = 'bxCloseButton'
    closeButton.className = 'bxStuff'
    closeButton.innerText = 'Close'
    closeButton.onclick = function(){
      div.style.visibility = 'collapse'
      setTimeout(function(){ scrollMessageSent = false; }, 5000)

    }
  }

  function createCartButton(){
    innerContentAsset.appendChild(cartButton)
    cartButton.id = 'bxCartButton'
    cartButton.className = 'bxStuff primary-button'
    cartButton.innerHTML = "<a href='https://marmot.com/cart'>Cart</a>"
  }

  createMainDiv()
  createInnerDiv()
  createInnerWrapper()
  createInnerContentAsset()
  createPhotoDiv()
  createH3()
  createP()
  createCartButton()
  createP2()
  createCloseButton()

  window.onscroll = function () {
    if (scrollMessageSent == false){
      if (document.body.scrollTop > (document.body.scrollHeight - screen.height) * .89){
        document.querySelector('div#bxOverlay.bxStuff').style.visibility = 'visible'
        scrollMessageSent = true
      }
    }
  }
}

addOverlay()
