import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import { UnixTime } from '../types/UnitTime'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

export const timeConvert = (time: UnixTime) => {
	const date = new Date(time * 1000)
	return timeAgo.format(date)
}
