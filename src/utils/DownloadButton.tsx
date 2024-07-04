const DownloadButton = () => {
  return (
    <a href="./SrijanDas_resume.pdf" download="SrijanDas_resumee.pdf">
      <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:shadow-pink hover:text-white">
        Download CV
      </button>
    </a>
  );
};

export default DownloadButton;
