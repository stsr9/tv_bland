import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Home } from 'views/home/home'
import { EpisodeDetails } from 'views/episode-details/episode-details'

export const ROUTES = [
	{
		path: '/',
		key: 'root',
		exact: true,
		component: () => <Redirect to={'/episodes'} />
	},
	{
		path: '/episodes',
		key: 'dashboard',
		exact: true,
		component: () => <Home />
	},
	{
		path: '/episodes/:id',
		key: 'episodeId',
		exact: true,
		component: ({ match }) => <EpisodeDetails episodeId={match.params.id} />
	}
]

export const RenderRoutes = ({ routes, ...props }) => (
	<Switch>
		{routes.map((route) => (
			<Route
				key={route.key}
				path={route.path}
				exact={route.exact}
				render={(renderProps) => <route.component {...renderProps} {...props} />}
			/>
		))}
		<Route component={() => <Redirect to={'/episodes'} />} />
	</Switch>
)
