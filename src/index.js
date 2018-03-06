
import './style.css';
import { create } from './create';


const nameSetBtn		 = document.querySelector('#name-setting-btn');
const nameSetModalParent = document.querySelector('.modal-parent');
const nameSetModalMain	 = document.querySelector('.modal');
const nameSetModalInput = document.querySelector('#name-setting-input');
const mainInterface = document.querySelector('.main-interface');
const createSetBtn		 = document.querySelector('#create-set-btn');
const createTaskBtn 	 = document.querySelector('#create-reminder-btn');
const sets				 = document.querySelector('#sets');


const NameSetting = (function () {
	function animateModal() {
		nameSetModalMain.setAttribute('style', 'width:30%;opacity:0');
		nameSetModalParent.style.opacity = '0';
		setTimeout(() => {
			nameSetModalParent.style.display = 'none';
		}, 600);
		MainUI.setUI();
	}
	return {
		validateName() {
			const nameValue = nameSetModalInput.value;
			const nameLength = nameValue.length;
			if (nameValue === '' || nameLength < 5) {
				alert('You\'re name should be at least 5 characters to 10 characters long');
			} else if (nameLength > 10) {
				alert('You\'re name must only be at least 10 characters long');
			} else {
				localStorage.setItem('username', nameValue);
				return animateModal();
			}
		},
	};
}());

// Export models
export function SetModel(setID) {
	this.setID = setID;
	this.tasks = [];
}

export function Task(title, task) {
	this.title = title;
	this.task = task;
}

// Handle task
SetModel.prototype.handleTask = function (reminder) {
	// push object to empty array tasks
	this.tasks.push(reminder);
	// create the set in localstorage
	// Key			//Strigyfied array obj
	localStorage.setItem(this.setID, JSON.stringify(this.tasks));
	return this;
};


SetModel.prototype.selectedSet = function () {
	console.log(this);
};

// static method for loading the sets
SetModel.loadSet = function () {
	create.setRebuild()
};


const MainUI = (function () {
	function show() {
		const greeting = document.querySelector('#greet');
		greeting.innerText = `Welcome!, ${localStorage.getItem('username')}`;
		setTimeout(() => {
			mainInterface.style.display = 'block';
		}, 800);
	}
	return {
		checkUser() {
			if (localStorage.getItem('username')) {
				nameSetModalParent.style.display = 'none';
				this.setUI();
				SetModel.loadSet();
			}
		},
		setUI() {
			const currentDate = new Date();
			const dateStringHolder = document.querySelector('#date-string');
			dateStringHolder.innerText = currentDate.toDateString();
			const dateTimeHolder = document.querySelector('#date-time');
			const tickTime = setInterval(() => {
				dateTimeHolder.innerText = new Date().toLocaleTimeString();
			}, 1000);

			return show();
		},
		   controlID() {
		   		let id = sets.children.length;
		   		const newID = id += 1;
		   		return newID;
		   },
			validateInput(e) {
				const inputVal = e.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
				if(inputVal && inputVal.length > 5){
					return true;
				} else {
					return false;
				}
			},
		   initTask(args) {
		   		// destructure args
		   	const [event, input, sibList] = args;
		    const setKeyName = event.target.parentElement.parentElement.id;
			const setTitle = event.target.parentElement.previousElementSibling.firstElementChild.textContent;
			
			if(this.validateInput(input.value)){
				// Create set elem
				create.setTask(input.value, sibList);
				// Update set list from DOM and localstorage
				create.setList(setKeyName, sibList);
				input.style.border = "none";
			} else {
				input.style.border = "1px solid red";
				
			}
		   },
		   initRemoveTask(args) {
			   	const [event, setElem, thisList] = args;
			   	// Remove node from the list
			   	thisList.removeChild(event.target);
			// Update set list from DOM and localstorage
			   	create.setList(setElem.id, thisList);
		   },
	};
}());
	// Check user
MainUI.checkUser();



createSetBtn.addEventListener('click', () => {
	const id = MainUI.controlID(); // get return id
	create.setMain(id); //give approriate id
});

// Delegate event
sets.addEventListener('click', (e) => {
	// Init adding task
	if (e.target && e.target.id === 'create-reminder-btn') {
		const reminderInput = e.target.nextElementSibling;
		const sibList = e.target.parentElement.nextElementSibling;
		const params = [e, reminderInput, sibList];
		MainUI.initTask(params);
	} // Init removing task
	else if (e.target && e.target.className === 'a-reminder') {
		const thisSet = e.target.parentElement.parentElement;
		const setList = e.target.parentElement;
		const params = [e, thisSet, setList];
		MainUI.initRemoveTask(params);
	}
});


nameSetBtn.addEventListener('click', () => {
	NameSetting.validateName();
});
