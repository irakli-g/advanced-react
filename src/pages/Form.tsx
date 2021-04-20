import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CommentBox } from "../components";
import { AppState } from "../redux/Root";
import { useHistory } from "react-router-dom";

interface Props {
  authenticated: boolean;
}

const Form: React.FC<Props> = ({ authenticated }) => {
  const history = useHistory();

  useEffect(() => {
    if (authenticated === false) {
      setTimeout(() => {
        history.push("/");
      }, 250);
    }
  });

  return (
    <section data-testid="form-page">
      <CommentBox />
    </section>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(Form);
