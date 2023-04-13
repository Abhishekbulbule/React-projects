
export default function Footer(props) {
    return (
      <footer className={`fixed-bottom d-flex flex-wrap bg-${props.mode} justify-content-between align-items-center py-4 border-top`}>
        <div className={`col-md-4 d-flex  align-items-center ms-3`}>
          <span className={`text-decoration-none text-${props.mode==="dark" ? "light":"dark"}`}>© 2022 Company, Inc</span>
        </div>
  
        <ul className={`nav col-md-4  justify-content-end list-unstyled d-flex mx-3 `}>
          <li className="ms-3">
            <a className={`text-decoration-none text-${props.mode==="dark" ? "light":"dark"}`} href="/">
              facebook
            </a>
          </li>
          <li className="ms-3">
            <a className={`text-decoration-none text-${props.mode==="dark" ? "light":"dark"}`} href="/">
              Instagram
            </a>
          </li>
          <li className="ms-3">
            <a className={`text-decoration-none text-${props.mode==="dark" ? "light":"dark"}`} href="/">
              twitter
            </a>
          </li>
        </ul>
      </footer>
    );
  }
  