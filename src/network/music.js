import {request} from './request'; 

export function searchByName(keywords, offset, limit=30) {
  return request({
    url: '/search',
    params: {
      keywords,
      offset,
      limit
    }
  })
}

// export function searchDefault() {
//   return request({
//     url: '/search/hot',
//   })
// }

export function getSongUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}

export function playSong(url) {
  return request({
    url: url,
  })
}