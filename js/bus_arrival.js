// JSON data (same as provided earlier)
// JSON data
const busData = [
    {
      "ServiceNo": "184",
      "NextBus_DestinationCode": "44989",
      "NextBus_EstimatedArrival": "2025-01-25T09:19:41+08:00",
      "NextBus_Feature": "WAB",
      "NextBus_Latitude": "1.3175301666666668",
      "NextBus_Load": "SEA",
      "NextBus_Longitude": "103.77139033333333",
      "NextBus_Monitored": "1",
      "SAT_FirstBus": "0615",
      "SAT_LastBus": "0023",
      "StopSequence": "17"
    },
    {
      "ServiceNo": "61",
      "NextBus_DestinationCode": "43009",
      "NextBus_EstimatedArrival": "2025-01-25T09:19:22+08:00",
      "NextBus_Feature": "WAB",
      "NextBus_Latitude": "1.3194533333333334",
      "NextBus_Load": "SEA",
      "NextBus_Longitude": "103.772894",
      "NextBus_Monitored": "1",
      "SAT_FirstBus": "06:05",
      "SAT_LastBus": "00:03",
      "StopSequence": "4"
    },
    {
      "ServiceNo": "75",
      "NextBus_DestinationCode": "44989",
      "NextBus_EstimatedArrival": "2025-01-25T09:22:10+08:00",
      "NextBus_Feature": "WAB",
      "NextBus_Latitude": "1.3190436666666667",
      "NextBus_Load": "SEA",
      "NextBus_Longitude": "103.78242666666667",
      "NextBus_Monitored": "1",
      "SAT_FirstBus": "05:19",
      "SAT_LastBus": "00:14",
      "StopSequence": "10"
    }
  ];
  
  // Function to render the bus information
  const renderBusInfo = () => {
    const busList = document.getElementById('bus-list');
  
    busData.forEach(bus => {
      const busCard = document.createElement('div');
      busCard.className = 'bus-card';
  
      busCard.innerHTML = `
        <h4>Service No: ${bus.ServiceNo}</h4>
        <p><strong>Destination Code:</strong> ${bus.NextBus_DestinationCode}</p>
        <p><strong>Next Arrival:</strong> ${new Date(bus.NextBus_EstimatedArrival).toLocaleString()}</p>
        <p><strong>Feature:</strong> ${bus.NextBus_Feature}</p>
        <p><strong>Coordinates:</strong> (${bus.NextBus_Latitude}, ${bus.NextBus_Longitude})</p>
        <p><strong>Load:</strong> <span class="${bus.NextBus_Load === 'SEA' ? 'highlight' : ''}">${bus.NextBus_Load}</span></p>
        <p><strong>Stop Sequence:</strong> ${bus.StopSequence}</p>
        <p><strong>First Bus (Sat):</strong> ${bus.SAT_FirstBus}</p>
        <p><strong>Last Bus (Sat):</strong> ${bus.SAT_LastBus}</p>
      `;
  
      busList.appendChild(busCard);
    });
  };
  
  // Call the function to render the bus info
  renderBusInfo();
  