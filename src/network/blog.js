import { blogrequest } from "./request"

//获取全部博客
export function getAllBlog() {
  return blogrequest({
    url: '/blog/all',
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