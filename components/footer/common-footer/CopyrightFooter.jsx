import Social from './Social';

const CopyrightFooter = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
          <div className="copyright-text">
            © {new Date().getFullYear()} UGO HIRE
            <a
              href="https://ugohire.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ugohire.com
            </a>
            . All Right Reserved.
          </div>
          <div className="social-links">{/* <Social /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
