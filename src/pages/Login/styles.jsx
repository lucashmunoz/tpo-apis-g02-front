import styled from "styled-components";
import Input from "components/Input";
import PrimaryButton from "components/PrimaryButton";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FormLogin = styled.form`
  background-color: #f3f4f6;
  display: flex;
  width: 40%;
  padding: 20px 60px;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 10px;
    width: calc(100% - 20px);
  }
`;

export const DivImage = styled.div`
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 30px;
`;

export const Image = styled.img`
  width: 120px;
  border: 2px solid black;
  border-radius: 150px;
  background-color: white;
`;

export const LoginInput = styled(Input)`
  margin-top
`;

export const ActionContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

export const LogInButton = styled(PrimaryButton)`
  width: 100%;
`;

export const RegistrarseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 35px;
`;

export const RegistrarseLabel = styled.label`
  width: 500px;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const ButtonRegistrarseContainer = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  height: 40px;
`;

export const ErrorShow = styled.p`
  color: red;
  display: block;
`;
