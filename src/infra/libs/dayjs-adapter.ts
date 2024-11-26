import { LibraryDate } from 'application/protocols';
import dayjs from 'dayjs';

export class DayjsAdapter implements LibraryDate {
	isSameOrBefore(value: Date): boolean {
		const response =
			dayjs().isSame(value, 'date') || dayjs().isAfter(value, 'date');
		return response;
	}
}
