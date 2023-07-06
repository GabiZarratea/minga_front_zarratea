import Swal from "sweetalert2"

export default function Alert({ messages, show, setShow }){
  const showAlert = async () => {
    for (let i = 0; i < messages.length; i++){
      await Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: <p key={i}>{messages[i]}</p>,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return show && (
    <div className="alert">
      {showAlert()}
      <button onClick={() => setShow(false)}>
        Cerrar
      </button>
    </div>
  )
}