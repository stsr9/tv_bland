import { Show } from './show'

export interface Schedule {
	id: number
	url: string
	name: string
	season: number
	number: number
	type: string
	airdate: string
	airtime: string
	airstamp: string
	runtime: number
	image: string | null
	summary: string | null
	show: Show
	_links: {
		self: {
			href: string
		}
	}
}
