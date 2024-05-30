import { SelectedPage } from "../../utils/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  onClick?: () => void; // New optional onClick prop
};

const Link = ({ page, selectedPage, setSelectedPage, onClick }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        if (onClick) onClick(); // Call onClick if provided
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
