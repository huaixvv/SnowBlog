import { blogrequest } from "./request"

//获取全部博客
export function getAllBlog(page) {
  return blogrequest({
    url: '/blog/all',
    params: {
      page
    }
  })
}


//获取博客   根据blogId
export function getBlogById(blogId) {
  return blogrequest({
    url: '/blog/deatil',
    params: {
      blogId
    }
  })
}


//分类获取博客列表 
export function getBlogListByCata(catagoryId, page) {
  return blogrequest({
    url: '/blog/catagory',
    params: {
      catagoryId,
      page
    }
  })
}