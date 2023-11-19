import { useState } from "react";
import FormCreate from "./FormCreate";

function FormShow({ info ,onDelete , onUpdate}) {
  
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteInfo = () => {
     onDelete(info.id);
  };
  const handleUpdateClick = () =>{
     setShowEdit(!showEdit);  
  };
  const handleSubmit = (id ,updateUyku,updateHayvan,updateSosyal,updateMevsim,updateDuygu,updateAraba,updateSeyahat,updateBilgi) => 
  {
    setShowEdit(false);
    onUpdate(id,updateUyku,updateHayvan,updateSosyal,updateMevsim,updateDuygu,updateAraba,updateSeyahat,updateBilgi)
  };
  
  return ( 
    <div className="main-div">

          <div className="form-show">
            {showEdit ? (
              <FormCreate info = {info} infoFormUpdate={true} onUpdate={handleSubmit}/>
            ) : (
              <div>
              <label className="label">Günde Kaç Saat Uyuyorsunuz ? </label>
            <p>Değişmekle birlikte genelde {<span>{info.uyku}</span>} uyurum.</p>
  
            <label className="label">Hangi Evcil Hayvanı Serversiniz ?</label>
            <p>Her hayvanı severim ama en sevdiğim hayvan {<span>{info.hayvan}</span>}.</p>
  
            <label className="label">Sosyal Medya Kullanıyor musunuz ? </label>
            <p>Sosyal medya hepimizin hayatında ucundan kıyısından vardır bence, ben {<span>{info.sosyal}</span>}.</p>
  
            <label className="label">En Sevdiğiniz Mevsim Hangisidir ?</label>
            <p>"Elini tutan insan yanlışsa, her mevsim kıştır insana." çok sevdiğim bir sözdür, galiba benim en sevdiğim mevsim {<span>{info.mevsim}</span>}.</p>
  
            <label className="label">Bugünkü Duygu Durumunuz Nedir ? </label>
            <p>Sabah nasıl uyanırsam gün öyle geçiyor, bugün için duygu durumum {<span>{info.duygu}</span>}.</p>
  
            <label className="label">Kamyonet, Spor veya Klasik Sizin Tercihiniz Ne?  </label>
            <p>Bir araba olsunda ne olursa olsun kafasındayımdır ama özellikle {<span>{info.araba}</span>} severim.</p>
  
            <label className="label">Hangi Seyehat Aracını Genellikle Kullanırsınız ? </label>
            <p>Seyehat etmeye bayılırım, yeni yerler beni herzaman heycanlandırır. En sık {<span>{info.seyahat}</span>} ile yolculuk yaparım.</p>
  
            <label className="label">Bir Konu Hakkında Kısa Bir Bilgi Verebilir misiniz ? </label>
            <p className="paragraph">{info.bilgi}</p>
  
            <div className="buttons">
              <button className="deleteBtn" onClick={handleDeleteInfo}>Sil</button>
              <button className="updateBtn" onClick={handleUpdateClick}>Güncelle</button>
            </div>  
              </div> 
            )}
       
          </div>
    </div> 
    );
}

export default FormShow;