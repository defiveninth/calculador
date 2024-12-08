const currentOperationScreen = document.getElementById('currentOperationScreen')
const lastOperationScreen = document.getElementById('lastOperationScreen')
const numberButtons = document.querySelectorAll('[data-number]')
const clearButton = document.getElementById('clearBtn')
const pointButton = document.getElementById('pointBtn')
const celsiusButton = document.getElementById('celsiusBtn')
const fahrenheitButton = document.getElementById('fahrenheitBtn')

let currentInput = '0'
let currentUnit = 'C'

function updateDisplay() {
	currentOperationScreen.textContent = `${currentInput}°${currentUnit}`
}

function convertTemperature() {
	const value = parseFloat(currentInput)
	if (currentUnit === 'C') {
		const fahrenheit = (value * 9 / 5) + 32
		lastOperationScreen.textContent = `${value}°C = ${fahrenheit.toFixed(2)}°F`
	} else {
		const celsius = (value - 32) * 5 / 9
		lastOperationScreen.textContent = `${value}°F = ${celsius.toFixed(2)}°C`
	}
}

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		if (currentInput === '0') {
			currentInput = button.textContent
		} else {
			currentInput += button.textContent
		}
		updateDisplay()
		convertTemperature()
	})
})

clearButton.addEventListener('click', () => {
	currentInput = '0'
	updateDisplay()
	lastOperationScreen.textContent = ''
})

pointButton.addEventListener('click', () => {
	if (!currentInput.includes('.')) {
		currentInput += '.'
		updateDisplay()
	}
})

celsiusButton.addEventListener('click', () => {
	if (currentUnit !== 'C') {
		const fahrenheit = parseFloat(currentInput)
		const celsius = (fahrenheit - 32) * 5 / 9
		currentInput = celsius.toFixed(2)
		currentUnit = 'C'
		updateDisplay()
		convertTemperature()
		celsiusButton.classList.remove('bg-gray-600', 'hover:bg-gray-700')
		celsiusButton.classList.add('bg-blue-500', 'hover:bg-blue-600')
		fahrenheitButton.classList.remove('bg-blue-500', 'hover:bg-blue-600')
		fahrenheitButton.classList.add('bg-gray-600', 'hover:bg-gray-700')
	}
})

fahrenheitButton.addEventListener('click', () => {
	if (currentUnit !== 'F') {
		const celsius = parseFloat(currentInput)
		const fahrenheit = (celsius * 9 / 5) + 32
		currentInput = fahrenheit.toFixed(2)
		currentUnit = 'F'
		updateDisplay()
		convertTemperature()
		fahrenheitButton.classList.remove('bg-gray-600', 'hover:bg-gray-700')
		fahrenheitButton.classList.add('bg-blue-500', 'hover:bg-blue-600')
		celsiusButton.classList.remove('bg-blue-500', 'hover:bg-blue-600')
		celsiusButton.classList.add('bg-gray-600', 'hover:bg-gray-700')
	}
})

updateDisplay()