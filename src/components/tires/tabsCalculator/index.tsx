import React, { useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { SocialActionCreators } from "../../../store/reducers/socials/action-creators";
import { useDispatch } from "react-redux";

interface Props {
  sweetCoin: string;
  disableTab: boolean;
  setCard: (val: any) => void;
  changeCardHandler: (card: string, num: number) => void;
  setSweetCoin: (sweetCoin: string) => void;
  setDisableInput: (disableInput: boolean) => void;
  setDisableTab: (disabled: boolean) => void;
}

export default function TabsCalculator({
  setCard,
  changeCardHandler,
  setSweetCoin,
  disableTab,
  setDisableInput,
  setDisableTab
}: Props) {
  const dispatch = useDispatch();
  changeCardHandler = (card: string, num: number) => {
    dispatch(SocialActionCreators.setSliderIndex(num));
    setCard(card);
    setSweetCoin(String(""));
    setDisableInput(true);
    setDisableTab(false);
  };
  useEffect(() => {
    dispatch(SocialActionCreators.setDiasbeldTab(disableTab));
  }, [disableTab]);
  return (
    <div className={`tabs-calc ${disableTab ? "disabledActive" : ""}`}>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab onClick={() => changeCardHandler("The Skater", 0)}>Choco</Tab>
          <Tab onClick={() => changeCardHandler("Baby Dragon", 1)}>Frodo</Tab>
          <Tab onClick={() => changeCardHandler("The Punk", 2)}>Hugo</Tab>
        </TabList>
      </Tabs>
    </div>
  );
}
