import {Task, SetModel} from './index.js';

const sets = document.querySelector('#sets');

export const create = {	
    setMain(id){
        const theSet = document.createElement('div');
        const setTitle = document.createElement('div');
        const title = document.createElement('h1');	
        const setControl = document.createElement('div');
        const controlBtn = document.createElement('button');
        const setList = document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute('id', 'reminder-input');
        theSet.setAttribute('class', 'set');
        theSet.setAttribute('id', id);
        title.setAttribute('contenteditable', true)
        setTitle.setAttribute('class', 'set-title');
        title.textContent = 'Name this reminder';
        setControl.setAttribute('class', 'control');
        controlBtn.setAttribute('id', 'create-reminder-btn');
        controlBtn.textContent = 'Add new';
        setList.setAttribute('class', 'list');
        setTitle.appendChild(title);
        setControl.appendChild(controlBtn);
        setControl.appendChild(input);
        sets.appendChild(theSet);
        theSet.appendChild(setTitle);
        theSet.appendChild(setControl);
        theSet.appendChild(setList);
        const theTask = document.createElement('div');
        theTask.setAttribute('class', 'a-reminder');
        theTask.textContent = 'default'
        setList.appendChild(theTask);
    },
    
    setTask(task, theSetList){
        const theTask = document.createElement('div');
        theTask.setAttribute('class', 'a-reminder');
        theTask.textContent = task;
        theSetList.appendChild(theTask);
    },
    setList(id, list){
	    const newSet = new SetModel(id)
	    const setTitle = list.previousElementSibling.previousElementSibling.firstElementChild.textContent;
        console.log(setTitle);
        if(list.children.length){
            //iterate the list 
            Array.prototype.slice.call(list.children).forEach(i => {
                //create new set and new task
    			newSet.handleTask(new Task(setTitle, i.innerText))
		    })
        } else {
            //force remove set from localstorage if there's no more child to iterate
            localStorage.removeItem(id);
        }
    }
};

