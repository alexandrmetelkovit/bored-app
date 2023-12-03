const INTRO_QUESTION_TEXT = '🤔 Getting bored?';
const INTRO_ANSWER_TEXT = 'Find something to do';
const CHANGE_QUESTION_TEXT = 'Congratulations, now you have something to do 🔥';
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

const apiGenerationText = () => {
fetch('http://www.boredapi.com/api/activity/')
.then((response) => {
	if (response.ok) {
		return response.json();
	}
})
.then((response) => {

	const inProcess = response.activity;
	boredAnswerNode.innerText = inProcess;
}
	)}

const activatePageHandler = () => {
	changeIntroTextAndBackground();
	apiGenerationText()
}

boredBtnNode.addEventListener('click', 
activatePageHandler
)