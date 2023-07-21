import React, { useEffect, useState, useRef } from 'react'
import { LS } from '../utils/localStorageUtils.js'
import { setUser } from '../redux/actions/auth.js'
import { useDispatch, useSelector } from 'react-redux'
import { api, apiUrl, endpoints } from '../utils/api'
import commentActions from '../redux/actions/comment.js'

const ListComments = () => {
  const token = LS.get('token')
  const text = useRef("")
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const comments = useSelector((state) => state.comments.comments)

  const {updateComment, deleteComment, read_comments} = commentActions
  const [editingCommentId, setEditingCommentId] = useState(null)

  const fetchUserData = async () => {
    try {
      const response = await api.get(apiUrl + endpoints.signintoken, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { user } = response.data.response

      dispatch(setUser(user))
    } catch (error) {
      console.log(error)
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', options)
  }


  const isAuthor = (comment) => {
    if (!user) return false
    return comment.user_id.email === user
  }

  const handleEditComment = (comment) => {
    setEditingCommentId(comment._id)
  }

  const handleCancelEdit = () => {
    setEditingCommentId(null)
  }

  const handleSaveComment =  (commentId) => {
    dispatch(updateComment({ commentId, text: text.current.value }))
  }

  const handleDeleteComment = (commentId, chapterId) => {
    dispatch(deleteComment(commentId))
    dispatch(read_comments(chapterId))
  }


  useEffect(() => {
    if (!user) fetchUserData()
  }, [])

  return (
    comments?.map((comment) => (
      <div key={comment._id} className="bg-white p-4 rounded-lg mt-4">
        <div className="flex justify-between p-2">
          {isAuthor(comment) && editingCommentId === comment._id ? (
            <div className="flex">
              <input type="text" ref={text} className="border border-gray-300 rounded-md p-1 px-2"/>
              <button onClick={() => handleSaveComment(comment._id)} className="ms-2 border border-[color:var(--grey,#9D9D9D)] rounded-lg border-solid p-2 flex justify-center">
                <p className="text-green-600 text-md not-italic font-normal leading-[normal]">Save</p>
              </button>
              <button onClick={handleCancelEdit} className="ms-2 me-2 border border-[color:var(--grey,#9D9D9D)] rounded-lg border-solid p-2 flex justify-center">
                <p className="text-[#FF0000] text-md not-italic font-normal leading-[normal]">Cancel</p>
              </button>
            </div>
          ) : (
            isAuthor(comment) && (
              <div className="flex">
                <button onClick={() => handleEditComment(comment)} className="border border-[color:var(--grey,#9D9D9D)] rounded-lg border-solid p-2 flex justify-center">
                  <p className="text-[#0079FF] text-md not-italic font-normal leading-[normal]">Edit</p>
                  <img src="/pencil.png" className="w-4 ms-2" />
                </button>
                <button onClick={() => handleDeleteComment(comment._id, comment.chapter_id)}>
                  <img src="/archive.png" className="ms-4" />
                </button>
              </div>
            )
          )}
          <img src={comment.user_id.photo} className="w-10 rounded-2xl" />
          {!isAuthor(comment) && (
            <p className="p-2 font-bold text-orange-600">{comment.user_id.email}</p>
          )}
        </div>
        <div className="p-2">
          <p className="text-[#686868]">{comment.text}</p>
        </div>
        <div className="flex justify-between text-sm p-2 items-center">
          <div className="flex justify-around h-8 items-center">
            <img src="/chat.png" alt="Icon Comment" className="w-6 h-6 me-3" />
            <p className="me-3">Cant</p>
              <button className="border border-[color:var(--grey,#9D9D9D)] rounded-lg border-solid p-2 flex justify-center">
                <p className="text-[#0079FF] text-md not-italic font-normal leading-[normal]">Reply</p>
                <img src="/pencil.png" className="w-4 ms-2" />
              </button>
          </div>
          <p className="text-[#c3c3c3]">{formatDate(comment.createdAt)}</p>
        </div>
      </div>
    ))
  )
}

export default ListComments
