import React, { useState, useEffect, useRef } from "react";
import { api, apiUrl, endpoints } from "../utils/api.js";
import { Link as Anchor, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { LS } from "../utils/localStorageUtils";

export default function MangaForm() {
  const title = useRef("");
  const selectedOption = useRef(""); // Store the category_id here
  const cover_photo = useRef("");
  const description = useRef("");
  const error = useRef([]);
  const token = LS.get("token");

  const [categories, setCategories] = useState([]);

  // controlador se ejecuta al enviar el formulario
  async function handleFormSubmit(event) {
    event.preventDefault();

    let selectedCategory = categories.find((e) => e.name === selectedOption.current.value);

    const formData = new FormData();
    formData.append("title", title.current.value);
    formData.append("category_id", selectedCategory._id); // Use the stored category_id here
    formData.append("cover_photo", cover_photo.current.files[0]);
    formData.append("description", description.current.value);
    formData.append("author_id", "6499d58000aa9b334218f2e6");

    // Clear input fields after form submission
    title.current.value = "";
    cover_photo.current.value = "";
    description.current.value = "";

    // toma el token metodo getItem del localStorage
    // let token = localStorage.getItem("token");

    let configs = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      console.log(formData, "formdataaaaaaaaaaaaaaaaaaaaaaa");

      const res = await axios.post(apiUrl + endpoints.read_mangas, formData, configs);
      console.log(res);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "New manga creation successful",
        showConfirmButton: false,
        timer: 1500,
      });

      // Optional: Reload the categories after successful manga creation
      await fetchCategories();
    } catch (error) {
      // if (error.response.data.message === "Manga already exists") {
      //   return Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Manga already exists!",
      //   });
      // }
      // // setError(error.response.data.message || "Something went wrong!");
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Something went wrong!",
      // });
    }
  }

  async function fetchCategories() {
    try {
      const res = await axios.get("http://localhost:8080/api/categories");
      setCategories(res.data.categories);
    } catch (error) {
      // Handle error if needed
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  // function checkUserRole() {
  //   const userRole = localStorage.getItem("userRole");
  //   if (!(userRole === "1" || userRole === "2")) {
  //     return <Navigate to={"/"} />;
  //   }
  // }

  return (
    <>
      <div className="flex w-full h-[100vh] items-center justify-center">
        <div className="w-full md:w-[50%] h-[640px] shrink-0 flex flex-col justify-center items-center bg-white">
          <form onSubmit={(e) => handleFormSubmit(e)} method="post" encType="multipart/form-data" className="w-full">
            <div className="w-full mt-8 mr-0 mb-0 ml-0 space-y-8 flex flex-col items-center">
              <div>
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 mr-0 mb-0 ml-2 not-italic font-normal leading-[normal] tracking-[0.6px] text-xs text-[color:var(--primary-two-design,#F97316)]">Title</p>
                <input
                  ref={title}
                  placeholder="Insert title"
                  id="title"
                  name="title"
                  type="text"
                  required
                  className="border placeholder-gray-300 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
                />
              </div>
              <div>
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 mr-0 mb-0 ml-2 not-italic font-normal leading-[normal] tracking-[0.6px] text-xs text-[color:var(--primary-two-design,#F97316)]">Category</p>
                <select
                  ref={selectedOption}
                  className="border placeholder-gray-400 pt-[12px] pr-4 pb-[11px] pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
                >
                  {categories &&
                    categories.map((option) => (
                      <option key={option._id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                </select>
                {error.current &&
                  error.current.map((errorMsg, index) => {
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
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 mr-0 mb-0 ml-2 not-italic font-normal leading-[normal] tracking-[0.6px] text-xs text-[color:var(--primary-two-design,#F97316)]">Photo</p>
                <input
                  ref={cover_photo}
                  placeholder="cover_photo"
                  id="cover_photo"
                  name="cover_photo"
                  type="file"
                  required
                  className="border placeholder-gray-300 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
                />
              </div>
              <div>
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 mr-0 mb-0 ml-2 not-italic font-normal leading-[normal] tracking-[0.6px] text-xs text-[color:var(--primary-two-design,#F97316)]">
                  Description
                </p>
                <input
                  ref={description}
                  placeholder="description"
                  id="description"
                  name="description"
                  type="text"
                  required
                  className="border placeholder-gray-300 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
                />
              </div>
              <div className="flex items-center justify-start w-[70vw] md:w-[30vw]"></div>
              <div className="flex w-[70vw] md:w-[30vw] h-12 flex-col justify-center shrink-0 bg-[color:var(--primary-two-design,#F97316)] rounded-[10px]">
                <Anchor onClick={handleFormSubmit} className="text-[#FAFCFC] text-center text-sm not-italic font-bold leading-[normal] tracking-[0.7px]">
                  Submit
                </Anchor>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
