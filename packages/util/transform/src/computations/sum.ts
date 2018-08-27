import { BehaviorSubject, Observable } from 'rxjs'
import { isValid } from './util'

/**
 * Creates an observable node based on incoming number stream
 * @param source An observable of numbers to emit the maximum value of
 */
export default function sum(source: Observable<number>) {
	const result = new BehaviorSubject(0)
	source.subscribe(
		v => isValid(v) && result.next(result.value + v),
		err => result.error(err),
		() => result.complete(),
	)
	return result
}
