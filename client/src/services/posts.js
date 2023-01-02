import { makeRequest } from "./makeRequest"

export function getPosts() {
  console.log("postsまで来た")
  return makeRequest("/posts")
}

export function getPost(id) {
  return makeRequest(`/posts/${id}`)
}
