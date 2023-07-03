import Imgsignin from "../components/imgsignin"
import SigninForm from "../components/SigninForm"

export default function Signin() {
  return (
    <main className="flex w-full lg:bg-white min-h-screen">
      <Imgsignin />
      <SigninForm />
    </main>
  )
}