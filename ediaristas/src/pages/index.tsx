import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/pageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment></SafeEnvironment>
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localicade"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />
          <Typography color={"error"}> CEP inválido </Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Johnatan Lopes"}
              picture={""}
              rating={5}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Gustavo Munhoz"}
              picture={"http://github.com./GuMunhoz.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Gustavo Alves"}
              picture={""}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Nego do Borel"}
              picture={""}
              rating={1}
              description={"São Paulo"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
