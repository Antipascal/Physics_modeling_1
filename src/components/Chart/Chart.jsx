import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const convertToArray = (object) => {
  const keyArray = [], valueArray = [];
  for (const el in object) {
    keyArray.push(el);
    valueArray.push(object[el]);
  }
  return [keyArray, valueArray];
}

const LineChart = ({ data }) => {
  let { aPlot, sPlot, vPlot } = data;
  aPlot = convertToArray(aPlot);
  sPlot = convertToArray(sPlot);
  vPlot = convertToArray(vPlot);
  return (
    <div className="chart">
      <Line
        data={{
        // x-axis label values
        labels: aPlot[0],
        datasets: [
          {
              label: "",
              // y-axis data plotting values
              data: aPlot[1],
              fill: false,
              borderWidth: 2,
              backgroundColor: "#f8b500",
              borderColor: '#000',
              responsive: true
            },
          ],
        }}
      />  
      <Line
        data={{
        // x-axis label values
        labels: sPlot[0],
        datasets: [
          {
              label: "",
              // y-axis data plotting values
              data: sPlot[1],
              fill: false,
              borderWidth: 2,
              backgroundColor: "#f8b500",
              borderColor: '#000',
              responsive: true
            },
          ],
        }}
      />  
      <Line
        data={{
        // x-axis label values
        labels: vPlot[0],
        datasets: [
          {
              label: "",
              // y-axis data plotting values
              data: vPlot[1],
              fill: false,
              borderWidth: 2,
              backgroundColor: "#f8b500",
              borderColor: '#000',
              responsive: true
            },
          ],
        }}
      />  
    </div>
  );
};

export default LineChart;