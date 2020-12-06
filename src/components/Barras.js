import React, {useState} from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data01 = [
  {
    name: '1-4 Integrantes',  pv: 800,
  },
  {
    name: '5 Integrantes', pv: 1398,
  },
  {
    name: '6 Integrantes', pv: 9800, 
  },
  {
    name: '7 Integrantes', pv: 3908, 
  },
  {
    name: '8 Integrantes', pv: 4800, 
  },
  {
    name: '9 Integrantes', pv: 3800
  },
];

export default function Barras(props) {
  let {alto, ancho} = props

  const [zoom, setZoom] = useState(ancho)
  const [zoom2, setZoom2] = useState(alto)

  const Aumentar = () => {
    if(zoom===600 && zoom2===300){
      setZoom(zoom+200)
      setZoom2(zoom2+200)
    }else{
      setZoom(zoom-200)
      setZoom2(zoom2-200)
    }
  }

  return (
    <div>
      <button className="bg-grisClaro px-5 py-2 my-2 text-white rounded-3xl" onClick={Aumentar}>Zoom</button>
      <BarChart
        width={zoom}
        height={zoom2}
        data={data01}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#bc955c" background={{ fill: '#eee' }} />
      </BarChart>
    </div>
  )
}
