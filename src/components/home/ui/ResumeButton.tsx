import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem]"
      href={"https://my-portfolio-omega-fawn-89.vercel.app/pranav resume.pdf"}
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
