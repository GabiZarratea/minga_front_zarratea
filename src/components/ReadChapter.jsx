import apiUrl from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { chapterDataAction } from "../redux/actions/chapters";
import { LS } from "../utils/localStorageUtils";

export default function ReadChapter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chapterAction = useSelector((store) => store.chapter);
  console.log(chapterAction); //info guardada de manera global usando redux
  const [nextChapter, setNextChapter] = useState("");
  const { id, page } = useParams();
  const [pages, setPages] = useState([]);
  const [mangaId, setMangaId] = useState(localStorage.getItem("mangaId"));
  const [title, setTitle] = useState("");
  const token = LS.get("token");
  // let token = localStorage.getItem("token");
  let configs = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // console.log(mangaId, "MANGAID");
  useEffect(() => {
    axios(apiUrl + `api/chapters/${id}?manga_id=${mangaId}`, configs)
      .then((res) => {
        // console.log(res, "reeeees");
        setPages(res.data.chapter.pages);
        setTitle(res.data.chapter.title);
        setNextChapter(res.data.nextChapter);
        setMangaId(res.data.chapter.mangaId);
        const data = { title: res.data.chapter.title, page: page };
        dispatch(chapterDataAction(data));
      })
      .catch((err) => console.log(err));
  }, [id, page]);
  //

  const PreviousPage = () => {
    if (Number(page) === 1) {
      navigate(`/manga/${mangaId}`);
    } else {
      navigate(`/Chapter/${id}/${Number(page) - 1}`);
    }
  };

  const NextPage = () => {
    console.log(nextChapter, "tubieja");
    if (Number(page) < pages.length - 1) {
      navigate(`/Chapter/${id}/${Number(page) + 1}`);
    } else if (nextChapter) {
      navigate(`/Chapter/${nextChapter}/1`);
    } else {
      navigate(`/manga/${mangaId}`);
    }
  };

  return (
    <>
      <div className="bg-state-200 h-screen">
        <div className="h-[100px] bg-gradient-to-r from-[#F97316] to-[#FF5722] w-screen ">
          <p className="text-white flex items-center justify-center h-full text-[20px]">{title}</p>
        </div>
        <div className="hidden md:flex w-screen justify-center h-[90%] mt-5">
          <div className=" w-36 flex items-center">
            <button onClick={PreviousPage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
            </button>
          </div>
          <div className="flex  ">
            <div className="  p-5 shadow-2xl pb-4	h-[90%]">
              <img src={pages[page - 1]} className="h-full" />
            </div>

            <div className=" p-5 shadow-2xl pb-4 h-[90%]">
              <img src={pages[page]} className="h-full"></img>
            </div>
          </div>
          <div className=" w-36 flex items-center justify-end">
            <button onClick={NextPage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>
          </div>
        </div>
        {/* //// */}
        <div className="flex md:hidden">
          <div className=" w-6 flex items-center">
            <button onClick={PreviousPage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
            </button>
          </div>
          <div className="w-[90%]  pt-6">
            <img src={pages[page - 1]}></img>
          </div>
          <div className="h-[70vh] w-6 flex items-center justify-end">
            <button onClick={NextPage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <img src="/public/tres_puntos.png" alt="" />
          <p>{page}</p>
        </div> */}
      </div>
      <div className="flex justify-center">
        <img src="/public/tres_puntos.png" alt="" />
        <p>{page}</p>
      </div>
    </>
  );
}
{
  /* <div className="w-full h-[78vh] bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${pages[page]})` }}>
          <div className="flex justify-between items-center">
            <div onClick={PreviousPage} className="h-[70vh] w-36 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
            </div>
            <div onClick={NextPage} className="h-[70vh] w-36 flex items-center justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </div>
          </div>
        </div> */
}
