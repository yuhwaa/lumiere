import React from "react";

type MenuComponentProps = {
    menuData: {
      item: string;
      price: string;
      }[];
  };

export function MenuComponent({menuData} : MenuComponentProps) {
  return (
     <>
     
      <table className="table table-hover w-75 mx-auto pl-16">
        <thead>
          {/* <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
          </tr> */}
        </thead>
        <tbody>
          {menuData.map((item, i) => (
            <tr key={i}>
              <td className="">{item.item}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>   

    </>
   )
}