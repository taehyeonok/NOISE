"use client";
import IG_CONC_PATTERN from "@/app/assets/images/cement-texture2.png";
import React, {
  useState,
  useEffect,
  MouseEventHandler,
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";

const Noisetools = forwardRef((props: any, ref) => {
  //export default function Noisetools(props: any) {
  useImperativeHandle(
    ref,
    () => {
      return {
        setHorizontalDistance(dist: number) {
          // setReceiverData({
          //   distFromSource: dist,
          //   fromRight: receiverDataRef.current.fromRight,
          //   height: receiverDataRef.current.height,
          // });

          // setSourceData({
          //   fromLeft: sourceDataRef.current.fromLeft,
          //   height: sourceDataRef.current.height,
          // });

          // setBarrier1Data({
          //   distFromSource: barrier1DataRef.current.distFromSource,
          //   height: barrier1DataRef.current.height,
          //   enabled: barrier1DataRef.current.enabled,
          // });

          // setLinePathSToR(
          //   `${getObjectCoord(FIELD_OBJECT.Source, "X")}, ${getObjectCoord(
          //     FIELD_OBJECT.Source,
          //     "Y"
          //   )}, ${getObjectCoord(FIELD_OBJECT.Receiver, "X")}, ${getObjectCoord(
          //     FIELD_OBJECT.Receiver,
          //     "Y"
          //   )}`
          // );
          setHorizontalDistance(dist);
        },
        setBarrierFromSource(val: number) {
          setBarrier1Data({
            distFromSource: val,
            height: barrier1DataRef.current.height,
            enabled: barrier1DataRef.current.enabled,
          });
        },
        setBarrierHeight(val: number) {
          setBarrier1Data({
            distFromSource: barrier1DataRef.current.distFromSource,
            height: val,
            enabled: barrier1DataRef.current.enabled,
          });
        },
        setBarrierEnable(val: boolean) {
          setBarrier1Data({
            distFromSource: barrier1DataRef.current.distFromSource,
            height: barrier1DataRef.current.height,
            enabled: val,
          });
        },
        setSourceHeight(val: number) {
          if (val * 2.5 > receiverDataRef.current.distFromSource) {
            //let ar = parentRef.current?.style.getPropertyValue("aspect-ratio");
            //parentRef.current?.style.setProperty("aspect-ratio", `${1100/ 700}`)
            //fieldData.current.width = sz!.width;
            //fieldData.current.height = 700;
            //setFieldRect(`0 0 ${fieldData.current.width} ${fieldData.current.height}`);
            //RecalcFiledPos(1800, 1100);
          }

          setSourceData({
            fromLeft: sourceDataRef.current.fromLeft,
            height: val,
          });
        },
        setReceiverHeight(val: number) {
          setReceiverData({
            distFromSource: receiverDataRef.current.distFromSource,
            fromRight: receiverDataRef.current.fromRight,
            height: val,
          });
        },
        setUnit(val: string) {
          distanceUnit.current = val;
          drawSoundWaves();
        },
        scrollIntoView(val: number) {
          // console.log("scrollIntoView");
        },
      };
    },
    []
  );

  function setHorizontalDistance(dist: number) {
    setReceiverData({
      distFromSource: dist,
      fromRight: receiverDataRef.current.fromRight,
      height: receiverDataRef.current.height,
    });

    setSourceData({
      fromLeft: sourceDataRef.current.fromLeft,
      height: sourceDataRef.current.height,
    });

    setBarrier1Data({
      distFromSource: barrier1DataRef.current.distFromSource,
      height: barrier1DataRef.current.height,
      enabled: barrier1DataRef.current.enabled,
    });

    setLinePathSToR(
      `${getObjectCoord(FIELD_OBJECT.Source, "X")}, ${getObjectCoord(
        FIELD_OBJECT.Source,
        "Y"
      )}, ${getObjectCoord(FIELD_OBJECT.Receiver, "X")}, ${getObjectCoord(
        FIELD_OBJECT.Receiver,
        "Y"
      )}`
    );
  }

  const heightBackgroundColor = "#FFFFFF";

  const PICKERS = {
    None: 0,
    Source: 1,
    Receiver: 2,
    Barrier1: 3,
  } as const;
  type PICKERS = (typeof PICKERS)[keyof typeof PICKERS];

  const FIELD_OBJECT = {
    Source: "SOURCE",
    Receiver: "RECEIVER",
    Barrier1: "BARRIER1",
    LeftWall: "LEFT_WALL",
    RightWall: "RIGHT_WALL",
    HorizontalDistance: "HORIZONTAL_DISTANCE",
  } as const;
  type FIELD_OBJECT = (typeof FIELD_OBJECT)[keyof typeof FIELD_OBJECT];

  const [isLoading, setIsLoading] = useState(true);
  const [soundWaves, setSoundWaves] = useState<any[]>([]);
  const [rulerAreaHight, setRulerAreaHight] = useState(55);
  const [sourceData, setSourceData] = useState({ fromLeft: 4.5, height: props.sourceHeight });
  const [receiverData, setReceiverData] = useState({
    distFromSource: props.horizontalDistance,
    height: props.receiverHeight,
    fromRight: 4.5,
  });
  const [barrier1Data, setBarrier1Data] = useState({
    distFromSource: props.barrierFromSource,
    height: props.barrierHeight,
    enabled: true,
  });
  const [fieldRect, setFieldRect] = useState(`0 0 1100 500`);

  let captured = useRef<number>(PICKERS.None);
  let fieldData = useRef({ width: 1100, height: 500 });
  let captuerPos = useRef({ x: 0, y: 0, fromBottom: 0 });
  let sourceDataRef = useRef({ fromLeft: 4.5, height: props.sourceHeight });
  let receiverDataRef = useRef({
    distFromSource: props.horizontalDistance,
    height: props.receiverHeight,
    fromRight: 4.5,
  });
  let barrier1DataRef = useRef({
    distFromSource: props.barrierFromSource,
    height: props.barrierHeight,
    enabled: true,
  });

  let pxPerMeterXValue = useRef(
    fieldData.current.width /
      (receiverDataRef.current.distFromSource +
        sourceDataRef.current.fromLeft +
        receiverDataRef.current.fromRight)
  );

  let pxPerMeterYValue = useRef(
    fieldData.current.width /
      (receiverDataRef.current.distFromSource +
        sourceDataRef.current.fromLeft +
        receiverDataRef.current.fromRight)
  );

  let wallState = useRef({ leftWall: 1, rightWall: 1 });
  let distanceUnit = useRef(props.distanceUnit === undefined ? "m" : props.distanceUnit);

  const distSourceFromWall = 2.0;
  const wallThickness = 0.5;

  function pxPerMeter() {
    return pxPerMeterXValue.current;
  }

  function pxPerMeterX() {
    return pxPerMeterXValue.current;
  }

  function pxPerMeterY() {
    return pxPerMeterYValue.current;
  }

  function getBarrierHeight(): number {
    return barrier1DataRef.current.enabled === true ? barrier1DataRef.current.height : 0;
  }

  function updateGroup1() {
    pxPerMeterXValue.current =
      fieldData.current.width /
      (receiverData.distFromSource + sourceData.fromLeft + receiverData.fromRight);

    sourceMatrix.current = `matrix(1 0 0 1 ${getObjectCoord(
      FIELD_OBJECT.Source,
      "X"
    )} ${getObjectCoord(FIELD_OBJECT.Source, "Y")})`;

    sourceHUpArrowPts.current = updateSourceHightUpArrowPts();
    sourceHDnArrowPts.current = updateSourceHightDnArrowPts();

    sourceArrowPts.current = updateSourceArrowPts();
    receiverArrowPts.current = updateReceiverArrowPts();

    receiverHUpArrowPts.current = updateReceiverHUpArrowPts();
    receiverHDnArrowPts.current = updateReceiverHDnArrowPts();

    ba1Transform.current = updateBa1Transform();

    barrier1HArrowPts.current = updateBarrier1HArrowPts();

    setBarrierEffectArea();
    setLineSourceToReceiver();
  }

  let sourceMatrix = useRef(
    `matrix(1 0 0 1 ${getObjectCoord(FIELD_OBJECT.Source, "X")} ${getObjectCoord(
      FIELD_OBJECT.Source,
      "Y"
    )})`
  );

  const [rulerAreaMatrix, setRulerAreaMatrix] = useState(
    `matrix(1 0 0 1 0 ${getObjectCoord("RULER-BACKGROUND", "Y")})`
  );

  let sourceArrowPts = useRef(updateSourceArrowPts());
  let receiverArrowPts = useRef(updateReceiverArrowPts());
  let sourceHUpArrowPts = useRef(updateSourceHightUpArrowPts());
  let sourceHDnArrowPts = useRef(updateSourceHightDnArrowPts());
  let receiverHUpArrowPts = useRef(updateReceiverHUpArrowPts());
  let receiverHDnArrowPts = useRef(updateReceiverHDnArrowPts());

  function updateSourceArrowPts() {
    return `${getObjectCoord(FIELD_OBJECT.Source, "X")}, 5, ${
      getObjectCoord(FIELD_OBJECT.Source, "X") + 5
    }, 0, ${getObjectCoord(FIELD_OBJECT.Source, "X") + 5}, 10`;
  }

  function updateReceiverArrowPts() {
    return `${getObjectCoord(FIELD_OBJECT.Receiver, "X") - 5}, 0, ${
      getObjectCoord(FIELD_OBJECT.Receiver, "X") - 5
    }, 10, ${getObjectCoord(FIELD_OBJECT.Receiver, "X") - 5 + 5}, 5`;
  }

  function updateSourceHightUpArrowPts() {
    return `${sourceData.fromLeft * pxPerMeter() - 15}, ${getObjectCoord(
      FIELD_OBJECT.Source,
      "Y"
    )}, 
        ${sourceData.fromLeft * pxPerMeter() - 15 - 5}, ${
      getObjectCoord(FIELD_OBJECT.Source, "Y") + 5
    }, 
        ${sourceData.fromLeft * pxPerMeter() - 15 + 5}, ${
      getObjectCoord(FIELD_OBJECT.Source, "Y") + 5
    }`;
  }

  function updateSourceHightDnArrowPts() {
    return `${sourceData.fromLeft * pxPerMeter() - 15}, ${getObjectCoord("RULER-BACKGROUND", "Y")}, 
    ${sourceData.fromLeft * pxPerMeter() - 15 - 5}, ${getObjectCoord("RULER-BACKGROUND", "Y") - 5}, 
    ${sourceData.fromLeft * pxPerMeter() - 15 + 5}, ${getObjectCoord("RULER-BACKGROUND", "Y") - 5}`;
  }

  function updateReceiverHUpArrowPts() {
    return `${getObjectCoord(FIELD_OBJECT.Receiver, "X")}, ${getObjectCoord(
      FIELD_OBJECT.Receiver,
      "Y"
    )}, 
    ${getObjectCoord(FIELD_OBJECT.Receiver, "X") - 5}, ${
      getObjectCoord(FIELD_OBJECT.Receiver, "Y") + 5
    }, 
    ${getObjectCoord(FIELD_OBJECT.Receiver, "X") + 5}, ${
      getObjectCoord(FIELD_OBJECT.Receiver, "Y") + 5
    }`;
  }

  function updateReceiverHDnArrowPts() {
    return `${getObjectCoord(FIELD_OBJECT.Receiver, "X")}, ${getObjectCoord(
      "RULER-BACKGROUND",
      "Y"
    )}, 
    ${getObjectCoord(FIELD_OBJECT.Receiver, "X") - 5}, ${
      getObjectCoord("RULER-BACKGROUND", "Y") - 5
    }, 
    ${getObjectCoord(FIELD_OBJECT.Receiver, "X") + 5}, ${
      getObjectCoord("RULER-BACKGROUND", "Y") - 5
    }`;
  }

  const [receiverPickerArrowPts, setReceiverPickerArrowPts] = useState(
    `${getObjectCoord(FIELD_OBJECT.Receiver, "X")}, ${getObjectCoord(FIELD_OBJECT.Receiver, "Y")}, 
        ${getObjectCoord(FIELD_OBJECT.Receiver, "X") - 7}, ${
      getObjectCoord(FIELD_OBJECT.Receiver, "Y") + 7
    }, 
        ${getObjectCoord(FIELD_OBJECT.Receiver, "X") + 7}, ${
      getObjectCoord(FIELD_OBJECT.Receiver, "Y") + 7
    }`
  );

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Barrier Arrow & Picker
  // Barrier1
  //const [barrier1HArrowPts, setBarrier1HArrowPts] = useState({
  const barrier1HArrowPts = useRef(updateBarrier1HArrowPts());

  function updateBarrier1HArrowPts() {
    return {
      up: `${getObjectCoord(FIELD_OBJECT.Barrier1, "X")}, ${getObjectCoord(
        FIELD_OBJECT.Barrier1,
        "Y"
      )}, 
        ${getObjectCoord(FIELD_OBJECT.Barrier1, "X") - 5}, ${
        getObjectCoord(FIELD_OBJECT.Barrier1, "Y") + 5
      }, 
        ${getObjectCoord(FIELD_OBJECT.Barrier1, "X") + 5}, ${
        getObjectCoord(FIELD_OBJECT.Barrier1, "Y") + 5
      } 
        `,
      down: `${getObjectCoord(FIELD_OBJECT.Barrier1, "X")}, ${getObjectCoord(
        "RULER-BACKGROUND",
        "Y"
      )}, 
        ${getObjectCoord(FIELD_OBJECT.Barrier1, "X") - 5}, ${
        getObjectCoord("RULER-BACKGROUND", "Y") - 5
      }, 
        ${getObjectCoord(FIELD_OBJECT.Barrier1, "X") + 5}, ${
        getObjectCoord("RULER-BACKGROUND", "Y") - 5
      } 
        `,
    };
  }

  // Barrier's EffectAreaPts
  const [barrierEffectAreaPts, setBarrierEffectAreaPts] = useState({
    Ba1: `${getObjectCoord(FIELD_OBJECT.Barrier1, "X")}, ${getObjectCoord(
      FIELD_OBJECT.Barrier1,
      "Y"
    )},
        ${getObjectCoord(FIELD_OBJECT.Barrier1, "X") + 200}, ${
      getObjectCoord("RULER-BACKGROUND", "Y") - 2
    },
        ${getObjectCoord(FIELD_OBJECT.Barrier1, "X") + 200}, ${
      getObjectCoord("RULER-BACKGROUND", "Y") - 2
    },
        ${getObjectCoord(FIELD_OBJECT.Barrier1, "X")}, ${
      getObjectCoord("RULER-BACKGROUND", "Y") - 2
    }`,
    leftRulerStart: getObjectCoord(FIELD_OBJECT.Source, "X"),
    leftRulerEnd: getObjectCoord(FIELD_OBJECT.Barrier1, "X"),
    leftRulerLength: barrier1Data.distFromSource,
    leftRulerStartArrowPts: `${getObjectCoord(FIELD_OBJECT.Source, "X") + 5}, 2, ${getObjectCoord(
      FIELD_OBJECT.Source,
      "X"
    )}, 5, ${getObjectCoord(FIELD_OBJECT.Source, "X") + 5}, 8`,
    leftRulerEndArrowPts: `${getObjectCoord(FIELD_OBJECT.Barrier1, "X") - 5}, 2, ${getObjectCoord(
      FIELD_OBJECT.Barrier1,
      "X"
    )}, 5, ${getObjectCoord(FIELD_OBJECT.Barrier1, "X") - 5}, 8`,
    rightRulerStart: getObjectCoord(FIELD_OBJECT.Barrier1, "X"),
    rightRulerEnd: fieldData.current.width - sourceData.fromLeft * pxPerMeter(),
    rightRulerLength: receiverData.distFromSource - barrier1Data.distFromSource,
    rightRulerStartArrowPts: `${
      getObjectCoord(FIELD_OBJECT.Barrier1, "X") + 5
    }, 2, ${getObjectCoord(FIELD_OBJECT.Barrier1, "X")}, 5, ${
      getObjectCoord(FIELD_OBJECT.Barrier1, "X") + 5
    }, 8`,
    rightRulerEndArrowPts: `${
      fieldData.current.width - sourceData.fromLeft * pxPerMeter() - 5
    }, 2, ${fieldData.current.width - sourceData.fromLeft * pxPerMeter()}, 5, ${
      fieldData.current.width - sourceData.fromLeft * pxPerMeter() - 5
    }, 8`,
  });

  const [linePathSToR, setLinePathSToR] = useState(
    `${getObjectCoord(FIELD_OBJECT.Source, "X")}, ${getObjectCoord(
      FIELD_OBJECT.Source,
      "Y"
    )}, ${getObjectCoord(FIELD_OBJECT.Receiver, "X")}, ${getObjectCoord(
      FIELD_OBJECT.Receiver,
      "Y"
    )}`
  );

  let ba1Transform = useRef(updateBa1Transform());
  function updateBa1Transform() {
    return `translate(${getObjectCoord(FIELD_OBJECT.Barrier1, "X")}, ${getObjectCoord(
      FIELD_OBJECT.Barrier1,
      "Y"
    )}) rotate(0)`;
  }

  let recvTransform = useRef(updateRecvTransform());
  function updateRecvTransform() {
    return `translate(${getObjectCoord(FIELD_OBJECT.Receiver, "X") - 7}, ${getObjectCoord(
      FIELD_OBJECT.Receiver,
      "Y"
    )}) rotate(0)`;
  }

  let wavesDist = [];
  let field;
  let swaveWidthDistLables = useRef<number[]>([0, 0, 0, 0, 0]);
  let rulerWidthDistLables = useRef<number[]>([0, 0, 0, 0, 0]);
  let prevTouch = useRef<any>(null);

  const topWallLength = 5.0;

  function drawSoundWaves() {
    let newSoundWaves = [];
    let innter = fieldData.current.width / pxPerMeter();

    if (swaveWidthDistLables.current === null) return;

    for (
      let i = 0;
      i < Math.ceil(((fieldData.current.width / pxPerMeter()) * topWallLength) / 2);
      i++
    ) {
      newSoundWaves.push(
        <g key={"swave_V" + i.toString()}>
          <line
            y1={-fieldData.current.height}
            x1={(i * pxPerMeter()) / 2}
            y2={fieldData.current.width}
            x2={(i * pxPerMeter()) / 2}
            stroke={"#EEEEEE"}
            strokeWidth="1"
          />
          <line
            y1={-fieldData.current.height}
            x1={-(i * pxPerMeter()) / 2}
            y2={fieldData.current.width}
            x2={-(i * pxPerMeter()) / 2}
            stroke={"#EEEEEE"}
            strokeWidth="1"
          />
        </g>
      );
    }

    for (
      let i = 0;
      i < Math.ceil(((fieldData.current.height / pxPerMeter()) * topWallLength) / 2);
      i++
    ) {
      newSoundWaves.push(
        <g key={"swave_H" + i.toString()}>
          <line
            x1={-sourceDataRef.current.fromLeft * pxPerMeter()}
            y1={(i * pxPerMeter()) / 2}
            x2={fieldData.current.width}
            y2={(i * pxPerMeter()) / 2}
            stroke={"#EEEEEE"}
            strokeWidth="1"
          />
          <line
            x1={-sourceDataRef.current.fromLeft * pxPerMeter()}
            y1={-(i * pxPerMeter()) / 2}
            x2={fieldData.current.width}
            y2={-(i * pxPerMeter()) / 2}
            stroke={"#EEEEEE"}
            strokeWidth="1"
          />
        </g>
      );

      // newSoundWaves.push(
      //   <g key={"swave" + (i + 1).toString()}>
      //     <circle
      //       key={"swave_circle" + (i + 1).toString()}
      //       id={"swave_circle" + (i + 1).toString()}
      //       cx="0"
      //       cy="0"
      //       r={(i + 1) * pxPerMeter()}
      //       fill="none"
      //       stroke={(i + 1) % 10 === 0 ? "#666666" : "#CCCCCC"}
      //       strokeWidth="1"
      //     />
      //     <rect
      //       key={"swave_dist_box_up" + (i + 1).toString()}
      //       id={"swave_dist_box" + (i + 1).toString()}
      //       x={swaveWidthDistLables.current[(i + 1).toFixed(0).length - 1]! * -0.5}
      //       y={0 + (i + 1) * pxPerMeter() - 6}
      //       width={swaveWidthDistLables.current[Math.floor((i + 1) / 10)]}
      //       height={12}
      //       fill="#FFFFFF"
      //     ></rect>
      //     <text
      //       className={"nts_swave_dist_text"}
      //       key={"swave_dist_up" + (i + 1).toString()}
      //       id={"swave_dist" + (i + 1).toString()}
      //       x="0"
      //       y={(i + 1) * pxPerMeter()}
      //       textAnchor="middle"
      //       alignmentBaseline="middle"
      //     >
      //       {(i + 1).toString() + distanceUnit.current}
      //     </text>
      //     <rect
      //       key={"swave_dist_box_dn" + (i + 1).toString()}
      //       id={"swave_dist_box" + (i + 1).toString()}
      //       x={swaveWidthDistLables.current[(i + 1).toFixed(0).length - 1]! * -0.5}
      //       y={0 + -1 * (i + 1) * pxPerMeter() - 6}
      //       width={swaveWidthDistLables.current[Math.floor((i + 1) / 10)]}
      //       height={12}
      //       fill="#FFFFFF"
      //     >
      //       {" "}
      //     </rect>
      //     <text
      //       className={"nts_swave_dist_text"}
      //       key={"swave_dist_dn" + (i + 1).toString()}
      //       id={"swave_dist" + (i + 1).toString()}
      //       x="0"
      //       y={(i + 1) * pxPerMeter() * -1}
      //       textAnchor="middle"
      //       alignmentBaseline="middle"
      //     >
      //       {(i + 1).toString() + distanceUnit.current}
      //     </text>
      //   </g>
      // );
    }
    setSoundWaves(newSoundWaves);
  }

  ///////////////////////////////////////////////////////////////////////////
  // onload
  useEffect(() => {
    const handleResize = (/*width: number, height: number*/) => {
      console.log(`handleResize pos 1`);
      if (parentRef.current) {
        let sz = parentRef.current.getClientRects()[0];

        RecalcFiledPos(sz!.width, sz!.height);

        // fieldData.current.width = sz!.width;
        // fieldData.current.height = sz!.height;

        // setFieldRect(`0 0 ${fieldData.current.width} ${fieldData.current.height}`);
        // setRulerAreaMatrix(`matrix(1 0 0 1 0 ${getObjectCoord("RULER-BACKGROUND", "Y")})`);

        // pxPerMeterValue.current =
        //   fieldData.current.width /
        //   (receiverData.distFromSource + sourceData.fromLeft + receiverData.fromRight);

        // sourceMatrix.current = `matrix(1 0 0 1 ${getObjectCoord(
        //   FIELD_OBJECT.Source,
        //   "X"
        // )} ${getObjectCoord(FIELD_OBJECT.Source, "Y")})`;

        // setReceiverData({
        //   distFromSource: receiverDataRef.current.distFromSource,
        //   fromRight: receiverDataRef.current.fromRight,
        //   height: receiverDataRef.current.height,
        // });

        // sourceHUpArrowPts.current = updateSourceHightUpArrowPts();
        // sourceHDnArrowPts.current = updateSourceHightDnArrowPts();

        // sourceArrowPts.current = updateSourceArrowPts();
        // receiverArrowPts.current = updateReceiverArrowPts();

        // receiverHUpArrowPts.current = updateReceiverHUpArrowPts();
        // receiverHDnArrowPts.current = updateReceiverHDnArrowPts();

        // setBarrier1Data({
        //   distFromSource: barrier1DataRef.current.distFromSource,
        //   height: barrier1DataRef.current.height,
        //   enabled: barrier1DataRef.current.enabled,
        // });

        // recvTransform.current = updateRecvTransform();

        // drawSoundWaves();
      }
    };

    let m1digit = document.getElementById("m1digit") as unknown as SVGTextElement;
    let m2digit = document.getElementById("m2digit") as unknown as SVGTextElement;
    let m3digit = document.getElementById("m3digit") as unknown as SVGTextElement;

    let dist1digit = document.getElementById("dist1digit") as unknown as SVGTextElement;
    let dist2digit = document.getElementById("dist2digit") as unknown as SVGTextElement;
    let dist3digit = document.getElementById("dist3digit") as unknown as SVGTextElement;

    if (m1digit != null && m2digit != null && m3digit != null) {
      swaveWidthDistLables.current = [];
      swaveWidthDistLables.current.push(m1digit.getBBox()["width"] * 1.4);
      swaveWidthDistLables.current.push(m2digit.getBBox()["width"] * 1.4);
      swaveWidthDistLables.current.push(m3digit.getBBox()["width"] * 1.4);
    }

    if (dist1digit != null && dist2digit != null && dist3digit != null) {
      rulerWidthDistLables.current = [];
      rulerWidthDistLables.current.push(dist1digit.getBBox()["width"] * 1.4);
      rulerWidthDistLables.current.push(dist1digit.getBBox()["width"] * 1.4);
      rulerWidthDistLables.current.push(dist1digit.getBBox()["width"] * 1.4);
    }

    //drawSoundWaves();

    window.addEventListener("mouseup", windowMouseUp);
    window.addEventListener("mousemove", onWindowMouseMove);
    window.addEventListener("resize", handleResize);
    //document.nt_capture = 0;

    handleResize();

    return () => {
      //Remove Event Listener When Unmount
      window.removeEventListener("mouseup", windowMouseUp);
      window.removeEventListener("mousemove", onWindowMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function RecalcFiledPos(width: number, height: number) {
    if (parentRef.current) {
      fieldData.current.width = width;
      fieldData.current.height = height;

      setFieldRect(`0 0 ${fieldData.current.width} ${fieldData.current.height}`);
      setRulerAreaMatrix(`matrix(1 0 0 1 0 ${getObjectCoord("RULER-BACKGROUND", "Y")})`);

      pxPerMeterXValue.current =
        fieldData.current.width /
        (receiverData.distFromSource + sourceData.fromLeft + receiverData.fromRight);

      sourceMatrix.current = `matrix(1 0 0 1 ${getObjectCoord(
        FIELD_OBJECT.Source,
        "X"
      )} ${getObjectCoord(FIELD_OBJECT.Source, "Y")})`;

      setReceiverData({
        distFromSource: receiverDataRef.current.distFromSource,
        fromRight: receiverDataRef.current.fromRight,
        height: receiverDataRef.current.height,
      });

      pxPerMeter;
      sourceHUpArrowPts.current = updateSourceHightUpArrowPts();
      sourceHDnArrowPts.current = updateSourceHightDnArrowPts();

      sourceArrowPts.current = updateSourceArrowPts();
      receiverArrowPts.current = updateReceiverArrowPts();

      receiverHUpArrowPts.current = updateReceiverHUpArrowPts();
      receiverHDnArrowPts.current = updateReceiverHDnArrowPts();

      setBarrier1Data({
        distFromSource: barrier1DataRef.current.distFromSource,
        height: barrier1DataRef.current.height,
        enabled: barrier1DataRef.current.enabled,
      });

      recvTransform.current = updateRecvTransform();

      drawSoundWaves();
    }
  }

  useEffect(() => {
    sourceDataRef.current = sourceData;

    sourceMatrix.current = `matrix(1 0 0 1 ${getObjectCoord(
      FIELD_OBJECT.Source,
      "X"
    )} ${getObjectCoord(FIELD_OBJECT.Source, "Y")})`;

    sourceHUpArrowPts.current = updateSourceHightUpArrowPts();
    sourceHDnArrowPts.current = updateSourceHightDnArrowPts();

    setLinePathSToR(
      `${getObjectCoord(FIELD_OBJECT.Source, "X")}, ${getObjectCoord(
        FIELD_OBJECT.Source,
        "Y"
      )}, ${getObjectCoord(FIELD_OBJECT.Receiver, "X")}, ${getObjectCoord(
        FIELD_OBJECT.Receiver,
        "Y"
      )}`
    );

    setBarrierEffectArea();
  }, [sourceData]);

  useEffect(() => {
    barrier1DataRef.current = barrier1Data;
    barrier1HArrowPts.current = updateBarrier1HArrowPts();
    ba1Transform.current = updateBa1Transform();

    setBarrierEffectArea();
  }, [barrier1Data]);

  useEffect(() => {
    receiverDataRef.current = receiverData;

    sourceMatrix.current = `matrix(1 0 0 1 ${getObjectCoord(
      FIELD_OBJECT.Source,
      "X"
    )} ${getObjectCoord(FIELD_OBJECT.Source, "Y")})`;

    updateGroup1();

    recvTransform.current = updateRecvTransform();

    drawSoundWaves();
  }, [receiverData]);

  function setLineSourceToReceiver() {
    let sTorEq = getLineEquation(FIELD_OBJECT.Source, FIELD_OBJECT.Receiver);
    let leftBarrier = FIELD_OBJECT.Barrier1;

    let ptMid = "";
    let leftY = calcLineEquationY(sTorEq.a, sTorEq.b, getObjectCoord(leftBarrier, "X"));

    if (leftY > getObjectCoord(leftBarrier, "Y")) {
      ptMid = `${getObjectCoord(leftBarrier, "X")}, ${getObjectCoord(leftBarrier, "Y")}, `;
    }

    setLinePathSToR(
      `${getObjectCoord(FIELD_OBJECT.Source, "X")}, ${getObjectCoord(
        FIELD_OBJECT.Source,
        "Y"
      )}, ${ptMid} ${getObjectCoord(FIELD_OBJECT.Receiver, "X")}, ${getObjectCoord(
        FIELD_OBJECT.Receiver,
        "Y"
      )}`
    );
  }

  function setBarrierEffectArea() {
    let ba1NewArea = calcBarrier1EffectArea();

    let leftBarrier = barrier1Data;
    let leftBarrierName = FIELD_OBJECT.Barrier1;

    let ba1Pts =
      ba1NewArea.newAreaY.toString() === "NaN"
        ? ""
        : `${getObjectCoord(FIELD_OBJECT.Barrier1, "X")}, ${getObjectCoord(
            FIELD_OBJECT.Barrier1,
            "Y"
          )},
        ${ba1NewArea.newAreaX}, ${ba1NewArea.newAreaY},
        ${fieldData.current.width}, ${getObjectCoord("RULER-BACKGROUND", "Y")},
        ${getObjectCoord(FIELD_OBJECT.Barrier1, "X")}, ${getObjectCoord("RULER-BACKGROUND", "Y")}`;
    setBarrierEffectAreaPts({
      Ba1: ba1Pts,
      leftRulerStart: sourceData.fromLeft * pxPerMeter(),
      leftRulerEnd: getObjectCoord(leftBarrierName, "X"),
      leftRulerLength: leftBarrier.distFromSource,
      leftRulerStartArrowPts: `${sourceData.fromLeft * pxPerMeter() + 5}, 2, ${
        sourceData.fromLeft * pxPerMeter()
      }, 5, ${sourceData.fromLeft * pxPerMeter() + 5}, 8`,
      leftRulerEndArrowPts: `${getObjectCoord(leftBarrierName, "X") - 5}, 2, ${getObjectCoord(
        leftBarrierName,
        "X"
      )}, 5, ${getObjectCoord(leftBarrierName, "X") - 5}, 8`,
      rightRulerStart: getObjectCoord(FIELD_OBJECT.Barrier1, "X"),
      rightRulerEnd: fieldData.current.width - receiverData.fromRight * pxPerMeter(),
      rightRulerLength: receiverData.distFromSource - leftBarrier.distFromSource,
      rightRulerStartArrowPts: `${
        getObjectCoord(FIELD_OBJECT.Barrier1, "X") + 5
      }, 2, ${getObjectCoord(FIELD_OBJECT.Barrier1, "X")}, 5, ${
        getObjectCoord(FIELD_OBJECT.Barrier1, "X") + 5
      }, 8`,
      rightRulerEndArrowPts: `${
        fieldData.current.width - receiverData.fromRight * pxPerMeter() - 5
      }, 2, ${fieldData.current.width - receiverData.fromRight * pxPerMeter()}, 5, ${
        fieldData.current.width - receiverData.fromRight * pxPerMeter() - 5
      }, 8`,
    });

    setLineSourceToReceiver();
  }

  function calcBarrier1EffectArea(): { newAreaX: number; newAreaY: number } {
    let newAreaY = 0;
    let newAreaX = 0;
    let eqConst = getLineEquation(FIELD_OBJECT.Source, FIELD_OBJECT.Barrier1); //Source위치와 Barrier1간의 직선의 방정식 F1()을 구한다.

    newAreaY = calcLineEquationY(eqConst.a, eqConst.b, fieldData.current.width);
    newAreaX = fieldData.current.width;

    return { newAreaX, newAreaY };
  }

  function calcLineEquationY(a: number, b: number, x: number): number {
    return a * x + b;
  }

  function calcLineEquationX(a: number, b: number, y: number): number {
    //Y = aX​ + b
    //X = (Y - b)/a
    return (y - b) / a;
  }

  function getLineEquation(
    fromObj: string,
    toObj: string
  ): { a: number; b: number; radius: number } {
    let a = 0;
    let b = 0;

    let distX = getObjectCoord(fromObj, "X") - getObjectCoord(toObj, "X");
    let distY = getObjectCoord(fromObj, "Y") - getObjectCoord(toObj, "Y");
    let radius = Math.atan2(distY, distX);
    let newBa1AreaY =
      getObjectCoord(fromObj, "Y") + Math.sin(radius) * getObjectCoord(fromObj, "X");
    let angle = (radius * 180) / Math.PI;

    let sX = getObjectCoord(fromObj, "X");
    let sY = getObjectCoord(fromObj, "Y");

    a = distY / distX;
    b = sY - a * sX;

    return { a, b, radius };
  }

  function getLineEquationByPos(
    fromObj: { x: number; y: number },
    toObj: { x: number; y: number }
  ): { a: number; b: number; radius: number } {
    let a = 0;
    let b = 0;

    let distX = fromObj.x - toObj.x;
    let distY = fromObj.y - toObj.y;
    let radius = Math.atan2(distY, distX);
    let newBa1AreaY = fromObj.y + Math.sin(radius) * fromObj.x;
    let angle = (radius * 180) / Math.PI;

    let sX = fromObj.x;
    let sY = fromObj.y;

    a = distY / distX;
    b = sY - a * sX;

    return { a, b, radius };
  }

  function getObjectCoord(objectName: string, xy: string): number {
    switch (objectName.toUpperCase() + "-" + xy.toUpperCase()) {
      case "SOURCE-X":
        return sourceDataRef.current.fromLeft * pxPerMeter();
      case "SOURCE-Y":
        return (
          fieldData.current.height - rulerAreaHight - sourceDataRef.current.height * pxPerMeter()
        );
      case "RECEIVER-X":
        return fieldData.current.width - receiverDataRef.current.fromRight * pxPerMeter();
      case "RECEIVER-Y":
        return (
          fieldData.current.height - rulerAreaHight - receiverDataRef.current.height * pxPerMeter()
        );
      case "BARRIER1-X":
        return (
          sourceDataRef.current.fromLeft * pxPerMeter() +
          barrier1DataRef.current.distFromSource * pxPerMeter()
        );
      case "BARRIER1-Y":
        return (
          fieldData.current.height -
          rulerAreaHight -
          /*barrier1Data.height*/ getBarrierHeight() * pxPerMeter()
        );
      case "RULER-BACKGROUND-Y":
        return fieldData.current.height - rulerAreaHight;
    }
  }

  function setCapturedPicker(v: PICKERS) {
    //document.nt_capture = v;
    captured.current = v;
  }

  function notifyNtFactorChanged(objectName: string) {
    if (props.factorChangedCallback) {
      switch (objectName) {
        case FIELD_OBJECT.Source:
          props.factorChangedCallback(FIELD_OBJECT.Source, sourceDataRef.current.height);
          break;
        case FIELD_OBJECT.Receiver:
          props.factorChangedCallback(FIELD_OBJECT.Receiver, receiverDataRef.current.height);
          break;
        case FIELD_OBJECT.Barrier1:
          props.factorChangedCallback(
            FIELD_OBJECT.Barrier1,
            barrier1DataRef.current.height,
            barrier1DataRef.current.distFromSource
          );
          break;
        case FIELD_OBJECT.LeftWall:
          props.factorChangedCallback(FIELD_OBJECT.LeftWall, wallState.current.leftWall);
          break;
        case FIELD_OBJECT.RightWall:
          props.factorChangedCallback(FIELD_OBJECT.RightWall, wallState.current.rightWall);
          break;
        case FIELD_OBJECT.HorizontalDistance:
          props.factorChangedCallback(
            FIELD_OBJECT.HorizontalDistance,
            receiverDataRef.current.distFromSource
          );
          break;
      }
    }
  }

  function windowMouseUp(e: MouseEvent) {
    let objName = "";
    if (captured.current == PICKERS.Source) objName = FIELD_OBJECT.Source;
    if (captured.current == PICKERS.Receiver) objName = FIELD_OBJECT.Receiver;
    if (captured.current == PICKERS.Barrier1) objName = FIELD_OBJECT.Barrier1;

    notifyNtFactorChanged(objName);
    setCapturedPicker(PICKERS.None);
  }

  //function onSourcePickerMouseDown(e: MouseEventHandler<SVGGElement>) {
  const onSourcePickerMouseDown = (e: React.MouseEvent<SVGGElement>) => {
    let svg = document.querySelector("svg#nt-svg") as SVGSVGElement;
    let svgX = svg.getClientRects()[0]!["x"];
    let svgY = svg.getClientRects()[0]!["y"];

    const ev: unknown = e as unknown as MouseEvent;

    captuerPos.current.x = svgX + getObjectCoord(FIELD_OBJECT.Source, "X") - e.clientX;
    captuerPos.current.y = svgY + getObjectCoord(FIELD_OBJECT.Source, "Y") - e.clientY;
    captuerPos.current.fromBottom = getObjectCoord(FIELD_OBJECT.Source, "Y") - e.clientY;

    setCapturedPicker(PICKERS.Source);

    console.log("onSourcePickerMouseDown fired");
  };

  const onSourcePickerTouchMove = (e: React.TouchEvent<SVGGElement>) => {
    // let svg = document.querySelector("svg#nt-svg") as SVGSVGElement;
    // let svgX = svg.getClientRects()[0]!["x"];
    // let svgY = svg.getClientRects()[0]!["y"];

    // const ev: unknown = e as unknown as MouseEvent;

    // captuerPos.current.x = svgX + getObjectCoord(FIELD_OBJECT.Source, "X") - e.touches[0].clientX;
    // captuerPos.current.y = svgY + getObjectCoord(FIELD_OBJECT.Source, "Y") - e.touches[0].clientY;
    // captuerPos.current.fromBottom = getObjectCoord(FIELD_OBJECT.Source, "Y") - e.touches[0].clientY;

    // setCapturedPicker(PICKERS.Source);

    e.stopPropagation();
    e.preventDefault();

    if (prevTouch.current != null) {
      console.log(
        `movement x = ${e.touches[0]!.pageX - prevTouch.current.pageX} , movement y = ${
          e.touches[0]!.pageY - prevTouch.current.pageY
        }`
      );
    }

    prevTouch.current = e.touches[0];

    console.log("onSourcePickerTouchMove fired");
  };

  //function onReceiverPickerMouseDown(e: MouseEventHandler<SVGSVGElement>) {
  const onReceiverPickerMouseDown = (e: React.MouseEvent<SVGGElement>) => {
    let svg = document.querySelector("svg#nt-svg");
    if (svg !== null && svg !== undefined) {
      let svgX = svg.getClientRects()[0]!["x"];
      let svgY = svg.getClientRects()[0]!["y"];

      captuerPos.current.x = svgX + getObjectCoord(FIELD_OBJECT.Receiver, "X") - e.clientX;
      captuerPos.current.y = svgY + getObjectCoord(FIELD_OBJECT.Receiver, "Y") - e.clientY;
      captuerPos.current.fromBottom = getObjectCoord(FIELD_OBJECT.Receiver, "Y") - e.clientY;

      setCapturedPicker(PICKERS.Receiver);
    }
  };

  //function onBarrier1PickerMouseDown(e: MouseEventHandler<SVGSVGElement>) {
  const onBarrier1PickerMouseDown = (e: React.MouseEvent<SVGGElement>) => {
    let svg = document.querySelector("svg#nt-svg")!;
    let svgX = svg.getClientRects()[0]!["x"];
    let svgY = svg.getClientRects()[0]!["y"];

    captuerPos.current.x = svgX + getObjectCoord(FIELD_OBJECT.Barrier1, "X") - e.clientX;
    captuerPos.current.y = svgY + getObjectCoord(FIELD_OBJECT.Barrier1, "Y") - e.clientY;
    captuerPos.current.fromBottom = getObjectCoord(FIELD_OBJECT.Barrier1, "Y") - e.clientY;

    setCapturedPicker(PICKERS.Barrier1);
  };

  //function onSvgMouseUp(e: MouseEventHandler<SVGSVGElement>) {
  const onSvgMouseUp = (e: React.MouseEvent<SVGSVGElement>) => {
    let objName = "";

    if (captured.current == PICKERS.Source) objName = FIELD_OBJECT.Source;
    if (captured.current == PICKERS.Receiver) objName = FIELD_OBJECT.Receiver;
    if (captured.current == PICKERS.Barrier1) objName = FIELD_OBJECT.Barrier1;

    notifyNtFactorChanged(objName);

    setCapturedPicker(PICKERS.None);
  };

  function onWindowMouseMove(e: MouseEvent) {
    if (captured.current !== PICKERS.None) {
      onPickerMouseMoveUseRef(e, captured.current);
    }
  }

  //function onSvgMouseMove(e: MouseEvent) {
  const onSvgMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (captured.current !== PICKERS.None) {
      onPickerMouseMoveUseRef(e as unknown as MouseEvent, captured.current);
    }
  };

  function onPickerMouseMoveUseRef(e: MouseEvent, cap: number) {
    //function onPickerMouseMove(e:MouseEventHandler<SVGSVGElement>){
    let svg = document.querySelector("svg#nt-svg");
    if (svg == null) return;

    let svgX = svg.getClientRects()[0]!["x"];
    let svgY = svg.getClientRects()[0]!["y"];

    if (cap === PICKERS.Source) {
      if (svg !== null && e.movementY !== 0) {
        let swave = svg.querySelector("#swaves");
        let newH: number = sourceDataRef.current.height;

        if (
          svgY + 0 <= e.clientY &&
          svgY + getObjectCoord("RULER-BACKGROUND", "Y") >=
            e.clientY + captuerPos.current.fromBottom
        ) {
          //newH-= e.movementY / pxPerMeter();
          newH =
            Math.round(
              ((getObjectCoord("RULER-BACKGROUND", "Y") -
                e.clientY -
                captuerPos.current.fromBottom) /
                pxPerMeter()) *
                10
            ) / 10;
        }
        newH = newH >= 0 ? newH : 0;

        setSourceData({ fromLeft: sourceDataRef.current.fromLeft, height: newH });
      }
    } else if (cap === PICKERS.Receiver) {
      if (svg !== null && e.movementY !== 0) {
        let r_picker = svg.querySelector("#r_picker");
        let attr = r_picker?.getAttribute("transform");

        let newH: number = receiverDataRef.current.height;
        if (
          svgY + 0 <= e.clientY &&
          svgY + getObjectCoord("RULER-BACKGROUND", "Y") >=
            e.clientY + captuerPos.current.fromBottom
        ) {
          //newH-= e.movementY / pxPerMeter();
          newH =
            Math.round(
              ((getObjectCoord("RULER-BACKGROUND", "Y") -
                e.clientY -
                captuerPos.current.fromBottom) /
                pxPerMeter()) *
                10
            ) / 10;
        }
        newH = newH >= 0 ? newH : 0;

        setReceiverData({
          distFromSource: receiverDataRef.current.distFromSource,
          fromRight: receiverDataRef.current.fromRight,
          height: newH,
        });
      }
    } else if (cap === PICKERS.Barrier1 && barrier1DataRef.current.enabled) {
      if (svg !== null && (e.movementY !== 0 || e.movementX !== 0)) {
        let newH: number = barrier1DataRef.current.height; // - (e.movementY / pxPerMeter());
        let newD: number = barrier1DataRef.current.distFromSource;

        if (
          svgX + getObjectCoord(FIELD_OBJECT.Source, "X") <= e.clientX &&
          svgX + getObjectCoord(FIELD_OBJECT.Receiver, "X") >= e.clientX
        ) {
          newD =
            Math.round(
              ((e.clientX - svg?.getClientRects()[0]!["x"] - sourceData.fromLeft * pxPerMeter()) /
                pxPerMeter()) *
                10
            ) / 10;
        } else {
          newD =
            svgX + getObjectCoord(FIELD_OBJECT.Source, "X") > e.clientX
              ? 0
              : receiverDataRef.current.distFromSource;
        }

        if (
          svgY + 0 <= e.clientY &&
          svgY + getObjectCoord("RULER-BACKGROUND", "Y") >=
            e.clientY + captuerPos.current.fromBottom
        ) {
          newH =
            Math.round(
              ((getObjectCoord("RULER-BACKGROUND", "Y") -
                e.clientY -
                captuerPos.current.fromBottom) /
                pxPerMeter()) *
                10
            ) / 10;
        }
        newH = newH >= 0 ? newH : 0;
        console.log(`newD:${newD} newH:${newH}`);
        setBarrier1Data({
          distFromSource: newD,
          height: newH,
          enabled: barrier1DataRef.current.enabled,
        });
      }
    }
  }

  const onLeftWallClick: React.MouseEventHandler<SVGElement> = (e) => {
    if (leftWallRef.current) {
      leftWallRef.current.style.setProperty(
        "display",
        leftWallRef.current.style.getPropertyValue("display") != "none" ? "none" : ""
      );
      wallState.current.leftWall =
        leftWallRef.current.style.getPropertyValue("display") === "none" ? 0 : 1;

      notifyNtFactorChanged(FIELD_OBJECT.LeftWall);
    }
  };

  const onRightWallClick: React.MouseEventHandler<SVGElement> = (e) => {
    if (rightWallRef.current) {
      rightWallRef.current.style.setProperty(
        "display",
        rightWallRef.current.style.getPropertyValue("display") != "none" ? "none" : ""
      );
      wallState.current.rightWall =
        rightWallRef.current.style.getPropertyValue("display") === "none" ? 0 : 1;

      notifyNtFactorChanged(FIELD_OBJECT.RightWall);
    }
  };

  const onStoRRlulerClick: React.MouseEventHandler<SVGElement> = (e) => {
    if (
      toolPopupHDInputRef.current &&
      toolPopupRef.current &&
      sToRTextRef.current &&
      svgRef.current
    ) {
      toolPopupRef.current.style.setProperty("display", "flex");
      toolPopupHDInputRef.current.value = `${receiverDataRef.current.distFromSource}`;
      toolPopupHDInputRef.current.select();
      let contElement = document.querySelector(".container");
      let x = "-100px";
      if (contElement != null)
        x = `${
          contElement?.getClientRects()[0]!["width"] / 2 -
          toolPopupRef.current.getClientRects()[0]!["width"] / 2
        }px`; //`${sToRTextRef.current.getClientRects()[0]!["x"] - 360}px`;

      let y = `${
        document.scrollingElement!.scrollTop + sToRTextRef.current.getClientRects()[0]!["y"]
      }`;

      toolPopupRef.current.style.setProperty("left", x);
      toolPopupRef.current.style.setProperty("top", y);
      toolPopupHDInputRef.current.focus();
    }
  };

  const onClickHorizontalDistanceApply = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (
      e.nativeEvent instanceof KeyboardEvent &&
      e.nativeEvent.key != "Enter" &&
      e.nativeEvent.key != "Escape"
    )
      return;

    toolPopupRef.current?.style.setProperty("display", "none");
    if (
      (e.nativeEvent.target as HTMLElement).id == "apply_hd" ||
      (e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.key == "Enter")
    ) {
      receiverDataRef.current.distFromSource = Number(toolPopupHDInputRef.current?.value);
      setReceiverData({
        distFromSource: receiverDataRef.current.distFromSource,
        fromRight: receiverDataRef.current.fromRight,
        height: receiverDataRef.current.height,
      });
      notifyNtFactorChanged(FIELD_OBJECT.HorizontalDistance);
    }
    e.preventDefault();
    //e.stopPropagation();
  };

  let parentRef: React.RefObject<HTMLDivElement> = useRef(null);
  let svgRef: React.RefObject<SVGSVGElement> = useRef(null);
  let leftWallRef: React.RefObject<SVGGElement> = useRef(null);
  let rightWallRef: React.RefObject<SVGGElement> = useRef(null);

  let toolPopupRef: React.RefObject<HTMLDivElement> = useRef(null);
  let toolPopupHDInputRef: React.RefObject<HTMLInputElement> = useRef(null);
  let sToRTextRef: React.RefObject<SVGTextElement> = useRef(null);
  let ba1PickerRef: React.RefObject<SVGGElement> = useRef(null);

  // https://noisetools.net/barriercalculator?source=[5.5]&receiver=[5.4,20]&barrier=[1,2.9,8.8]&walls=[1,1]&display=2
  // https://github.com/svgcamp/svg-arc/blob/master/index.js
  return (
    <div className={"nts_svg_parent"} ref={parentRef}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox={fieldRect}
        id="nt-svg"
        className={"nts_noise_field"}
        onMouseMove={onSvgMouseMove}
        onMouseUp={onSvgMouseUp}
        // onTouchMove={}
        ref={svgRef}
      >
        <defs>
          <pattern
            id="concrete_texture"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <image x="0" y="-20" href={IG_CONC_PATTERN.src} width="100" height="100" />
          </pattern>
          <pattern
            id="concrete_texture_vert"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <image x="0" y="-20" href={IG_CONC_PATTERN.src} width="100" height="90" />
          </pattern>
        </defs>
        <g id="swaves" transform={sourceMatrix.current}>
          <g id="swave_picker">
            {soundWaves}
            <g
              className={"nts_ruler_line"}
              // transform="rotate(-90, 0, 0)"
              stroke="#000000"
              fill="#00FF00"
              strokeWidth="0"
              onMouseDown={onSourcePickerMouseDown}
              //onTouchMove={onSourcePickerTouchMove}
            >
              <circle id="swave_picker" cx="0" cy="0" r="7" strokeWidth="0" />
              <rect x="-31" y="-26" width={60} height={20} rx="5" fill="#FFFFFF">
                {" "}
              </rect>
              <text
                className={"nts_source_text"}
                x="-28"
                y="-15"
                textAnchor="start"
                alignmentBaseline="middle"
              >
                SOURCE
              </text>

              {/* <defs>
                <radialGradient id="myGradient">
                  <stop offset="60%" stopColor="#5555FF" stopOpacity="0.0" />
                  <stop offset="100%" stopColor="#5555FF" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              <circle
                id="swave_move"
                cx="0"
                cy="0"
                r={0 * pxPerMeter()}
                fill="url('#myGradient')"
                stroke={"#6666FF"}
                strokeWidth="0"
              >
                <animate
                  attributeName="r"
                  values={`0;${fieldData.current.width};`}
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle> */}
            </g>
          </g>
        </g>
        {/* <g id="ba_effect_area">
          <g id="ba1_effect_area">
            <polygon
              points={barrierEffectAreaPts.Ba1}
              stroke="#000000"
              fill="#0000FF"
              strokeWidth="0"
              fillOpacity="12.5%"
            />
          </g>
        </g> */}
        <g id="ruler_area">
          <g transform={rulerAreaMatrix}>
            <g id="ruler_background">
              <rect
                x="-1"
                width={fieldData.current.width + 2}
                height={rulerAreaHight + 1}
                // fill="#CCCCCC"
                fill="url(#concrete_texture)"
              />
              <line
                x1="-1"
                y1="1"
                x2={fieldData.current.width + 2}
                y2="1"
                strokeWidth="1"
                stroke="#000000"
              ></line>
              {/* <polyline points={linePathSToR} fill="none" stroke="black" strokeDasharray="5" /> */}
            </g>
            <g
              id="ruler_dist_left_right"
              transform="matrix(1 0 0 1 0 15)"
              className={barrier1Data.enabled ? "" : "hide"}
            >
              <g>
                <polygon
                  id="left_dist_st"
                  points={barrierEffectAreaPts.leftRulerStartArrowPts}
                  fill="#000000"
                />
                <line
                  id="left_dist"
                  x1={barrierEffectAreaPts.leftRulerStart + 5}
                  y1="5"
                  x2={barrierEffectAreaPts.leftRulerEnd - 5}
                  y2="5"
                  stroke="#000000"
                  strokeWidth="1"
                />
                <polygon
                  id="left_dist_ed"
                  points={barrierEffectAreaPts.leftRulerEndArrowPts}
                  fill="#000000"
                />
                <rect
                  id="right_dist_box"
                  x={
                    barrierEffectAreaPts.leftRulerStart +
                    (barrierEffectAreaPts.leftRulerEnd - barrierEffectAreaPts.leftRulerStart) / 2 +
                    rulerWidthDistLables.current[0]! * -0.5
                  }
                  y={-4}
                  width={rulerWidthDistLables.current[0]}
                  height={16}
                  fill="#EEEEEE"
                  rx="5"
                  fillOpacity="100%"
                ></rect>
                <text
                  className={"nts_ruler_dist_s_to_r_text"}
                  x={
                    barrierEffectAreaPts.leftRulerStart +
                    (barrierEffectAreaPts.leftRulerEnd - barrierEffectAreaPts.leftRulerStart) / 2
                  }
                  y="5"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {barrierEffectAreaPts.leftRulerLength.toFixed(
                    Math.round((barrierEffectAreaPts.leftRulerLength * 10) % 10) == 0 ? 0 : 1
                  ) + distanceUnit.current}
                </text>
              </g>
              <g>
                <polygon
                  id="right_dist_st"
                  points={barrierEffectAreaPts.rightRulerStartArrowPts}
                  fill="#000000"
                />
                <line
                  id="right_dist"
                  x1={barrierEffectAreaPts.rightRulerStart + 5}
                  y1="5"
                  x2={barrierEffectAreaPts.rightRulerEnd - 5}
                  y2="5"
                  stroke="#000000"
                  strokeWidth="1"
                />
                <polygon
                  id="right_dist_ed"
                  points={barrierEffectAreaPts.rightRulerEndArrowPts}
                  fill="#000000"
                />
                <rect
                  id="right_dist_box"
                  x={
                    barrierEffectAreaPts.rightRulerStart +
                    (barrierEffectAreaPts.rightRulerEnd - barrierEffectAreaPts.rightRulerStart) /
                      2 +
                    rulerWidthDistLables.current[0]! * -0.5
                  }
                  y={-4}
                  width={rulerWidthDistLables.current[0]}
                  height={16}
                  fill="#EEEEEE"
                  rx="5"
                  fillOpacity="100%"
                ></rect>
                <text
                  className={"nts_ruler_dist_s_to_r_text"}
                  x={
                    barrierEffectAreaPts.rightRulerStart +
                    (barrierEffectAreaPts.rightRulerEnd - barrierEffectAreaPts.rightRulerStart) / 2
                  }
                  y="5"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {barrierEffectAreaPts.rightRulerLength.toFixed(
                    Math.round((barrierEffectAreaPts.rightRulerLength * 10) % 10) == 0 ? 0 : 1
                  ) + distanceUnit.current}
                </text>
              </g>
            </g>
            <g id="ruler_dist_s_to_r" transform="matrix(1 0 0 1 0 35)" onClick={onStoRRlulerClick}>
              <g className={"nts_ruler_line"} stroke="#000000" fill="#000000" strokeWidth="0">
                <polygon id="s_to_r_dist_st" points={sourceArrowPts.current} />
                <line
                  id="s_to_r_dist"
                  x1={sourceData.fromLeft * pxPerMeter() + 5}
                  y1="5"
                  x2={fieldData.current.width - receiverData.fromRight * pxPerMeter() - 5}
                  y2="5"
                  strokeWidth="2"
                ></line>
                <polygon id="s_to_r_dist_ed" points={receiverArrowPts.current} />
                <rect
                  x={fieldData.current.width / 2 - 25}
                  y={-4}
                  width="50"
                  height="16"
                  strokeWidth="0"
                  fill="#EEEEEE"
                  rx="5"
                  fillOpacity="100%"
                ></rect>
                <text
                  ref={sToRTextRef}
                  id="src_to_recv_distance"
                  className={"nts_ruler_dist_s_to_r_text"}
                  x={fieldData.current.width / 2}
                  y="5"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {receiverData.distFromSource.toString() + distanceUnit.current}
                </text>
              </g>
            </g>
          </g>
        </g>

        <g id="wall_area">
          <g id="wall_area_left">
            <g
              id="letf_wall_add"
              transform={`translate(${
                (sourceDataRef.current.fromLeft - distSourceFromWall - wallThickness) *
                  pxPerMeter() +
                (wallThickness * pxPerMeter()) / 2
              }, ${
                getObjectCoord("SOURCE", "Y") -
                pxPerMeter() * distSourceFromWall +
                ((sourceDataRef.current.height + distSourceFromWall) * pxPerMeter()) / 2
              }) rotate(270)`}
              className={`wall_btn ${wallState.current.leftWall == 1 ? "hide" : ""}`}
              strokeWidth="0"
              onClick={onLeftWallClick}
            >
              <rect
                x="-25"
                y="-10"
                width={50}
                height={20}
                rx="5"
                fill="#FFFFFF"
                strokeWidth="1"
                stroke="#666666"
                strokeDasharray="3"
              />
              <text
                className={"nts_ruler_dist_s_to_r_text"}
                x="0"
                y="0"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                WALL+
              </text>
            </g>
            <g
              ref={leftWallRef}
              id="left_wall"
              className={"wall_btn"}
              strokeWidth="1"
              onClick={onLeftWallClick}
            >
              <rect
                x={
                  (sourceDataRef.current.fromLeft - distSourceFromWall - wallThickness) *
                  pxPerMeter()
                }
                y={getObjectCoord("SOURCE", "Y") - pxPerMeter() * distSourceFromWall}
                width={pxPerMeter() * 0.5}
                height={(sourceDataRef.current.height + distSourceFromWall) * pxPerMeter() + 1}
                //fill="#CCCCCC"
                fill="url(#concrete_texture_vert)"
                strokeWidth={"1"}
              />
              <text
                className={"nts_ruler_dist_s_to_r_text"}
                x="0"
                y="1"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`translate(${
                  (sourceDataRef.current.fromLeft - distSourceFromWall - wallThickness) *
                    pxPerMeter() +
                  (wallThickness * pxPerMeter()) / 2
                }, ${
                  getObjectCoord("SOURCE", "Y") -
                  pxPerMeter() * distSourceFromWall +
                  ((sourceDataRef.current.height + distSourceFromWall) * pxPerMeter()) / 2
                }) rotate(270)`}
              >
                WALL+3dB
              </text>
            </g>
          </g>
          <g id="wall_area_right">
            <g
              id="right_wall_add"
              transform={`translate(${
                (sourceDataRef.current.fromLeft -
                  distSourceFromWall -
                  wallThickness +
                  topWallLength / 2) *
                pxPerMeter()
              }, ${
                getObjectCoord("SOURCE", "Y") -
                pxPerMeter() * (distSourceFromWall + wallThickness) +
                (wallThickness * pxPerMeter()) / 2 +
                1
              })`}
              className={`wall_btn ${wallState.current.rightWall == 1 ? "hide" : ""}`}
              strokeWidth="0"
              onClick={onRightWallClick}
            >
              <rect
                x="-25"
                y="-10"
                width={50}
                height={20}
                rx="5"
                fill="#FFFFFF"
                strokeWidth="1"
                stroke="#666666"
                strokeDasharray="3"
              />
              <text
                className={"nts_ruler_dist_s_to_r_text"}
                x="0"
                y="2"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                WALL+
              </text>
            </g>
            <g
              ref={rightWallRef}
              id="right_wall"
              className={`wall_btn`}
              strokeWidth="1"
              onClick={onRightWallClick}
            >
              <rect
                x={
                  (sourceDataRef.current.fromLeft - distSourceFromWall - wallThickness) *
                  pxPerMeter()
                }
                y={
                  getObjectCoord("SOURCE", "Y") -
                  pxPerMeter() * (distSourceFromWall + wallThickness)
                }
                width={pxPerMeter() * topWallLength}
                height={pxPerMeter() * 0.5}
                fill="url(#concrete_texture_vert)"
                strokeWidth={"1"}
              />
              <text
                className={"nts_ruler_dist_s_to_r_text"}
                x={
                  (sourceDataRef.current.fromLeft -
                    distSourceFromWall -
                    wallThickness +
                    topWallLength / 2) *
                  pxPerMeter()
                }
                y={
                  getObjectCoord("SOURCE", "Y") -
                  pxPerMeter() * (distSourceFromWall + wallThickness) +
                  (wallThickness * pxPerMeter()) / 2 +
                  1
                }
                textAnchor="middle"
                alignmentBaseline="middle"
                // transform={`translate(${fieldData.current.width - (pxPerMeter() * 1.3) / 2 + 4}, ${
                //   getObjectCoord("RULER-BACKGROUND", "Y") / 2
                // }) rotate(270)`}
              >
                WALL+3dB
              </text>
            </g>
          </g>
        </g>
        <g>
          <polyline points={linePathSToR} fill="none" stroke="black" strokeDasharray="5" />
        </g>
        <g>
          <g
            id="s_height_ruler"
            className={"nts_ruler_line"}
            stroke="#000000"
            fill="#000000"
            strokeWidth="0"
          >
            <line
              id="source_ruler"
              x1={sourceData.fromLeft * pxPerMeter() - 15}
              y1={fieldData.current.height - rulerAreaHight - sourceData.height * pxPerMeter() + 2}
              x2={sourceData.fromLeft * pxPerMeter() - 15}
              y2={fieldData.current.height - rulerAreaHight}
              strokeWidth="1"
            ></line>
            <polygon id="s_height_arr_up" points={sourceHUpArrowPts.current} />
            <polygon id="s_height_arr_dn" points={sourceHDnArrowPts.current} />
            <rect
              x={sourceData.fromLeft * pxPerMeter() - pxPerMeter() / 2 + 20}
              y={
                fieldData.current.height -
                rulerAreaHight -
                (sourceData.height / 2) * pxPerMeter() -
                10
              }
              width={40}
              height={20}
              fill={heightBackgroundColor}
              rx="5"
            ></rect>
            <text
              className={"nts_ruler_dist_s_to_r_text"}
              x={sourceData.fromLeft * pxPerMeter() - pxPerMeter() / 2 + 40}
              y={
                fieldData.current.height -
                rulerAreaHight -
                (sourceData.height / 2) * pxPerMeter() +
                2
              }
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {(Math.round(sourceData.height * 10) / 10).toString() + distanceUnit.current}
            </text>
          </g>

          <g id="ba1_area">
            <g
              id="ba1"
              className={"nts_ruler_line"}
              stroke="#000000"
              fill="#000000"
              strokeWidth="0"
              transform="matrix(1 0 0 1 0 0)"
            >
              <line
                id="ba1_line"
                x1={getObjectCoord(FIELD_OBJECT.Barrier1, "X")}
                y1={
                  fieldData.current.height -
                  rulerAreaHight -
                  /*barrier1Data.height*/ getBarrierHeight() * pxPerMeter()
                }
                x2={getObjectCoord(FIELD_OBJECT.Barrier1, "X")}
                y2={fieldData.current.height - rulerAreaHight}
                strokeWidth="4"
              ></line>
            </g>
            <g
              id="ba1_height_ruler"
              className={`nts_ruler_line ${barrier1Data.enabled ? "" : "hide"}`}
              stroke="#000000"
              fill="#000000"
              strokeWidth="0"
              transform="matrix(1 0 0 1 15 0)"
            >
              <line
                id="ba1_height_line"
                x1={getObjectCoord(FIELD_OBJECT.Barrier1, "X")}
                y1={getObjectCoord(FIELD_OBJECT.Barrier1, "Y") + 3}
                x2={getObjectCoord(FIELD_OBJECT.Barrier1, "X")}
                y2={fieldData.current.height - rulerAreaHight}
                strokeWidth="1"
              ></line>
              <polygon id="ba1_height_arr_up" points={barrier1HArrowPts.current.up} />
              <polygon id="ba1_height_arr_dn" points={barrier1HArrowPts.current.down} />
              <rect
                id="ba1_height_label_box"
                strokeWidth="0"
                rx="5"
                x={getObjectCoord(FIELD_OBJECT.Barrier1, "X") + 10}
                y={
                  fieldData.current.height -
                  rulerAreaHight -
                  /*barrier1Data.height*/ (getBarrierHeight() / 2) * pxPerMeter() -
                  10
                }
                width={40}
                height={20}
                fill={heightBackgroundColor}
              ></rect>
              <text
                className={"nts_ruler_dist_s_to_r_text"}
                x={getObjectCoord(FIELD_OBJECT.Barrier1, "X") + 30}
                y={
                  fieldData.current.height -
                  rulerAreaHight -
                  /*barrier1Data.height*/ (getBarrierHeight() / 2) * pxPerMeter() +
                  2
                }
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {/*barrier1Data.height*/ getBarrierHeight().toString() + distanceUnit.current}
              </text>
            </g>
            <g
              id="ba1_picker"
              ref={ba1PickerRef}
              className={`nts_ruler_line ${barrier1Data.enabled ? "" : "hide"}`}
              stroke="#000000"
              fill="#000000"
              strokeWidth="0"
              onMouseDown={onBarrier1PickerMouseDown}
              transform={ba1Transform.current}
            >
              {<circle cx="0" cy="0" r="4" />}
              <g id="ba2_lable">
                <rect
                  x="-40"
                  y="-25"
                  width={70}
                  height={20}
                  rx="5"
                  fill="#FFFFFF"
                  fillOpacity="80%"
                />
                <text
                  className={"nts_source_text"}
                  x="-33"
                  y="-15"
                  textAnchor="start"
                  alignmentBaseline="middle"
                >
                  BARRIER
                </text>
              </g>
            </g>
          </g>
          <g
            id="r_height_ruler"
            className={"nts_ruler_line"}
            stroke="#000000"
            fill="#000000"
            strokeWidth="0"
            transform="matrix(1 0 0 1 8 0)"
          >
            <line
              id="receiver_ruler"
              x1={sourceData.fromLeft * pxPerMeter() + receiverData.distFromSource * pxPerMeter()}
              y1={
                fieldData.current.height - rulerAreaHight - receiverData.height * pxPerMeter() + 3
              }
              x2={sourceData.fromLeft * pxPerMeter() + receiverData.distFromSource * pxPerMeter()}
              y2={fieldData.current.height - rulerAreaHight}
              strokeWidth="1"
            ></line>
            <polygon id="s_height_arr_up" points={receiverHUpArrowPts.current} />
            <polygon id="s_height_arr_dn" points={receiverHDnArrowPts.current} />
            <rect
              strokeWidth="0"
              rx="5"
              x={
                sourceData.fromLeft * pxPerMeter() + receiverData.distFromSource * pxPerMeter() + 10
              }
              y={
                fieldData.current.height -
                rulerAreaHight -
                (receiverData.height / 2) * pxPerMeter() -
                10
              }
              width={40}
              height={20}
              fill={heightBackgroundColor}
            ></rect>
            <text
              className={"nts_ruler_dist_s_to_r_text"}
              x={
                sourceData.fromLeft * pxPerMeter() + receiverData.distFromSource * pxPerMeter() + 30
              }
              y={
                fieldData.current.height -
                rulerAreaHight -
                (receiverData.height / 2) * pxPerMeter() +
                2
              }
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {(Math.round(receiverData.height * 10) / 10).toString() + distanceUnit.current}
            </text>
          </g>
          <g
            id="r_picker"
            className={"nts_ruler_line"}
            stroke="#000000"
            fill="#FF0000"
            strokeWidth="0"
            onMouseDown={onReceiverPickerMouseDown}
            transform={recvTransform.current}
          >
            <polygon id="r_picker_arr_up" points="0, -7, 0, 7, 7, 0" />
            <g id="r_lable">
              <rect x="-24" y="-32" width={72} height={20} rx="5" fill="#FFFFFF" />
              <text
                className={"nts_source_text"}
                x="-20"
                y="-20"
                textAnchor="start"
                alignmentBaseline="middle"
              >
                RECEIVER
              </text>
            </g>
          </g>
        </g>

        <g className={"nts_no_display"}>
          <text
            id="m1digit"
            className={"nts_swave_dist_text"}
            x={fieldData.current.width / 2}
            y="0"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            0m
          </text>
          <text
            id="m2digit"
            className={"nts_swave_dist_text"}
            x={fieldData.current.width / 2}
            y="0"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            00m
          </text>
          <text
            id="m3digit"
            className={"nts_swave_dist_text"}
            x={fieldData.current.width / 2}
            y="0"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            000m
          </text>
          <text
            id="dist1digit"
            className={"nts_ruler_dist_s_to_r_text"}
            x={fieldData.current.width / 2}
            y="5"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            0.0m
          </text>
          <text
            id="dist2digit"
            className={"nts_ruler_dist_s_to_r_text"}
            x={fieldData.current.width / 2}
            y="5"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            00.0m
          </text>
          <text
            id="dist3digit"
            className={"nts_ruler_dist_s_to_r_text"}
            x={fieldData.current.width / 2}
            y="5"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            000.0m
          </text>
        </g>
      </svg>
      <div ref={toolPopupRef} id="tool_popup" className="nts_inupt_popup">
        <div id="tool_popup_content">
          <input
            ref={toolPopupHDInputRef}
            type="number"
            onKeyDown={onClickHorizontalDistanceApply}
          />
          <div id="button_area">
            <button type="button" id="apply_hd" onClick={onClickHorizontalDistanceApply}>
              Apply
            </button>
            <button type="button" id="cancel_hd" onClick={onClickHorizontalDistanceApply}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
Noisetools.displayName = "Noisetools";
export default Noisetools;
