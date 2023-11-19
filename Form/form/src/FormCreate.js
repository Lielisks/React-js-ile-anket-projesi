import { useState } from 'react';



function FormCreate({ onCreate , info , infoFormUpdate , onUpdate}) {
    
    const [uyku, setUyku] = useState(info ? info.uyku : '6 Saat' );
    const [hayvan, setHayvan] = useState(info ? info.hayvan : 'Köpek');
    const [sosyal, setSosyal] = useState(info ? info.sosyal : 'Kullanıyorum');
    const [mevsim , setMevsim] = useState(info ? info.mevsim : 'Kış');
    const [duygu, setDuygu] = useState(info ? info.duygu : 'Mutlu'); 
    const [araba, setAraba] = useState(info ? info.araba : 'Klasik');
    const [seyahat, setSeyahat] = useState(info ? info.seyahat : 'Uçak');
    const [bilgi, setBilgi] = useState(info ? info.bilgi : "");

    const handleClick = (e) =>
    {
      e.preventDefault();
      if(infoFormUpdate){
         onUpdate(info.id,uyku,hayvan,sosyal,mevsim,duygu,araba,seyahat,bilgi)      
      }
      else{
        onCreate(uyku,hayvan,sosyal,mevsim,duygu,araba,seyahat,bilgi);
      }
      setUyku('');
      setHayvan('');
      setSosyal('');
      setMevsim('');
      setDuygu('');
      setAraba('');
      setSeyahat('');
      setBilgi('');
    }
    return (  
    <div>
      {' '}
      {infoFormUpdate ? (
         <div className="div-update">
                  <h4>Anketimize Verdiğiniz Cevapları Güncelleyebilirsiniz. </h4>
                  <form className="form-create">
              
                    <label>Günde kaç saat uyursunuz ? </label>
                      <div>
                       <input
                     type="checkbox"
                     value='6 Saat'
                     checked= {uyku === "6 Saat"}
                     className="form-input"
                     onChange={(e)=> setUyku(e.target.value)}
                     />
                     <label className="lbl">6 Saat</label>
          
          
                     <input
                        type="checkbox"
                        value='7 Saat'
                        checked= {uyku === "7 Saat"}
                        className="form-input"
                        onChange={(e)=> setUyku(e.target.value)}
                     />
                     <label className="lbl">7 Saat</label>
          
                     <input
                        type="checkbox"
                        value='8 Saat'
                        checked= {uyku === "8 Saat"}
                        className="form-input"
                        onChange={(e)=> setUyku(e.target.value)}
                     />
                     <label className="lbl">8 Saat</label>
          
                     <input
                        type="checkbox"
                        value='8 Saat ve Üzeri'
                        checked= {uyku === "8 Saat ve Üzeri"}
                        className="form-input"
                        onChange={(e)=> setUyku(e.target.value)}
                     />
                     <label className="lbl">8 Saat ve Üzeri</label>
                      </div>
          
                    <label>Hangi Evcil Hayvanı Serversiniz ?</label>
                      <div>
          
                            <input
                             type="checkbox"
                             value="Köpek"
                             checked={hayvan === "Köpek"}
                             className="form-input"
                             onChange= {(e) => setHayvan(e.target.value)}
                            />
                            <label className="lbl">Köpek</label>
          
                            <input
                             type="checkbox"
                             value="Kedi"
                             checked={hayvan === "Kedi"}
                             className="form-input"
                             onChange= {(e) => setHayvan(e.target.value)}
                            />
                            <label className="lbl">Kedi</label>
          
                            <input
                             type="checkbox"
                             value="Kuş"
                             checked={hayvan === "Kuş"}
                             className="form-input"
                             onChange= {(e) => setHayvan(e.target.value)}
                            />
                            <label className="lbl">Kuş</label>
          
                            <input
                             type="checkbox"
                             value="Balık"
                             checked={hayvan === "Balık"}
                             className="form-input"
                             onChange= {(e) => setHayvan(e.target.value)}
                            />
                            <label className="lbl">Balık</label>
                            
                    
                      </div>
          
                    <label>Sosyal Medya Kullanıyor musunuz ?</label>
                      <div>
                          <input
                           type="checkbox"
                           value='Kullanıyorum'
                           className="form-input"
                           checked = {sosyal === "Kullanıyorum"}
                           onChange = {(e) => setSosyal(e.target.value)} 
                         />
                         <label className="lbl">Kullanıyorum</label>
          
                         <input
                           type="checkbox"
                           value='Kullanmıyorum'
                           className="form-input"
                           checked = {sosyal === "Kullanmıyorum"}
                           onChange = {(e) => setSosyal(e.target.value)} 
                         />
                         <label className="lbl">Kullanmıyorum</label>
                      </div>
                    <label>En Sevdiğiniz Mevsim Hangisidir ?</label>
                      <div>
                            <input
                              type="checkbox"
                              className="form-input"
                              value="Kış"
                              checked={mevsim === "Kış"}
                              onChange={(e) => setMevsim(e.target.value)}
                            />
                            <label className="lbl">Kış</label>
          
                            <input
                              type="checkbox"
                              className="form-input"
                              value="İlkbahar"
                              checked={mevsim === "İlkbahar"}
                              onChange={(e) => setMevsim(e.target.value)}
                            />
                            <label className="lbl">İlkbahar</label>
          
                            <input
                              type="checkbox"
                              className="form-input"
                              value="Yaz"
                              checked={mevsim === "Yaz"}
                              onChange={(e) => setMevsim(e.target.value)}
                            />
                            <label className="lbl">Yaz</label>
          
                            <input
                              type="checkbox"
                              className="form-input"
                              value="Songbahar"
                              checked={mevsim === "Sonbahar"}
                              onChange={(e) => setMevsim(e.target.value)}
                            />
                            <label className="lbl">Sonbahar</label>
                
                   
                      </div>  
                    <label>Bugünkü Duygu Durumunuz Nedir ?</label>
                      <div>
                       <input
                               type="checkbox"
                               className="form-input"
                               value="Mutlu"
                               checked={duygu === "Mutlu"}
                               onChange={(e)=> setDuygu(e.target.value)}
                              />
                              <label className="lbl">Mutlu</label>
          
                              <input
                               type="checkbox"
                               className="form-input"
                               value="Üzgün"
                               checked={duygu === "Üzgün"}
                               onChange={(e)=> setDuygu(e.target.value)}
                              />
                              <label className="lbl">Üzgün</label>
          
                              <input
                               type="checkbox"
                               className="form-input"
                               value="Relax"
                               checked={duygu === "Relax"}
                               onChange={(e)=> setDuygu(e.target.value)}
                              />
                              <label className="lbl">Relax</label>
          
                              <input
                               type="checkbox"
                               className="form-input"
                               value="Heyecanlı"
                               checked={duygu === "Heyecanlı"}
                               onChange={(e)=> setDuygu(e.target.value)}
                              />
                              <label className="lbl">
                                Heyecanlı
                              </label>
                      </div>
                    <label>Hangi Araba Türünü Seçerdiniz ?</label>
                      <div>
                           <input
                           type="checkbox"
                           className="form-input"
                           value="Klasik"
                           checked={araba === "Klasik"}
                           onChange={(e)=> setAraba(e.target.value)}
                          />
                          <label className="lbl">Klasik</label>
          
                            <input
                           type="checkbox"
                           className="form-input"
                           value="Spor"
                           checked={araba === "Spor"}
                           onChange={(e)=> setAraba(e.target.value)}
                          />
                          <label className="lbl">Spor</label>
          
                           <input
                           type="checkbox"
                           className="form-input"
                           value="Kamyonet"
                           checked={araba === "Kamyonet"}
                           onChange={(e)=> setAraba(e.target.value)}
                          />
                          <label className="lbl">Kamyonet</label>
                      </div>
                    <label>Bir Yere Seyehat Etmek İçin En Keyif Aldığınız Yöntem Hangisi ? </label>
                       <div>
                             <input
                               type="checkbox"
                               className="form-input"
                               value="Uçak"
                               checked={seyahat === "Uçak"}
                               onChange={(e)=> setSeyahat(e.target.value)}
                             />
                             <label className="lbl">Uçak</label>
          
                             <input
                               type="checkbox"
                               className="form-input"
                               value="Araba"
                               checked={seyahat === "Araba"}
                               onChange={(e)=> setSeyahat(e.target.value)}
                             />
                             <label className="lbl">Araba</label>
          
                             <input
                               type="checkbox"
                               className="form-input"
                               value="Tren"
                               checked={seyahat === "Tren"}
                               onChange={(e)=> setSeyahat(e.target.value)}
                             />
                             <label className="lbl">Tren</label>
          
                             <input
                               type="radio"
                               className="form-input"
                               value="Gemi"
                               checked={seyahat === "Gemi"}
                               onChange={(e)=> setSeyahat(e.target.value)}
                             />
                             <label className="lbl">Gemi</label>
                       </div>
                    <label>Bildiğiniz Bir Konu Hakkında Detaylı Bilgi Verebilir misiniz ?</label>
                        <textarea
                            rows={5}
                            value={bilgi}
                            className="form-area"
                            onChange={(e) => setBilgi(e.target.value)}
                        />
                            <button
                            className="form-button update-button"
                            onClick={handleClick}
                            >Güncelle</button>
                  </form>    
         </div>  
      ) : (
      <div className="div-create">
          <h3>Anketimize Katıldığınız İçin Teşekkür Ederiz...</h3>
             <form className="form-create">
    
          <label>Günde kaç saat uyursunuz ? </label>
            <div>
             <input
           type="checkbox"
           value='6 Saat'
           checked= {uyku === "6 Saat"}
           className="form-input"
           onChange={(e)=> setUyku(e.target.value)}
           />
           <label className="lbl">6 Saat</label>  


           <input
              type="checkbox"
              value='7 Saat'
              checked= {uyku === "7 Saat"}
              className="form-input"
              onChange={(e)=> setUyku(e.target.value)}
           />
           <label className="lbl">7 Saat</label>

           <input
              type="checkbox"
              value='8 Saat'
              checked= {uyku === "8 Saat"}
              className="form-input"
              onChange={(e)=> setUyku(e.target.value)}
           />
           <label className="lbl">8 Saat</label>

           <input
              type="checkbox"
              value='8 Saat ve Üzeri'
              checked= {uyku === "8 Saat ve Üzeri"}
              className="form-input"
              onChange={(e)=> setUyku(e.target.value)}
           />
           <label className="lbl">8 Saat ve Üzeri</label>
            </div>

          <label>Hangi Evcil Hayvanı Serversiniz ?</label>
            <div>

                  <input
                   type="checkbox"
                   value="Köpek"
                   checked={hayvan === "Köpek"}
                   className="form-input"
                   onChange= {(e) => setHayvan(e.target.value)}
                  />
                  <label className="lbl">Köpek</label>

                  <input
                   type="checkbox"
                   value="Kedi"
                   checked={hayvan === "Kedi"}
                   className="form-input"
                   onChange= {(e) => setHayvan(e.target.value)}
                  />
                  <label className="lbl">Kedi</label>

                  <input
                   type="checkbox"
                   value="Kuş"
                   checked={hayvan === "Kuş"}
                   className="form-input"
                   onChange= {(e) => setHayvan(e.target.value)}
                  />
                  <label className="lbl">Kuş</label>

                  <input
                   type="checkbox"
                   value="Balık"
                   checked={hayvan === "Balık"}
                   className="form-input"
                   onChange= {(e) => setHayvan(e.target.value)}
                  />
                  <label className="lbl">Balık</label>
                  
          
            </div>

          <label>Sosyal Medya Kullanıyor musunuz ?</label>
            <div>
                <input
                 type="checkbox"
                 value='Kullanıyorum'
                 className="form-input"
                 checked = {sosyal === "Kullanıyorum"}
                 onChange = {(e) => setSosyal(e.target.value)} 
               />
               <label className="lbl">Kullanıyorum</label>

               <input
                 type="checkbox"
                 value='Kullanmıyorum'
                 className="form-input"
                 checked = {sosyal === "Kullanmıyorum"}
                 onChange = {(e) => setSosyal(e.target.value)} 
               />
               <label className="lbl">Kullanmıyorum</label>
            </div>
          <label>En Sevdiğiniz Mevsim Hangisidir ?</label>
            <div>
                  <input
                    type="checkbox"
                    className="form-input"
                    value="Kış"
                    checked={mevsim === "Kış"}
                    onChange={(e) => setMevsim(e.target.value)}
                  />
                  <label className="lbl">Kış</label>

                  <input
                    type="checkbox"
                    className="form-input"
                    value="İlkbahar"
                    checked={mevsim === "İlkbahar"}
                    onChange={(e) => setMevsim(e.target.value)}
                  />
                  <label className="lbl">İlkbahar</label>

                  <input
                    type="checkbox"
                    className="form-input"
                    value="Yaz"
                    checked={mevsim === "Yaz"}
                    onChange={(e) => setMevsim(e.target.value)}
                  />
                  <label className="lbl">Yaz</label>

                  <input
                    type="checkbox"
                    className="form-input"
                    value="Songbahar"
                    checked={mevsim === "Sonbahar"}
                    onChange={(e) => setMevsim(e.target.value)}
                  />
                  <label className="lbl">Sonbahar</label>
      
         
            </div>  
          <label>Bugünkü Duygu Durumunuz Nedir ?</label>
            <div>
             <input
                     type="checkbox"
                     className="form-input"
                     value="Mutlu"
                     checked={duygu === "Mutlu"}
                     onChange={(e)=> setDuygu(e.target.value)}
                    />
                    <label className="lbl">Mutlu</label>

                    <input
                     type="checkbox"
                     className="form-input"
                     value="Üzgün"
                     checked={duygu === "Üzgün"}
                     onChange={(e)=> setDuygu(e.target.value)}
                    />
                    <label className="lbl">Üzgün</label>

                    <input
                     type="checkbox"
                     className="form-input"
                     value="Relax"
                     checked={duygu === "Relax"}
                     onChange={(e)=> setDuygu(e.target.value)}
                    />
                    <label className="lbl">Relax</label>

                    <input
                     type="checkbox"
                     className="form-input"
                     value="Heyecanlı"
                     checked={duygu === "Heyecanlı"}
                     onChange={(e)=> setDuygu(e.target.value)}
                    />
                    <label className="lbl">
                      Heyecanlı
                    </label>
            </div>
          <label>Hangi Araba Türünü Seçerdiniz ?</label>
            <div>
                 <input
                 type="checkbox"
                 className="form-input"
                 value="Klasik"
                 checked={araba === "Klasik"}
                 onChange={(e)=> setAraba(e.target.value)}
                />
                <label className="lbl">Klasik</label>

                  <input
                 type="checkbox"
                 className="form-input"
                 value="Spor"
                 checked={araba === "Spor"}
                 onChange={(e)=> setAraba(e.target.value)}
                />
                <label className="lbl">Spor</label>

                 <input
                 type="checkbox"
                 className="form-input"
                 value="Kamyonet"
                 checked={araba === "Kamyonet"}
                 onChange={(e)=> setAraba(e.target.value)}
                />
                <label className="lbl">Kamyonet</label>
            </div>
          <label>Bir Yere Seyehat Etmek İçin En Keyif Aldığınız Yöntem Hangisi ? </label>
             <div>
                   <input
                     type="checkbox"
                     className="form-input"
                     value="Uçak"
                     checked={seyahat === "Uçak"}
                     onChange={(e)=> setSeyahat(e.target.value)}
                   />
                   <label className="lbl">Uçak</label>

                   <input
                     type="checkbox"
                     className="form-input"
                     value="Araba"
                     checked={seyahat === "Araba"}
                     onChange={(e)=> setSeyahat(e.target.value)}
                   />
                   <label className="lbl">Araba</label>

                   <input
                     type="checkbox"
                     className="form-input"
                     value="Tren"
                     checked={seyahat === "Tren"}
                     onChange={(e)=> setSeyahat(e.target.value)}
                   />
                   <label className="lbl">Tren</label>

                   <input
                     type="radio"
                     className="form-input"
                     value="Gemi"
                     checked={seyahat === "Gemi"}
                     onChange={(e)=> setSeyahat(e.target.value)}
                   />
                   <label className="lbl">Gemi</label>
             </div>
          <label>Bildiğiniz Bir Konu Hakkında Detaylı Bilgi Verebilir misiniz ?</label>
              <textarea
                  rows={5}
                  value={bilgi}
                  className="form-area"
                  onChange={(e) => setBilgi(e.target.value)}
              />
                  <button
                  className="form-button"
                  onClick={handleClick}
                  >Anketi Bas</button>
             </form>    
      </div>  
      )}
    </div> 
  );
}

export default FormCreate;


