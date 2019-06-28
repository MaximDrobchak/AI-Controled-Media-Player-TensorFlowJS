import React from "react";
import { useLoadingOrError } from "../../userHooks";
import { Layout, Loading, Error, Card } from "../../components";
import { useStyles } from "./styles";
import dataList from "./dataList";
import { MDBRow, MDBCol } from "mdbreact";

const Galery = () => {
  const classes = useStyles();
  const { isLoading, getError, getLoading, error } = useLoadingOrError();

  return (
    <Layout padding={50}>
      {isLoading && <Loading />}
      <Error error={error} />
      <MDBRow className="mb-4">
        {(dataList || []).map(item => (
          <MDBCol xl="4" md="8" className="mb-r" style={{ marginBottom: 20 }}>
            <Card key={item.id} {...item} />
          </MDBCol>
        ))}
      </MDBRow>
    </Layout>
  );
};

export default Galery;
