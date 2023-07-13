import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

export default function MangaForm() {
  const [selectedOption, setSelectedOption] = useState(""); // hook react usestate fn setSO actualiz el valor de selectedO
  const [categories, setCategories] = useState([]);
  const [mangaTitle, setMangaTitle] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [mangaDescription, setMangaDescription] = useState("");
  const [error, setError] = useState([]);
  // state forza recarga del componente después de la creación de una manga
  const [reloadComponent, setReloadComponent] = useState(false);

  // controlador se ejecuta al enviar el formulario
  const handleFormSubmit = (event) => {
    event.preventDefault(); //evita el comportamiento predeterminado que es recargar la pag
    let selectedCategory = categories.filter((e) => e.name === selectedOption); // USRAR FIND // filtra la categoria que tenga el mismo nombre que la seleccionada para encontrar el id para el backend
    console.log(selectedCategory, "selectedCategory._id");
    const data = {
      title: mangaTitle,
      cover_photo: coverPhoto,
      description: mangaDescription,
      category_id: selectedCategory[0]._id,
      author_id: "6499d58000aa9b334218f2e9", //middleware haspermission tiene que agregar el ID
    };
    console.log(data, "dataa");
    setMangaTitle("");
    setCoverPhoto(coverPhoto); // ARREGLAR CON USEREF
    setMangaDescription("");

    // console.log(selectedOption, "asdasdaasdasdadsdasdsa");

    // toma el token metodo getItem del localStorage
    let token = localStorage.getItem("token");
    // let user = localStorage.getItem("user");

    let configs = {
      headers: {
        Authorization: `Bearer ${token}`, // esquema de autenticacion http indica que se esta ussando un token de acceso
      },
    };

    axios //bilioteca axios solicitud http post url server backend
      .post("http://localhost:8080/api/mangas/", data, configs)
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
        console.log(error);
        if (error.response.data.message === "Manga already exists") {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Manga already exists!",
          });
        }
        setError(error.response.data.message); //set todos los errores que manda el middleware validator para usarlo como span
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const handleOptionChange = (event) => {
    //controlador de eventos, cuando cambia la opcion seleccionada
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // trae todas las categorias para comparar con la seleccionada y obtener el id
    axios.get("http://localhost:8080/api/categories").then((res) => setCategories(res.data.categories)); //despues de recibir la res se accede a los datos
  }, [reloadComponent]);

  useEffect(() => {
    if (reloadComponent) {
      setReloadComponent(false); //false para que no se ejecute en loop
    }
  }, [reloadComponent]);
  // console.log(categories, "categories");
  // if (!(userRole === "1" || userRole === "2")) {
  //   console.log(userRole === "1");
  //   console.log("asdasdasd ");
  //   return <Navigate to={"/"} />;
  // }
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
                {error &&
                  error.map((errorMsg, index) => {
                    if (errorMsg.includes("Title")) {
                      return (
                        <span className="text-red-500 text-[13px] pl-2" key={index}>
                          {errorMsg}
                        </span>
                      );
                    }
                    return "";
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
                    return "";
                  })}
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
                {error &&
                  error.map((errorMsg, index) => {
                    if (errorMsg.includes("URL")) {
                      return (
                        <span className="text-red-500 text-[13px] pl-2" key={index}>
                          {errorMsg}
                        </span>
                      );
                    }
                    return "";
                  })}
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
                {error &&
                  error.map((errorMsg, index) => {
                    if (errorMsg.includes("Description")) {
                      return (
                        <span className="text-red-500 text-[13px] pl-2" key={index}>
                          {errorMsg}
                        </span>
                      );
                    }
                    return "";
                  })}
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
