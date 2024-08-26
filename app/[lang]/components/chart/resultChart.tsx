import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ["0", "63", "125", "250", "500", "1000", "2000", "4000", "8000"];

const NCData = [
  [null, 47, 36, 29, 22, 17, 14, 12, 11],
  [null, 51, 40, 33, 26, 22, 19, 17, 16],
  [null, 54, 44, 37, 31, 27, 24, 22, 21],
  [null, 57, 48, 41, 35, 31, 29, 28, 27],
  [null, 60, 52, 45, 40, 36, 34, 33, 32],
  [null, 64, 56, 50, 45, 41, 39, 38, 37],
  [null, 67, 60, 54, 49, 46, 44, 43, 42],
  [null, 71, 64, 58, 54, 51, 49, 48, 47],
  [null, 74, 67, 62, 58, 56, 54, 53, 52],
  [null, 77, 71, 67, 63, 61, 59, 58, 57],
  [null, 80, 75, 71, 68, 66, 64, 63, 62],
];
const NCLastValue = [11, 16, 21, 27, 32, 37, 42, 47, 52, 57, 62];
const hearing = [57, 37, 23, 14, 10];

const rightLabels = [
  "NC-15",
  "NC-20",
  "NC-25",
  "NC-30",
  "NC-35",
  "NC-40",
  "NC-45",
  "NC-50",
  "NC-55",
  "NC-60",
  "NC-65",
];

// const customPlugin = {
//   id: "customPlugin",
//   beforeDraw: function (chart: any) {
//     const ctx = chart.ctx;
//     const chartArea = chart.chartArea;
//     const x = chartArea.left + 30;
//     const y = chartArea.left + (chartArea.bottom - chartArea.top) / 2;

//     ctx.save();
//     ctx.font = "bold 12px Arial";
//     ctx.fillStyle = "gray";
//     ctx.textAlign = "center";

//     ctx.fillText(`Approximate Hearing Threshold`, x, y);
//     ctx.beginPath();
//     ctx.moveTo(x, y - 40);
//     ctx.lineTo(x - 10, y - 20);
//     ctx.lineTo(x + 10, y - 20);
//     ctx.closePath();
//     ctx.fillStyle = "gray";
//     ctx.fill();

//     ctx.restore();
//   },
// };

const ResultChart = ({ simulateData, t }: any) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 1,
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: {
        // position: "bottom",
        display: false,
      },
      tooltip: {
        // enabled: false,
        // external: (context: any) => externalTooltipHandler(context, type, props, unitData, t),
        bodyFont: { size: 15 },
        filter: function (tooltipItem: any) {
          return tooltipItem.dataset.label !== "hidden";
        },
      },
    },
    hover: {
      mode: null,
    } as any,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: t("NOISE_0008"),
        },
      },
      y: {
        type: "linear" as "linear",
        min: 10,
        max: 80,
        ticks: { autoSkip: true, stepSize: 5 },
        title: {
          display: true,
          text: t("NOISE_0009"),
        },
      },
      y2: {
        type: "linear" as "linear",
        position: "right" as any,
        min: 10,
        max: 80,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          stepSize: 1,
          callback: function (value: number, index: number) {
            if (value === 11) {
              return rightLabels[0];
            } else if (value === 16) {
              return rightLabels[1];
            } else if (value === 21) {
              return rightLabels[2];
            } else if (value === 27) {
              return rightLabels[3];
            } else if (value === 32) {
              return rightLabels[4];
            } else if (value === 37) {
              return rightLabels[5];
            } else if (value === 42) {
              return rightLabels[6];
            } else if (value === 47) {
              return rightLabels[7];
            } else if (value === 52) {
              return rightLabels[8];
            } else if (value === 57) {
              return rightLabels[9];
            } else if (value === 62) {
              return rightLabels[10];
            }

            // if (NCLastValue.includes(value)) {
            //   return rightLabels[index];
            // }
          },
        } as any,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "sound pressure level",
        data: simulateData,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        lineTension: 0, //선 곡선모양 0이면 직선
      },
      {
        label: "hidden",
        data: NCData[0],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[1],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[2],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[3],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[4],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[5],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[6],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[7],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[8],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[9],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[10],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        label: "hidden",
        data: NCData[11],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(95, 87, 87)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        yAxisID: "y2",
      },
      {
        id: "hearing",
        label: "hidden",
        data: hearing,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(95, 87, 87)",
        borderWidth: 1,
        pointRadius: 0, // 0일 경우 포인트 삭제
        lineTension: 0.1, // 꺾임 정도(?)
        borderDash: [5, 4],
      },
    ],
  };

  return (
    <div className="relative mt-[1.25rem] mobile:mt-[1.25rem] w-[29rem] h-[24.5rem] mobile:w-full ">
      <Line
        options={options}
        data={data}
        //  plugins={[customPlugin]}
      />
    </div>
  );
};

export default ResultChart;
