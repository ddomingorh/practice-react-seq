import React from "react";
import ForgeReconciler, { Tabs, TabList, Tab, TabPanel } from "@forge/react";
import { InputForm } from "./components/InputForm";
import { QueryForm } from "./components/QueryForm";

export const App = () => (
  <Tabs id="default">
    <TabList>
      <Tab>Input guest</Tab>
      <Tab>Search guest</Tab>
    </TabList>
    <TabPanel>
      <InputForm />
    </TabPanel>
    <TabPanel>
      <QueryForm />
    </TabPanel>
  </Tabs>
);

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
