import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}
const Member: React.FC<Props> = ({ id, name, socialId, link }) => {
  return (
    <div>
      <Image
        src={`/assets/team/perfil.png`}
        alt={name}
        width={266}
        height={455}
      />
      <div className="text-2xl xl:text:3xl">{name}</div>
      <div className="text-xl">
        <Link href={link} target="_blank">
          {socialId}
        </Link>
      </div>
    </div>
  );
};

export default Member;
