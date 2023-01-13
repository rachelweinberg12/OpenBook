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
