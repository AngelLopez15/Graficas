import React, {useState} from 'react'

import Balacan from "../assets/json/balacan.json";

import {
  PieChart, Pie, Tooltip,
} from 'recharts';


const data01 = [
  { name: '1-4 Integrantes', value: 800 }, { name: '5 Integrantes', value: 300 },
  { name: '6 Integrantes', value: 300 }, { name: '7 Integrantes', value: 200 },
  { name: '8 Integrantes', value: 278 }, { name: '9 Integrantes', value: 189 },
];

export default function Pastel(props) {

  let {radio} = props

  const [zoom, setZoom] = useState(radio)

  const AumentarRadio = () => {
    if(zoom===80){
      setZoom(150)
    }else{
      setZoom(80)
    }
  }

  return (
    <div>
      <button className="bg-grisClaro px-5 py-2 my-2 text-white rounded-3xl" onClick={AumentarRadio}>Zoom</button>
      <PieChart width={400} height={400}>
          <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={zoom} fill="#bc955c" label />
          <Tooltip />
      </PieChart>
    </div>
  )
}
