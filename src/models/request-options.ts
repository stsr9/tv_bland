type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch'

export type QueryParams = {
	[key: string]: string | number | boolean | undefined | null
}

export interface RequestOptions {
	headers?: {
		[key: string]: string
	}
	queryParams?: QueryParams
}

export interface ExtendedRequestOptions<T> extends RequestOptions {
	method: HttpMethod
	url: string
	body?: T
}
