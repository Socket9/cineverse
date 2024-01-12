export const classNames = (...args) => {
	const res =  args.filter(Boolean).join(' ');
	return res;
}