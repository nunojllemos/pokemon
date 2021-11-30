export const formatId = (id: number) => {
	let formattedID: string = id.toString()
	const lessThanTen: string = '00'
	const lessThanTHundred: string = '0'

	if (formattedID.length < 2) {
		// less than ten
		formattedID = lessThanTen + formattedID
	}

	if (formattedID.length < 3) {
		// less than hundred
		formattedID = lessThanTHundred + formattedID
	}

	return formattedID
}

export const decimetersToInches = (value: number) => {
	const conversion: number = 3.937008
	const inches: number = value * conversion

	return inches
}

export const decimetersToCentimeters = (value: number): number => {
	const centimeters: number = value * 10

	return centimeters
}

export const centimetersToFeetAndInches = (value: number): string => {
	const feetConversion: number = 0.0328084
	const conversion: number = value * feetConversion

	const feet: number = Math.floor(conversion)
	const inches: number = Math.ceil((conversion - feet) * 12)

	let formattedInches: string = ''

	inches.toString().length < 2
		? (formattedInches = `0${inches}`)
		: (formattedInches = inches.toString())

	const formattedString: string = `${feet}' ${formattedInches}''`

	return formattedString
}

export const hectogramsToKilograms = (value: number) => {
	const valueToKilo = value / 10
	return valueToKilo
}
