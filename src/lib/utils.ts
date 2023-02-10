const showPrecision = (x: number, sigfigs: number) =>
	// convert back to number for weird formatting reason
	`${Number(x.toPrecision(sigfigs))}`;

// Eg 1234567.89 => 1.23M; 5678 => 5.68K
export function formatLargeNumber(num: number, sigfigs = 3): string {
	const absNum = Math.abs(num);
	if (num == -1) return 'unknown';
	if (absNum < 1) return showPrecision(num, sigfigs);

	if (absNum < 100) return showPrecision(num, 2);
	if (absNum < 1000) return showPrecision(num, 3);
	if (absNum < 10000) return showPrecision(num, 4);

	const suffix = ['', 'K', 'M', 'B', 'T', 'Q'];
	const i = Math.floor(Math.log10(absNum) / 3);

	const numStr = showPrecision(num / Math.pow(10, 3 * i), sigfigs);
	return `${numStr}${suffix[i] ?? ''}`;
}

export function formatDate(date: string) {
	return date.replaceAll('-', '/');
}

export function urlify(text: string) {
	var urlRegex = new RegExp(
		/(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi
	);
	return text.replace(urlRegex, function (url) {
		return '<a class="hover:underline text-violet-500" href="' + url + '">' + ' [link]' + '</a> ';
	});
}

export function checkFilter(donation_causes: string[], causes_in_view: string[]) {
	if (causes_in_view.length == 0) {
		return true;
	}
	if (donation_causes) {
		for (let i = 0; i < causes_in_view.length; i++) {
			if (donation_causes.includes(causes_in_view[i])) {
				return true;
			}
		}
	}
	return false;
}

export function arrayToString(array: string[]) {
	let string = '';
	for (let i = 0; i < array.length; i++) {
		string += array[i];
		if (i < array.length - 1) {
			string += ' ';
		}
	}
	return string;
}

export const dateRegex = new RegExp('^d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$');
