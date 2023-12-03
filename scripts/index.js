// //делаем запрос(request)на сервер
// fetch('https://dog.ceo/api/breeds/image/random')
// //приходят данные с сервера
// //получаем JSON
// 		.then(data => data.json())
// 		//результат из бэкенда (объект)
// 		//Трансформирует в объект 'res'
// 		.then((res) => {
// 			//проверка статуса
// 			if (res.status !== 'success') {
// 				return;
// 			}

// 			document.getElementById('imgDog').innerHTML = `
// 			<img 
// 					src = '${res.message}'
// 					width = '300'>;
// 			`;
// 		});

const INTRO_QUESTION_TEXT = '🤔 Стало скучно?';
const INTRO_ANSWER_TEXT = 'Найти, чем заняться';
const CHANGE_QUESTION_TEXT = 'Ура, теперь не скучно 🔥';
const ACTIVE_PAGE = 'active';

const boredStatusNode = document.getElementById('boredStatus');
const boredAnswerNode = document.getElementById('boredAnswer');
const boredBtnNode = document.getElementById('boredBtn');


const initApp = () => {
	boredStatusNode.innerText = INTRO_QUESTION_TEXT;
	boredAnswerNode.innerText = INTRO_ANSWER_TEXT;
}

initApp();

const changeIntroTextAndBackground = () => {
	boredStatusNode.innerText = CHANGE_QUESTION_TEXT;
	document.body.classList.add(ACTIVE_PAGE);
}

const activatePageHandler = () => {
	changeIntroTextAndBackground();
}

boredBtnNode.addEventListener('click', 
activatePageHandler
)