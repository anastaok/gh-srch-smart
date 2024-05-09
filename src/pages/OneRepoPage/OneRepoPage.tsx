import { observer } from "mobx-react-lite";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TRepository } from "../../types/types";
import { Layout } from "../../components/Layout";
import { OneRepo } from "../../components/OneRepo";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { REPOSITORY_NOT_FOUND } from "../../constants/pages-constants";

import store from "../../store/store";

export const OneRepoPage = observer(() => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openCardInfo } = store;

  const [card, setCard] = useState<TRepository | null | undefined>(null);

  useEffect(() => {
    const currentCard = openCardInfo(Number(id));
    setCard(currentCard);
  }, [id, openCardInfo]);

  const handleNavigate = useCallback(() => {
    navigate("/");
  }, [navigate]);

  if (!card) {
    return <div>{REPOSITORY_NOT_FOUND}</div>;
  }

  return (
    <Layout>
      <Header>
        <Button onClick={handleNavigate} title="Back" />
        {card?.owner.login || "Name"}
      </Header>
      <OneRepo key={id} card={card} />
    </Layout>
  );
});
