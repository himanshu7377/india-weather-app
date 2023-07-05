// import React, { useState } from 'react';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// // GeoJSON data for India
// // import india from './india.json';

// const IndiaMap = () => {
//   const [selectedState, setSelectedState] = useState(null);

//   const handleStateClick = (geography) => {
//     setSelectedState(geography.properties.st_nm);
//   };

//   return (
//     <div>
//       <h2>India Map</h2>
//       <ComposableMap
//         projectionConfig={{
//           scale: 600,
//           center: [78.9629, 22.5937], // Center coordinates of India
//         }}
//       >
//         <Geographies geography={india}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 onClick={() => handleStateClick(geo)}
//                 style={{
//                   default: {
//                     fill: '#D6D6DA',
//                     stroke: '#FFFFFF',
//                     strokeWidth: 0.5,
//                     outline: 'none',
//                   },
//                   hover: {
//                     fill: '#F53',
//                     stroke: '#FFFFFF',
//                     strokeWidth: 0.5,
//                     outline: 'none',
//                   },
//                   pressed: {
//                     fill: '#E42',
//                     stroke: '#FFFFFF',
//                     strokeWidth: 0.5,
//                     outline: 'none',
//                   },
//                 }}
//               />
//             ))
//           }
//         </Geographies>
//       </ComposableMap>
//       {selectedState && (
//         <div>
//           <h3>{selectedState}</h3>
//           {/* Render your separate React Map component here for the selected state */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default IndiaMap;
