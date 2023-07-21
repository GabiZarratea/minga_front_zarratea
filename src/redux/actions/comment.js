import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { LS } from "../../utils/localStorageUtils.js"

const read_comments = createAsyncThunk(
  'READ_COMMENTS',
  async (chapterId) => {
    try {
      const token = LS.get('token')
      let { data } = await axios.get(`http://localhost:8080/api/comments?chapter_id=${chapterId}`, { headers: { Authorization: `Bearer ${token}` }})
      return data.comments
    } catch (error) {
      return { comments: [] }
    }
  }
)

const post_comments = createAsyncThunk(
  'POST_COMMENTS',
  async ({chapterId, datos}) => {
    try {
      const token = LS.get('token')
      let { data } = await axios.post(`http://localhost:8080/api/comments?chapter_id=${chapterId}`, datos, { headers: { Authorization: `Bearer ${token}` }})
      return data.comment
    } catch (error) {
      return { comments: [] }
    }
  }
)

const setPaginationComments = createAsyncThunk(
  'SET_PAGINATION',
  async (paginationComments) => {
    try {
      return paginationComments
    } catch (error) {
      console.log(error)
    }
  }
)

const updateComment = createAsyncThunk(
  'UPDATE_COMMENTS',
  async ({commentId, text }) => {
    try{
      const token = LS.get('token')
      const { data } = await axios.put(`http://localhost:8080/api/comments/${commentId}`, {text}, { headers: { Authorization: `Bearer ${token}` }})
      return data.comment
    } catch (error) {
      console.log(error)
      return { comments: [] }

    }
  }
)

const deleteComment = createAsyncThunk(
  'DELETE_COMMENTS',
  async (commentId) => {
    try{
      const token = LS.get('token')
      const { data } = await axios.delete(`http://localhost:8080/api/comments/${commentId}`, { headers: { Authorization: `Bearer ${token}` }})
      return data.comments
    } catch (error) {
      console.log(error)
    }
  }
)

const commentActions = { read_comments, setPaginationComments, updateComment, post_comments, deleteComment }

export default commentActions
