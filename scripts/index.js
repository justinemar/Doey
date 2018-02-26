//
(function(){
	const nameSetBtn = document.querySelector('#name-setting-btn');
	const nameSetModalParent = document.querySelector('.modal-parent');
	const nameSetModalMain = document.querySelector('.modal');
	const nameSetModalInput = document.querySelector('#name-setting-input');
	const mainInterface = document.querySelector('.main-interface');
	const createSetBtn = document.querySelector('#create-set-btn');

	const NameSetting = (function(){
		function animateModal(){
			nameSetModalMain.style.width = '30%';
			nameSetModalMain.style.opacity = '0';
			nameSetModalParent.style.opacity = '0';
			delayHide = setTimeout(function(){
				nameSetModalParent.style.display = 'none';
			}, 500)
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
					console.log(this)
					return animateModal();
				}
			}
		};
	})();

	const MainUI = (function(){
		function show() {
			const greeting = document.querySelector('#greet');
			greeting.innerText = 'Welcome!, ' + localStorage.getItem('username');
			mainInterface.style.display = 'block';
		}
		return {
			checkUser : function(){
				if(localStorage.getItem('username')){
					nameSetModalParent.style.display = 'none';
					this.setUI();
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
			}
		}
	})();


	function SetModel(setName){
		this.setName = setName;
		this.tasks = [];
	}


	SetModel.prototype.nameOfSet = function(){
		console.log(this.setName);
	}
	MainUI.checkUser();

	createSetBtn.addEventListener('click', () => {
		const newset = new SetModel('Name this set');

	})

    nameSetBtn.addEventListener('click', () => {
			NameSetting.validate();
	})

})();