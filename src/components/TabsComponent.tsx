import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import menudata from "../data/menudata.json";
import { MenuComponent } from "../components/MenuComponent";

export function TabsComponent() {
  const [key, setKey] = useState('beverages');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mt-5 w-75 mx-auto"
    >
      <Tab eventKey="beverages" title="Beverages"  className="">
      <MenuComponent menuData={menudata} />
      </Tab>
      <Tab eventKey="sweets" title="Sweets">
        <MenuComponent menuData={menudata} />
      </Tab>
      <Tab eventKey="savories" title="Savories">
      <MenuComponent menuData={menudata} />
      </Tab>
    </Tabs>
  );
}