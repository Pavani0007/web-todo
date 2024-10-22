document.addEventListener('DOMContentLoaded', function() {
    const addb = document.getElementById("text");
    const plusb = document.getElementsByClassName("plus")[0];
    const checkb = document.getElementsByClassName("check")[0];
    const imgb = document.getElementsByClassName('img')[0];
    const completeAllBtn = document.querySelector('.status .ele:nth-child(1)');
    const incompleteAllBtn = document.querySelector('.status .ele:nth-child(2)');
    const deleteAllBtn = document.querySelector('.status .ele:nth-child(3)');
    const showAllBtn = document.querySelector('.status .ele:nth-child(4)');

    const plus = () => {
        const valueb = addb.value.trim();
        addb.value = '';

        if (valueb !== '') {
            if (imgb) {
                imgb.style.display = 'none'; // Hide image when a task is added
            }

            const listdiv = document.createElement('div');
            listdiv.classList.add('one');

            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = "checkbox";
            checkbox.addEventListener('change', toggleCompleteStatus); // Attach event to toggle complete status
            
            const label = document.createElement('label');
            label.textContent = valueb;
            
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa', 'fa-trash-o');
            deleteIcon.onclick = () => listdiv.remove();
            
            listdiv.appendChild(checkbox);
            listdiv.appendChild(label);
            listdiv.appendChild(deleteIcon);
            checkb.appendChild(listdiv);
            addb.value = 'Add a new task.....';
        }
    };

    addb.addEventListener("click", () => addb.value = "");

    const toggleCompleteStatus = (event) => {
        const task = event.target.parentElement;
        if (event.target.checked) {
            task.classList.add('completed');
        } else {
            task.classList.remove('completed');
        }
    };

    const showCompletedTasks = () => {
        Array.from(checkb.children).forEach(task => {
            task.style.display = task.querySelector('input[type="checkbox"]').checked ? 'flex' : 'none';
        });
    };

    const showIncompleteTasks = () => {
        Array.from(checkb.children).forEach(task => {
            task.style.display = !task.querySelector('input[type="checkbox"]').checked ? 'flex' : 'none';
        });
    };
    
    const showAllTasks = () => {
        Array.from(checkb.children).forEach(task => {
            task.style.display = 'flex';
        });
    };

    const deleteAll = () => {
        checkb.innerHTML = '';
    };

    plusb.addEventListener("click", plus);
    completeAllBtn.addEventListener('click', showCompletedTasks);
    incompleteAllBtn.addEventListener('click', showIncompleteTasks);
    deleteAllBtn.addEventListener('click', deleteAll);
    showAllBtn.addEventListener('click', showAllTasks);
});
