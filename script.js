const input = document.getElementById('input')
const addBtn = document.getElementById('button')
const todo = document.getElementById('todo')
const sort = document.getElementById('sort')

// function to add Note
function addNote() {
    if (input.value == '') {
        window.alert("Please enter a valid note!!")
    } else {
        const div = document.createElement("div")
        const li = document.createElement("li")
        const toggleButton = document.createElement('button');
        const span1 = document.createElement('span')
        const span2 = document.createElement('span')
        const span3 = document.createElement('span')
        const ulDiv = document.createElement('div')
        const ul = document.createElement('ul')
        const edit = document.createElement('li')
        const remove = document.createElement('li')
        const save = document.createElement('button')
        const saveDiv = document.createElement('div')

        todo.appendChild(div)
        div.appendChild(li)
        div.appendChild(toggleButton)
        toggleButton.appendChild(span1)
        toggleButton.appendChild(span2)
        toggleButton.appendChild(span3)
        saveDiv.appendChild(save)

        save.addEventListener('click', () => {
            li.contentEditable = false;
            div.removeChild(saveDiv)
            toggleButton.style.zIndex = '1'
            ul.style.zIndex = '1'
            ulDiv.removeChild(ul)
            ul.removeChild(edit)
            ul.removeChild(remove)
            ul.classList.remove('active')
            for (let i = 0; i < counter.length; i++) {
                counter[i] = li.innerHTML;
            }
        })

        remove.addEventListener('click', () => {
            todo.removeChild(div)
        })

        toggleButton.setAttribute('class', 'toggle-button')
        span1.setAttribute('class', 'bar-1 bar')
        span2.setAttribute('class', 'bar-2 bar')
        span3.setAttribute('class', 'bar-3 bar')

        toggleButton.addEventListener('click', () => {
            ul.classList.toggle('active')
            ul.style.zIndex = '1'
            toggleButton.style.zIndex = '1'
            ulDiv.appendChild(ul)
            ul.appendChild(edit)
            ul.appendChild(remove)
            div.appendChild(ulDiv)
        })

        edit.addEventListener('click', () => {
            li.contentEditable = true;
            div.appendChild(saveDiv)
            ul.style.zIndex = '-1'
            toggleButton.style.zIndex = '-1'
            toggleButton.classList.remove('active')
        })

        save.innerHTML = 'Save Changes'

        saveDiv.setAttribute('class', 'saveDiv')
        save.setAttribute('class', 'saveButton')
        div.setAttribute('class', 'noteElement')
        edit.innerHTML = 'Edit'
        remove.innerHTML = 'Remove'
        li.innerHTML = input.value
        toggleButton.addEventListener('click', () => {
            toggleButton.classList.toggle('active')
        })

        input.value = '';
    }
}

// this is used to focus everytime page reloads
input.focus()

// function to sort note
function sortNote() {
    var items = todo.childNodes;
    var itemsArr = [];
    for (var i in items) {
        if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
            itemsArr.push(items[i]);
        }
    }

    itemsArr.sort(function (a, b) {
        return a.innerHTML == b.innerHTML ? 0 : (a.innerHTML > b.innerHTML ? 1 : -1);
    });

    for (i = 0; i < itemsArr.length; i++) {
        todo.appendChild(itemsArr[i]);
    }
}

// function to clear Note
function clearNote() {
    todo.innerHTML = '' 
}