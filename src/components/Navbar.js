import React, { useState } from "react";
import { Input, Menu, MenuHeader } from "semantic-ui-react";
import { useRouter } from "next/router";

const Navbar = () => {
  // const [activeItem, setActiveItem] = useState("home");
  const router = useRouter();
  // const [selectedlang, setSelectedlang] = useState(router.query.locale ? router.query.locale : 'en')

  // const handleItemClick = (e, { name }) => {
  //   setActiveItem(name);
  //   router.push(`/`);
  // };

  // const countryOptions = [
  //     { key: 'en', value: 'en', flag: 'gb eng', text: 'English' },
  //     { key: 'de', value: 'de', flag: 'de', text: 'German' },
  // ];

  // const handleChange = (event, data) => {
  //     router.push(`/${data.value}`)
  //     setSelectedlang(data.value)
  // }

  // console.log('LOCALE', router.query.locale)

  // return (
  //   <Menu secondary>
  //     <Menu.Item
  //       name="home"
  //       active={activeItem === "home"}
  //       onClick={handleItemClick}
  //     />
  //     <Menu.Item
  //       name="assets"
  //       active={activeItem === "assets"}
  //       onClick={handleItemClick}
  //     />
  //     <Menu.Menu position="right">
  //       <Menu.Item>
  //         <Input icon="search" placeholder="Search..." />
  //       </Menu.Item>
  //       {/* <Menu.Item>
  //                   <Dropdown
  //                       placeholder='Change Locale'
  //                       fluid
  //                       selection
  //                       defaultValue={selectedlang}
  //                       options={countryOptions}
  //                       onChange={handleChange}
  //                   />
  //               </Menu.Item> */}
  //     </Menu.Menu>
  //   </Menu>
  // );

  return (
    <Menu style={{ height: '5rem', padding: '0.5rem', color: 'white', background: '#00B1F6' }}>
      <h1 style={{ fontWeight: 900, fontSize: '2.5em', marginLeft: '15rem', cursor: 'pointer' }} onClick={() => router.push(`/${router.query.locale}`)}>Open GIS Curriculum</h1>
    </Menu>
  )
};

export default Navbar;
