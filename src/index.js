
import './style.css';
import {create} from './create';

	// let newSet = null;
	const nameSetBtn		 = document.querySelector('#name-setting-btn');
	const nameSetModalParent = document.querySelector('.modal-parent');
	const nameSetModalMain	 = document.querySelector('.modal');
	const nameSetModalInput  = document.querySelector('#name-setting-input');
	const mainInterface      = document.querySelector('.main-interface');
	const createSetBtn		 = document.querySelector('#create-set-btn');
	const createTaskBtn 	 = document.querySelector('#create-reminder-btn');
	const sets				 = document.querySelector('#sets');
	
	
	const NameSetting = (function(){
		function animateModal(){
			nameSetModalMain.setAttribute('style', 'width:30%;opacity:0' )
			nameSetModalParent.style.opacity = '0';
			setTimeout(function(){
				nameSetModalParent.style.display = 'none';
			}, 600)
			MainUI.setUI();
		}
		return {
			validate : function(){
			const nameValue = nameSetModalInput.value;
			const nameLength = nameValue.length;
			if(nameValue === '' || nameLength < 5){
					alert("You're name should be at least 5 characters to 10 characters long");
				} else if(nameLength > 10) {
					alert("You're name must only be at least 10 characters long");
				} else {
					localStorage.setItem('username', nameValue);
					return animateModal();
				}
			}
		};
	})();

	const MainUI = (function(){
		function show() {
			const greeting = document.querySelector('#greet');
			greeting.innerText = 'Welcome!, ' + localStorage.getItem('username');
			setTimeout(function(){
				mainInterface.style.display = 'block';
			}, 800)
		}
		return {
			checkUser : function(){
				if(localStorage.getItem('username')){
					nameSetModalParent.style.display = 'none';
					this.setUI();
					console.log(this)
				} 
			},
			setUI : function(){
				const currentDate = new Date();
				const dateStringHolder = document.querySelector('#date-string');
				dateStringHolder.innerText = currentDate.toDateString();
				const dateTimeHolder = document.querySelector('#date-time');
				const tickTime = setInterval(function () {
						dateTimeHolder.innerText = new Date().toLocaleTimeString();
				}, 1000)
				
				return show();
			},
		   controlID : function(){
		   		let id = sets.children.length;
		   		let newID = id+=1;
		   		return newID
		   		
		   }, 
		   initTask : function(args){
		   		// destructure args
			   	const [ event , input , sibList] = args;
			    const setKeyName = event.target.parentElement.parentElement.id;
				const setTitle = event.target.parentElement.previousElementSibling.firstElementChild.textContent;
				// Create set elem
				create.setTask(input.value, sibList);
				// Update set list from DOM and localstorage
				create.setList(setKeyName, sibList)
		   },
		   initRemoveTask : function(args){
			   	const [ event, setElem, thisList] = args;
			   	//Remove node from the list
			   	thisList.removeChild(event.target)
				// Update set list from DOM and localstorage
			   	create.setList(setElem.id, thisList);
		   }
		}
	})();
	//Check user
	MainUI.checkUser();
	
	
	// Export models
	export function SetModel(setID){
		this.setID = setID;
		this.tasks = [];
	}
	
	export function Task(title, task){
		this.title = title;
		this.task = task;
	}
	
	// Handle task
	SetModel.prototype.handleTask = function(reminder){
		// push object to empty array tasks
		this.tasks.push(reminder);
		// create the set in localstorage 
							//Key			//Strigyfied array obj
		localStorage.setItem(this.setID, JSON.stringify(this.tasks))
		return this;
	}
	
	
	SetModel.prototype.selectedSet = function(){
		console.log(this)
	}
	
	//static method for loading the sets
	SetModel.loadSet = function(id){
		localStorage.getItem(this.setID);
		
	}
	
	createSetBtn.addEventListener('click', () => {
		const id = MainUI.controlID();
		create.setMain(id);
		
	})
	
	//Delegate event
	sets.addEventListener('click', (e) => {
		// Init adding task
		if(e.target && e.target.id === 'create-reminder-btn'){
			const reminderInput = e.target.nextElementSibling;
			const sibList = e.target.parentElement.nextElementSibling;
			const params = [ e, reminderInput, sibList ]
			MainUI.initTask(params);
		  
		} // Init removing task 
		else if(e.target && e.target.className === 'a-reminder') {
			const thisSet = e.target.parentElement.parentElement;
			const setList = e.target.parentElement;
			const params = [e, thisSet, setList]
			MainUI.initRemoveTask(params);
		}
	})
	
	
	
	
    nameSetBtn.addEventListener('click', () => {
			NameSetting.validate();
	})
