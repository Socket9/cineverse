export const getYearFromDate = (date) => {
	if(!date) return '';
	return date.split('-')[0];
}