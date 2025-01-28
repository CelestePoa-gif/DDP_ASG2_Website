
const busData = [
  {
    "ServiceNo": "151",
    "NextBus_DestinationCode": "64009",
    "NextBus_EstimatedArrival": "2025-01-28T07:28:37+08:00",
    "NextBus_Feature": "WAB",
    "NextBus_Latitude": "1.324064",
    "NextBus_Load": "SEA",
    "NextBus_Longitude": "103.7722645",
    "NextBus_Monitored": "1",
    "WD_FirstBus": "0615",
    "WD_LastBus": "0024",
    "StopSequence": "17"
  },
  {
    "ServiceNo": "154",
    "NextBus_DestinationCode": "82009",
    "NextBus_EstimatedArrival": "2025-01-28T07:27:14+08:00",
    "NextBus_Feature": "WAB",
    "NextBus_Latitude": "1.3262216666666666",
    "NextBus_Load": "SDA",
    "NextBus_Longitude": "103.775344",
    "NextBus_Monitored": "1",
    "WD_FirstBus": "0605",
    "WD_LastBus": "0004",
    "StopSequence": "4"
  },
  {
    "ServiceNo": "74",
    "NextBus_DestinationCode": "64009",
    "NextBus_EstimatedArrival": "2025-01-28T07:30:16+08:00",
    "NextBus_Feature": "WAB",
    "NextBus_Latitude": "1.3219553333333334",
    "NextBus_Load": "SEA",
    "NextBus_Longitude": "103.7709615",
    "NextBus_Monitored": "1",
    "WD_FirstBus": "0519",
    "WD_LastBus": "0013",
    "StopSequence": "10"
  },
  {
    "ServiceNo": "52",
    "NextBus_DestinationCode": "53009",
    "NextBus_EstimatedArrival": "2025-01-28T07:32:43+08:00",
    "NextBus_Feature": "WAB",
    "NextBus_Latitude": "1.3145674999999999",
    "NextBus_Load": "SEA",
    "NextBus_Longitude": "103.77189516666667",
    "NextBus_Monitored": "1",
    "WD_FirstBus": "0627",
    "WD_LastBus": "0106",
    "StopSequence": "40"
  }
];

// Function to render the bus information
const renderBusInfo = () => {
  const busList = document.getElementById('bus-list');

  busData.forEach(bus => {
    const busCard = document.createElement('div');
    busCard.className = 'bus-card';


    busCard.innerHTML = 
    `<h4>Service No: ${bus.ServiceNo}</h4>
    <p><strong>Load:</strong> <span class="${bus.NextBus_Load === 'SEA' ? 'highlight' : ''}">${bus.NextBus_Load}</span></p>
    <p><strong>Feature:</strong> ${bus.NextBus_Feature}</p>
    <p><strong>Stop Sequence:</strong> ${bus.StopSequence}</p>
    <p><strong>First Bus (Weekdays):</strong> ${bus.WD_FirstBus}</p>
    <p><strong>Last Bus (Weekdays):</strong> ${bus.WD_LastBus}</p>
    <p><strong>Destination Code:</strong> ${bus.NextBus_DestinationCode}</p>
    <p><strong>Next Arrival:</strong> ${new Date(bus.NextBus_EstimatedArrival).toLocaleString()}</p>
    <p><strong>Coordinates:</strong> (${bus.NextBus_Latitude}, ${bus.NextBus_Longitude})</p>`
    ;


    busList.appendChild(busCard);
  });
};

// Call the function to render the bus info
renderBusInfo();