import React, { useState, useEffect } from 'react';
import fire from '../config/fire';
import Update from './Update';

export default function Datafile() {
  const [dataList, setdataList] = useState();

  useEffect(() => {
    const dataRef = fire.database().ref('text');
    dataRef.on('value', (snapshot) => {
      const snp = snapshot.val();
      const dataList = [];
      for (let id in snp) {
        dataList.push({ id, ...snp[id] });
      }
      setdataList(dataList);
    });
  }, []);

  return (
    <div>
      {dataList
        ? dataList.map((dt, index) => <Update dt={dt} key={index} />)
        : ''}
    </div>
  );
}