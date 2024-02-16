let listToDo = [];

feather.replace();

function add(e) {
	const toDoInput = document.getElementById("toDoInput");
	if (toDoInput.value != "") {
		listToDo.push(toDoInput.value);
		toDoInput.value = "";
		showToDo();
	} else {
		alert("MASUKKAN TO DO");
	}
}

function showToDo() {
	const list = document.getElementById("list");

	list.innerHTML = "";
	listToDo.forEach((value, index) => {
		const todo = document.createElement("div");

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = value.startsWith("_x_");
		checkbox.addEventListener("change", () => toggle(index));

		const task = document.createElement("div");
		task.textContent = value.startsWith("_x_") ? value.slice(3) : value;

		if (value.startsWith("_x_")) {
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
	showToDo();
}

function toggle(index) {
	listToDo[index] = listToDo[index].startsWith("_x_")
		? listToDo[index].slice(3)
		: "_x_" + listToDo[index];
	showToDo();
}
