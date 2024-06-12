// // Chakra imports
// import {
//   Box,
//   Button,
//   Flex,
//   Icon,
//   Text,
//   Select,
//   useColorModeValue,
// } from "@chakra-ui/react";
// // Custom components
// import Card from "components/card/Card.js";
// import LineChart from "components/charts/LineChart";
// import React from "react";
// import { IoCheckmarkCircle } from "react-icons/io5";
// import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// // Assets
// import { RiArrowUpSFill } from "react-icons/ri";
// import {
//   lineChartDataTotalSpent,
//   lineChartOptionsTotalSpent,
// } from "variables/charts";
// import { useEffect, useState } from "react";
// import axios from 'axios';

// export default function TotalSpent(props) {
//   const { ...rest } = props;


//   // Chakra Color Mode

//   const textColor = useColorModeValue("secondaryGray.900", "white");
//   const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
//   const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
//   const iconColor = useColorModeValue("brand.500", "white");
//   const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
//   const[chartData,setChartData] = useState([]);

//   const bgHover = useColorModeValue(
//     { bg: "secondaryGray.400" },
//     { bg: "whiteAlpha.50" }
//   );
//   const bgFocus = useColorModeValue(
//     { bg: "secondaryGray.300" },
//     { bg: "whiteAlpha.100" }
//   );

//   useEffect(() => {
//     const postData = async() => {
//       const data = {
//          Name:"c2VsZWN0ICogZnJvbSAoc2VsZWN0IGNvdW50KCopIENvdXN0cywnTG9naW4nIFR5cGUsCkRBVEVOQU1FKG1vbnRoLERBVEVBREQobW9udGgsIERBVEVQQVJUKE1PTlRILERhdGVDcmVhdGVkKS0xLCBDQVNUKCcyMDA4LTAxLTAxJyBBUyBkYXRldGltZSkpKSBtb250aHMKZnJvbSBVc2VyTWFzdGVyIHdoZXJlIEF2YWlsYWJpbGl0eVRvSm9pbiBpcyBub3QgbnVsbApncm91cCBieSBEYXRlQ3JlYXRlZAp1bmlvbiBzZWxlY3QgY291bnQoKikgQ291c3RzLCdSZWdpc3RyYXRpb24nIFR5cGUsIERBVEVOQU1FKG1vbnRoLERBVEVBREQobW9udGgsIERBVEVQQVJUKE1PTlRILERhdGVDcmVhdGVkKS0xLCBDQVNUKCcyMDA4LTAxLTAxJyBBUyBkYXRldGltZSkpKSAgbW9udGhzCmZyb20gVXNlck1hc3RlciAKZ3JvdXAgYnkgRGF0ZUNyZWF0ZWQKKSB0"
//       };
//       try{
//         const response = await axios.post('https://jobpartal-backend.onrender.com/api/Login/Registration/detail');
//         //const JobApplied = response.data.Response;
           
//         // Calculate total applied applications
//           const ChartsData = response.data.Response;
        
//           setChartData(ChartsData);
//       }catch(err){
//        // setError(err);
//       }finally{
//         //setLoading(false);
//       }
//     }
//     postData();
//   },[])
//   console.log("wdsd",chartData);

//   const lineChartOptionsTotalSpent = {
//     chart: {
//       toolbar: {
//         show: false,
//       },
//       dropShadow: {
//         enabled: true,
//         top: 13,
//         left: 0,
//         blur: 10,
//         opacity: 0.1,
//         color: "#4318FF",
//       },
//     },
//     colors: ["#4318FF", "#39B8FF"],
//     markers: {
//       size: 0,
//       colors: "white",
//       strokeColors: "#7551FF",
//       strokeWidth: 3,
//       strokeOpacity: 0.9,
//       strokeDashArray: 0,
//       fillOpacity: 1,
//       discrete: [],
//       shape: "circle",
//       radius: 2,
//       offsetX: 0,
//       offsetY: 0,
//       showNullDataPoints: true,
//     },
//     tooltip: {
//       theme: "dark",
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//       type: "line",
//     },
//     xaxis: {
//       type: "numeric",
//       //categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
//       categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
//       labels: {
//         style: {
//           colors: "#A3AED0",
//           fontSize: "12px",
//           fontWeight: "500",
//         },
//       },
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     yaxis: {
//       show: false,
//     },
//     legend: {
//       show: false,
//     },
//     grid: {
//       show: false,
//       column: {
//         color: ["#7551FF", "#39B8FF"],
//         opacity: 0.5,
//       },
//     },
//     color: ["#7551FF", "#39B8FF"],
//   };

//   return (
//     <Card
//       justifyContent='center'
//       align='center'
//       direction='column'
//       w='100%'
//       mb='0px'
//       {...rest}>
//       <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
//         <Flex align='center' w='100%'>
//           {/* <Button
//             bg={boxBg}
//             fontSize='sm'
//             fontWeight='500'
//             color={textColorSecondary}
//             borderRadius='7px'>
//             <Icon
//               as={MdOutlineCalendarToday}
//               color={textColorSecondary}
//               me='4px'
//             />
//             This Year
//           </Button> */}
//           {/* <Button
//             ms='auto'
//             align='center'
//             justifyContent='center'
//             bg={bgButton}
//             _hover={bgHover}
//             _focus={bgFocus}
//             _active={bgFocus}
//             w='37px'
//             h='37px'
//             lineHeight='100%'
//             borderRadius='10px'
//             {...rest}>
//             <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
//           </Button> */}
//           {/* <Select
//           fontSize='sm'
//           variant='subtle'
//           defaultValue='monthly'
//           width='unset'
//           fontWeight='700'>
//           <option value='daily'>Daily</option>
//           <option value='weekly'>Weekly</option>
//           <option value='monthly'>Monthly</option>
//           <option value='yearly'>Yearly</option>
//         </Select> */}
//         </Flex>
//       </Flex>
//       <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
//         <Flex flexDirection='column' me='20px' mt='28px'>
//           <Text
//             color={textColor}
//             fontSize='34px'
//             textAlign='start'
//             fontWeight='700'
//             lineHeight='100%'>
            
//           </Text>
//           {/* <Flex align='center' mb='20px'>
//             <Text
//               color='secondaryGray.600'
//               fontSize='sm'
//               fontWeight='500'
//               mt='4px'
//               me='12px'>
//               Total Spent
//             </Text>
//             <Flex align='center'>
//               <Icon as={RiArrowUpSFill} color='green.500' me='2px' mt='2px' />
//               <Text color='green.500' fontSize='sm' fontWeight='700'>
//                 +2.45%
//               </Text>
//             </Flex>
//           </Flex> */}

//           {/* <Flex align='center'>
//             <Icon as={IoCheckmarkCircle} color='green.500' me='4px' />
//             <Text color='green.500' fontSize='md' fontWeight='700'>
//               On track
//             </Text>
//           </Flex> */}
//         </Flex>
//         <Box minH='260px' minW='100%' mt='auto'>
//           <LineChart
//             chartData={lineChartDataTotalSpent}
//             chartOptions={lineChartOptionsTotalSpent}
//           />
//         </Box>
//       </Flex>
//     </Card>
//   );
// }

import {
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function TotalSpent(props) {
  const { ...rest } = props;

  const textColor = useColorModeValue("secondaryGray.900", "white");

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        Name: "c2VsZWN0ICogZnJvbSAoc2VsZWN0IGNvdW50KCopIENvdXN0cywnTG9naW4nIFR5cGUsCkRBVEVOQU1FKG1vbnRoLERBVEVBREQobW9udGgsIERBVEVQQVJUKE1PTlRILERhdGVDcmVhdGVkKS0xLCBDQVNUKCcyMDA4LTAxLTAxJyBBUyBkYXRldGltZSkpKSBtb250aHMKZnJvbSBVc2VyTWFzdGVyIHdoZXJlIEF2YWlsYWJpbGl0eVRvSm9pbiBpcyBub3QgbnVsbApncm91cCBieSBEYXRlQ3JlYXRlZAp1bmlvbiBzZWxlY3QgY291bnQoKikgQ291c3RzLCdSZWdpc3RyYXRpb24nIFR5cGUsIERBVEVOQU1FKG1vbnRoLERBVEVBREQobW9udGgsIERBVEVQQVJUKE1PTlRILERhdGVDcmVhdGVkKS0xLCBDQVNUKCcyMDA4LTAxLTAxJyBBUyBkYXRldGltZSkpKSAgbW9udGhzCmZyb20gVXNlck1hc3RlciAKZ3JvdXAgYnkgRGF0ZUNyZWF0ZWQKKSB0"
      };
      try {
        const response = await axios.post('https://jobpartal-backend.onrender.com/api/Login/Registration/detail', data);
        const datas = response.data.Response;

        // Process data to structure it for the line chart
        const loginData = [];
        const registrationData = [];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        months.forEach(month => {
          const loginCount = datas.filter(item => item.Type === "Login" && item.months === month)
                                 .reduce((acc, curr) => acc + parseInt(curr.Cousts), 0);
          const registrationCount = datas.filter(item => item.Type === "Registration" && item.months === month)
                                        .reduce((acc, curr) => acc + parseInt(curr.Cousts), 0);
          console.log("fdfdc",loginCount);
          loginData.push(loginCount);
          registrationData.push(registrationCount);
        });

    

        setChartData([
          {
            name: "Logins",
            data: loginData,
          },
          {
            name: "Registrations",
            data: registrationData,
          },
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const lineChartOptionsTotalSpent = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 13,
        left: 0,
        blur: 10,
        opacity: 0.1,
        color: "#4318FF",
      },
    },
    colors: ["#4318FF", "#39B8FF"],
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "#7551FF",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      type: "line",
    },
    xaxis: {
      type: "category",
      categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
        formatter: function (value) {
          // Round the value to remove decimal points
          return Math.round(value);
        },
      },
    },
    legend: {
      show: true,
    },
    grid: {
      show: true,
      borderColor: "#E9ECEF",
      strokeDashArray: 5,
    },
    color: ["#7551FF", "#39B8FF"],
  };

  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}>
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
        <Flex align='center' w='100%'>
          {/* Additional UI components can be added here */}
        </Flex>
      </Flex>
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection='column' me='20px' mt='28px'>
          {/* <Text
            color={textColor}
            fontSize='20px'
            textAlign='start'
            lineHeight='50%'>
            Monthly
          </Text> */}
        </Flex>
        <Box minH='260px' minW='100%' mt='auto'>
          {chartData.length > 0 && (
            <LineChart
              chartData={chartData}
              chartOptions={lineChartOptionsTotalSpent}
            />
          )}
        </Box>
      </Flex>
    </Card>
  );
}
