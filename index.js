/**
 * switch between 24 and 12 hours made easy.
 * 
 * @param {string} time		input in this format 
 * 												xx:xx or xx:xx [A|P]M
 * 												with x is number.
 */
module.exports = function _12FromTo24Hours (time) {
	let hours, minutes, suffix
	const _24HourPattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
	const _12HourPattern = /((1[0-2]|0[1-9]):([0-5][0-9]) ([AaPp][Mm]))/

	if (_24HourPattern.test(time)) {
		hours = +time.slice(0, 2)
		minutes = time.slice(-2)
		suffix = hours >= 12 ? 'PM' : 'AM'

		hours =	hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours)
		return `${hours}:${minutes} ${suffix}`
	}
	
	if (_12HourPattern.test(time)) {
		hours = +time.slice(0, 2)
		minutes = time.slice(3, 5)
		suffix = time.slice(-2)

		return (
			suffix === 'AM'
				// am result
				? `${hours === 12 ? '00' : hours}:${minutes}`
				// pm result
				: `${hours + 12 === 24 ? hours : hours + 12}:${minutes}` 
		)
	}

	throw new Error(
		'please verif your input must by like this: ' +
		time.includes('M') ? 'HH:MM [A|P]M' : 'HH:MM'
	)
}
