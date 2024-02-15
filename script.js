let listToDo = [];

feather.replace();

if(listToDo.length > 0){
    showToDo()
}

function add(e) {
	const add = document.getElementById("add");
	const toDoInput = document.getElementById("toDoInput");
	listToDo.push(toDoInput.value);
	toDoInput.value = "";

	showToDo();
}

function showToDo() {
	clear();
	for (let i = 0; i < listToDo.length; i++) {
		const list = document.getElementById("list");

		const todo = document.createElement("div");
		todo.innerHTML = `
        <input type="checkbox" name="ceklis" id="ceklis" />
        <div class="do">${listToDo[i]}</div>
        <div class="x"><i data-feather="x" class="feather"></i></div>
        `;
		list.appendChild(todo);
		todo.classList.add("todo");
		feather.replace();
	}
}

function clear() {
	const list = document.getElementById("list");

	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
}
