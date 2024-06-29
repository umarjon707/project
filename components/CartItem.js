function CartItem(item) {
    const main_div = document.createElement('div')
    const left = document.createElement('div')
    const right = document.createElement('div')
    const img = document.createElement('img')
    const col = document.createElement('div')
    const title = document.createElement('span')
    const counter = document.createElement('div')
    const plus = document.createElement('button')
    const minus = document.createElement('button')
    const amount = document.createElement('input')
    const price = document.createElement('span')
    const remove_btn = document.createElement('button')

    // class
    main_div.classList.add('item')
    left.classList.add('left')
    right.classList.add('right')
    col.classList.add('col')
    counter.classList.add('counter')
    // text
    plus.innerHTML = "+"
    minus.innerHTML = "-"
    remove_btn.innerHTML = "remove"
    title.innerHTML = item.title
    price.innerHTML = item.price

    // attr
    img.src = item.image
    img.alt = item.title
    amount.type = "number"
    amount.value = 1

    main_div.append(left, right)
    left.append(img, col)
    col.append(title, counter)
    counter.append(minus, amount, plus)
    right.append(price, remove_btn)



amount.oninput =(e) =>{
const val = e.target.value
if(val > item.rating.count || val < 1) {
    amount.value=1
}
}

plus.onclick =()=>{
    if(quantity < item.rating.count) {
        quantity++
        amount.value=quantity
    }
    alert('no left')
}




    return main_div
}