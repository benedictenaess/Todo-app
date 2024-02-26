const validateForm = (todoInput, dateInput, titleError, dateError) => {
	let errors = {
		errorStatus: false,
		todoError: '',
		dateError: '',
	}
	if (!todoInput && !dateInput){
		let errors = {
			errorStatus: true,
			todoError: 'Title is required ⚠️',
			dateError: 'Date is required ⚠️',
		}
		titleError.style.visibility = 'visible';
		dateError.style.visibility = 'visible';
		titleError.textContent = errors.todoError;
		dateError.textContent = errors.dateError;
	} else if (!todoInput) {
		let errors = {
			errorStatus: true,
			todoError: 'Title is required ⚠️',
			dateError: '',
		}
		titleError.style.visibility = 'visible';
		dateError.style.visibility = 'hidden';
		titleError.textContent = errors.todoError;
		dateError.textContent = errors.dateError;
	} else if (!dateInput) {
		let errors = {
			errorStatus: true,
			todoError: '',
			dateError: 'Date is required ⚠️',
		}
		titleError.style.visibility = 'hidden';
		dateError.style.visibility = 'visible';
		titleError.textContent = errors.todoError;
		dateError.textContent = errors.dateError;
	} else {
		let errors = {
			errorStatus: false,
			todoError: '',
			dateError: '',
		}
		titleError.style.visibility = 'hidden';
		dateError.style.visibility = 'hidden';
		titleError.textContent = errors.todoError;
		dateError.textContent = errors.dateError;
	}
	const formErrorStatus = ()=>{
		return errors.errorStatus
	}
	return {formErrorStatus}
}