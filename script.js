const form = document.getElementById('personality-test');
const resultDiv = document.getElementById('result');
let massa_cont=0;
let pato_cont=0;
let milei_cont=0;

form.addEventListener('submit', function (event) {
	event.preventDefault();
	const q1 = document.querySelector('input[name="q1"]:checked').value;
	const q2 = document.querySelector('input[name="q2"]:checked').value;
        const q3 = document.querySelector('input[name="q3"]:checked').value;
	const q4 = document.querySelector('input[name="q4"]:checked').value;
	const q5 = document.querySelector('input[name="q5"]:checked').value;
        const q6 = document.querySelector('input[name="q6"]:checked').value;
	const q7 = document.querySelector('input[name="q7"]:checked').value;
	const q8 = document.querySelector('input[name="q8"]:checked').value;
        const q9 = document.querySelector('input[name="q9"]:checked').value;
	const q10 = document.querySelector('input[name="q10"]:checked').value;
	const q11 = document.querySelector('input[name="q11"]:checked').value;
        const q12 = document.querySelector('input[name="q12"]:checked').value;
	const q13 = document.querySelector('input[name="q13"]:checked').value;
	const q14 = document.querySelector('input[name="q14"]:checked').value;
        const q15 = document.querySelector('input[name="q15"]:checked').value;
        const q16 = document.querySelector('input[name="q16"]:checked').value;
        const q17 = document.querySelector('input[name="q17"]:checked').value;
	// Add more variables to capture additional questions as needed

	// Calculate the personality type based on the user's answers
	// Replace this code with your own logic to calculate the personality type
	let result;

	if (q1 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q1 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q1 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q2 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q2 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q2 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q3 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q3 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q3 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q4 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q4 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q4 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q5 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q5 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q5 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q6 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q6 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q6 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q7 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q7 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q7 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q8 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q8 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q8 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q9 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q9 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q9 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q10 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q10 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q10 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q11 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q11 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q11 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q12 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q12 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q12 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q13 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q13 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q13 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q14 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q14 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q14 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q15 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q15 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q15 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q16 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q16 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q16 === 'milei') {
		milei_cont=milei_cont + 1;
	}

	if (q17 === 'massa') {
		massa_cont=massa_cont + 1;
	} else if (q17 === 'pato') {
		pato_cont=pato_cont + 1;
	} else if (q17 === 'milei') {
		milei_cont=milei_cont + 1;
	}
		
	const m = massa_cont;
	const p = pato_cont
	const j = milei_cont;

	const url = `result.html?m=${m}&p=${p}&j=${j}`;
    
	window.location.href = url;
});
