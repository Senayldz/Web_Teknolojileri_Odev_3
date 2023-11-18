import "./App.css";
import React from "react";

function Arama({aramaMetni,onSearch}){

  return(
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
    <p>
    </p>
    </div>
  )
}

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
    </li>
  )
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi){
        return(
          <Yazi key={yazi.id} {...yazi}/>
        );
        })}
    </ul>
  )
}

function App() {

  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "React");
const yaziListesi = [
  {
    baslik: "Veri Madenciliği",
    url: "www.sdu.edu.tr",
    yazar: "Ecir hoca",
    yorum_sayisi: 3,
    puan: 3,
    id: 0,
  },
  {
    baslik: "Web Teknolojileri ve Programlama",
    url: "wwww.google.com.tr",
    yazar: "Asım Hoca",
    yorum_sayisi: 2,
    puan: 3,
    id: 1,
  },
  {
    baslik: "Mikroişlemciler",
    url: "www.example.com/js",
    yazar: "Fatih Hoca",
    yorum_sayisi: 8,
    puan: 10,
    id: 2,
  },
  {
    baslik: "Veri İletişimi",
    url: "www.example.com/frontend",
    yazar: "Mevlüt Hoca",
    yorum_sayisi: 5,
    puan: 8,
    id: 3,
  },
  {
    baslik: "İşletim Sistemi",
    url: "www.example.com/react-hooks",
    yazar: "Mevlüt Hoca",
    yorum_sayisi: 12,
    puan: 8,
    id: 4,
  },
  {
    baslik: "Optimizasyon",
    url: "www.example.com/react-hooks",
    yazar: "Ferdi Hoca",
    yorum_sayisi: 12,
    puan: 1,
    id: 5,
  },
];
  
  const arananYazilar=yaziListesi.filter(
    function (yazi){
      return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
       ;
    }
  );

  function handleSearch(event){
    setAramaMetni(event.target.value);
  }
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni)
  },[aramaMetni])

  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </>
  );
}
export default App;