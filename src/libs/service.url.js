import {ENV} from '../libs/environment'

let baseUrl = "http://127.0.0.1:9900";
const devUrl = "http://192.168.0.15:3077";
const productUrl = "http://www.zhizhaowang:8089";
if (ENV == "dev") {
  baseUrl = devUrl;
} else if (ENV == "product") {
  baseUrl = productUrl;
}

export const SERVICE_URLS = {
  live: {
    login: {
      path: baseUrl + '/loginUser',
      method: 'POST'

    },
    page: {
      path: baseUrl + '/back/live/page?liveName={liveName}&liveStartTime={liveStartTime}&liveEndTime={liveEndTime}&pageNo={pageNo}&pageSize={pageSize}&schoolId={schoolId}',
      method: 'GET'
    },
    delete: {
      path: baseUrl + '/system/menu?id={id}',
      method: 'DELETE'
    },
    update: {
      path: baseUrl + '/system/column',
      method: 'PUT'
    }
  }
}

