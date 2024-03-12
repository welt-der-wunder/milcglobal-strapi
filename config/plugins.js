module.exports = ({ env }) => ({
	upload: {
		config: {
		  provider: "strapi-provider-upload-bunnynet",
		  providerOptions: {
			api_key: env('BUNNY_API_KEY'),
			storage_zone: env('BUNNY_STORAGE_ZONE'),
			pull_zone: env('BUNNY_PULL_ZONE'),
		  },
		},
	},	
	email: {
		config: {
		  provider: env('MAIL_PROVIDER'),
		  providerOptions: {
			key: env('AWS_SES_KEY'),
			secret: env('AWS_SES_SECRET'),
			amazon: env('AWS_SES_ENDPOINT'),
		  },
		  settings: {
			defaultFrom: env('MAIL_DEFAULT_FROM_ADDRESS'),
			defaultReplyTo: env('MAIL_DEFAULT_REPLY_TO_ADDRESS'),
		  },
		},
	},
});
