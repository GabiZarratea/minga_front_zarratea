import React, { useRef, useState } from "react"
import { Link as Anchor } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import commentActions from '../redux/actions/comment'
import ListComments from "./ListComment"

const ChapterCaps = ({chapter}) => {

    let text = useRef("")

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const { read_comments, post_comments, setPaginationComments } = commentActions
    const { pagination } = useSelector((state) => state.comments)

    const [commentText, setCommentText] = useState("")

const handleShowModal = (chapterId) => {

    dispatch(read_comments(chapterId))
    dispatch(setPaginationComments({ currentPage: 1, totalPages: 1, totalComments: 0, prev: false, next: false}))
    setShowModal(true)

}

const handleCloseModal = () => {

    setShowModal(false)
}

const handlePrevPageComments = async () => {
    if(pagination.currentPage > 1){
      dispatch(setPaginationComments({currentPage: pagination.currentPage -1, totalPages: pagination.totalPages, totalComments: pagination.totalComments, prev: true, next: true}))
      dispatch(read_comments(chapter._id))
    }
  }

  const handleNextPageComments = async () => {
    if(pagination.currentPage < totalPages){
      dispatch(setPaginationComments({currentPage: pagination.currentPage +1, totalPages: pagination.totalPages, totalComments: pagination.totalComments, prev: true, next: true }))
      dispatch(read_comments(chapter._id))
    }
  }

const handleCommentSubmit =  (chapterId) => {
        let datos = { text: commentText }
        dispatch(post_comments({chapterId, datos}))
        setCommentText("")

}

return (
    <div key={chapter._id} className="flex w-[90%] justify-between items-center m-3">
        <img src={chapter.cover_photo} className="w-[25%] h-[80px] md:h-[150px] object-cover" />
        <div className="flex flex-col justify-around items-center">
            <p className="text-black text-center text-xl not-italic leading-[95.187%] font-medium">{chapter.title}</p>
            <div className="flex items-center">
                <button onClick={() => handleShowModal(chapter._id)}><img src="/icon_comment.png" alt="Icon Comment" className="w-8 m-4"/></button>
                {/* <p>{chapter._id === selectedChapterId ? totalComments : 0}</p> */}
            </div>
        </div>
        <div className="flex w-[25%] h-12 flex-col justify-center shrink-0 bg-[color:var(--primary-two-design,#F97316)] rounded-[25px] hover:bg-orange-800 ">
            <Anchor to={`/Chapter/${chapter._id}/1`} className="text-[#FAFCFC] text-center text-md not-italic font-bold leading-[normal] tracking-[0.7px">Read</Anchor>
        </div>
        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-slate-200 flex-col p-4 shadow-2xl rounded-lg flex" style={{ maxHeight: "90%", overflowY: "auto", border: "2px solid #EF8481", borderRadius: "10px"}}>
                    <button className="flex justify-end"><img src="/close.svg" onClick={handleCloseModal} className="block ms-[20%] w-[24px] h-[24px]" alt="Close" /></button>
                    
                    <ListComments/>

                    {/* Formulario para enviar un nuevo comentario */}
                    <div className="flex w-[386px] justify-between items-center shrink-0 self-stretch px-5 py-0 rounded-[10px] mt-4">
                        <input type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Say something here..." className="w-full p-2 border rounded" rows={1} />
                        <button>
                            <img src="/paper-airplane.png" className="h-10" onClick={() => handleCommentSubmit(chapter._id)} />
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center mt-4">
                        <button onClick={handlePrevPageComments} disabled={!pagination.prev} className={`px-4 py-2 mr-2 rounded-md ${pagination.currentPage === 1 ? 'bg-slate-50' : 'bg-orange-400' }`}> Prev </button>
                        <button onClick={handleNextPageComments} disabled={!pagination.next} className={`px-4 py-2 mr-2 rounded-md ${pagination.currentPage === pagination.totalPages ? 'bg-slate-50' : 'bg-orange-400' }`}> Next </button>
                    </div>
                </div>
                        
            </div>
        )}            
    </div>
  )
}
export default ChapterCaps