import React from 'react'
import './meta-data-list.scss'

type Props = {
	icon?: string
	wrapRows?: boolean
	children: React.ReactNode[]
}

export const MetaDataList = ({ icon, children, wrapRows }: Props) => {
	return (
		children && (
			<div
				className={`data-row flex-column ${wrapRows ? 'wrap-row' : ''} ${
					icon ? 'icon-view' : ''
				}`}
			>
				{children.map((child: React.ReactNode, index: number) => {
					return icon ? (
						<div key={index} className="with-icon flex">
							<i className={`fa fa-${icon}`} />
							{child}
						</div>
					) : (
						child
					)
				})}
			</div>
		)
	)
}
