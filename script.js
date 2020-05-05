const root = document.querySelector('#root');
const wrapper = document.createElement('div');
const h1 = document.createElement('h1');
const select = document.createElement('select');
const elementName = ['Sort by price', 'Sort by name', 'Sort by relevance']

h1.textContent = "Frontloops Code Challenge"
select.setAttribute('class', 'select-option');
wrapper.setAttribute('class', 'wrapper')

root.appendChild(h1)

elementName.map((btnName, i) => {
		return root
				.appendChild(wrapper)
				.appendChild(createButton(btnName, i))
				.addEventListener('click', function () {
						const btn1 = document.getElementById(`btn-1`)
						const btn2 = document.getElementById(`btn-2`)
						const btn3 = document.getElementById(`btn-3`)
						
						if (i + 1 === 1) {
								btn1.setAttribute('class', 'btn-block active')
								
								btn2.setAttribute('class','btn-block')
								btn3.setAttribute('class','btn-block')
								
								// ...rest of the logic if needed
						} else if (i + 1 === 2) {
								btn2.setAttribute('class', 'btn-block active')
								
								btn1.setAttribute('class','btn-block')
								btn3.setAttribute('class','btn-block')
								
								// ...rest of the logic if needed
						} else if (i + 1 === 3) {
								btn3.setAttribute('class', 'btn-block active')
								
								btn1.setAttribute('class','btn-block')
								btn2.setAttribute('class','btn-block')
								
								// ...rest of the logic if needed
						}
		})
})

elementName.map((option, i) => {
		return root
				.appendChild(select)
				.appendChild(createOptions(option, i))
})

function createButton(name, id) {
		let btn = document.createElement('button');
		btn.setAttribute('class', 'btn-block')
		btn.setAttribute('id', `btn-${id + 1}`)
		btn.textContent = name;
		return btn
}

function createOptions(name, id) {
		let option = document.createElement('option');
		option.textContent = name;
		option.value = name;
		option.setAttribute('id', `option_${id + 1}`)
		return option
}
