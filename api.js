let apiUrl = "http://localhost:8080/";

if (process.env.NODE_ENV === "production") {
  apiUrl = import.meta.env.VITE_API;
}

export default apiUrl;
