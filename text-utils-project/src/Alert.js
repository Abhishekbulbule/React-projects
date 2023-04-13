export default function Alert(props) {
    const Capitalize = (word) => {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
  
    return (
      <div className="mx-3 my-1" style={{height:'50px'}}>

      {props.alert && (
        <div
          className={`alert text-center alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          >
          {Capitalize(props.alert.type)} : {props.alert.msg}
        </div>
      )}
          </div>
    );
  }
  