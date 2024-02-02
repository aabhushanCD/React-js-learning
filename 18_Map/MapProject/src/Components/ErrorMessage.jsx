const ErrorMessage = ({ arg }) => {
  // let { arg } = props;
  return (
    <>
      {arg.length === 0 && (
        <h3>Sorry! "there is currently nothing available."</h3>
      )}
    </>
  );
};

export default ErrorMessage;
