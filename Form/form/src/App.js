import './App.css';
import FormCreate from './FormCreate';
import { useState } from 'react';
import FormList from './FormList';

function App() {
  
  
  const [infos, setInfos] = useState([]);

  const CreateInfo = (uyku,hayvan,sosyal,mevsim,duygu,araba,seyahat,bilgi)=> 
  {
      const CreatedInfo = [
        ...infos,
        {
          id: Math.round(Math.random()*9999999),
          uyku,
          hayvan,
          sosyal,
          mevsim,
          duygu,
          araba,
          seyahat,
          bilgi,
        },
      ];
      setInfos(CreatedInfo);
}

const deletedById = (id) => {
  const afterDeletedInfos = infos.filter((info)=>{
     return info.id !== id;
   })
   setInfos(afterDeletedInfos);
}

const updateInfoById = (id ,updateUyku,updateHayvan,updateSosyal,updateMevsim,updateDuygu,updateAraba,updateSeyahat,updateBilgi) =>
{
  const updatedInfo = infos.map((info) => {
    if(info.id === id)
    {
      return {
        id,
        uyku:updateUyku,
        hayvan:updateHayvan,
        sosyal:updateSosyal,
        mevsim:updateMevsim,
        duygu:updateDuygu,
        araba:updateAraba,
        seyahat:updateSeyahat,
        bilgi:updateBilgi,}
    }
    return info;
  });
  setInfos(updatedInfo);
};

  return (
    <div className="App">
         <FormCreate onCreate={CreateInfo}/>
         <FormList 
         infos={infos} 
         onDelete={deletedById} 
         onUpdate={updateInfoById}
         />
    </div>
  );
}

export default App;
