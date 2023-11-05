(function startProject() {
	setTimeout(() => {
		document.querySelector(".wrapper").style.display = "none";
	}, 2700);
})()

let containers = Array.from(document.querySelector(".container").childNodes);
let content = null;
let textar = null;

let help = document.querySelector(".help_container");
let helpWindow = document.querySelector(".helpWindow");
let backHelpWin = document.querySelector(".background__helpWindow");

for (let i of containers) {
	i.addEventListener("click", function(event) {
		if (event.target.id == "container__text"){
			content = event.target.children[1];
			event.target.className = "container__text_active";

			renameKeydown(event.target, "container__text_noActive");
			settingButton(event.target, content);
		}
	});
}

/*Отслеживает способ активации setting*/
function settingButton(parent, content) {
	parent.children[0].addEventListener("click", function(event) {
		textar = document.createElement("textarea");
		textar.value = content.innerHTML;
		textar.className = "setting__text";
		parent.replaceWith(textar);

		textar.focus();
		endKeydown(textar, parent, content);
	})
}

/*Отслеживает нажатия на кнопки Enter/Escape для обмена классами*/
function renameKeydown(nameOne, nameTwo) {
	onkeydown = function(event) {
		if (event.key == "Enter" || event.key == "Escape")
		nameOne.className = nameTwo;
	}
}

/*Отслеживает активный режим редактирования texttarea*/
function endKeydown(nameA, nameB, content) {
	nameA.onkeydown = function(event) {
		event.stopPropagation();
		if (event.key == "Enter"){
			content.innerHTML = nameA.value;
			nameA.replaceWith(nameB);
		} else if (event.key == "Escape"){
			nameA.replaceWith(nameB);
		}
	}
}

/*Activet help window*/
(function helpOn(){
	help.addEventListener("click", function(){
		helpWindow.style.display = 'inline-block';
		backHelpWin.style.display = "block"
		
		onkeydown = function(event) {
			event.stopPropagation();
			if (event.key == "Enter" || event.key == "Escape"){
				helpWindow.style.display = 'none';
				backHelpWin.style.display = "none"
			}
		}
	})
})();
