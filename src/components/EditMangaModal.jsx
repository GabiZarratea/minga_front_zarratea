import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { LS } from "../utils/localStorageUtils";

const EditMangaModal = ({ setReloadComponent, closeModal, manga }) => {
  const [selectedOption, setSelectedOption] = useState(manga.category_id.name);
  const [categories, setCategories] = useState([]);
  const [mangaTitle, setMangaTitle] = useState(manga.title);
  const [cover_photo, setCoverPhoto] = useState(manga.cover_photo);
  const [mangaDescription, setMangaDescription] = useState(manga.description);
  const [error, setError] = useState([]);

  // const [reloadComponent, setReloadComponent] = useState(false);
  const token = LS.get("token");

  console.log(manga, "mangamodalss");
  useEffect(() => {
    axios.get("http://localhost:8080/api/categories").then((res) => setCategories(res.data.categories));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let selectedCategory = categories.filter((e) => e.name === selectedOption);
    const data = {
      title: mangaTitle,
      cover_photo: cover_photo,
      description: mangaDescription,
      category_id: selectedCategory[0]._id,
    };
    // setMangaTitle("");
    // setCoverPhoto("");
    // setMangaDescription("");

    // let token = localStorage.getItem("token");
    let configs = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put(`http://localhost:8080/api/mangas/${manga._id}`, data, configs)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Manga succesfully edited!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setReloadComponent(true);
          closeModal(false);
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.message === "ERROR") {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ERROR",
          });
        }
        setError(error.response.data.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-[80vw] md:w-[30vw] max-h-[80vh] overflow-y-auto">
        <form onSubmit={handleFormSubmit} method="POST" className="w-full" placeholder="Select category">
          <div className="w-full mt-8 mr-0 mb-0 ml-0 space-y-8 flex flex-col items-center">
            <div>
              <input
                id="mangaTitle"
                name="mangaTitle"
                type="text"
                value={mangaTitle}
                onChange={(event) => setMangaTitle(event.target.value)}
                className="border placeholder-gray-400 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
              />
              {error &&
                error.map((errorMsg, index) => {
                  if (errorMsg.includes("Title")) {
                    return (
                      <span className="text-red-500 text-[13px] pl-2" key={index}>
                        {errorMsg}
                      </span>
                    );
                  }
                  return null;
                })}
            </div>
            <div>
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="border placeholder-gray-400 pt-[12px] pr-4 pb-[11px] pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
              >
                {categories &&
                  categories.map((option) => (
                    <option key={option._id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
              </select>
              {error &&
                error.map((errorMsg, index) => {
                  if (errorMsg.includes("Category")) {
                    return (
                      <span className="text-red-500 text-[13px] pl-2" key={index}>
                        {errorMsg}
                      </span>
                    );
                  }
                  return null;
                })}
            </div>
            <div>
              <input
                id="cover_photo"
                name="cover_photo"
                type="text"
                value={cover_photo}
                onChange={(event) => setCoverPhoto(event.target.value)}
                className="border placeholder-gray-400 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
              />
              {error &&
                error.map((errorMsg, index) => {
                  if (errorMsg.includes("URL")) {
                    return (
                      <span className="text-red-500 text-[13px] pl-2" key={index}>
                        {errorMsg}
                      </span>
                    );
                  }
                  return null;
                })}
            </div>
            <div>
              <input
                id="mangaDescription"
                name="mangaDescription"
                type="text"
                value={mangaDescription}
                onChange={(event) => setMangaDescription(event.target.value)}
                className="border placeholder-gray-400 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
              />
              {error &&
                error.map((errorMsg, index) => {
                  if (errorMsg.includes("Description")) {
                    return (
                      <span className="text-red-500 text-[13px] pl-2" key={index}>
                        {errorMsg}
                      </span>
                    );
                  }
                  return null;
                })}
            </div>

            <div className="flex w-[70vw] md:w-[30vw] h-12 flex-col justify-center shrink-0 bg-[#34D399] rounded-[10px]">
              <button type="submit" className="text-[#FFF] text-center text-sm not-italic font-bold leading-[normal] tracking-[0.7px]">
                Edit
              </button>
            </div>
            <div className="flex w-[100px] md:w-[30vw] h-12 flex-col justify-center shrink-0 bg-[#FBDDDC] rounded-[10px]">
              <button type="submit" className=" text-[#EE8380] text-center text-sm not-italic font-bold leading-[normal] tracking-[0.7px]" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMangaModal;
