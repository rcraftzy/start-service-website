import Image from "next/image"
import Link from "next/link"

const Footer: React.FC = () => (
<footer className="flex gap-8 items-center justify-center bg-black text-white p-20">
    <Image src="/assets/logo.png" width={30} height={36} alt="logo"/>
    <Link href="/terms">Terminos</Link>
    <Link href="/privacy">Politica de privacidad</Link>

  </footer>
) 
export default Footer 
