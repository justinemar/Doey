//

(function(){
	const nameSetBtn = document.querySelector('#name-setting-btn');
	const nameSetModalParent = document.querySelector('.modal-parent');
	const nameSetModalMain = document.querySelector('.modal');
	const nameSetModalInput = document.querySelector('#name-setting-input');
	const mainInterface = document.querySelector('.main-interface');
	const createSetBtn = document.querySelector('#create-set-btn');
	const createTaskBtn = document.querySelector('#create-reminder-btn');
	const sets = document.querySelector('#sets');
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
			createSet: function(){
						const theSet = document.createElement('div');
						const setTitle = document.createElement('div');
						const title = document.createElement('h1');	
						const setControl = document.createElement('div');
						const controlBtn = document.createElement('button');
						const setList = document.createElement('div');
						theSet.setAttribute('class', 'set');
						title.setAttribute('contenteditable', true)
						setTitle.setAttribute('class', 'set-title');
						title.textContent = 'Name this reminder';
						setControl.setAttribute('class', 'control');
						controlBtn.setAttribute('id', 'create-reminder-btn');
						controlBtn.textContent = 'Add new';
						setList.setAttribute('class', 'list');
						
						setTitle.appendChild(title);
						setControl.appendChild(controlBtn);
						sets.appendChild(theSet);
						theSet.appendChild(setTitle);
						theSet.appendChild(setControl)
			}
		}
	})();
	MainUI.checkUser();

	function SetModel(setName){
		this.setName = setName;
		this.tasks = [];
	}
	
	SetModel.prototype.addTask = function(reminder){
		this.tasks.push(reminder);
		console.log(this.tasks)
		localStorage.setItem(this.setName, JSON.stringify(this.tasks))
		console.log(this)
		return this;
	}
	
	SetModel.prototype.nameOfSet = function(){
		console.log(this);
		
	}
	

	createSetBtn.addEventListener('click', () => {
		MainUI.createSet();
	})
	
	sets.addEventListener('click', (e) => {
		const reminderInput = document.querySelector('#reminder-input');
		const setName = e.target.parentElement.previousElementSibling.firstElementChild.textContent
		const newSet = new SetModel(setName);
		if(e.target && e.target.nodeName === 'BUTTON'){
			Array.prototype.slice.call(e.target.parentElement.nextElementSibling.children).forEach(i => {
				newSet.addTask(i.innerText);
			})
		}
	})
	
	
	
	
    nameSetBtn.addEventListener('click', () => {
			NameSetting.validate();
	})

})();