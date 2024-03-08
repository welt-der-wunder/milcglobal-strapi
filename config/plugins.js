module.exports = ({ env }) => ({
	upload: {
		config: {
		  provider: "strapi-provider-upload-bunnynet",
		  providerOptions: {
			api_key: process.env.BUNNY_API_KEY,
			storage_zone: process.env.BUNNY_STORAGE_ZONE,
			pull_zone: process.env.BUNNY_PULL_ZONE,
		  },
		},
	},	
	email: {
		config: {
		  provider: 'amazon-ses',
		  providerOptions: {
			key: env('AWS_SES_KEY'),
			secret: env('AWS_SES_SECRET'),
			amazon: 'https://email.us-east-1.amazonaws.com',
		  },
		  settings: {
			defaultFrom: 'myemail@protonmail.com',
			defaultReplyTo: 'myemail@protonmail.com',
		  },
		},
	},
});
