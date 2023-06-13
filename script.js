var searchBtn = document.querySelector('#search-btn')
var form = document.querySelector('#form-container')
var bars = document.querySelector('#bars')
var navBar = document.querySelector('#navbar')

searchBtn.onclick = () => {
    form.classList.toggle('active')
    navBar.classList.remove('active')
    credentails.classList.remove('active')
};
bars.onclick = () => {
    navBar.classList.toggle('active')
    form.classList.remove('active')
    credentails.classList.remove('active')
}


var searchInput = document.querySelector('#search-input')
var searchContainer = document.querySelector('#search-container')

searchInput.addEventListener('focusin', focuson)
searchInput.addEventListener('focusout', focusoff)

function focuson() {
    searchContainer.style.display = 'block'
}
function focusoff() {
    searchContainer.style.display = 'none'
}

searchInput.addEventListener('input', searchFilter)

function searchFilter() {
    let filter = searchInput.value;
    let listItem = document.querySelectorAll('.list');

    listItem.forEach((item) => {
        let text = item.textContent
        if (text.toUpperCase().includes(filter.toUpperCase())) {
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    })
}

// register script starts....//

var credentails = document.querySelector('#credentails')
var userBtn = document.querySelector('#user')

userBtn.onclick = () => {
    credentails.classList.toggle('active')
    form.classList.remove('active')
    navBar.classList.remove('active')
}
