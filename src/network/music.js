import {request} from './request'; 

//搜索
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

//根据sonid 获取 歌曲详情-----mp3地址
export function getSongUrl(song_id) {
  return request({
    url: '/song/url',
    params: {
      id: song_id
    }
  })
}
top
//排行榜歌曲
export function getTopSong(top_id) {
  return request({
    url: '/top/list',
    params: {
      idx: top_id
    }
  })
}

//获取歌单
export function getPlayList(cat_name, offset=0, limit=30) {
  return request({
    url: 'top/playlist',
    params: {
      cat: cat_name,
      offset,
      limit
    }
  })
}

//获取歌单详情
export function getPlayDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    }
  })
}