import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Form from "../../Components/Form";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import styled from "../../styled.d";

const Container = styled.div`
  padding: 0 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 40px;
`;

const ExtendedLink = styled(Link)`
  text-decoration: underline;
  margin-bottom: 20px;
  display: block;
`;

interface IProps {
  address: string;
  name: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  onSubmit: any;
  pickedAddress: boolean;
}

const AddPlacePresenter: React.FC<IProps> = ({
  onInputChange,
  address,
  name,
  loading,
  onSubmit,
  pickedAddress
}) => (
  <React.Fragment>
    <Helmet>
      <title>Add Place | Uber</title>
    </Helmet>
    <Header title={"Add Place"} backTo={"/"} />
    <Container>
      <Form submitFn={onSubmit}>
        <ExtendedInput
          placeholder={"Name"}
          type={"text"}
          onChange={onInputChange}
          value={name}
          name="name"
        />
        <ExtendedInput
         name="address"
          placeholder={"Address"}
          type={"text"}
          onChange={onInputChange}
          value={address}
        />
        <ExtendedLink to={"/find-address"}>Pick place from map</ExtendedLink>
        { pickedAddress ? <Button onClick={null} value={loading ? "Adding place" : "Add Place"} type="submit" /> : null }
      </Form>
    </Container>
  </React.Fragment>
);

export default AddPlacePresenter;