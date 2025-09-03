import axios from 'axios'
import crypto from 'crypto'

export default {
	id: 'whitebox-feed',
	handler: async ({ feed, token, data, file }, options) => {
		const { FilesService } = options.services
		const filesService = new FilesService({ schema: await options.getSchema() })
        const url = `https://feed.whitebox.pro/feed/${feed}`
		data = data || {}
		if (typeof data === 'string') {
			data = JSON.parse(data)
		}
		file = file || {}
		if (typeof file === 'string') {
			file = JSON.parse(file)
		}
		
        const response = await axios.post(url, data, {
            responseType: 'stream',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            timeout: 30000
        })
        return await filesService.uploadOne(response.data, { 
			storage: 'local',
			type: response.headers['content-type'],
			filename_download: crypto.randomUUID() + '.' + response.headers['content-type'].split('/')[1],
			...file, 
		})
	},
};
