'use strict';

module.exports = {
	db: 'mongodb://localhost/az-biker-events-dev',
	app: {
		title: 'AZ Biker Events - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '1522550604624535',
		clientSecret: process.env.FACEBOOK_SECRET || 'a800842909ca5b60aff2fb582f765e63',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CprT6gnW5K6nikpW4ihUWcNTz6QbW3rmZb1cPK1mK3fZTeJ18w',
		clientSecret: process.env.TWITTER_SECRET || 'CprT6gnW5K6nikpW4ihUWcNTz6QbW3rmZb1cPK1mK3fZTeJ18w',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};