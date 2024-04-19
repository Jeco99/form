// "use client";

// import { Box } from "@mantine/core";
// import { useParams } from "next/navigation";
// import { useEffect } from "react";
// import { DisplayIndividualForm } from "./action";

// export default function FormCard() {
//   const params = useParams();
//   const a1 = JSON.stringify(params);

//   console.log(a1);
//   const a2: string | undefined = params?.id.toLocaleString();
//   console.log(a2);
//   useEffect(() => {
//     const fetch_individual_data = async () => {
//       const data = await DisplayIndividualForm(a2);
//       console.log(data);
//     };
//     fetch_individual_data();
//   }, []);

//   return (
//     <>
//       <Box style={{ border: "1px solid black" }}>
//         <button>Delete- not work</button>
//         <h1>form name</h1>
//         <p>form_description</p>

//         <div>
//           <label htmlFor="">
//             <span>items.field_order</span>
//             items.field_label
//           </label>
//           <input type="text" />
//         </div>
//       </Box>
//     </>
//   );
// }
