import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api, apiUrl, endpoints } from "../utils/api";
import { setFilters, setCategories, setMangas, setPagination } from "../redux/actions/mangas.js";
import { Link } from "react-router-dom";
import { LS } from "../utils/localStorageUtils";

let token = LS.get("token");

const Mangas = () => {
  const dispatch = useDispatch();
  const { filters, categories, mangas, pagination } = useSelector((state) => state.mangas);

  const { title, categoriesSelected, page } = filters;
  const { prev, next } = pagination;

  const getMangas = async () => {
    try {
      const { data } = await api.get(
        apiUrl + endpoints.read_mangas,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        {
          params: {
            title: title.trim(),
            category: categoriesSelected.join(","),
            page: page,
          },
        }
      );

      dispatch(setMangas(data.mangas));
      dispatch(setPagination(data.pagination));
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await api.get(apiUrl + endpoints.read_categories, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(setCategories(data.categories));
    } catch (error) {
      console.log(error);
    }
  };

  const selectCategory = (value) => {
    let updatedCategories = [];

    if (categoriesSelected.includes(value)) {
      updatedCategories = categoriesSelected.filter((category) => category !== value);
    } else {
      updatedCategories = [...categoriesSelected, value];
    }

    const updatedFilters = {
      ...filters,
      categoriesSelected: updatedCategories,
      page: 1,
    };

    dispatch(setFilters(updatedFilters));
  };

  useEffect(() => {
    getMangas();
    getCategories();
  }, [title, categoriesSelected, page]);

  const handlePrevPage = () => {
    if (prev) {
      dispatch(setFilters({ ...filters, page: prev }));
    }
  };

  const handleNextPage = () => {
    if (next) {
      dispatch(setFilters({ ...filters, page: next }));
    }
  };

  const handleTextChange = (e) => {
    dispatch(setFilters({ ...filters, title: e.target.value, page: 1 }));
  };

  const borderColor = (index) => {
    const colors = ["border-red-500", "border-blue-500", "border-green-500", "border-yellow-500"];
    return colors[index % colors.length];
  };

  return (
    <div className="flex flex-wrap flex-col min-h-screen w-screen items-center justify-center">
      <div className="flex flex-wrap gap-[70px] bg-[url('/mangas-bg.png')] bg-no-repeat bg-top bg-cover min-h-[40vh] justify-center items-center flex-col w-[100%]">
        <h1 className="text-white flex-wrap text-[60px] font-semibold">Mangas</h1>
        <input
          value={title}
          onChange={handleTextChange}
          className="flex flex-wrap items-center text-center px-[70px] md:px-[250px] xl:px-[500px] py-2 gap-[10px]"
          type="search"
          name="search-mangas"
          id="search"
          placeholder="Search Mangas"
        />
      </div>
      <div className="flex flex-wrap h-[10vh] items-center w-full justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => selectCategory(category._id)}
            className={`md:p-4 rounded-full ${categoriesSelected.includes(category._id) ? "selected" : ""}`}
            style={{
              backgroundColor: categoriesSelected.includes(category._id) ? category.hover : category.color,
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="w-[90%] min-h-[50vh] flex flex-col gap-4 md:flex-row md:inline-flex flex-wrap items-center justify-center">
        {mangas.length > 0 ? (
          mangas.map((manga, index) => (
            <div key={manga._id} className={`flex flex-col md:flex-row flex-wrap h-[10rem] w-[auto] md:h-[16rem] border-l-[7px] rounded-[10px] justify-center items-center ${borderColor(index)}`}>
              <Link to={`/manga/${manga._id}`}>
                <p className="text-[20px] md:text-2xl text-center inline-flex flex-wrap min-w-[12rem] md:min-w-[17 rem] xl:min-w-[30rem]">{manga.title}</p>
                <img className="inline-flex flex-wrap h-[6rem] w-[6rem] md:h-[15rem] md:w-[15rem]" src={manga.cover_photo} alt="" />
              </Link>
            </div>
          ))
        ) : (
          <p className="md:text-[40px] flex-wrap text-center">No se encontraron mangas que coincidan con los filtros seleccionados.</p>
        )}
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        <button onClick={handlePrevPage} disabled={!prev} className={`px-4 py-2 mr-2 ${!prev ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}>
          Prev
        </button>
        <button onClick={handleNextPage} disabled={!next} className={`px-4 py-2 ${!next ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Mangas;
