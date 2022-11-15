export default function expiryFormat(value) {
	const expdate = value;
	const expDateFormatter =
		expdate.replace(/\//g, '').substring(0, 2).replace(/1[3,]/g, '') +
		(expdate.length > 2 ? '/' : '') +
		expdate.replace(/\//g, '').substring(2, 6);

	return expDateFormatter;
}
