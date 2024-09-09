import siteConfig from "../site.config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 text-center flex items-center justify-center gap-2">
      © {currentYear} <a 
        href={`https://github.com/${siteConfig.github}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white flex items-center gap-2"
      >{siteConfig.title}</a>
      
    </footer>
  );
};

export default Footer;
