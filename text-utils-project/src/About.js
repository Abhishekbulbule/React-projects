

export default function About(props) {
  return (
    <div
      className={`bg-${props.mode} text-${
        props.mode === "dark" ? "light" : "dark"
      }`}
    >
      <div
        className={`accordion container my-3 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
        id="accordionExample"
      >
        <h1>About us</h1>
        <div
          className={`accordion-item bg-${props.mode} text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button bg-${props.mode} text-${
                props.mode === "dark" ? "light" : "dark"
              } border`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Frontend Basic Bootstrap Component
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body `}>
              <strong>This bootstrap component is a accordion body.</strong>
              It is shown by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions. You can modify any of this with
              custom CSS or overriding our default variables. It's also worth
              noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item bg-${props.mode} text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button collapsed bg-${props.mode} text-${
                props.mode === "dark" ? "light" : "dark"
              } border`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Created using React js
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                React js makes website faster no reload of the page only
                components rendering.
              </strong>{" "}
              It is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions. You can modify any of this with
              custom CSS or overriding our default variables. It's also worth
              noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item bg-${props.mode} text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button collapsed bg-${props.mode} text-${
                props.mode === "dark" ? "light" : "dark"
              } border`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Used useState hooks of react for Light, Dark mode
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Look at the navbar and click on the switch button.
              </strong>{" "}
              It is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions. You can modify any of this with
              custom CSS or overriding our default variables. It's also worth
              noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
