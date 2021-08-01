import React, { Fragment } from "react"
import Head from "next/head"
import PropTypes from "prop-types"
import { asyncReactor } from "async-reactor"
import LocationModal from "../components/Location/Modal"
import ModalAssine from "../components/ModalAssine";
import ModalApp from "../components/ModalApp";
import { getCities } from "../services/cities"
import { groupify } from "../helpers/array"
import { getCityByUri } from "../helpers/uri";
import Cookies from "universal-cookie";
import styled from 'styled-components';
import AlterarSenhaSac from "../components/AlterarSenhaSac"
import CookieConsent from "react-cookie-consent";


const WhatsDiv = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;

const ChatDiv = styled.div`
    display: none;
    z-index: 92;
    width: 100px;
    right: 300px;
    position: fixed; 
    transition: all .5s ease-in-out; 
    bottom: -50px; 
    opacity: 0;
    @media (max-width: 768px) {
        right: 245px;
    }
`;

const CloseBtn = styled.a`
    z-index: 99;
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 10px; 
    bottom: 427px;
    right: 100px; 
    position: fixed; 
    color: #fff; 
    justifyContent: center;
    cursor: pointer; 
    border: none; 
    opacity: 0; 
    display: none;
    @media (max-width: 768px){
        right: 50px;
    }
`;

const ChatLbl = styled.label`
    z-index: 99;
    width: 200px; 
    height: 50px;
    text-align: center; 
    padding: 10px; 
    bottom: 423px;
    right: 200px; 
    position: fixed; 
    color: #fff; 
    justifyContent: center;
    opacity: 0; 
    display: none;
    @media (max-width: 768px){
        right: 140px;
    }
`;


const CookieSnackbar = styled.div`
    position: fixed;
    left: calc(50% - 16px);
    transform: translateX(-50%);
    bottom: 16px;
    z-index: 9999;
    width: calc(100% - 32px);
    max-width: 1120px;
    margin: 0px 16px;
    display: flex;

`;

export const ShowCloseBtn = () => {
  document.getElementById('chatbox').style.display = 'inherit'
  document.getElementById("chatButton").style.display = 'none';
  document.getElementById('closeButton').style.display = 'flex';
  document.getElementById('chatTitleLbl').style.display = 'flex';
  var chatDiv = document.getElementById('chatbox');
  chatDiv.setAttribute('src', "https://chat.sumicity.com.br/chatclient/chat.php?ci=usuario-site&servico=CHATBOT10353&aplicacao=persona&css=https://sumicity.com.br/static/app.css")
  setTimeout(function () {
    chatDiv.style.bottom = '-5px';
    chatDiv.style.opacity = '1';
    //chatDiv.style.zIndex = '999';
  }, 2);
  addIframe();
};
const HideCloseBtn = async () => {
  var chatDiv = document.getElementById('chatbox');
  setTimeout(function () {
    chatDiv.style.bottom = '-50px';
    chatDiv.style.opacity = '0';
  }, 500);
  removeIframe();
};
const addIframe = () => {
  var chatTitle = document.getElementById('chatTitleLbl')
  var closeBtn = document.getElementById('closeButton')
  var target = document.getElementById('iframe');
  target.setAttribute('src', "https://chat.sumicity.com.br/chatclient/chat.php?ci=usuario-site&servico=CHATBOT10353&aplicacao=persona&css=https://sumicity.com.br/static/app.css");
  setTimeout(function () {
    chatTitle.style.opacity = '1';
    closeBtn.style.opacity = '1';
    chatTitle.style.bottom = '435';
  }, 500);
}
const removeIframe = () => {
  var chatDiv = document.getElementById('chatbox');
  var chatTitle = document.getElementById('chatTitleLbl')
  var closeBtn = document.getElementById('closeButton')
  var target = document.getElementById('iframe');
  setTimeout(function () {
    chatDiv.style.opacity = '0';
    closeBtn.style.opacity = '0';
    chatTitle.style.opacity = '0';
  }, 500);
  target.setAttribute('src', "");

}



const Layout = async ({ children }) => {
  const cookies = new Cookies()
  const city = getCityByUri(document.location) || cookies.get("sumicity_city")
  const cities = !city ? await getCities() : null


  const GTM = () =>
    <script dangerouslySetInnerHTML={{
      __html: `
      if (document.location.hostname.split(".sumicity.")[1] === "com.br") {
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TBKG9WJ');
      }
    ` }} />

  const GTA = () =>
    <script dangerouslySetInnerHTML={{
      __html: `
      if (document.location.hostname.split(".sumicity.")[1] === "com.br") {
        window.addEventListener("load", function () {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-32504852-6');
        });
      }
    ` }} />

  const FacebookPixel = () =>
    <script dangerouslySetInnerHTML={{
      __html: `
    if (document.location.hostname.split(".sumicity.")[1] === "com.br") {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '2304039142974301');
      fbq('track', 'PageView');
    }
    ` }} />

  const TrafficCollector = () =>
    <script dangerouslySetInnerHTML={{
      __html: `
      if (document.location.hostname.split(".sumicity.")[1] === "com.br") {
        window.addEventListener("load", function () {
          _etmc.push(["setOrgId", "110004392"]);
          _etmc.push(["trackPageView"]);
        });
      }
    ` }} />
  var url = window.location.href;
  var res = url.split("#");


  const SelectCity = () => {
    if (city) {
      if (res[1] != "alterar-senha-central") {
        return (<ModalAssine />);
      } else if (res[1] == "alterar-senha-central") {
        return (<AlterarSenhaSac />);
      }
    } else {
      const fields = { key: "fields.state", value: { id: "fields.name", name: "fields.name" } }
      const groupedCities = groupify(cities.filter(x => x.fields.urlPrefix !== "www"), fields)

      return (<LocationModal groupedCities={groupedCities} cities={cities} />)
    }
  }

  return (
    <Fragment>
      <Head>
        {GTA()}
        {GTM()}
        {FacebookPixel()}
        {TrafficCollector()}
      </Head>
      <div style={{
        background: '#fff', zIndex: '999', width: '50px', height: '50px',
        textAlign: 'center', padding: '10px', borderRadius: '50%', bottom: '423px',
        right: '200px', position: 'fixed', color: '#fff', justifyContent: 'center',
        cursor: 'pointer', display: 'none', border: "none", opacity: "0"
      }}>

      </div>
      <ModalApp />
      <CookieSnackbar>

      <CookieConsent
        buttonText="Prosseguir"
        cookieName="myAwesomeCookieName2"

        style={{
          backgroundColor: "#fff",
          border: "1px solid #eee",
          boxSizing: "border-box",
          boxShadow: "rgb(0 0 0 / 10%) 1px 1px 4px",
          borderRadius: "4px",
          padding: "16px 24px",
          minHeight: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1120px",
          bottom: "16px !important",
          width: "100%",
          color: "grey",
          fontSize: "12px"
        }}
        buttonStyle={{
          color: "#fff", fontSize: "13px", height: "32px",
          minHeeight: "32px",
          minWidth: "96px",
          backgroundColor: "#13335f",
          borderRadius: "4px"
        }}
        expires={150}
      >
        Utilizamos cookies e tecnologias semelhantes
        para melhorar a sua experiência em nossos serviços.
        Ao continuar navegando, você concorda com estas condições.
</CookieConsent>
      </CookieSnackbar>


      <ChatLbl id="chatTitleLbl">
        Atendimento Online
            </ChatLbl>
      <a id="chatButton" onClick={() => {
        ShowCloseBtn();
      }} style={{
        backgroundColor: 'rgba(31, 111, 181, 0.54)', zIndex: '999', width: '70px', textAlign: 'center', padding: '10px',
        borderRadius: '50%', bottom: '20px', right: '5px', position: 'fixed', color: 'white',
        cursor: 'pointer', boxShadow: '10px 10px 14px -8px rgba(0,0,0,0.2)', border: "solid white 2.5px"
      }}>
        <img src="/static/icons/message.svg" width="50%" style={{ margin: '8px' }} />
      </a>
      <CloseBtn id="closeButton" onClick={() => {
        if (document.getElementById('chatbox').style.display !== 'none') {
          document.getElementById("chatButton").style.display = 'block';
          document.getElementById('closeButton').style.display = 'none';
          document.getElementById('chatTitleLbl').style.display = 'none';
          HideCloseBtn();
        }
      }} style={{

      }}>
        <img src="/static/icons/closeMini.svg" width="50%" style={{ margin: '8px' }} />
      </CloseBtn>
      <WhatsDiv> <a href="http://m.me/sumicity" target="_blank" style={{
        backgroundColor: 'rgba(31, 111, 181, 0)', zIndex: '999', width: '130px',
        textAlign: 'center', padding: '10px', borderRadius: '50%', bottom: '150px', right: '-25px',
        position: 'fixed', color: 'white', cursor: 'pointer',
      }}>
        <img src="/static/icons/faceMessenger.svg" width="50%" style={{ margin: '8px' }} />
      </a>
      </WhatsDiv>
      <WhatsDiv> <a href="https://api.whatsapp.com/send?phone=5522992361153&text=Ol%C3%A1%20%3A)%20" target="_blank" style={{
        backgroundColor: 'rgba(31, 111, 181, 0)', zIndex: '999', width: '130px',
        textAlign: 'center', padding: '10px', borderRadius: '50%', bottom: '80px', right: '-25px',
        position: 'fixed', color: 'white', cursor: 'pointer',
      }}>
        <img src="/static/icons/whatsappGreenUp.svg" width="50%" style={{ margin: '8px' }} />
      </a>
      </WhatsDiv>
      <ChatDiv id="chatbox" className="chat-box">
        <iframe style={{ height: '30rem', border: "none", borderRadius: "3px 3px 0 0" }} id="iframe" src="" />
      </ChatDiv>
      {SelectCity()}
      {children}
      {/*ChatOffline()*/}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default asyncReactor(Layout)
