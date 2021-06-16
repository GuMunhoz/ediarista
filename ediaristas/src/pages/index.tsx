import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/pageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

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
    </div>
  );
}
