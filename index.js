//
// SWITCH BETWEEN 24 AND 12 HOURS MADE EASY .. 
//
//
// TODO: 
//  - Think of the version that supports all versions of Node.js and a version with EcmaScript features ..
//  - Check the input for validate this pattern: xx:xx (x: number)
//  - Write Logic for 24 hours to 12 hours .. 
//  - Write Logic for 12 hours to 24 hours ..
//


module.exports = (time) => {
  
	let hours, minutes, suffix;

  hours = +time.slice(0, 2), // time.indexOf(':')
  minutes = time.slice(-2), // -hours.toString().length
  suffix = hours >= 12 ? 'PM' : 'AM';
  
  hours =	hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
  
  
  return `${hours}:${minutes} ${suffix}`;
};
