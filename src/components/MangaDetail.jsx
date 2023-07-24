import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link as Anchor, useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { setManga, setChapters, setPagination } from "../redux/actions/manga.js";
// import { mangaIdAction } from "../redux/actions/chapters";

const MangaDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { manga, chapters, pagination } = useSelector((state) => state.manga);
  const { prev, next } = pagination;
  const mangaId = manga?._id;
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0);
  const [activeTab, setActiveTab] = useState("mangas");
  const chapterAction = useSelector((store) => store.chapter);
  // const mangaAction = useSelector((store) => store.chapter);
  // console.log(mangaAction, "mangaaction");
  const fetchMangaDetail = async () => {
    if (manga._id !== id) {
      try {
        const { data } = await api.get(`/mangas/${id}`);
        dispatch(setManga(data.manga));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchChapters = async (page) => {
    try {
      const { data } = await api.get(`/chapters?page=${page}&manga_id=${id}`);
      dispatch(setChapters(data.chapters));
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = async () => {
    if (pagination.currentPage > 1) {
      dispatch(setPagination({ currentPage: pagination.currentPage - 1, prev: true, next: true }));
    } else if (pagination.currentPage == 2) {
      dispatch(setPagination({ currentPage: pagination.currentPage - 1, prev: false, next: true }));
    }
  };

  const handleNextPage = async () => {
    dispatch(setPagination({ currentPage: pagination.currentPage + 1, prev: true, next: true }));
  };

  const switchToMangaTab = () => {
    setActiveTab("mangas");
  };

  const switchToChaptersTab = () => {
    setActiveTab("chapters");
  };

  const toReadChapter = (chapter) => {
    // dispatch(mangaIdAction({ mangaId: chapter.manga_id }));
    localStorage.setItem("mangaId", chapter.manga_id);
    if (chapterAction.title === chapter.title) {
      console.log(chapterAction.number, "pesado");
      navigate(`/Chapter/${chapter._id}/${chapterAction.number}`);
    } else {
      navigate(`/Chapter/${chapter._id}/1`);
    }
  };
  const company_name = (manga.author_id?.name ? ` ${manga.author_id.name}` : "") + " " + (manga.author_id?.last_name ? ` ${manga.author_id.last_name}` : "");

  useEffect(() => {
    fetchMangaDetail();
    fetchChapters(pagination.currentPage);
  }, [pagination]);

  return (
    <div className="bg-slate-200 min-h-[screen] flex flex-col items-center w-full">
      <div className="mt-[25%] sm:mt-[120px] flex flex-col items-center w-full">
        <img src={manga.cover_photo} alt="manga cover" className="rounded-[10px] w-[80%] sm:w-[60%] h-[250px] object-cover object-top" />
        {activeTab === "mangas" && (
          <div className="flex flex-col items-center w-[full] sm:w-[60%]">
            <p className="m-4 text-[color:var(--black,#222)] text-2xl not-italic leading-[95.187%]">{manga.title}</p>

            <div className="flex w-full justify-around items-center">
              <p className="shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)] rounded-[50px] flex items-start gap-2.5 p-3 bg-[color:var(--black,#ffe0df)] text-[#EF8481] text-md not-italic font-medium leading-[95.187%]">
                {manga.category_id?.name}
              </p>
              <p className="flex h-2.5 flex-col justify-center shrink-0 text-[color:var(--grey,#9D9D9D)] text-xl not-italic leading-[95.187%]">{company_name}</p>
            </div>

            <div className="flex justify-around items-center content-center m-4">
              <button className="shrink-0 bg-white rounded-full m-2 shadow-lg w-[25%] sm:w-[30%] h-[60px] hover:ease-in">
                <p className="text-[rgba(0,0,0,0.80)] text-center text-[35px] flex flex-col justify-center items-center">👍</p>
              </button>
              <button className="shrink-0 bg-white rounded-full m-2 shadow-lg w-[25%] sm:w-[30%] h-[60px] hover:ease-in">
                <p className="text-[rgba(0,0,0,0.80)] text-center text-[35px] flex flex-col justify-center items-center">👎️</p>
              </button>
              <button className="shrink-0 bg-white rounded-full m-2 shadow-lg w-[25%] sm:w-[30%] h-[60px] hover:ease-in">
                <p className="text-[rgba(0,0,0,0.80)] text-center text-[35px] flex flex-col justify-center items-center">😮</p>
              </button>
              <button className="shrink-0 bg-white rounded-full m-2 shadow-lg w-[25%] sm:w-[30%] h-[60px] hover:ease-in">
                <p className="text-[rgba(0,0,0,0.80)] text-center text-[35px] flex flex-col justify-center items-center">😍</p>
              </button>
            </div>

            <div className="w-[90%] h-[80px] bg-white rounded-md shadow-lg flex flex-row justify-around items-center">
              <div className="flex flex-col">
                <p className="text-[color:var(--primary-black,#424242)] text-center text-xl not-italic font-normal leading-[normal]">4.5/5</p>
                <p className="text-[color:var(--secondary-gray,#9D9D9D)] text-center text-xs not-italic font-normal leading-[normal]">Rating</p>
              </div>
              <p className="text-[color:var(--secondary-gray,#9D9D9D)] text-center text-2xl not-italic font-extralight leading-[normal]">|</p>
              <div className="flex flex-col">
                <p className="text-[color:var(--primary-black,#424242)] text-center text-xl not-italic font-normal leading-[normal]">265</p>
                <p className="text-[color:var(--secondary-gray,#9D9D9D)] text-center text-xs not-italic font-normal leading-[normal]">Chapters</p>
              </div>
              <p className="text-[color:var(--secondary-gray,#9D9D9D)] text-center text-2xl not-italic font-extralight leading-[normal]">|</p>
              <div className="flex flex-col">
                <p className="text-[color:var(--primary-black,#424242)] text-center text-xl not-italic font-normal leading-[normal]">Eng</p>
                <p className="text-[color:var(--secondary-gray,#9D9D9D)] text-center text-xs not-italic font-normal leading-[normal]">Language</p>
              </div>
            </div>
            <div className="w-[90%] h-[40px] shrink-0 flex items-center m-4 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)] rounded-[20px]">
              <Anchor
                onClick={switchToMangaTab}
                className="w-[50%] h-[34.311px] shrink-0 rounded-[20px] bg-orange-500 text-[color:var(--white,#FFF)] text-center text-md not-italic font-normal leading-[normal] flex flex-col justify-center"
              >
                Manga
              </Anchor>
              <Anchor
                onClick={switchToChaptersTab}
                className="flex w-[50%] h-[34px] flex-col justify-center items-center shrink-0 text-[color:var(--secondary-gray,#9D9D9D)] text-center text-md not-italic font-normal leading-[normal]"
              >
                Chapters
              </Anchor>
            </div>

            <div className="w-[90%] shrink-0 m-8">
              <p className="text-[color:var(--primary-black,#424242)] text- not-italic font-normal leading-5">{manga.description}</p>
            </div>
          </div>
        )}
        {activeTab === "chapters" && (
          <div className="sm:w-[60%] flex flex-col items-center w-[90%] mb-12">
            <p className="m-4 text-[color:var(--black,#222)] text-2xl not-italic leading-[95.187%]">Chapters</p>
            <div className="w-[90%] h-[40px] shrink-0 flex items-center m-4 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)] rounded-[20px]">
              <Anchor
                onClick={switchToMangaTab}
                className="flex w-[50%] h-[34px] flex-col justify-center items-center shrink-0 text-[color:var(--secondary-gray,#9D9D9D)] text-center text-md not-italic font-normal leading-[normal]"
              >
                Manga
              </Anchor>
              <Anchor
                onClick={switchToChaptersTab}
                className="w-[50%] h-[34.311px] shrink-0 rounded-[20px] bg-orange-500 text-[color:var(--white,#FFF)] text-center text-md not-italic font-normal leading-[normal] flex flex-col justify-center"
              >
                Chapters
              </Anchor>
            </div>
            {chapters.map((chapter) => (
              <div key={chapter._id} className="flex w-[90%] justify-between items-center m-3">
                <img src={chapter.cover_photo} className="w-[25%] h-[80px] md:h-[150px] object-cover" />
                <p className="text-black w-[45%] text-center text-xl not-italic leading-[95.187%] font-medium">{chapter.title}</p>
                <div className="flex w-[25%] h-12 flex-col justify-center shrink-0 bg-[color:var(--primary-two-design,#F97316)] rounded-[25px]">
                  <Anchor
                    onClick={(e) => {
                      e.preventDefault();
                      toReadChapter(chapter);
                    }}
                    className="text-[#FAFCFC] text-center text-md not-italic font-bold leading-[normal] tracking-[0.7px]"
                  >
                    Read
                  </Anchor>
                </div>
              </div>
            ))}
            <div className="flex flex-wrap justify-center mt-4">
              <button onClick={handlePrevPage} disabled={pagination.currentPage == 1} className={`px-4 py-2 mr-2 rounded-md ${pagination.currentPage == 1 ? "bg-slate-50" : "bg-orange-400"}`}>
                {" "}
                Prev{" "}
              </button>
              <button
                onClick={handleNextPage}
                disabled={pagination.currentPage == totalPages}
                className={`px-4 py-2 mr-2 rounded-md ${pagination.currentPage == totalPages ? "bg-slate-50" : "bg-orange-400"}`}
              >
                {" "}
                Next{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MangaDetail;
