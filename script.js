let listToDo = [];
const listToDos = JSON.parse(localStorage.getItem("todo"));

window.onload = () => {
	if (listToDos.length > 0) {
		listToDo = listToDos;
		showToDo();
	}
};

feather.replace();

function add(e) {
	const toDoInput = document.getElementById("toDoInput");
	if (toDoInput.value != "") {
		listToDo.push({ text: toDoInput.value, completed: false });
		toDoInput.value = "";
		saveToLocalstorage();
		showToDo();
	} else {
		alert("MASUKKAN TO DO");
	}
}

function saveToLocalstorage() {
	localStorage.setItem("todo", JSON.stringify(listToDo));
}

function showToDo() {
	const list = document.getElementById("list");

	list.innerHTML = "";
	const listToDos = JSON.parse(localStorage.getItem("todo"));

	listToDos.forEach((value, index) => {
		const todo = document.createElement("div");

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = value.completed;
		checkbox.addEventListener("change", () => toggle(index));

		const task = document.createElement("div");
		task.textContent = value.text;

		if (value.completed) {
			todo.classList.add("checked");
			task.style.color = "#27187e";
		}

		task.classList.add("do");

		const remove = document.createElement("div");
		remove.classList.add("x");
		remove.innerHTML = '<i data-feather="x" class="feather"></i>';
		remove.onclick = (e) => {
			deletes(index);
		};

		todo.appendChild(checkbox);
		todo.appendChild(task);
		todo.appendChild(remove);

		todo.classList.add("todo");
		list.appendChild(todo);
		feather.replace();
	});
}

function deletes(index) {
	listToDo.splice(index, 1);
	saveToLocalstorage();
	showToDo();
}

function toggle(index) {
	listToDo[index].completed = !listToDo[index].completed;
	saveToLocalstorage();
	showToDo();
}
