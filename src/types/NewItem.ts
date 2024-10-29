import { UnixTime } from './UnitTime'


export type TNewItem = {
	by: string
	descendants: number
	id: number
	kids: number[]
	score: number
	text?: string
	url?: string
	time: UnixTime
	title: string
	type: 'story' | 'comment' | 'poll' | 'job'
}
