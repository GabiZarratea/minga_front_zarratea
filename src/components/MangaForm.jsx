import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function MangaForm() {
  const [selectedOption, setSelectedOption] = useState("Select category");
  const [categories, setCategories] = useState([]);
  const [mangaTitle, setMangaTitle] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [mangaDescription, setMangaDescription] = useState("");
  const [reloadComponent, setReloadComponent] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: mangaTitle,
      cover_photo: coverPhoto,
      description: mangaDescription,
      category_id: selectedOption,
      author_id: "1",
    };

    let token = localStorage.getItem("token");
    let configs = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:8080/api/mangas/create", data, configs)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "New manga creation successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setReloadComponent(true);
        });
      })
      .catch((error) => {
        console.log(error.message);
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

  useEffect(() => {
    axios.get("http://localhost:8080/api/categories").then((res) => setCategories(res.data.response));
  }, [reloadComponent]);

  useEffect(() => {
    if (reloadComponent) {
      setReloadComponent(false);
    }
  }, [reloadComponent]);

  return (
    <>
      <div className="flex w-full h-[100vh] items-center justify-center">
        <div className="w-full md:w-[50%] h-[640px] shrink-0 flex flex-col justify-center items-center bg-white">
          <p className="text-[#1F1F1F] text-center text-[32px] not-italic font-semibold leading-[normal] tracking-[1.6px]">New Manga</p>

          <form onSubmit={handleFormSubmit} method="POST" className="w-full" placeholder="Select category">
            <div className="w-full mt-8 mr-0 mb-0 ml-0 space-y-8 flex flex-col items-center">
              <div>
                <input
                  placeholder="Insert title"
                  id="mangaTitle"
                  name="mangaTitle"
                  type="text"
                  required
                  value={mangaTitle}
                  onChange={(event) => setMangaTitle(event.target.value)}
                  className="border placeholder-gray-400 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
                />
              </div>
              <div>
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="border placeholder-gray-400 pt-[12px] pr-4 pb-[11px] pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
                >
                  {categories.map((option) => (
                    <option key={option._id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  placeholder="Insert cover photo"
                  id="coverPhoto"
                  name="coverPhoto"
                  type="text"
                  required
                  value={coverPhoto}
                  onChange={(event) => setCoverPhoto(event.target.value)}
                  className="border placeholder-gray-400 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
                />
              </div>
              <div>
                <input
                  placeholder="Insert description"
                  id="mangaDescription"
                  name="mangaDescription"
                  type="text"
                  required
                  value={mangaDescription}
                  onChange={(event) => setMangaDescription(event.target.value)}
                  className="border placeholder-gray-400 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
                />
              </div>

              <div className="flex w-[70vw] md:w-[30vw] h-12 flex-col justify-center shrink-0 bg-[color:var(--primary-two-design,#F97316)] rounded-[10px]">
                <button type="submit" className="text-[#FAFCFC] text-center text-sm not-italic font-bold leading-[normal] tracking-[0.7px]">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
