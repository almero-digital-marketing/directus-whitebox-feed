export default {
	id: 'whitebox-feed',
	name: 'WhiteBox Feed',
	icon: 'box',
	description: 'Create document with WiteBox Feed service',
	overview: ({ feed }) => [
		{
			label: 'Feed',
			text: feed,
		},
	],
	options: [
		{
			field: 'token',
			name: 'Token',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'feed',
			name: 'Feed',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'data',
			name: 'Data',
			type: 'text',
			meta: {
				width: 'full',
				interface: 'input-multiline',
				options: {
					font: 'monospace',
					placeholder: '$t:any_string_or_json',
				},
			},
		},
		{
			field: 'file',
			name: 'File',
			type: 'text',
			meta: {
				width: 'full',
				interface: 'input-code',
				options: {
					language: 'json',
					placeholder: '$t:item_payload_placeholder',
				},
			},
		},
	],
};
