import{j as m,P as Ie,b as pe,v as be,y as iy,G as Ft,z as Dr,m as uy,a8 as sy,ae as ft,af as Lr,ag as oy,r as Jr,o as ds,V as my,ah as dy,ai as vy,O as vs,l as sa,aj as gy,ak as ky,a7 as yy,I as x,F as Mr,A as St,n as Vs,a9 as gs,u as py,a0 as Ey}from"./iframe-B6S8LZLJ.js";import{u as Be,e as Ty,n as en,B as J,d as qt,a as Wr,c as Oa,s as _y,v as Ay,x as hy,y as fy,V as Nt}from"./fagsakApi-DDStNg_r.js";import{O as xr,a as Ks,F as Ny,R as ks,M as Ga,C as Et,y as ys,u as oa,D as ma,w as by,d as Vy,c as un}from"./index.es-DpBdHvoK.js";import{B as Hr,Q as Ky,K as Ry,Z as ct}from"./index.es-CYm-J09k.js";import{b as we,V as Pe,L as $r,B as Yr,D as bt,H as Sn,x as ps,M as re,a as ja,S as Fy}from"./VStack-DSuGyUzP.js";import{M as $}from"./message-C1Wset1c.js";import{A as Rs}from"./index-DgJQ5L8I.js";import{c as Sy}from"./bind-5IUQovKe.js";import{T as qy,v as Tt}from"./index.es-BqhiVe7O.js";import{K as Es}from"./Kjonnkode-C-fkzSiP.js";import{T as Xe}from"./Table-DucGfDF5.js";import{F as cy}from"./FaktaKort-Cn1PaIhL.js";import{a as By}from"./Checkbox-D0p9YORN.js";import{S as Py}from"./CheckmarkCircleFill-BDJtVIMn.js";import{B as oe}from"./behandlingResultatType-CVAxOrek.js";import{D as wy}from"./dokumentMalType-B-Xou3xH.js";import{L as Iy}from"./Link-Bn2i1YYO.js";import{S as Ly}from"./SettPaVentModalIndex-Bwi_liE4.js";import{u as Fs,a as Oy,b as Gy,d as jy}from"./useBehandlingPollingOperasjoner-amfw9aP9.js";import{u as Ua,a as Ts}from"./behandlingApi-bvo6BQOv.js";import{u as Uy,a as Dy}from"./useKodeverk-DUb8gZto.js";import{r as My,c as xy}from"./paths-BkaKdrdo.js";import{D as Ia}from"./Dropdown-CX1zsbZg.js";var jr=(o=>(o.INGEN_TILBAKEBETALING="INGEN_TILBAKEBETALING",o.DELVIS_TILBAKEBETALING="DELVIS_TILBAKEBETALING",o.FULL_TILBAKEBETALING="FULL_TILBAKEBETALING",o.HENLAGT_FEILOPPRETTET="HENLAGT_FEILOPPRETTET",o.HENLAGT_FEILOPPRETTET_MED_BREV="HENLAGT_FEILOPPRETTET_MED_BREV",o.HENLAGT_FEILOPPRETTET_UTEN_BREV="HENLAGT_FEILOPPRETTET_UTEN_BREV",o))(jr||{}),Cr=(o=>(o.FPSAK="FPSAK",o.FPTILBAKE="FPTILBAKE",o))(Cr||{});const Hy=()=>{const o=[Cr.FPSAK],{status:k}=Be(Ty());return k!=="error"&&o.push(Cr.FPTILBAKE),o},Da={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"},_t=pe(Da),Yy=iy(3),Cy=Ft(1500),da=({control:o,isReadOnly:k,isSubmittable:t,hasBegrunnelse:E,label:h,hasReadOnlyLabel:f=!1,hasVurderingText:N=!1,size:b})=>{const R=N?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",S=()=>k?f?_t.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":h??_t.formatMessage({id:R});return m.jsx(Ie,{value:_t,children:(t||E)&&m.jsx(xr,{name:"begrunnelse",control:o,label:S(),validate:[be,Yy,Cy,Dr],maxLength:1500,readOnly:k,size:b})})},Jy=o=>o&&Array.isArray(o)?o[0]?.begrunnelse??"":o&&!Array.isArray(o)&&o.begrunnelse?o.begrunnelse:"";da.initialValues=o=>({begrunnelse:uy(Jy(o)??void 0)});da.transformValues=o=>({begrunnelse:en(o.begrunnelse)});da.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]"},{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},alias:"FaktaBegrunnelseFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""}}};const Wy=pe(Da),$y=(o,k,t)=>!t||k?!0:!o,Ss=({isReadOnly:o,isSubmittable:k,buttonText:t,onClick:E,isSubmitting:h,isDirty:f})=>m.jsx(Ie,{value:Wy,children:!o&&m.jsx("div",{children:m.jsxs(we,{size:"small",variant:"primary",loading:h,disabled:$y(f,h,k),onClick:E||sy,type:E?"button":"submit",children:[!!t&&t,!t&&m.jsx($,{id:"SubmitButton.ConfirmInformation"})]})})});Ss.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};const _s=pe(Da),zy=({name:o,control:k,label:t,readOnly:E,trueLabel:h,trueContent:f,falseLabel:N,falseContent:b})=>{const{watch:R}=Ks(),S=R(o);return m.jsx(Ny,{name:o,control:k,label:t,validate:[be],isReadOnly:E,children:m.jsxs(Pe,{gap:"space-2",children:[m.jsxs(Pe,{gap:"space-16",children:[m.jsx(ks,{value:!0,size:"small",children:h??_s.formatMessage({id:"TrueFalseInput.True"})}),S===!0&&f]}),m.jsxs(Pe,{gap:"space-16",children:[m.jsx(ks,{value:!1,size:"small",children:N??_s.formatMessage({id:"TrueFalseInput.False"})}),S===!1&&b]})]})})};zy.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"UseControllerProps['name']",raw:"UseControllerProps<T>['name']"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},trueLabel:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const qs=(o,k)=>{const t=new Date(o.tom??ft),E=new Date(k.tom??ft);if(t>E)return-1;if(t<E)return 1;if(o.fom&&!k.fom)return-1;if(!o.fom&&k.fom)return 1;if(o.fom&&k.fom){const h=new Date(o.fom),f=new Date(k.fom);if(h>f)return-1;if(h<f)return 1}return 0};var La={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Zy=La.exports,As;function Qy(){return As||(As=1,function(o,k){(function(){var t,E="4.17.21",h=200,f="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",N="Expected a function",b="Invalid `variable` option passed into `_.template`",R="__lodash_hash_undefined__",S=500,P="__lodash_placeholder__",L=1,le=2,X=4,ge=1,Ve=2,ee=1,Tn=2,Ma=4,He=8,qn=16,Ye=32,cn=64,Ce=128,Bn=256,Pn=512,va=30,d0="...",v0=800,g0=16,Pt=1,k0=2,y0=3,wn=1/0,_n=9007199254740991,p0=17976931348623157e292,xa=NaN,nn=4294967295,E0=nn-1,T0=nn>>>1,_0=[["ary",Ce],["bind",ee],["bindKey",Tn],["curry",He],["curryRight",qn],["flip",Pn],["partial",Ye],["partialRight",cn],["rearg",Bn]],Hn="[object Arguments]",Ha="[object Array]",A0="[object AsyncFunction]",ga="[object Boolean]",ka="[object Date]",h0="[object DOMException]",Ya="[object Error]",Ca="[object Function]",wt="[object GeneratorFunction]",Je="[object Map]",ya="[object Number]",f0="[object Null]",sn="[object Object]",It="[object Promise]",N0="[object Proxy]",pa="[object RegExp]",We="[object Set]",Ea="[object String]",Ja="[object Symbol]",b0="[object Undefined]",Ta="[object WeakMap]",V0="[object WeakSet]",_a="[object ArrayBuffer]",Yn="[object DataView]",zr="[object Float32Array]",Zr="[object Float64Array]",Qr="[object Int8Array]",Xr="[object Int16Array]",el="[object Int32Array]",nl="[object Uint8Array]",al="[object Uint8ClampedArray]",rl="[object Uint16Array]",ll="[object Uint32Array]",K0=/\b__p \+= '';/g,R0=/\b(__p \+=) '' \+/g,F0=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Lt=/&(?:amp|lt|gt|quot|#39);/g,Ot=/[&<>"']/g,S0=RegExp(Lt.source),q0=RegExp(Ot.source),c0=/<%-([\s\S]+?)%>/g,B0=/<%([\s\S]+?)%>/g,Gt=/<%=([\s\S]+?)%>/g,P0=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w0=/^\w*$/,I0=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tl=/[\\^$.*+?()[\]{}|]/g,L0=RegExp(tl.source),il=/^\s+/,O0=/\s/,G0=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,j0=/\{\n\/\* \[wrapped with (.+)\] \*/,U0=/,? & /,D0=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,M0=/[()=,{}\[\]\/\s]/,x0=/\\(\\)?/g,H0=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,jt=/\w*$/,Y0=/^[-+]0x[0-9a-f]+$/i,C0=/^0b[01]+$/i,J0=/^\[object .+?Constructor\]$/,W0=/^0o[0-7]+$/i,$0=/^(?:0|[1-9]\d*)$/,z0=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Wa=/($^)/,Z0=/['\n\r\u2028\u2029\\]/g,$a="\\ud800-\\udfff",Q0="\\u0300-\\u036f",X0="\\ufe20-\\ufe2f",eo="\\u20d0-\\u20ff",Ut=Q0+X0+eo,Dt="\\u2700-\\u27bf",Mt="a-z\\xdf-\\xf6\\xf8-\\xff",no="\\xac\\xb1\\xd7\\xf7",ao="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ro="\\u2000-\\u206f",lo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xt="A-Z\\xc0-\\xd6\\xd8-\\xde",Ht="\\ufe0e\\ufe0f",Yt=no+ao+ro+lo,ul="['’]",to="["+$a+"]",Ct="["+Yt+"]",za="["+Ut+"]",Jt="\\d+",io="["+Dt+"]",Wt="["+Mt+"]",$t="[^"+$a+Yt+Jt+Dt+Mt+xt+"]",sl="\\ud83c[\\udffb-\\udfff]",uo="(?:"+za+"|"+sl+")",zt="[^"+$a+"]",ol="(?:\\ud83c[\\udde6-\\uddff]){2}",ml="[\\ud800-\\udbff][\\udc00-\\udfff]",Cn="["+xt+"]",Zt="\\u200d",Qt="(?:"+Wt+"|"+$t+")",so="(?:"+Cn+"|"+$t+")",Xt="(?:"+ul+"(?:d|ll|m|re|s|t|ve))?",ei="(?:"+ul+"(?:D|LL|M|RE|S|T|VE))?",ni=uo+"?",ai="["+Ht+"]?",oo="(?:"+Zt+"(?:"+[zt,ol,ml].join("|")+")"+ai+ni+")*",mo="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vo="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ri=ai+ni+oo,go="(?:"+[io,ol,ml].join("|")+")"+ri,ko="(?:"+[zt+za+"?",za,ol,ml,to].join("|")+")",yo=RegExp(ul,"g"),po=RegExp(za,"g"),dl=RegExp(sl+"(?="+sl+")|"+ko+ri,"g"),Eo=RegExp([Cn+"?"+Wt+"+"+Xt+"(?="+[Ct,Cn,"$"].join("|")+")",so+"+"+ei+"(?="+[Ct,Cn+Qt,"$"].join("|")+")",Cn+"?"+Qt+"+"+Xt,Cn+"+"+ei,vo,mo,Jt,go].join("|"),"g"),To=RegExp("["+Zt+$a+Ut+Ht+"]"),_o=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ao=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ho=-1,Z={};Z[zr]=Z[Zr]=Z[Qr]=Z[Xr]=Z[el]=Z[nl]=Z[al]=Z[rl]=Z[ll]=!0,Z[Hn]=Z[Ha]=Z[_a]=Z[ga]=Z[Yn]=Z[ka]=Z[Ya]=Z[Ca]=Z[Je]=Z[ya]=Z[sn]=Z[pa]=Z[We]=Z[Ea]=Z[Ta]=!1;var z={};z[Hn]=z[Ha]=z[_a]=z[Yn]=z[ga]=z[ka]=z[zr]=z[Zr]=z[Qr]=z[Xr]=z[el]=z[Je]=z[ya]=z[sn]=z[pa]=z[We]=z[Ea]=z[Ja]=z[nl]=z[al]=z[rl]=z[ll]=!0,z[Ya]=z[Ca]=z[Ta]=!1;var fo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},No={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bo={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Vo={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ko=parseFloat,Ro=parseInt,li=typeof Lr=="object"&&Lr&&Lr.Object===Object&&Lr,Fo=typeof self=="object"&&self&&self.Object===Object&&self,de=li||Fo||Function("return this")(),vl=k&&!k.nodeType&&k,In=vl&&!0&&o&&!o.nodeType&&o,ti=In&&In.exports===vl,gl=ti&&li.process,Le=function(){try{var v=In&&In.require&&In.require("util").types;return v||gl&&gl.binding&&gl.binding("util")}catch{}}(),ii=Le&&Le.isArrayBuffer,ui=Le&&Le.isDate,si=Le&&Le.isMap,oi=Le&&Le.isRegExp,mi=Le&&Le.isSet,di=Le&&Le.isTypedArray;function Ke(v,p,y){switch(y.length){case 0:return v.call(p);case 1:return v.call(p,y[0]);case 2:return v.call(p,y[0],y[1]);case 3:return v.call(p,y[0],y[1],y[2])}return v.apply(p,y)}function So(v,p,y,K){for(var w=-1,H=v==null?0:v.length;++w<H;){var ue=v[w];p(K,ue,y(ue),v)}return K}function Oe(v,p){for(var y=-1,K=v==null?0:v.length;++y<K&&p(v[y],y,v)!==!1;);return v}function qo(v,p){for(var y=v==null?0:v.length;y--&&p(v[y],y,v)!==!1;);return v}function vi(v,p){for(var y=-1,K=v==null?0:v.length;++y<K;)if(!p(v[y],y,v))return!1;return!0}function An(v,p){for(var y=-1,K=v==null?0:v.length,w=0,H=[];++y<K;){var ue=v[y];p(ue,y,v)&&(H[w++]=ue)}return H}function Za(v,p){var y=v==null?0:v.length;return!!y&&Jn(v,p,0)>-1}function kl(v,p,y){for(var K=-1,w=v==null?0:v.length;++K<w;)if(y(p,v[K]))return!0;return!1}function Q(v,p){for(var y=-1,K=v==null?0:v.length,w=Array(K);++y<K;)w[y]=p(v[y],y,v);return w}function hn(v,p){for(var y=-1,K=p.length,w=v.length;++y<K;)v[w+y]=p[y];return v}function yl(v,p,y,K){var w=-1,H=v==null?0:v.length;for(K&&H&&(y=v[++w]);++w<H;)y=p(y,v[w],w,v);return y}function co(v,p,y,K){var w=v==null?0:v.length;for(K&&w&&(y=v[--w]);w--;)y=p(y,v[w],w,v);return y}function pl(v,p){for(var y=-1,K=v==null?0:v.length;++y<K;)if(p(v[y],y,v))return!0;return!1}var Bo=El("length");function Po(v){return v.split("")}function wo(v){return v.match(D0)||[]}function gi(v,p,y){var K;return y(v,function(w,H,ue){if(p(w,H,ue))return K=H,!1}),K}function Qa(v,p,y,K){for(var w=v.length,H=y+(K?1:-1);K?H--:++H<w;)if(p(v[H],H,v))return H;return-1}function Jn(v,p,y){return p===p?Co(v,p,y):Qa(v,ki,y)}function Io(v,p,y,K){for(var w=y-1,H=v.length;++w<H;)if(K(v[w],p))return w;return-1}function ki(v){return v!==v}function yi(v,p){var y=v==null?0:v.length;return y?_l(v,p)/y:xa}function El(v){return function(p){return p==null?t:p[v]}}function Tl(v){return function(p){return v==null?t:v[p]}}function pi(v,p,y,K,w){return w(v,function(H,ue,W){y=K?(K=!1,H):p(y,H,ue,W)}),y}function Lo(v,p){var y=v.length;for(v.sort(p);y--;)v[y]=v[y].value;return v}function _l(v,p){for(var y,K=-1,w=v.length;++K<w;){var H=p(v[K]);H!==t&&(y=y===t?H:y+H)}return y}function Al(v,p){for(var y=-1,K=Array(v);++y<v;)K[y]=p(y);return K}function Oo(v,p){return Q(p,function(y){return[y,v[y]]})}function Ei(v){return v&&v.slice(0,hi(v)+1).replace(il,"")}function Re(v){return function(p){return v(p)}}function hl(v,p){return Q(p,function(y){return v[y]})}function Aa(v,p){return v.has(p)}function Ti(v,p){for(var y=-1,K=v.length;++y<K&&Jn(p,v[y],0)>-1;);return y}function _i(v,p){for(var y=v.length;y--&&Jn(p,v[y],0)>-1;);return y}function Go(v,p){for(var y=v.length,K=0;y--;)v[y]===p&&++K;return K}var jo=Tl(fo),Uo=Tl(No);function Do(v){return"\\"+Vo[v]}function Mo(v,p){return v==null?t:v[p]}function Wn(v){return To.test(v)}function xo(v){return _o.test(v)}function Ho(v){for(var p,y=[];!(p=v.next()).done;)y.push(p.value);return y}function fl(v){var p=-1,y=Array(v.size);return v.forEach(function(K,w){y[++p]=[w,K]}),y}function Ai(v,p){return function(y){return v(p(y))}}function fn(v,p){for(var y=-1,K=v.length,w=0,H=[];++y<K;){var ue=v[y];(ue===p||ue===P)&&(v[y]=P,H[w++]=y)}return H}function Xa(v){var p=-1,y=Array(v.size);return v.forEach(function(K){y[++p]=K}),y}function Yo(v){var p=-1,y=Array(v.size);return v.forEach(function(K){y[++p]=[K,K]}),y}function Co(v,p,y){for(var K=y-1,w=v.length;++K<w;)if(v[K]===p)return K;return-1}function Jo(v,p,y){for(var K=y+1;K--;)if(v[K]===p)return K;return K}function $n(v){return Wn(v)?$o(v):Bo(v)}function $e(v){return Wn(v)?zo(v):Po(v)}function hi(v){for(var p=v.length;p--&&O0.test(v.charAt(p)););return p}var Wo=Tl(bo);function $o(v){for(var p=dl.lastIndex=0;dl.test(v);)++p;return p}function zo(v){return v.match(dl)||[]}function Zo(v){return v.match(Eo)||[]}var Qo=function v(p){p=p==null?de:zn.defaults(de.Object(),p,zn.pick(de,Ao));var y=p.Array,K=p.Date,w=p.Error,H=p.Function,ue=p.Math,W=p.Object,Nl=p.RegExp,Xo=p.String,Ge=p.TypeError,er=y.prototype,em=H.prototype,Zn=W.prototype,nr=p["__core-js_shared__"],ar=em.toString,C=Zn.hasOwnProperty,nm=0,fi=function(){var e=/[^.]+$/.exec(nr&&nr.keys&&nr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),rr=Zn.toString,am=ar.call(W),rm=de._,lm=Nl("^"+ar.call(C).replace(tl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),lr=ti?p.Buffer:t,Nn=p.Symbol,tr=p.Uint8Array,Ni=lr?lr.allocUnsafe:t,ir=Ai(W.getPrototypeOf,W),bi=W.create,Vi=Zn.propertyIsEnumerable,ur=er.splice,Ki=Nn?Nn.isConcatSpreadable:t,ha=Nn?Nn.iterator:t,Ln=Nn?Nn.toStringTag:t,sr=function(){try{var e=Dn(W,"defineProperty");return e({},"",{}),e}catch{}}(),tm=p.clearTimeout!==de.clearTimeout&&p.clearTimeout,im=K&&K.now!==de.Date.now&&K.now,um=p.setTimeout!==de.setTimeout&&p.setTimeout,or=ue.ceil,mr=ue.floor,bl=W.getOwnPropertySymbols,sm=lr?lr.isBuffer:t,Ri=p.isFinite,om=er.join,mm=Ai(W.keys,W),se=ue.max,ke=ue.min,dm=K.now,vm=p.parseInt,Fi=ue.random,gm=er.reverse,Vl=Dn(p,"DataView"),fa=Dn(p,"Map"),Kl=Dn(p,"Promise"),Qn=Dn(p,"Set"),Na=Dn(p,"WeakMap"),ba=Dn(W,"create"),dr=Na&&new Na,Xn={},km=Mn(Vl),ym=Mn(fa),pm=Mn(Kl),Em=Mn(Qn),Tm=Mn(Na),vr=Nn?Nn.prototype:t,Va=vr?vr.valueOf:t,Si=vr?vr.toString:t;function i(e){if(ae(e)&&!I(e)&&!(e instanceof D)){if(e instanceof je)return e;if(C.call(e,"__wrapped__"))return qu(e)}return new je(e)}var ea=function(){function e(){}return function(n){if(!ne(n))return{};if(bi)return bi(n);e.prototype=n;var a=new e;return e.prototype=t,a}}();function gr(){}function je(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=t}i.templateSettings={escape:c0,evaluate:B0,interpolate:Gt,variable:"",imports:{_:i}},i.prototype=gr.prototype,i.prototype.constructor=i,je.prototype=ea(gr.prototype),je.prototype.constructor=je;function D(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=nn,this.__views__=[]}function _m(){var e=new D(this.__wrapped__);return e.__actions__=Ae(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ae(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ae(this.__views__),e}function Am(){if(this.__filtered__){var e=new D(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function hm(){var e=this.__wrapped__.value(),n=this.__dir__,a=I(e),r=n<0,l=a?e.length:0,u=Pd(0,l,this.__views__),s=u.start,d=u.end,g=d-s,T=r?d:s-1,_=this.__iteratees__,A=_.length,V=0,F=ke(g,this.__takeCount__);if(!a||!r&&l==g&&F==g)return Xi(e,this.__actions__);var c=[];e:for(;g--&&V<F;){T+=n;for(var G=-1,B=e[T];++G<A;){var U=_[G],M=U.iteratee,qe=U.type,_e=M(B);if(qe==k0)B=_e;else if(!_e){if(qe==Pt)continue e;break e}}c[V++]=B}return c}D.prototype=ea(gr.prototype),D.prototype.constructor=D;function On(e){var n=-1,a=e==null?0:e.length;for(this.clear();++n<a;){var r=e[n];this.set(r[0],r[1])}}function fm(){this.__data__=ba?ba(null):{},this.size=0}function Nm(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function bm(e){var n=this.__data__;if(ba){var a=n[e];return a===R?t:a}return C.call(n,e)?n[e]:t}function Vm(e){var n=this.__data__;return ba?n[e]!==t:C.call(n,e)}function Km(e,n){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=ba&&n===t?R:n,this}On.prototype.clear=fm,On.prototype.delete=Nm,On.prototype.get=bm,On.prototype.has=Vm,On.prototype.set=Km;function on(e){var n=-1,a=e==null?0:e.length;for(this.clear();++n<a;){var r=e[n];this.set(r[0],r[1])}}function Rm(){this.__data__=[],this.size=0}function Fm(e){var n=this.__data__,a=kr(n,e);if(a<0)return!1;var r=n.length-1;return a==r?n.pop():ur.call(n,a,1),--this.size,!0}function Sm(e){var n=this.__data__,a=kr(n,e);return a<0?t:n[a][1]}function qm(e){return kr(this.__data__,e)>-1}function cm(e,n){var a=this.__data__,r=kr(a,e);return r<0?(++this.size,a.push([e,n])):a[r][1]=n,this}on.prototype.clear=Rm,on.prototype.delete=Fm,on.prototype.get=Sm,on.prototype.has=qm,on.prototype.set=cm;function mn(e){var n=-1,a=e==null?0:e.length;for(this.clear();++n<a;){var r=e[n];this.set(r[0],r[1])}}function Bm(){this.size=0,this.__data__={hash:new On,map:new(fa||on),string:new On}}function Pm(e){var n=Kr(this,e).delete(e);return this.size-=n?1:0,n}function wm(e){return Kr(this,e).get(e)}function Im(e){return Kr(this,e).has(e)}function Lm(e,n){var a=Kr(this,e),r=a.size;return a.set(e,n),this.size+=a.size==r?0:1,this}mn.prototype.clear=Bm,mn.prototype.delete=Pm,mn.prototype.get=wm,mn.prototype.has=Im,mn.prototype.set=Lm;function Gn(e){var n=-1,a=e==null?0:e.length;for(this.__data__=new mn;++n<a;)this.add(e[n])}function Om(e){return this.__data__.set(e,R),this}function Gm(e){return this.__data__.has(e)}Gn.prototype.add=Gn.prototype.push=Om,Gn.prototype.has=Gm;function ze(e){var n=this.__data__=new on(e);this.size=n.size}function jm(){this.__data__=new on,this.size=0}function Um(e){var n=this.__data__,a=n.delete(e);return this.size=n.size,a}function Dm(e){return this.__data__.get(e)}function Mm(e){return this.__data__.has(e)}function xm(e,n){var a=this.__data__;if(a instanceof on){var r=a.__data__;if(!fa||r.length<h-1)return r.push([e,n]),this.size=++a.size,this;a=this.__data__=new mn(r)}return a.set(e,n),this.size=a.size,this}ze.prototype.clear=jm,ze.prototype.delete=Um,ze.prototype.get=Dm,ze.prototype.has=Mm,ze.prototype.set=xm;function qi(e,n){var a=I(e),r=!a&&xn(e),l=!a&&!r&&Fn(e),u=!a&&!r&&!l&&la(e),s=a||r||l||u,d=s?Al(e.length,Xo):[],g=d.length;for(var T in e)(n||C.call(e,T))&&!(s&&(T=="length"||l&&(T=="offset"||T=="parent")||u&&(T=="buffer"||T=="byteLength"||T=="byteOffset")||kn(T,g)))&&d.push(T);return d}function ci(e){var n=e.length;return n?e[Ol(0,n-1)]:t}function Hm(e,n){return Rr(Ae(e),jn(n,0,e.length))}function Ym(e){return Rr(Ae(e))}function Rl(e,n,a){(a!==t&&!Ze(e[n],a)||a===t&&!(n in e))&&dn(e,n,a)}function Ka(e,n,a){var r=e[n];(!(C.call(e,n)&&Ze(r,a))||a===t&&!(n in e))&&dn(e,n,a)}function kr(e,n){for(var a=e.length;a--;)if(Ze(e[a][0],n))return a;return-1}function Cm(e,n,a,r){return bn(e,function(l,u,s){n(r,l,a(l),s)}),r}function Bi(e,n){return e&&rn(n,me(n),e)}function Jm(e,n){return e&&rn(n,fe(n),e)}function dn(e,n,a){n=="__proto__"&&sr?sr(e,n,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[n]=a}function Fl(e,n){for(var a=-1,r=n.length,l=y(r),u=e==null;++a<r;)l[a]=u?t:st(e,n[a]);return l}function jn(e,n,a){return e===e&&(a!==t&&(e=e<=a?e:a),n!==t&&(e=e>=n?e:n)),e}function Ue(e,n,a,r,l,u){var s,d=n&L,g=n&le,T=n&X;if(a&&(s=l?a(e,r,l,u):a(e)),s!==t)return s;if(!ne(e))return e;var _=I(e);if(_){if(s=Id(e),!d)return Ae(e,s)}else{var A=ye(e),V=A==Ca||A==wt;if(Fn(e))return au(e,d);if(A==sn||A==Hn||V&&!l){if(s=g||V?{}:hu(e),!d)return g?bd(e,Jm(s,e)):Nd(e,Bi(s,e))}else{if(!z[A])return l?e:{};s=Ld(e,A,d)}}u||(u=new ze);var F=u.get(e);if(F)return F;u.set(e,s),zu(e)?e.forEach(function(B){s.add(Ue(B,n,a,B,e,u))}):Wu(e)&&e.forEach(function(B,U){s.set(U,Ue(B,n,a,U,e,u))});var c=T?g?Wl:Jl:g?fe:me,G=_?t:c(e);return Oe(G||e,function(B,U){G&&(U=B,B=e[U]),Ka(s,U,Ue(B,n,a,U,e,u))}),s}function Wm(e){var n=me(e);return function(a){return Pi(a,e,n)}}function Pi(e,n,a){var r=a.length;if(e==null)return!r;for(e=W(e);r--;){var l=a[r],u=n[l],s=e[l];if(s===t&&!(l in e)||!u(s))return!1}return!0}function wi(e,n,a){if(typeof e!="function")throw new Ge(N);return Pa(function(){e.apply(t,a)},n)}function Ra(e,n,a,r){var l=-1,u=Za,s=!0,d=e.length,g=[],T=n.length;if(!d)return g;a&&(n=Q(n,Re(a))),r?(u=kl,s=!1):n.length>=h&&(u=Aa,s=!1,n=new Gn(n));e:for(;++l<d;){var _=e[l],A=a==null?_:a(_);if(_=r||_!==0?_:0,s&&A===A){for(var V=T;V--;)if(n[V]===A)continue e;g.push(_)}else u(n,A,r)||g.push(_)}return g}var bn=uu(an),Ii=uu(ql,!0);function $m(e,n){var a=!0;return bn(e,function(r,l,u){return a=!!n(r,l,u),a}),a}function yr(e,n,a){for(var r=-1,l=e.length;++r<l;){var u=e[r],s=n(u);if(s!=null&&(d===t?s===s&&!Se(s):a(s,d)))var d=s,g=u}return g}function zm(e,n,a,r){var l=e.length;for(a=O(a),a<0&&(a=-a>l?0:l+a),r=r===t||r>l?l:O(r),r<0&&(r+=l),r=a>r?0:Qu(r);a<r;)e[a++]=n;return e}function Li(e,n){var a=[];return bn(e,function(r,l,u){n(r,l,u)&&a.push(r)}),a}function ve(e,n,a,r,l){var u=-1,s=e.length;for(a||(a=Gd),l||(l=[]);++u<s;){var d=e[u];n>0&&a(d)?n>1?ve(d,n-1,a,r,l):hn(l,d):r||(l[l.length]=d)}return l}var Sl=su(),Oi=su(!0);function an(e,n){return e&&Sl(e,n,me)}function ql(e,n){return e&&Oi(e,n,me)}function pr(e,n){return An(n,function(a){return yn(e[a])})}function Un(e,n){n=Kn(n,e);for(var a=0,r=n.length;e!=null&&a<r;)e=e[ln(n[a++])];return a&&a==r?e:t}function Gi(e,n,a){var r=n(e);return I(e)?r:hn(r,a(e))}function Ee(e){return e==null?e===t?b0:f0:Ln&&Ln in W(e)?Bd(e):Yd(e)}function cl(e,n){return e>n}function Zm(e,n){return e!=null&&C.call(e,n)}function Qm(e,n){return e!=null&&n in W(e)}function Xm(e,n,a){return e>=ke(n,a)&&e<se(n,a)}function Bl(e,n,a){for(var r=a?kl:Za,l=e[0].length,u=e.length,s=u,d=y(u),g=1/0,T=[];s--;){var _=e[s];s&&n&&(_=Q(_,Re(n))),g=ke(_.length,g),d[s]=!a&&(n||l>=120&&_.length>=120)?new Gn(s&&_):t}_=e[0];var A=-1,V=d[0];e:for(;++A<l&&T.length<g;){var F=_[A],c=n?n(F):F;if(F=a||F!==0?F:0,!(V?Aa(V,c):r(T,c,a))){for(s=u;--s;){var G=d[s];if(!(G?Aa(G,c):r(e[s],c,a)))continue e}V&&V.push(c),T.push(F)}}return T}function ed(e,n,a,r){return an(e,function(l,u,s){n(r,a(l),u,s)}),r}function Fa(e,n,a){n=Kn(n,e),e=Vu(e,n);var r=e==null?e:e[ln(Me(n))];return r==null?t:Ke(r,e,a)}function ji(e){return ae(e)&&Ee(e)==Hn}function nd(e){return ae(e)&&Ee(e)==_a}function ad(e){return ae(e)&&Ee(e)==ka}function Sa(e,n,a,r,l){return e===n?!0:e==null||n==null||!ae(e)&&!ae(n)?e!==e&&n!==n:rd(e,n,a,r,Sa,l)}function rd(e,n,a,r,l,u){var s=I(e),d=I(n),g=s?Ha:ye(e),T=d?Ha:ye(n);g=g==Hn?sn:g,T=T==Hn?sn:T;var _=g==sn,A=T==sn,V=g==T;if(V&&Fn(e)){if(!Fn(n))return!1;s=!0,_=!1}if(V&&!_)return u||(u=new ze),s||la(e)?Tu(e,n,a,r,l,u):qd(e,n,g,a,r,l,u);if(!(a&ge)){var F=_&&C.call(e,"__wrapped__"),c=A&&C.call(n,"__wrapped__");if(F||c){var G=F?e.value():e,B=c?n.value():n;return u||(u=new ze),l(G,B,a,r,u)}}return V?(u||(u=new ze),cd(e,n,a,r,l,u)):!1}function ld(e){return ae(e)&&ye(e)==Je}function Pl(e,n,a,r){var l=a.length,u=l,s=!r;if(e==null)return!u;for(e=W(e);l--;){var d=a[l];if(s&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}for(;++l<u;){d=a[l];var g=d[0],T=e[g],_=d[1];if(s&&d[2]){if(T===t&&!(g in e))return!1}else{var A=new ze;if(r)var V=r(T,_,g,e,n,A);if(!(V===t?Sa(_,T,ge|Ve,r,A):V))return!1}}return!0}function Ui(e){if(!ne(e)||Ud(e))return!1;var n=yn(e)?lm:J0;return n.test(Mn(e))}function td(e){return ae(e)&&Ee(e)==pa}function id(e){return ae(e)&&ye(e)==We}function ud(e){return ae(e)&&Pr(e.length)&&!!Z[Ee(e)]}function Di(e){return typeof e=="function"?e:e==null?Ne:typeof e=="object"?I(e)?Hi(e[0],e[1]):xi(e):os(e)}function wl(e){if(!Ba(e))return mm(e);var n=[];for(var a in W(e))C.call(e,a)&&a!="constructor"&&n.push(a);return n}function sd(e){if(!ne(e))return Hd(e);var n=Ba(e),a=[];for(var r in e)r=="constructor"&&(n||!C.call(e,r))||a.push(r);return a}function Il(e,n){return e<n}function Mi(e,n){var a=-1,r=he(e)?y(e.length):[];return bn(e,function(l,u,s){r[++a]=n(l,u,s)}),r}function xi(e){var n=zl(e);return n.length==1&&n[0][2]?Nu(n[0][0],n[0][1]):function(a){return a===e||Pl(a,e,n)}}function Hi(e,n){return Ql(e)&&fu(n)?Nu(ln(e),n):function(a){var r=st(a,e);return r===t&&r===n?ot(a,e):Sa(n,r,ge|Ve)}}function Er(e,n,a,r,l){e!==n&&Sl(n,function(u,s){if(l||(l=new ze),ne(u))od(e,n,s,a,Er,r,l);else{var d=r?r(et(e,s),u,s+"",e,n,l):t;d===t&&(d=u),Rl(e,s,d)}},fe)}function od(e,n,a,r,l,u,s){var d=et(e,a),g=et(n,a),T=s.get(g);if(T){Rl(e,a,T);return}var _=u?u(d,g,a+"",e,n,s):t,A=_===t;if(A){var V=I(g),F=!V&&Fn(g),c=!V&&!F&&la(g);_=g,V||F||c?I(d)?_=d:te(d)?_=Ae(d):F?(A=!1,_=au(g,!0)):c?(A=!1,_=ru(g,!0)):_=[]:wa(g)||xn(g)?(_=d,xn(d)?_=Xu(d):(!ne(d)||yn(d))&&(_=hu(g))):A=!1}A&&(s.set(g,_),l(_,g,r,u,s),s.delete(g)),Rl(e,a,_)}function Yi(e,n){var a=e.length;if(a)return n+=n<0?a:0,kn(n,a)?e[n]:t}function Ci(e,n,a){n.length?n=Q(n,function(u){return I(u)?function(s){return Un(s,u.length===1?u[0]:u)}:u}):n=[Ne];var r=-1;n=Q(n,Re(q()));var l=Mi(e,function(u,s,d){var g=Q(n,function(T){return T(u)});return{criteria:g,index:++r,value:u}});return Lo(l,function(u,s){return fd(u,s,a)})}function md(e,n){return Ji(e,n,function(a,r){return ot(e,r)})}function Ji(e,n,a){for(var r=-1,l=n.length,u={};++r<l;){var s=n[r],d=Un(e,s);a(d,s)&&qa(u,Kn(s,e),d)}return u}function dd(e){return function(n){return Un(n,e)}}function Ll(e,n,a,r){var l=r?Io:Jn,u=-1,s=n.length,d=e;for(e===n&&(n=Ae(n)),a&&(d=Q(e,Re(a)));++u<s;)for(var g=0,T=n[u],_=a?a(T):T;(g=l(d,_,g,r))>-1;)d!==e&&ur.call(d,g,1),ur.call(e,g,1);return e}function Wi(e,n){for(var a=e?n.length:0,r=a-1;a--;){var l=n[a];if(a==r||l!==u){var u=l;kn(l)?ur.call(e,l,1):Ul(e,l)}}return e}function Ol(e,n){return e+mr(Fi()*(n-e+1))}function vd(e,n,a,r){for(var l=-1,u=se(or((n-e)/(a||1)),0),s=y(u);u--;)s[r?u:++l]=e,e+=a;return s}function Gl(e,n){var a="";if(!e||n<1||n>_n)return a;do n%2&&(a+=e),n=mr(n/2),n&&(e+=e);while(n);return a}function j(e,n){return nt(bu(e,n,Ne),e+"")}function gd(e){return ci(ta(e))}function kd(e,n){var a=ta(e);return Rr(a,jn(n,0,a.length))}function qa(e,n,a,r){if(!ne(e))return e;n=Kn(n,e);for(var l=-1,u=n.length,s=u-1,d=e;d!=null&&++l<u;){var g=ln(n[l]),T=a;if(g==="__proto__"||g==="constructor"||g==="prototype")return e;if(l!=s){var _=d[g];T=r?r(_,g,d):t,T===t&&(T=ne(_)?_:kn(n[l+1])?[]:{})}Ka(d,g,T),d=d[g]}return e}var $i=dr?function(e,n){return dr.set(e,n),e}:Ne,yd=sr?function(e,n){return sr(e,"toString",{configurable:!0,enumerable:!1,value:dt(n),writable:!0})}:Ne;function pd(e){return Rr(ta(e))}function De(e,n,a){var r=-1,l=e.length;n<0&&(n=-n>l?0:l+n),a=a>l?l:a,a<0&&(a+=l),l=n>a?0:a-n>>>0,n>>>=0;for(var u=y(l);++r<l;)u[r]=e[r+n];return u}function Ed(e,n){var a;return bn(e,function(r,l,u){return a=n(r,l,u),!a}),!!a}function Tr(e,n,a){var r=0,l=e==null?r:e.length;if(typeof n=="number"&&n===n&&l<=T0){for(;r<l;){var u=r+l>>>1,s=e[u];s!==null&&!Se(s)&&(a?s<=n:s<n)?r=u+1:l=u}return l}return jl(e,n,Ne,a)}function jl(e,n,a,r){var l=0,u=e==null?0:e.length;if(u===0)return 0;n=a(n);for(var s=n!==n,d=n===null,g=Se(n),T=n===t;l<u;){var _=mr((l+u)/2),A=a(e[_]),V=A!==t,F=A===null,c=A===A,G=Se(A);if(s)var B=r||c;else T?B=c&&(r||V):d?B=c&&V&&(r||!F):g?B=c&&V&&!F&&(r||!G):F||G?B=!1:B=r?A<=n:A<n;B?l=_+1:u=_}return ke(u,E0)}function zi(e,n){for(var a=-1,r=e.length,l=0,u=[];++a<r;){var s=e[a],d=n?n(s):s;if(!a||!Ze(d,g)){var g=d;u[l++]=s===0?0:s}}return u}function Zi(e){return typeof e=="number"?e:Se(e)?xa:+e}function Fe(e){if(typeof e=="string")return e;if(I(e))return Q(e,Fe)+"";if(Se(e))return Si?Si.call(e):"";var n=e+"";return n=="0"&&1/e==-wn?"-0":n}function Vn(e,n,a){var r=-1,l=Za,u=e.length,s=!0,d=[],g=d;if(a)s=!1,l=kl;else if(u>=h){var T=n?null:Fd(e);if(T)return Xa(T);s=!1,l=Aa,g=new Gn}else g=n?[]:d;e:for(;++r<u;){var _=e[r],A=n?n(_):_;if(_=a||_!==0?_:0,s&&A===A){for(var V=g.length;V--;)if(g[V]===A)continue e;n&&g.push(A),d.push(_)}else l(g,A,a)||(g!==d&&g.push(A),d.push(_))}return d}function Ul(e,n){return n=Kn(n,e),e=Vu(e,n),e==null||delete e[ln(Me(n))]}function Qi(e,n,a,r){return qa(e,n,a(Un(e,n)),r)}function _r(e,n,a,r){for(var l=e.length,u=r?l:-1;(r?u--:++u<l)&&n(e[u],u,e););return a?De(e,r?0:u,r?u+1:l):De(e,r?u+1:0,r?l:u)}function Xi(e,n){var a=e;return a instanceof D&&(a=a.value()),yl(n,function(r,l){return l.func.apply(l.thisArg,hn([r],l.args))},a)}function Dl(e,n,a){var r=e.length;if(r<2)return r?Vn(e[0]):[];for(var l=-1,u=y(r);++l<r;)for(var s=e[l],d=-1;++d<r;)d!=l&&(u[l]=Ra(u[l]||s,e[d],n,a));return Vn(ve(u,1),n,a)}function eu(e,n,a){for(var r=-1,l=e.length,u=n.length,s={};++r<l;){var d=r<u?n[r]:t;a(s,e[r],d)}return s}function Ml(e){return te(e)?e:[]}function xl(e){return typeof e=="function"?e:Ne}function Kn(e,n){return I(e)?e:Ql(e,n)?[e]:Su(Y(e))}var Td=j;function Rn(e,n,a){var r=e.length;return a=a===t?r:a,!n&&a>=r?e:De(e,n,a)}var nu=tm||function(e){return de.clearTimeout(e)};function au(e,n){if(n)return e.slice();var a=e.length,r=Ni?Ni(a):new e.constructor(a);return e.copy(r),r}function Hl(e){var n=new e.constructor(e.byteLength);return new tr(n).set(new tr(e)),n}function _d(e,n){var a=n?Hl(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}function Ad(e){var n=new e.constructor(e.source,jt.exec(e));return n.lastIndex=e.lastIndex,n}function hd(e){return Va?W(Va.call(e)):{}}function ru(e,n){var a=n?Hl(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function lu(e,n){if(e!==n){var a=e!==t,r=e===null,l=e===e,u=Se(e),s=n!==t,d=n===null,g=n===n,T=Se(n);if(!d&&!T&&!u&&e>n||u&&s&&g&&!d&&!T||r&&s&&g||!a&&g||!l)return 1;if(!r&&!u&&!T&&e<n||T&&a&&l&&!r&&!u||d&&a&&l||!s&&l||!g)return-1}return 0}function fd(e,n,a){for(var r=-1,l=e.criteria,u=n.criteria,s=l.length,d=a.length;++r<s;){var g=lu(l[r],u[r]);if(g){if(r>=d)return g;var T=a[r];return g*(T=="desc"?-1:1)}}return e.index-n.index}function tu(e,n,a,r){for(var l=-1,u=e.length,s=a.length,d=-1,g=n.length,T=se(u-s,0),_=y(g+T),A=!r;++d<g;)_[d]=n[d];for(;++l<s;)(A||l<u)&&(_[a[l]]=e[l]);for(;T--;)_[d++]=e[l++];return _}function iu(e,n,a,r){for(var l=-1,u=e.length,s=-1,d=a.length,g=-1,T=n.length,_=se(u-d,0),A=y(_+T),V=!r;++l<_;)A[l]=e[l];for(var F=l;++g<T;)A[F+g]=n[g];for(;++s<d;)(V||l<u)&&(A[F+a[s]]=e[l++]);return A}function Ae(e,n){var a=-1,r=e.length;for(n||(n=y(r));++a<r;)n[a]=e[a];return n}function rn(e,n,a,r){var l=!a;a||(a={});for(var u=-1,s=n.length;++u<s;){var d=n[u],g=r?r(a[d],e[d],d,a,e):t;g===t&&(g=e[d]),l?dn(a,d,g):Ka(a,d,g)}return a}function Nd(e,n){return rn(e,Zl(e),n)}function bd(e,n){return rn(e,_u(e),n)}function Ar(e,n){return function(a,r){var l=I(a)?So:Cm,u=n?n():{};return l(a,e,q(r,2),u)}}function na(e){return j(function(n,a){var r=-1,l=a.length,u=l>1?a[l-1]:t,s=l>2?a[2]:t;for(u=e.length>3&&typeof u=="function"?(l--,u):t,s&&Te(a[0],a[1],s)&&(u=l<3?t:u,l=1),n=W(n);++r<l;){var d=a[r];d&&e(n,d,r,u)}return n})}function uu(e,n){return function(a,r){if(a==null)return a;if(!he(a))return e(a,r);for(var l=a.length,u=n?l:-1,s=W(a);(n?u--:++u<l)&&r(s[u],u,s)!==!1;);return a}}function su(e){return function(n,a,r){for(var l=-1,u=W(n),s=r(n),d=s.length;d--;){var g=s[e?d:++l];if(a(u[g],g,u)===!1)break}return n}}function Vd(e,n,a){var r=n&ee,l=ca(e);function u(){var s=this&&this!==de&&this instanceof u?l:e;return s.apply(r?a:this,arguments)}return u}function ou(e){return function(n){n=Y(n);var a=Wn(n)?$e(n):t,r=a?a[0]:n.charAt(0),l=a?Rn(a,1).join(""):n.slice(1);return r[e]()+l}}function aa(e){return function(n){return yl(us(is(n).replace(yo,"")),e,"")}}function ca(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var a=ea(e.prototype),r=e.apply(a,n);return ne(r)?r:a}}function Kd(e,n,a){var r=ca(e);function l(){for(var u=arguments.length,s=y(u),d=u,g=ra(l);d--;)s[d]=arguments[d];var T=u<3&&s[0]!==g&&s[u-1]!==g?[]:fn(s,g);if(u-=T.length,u<a)return ku(e,n,hr,l.placeholder,t,s,T,t,t,a-u);var _=this&&this!==de&&this instanceof l?r:e;return Ke(_,this,s)}return l}function mu(e){return function(n,a,r){var l=W(n);if(!he(n)){var u=q(a,3);n=me(n),a=function(d){return u(l[d],d,l)}}var s=e(n,a,r);return s>-1?l[u?n[s]:s]:t}}function du(e){return gn(function(n){var a=n.length,r=a,l=je.prototype.thru;for(e&&n.reverse();r--;){var u=n[r];if(typeof u!="function")throw new Ge(N);if(l&&!s&&Vr(u)=="wrapper")var s=new je([],!0)}for(r=s?r:a;++r<a;){u=n[r];var d=Vr(u),g=d=="wrapper"?$l(u):t;g&&Xl(g[0])&&g[1]==(Ce|He|Ye|Bn)&&!g[4].length&&g[9]==1?s=s[Vr(g[0])].apply(s,g[3]):s=u.length==1&&Xl(u)?s[d]():s.thru(u)}return function(){var T=arguments,_=T[0];if(s&&T.length==1&&I(_))return s.plant(_).value();for(var A=0,V=a?n[A].apply(this,T):_;++A<a;)V=n[A].call(this,V);return V}})}function hr(e,n,a,r,l,u,s,d,g,T){var _=n&Ce,A=n&ee,V=n&Tn,F=n&(He|qn),c=n&Pn,G=V?t:ca(e);function B(){for(var U=arguments.length,M=y(U),qe=U;qe--;)M[qe]=arguments[qe];if(F)var _e=ra(B),ce=Go(M,_e);if(r&&(M=tu(M,r,l,F)),u&&(M=iu(M,u,s,F)),U-=ce,F&&U<T){var ie=fn(M,_e);return ku(e,n,hr,B.placeholder,a,M,ie,d,g,T-U)}var Qe=A?a:this,En=V?Qe[e]:e;return U=M.length,d?M=Cd(M,d):c&&U>1&&M.reverse(),_&&g<U&&(M.length=g),this&&this!==de&&this instanceof B&&(En=G||ca(En)),En.apply(Qe,M)}return B}function vu(e,n){return function(a,r){return ed(a,e,n(r),{})}}function fr(e,n){return function(a,r){var l;if(a===t&&r===t)return n;if(a!==t&&(l=a),r!==t){if(l===t)return r;typeof a=="string"||typeof r=="string"?(a=Fe(a),r=Fe(r)):(a=Zi(a),r=Zi(r)),l=e(a,r)}return l}}function Yl(e){return gn(function(n){return n=Q(n,Re(q())),j(function(a){var r=this;return e(n,function(l){return Ke(l,r,a)})})})}function Nr(e,n){n=n===t?" ":Fe(n);var a=n.length;if(a<2)return a?Gl(n,e):n;var r=Gl(n,or(e/$n(n)));return Wn(n)?Rn($e(r),0,e).join(""):r.slice(0,e)}function Rd(e,n,a,r){var l=n&ee,u=ca(e);function s(){for(var d=-1,g=arguments.length,T=-1,_=r.length,A=y(_+g),V=this&&this!==de&&this instanceof s?u:e;++T<_;)A[T]=r[T];for(;g--;)A[T++]=arguments[++d];return Ke(V,l?a:this,A)}return s}function gu(e){return function(n,a,r){return r&&typeof r!="number"&&Te(n,a,r)&&(a=r=t),n=pn(n),a===t?(a=n,n=0):a=pn(a),r=r===t?n<a?1:-1:pn(r),vd(n,a,r,e)}}function br(e){return function(n,a){return typeof n=="string"&&typeof a=="string"||(n=xe(n),a=xe(a)),e(n,a)}}function ku(e,n,a,r,l,u,s,d,g,T){var _=n&He,A=_?s:t,V=_?t:s,F=_?u:t,c=_?t:u;n|=_?Ye:cn,n&=~(_?cn:Ye),n&Ma||(n&=-4);var G=[e,n,l,F,A,c,V,d,g,T],B=a.apply(t,G);return Xl(e)&&Ku(B,G),B.placeholder=r,Ru(B,e,n)}function Cl(e){var n=ue[e];return function(a,r){if(a=xe(a),r=r==null?0:ke(O(r),292),r&&Ri(a)){var l=(Y(a)+"e").split("e"),u=n(l[0]+"e"+(+l[1]+r));return l=(Y(u)+"e").split("e"),+(l[0]+"e"+(+l[1]-r))}return n(a)}}var Fd=Qn&&1/Xa(new Qn([,-0]))[1]==wn?function(e){return new Qn(e)}:kt;function yu(e){return function(n){var a=ye(n);return a==Je?fl(n):a==We?Yo(n):Oo(n,e(n))}}function vn(e,n,a,r,l,u,s,d){var g=n&Tn;if(!g&&typeof e!="function")throw new Ge(N);var T=r?r.length:0;if(T||(n&=-97,r=l=t),s=s===t?s:se(O(s),0),d=d===t?d:O(d),T-=l?l.length:0,n&cn){var _=r,A=l;r=l=t}var V=g?t:$l(e),F=[e,n,a,r,l,_,A,u,s,d];if(V&&xd(F,V),e=F[0],n=F[1],a=F[2],r=F[3],l=F[4],d=F[9]=F[9]===t?g?0:e.length:se(F[9]-T,0),!d&&n&(He|qn)&&(n&=-25),!n||n==ee)var c=Vd(e,n,a);else n==He||n==qn?c=Kd(e,n,d):(n==Ye||n==(ee|Ye))&&!l.length?c=Rd(e,n,a,r):c=hr.apply(t,F);var G=V?$i:Ku;return Ru(G(c,F),e,n)}function pu(e,n,a,r){return e===t||Ze(e,Zn[a])&&!C.call(r,a)?n:e}function Eu(e,n,a,r,l,u){return ne(e)&&ne(n)&&(u.set(n,e),Er(e,n,t,Eu,u),u.delete(n)),e}function Sd(e){return wa(e)?t:e}function Tu(e,n,a,r,l,u){var s=a&ge,d=e.length,g=n.length;if(d!=g&&!(s&&g>d))return!1;var T=u.get(e),_=u.get(n);if(T&&_)return T==n&&_==e;var A=-1,V=!0,F=a&Ve?new Gn:t;for(u.set(e,n),u.set(n,e);++A<d;){var c=e[A],G=n[A];if(r)var B=s?r(G,c,A,n,e,u):r(c,G,A,e,n,u);if(B!==t){if(B)continue;V=!1;break}if(F){if(!pl(n,function(U,M){if(!Aa(F,M)&&(c===U||l(c,U,a,r,u)))return F.push(M)})){V=!1;break}}else if(!(c===G||l(c,G,a,r,u))){V=!1;break}}return u.delete(e),u.delete(n),V}function qd(e,n,a,r,l,u,s){switch(a){case Yn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case _a:return!(e.byteLength!=n.byteLength||!u(new tr(e),new tr(n)));case ga:case ka:case ya:return Ze(+e,+n);case Ya:return e.name==n.name&&e.message==n.message;case pa:case Ea:return e==n+"";case Je:var d=fl;case We:var g=r&ge;if(d||(d=Xa),e.size!=n.size&&!g)return!1;var T=s.get(e);if(T)return T==n;r|=Ve,s.set(e,n);var _=Tu(d(e),d(n),r,l,u,s);return s.delete(e),_;case Ja:if(Va)return Va.call(e)==Va.call(n)}return!1}function cd(e,n,a,r,l,u){var s=a&ge,d=Jl(e),g=d.length,T=Jl(n),_=T.length;if(g!=_&&!s)return!1;for(var A=g;A--;){var V=d[A];if(!(s?V in n:C.call(n,V)))return!1}var F=u.get(e),c=u.get(n);if(F&&c)return F==n&&c==e;var G=!0;u.set(e,n),u.set(n,e);for(var B=s;++A<g;){V=d[A];var U=e[V],M=n[V];if(r)var qe=s?r(M,U,V,n,e,u):r(U,M,V,e,n,u);if(!(qe===t?U===M||l(U,M,a,r,u):qe)){G=!1;break}B||(B=V=="constructor")}if(G&&!B){var _e=e.constructor,ce=n.constructor;_e!=ce&&"constructor"in e&&"constructor"in n&&!(typeof _e=="function"&&_e instanceof _e&&typeof ce=="function"&&ce instanceof ce)&&(G=!1)}return u.delete(e),u.delete(n),G}function gn(e){return nt(bu(e,t,Pu),e+"")}function Jl(e){return Gi(e,me,Zl)}function Wl(e){return Gi(e,fe,_u)}var $l=dr?function(e){return dr.get(e)}:kt;function Vr(e){for(var n=e.name+"",a=Xn[n],r=C.call(Xn,n)?a.length:0;r--;){var l=a[r],u=l.func;if(u==null||u==e)return l.name}return n}function ra(e){var n=C.call(i,"placeholder")?i:e;return n.placeholder}function q(){var e=i.iteratee||vt;return e=e===vt?Di:e,arguments.length?e(arguments[0],arguments[1]):e}function Kr(e,n){var a=e.__data__;return jd(n)?a[typeof n=="string"?"string":"hash"]:a.map}function zl(e){for(var n=me(e),a=n.length;a--;){var r=n[a],l=e[r];n[a]=[r,l,fu(l)]}return n}function Dn(e,n){var a=Mo(e,n);return Ui(a)?a:t}function Bd(e){var n=C.call(e,Ln),a=e[Ln];try{e[Ln]=t;var r=!0}catch{}var l=rr.call(e);return r&&(n?e[Ln]=a:delete e[Ln]),l}var Zl=bl?function(e){return e==null?[]:(e=W(e),An(bl(e),function(n){return Vi.call(e,n)}))}:yt,_u=bl?function(e){for(var n=[];e;)hn(n,Zl(e)),e=ir(e);return n}:yt,ye=Ee;(Vl&&ye(new Vl(new ArrayBuffer(1)))!=Yn||fa&&ye(new fa)!=Je||Kl&&ye(Kl.resolve())!=It||Qn&&ye(new Qn)!=We||Na&&ye(new Na)!=Ta)&&(ye=function(e){var n=Ee(e),a=n==sn?e.constructor:t,r=a?Mn(a):"";if(r)switch(r){case km:return Yn;case ym:return Je;case pm:return It;case Em:return We;case Tm:return Ta}return n});function Pd(e,n,a){for(var r=-1,l=a.length;++r<l;){var u=a[r],s=u.size;switch(u.type){case"drop":e+=s;break;case"dropRight":n-=s;break;case"take":n=ke(n,e+s);break;case"takeRight":e=se(e,n-s);break}}return{start:e,end:n}}function wd(e){var n=e.match(j0);return n?n[1].split(U0):[]}function Au(e,n,a){n=Kn(n,e);for(var r=-1,l=n.length,u=!1;++r<l;){var s=ln(n[r]);if(!(u=e!=null&&a(e,s)))break;e=e[s]}return u||++r!=l?u:(l=e==null?0:e.length,!!l&&Pr(l)&&kn(s,l)&&(I(e)||xn(e)))}function Id(e){var n=e.length,a=new e.constructor(n);return n&&typeof e[0]=="string"&&C.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function hu(e){return typeof e.constructor=="function"&&!Ba(e)?ea(ir(e)):{}}function Ld(e,n,a){var r=e.constructor;switch(n){case _a:return Hl(e);case ga:case ka:return new r(+e);case Yn:return _d(e,a);case zr:case Zr:case Qr:case Xr:case el:case nl:case al:case rl:case ll:return ru(e,a);case Je:return new r;case ya:case Ea:return new r(e);case pa:return Ad(e);case We:return new r;case Ja:return hd(e)}}function Od(e,n){var a=n.length;if(!a)return e;var r=a-1;return n[r]=(a>1?"& ":"")+n[r],n=n.join(a>2?", ":" "),e.replace(G0,`{
/* [wrapped with `+n+`] */
`)}function Gd(e){return I(e)||xn(e)||!!(Ki&&e&&e[Ki])}function kn(e,n){var a=typeof e;return n=n??_n,!!n&&(a=="number"||a!="symbol"&&$0.test(e))&&e>-1&&e%1==0&&e<n}function Te(e,n,a){if(!ne(a))return!1;var r=typeof n;return(r=="number"?he(a)&&kn(n,a.length):r=="string"&&n in a)?Ze(a[n],e):!1}function Ql(e,n){if(I(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||Se(e)?!0:w0.test(e)||!P0.test(e)||n!=null&&e in W(n)}function jd(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Xl(e){var n=Vr(e),a=i[n];if(typeof a!="function"||!(n in D.prototype))return!1;if(e===a)return!0;var r=$l(a);return!!r&&e===r[0]}function Ud(e){return!!fi&&fi in e}var Dd=nr?yn:pt;function Ba(e){var n=e&&e.constructor,a=typeof n=="function"&&n.prototype||Zn;return e===a}function fu(e){return e===e&&!ne(e)}function Nu(e,n){return function(a){return a==null?!1:a[e]===n&&(n!==t||e in W(a))}}function Md(e){var n=cr(e,function(r){return a.size===S&&a.clear(),r}),a=n.cache;return n}function xd(e,n){var a=e[1],r=n[1],l=a|r,u=l<(ee|Tn|Ce),s=r==Ce&&a==He||r==Ce&&a==Bn&&e[7].length<=n[8]||r==(Ce|Bn)&&n[7].length<=n[8]&&a==He;if(!(u||s))return e;r&ee&&(e[2]=n[2],l|=a&ee?0:Ma);var d=n[3];if(d){var g=e[3];e[3]=g?tu(g,d,n[4]):d,e[4]=g?fn(e[3],P):n[4]}return d=n[5],d&&(g=e[5],e[5]=g?iu(g,d,n[6]):d,e[6]=g?fn(e[5],P):n[6]),d=n[7],d&&(e[7]=d),r&Ce&&(e[8]=e[8]==null?n[8]:ke(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=l,e}function Hd(e){var n=[];if(e!=null)for(var a in W(e))n.push(a);return n}function Yd(e){return rr.call(e)}function bu(e,n,a){return n=se(n===t?e.length-1:n,0),function(){for(var r=arguments,l=-1,u=se(r.length-n,0),s=y(u);++l<u;)s[l]=r[n+l];l=-1;for(var d=y(n+1);++l<n;)d[l]=r[l];return d[n]=a(s),Ke(e,this,d)}}function Vu(e,n){return n.length<2?e:Un(e,De(n,0,-1))}function Cd(e,n){for(var a=e.length,r=ke(n.length,a),l=Ae(e);r--;){var u=n[r];e[r]=kn(u,a)?l[u]:t}return e}function et(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var Ku=Fu($i),Pa=um||function(e,n){return de.setTimeout(e,n)},nt=Fu(yd);function Ru(e,n,a){var r=n+"";return nt(e,Od(r,Jd(wd(r),a)))}function Fu(e){var n=0,a=0;return function(){var r=dm(),l=g0-(r-a);if(a=r,l>0){if(++n>=v0)return arguments[0]}else n=0;return e.apply(t,arguments)}}function Rr(e,n){var a=-1,r=e.length,l=r-1;for(n=n===t?r:n;++a<n;){var u=Ol(a,l),s=e[u];e[u]=e[a],e[a]=s}return e.length=n,e}var Su=Md(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(I0,function(a,r,l,u){n.push(l?u.replace(x0,"$1"):r||a)}),n});function ln(e){if(typeof e=="string"||Se(e))return e;var n=e+"";return n=="0"&&1/e==-wn?"-0":n}function Mn(e){if(e!=null){try{return ar.call(e)}catch{}try{return e+""}catch{}}return""}function Jd(e,n){return Oe(_0,function(a){var r="_."+a[0];n&a[1]&&!Za(e,r)&&e.push(r)}),e.sort()}function qu(e){if(e instanceof D)return e.clone();var n=new je(e.__wrapped__,e.__chain__);return n.__actions__=Ae(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Wd(e,n,a){(a?Te(e,n,a):n===t)?n=1:n=se(O(n),0);var r=e==null?0:e.length;if(!r||n<1)return[];for(var l=0,u=0,s=y(or(r/n));l<r;)s[u++]=De(e,l,l+=n);return s}function $d(e){for(var n=-1,a=e==null?0:e.length,r=0,l=[];++n<a;){var u=e[n];u&&(l[r++]=u)}return l}function zd(){var e=arguments.length;if(!e)return[];for(var n=y(e-1),a=arguments[0],r=e;r--;)n[r-1]=arguments[r];return hn(I(a)?Ae(a):[a],ve(n,1))}var Zd=j(function(e,n){return te(e)?Ra(e,ve(n,1,te,!0)):[]}),Qd=j(function(e,n){var a=Me(n);return te(a)&&(a=t),te(e)?Ra(e,ve(n,1,te,!0),q(a,2)):[]}),Xd=j(function(e,n){var a=Me(n);return te(a)&&(a=t),te(e)?Ra(e,ve(n,1,te,!0),t,a):[]});function ev(e,n,a){var r=e==null?0:e.length;return r?(n=a||n===t?1:O(n),De(e,n<0?0:n,r)):[]}function nv(e,n,a){var r=e==null?0:e.length;return r?(n=a||n===t?1:O(n),n=r-n,De(e,0,n<0?0:n)):[]}function av(e,n){return e&&e.length?_r(e,q(n,3),!0,!0):[]}function rv(e,n){return e&&e.length?_r(e,q(n,3),!0):[]}function lv(e,n,a,r){var l=e==null?0:e.length;return l?(a&&typeof a!="number"&&Te(e,n,a)&&(a=0,r=l),zm(e,n,a,r)):[]}function cu(e,n,a){var r=e==null?0:e.length;if(!r)return-1;var l=a==null?0:O(a);return l<0&&(l=se(r+l,0)),Qa(e,q(n,3),l)}function Bu(e,n,a){var r=e==null?0:e.length;if(!r)return-1;var l=r-1;return a!==t&&(l=O(a),l=a<0?se(r+l,0):ke(l,r-1)),Qa(e,q(n,3),l,!0)}function Pu(e){var n=e==null?0:e.length;return n?ve(e,1):[]}function tv(e){var n=e==null?0:e.length;return n?ve(e,wn):[]}function iv(e,n){var a=e==null?0:e.length;return a?(n=n===t?1:O(n),ve(e,n)):[]}function uv(e){for(var n=-1,a=e==null?0:e.length,r={};++n<a;){var l=e[n];r[l[0]]=l[1]}return r}function wu(e){return e&&e.length?e[0]:t}function sv(e,n,a){var r=e==null?0:e.length;if(!r)return-1;var l=a==null?0:O(a);return l<0&&(l=se(r+l,0)),Jn(e,n,l)}function ov(e){var n=e==null?0:e.length;return n?De(e,0,-1):[]}var mv=j(function(e){var n=Q(e,Ml);return n.length&&n[0]===e[0]?Bl(n):[]}),dv=j(function(e){var n=Me(e),a=Q(e,Ml);return n===Me(a)?n=t:a.pop(),a.length&&a[0]===e[0]?Bl(a,q(n,2)):[]}),vv=j(function(e){var n=Me(e),a=Q(e,Ml);return n=typeof n=="function"?n:t,n&&a.pop(),a.length&&a[0]===e[0]?Bl(a,t,n):[]});function gv(e,n){return e==null?"":om.call(e,n)}function Me(e){var n=e==null?0:e.length;return n?e[n-1]:t}function kv(e,n,a){var r=e==null?0:e.length;if(!r)return-1;var l=r;return a!==t&&(l=O(a),l=l<0?se(r+l,0):ke(l,r-1)),n===n?Jo(e,n,l):Qa(e,ki,l,!0)}function yv(e,n){return e&&e.length?Yi(e,O(n)):t}var pv=j(Iu);function Iu(e,n){return e&&e.length&&n&&n.length?Ll(e,n):e}function Ev(e,n,a){return e&&e.length&&n&&n.length?Ll(e,n,q(a,2)):e}function Tv(e,n,a){return e&&e.length&&n&&n.length?Ll(e,n,t,a):e}var _v=gn(function(e,n){var a=e==null?0:e.length,r=Fl(e,n);return Wi(e,Q(n,function(l){return kn(l,a)?+l:l}).sort(lu)),r});function Av(e,n){var a=[];if(!(e&&e.length))return a;var r=-1,l=[],u=e.length;for(n=q(n,3);++r<u;){var s=e[r];n(s,r,e)&&(a.push(s),l.push(r))}return Wi(e,l),a}function at(e){return e==null?e:gm.call(e)}function hv(e,n,a){var r=e==null?0:e.length;return r?(a&&typeof a!="number"&&Te(e,n,a)?(n=0,a=r):(n=n==null?0:O(n),a=a===t?r:O(a)),De(e,n,a)):[]}function fv(e,n){return Tr(e,n)}function Nv(e,n,a){return jl(e,n,q(a,2))}function bv(e,n){var a=e==null?0:e.length;if(a){var r=Tr(e,n);if(r<a&&Ze(e[r],n))return r}return-1}function Vv(e,n){return Tr(e,n,!0)}function Kv(e,n,a){return jl(e,n,q(a,2),!0)}function Rv(e,n){var a=e==null?0:e.length;if(a){var r=Tr(e,n,!0)-1;if(Ze(e[r],n))return r}return-1}function Fv(e){return e&&e.length?zi(e):[]}function Sv(e,n){return e&&e.length?zi(e,q(n,2)):[]}function qv(e){var n=e==null?0:e.length;return n?De(e,1,n):[]}function cv(e,n,a){return e&&e.length?(n=a||n===t?1:O(n),De(e,0,n<0?0:n)):[]}function Bv(e,n,a){var r=e==null?0:e.length;return r?(n=a||n===t?1:O(n),n=r-n,De(e,n<0?0:n,r)):[]}function Pv(e,n){return e&&e.length?_r(e,q(n,3),!1,!0):[]}function wv(e,n){return e&&e.length?_r(e,q(n,3)):[]}var Iv=j(function(e){return Vn(ve(e,1,te,!0))}),Lv=j(function(e){var n=Me(e);return te(n)&&(n=t),Vn(ve(e,1,te,!0),q(n,2))}),Ov=j(function(e){var n=Me(e);return n=typeof n=="function"?n:t,Vn(ve(e,1,te,!0),t,n)});function Gv(e){return e&&e.length?Vn(e):[]}function jv(e,n){return e&&e.length?Vn(e,q(n,2)):[]}function Uv(e,n){return n=typeof n=="function"?n:t,e&&e.length?Vn(e,t,n):[]}function rt(e){if(!(e&&e.length))return[];var n=0;return e=An(e,function(a){if(te(a))return n=se(a.length,n),!0}),Al(n,function(a){return Q(e,El(a))})}function Lu(e,n){if(!(e&&e.length))return[];var a=rt(e);return n==null?a:Q(a,function(r){return Ke(n,t,r)})}var Dv=j(function(e,n){return te(e)?Ra(e,n):[]}),Mv=j(function(e){return Dl(An(e,te))}),xv=j(function(e){var n=Me(e);return te(n)&&(n=t),Dl(An(e,te),q(n,2))}),Hv=j(function(e){var n=Me(e);return n=typeof n=="function"?n:t,Dl(An(e,te),t,n)}),Yv=j(rt);function Cv(e,n){return eu(e||[],n||[],Ka)}function Jv(e,n){return eu(e||[],n||[],qa)}var Wv=j(function(e){var n=e.length,a=n>1?e[n-1]:t;return a=typeof a=="function"?(e.pop(),a):t,Lu(e,a)});function Ou(e){var n=i(e);return n.__chain__=!0,n}function $v(e,n){return n(e),e}function Fr(e,n){return n(e)}var zv=gn(function(e){var n=e.length,a=n?e[0]:0,r=this.__wrapped__,l=function(u){return Fl(u,e)};return n>1||this.__actions__.length||!(r instanceof D)||!kn(a)?this.thru(l):(r=r.slice(a,+a+(n?1:0)),r.__actions__.push({func:Fr,args:[l],thisArg:t}),new je(r,this.__chain__).thru(function(u){return n&&!u.length&&u.push(t),u}))});function Zv(){return Ou(this)}function Qv(){return new je(this.value(),this.__chain__)}function Xv(){this.__values__===t&&(this.__values__=Zu(this.value()));var e=this.__index__>=this.__values__.length,n=e?t:this.__values__[this.__index__++];return{done:e,value:n}}function eg(){return this}function ng(e){for(var n,a=this;a instanceof gr;){var r=qu(a);r.__index__=0,r.__values__=t,n?l.__wrapped__=r:n=r;var l=r;a=a.__wrapped__}return l.__wrapped__=e,n}function ag(){var e=this.__wrapped__;if(e instanceof D){var n=e;return this.__actions__.length&&(n=new D(this)),n=n.reverse(),n.__actions__.push({func:Fr,args:[at],thisArg:t}),new je(n,this.__chain__)}return this.thru(at)}function rg(){return Xi(this.__wrapped__,this.__actions__)}var lg=Ar(function(e,n,a){C.call(e,a)?++e[a]:dn(e,a,1)});function tg(e,n,a){var r=I(e)?vi:$m;return a&&Te(e,n,a)&&(n=t),r(e,q(n,3))}function ig(e,n){var a=I(e)?An:Li;return a(e,q(n,3))}var ug=mu(cu),sg=mu(Bu);function og(e,n){return ve(Sr(e,n),1)}function mg(e,n){return ve(Sr(e,n),wn)}function dg(e,n,a){return a=a===t?1:O(a),ve(Sr(e,n),a)}function Gu(e,n){var a=I(e)?Oe:bn;return a(e,q(n,3))}function ju(e,n){var a=I(e)?qo:Ii;return a(e,q(n,3))}var vg=Ar(function(e,n,a){C.call(e,a)?e[a].push(n):dn(e,a,[n])});function gg(e,n,a,r){e=he(e)?e:ta(e),a=a&&!r?O(a):0;var l=e.length;return a<0&&(a=se(l+a,0)),wr(e)?a<=l&&e.indexOf(n,a)>-1:!!l&&Jn(e,n,a)>-1}var kg=j(function(e,n,a){var r=-1,l=typeof n=="function",u=he(e)?y(e.length):[];return bn(e,function(s){u[++r]=l?Ke(n,s,a):Fa(s,n,a)}),u}),yg=Ar(function(e,n,a){dn(e,a,n)});function Sr(e,n){var a=I(e)?Q:Mi;return a(e,q(n,3))}function pg(e,n,a,r){return e==null?[]:(I(n)||(n=n==null?[]:[n]),a=r?t:a,I(a)||(a=a==null?[]:[a]),Ci(e,n,a))}var Eg=Ar(function(e,n,a){e[a?0:1].push(n)},function(){return[[],[]]});function Tg(e,n,a){var r=I(e)?yl:pi,l=arguments.length<3;return r(e,q(n,4),a,l,bn)}function _g(e,n,a){var r=I(e)?co:pi,l=arguments.length<3;return r(e,q(n,4),a,l,Ii)}function Ag(e,n){var a=I(e)?An:Li;return a(e,Br(q(n,3)))}function hg(e){var n=I(e)?ci:gd;return n(e)}function fg(e,n,a){(a?Te(e,n,a):n===t)?n=1:n=O(n);var r=I(e)?Hm:kd;return r(e,n)}function Ng(e){var n=I(e)?Ym:pd;return n(e)}function bg(e){if(e==null)return 0;if(he(e))return wr(e)?$n(e):e.length;var n=ye(e);return n==Je||n==We?e.size:wl(e).length}function Vg(e,n,a){var r=I(e)?pl:Ed;return a&&Te(e,n,a)&&(n=t),r(e,q(n,3))}var Kg=j(function(e,n){if(e==null)return[];var a=n.length;return a>1&&Te(e,n[0],n[1])?n=[]:a>2&&Te(n[0],n[1],n[2])&&(n=[n[0]]),Ci(e,ve(n,1),[])}),qr=im||function(){return de.Date.now()};function Rg(e,n){if(typeof n!="function")throw new Ge(N);return e=O(e),function(){if(--e<1)return n.apply(this,arguments)}}function Uu(e,n,a){return n=a?t:n,n=e&&n==null?e.length:n,vn(e,Ce,t,t,t,t,n)}function Du(e,n){var a;if(typeof n!="function")throw new Ge(N);return e=O(e),function(){return--e>0&&(a=n.apply(this,arguments)),e<=1&&(n=t),a}}var lt=j(function(e,n,a){var r=ee;if(a.length){var l=fn(a,ra(lt));r|=Ye}return vn(e,r,n,a,l)}),Mu=j(function(e,n,a){var r=ee|Tn;if(a.length){var l=fn(a,ra(Mu));r|=Ye}return vn(n,r,e,a,l)});function xu(e,n,a){n=a?t:n;var r=vn(e,He,t,t,t,t,t,n);return r.placeholder=xu.placeholder,r}function Hu(e,n,a){n=a?t:n;var r=vn(e,qn,t,t,t,t,t,n);return r.placeholder=Hu.placeholder,r}function Yu(e,n,a){var r,l,u,s,d,g,T=0,_=!1,A=!1,V=!0;if(typeof e!="function")throw new Ge(N);n=xe(n)||0,ne(a)&&(_=!!a.leading,A="maxWait"in a,u=A?se(xe(a.maxWait)||0,n):u,V="trailing"in a?!!a.trailing:V);function F(ie){var Qe=r,En=l;return r=l=t,T=ie,s=e.apply(En,Qe),s}function c(ie){return T=ie,d=Pa(U,n),_?F(ie):s}function G(ie){var Qe=ie-g,En=ie-T,ms=n-Qe;return A?ke(ms,u-En):ms}function B(ie){var Qe=ie-g,En=ie-T;return g===t||Qe>=n||Qe<0||A&&En>=u}function U(){var ie=qr();if(B(ie))return M(ie);d=Pa(U,G(ie))}function M(ie){return d=t,V&&r?F(ie):(r=l=t,s)}function qe(){d!==t&&nu(d),T=0,r=g=l=d=t}function _e(){return d===t?s:M(qr())}function ce(){var ie=qr(),Qe=B(ie);if(r=arguments,l=this,g=ie,Qe){if(d===t)return c(g);if(A)return nu(d),d=Pa(U,n),F(g)}return d===t&&(d=Pa(U,n)),s}return ce.cancel=qe,ce.flush=_e,ce}var Fg=j(function(e,n){return wi(e,1,n)}),Sg=j(function(e,n,a){return wi(e,xe(n)||0,a)});function qg(e){return vn(e,Pn)}function cr(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Ge(N);var a=function(){var r=arguments,l=n?n.apply(this,r):r[0],u=a.cache;if(u.has(l))return u.get(l);var s=e.apply(this,r);return a.cache=u.set(l,s)||u,s};return a.cache=new(cr.Cache||mn),a}cr.Cache=mn;function Br(e){if(typeof e!="function")throw new Ge(N);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function cg(e){return Du(2,e)}var Bg=Td(function(e,n){n=n.length==1&&I(n[0])?Q(n[0],Re(q())):Q(ve(n,1),Re(q()));var a=n.length;return j(function(r){for(var l=-1,u=ke(r.length,a);++l<u;)r[l]=n[l].call(this,r[l]);return Ke(e,this,r)})}),tt=j(function(e,n){var a=fn(n,ra(tt));return vn(e,Ye,t,n,a)}),Cu=j(function(e,n){var a=fn(n,ra(Cu));return vn(e,cn,t,n,a)}),Pg=gn(function(e,n){return vn(e,Bn,t,t,t,n)});function wg(e,n){if(typeof e!="function")throw new Ge(N);return n=n===t?n:O(n),j(e,n)}function Ig(e,n){if(typeof e!="function")throw new Ge(N);return n=n==null?0:se(O(n),0),j(function(a){var r=a[n],l=Rn(a,0,n);return r&&hn(l,r),Ke(e,this,l)})}function Lg(e,n,a){var r=!0,l=!0;if(typeof e!="function")throw new Ge(N);return ne(a)&&(r="leading"in a?!!a.leading:r,l="trailing"in a?!!a.trailing:l),Yu(e,n,{leading:r,maxWait:n,trailing:l})}function Og(e){return Uu(e,1)}function Gg(e,n){return tt(xl(n),e)}function jg(){if(!arguments.length)return[];var e=arguments[0];return I(e)?e:[e]}function Ug(e){return Ue(e,X)}function Dg(e,n){return n=typeof n=="function"?n:t,Ue(e,X,n)}function Mg(e){return Ue(e,L|X)}function xg(e,n){return n=typeof n=="function"?n:t,Ue(e,L|X,n)}function Hg(e,n){return n==null||Pi(e,n,me(n))}function Ze(e,n){return e===n||e!==e&&n!==n}var Yg=br(cl),Cg=br(function(e,n){return e>=n}),xn=ji(function(){return arguments}())?ji:function(e){return ae(e)&&C.call(e,"callee")&&!Vi.call(e,"callee")},I=y.isArray,Jg=ii?Re(ii):nd;function he(e){return e!=null&&Pr(e.length)&&!yn(e)}function te(e){return ae(e)&&he(e)}function Wg(e){return e===!0||e===!1||ae(e)&&Ee(e)==ga}var Fn=sm||pt,$g=ui?Re(ui):ad;function zg(e){return ae(e)&&e.nodeType===1&&!wa(e)}function Zg(e){if(e==null)return!0;if(he(e)&&(I(e)||typeof e=="string"||typeof e.splice=="function"||Fn(e)||la(e)||xn(e)))return!e.length;var n=ye(e);if(n==Je||n==We)return!e.size;if(Ba(e))return!wl(e).length;for(var a in e)if(C.call(e,a))return!1;return!0}function Qg(e,n){return Sa(e,n)}function Xg(e,n,a){a=typeof a=="function"?a:t;var r=a?a(e,n):t;return r===t?Sa(e,n,t,a):!!r}function it(e){if(!ae(e))return!1;var n=Ee(e);return n==Ya||n==h0||typeof e.message=="string"&&typeof e.name=="string"&&!wa(e)}function ek(e){return typeof e=="number"&&Ri(e)}function yn(e){if(!ne(e))return!1;var n=Ee(e);return n==Ca||n==wt||n==A0||n==N0}function Ju(e){return typeof e=="number"&&e==O(e)}function Pr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=_n}function ne(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function ae(e){return e!=null&&typeof e=="object"}var Wu=si?Re(si):ld;function nk(e,n){return e===n||Pl(e,n,zl(n))}function ak(e,n,a){return a=typeof a=="function"?a:t,Pl(e,n,zl(n),a)}function rk(e){return $u(e)&&e!=+e}function lk(e){if(Dd(e))throw new w(f);return Ui(e)}function tk(e){return e===null}function ik(e){return e==null}function $u(e){return typeof e=="number"||ae(e)&&Ee(e)==ya}function wa(e){if(!ae(e)||Ee(e)!=sn)return!1;var n=ir(e);if(n===null)return!0;var a=C.call(n,"constructor")&&n.constructor;return typeof a=="function"&&a instanceof a&&ar.call(a)==am}var ut=oi?Re(oi):td;function uk(e){return Ju(e)&&e>=-_n&&e<=_n}var zu=mi?Re(mi):id;function wr(e){return typeof e=="string"||!I(e)&&ae(e)&&Ee(e)==Ea}function Se(e){return typeof e=="symbol"||ae(e)&&Ee(e)==Ja}var la=di?Re(di):ud;function sk(e){return e===t}function ok(e){return ae(e)&&ye(e)==Ta}function mk(e){return ae(e)&&Ee(e)==V0}var dk=br(Il),vk=br(function(e,n){return e<=n});function Zu(e){if(!e)return[];if(he(e))return wr(e)?$e(e):Ae(e);if(ha&&e[ha])return Ho(e[ha]());var n=ye(e),a=n==Je?fl:n==We?Xa:ta;return a(e)}function pn(e){if(!e)return e===0?e:0;if(e=xe(e),e===wn||e===-wn){var n=e<0?-1:1;return n*p0}return e===e?e:0}function O(e){var n=pn(e),a=n%1;return n===n?a?n-a:n:0}function Qu(e){return e?jn(O(e),0,nn):0}function xe(e){if(typeof e=="number")return e;if(Se(e))return xa;if(ne(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ne(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Ei(e);var a=C0.test(e);return a||W0.test(e)?Ro(e.slice(2),a?2:8):Y0.test(e)?xa:+e}function Xu(e){return rn(e,fe(e))}function gk(e){return e?jn(O(e),-_n,_n):e===0?e:0}function Y(e){return e==null?"":Fe(e)}var kk=na(function(e,n){if(Ba(n)||he(n)){rn(n,me(n),e);return}for(var a in n)C.call(n,a)&&Ka(e,a,n[a])}),es=na(function(e,n){rn(n,fe(n),e)}),Ir=na(function(e,n,a,r){rn(n,fe(n),e,r)}),yk=na(function(e,n,a,r){rn(n,me(n),e,r)}),pk=gn(Fl);function Ek(e,n){var a=ea(e);return n==null?a:Bi(a,n)}var Tk=j(function(e,n){e=W(e);var a=-1,r=n.length,l=r>2?n[2]:t;for(l&&Te(n[0],n[1],l)&&(r=1);++a<r;)for(var u=n[a],s=fe(u),d=-1,g=s.length;++d<g;){var T=s[d],_=e[T];(_===t||Ze(_,Zn[T])&&!C.call(e,T))&&(e[T]=u[T])}return e}),_k=j(function(e){return e.push(t,Eu),Ke(ns,t,e)});function Ak(e,n){return gi(e,q(n,3),an)}function hk(e,n){return gi(e,q(n,3),ql)}function fk(e,n){return e==null?e:Sl(e,q(n,3),fe)}function Nk(e,n){return e==null?e:Oi(e,q(n,3),fe)}function bk(e,n){return e&&an(e,q(n,3))}function Vk(e,n){return e&&ql(e,q(n,3))}function Kk(e){return e==null?[]:pr(e,me(e))}function Rk(e){return e==null?[]:pr(e,fe(e))}function st(e,n,a){var r=e==null?t:Un(e,n);return r===t?a:r}function Fk(e,n){return e!=null&&Au(e,n,Zm)}function ot(e,n){return e!=null&&Au(e,n,Qm)}var Sk=vu(function(e,n,a){n!=null&&typeof n.toString!="function"&&(n=rr.call(n)),e[n]=a},dt(Ne)),qk=vu(function(e,n,a){n!=null&&typeof n.toString!="function"&&(n=rr.call(n)),C.call(e,n)?e[n].push(a):e[n]=[a]},q),ck=j(Fa);function me(e){return he(e)?qi(e):wl(e)}function fe(e){return he(e)?qi(e,!0):sd(e)}function Bk(e,n){var a={};return n=q(n,3),an(e,function(r,l,u){dn(a,n(r,l,u),r)}),a}function Pk(e,n){var a={};return n=q(n,3),an(e,function(r,l,u){dn(a,l,n(r,l,u))}),a}var wk=na(function(e,n,a){Er(e,n,a)}),ns=na(function(e,n,a,r){Er(e,n,a,r)}),Ik=gn(function(e,n){var a={};if(e==null)return a;var r=!1;n=Q(n,function(u){return u=Kn(u,e),r||(r=u.length>1),u}),rn(e,Wl(e),a),r&&(a=Ue(a,L|le|X,Sd));for(var l=n.length;l--;)Ul(a,n[l]);return a});function Lk(e,n){return as(e,Br(q(n)))}var Ok=gn(function(e,n){return e==null?{}:md(e,n)});function as(e,n){if(e==null)return{};var a=Q(Wl(e),function(r){return[r]});return n=q(n),Ji(e,a,function(r,l){return n(r,l[0])})}function Gk(e,n,a){n=Kn(n,e);var r=-1,l=n.length;for(l||(l=1,e=t);++r<l;){var u=e==null?t:e[ln(n[r])];u===t&&(r=l,u=a),e=yn(u)?u.call(e):u}return e}function jk(e,n,a){return e==null?e:qa(e,n,a)}function Uk(e,n,a,r){return r=typeof r=="function"?r:t,e==null?e:qa(e,n,a,r)}var rs=yu(me),ls=yu(fe);function Dk(e,n,a){var r=I(e),l=r||Fn(e)||la(e);if(n=q(n,4),a==null){var u=e&&e.constructor;l?a=r?new u:[]:ne(e)?a=yn(u)?ea(ir(e)):{}:a={}}return(l?Oe:an)(e,function(s,d,g){return n(a,s,d,g)}),a}function Mk(e,n){return e==null?!0:Ul(e,n)}function xk(e,n,a){return e==null?e:Qi(e,n,xl(a))}function Hk(e,n,a,r){return r=typeof r=="function"?r:t,e==null?e:Qi(e,n,xl(a),r)}function ta(e){return e==null?[]:hl(e,me(e))}function Yk(e){return e==null?[]:hl(e,fe(e))}function Ck(e,n,a){return a===t&&(a=n,n=t),a!==t&&(a=xe(a),a=a===a?a:0),n!==t&&(n=xe(n),n=n===n?n:0),jn(xe(e),n,a)}function Jk(e,n,a){return n=pn(n),a===t?(a=n,n=0):a=pn(a),e=xe(e),Xm(e,n,a)}function Wk(e,n,a){if(a&&typeof a!="boolean"&&Te(e,n,a)&&(n=a=t),a===t&&(typeof n=="boolean"?(a=n,n=t):typeof e=="boolean"&&(a=e,e=t)),e===t&&n===t?(e=0,n=1):(e=pn(e),n===t?(n=e,e=0):n=pn(n)),e>n){var r=e;e=n,n=r}if(a||e%1||n%1){var l=Fi();return ke(e+l*(n-e+Ko("1e-"+((l+"").length-1))),n)}return Ol(e,n)}var $k=aa(function(e,n,a){return n=n.toLowerCase(),e+(a?ts(n):n)});function ts(e){return mt(Y(e).toLowerCase())}function is(e){return e=Y(e),e&&e.replace(z0,jo).replace(po,"")}function zk(e,n,a){e=Y(e),n=Fe(n);var r=e.length;a=a===t?r:jn(O(a),0,r);var l=a;return a-=n.length,a>=0&&e.slice(a,l)==n}function Zk(e){return e=Y(e),e&&q0.test(e)?e.replace(Ot,Uo):e}function Qk(e){return e=Y(e),e&&L0.test(e)?e.replace(tl,"\\$&"):e}var Xk=aa(function(e,n,a){return e+(a?"-":"")+n.toLowerCase()}),e5=aa(function(e,n,a){return e+(a?" ":"")+n.toLowerCase()}),n5=ou("toLowerCase");function a5(e,n,a){e=Y(e),n=O(n);var r=n?$n(e):0;if(!n||r>=n)return e;var l=(n-r)/2;return Nr(mr(l),a)+e+Nr(or(l),a)}function r5(e,n,a){e=Y(e),n=O(n);var r=n?$n(e):0;return n&&r<n?e+Nr(n-r,a):e}function l5(e,n,a){e=Y(e),n=O(n);var r=n?$n(e):0;return n&&r<n?Nr(n-r,a)+e:e}function t5(e,n,a){return a||n==null?n=0:n&&(n=+n),vm(Y(e).replace(il,""),n||0)}function i5(e,n,a){return(a?Te(e,n,a):n===t)?n=1:n=O(n),Gl(Y(e),n)}function u5(){var e=arguments,n=Y(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var s5=aa(function(e,n,a){return e+(a?"_":"")+n.toLowerCase()});function o5(e,n,a){return a&&typeof a!="number"&&Te(e,n,a)&&(n=a=t),a=a===t?nn:a>>>0,a?(e=Y(e),e&&(typeof n=="string"||n!=null&&!ut(n))&&(n=Fe(n),!n&&Wn(e))?Rn($e(e),0,a):e.split(n,a)):[]}var m5=aa(function(e,n,a){return e+(a?" ":"")+mt(n)});function d5(e,n,a){return e=Y(e),a=a==null?0:jn(O(a),0,e.length),n=Fe(n),e.slice(a,a+n.length)==n}function v5(e,n,a){var r=i.templateSettings;a&&Te(e,n,a)&&(n=t),e=Y(e),n=Ir({},n,r,pu);var l=Ir({},n.imports,r.imports,pu),u=me(l),s=hl(l,u),d,g,T=0,_=n.interpolate||Wa,A="__p += '",V=Nl((n.escape||Wa).source+"|"+_.source+"|"+(_===Gt?H0:Wa).source+"|"+(n.evaluate||Wa).source+"|$","g"),F="//# sourceURL="+(C.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ho+"]")+`
`;e.replace(V,function(B,U,M,qe,_e,ce){return M||(M=qe),A+=e.slice(T,ce).replace(Z0,Do),U&&(d=!0,A+=`' +
__e(`+U+`) +
'`),_e&&(g=!0,A+=`';
`+_e+`;
__p += '`),M&&(A+=`' +
((__t = (`+M+`)) == null ? '' : __t) +
'`),T=ce+B.length,B}),A+=`';
`;var c=C.call(n,"variable")&&n.variable;if(!c)A=`with (obj) {
`+A+`
}
`;else if(M0.test(c))throw new w(b);A=(g?A.replace(K0,""):A).replace(R0,"$1").replace(F0,"$1;"),A="function("+(c||"obj")+`) {
`+(c?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(d?", __e = _.escape":"")+(g?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+A+`return __p
}`;var G=ss(function(){return H(u,F+"return "+A).apply(t,s)});if(G.source=A,it(G))throw G;return G}function g5(e){return Y(e).toLowerCase()}function k5(e){return Y(e).toUpperCase()}function y5(e,n,a){if(e=Y(e),e&&(a||n===t))return Ei(e);if(!e||!(n=Fe(n)))return e;var r=$e(e),l=$e(n),u=Ti(r,l),s=_i(r,l)+1;return Rn(r,u,s).join("")}function p5(e,n,a){if(e=Y(e),e&&(a||n===t))return e.slice(0,hi(e)+1);if(!e||!(n=Fe(n)))return e;var r=$e(e),l=_i(r,$e(n))+1;return Rn(r,0,l).join("")}function E5(e,n,a){if(e=Y(e),e&&(a||n===t))return e.replace(il,"");if(!e||!(n=Fe(n)))return e;var r=$e(e),l=Ti(r,$e(n));return Rn(r,l).join("")}function T5(e,n){var a=va,r=d0;if(ne(n)){var l="separator"in n?n.separator:l;a="length"in n?O(n.length):a,r="omission"in n?Fe(n.omission):r}e=Y(e);var u=e.length;if(Wn(e)){var s=$e(e);u=s.length}if(a>=u)return e;var d=a-$n(r);if(d<1)return r;var g=s?Rn(s,0,d).join(""):e.slice(0,d);if(l===t)return g+r;if(s&&(d+=g.length-d),ut(l)){if(e.slice(d).search(l)){var T,_=g;for(l.global||(l=Nl(l.source,Y(jt.exec(l))+"g")),l.lastIndex=0;T=l.exec(_);)var A=T.index;g=g.slice(0,A===t?d:A)}}else if(e.indexOf(Fe(l),d)!=d){var V=g.lastIndexOf(l);V>-1&&(g=g.slice(0,V))}return g+r}function _5(e){return e=Y(e),e&&S0.test(e)?e.replace(Lt,Wo):e}var A5=aa(function(e,n,a){return e+(a?" ":"")+n.toUpperCase()}),mt=ou("toUpperCase");function us(e,n,a){return e=Y(e),n=a?t:n,n===t?xo(e)?Zo(e):wo(e):e.match(n)||[]}var ss=j(function(e,n){try{return Ke(e,t,n)}catch(a){return it(a)?a:new w(a)}}),h5=gn(function(e,n){return Oe(n,function(a){a=ln(a),dn(e,a,lt(e[a],e))}),e});function f5(e){var n=e==null?0:e.length,a=q();return e=n?Q(e,function(r){if(typeof r[1]!="function")throw new Ge(N);return[a(r[0]),r[1]]}):[],j(function(r){for(var l=-1;++l<n;){var u=e[l];if(Ke(u[0],this,r))return Ke(u[1],this,r)}})}function N5(e){return Wm(Ue(e,L))}function dt(e){return function(){return e}}function b5(e,n){return e==null||e!==e?n:e}var V5=du(),K5=du(!0);function Ne(e){return e}function vt(e){return Di(typeof e=="function"?e:Ue(e,L))}function R5(e){return xi(Ue(e,L))}function F5(e,n){return Hi(e,Ue(n,L))}var S5=j(function(e,n){return function(a){return Fa(a,e,n)}}),q5=j(function(e,n){return function(a){return Fa(e,a,n)}});function gt(e,n,a){var r=me(n),l=pr(n,r);a==null&&!(ne(n)&&(l.length||!r.length))&&(a=n,n=e,e=this,l=pr(n,me(n)));var u=!(ne(a)&&"chain"in a)||!!a.chain,s=yn(e);return Oe(l,function(d){var g=n[d];e[d]=g,s&&(e.prototype[d]=function(){var T=this.__chain__;if(u||T){var _=e(this.__wrapped__),A=_.__actions__=Ae(this.__actions__);return A.push({func:g,args:arguments,thisArg:e}),_.__chain__=T,_}return g.apply(e,hn([this.value()],arguments))})}),e}function c5(){return de._===this&&(de._=rm),this}function kt(){}function B5(e){return e=O(e),j(function(n){return Yi(n,e)})}var P5=Yl(Q),w5=Yl(vi),I5=Yl(pl);function os(e){return Ql(e)?El(ln(e)):dd(e)}function L5(e){return function(n){return e==null?t:Un(e,n)}}var O5=gu(),G5=gu(!0);function yt(){return[]}function pt(){return!1}function j5(){return{}}function U5(){return""}function D5(){return!0}function M5(e,n){if(e=O(e),e<1||e>_n)return[];var a=nn,r=ke(e,nn);n=q(n),e-=nn;for(var l=Al(r,n);++a<e;)n(a);return l}function x5(e){return I(e)?Q(e,ln):Se(e)?[e]:Ae(Su(Y(e)))}function H5(e){var n=++nm;return Y(e)+n}var Y5=fr(function(e,n){return e+n},0),C5=Cl("ceil"),J5=fr(function(e,n){return e/n},1),W5=Cl("floor");function $5(e){return e&&e.length?yr(e,Ne,cl):t}function z5(e,n){return e&&e.length?yr(e,q(n,2),cl):t}function Z5(e){return yi(e,Ne)}function Q5(e,n){return yi(e,q(n,2))}function X5(e){return e&&e.length?yr(e,Ne,Il):t}function ey(e,n){return e&&e.length?yr(e,q(n,2),Il):t}var ny=fr(function(e,n){return e*n},1),ay=Cl("round"),ry=fr(function(e,n){return e-n},0);function ly(e){return e&&e.length?_l(e,Ne):0}function ty(e,n){return e&&e.length?_l(e,q(n,2)):0}return i.after=Rg,i.ary=Uu,i.assign=kk,i.assignIn=es,i.assignInWith=Ir,i.assignWith=yk,i.at=pk,i.before=Du,i.bind=lt,i.bindAll=h5,i.bindKey=Mu,i.castArray=jg,i.chain=Ou,i.chunk=Wd,i.compact=$d,i.concat=zd,i.cond=f5,i.conforms=N5,i.constant=dt,i.countBy=lg,i.create=Ek,i.curry=xu,i.curryRight=Hu,i.debounce=Yu,i.defaults=Tk,i.defaultsDeep=_k,i.defer=Fg,i.delay=Sg,i.difference=Zd,i.differenceBy=Qd,i.differenceWith=Xd,i.drop=ev,i.dropRight=nv,i.dropRightWhile=av,i.dropWhile=rv,i.fill=lv,i.filter=ig,i.flatMap=og,i.flatMapDeep=mg,i.flatMapDepth=dg,i.flatten=Pu,i.flattenDeep=tv,i.flattenDepth=iv,i.flip=qg,i.flow=V5,i.flowRight=K5,i.fromPairs=uv,i.functions=Kk,i.functionsIn=Rk,i.groupBy=vg,i.initial=ov,i.intersection=mv,i.intersectionBy=dv,i.intersectionWith=vv,i.invert=Sk,i.invertBy=qk,i.invokeMap=kg,i.iteratee=vt,i.keyBy=yg,i.keys=me,i.keysIn=fe,i.map=Sr,i.mapKeys=Bk,i.mapValues=Pk,i.matches=R5,i.matchesProperty=F5,i.memoize=cr,i.merge=wk,i.mergeWith=ns,i.method=S5,i.methodOf=q5,i.mixin=gt,i.negate=Br,i.nthArg=B5,i.omit=Ik,i.omitBy=Lk,i.once=cg,i.orderBy=pg,i.over=P5,i.overArgs=Bg,i.overEvery=w5,i.overSome=I5,i.partial=tt,i.partialRight=Cu,i.partition=Eg,i.pick=Ok,i.pickBy=as,i.property=os,i.propertyOf=L5,i.pull=pv,i.pullAll=Iu,i.pullAllBy=Ev,i.pullAllWith=Tv,i.pullAt=_v,i.range=O5,i.rangeRight=G5,i.rearg=Pg,i.reject=Ag,i.remove=Av,i.rest=wg,i.reverse=at,i.sampleSize=fg,i.set=jk,i.setWith=Uk,i.shuffle=Ng,i.slice=hv,i.sortBy=Kg,i.sortedUniq=Fv,i.sortedUniqBy=Sv,i.split=o5,i.spread=Ig,i.tail=qv,i.take=cv,i.takeRight=Bv,i.takeRightWhile=Pv,i.takeWhile=wv,i.tap=$v,i.throttle=Lg,i.thru=Fr,i.toArray=Zu,i.toPairs=rs,i.toPairsIn=ls,i.toPath=x5,i.toPlainObject=Xu,i.transform=Dk,i.unary=Og,i.union=Iv,i.unionBy=Lv,i.unionWith=Ov,i.uniq=Gv,i.uniqBy=jv,i.uniqWith=Uv,i.unset=Mk,i.unzip=rt,i.unzipWith=Lu,i.update=xk,i.updateWith=Hk,i.values=ta,i.valuesIn=Yk,i.without=Dv,i.words=us,i.wrap=Gg,i.xor=Mv,i.xorBy=xv,i.xorWith=Hv,i.zip=Yv,i.zipObject=Cv,i.zipObjectDeep=Jv,i.zipWith=Wv,i.entries=rs,i.entriesIn=ls,i.extend=es,i.extendWith=Ir,gt(i,i),i.add=Y5,i.attempt=ss,i.camelCase=$k,i.capitalize=ts,i.ceil=C5,i.clamp=Ck,i.clone=Ug,i.cloneDeep=Mg,i.cloneDeepWith=xg,i.cloneWith=Dg,i.conformsTo=Hg,i.deburr=is,i.defaultTo=b5,i.divide=J5,i.endsWith=zk,i.eq=Ze,i.escape=Zk,i.escapeRegExp=Qk,i.every=tg,i.find=ug,i.findIndex=cu,i.findKey=Ak,i.findLast=sg,i.findLastIndex=Bu,i.findLastKey=hk,i.floor=W5,i.forEach=Gu,i.forEachRight=ju,i.forIn=fk,i.forInRight=Nk,i.forOwn=bk,i.forOwnRight=Vk,i.get=st,i.gt=Yg,i.gte=Cg,i.has=Fk,i.hasIn=ot,i.head=wu,i.identity=Ne,i.includes=gg,i.indexOf=sv,i.inRange=Jk,i.invoke=ck,i.isArguments=xn,i.isArray=I,i.isArrayBuffer=Jg,i.isArrayLike=he,i.isArrayLikeObject=te,i.isBoolean=Wg,i.isBuffer=Fn,i.isDate=$g,i.isElement=zg,i.isEmpty=Zg,i.isEqual=Qg,i.isEqualWith=Xg,i.isError=it,i.isFinite=ek,i.isFunction=yn,i.isInteger=Ju,i.isLength=Pr,i.isMap=Wu,i.isMatch=nk,i.isMatchWith=ak,i.isNaN=rk,i.isNative=lk,i.isNil=ik,i.isNull=tk,i.isNumber=$u,i.isObject=ne,i.isObjectLike=ae,i.isPlainObject=wa,i.isRegExp=ut,i.isSafeInteger=uk,i.isSet=zu,i.isString=wr,i.isSymbol=Se,i.isTypedArray=la,i.isUndefined=sk,i.isWeakMap=ok,i.isWeakSet=mk,i.join=gv,i.kebabCase=Xk,i.last=Me,i.lastIndexOf=kv,i.lowerCase=e5,i.lowerFirst=n5,i.lt=dk,i.lte=vk,i.max=$5,i.maxBy=z5,i.mean=Z5,i.meanBy=Q5,i.min=X5,i.minBy=ey,i.stubArray=yt,i.stubFalse=pt,i.stubObject=j5,i.stubString=U5,i.stubTrue=D5,i.multiply=ny,i.nth=yv,i.noConflict=c5,i.noop=kt,i.now=qr,i.pad=a5,i.padEnd=r5,i.padStart=l5,i.parseInt=t5,i.random=Wk,i.reduce=Tg,i.reduceRight=_g,i.repeat=i5,i.replace=u5,i.result=Gk,i.round=ay,i.runInContext=v,i.sample=hg,i.size=bg,i.snakeCase=s5,i.some=Vg,i.sortedIndex=fv,i.sortedIndexBy=Nv,i.sortedIndexOf=bv,i.sortedLastIndex=Vv,i.sortedLastIndexBy=Kv,i.sortedLastIndexOf=Rv,i.startCase=m5,i.startsWith=d5,i.subtract=ry,i.sum=ly,i.sumBy=ty,i.template=v5,i.times=M5,i.toFinite=pn,i.toInteger=O,i.toLength=Qu,i.toLower=g5,i.toNumber=xe,i.toSafeInteger=gk,i.toString=Y,i.toUpper=k5,i.trim=y5,i.trimEnd=p5,i.trimStart=E5,i.truncate=T5,i.unescape=_5,i.uniqueId=H5,i.upperCase=A5,i.upperFirst=mt,i.each=Gu,i.eachRight=ju,i.first=wu,gt(i,function(){var e={};return an(i,function(n,a){C.call(i.prototype,a)||(e[a]=n)}),e}(),{chain:!1}),i.VERSION=E,Oe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){i[e].placeholder=i}),Oe(["drop","take"],function(e,n){D.prototype[e]=function(a){a=a===t?1:se(O(a),0);var r=this.__filtered__&&!n?new D(this):this.clone();return r.__filtered__?r.__takeCount__=ke(a,r.__takeCount__):r.__views__.push({size:ke(a,nn),type:e+(r.__dir__<0?"Right":"")}),r},D.prototype[e+"Right"]=function(a){return this.reverse()[e](a).reverse()}}),Oe(["filter","map","takeWhile"],function(e,n){var a=n+1,r=a==Pt||a==y0;D.prototype[e]=function(l){var u=this.clone();return u.__iteratees__.push({iteratee:q(l,3),type:a}),u.__filtered__=u.__filtered__||r,u}}),Oe(["head","last"],function(e,n){var a="take"+(n?"Right":"");D.prototype[e]=function(){return this[a](1).value()[0]}}),Oe(["initial","tail"],function(e,n){var a="drop"+(n?"":"Right");D.prototype[e]=function(){return this.__filtered__?new D(this):this[a](1)}}),D.prototype.compact=function(){return this.filter(Ne)},D.prototype.find=function(e){return this.filter(e).head()},D.prototype.findLast=function(e){return this.reverse().find(e)},D.prototype.invokeMap=j(function(e,n){return typeof e=="function"?new D(this):this.map(function(a){return Fa(a,e,n)})}),D.prototype.reject=function(e){return this.filter(Br(q(e)))},D.prototype.slice=function(e,n){e=O(e);var a=this;return a.__filtered__&&(e>0||n<0)?new D(a):(e<0?a=a.takeRight(-e):e&&(a=a.drop(e)),n!==t&&(n=O(n),a=n<0?a.dropRight(-n):a.take(n-e)),a)},D.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},D.prototype.toArray=function(){return this.take(nn)},an(D.prototype,function(e,n){var a=/^(?:filter|find|map|reject)|While$/.test(n),r=/^(?:head|last)$/.test(n),l=i[r?"take"+(n=="last"?"Right":""):n],u=r||/^find/.test(n);l&&(i.prototype[n]=function(){var s=this.__wrapped__,d=r?[1]:arguments,g=s instanceof D,T=d[0],_=g||I(s),A=function(U){var M=l.apply(i,hn([U],d));return r&&V?M[0]:M};_&&a&&typeof T=="function"&&T.length!=1&&(g=_=!1);var V=this.__chain__,F=!!this.__actions__.length,c=u&&!V,G=g&&!F;if(!u&&_){s=G?s:new D(this);var B=e.apply(s,d);return B.__actions__.push({func:Fr,args:[A],thisArg:t}),new je(B,V)}return c&&G?e.apply(this,d):(B=this.thru(A),c?r?B.value()[0]:B.value():B)})}),Oe(["pop","push","shift","sort","splice","unshift"],function(e){var n=er[e],a=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);i.prototype[e]=function(){var l=arguments;if(r&&!this.__chain__){var u=this.value();return n.apply(I(u)?u:[],l)}return this[a](function(s){return n.apply(I(s)?s:[],l)})}}),an(D.prototype,function(e,n){var a=i[n];if(a){var r=a.name+"";C.call(Xn,r)||(Xn[r]=[]),Xn[r].push({name:n,func:a})}}),Xn[hr(t,Tn).name]=[{name:"wrapper",func:t}],D.prototype.clone=_m,D.prototype.reverse=Am,D.prototype.value=hm,i.prototype.at=zv,i.prototype.chain=Zv,i.prototype.commit=Qv,i.prototype.next=Xv,i.prototype.plant=ng,i.prototype.reverse=ag,i.prototype.toJSON=i.prototype.valueOf=i.prototype.value=rg,i.prototype.first=i.prototype.head,ha&&(i.prototype[ha]=eg),i},zn=Qo();In?((In.exports=zn)._=zn,vl._=zn):de._=zn}).call(Zy)}(La,La.exports)),La.exports}var hs=Qy();const Xy="NORGE",fs=o=>o??"",ep=o=>{const{adresselinje1:k,adresselinje2:t,adresselinje3:E,postNummer:h,poststed:f,land:N}=o,b=[k,t,E].filter(P=>!!P).join(", "),R=`${fs(h)} ${fs(f)}`,S=N?.toUpperCase()!==Xy?N:void 0;return[b,R,S].map(P=>P?.trim()).filter(P=>!!P).join(", ").trim()},OE=(o,k)=>[...o].sort(qs).find(t=>t.adresseType===k),GE=(o,k)=>o.length!==k.length?!1:o.every(t=>k.some(E=>hs.isEqual(t,E)))&&k.every(t=>o.some(E=>hs.isEqual(E,t))),Or=pe(Da),np=o=>{switch(o){case"SØKNAD":return Or.formatMessage({id:"FaktaKilde.Soknad"});case"FOLKEREGISTER":return Or.formatMessage({id:"FaktaKilde.FREG"});case"MEDL":return Or.formatMessage({id:"FaktaKilde.MEDL"});case"SAKSBEHANDLER":return Or.formatMessage({id:"FaktaKilde.SBH"});default:return oy(o)}},cs=Jr.forwardRef((o,k)=>m.jsx(Sn,{gap:"space-8",style:{display:"flex"},...o,ref:k}));cs.displayName="FaktaGruppe";const ap=({label:o,value:k,kilde:t})=>m.jsx(Hr.New,{background:"neutral-soft",flexBasis:"0%",flexGrow:"1",borderRadius:"medium",paddingBlock:"2",paddingInline:"4","aria-label":typeof o=="string"?o:void 0,children:m.jsxs(Pe,{gap:"space-24",flexGrow:"1",height:"100%",justify:"space-between",children:[m.jsxs("div",{children:[m.jsx($r,{size:"small",children:o}),m.jsx(Yr,{size:"large",children:k})]}),m.jsx(bt,{uppercase:!0,children:np(t)})]})});cs.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};ap.__docgenInfo={description:"",methods:[],displayName:"FaktaBox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},value:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},kilde:{required:!0,tsType:{name:"union",raw:"'SØKNAD' | 'FOLKEREGISTER' | 'MEDL' | 'SAKSBEHANDLER'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"},{name:"literal",value:"'MEDL'"},{name:"literal",value:"'SAKSBEHANDLER'"}]},description:""}}};const rp="_boks_nm7fe_1",lp="_harBorderLeft_nm7fe_8",tp="_harBorderTop_nm7fe_12",Bs={boks:rp,harBorderLeft:lp,harBorderTop:tp},ip=Sy.bind(Bs),up=({harBorderTop:o=!1,harBorderLeft:k=!0,children:t})=>m.jsx("div",{className:ip(Bs.boks,{harBorderLeft:k,harBorderTop:o}),children:t});up.__docgenInfo={description:"",methods:[],displayName:"Boks",props:{harBorderTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harBorderLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ps=({adresser:o,erAnnenpart:k=!1,harSammeAdresser:t=!1,adresseKodeverk:E})=>{if(t)return m.jsx(Hr.New,{padding:"4",children:m.jsx(ps,{textColor:"subtle",children:m.jsx($,{id:"AdresseTabell.SammeAdresse"})})});const h=f=>f+1===o.length?{border:"0px"}:{};return m.jsxs(m.Fragment,{children:[o.length===0&&m.jsx(Hr.New,{padding:"4",children:m.jsx(ps,{textColor:"subtle",children:m.jsx($,{id:"AdresseTabell.IngenAdresse",values:{erAnnenpart:k}})})}),o.length>0&&m.jsxs(Xe,{style:{tableLayout:"fixed"},children:[m.jsx(Xe.Header,{children:m.jsxs(Xe.Row,{children:[m.jsx(Xe.HeaderCell,{children:m.jsx($,{id:"AdresseTabell.PeriodeLabel"})}),m.jsx(Xe.HeaderCell,{children:m.jsx($,{id:"AdresseTabell.AdresseLabel"})}),m.jsx(Xe.HeaderCell,{children:m.jsx($,{id:"AdresseTabell.TypeLabel"})})]})}),m.jsx(Xe.Body,{children:o.toSorted(qs).map((f,N)=>m.jsxs(Xe.Row,{children:[m.jsx(Xe.DataCell,{style:h(N),children:m.jsx(Ky,{dateStringFom:f.fom,dateStringTom:f.tom})}),m.jsx(Xe.DataCell,{style:h(N),children:ep(f)}),m.jsx(Xe.DataCell,{style:h(N),children:E.find(b=>b.kode===f.adresseType)?.navn})]},f.adresseType+f.fom+f.tom))})]})]})};Ps.__docgenInfo={description:"",methods:[],displayName:"AdresseTabell",props:{adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]"},description:""},erAnnenpart:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harSammeAdresser:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},adresseKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'AdresseType'>[]"},description:""}}};const sp=pe(Da),op=o=>{switch(o){case Es.KVINNE:return Tt.female;case Es.MANN:return Tt.male;default:return Tt.unknown}},Ur=({rolle:o="BRUKER",alleKodeverk:k,harSammeAdresser:t,navn:E,kjønn:h,sivilstand:f,fødselsdato:N,dødsdato:b,adresser:R,showIcon:S=!0})=>{const P=o==="BARN";return m.jsx(Ie,{value:sp,children:m.jsx(Hr.New,{background:"neutral-moderate",padding:"4",borderRadius:"large","aria-label":E,children:m.jsxs(Pe,{gap:"space-4",children:[m.jsxs(Sn,{gap:"space-20",children:[S&&m.jsx("div",{children:m.jsx(qy,{gender:op(h),isChild:P})}),m.jsxs("div",{children:[m.jsxs(Sn,{gap:"space-16",children:[m.jsx($r,{children:m.jsx($,{id:"PersonPanel.RolleOgNavn",values:{rolle:o,navn:E}})}),P&&N&&!b&&m.jsx(Yr,{children:m.jsx($,{id:"PersonPanel.Fodt",values:{dato:ds(N)}})}),b&&m.jsx(Yr,{children:m.jsx($,{id:"PersonPanel.Dod",values:{dato:ds(b)}})})]}),!P&&f&&m.jsx(bt,{"aria-label":"Sivilstand",children:k.SivilstandType.find(L=>L.kode===f)?.navn})]})]}),m.jsxs(bt,{children:[o==="BARN"&&m.jsx($,{id:"PersonPanel.Beskrivelse.Barn",values:{rolle:o}}),o==="BRUKER"&&m.jsx($,{id:"PersonPanel.Beskrivelse.Bruker",values:{rolle:o}}),o==="ANNEN_PART"&&m.jsx($,{id:"PersonPanel.Beskrivelse.Annenpart",values:{rolle:o}})]}),m.jsx(Ps,{harSammeAdresser:t,adresser:R,adresseKodeverk:k.AdresseType,erAnnenpart:o==="ANNEN_PART"})]})})})};Ur.__docgenInfo={description:"",methods:[],displayName:"Personopplysninger",props:{rolle:{required:!1,tsType:{name:"union",raw:"'BARN' | 'BRUKER' | 'ANNEN_PART'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ANNEN_PART'"}]},description:"",defaultValue:{value:"'BRUKER'",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},harSammeAdresser:{required:!1,tsType:{name:"boolean"},description:""},navn:{required:!1,tsType:{name:"string"},description:""},sivilstand:{required:!1,tsType:{name:"SivilstandType"},description:""},dødsdato:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},fødselsdato:{required:!1,tsType:{name:"string"},description:""},adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]"},description:""},kjønn:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const mp=({personoversikt:{barn:o,bruker:k,annenPart:t},alleKodeverk:E})=>m.jsxs(Pe,{gap:"space-8",children:[o.map(h=>m.jsx(Ur,{...h,alleKodeverk:E,rolle:"BARN"},h.aktoerId)),m.jsx(Ur,{rolle:"BRUKER",alleKodeverk:E,...k}),t&&m.jsx(Ur,{...t,rolle:"ANNEN_PART",alleKodeverk:E})]});mp.__docgenInfo={description:"",methods:[],displayName:"PersonopplysningerForFamilie",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""}}};const ws={"RegistrereVergeInfoPanel.AksjonspunktTekst":"Fyll ut og kontroller vergeopplysninger","Verge.Navn":"Navn","Verge.FodselsNummer":"Fødselsnummer","Verge.PeriodeFOM":"Fra og med","Verge.PeriodeTOM":"Til og med","Verge.TypeVerge":"Type verge","Verge.VergeFullmektig":"Verge/fullmektig","Verge.Soker":"Søker","Verge.Organisasjonsnummer":"Organisasjonsnummer"},ia=pe(ws),tn=({readOnly:o,vergetyper:k=[],valgtVergeType:t})=>{const{control:E}=Ks();return m.jsxs(Pe,{gap:"space-16",children:[m.jsx(Ga,{name:"vergeType",control:E,label:ia.formatMessage({id:"Verge.TypeVerge"}),validate:[be],selectValues:k.map(h=>m.jsx("option",{value:h.kode,children:h.navn},h.kode)),readOnly:o}),t&&m.jsxs(m.Fragment,{children:[m.jsxs(Sn,{gap:"space-20",children:[m.jsx(Et,{name:"navn",control:E,label:ia.formatMessage({id:"Verge.Navn"}),validate:[be,my],readOnly:o}),t==="ADVOKAT"?m.jsx(Et,{name:"organisasjonsnummer",control:E,label:ia.formatMessage({id:"Verge.Organisasjonsnummer"}),validate:[be,dy],readOnly:o}):m.jsx(Et,{name:"fnr",control:E,label:ia.formatMessage({id:"Verge.FodselsNummer"}),validate:[be,vy],readOnly:o})]}),m.jsxs(Sn,{gap:"space-20",children:[m.jsx(ys,{name:"gyldigFom",control:E,label:ia.formatMessage({id:"Verge.PeriodeFOM"}),validate:[be,vs],isReadOnly:o}),m.jsx(ys,{name:"gyldigTom",control:E,label:ia.formatMessage({id:"Verge.PeriodeTOM"}),validate:[vs],isReadOnly:o})]})]})]})};tn.buildInitialValues=o=>({...o,gyldigTom:o.gyldigTom&&o.gyldigTom!==ft?o.gyldigTom:void 0});tn.transformValues=({vergeType:o,navn:k,gyldigFom:t,gyldigTom:E,...h})=>({vergeType:o,navn:k,gyldigFom:t,gyldigTom:E!=null&&E!==""?E:void 0,...o==="ADVOKAT"?{organisasjonsnummer:en(h.organisasjonsnummer)}:{fnr:en(h.fnr)}});tn.__docgenInfo={description:`RegistrereVergeFaktaForm

Formkomponent. Registrering og oppdatering av verge.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"verge",optional:!1,type:{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}],alias:"Verge"}}],returns:{type:{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  vergeType,
  navn,
  gyldigFom,
  gyldigTom,
  ...values
}: VergeFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}}]},alias:"VergeFormValues"}}],returns:{type:{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]}}}],displayName:"RegistrereVergeForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},vergetyper:{required:!1,tsType:{name:"union",raw:"KodeverkMedNavn<'VergeType'>[] | KodeverkMedNavnTilbakekreving<'VergeType'>[]",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'VergeType'>[]"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'VergeType'>[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},valgtVergeType:{required:!0,tsType:{name:"union",raw:"VergeType | undefined",elements:[{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}]},{name:"undefined"}]},description:""}}};const dp=(o,k)=>o?{...da.initialValues(k),...tn.buildInitialValues(o)}:void 0,vp=o=>({kode:Rs.AVKLAR_VERGE,...tn.transformValues(o),...da.transformValues(o)}),Is=({submittable:o,verge:k,alleKodeverk:t})=>{const E=sa(),{aksjonspunkterForPanel:h,submitCallback:f,alleMerknaderFraBeslutter:N,harÅpneAksjonspunkter:b,isReadOnly:R}=gy(),{mellomlagretFormData:S,setMellomlagretFormData:P}=ky(),L=oa({defaultValues:S??dp(k,h),shouldUnregister:!0}),le=L.watch("vergeType"),X=L.watch("begrunnelse"),ge=t.VergeType.sort((Ve,ee)=>Ve.navn.localeCompare(ee.navn));return m.jsxs(Pe,{gap:"space-20",children:[b&&m.jsx(Ry,{children:E.formatMessage({id:"RegistrereVergeInfoPanel.AksjonspunktTekst"})}),m.jsx(ma,{formMethods:L,onSubmit:Ve=>f(vp(Ve)),setDataOnUnmount:P,children:m.jsxs(Pe,{gap:"space-24",children:[m.jsx(cy,{label:E.formatMessage({id:"Verge.VergeFullmektig"}),merknaderFraBeslutter:N[Rs.AVKLAR_VERGE],children:m.jsx(tn,{readOnly:R||h.length===0,vergetyper:ge,valgtVergeType:le})}),h.length!==0&&m.jsxs(m.Fragment,{children:[m.jsx(da,{control:L.control,isSubmittable:o,isReadOnly:R,hasBegrunnelse:!!X}),m.jsx(Ss,{isSubmittable:o&&!!le,isReadOnly:R,isSubmitting:L.formState.isSubmitting,isDirty:L.formState.isDirty})]})]})})]})};Is.__docgenInfo={description:"TODO: fjern aksjonspunktet AVKLAR_VERGE når det ikke lenger er i bruk",methods:[],displayName:"RegistrereVergeInfoPanel",props:{alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavnTilbakekreving<
  K extends TilbakekrevingKodeverkType ? K : unknown
>[]`}}]}}]},description:""},verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const gp=pe(ws),kp=({verge:o,alleKodeverk:k,submittable:t})=>m.jsx(Ie,{value:gp,children:m.jsx(Is,{verge:o,alleKodeverk:k,submittable:t})});kp.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaIndex",props:{verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]},description:""},alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavnTilbakekreving<
  K extends TilbakekrevingKodeverkType ? K : unknown
>[]`}}]}}]},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const Bt={"MenySakIndex.Behandlingsmeny":"Behandlingsmeny","MenyVergeIndex.OpprettVerge":"Opprett verge/fullmektig","MenyVergeIndex.FjernVerge":"Fjern verge/fullmektig","MenyVergeIndex.OpprettVergeSporsmal":"Opprett verge/fullmektig?","MenyVergeIndex.FjernVergeSporsmal":"Fjern verge/fullmektig?","MenyVergeIndex.Opprett":"Opprett","MenyVergeIndex.Fjern":"Fjern","MenyVergeIndex.Avbryt":"Avbryt","MenyTaAvVentIndex.ResumeBehandling":"Fortsett behandlingen","MenyTaAvVentIndex.TaAvVent":"Ta behandlingen av vent?","MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet":"Endre behandlende enhet","EndreBehandlendeEnhetModal.ModalDescription":"Endre behandlende enhet","EndreBehandlendeEnhetModal.Endre":"Endre enhet","EndreBehandlendeEnhetModal.EndreEnhet":"Endre behandlende enhet for valgt behandling","EndreBehandlendeEnhetModal.NyEnhetField":"Ny enhet","EndreBehandlendeEnhetModal.BegrunnelseField":"Begrunnelse","EndreBehandlendeEnhetModal.Ok":"OK","EndreBehandlendeEnhetModal.Avbryt":"Avbryt"},ua=pe(Bt),yp=o=>ua.formatMessage({id:o?"MenyVergeIndex.OpprettVerge":"MenyVergeIndex.FjernVerge"}),Ls=({verge:o,type:k,fjernVerge:t,opprettVerge:E,lukkModal:h,alleKodeverk:f})=>{const N=k==="FJERN",b=oa({defaultValues:o?tn.buildInitialValues(o):void 0}),R=P=>{N?t():E(tn.transformValues(P)),h()},S=b.watch("vergeType");return Jr.useEffect(()=>{o&&b.reset(tn.buildInitialValues(o))},[o]),m.jsx(Ie,{value:ua,children:m.jsx(ma,{formMethods:b,onSubmit:R,children:m.jsxs(re,{open:!0,width:"small",onClose:h,"aria-label":ua.formatMessage({id:N?"MenyVergeIndex.FjernVergeSporsmal":"MenyVergeIndex.OpprettVergeSporsmal"}),children:[m.jsx(re.Header,{closeButton:!0,children:m.jsx(ja,{size:"small",level:"2",children:ua.formatMessage({id:N?"MenyVergeIndex.FjernVergeSporsmal":"MenyVergeIndex.OpprettVergeSporsmal"})})}),m.jsx(re.Body,{children:m.jsx(tn,{readOnly:N,vergetyper:f.VergeType,valgtVergeType:S})}),m.jsxs(re.Footer,{children:[m.jsx(we,{variant:"primary",size:"small",autoFocus:!0,type:"submit",children:ua.formatMessage({id:N?"MenyVergeIndex.Fjern":"MenyVergeIndex.Opprett"})}),m.jsx(we,{variant:"secondary",size:"small",onClick:h,type:"button",children:ua.formatMessage({id:"MenyVergeIndex.Avbryt"})})]})]})})})};Ls.__docgenInfo={description:"",methods:[],displayName:"MenyVergeIndex",props:{verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]},description:""},alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavnTilbakekreving<
  K extends TilbakekrevingKodeverkType ? K : unknown
>[]`}}]}}]},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},type:{required:!0,tsType:{name:"union",raw:"'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}]},description:""},fjernVerge:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},opprettVerge:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: OpprettVergeParams) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},name:"values"}],return:{name:"void"}}},description:""}}};const Vt=pe(Bt),pp=()=>Vt.formatMessage({id:"MenyTaAvVentIndex.ResumeBehandling"}),Os=({taBehandlingAvVent:o,lukkModal:k})=>m.jsx(Ie,{value:Vt,children:m.jsx(ct,{text:Vt.formatMessage({id:"MenyTaAvVentIndex.TaAvVent"}),showModal:!0,submit:()=>{o(),k()},cancel:k})});Os.__docgenInfo={description:"",methods:[],displayName:"MenyTaAvVentIndex",props:{taBehandlingAvVent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ep="_modal_tyvxs_1",Tp="_selectWidth_tyvxs_6",At={modal:Ep,selectWidth:Tp},_p=Ft(400),Gs=({handleSubmit:o,lukkModal:k,behandlendeEnheter:t,gjeldendeBehandlendeEnhetId:E,gjeldendeBehandlendeEnhetNavn:h})=>{const f=t.map((L,le)=>m.jsx("option",{value:`${le}`,children:`${L.enhetId} ${L.enhetNavn}`},L.enhetId)),N=[m.jsx("option",{disabled:!0,children:`${E} ${h}`},E)].concat(f),b=sa(),R=oa(),S=R.watch("nyEnhet"),P=R.watch("begrunnelse");return m.jsx(ma,{formMethods:R,onSubmit:o,children:m.jsxs(re,{className:At.modal,open:!0,"aria-label":b.formatMessage({id:"EndreBehandlendeEnhetModal.ModalDescription"}),onClose:k,children:[m.jsx(re.Header,{children:m.jsx(ja,{size:"small",level:"2",children:m.jsx($,{id:"EndreBehandlendeEnhetModal.EndreEnhet"})})}),m.jsx(re.Body,{children:m.jsxs(Pe,{gap:"space-16",children:[m.jsx(Ga,{name:"nyEnhet",control:R.control,label:b.formatMessage({id:"EndreBehandlendeEnhetModal.NyEnhetField"}),validate:[be],selectValues:N,className:At.selectWidth}),m.jsx(xr,{name:"begrunnelse",control:R.control,label:b.formatMessage({id:"EndreBehandlendeEnhetModal.BegrunnelseField"}),validate:[be,_p,Dr],maxLength:400})]})}),m.jsxs(re.Footer,{children:[m.jsx(we,{size:"small",variant:"primary",className:At.button,disabled:!(S&&P),children:b.formatMessage({id:"EndreBehandlendeEnhetModal.Ok"})}),m.jsx(we,{size:"small",variant:"secondary",onClick:k,type:"button",children:b.formatMessage({id:"EndreBehandlendeEnhetModal.Avbryt"})})]})]})})};Gs.__docgenInfo={description:`EndreBehandlendeEnhetModal

Denne modalen vises når saksbehandler valger 'Bytt behandlende enhet'.
Ved å angi ny enhet og begrunnelse og trykke på 'OK' blir behandlende enhet endret.`,methods:[],displayName:"EndreBehandlendeEnhetModal",props:{lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},gjeldendeBehandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},gjeldendeBehandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(formValues: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  nyEnhet: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"nyEnhet",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"formValues"}],return:{name:"void"}}},description:""}}};const js=pe(Bt),Ap=()=>js.formatMessage({id:"MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet"}),Us=({behandlendeEnhetId:o,behandlendeEnhetNavn:k,nyBehandlendeEnhet:t,behandlendeEnheter:E,lukkModal:h})=>{const f=E.filter(b=>b.enhetId!==o),N=b=>{const R=f[parseInt(b.nyEnhet,10)],S={enhetNavn:R.enhetNavn,enhetId:R.enhetId,begrunnelse:b.begrunnelse};t(S),h()};return m.jsx(Ie,{value:js,children:m.jsx(Gs,{lukkModal:h,behandlendeEnheter:f,gjeldendeBehandlendeEnhetId:o,gjeldendeBehandlendeEnhetNavn:k,handleSubmit:N})})};Us.__docgenInfo={description:"",methods:[],displayName:"MenyEndreBehandlendeEnhetIndex",props:{behandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},behandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},nyBehandlendeEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ enhetNavn: string; enhetId: string; begrunnelse: string }",signature:{properties:[{key:"enhetNavn",value:{name:"string",required:!0}},{key:"enhetId",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const hp={"MenyApneForEndringerIndex.ReopenBehandling":"Åpne behandling for endringer","MenyApneForEndringerIndex.OpenBehandling":"Åpne behandling for endringer?"},Kt=pe(hp),fp=()=>Kt.formatMessage({id:"MenyApneForEndringerIndex.ReopenBehandling"}),Ds=({apneBehandlingForEndringer:o,lukkModal:k})=>{const t=()=>{o(),k()};return m.jsx(Ie,{value:Kt,children:m.jsx(ct,{text:Kt.formatMessage({id:"MenyApneForEndringerIndex.OpenBehandling"}),showModal:!0,submit:t,cancel:k})})};Ds.__docgenInfo={description:"",methods:[],displayName:"MenyApneForEndringerIndex",props:{apneBehandlingForEndringer:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Np="_modal_mgzc2_1",bp={modal:Np},Ms=({submitCallback:o,cancelEvent:k,saksnummer:t,fagsakMarkeringer:E,fagsakMarkeringerKodeverk:h})=>{const f=sa(),N=oa({defaultValues:{saksnummer:t,fagsakMarkeringer:E?E.map(b=>b.fagsakMarkering):[]}});return m.jsx(ma,{formMethods:N,onSubmit:o,children:m.jsxs(re,{className:bp.modal,open:!0,"aria-label":f.formatMessage({id:"MenyEndreUtlandIndex.UtlandTittel"}),onClose:k,children:[m.jsx(re.Header,{children:m.jsx(ja,{size:"small",level:"2",children:m.jsx($,{id:"MenyEndreUtlandIndex.UtlandTittel"})})}),m.jsx(re.Body,{children:m.jsx(by,{name:"fagsakMarkeringer",control:N.control,hideLegend:!0,children:h.map(b=>m.jsx(By,{value:b.kode,children:b.navn},b.kode))})}),m.jsxs(re.Footer,{children:[m.jsx(we,{size:"small",variant:"primary",children:m.jsx($,{id:"MenyEndreUtlandIndex.Ok"})}),m.jsx(we,{size:"small",variant:"secondary",onClick:k,type:"button",children:m.jsx($,{id:"MenyEndreUtlandIndex.Avbryt"})})]})]})})};Ms.__docgenInfo={description:`EndreUtlandModal

Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.`,methods:[],displayName:"EndreUtlandModal",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]"},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakMarkeringer: string[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},name:"formData"}],return:{name:"void"}}},description:""},fagsakMarkeringerKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FagsakMarkering'>[]"},description:""}}};const Vp={"MenyEndreUtlandIndex.MenyTittel":"Endre saksmerking","MenyEndreUtlandIndex.UtlandTittel":"Saksmarkering","MenyEndreUtlandIndex.Ok":"OK","MenyEndreUtlandIndex.Avbryt":"Avbryt"},xs=pe(Vp),Kp=()=>xs.formatMessage({id:"MenyEndreUtlandIndex.MenyTittel"}),Hs=({endreFagsakMarkering:o,lukkModal:k,...t})=>{const E=h=>{o(h),k()};return m.jsx(Ie,{value:xs,children:m.jsx(Ms,{cancelEvent:k,submitCallback:E,...t})})};Hs.__docgenInfo={description:"",methods:[],displayName:"MenyEndreUtlandIndex",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]"},description:""},endreFagsakMarkering:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakMarkeringer: string[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},name:"formData"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fagsakMarkeringerKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FagsakMarkering'>[]"},description:""}}};const Rp="_image_1xqqe_1",Fp="_modal_1xqqe_8",Ns={image:Rp,modal:Fp},Ys=({showModal:o,closeEvent:k})=>{const t=sa();return m.jsx(re,{className:Ns.modal,open:o,"aria-label":t.formatMessage({id:"HenlagtBehandlingModal.ModalDescription"}),onClose:k,children:m.jsx(re.Body,{children:m.jsxs(Sn,{justify:"space-between",children:[m.jsxs(Sn,{gap:"space-12",children:[m.jsx(Py,{className:Ns.image,title:t.formatMessage({id:"HenlagtBehandlingModal.Henlagt"})}),m.jsxs(Pe,{gap:"space-4",children:[m.jsx($r,{size:"small",children:m.jsx($,{id:"HenlagtBehandlingModal.BehandlingenErHenlagt"})}),m.jsx(Yr,{size:"small",children:m.jsx($,{id:"HenlagtBehandlingModal.RutetTilForsiden"})})]})]}),m.jsx(we,{variant:"primary",size:"small",onClick:k,autoFocus:!0,type:"button",children:m.jsx($,{id:"HenlagtBehandlingModal.Ok"})})]})})})};Ys.__docgenInfo={description:`HenlagtBehandlingModal

Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
er satt til Iverksetter vedtak. Ved å trykke på knapp blir saksbehandler tatt tilbake til sokesiden.`,methods:[],displayName:"HenlagtBehandlingModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Sp="_modal_osiwa_1",qp="_button_osiwa_5",cp="_selectWidth_osiwa_9",Gr={modal:Sp,button:qp,selectWidth:cp},Bp=Ft(1500),Pp={[x.KLAGE]:[oe.HENLAGT_KLAGE_TRUKKET,oe.HENLAGT_FEILOPPRETTET],[x.ANKE]:[oe.HENLAGT_ANKE_TRUKKET,oe.HENLAGT_FEILOPPRETTET],[x.DOKUMENTINNSYN]:[oe.HENLAGT_INNSYN_TRUKKET,oe.HENLAGT_FEILOPPRETTET],[x.TILBAKEKREVING]:[jr.HENLAGT_FEILOPPRETTET],[x.TILBAKEKREVING_REVURDERING]:[jr.HENLAGT_FEILOPPRETTET_MED_BREV,jr.HENLAGT_FEILOPPRETTET_UTEN_BREV],[x.REVURDERING]:[oe.HENLAGT_SOKNAD_TRUKKET,oe.HENLAGT_FEILOPPRETTET,oe.HENLAGT_SOKNAD_MANGLER],[x.FORSTEGANGSSOKNAD]:[oe.HENLAGT_SOKNAD_TRUKKET,oe.HENLAGT_FEILOPPRETTET,oe.HENLAGT_SOKNAD_MANGLER]},Cs=({handleSubmit:o,cancelEvent:k,forhandsvisHenleggBehandling:t,behandlingUuid:E,ytelseType:h,behandlingType:f,behandlingResultatTyper:N})=>{const b=sa(),R=oa(),S=R.watch("årsakKode"),P=R.watch("begrunnelse"),L=R.watch("fritekst"),le=Ip(f,S,L),X=Lp(N,f,h);return m.jsx(ma,{formMethods:R,onSubmit:o,children:m.jsxs(re,{className:Gr.modal,open:!0,"aria-label":b.formatMessage({id:"HenleggBehandlingModal.ModalDescription"}),onClose:k,children:[m.jsx(re.Header,{children:m.jsx(ja,{size:"small",level:"2",children:m.jsx($,{id:"HenleggBehandlingModal.HenleggBehandling"})})}),m.jsx(re.Body,{children:m.jsxs(Pe,{gap:"space-16",children:[m.jsx(Ga,{name:"årsakKode",control:R.control,className:Gr.selectWidth,label:b.formatMessage({id:"HenleggBehandlingModal.ArsakField"}),validate:[be],selectValues:X.map(ge=>m.jsx("option",{value:ge.kode,children:b.formatMessage({id:ge.kode})},ge.kode))}),m.jsx(xr,{name:"begrunnelse",control:R.control,label:b.formatMessage({id:"HenleggBehandlingModal.BegrunnelseField"}),validate:[be,Bp,Dr],maxLength:1500}),Js(f,S)&&m.jsx("div",{className:Gr.fritekstTilBrevTextArea,children:m.jsx(xr,{name:"fritekst",control:R.control,label:b.formatMessage({id:"HenleggBehandlingModal.Fritekst"}),validate:[be,Dr],maxLength:2e3,parse:yy})}),le&&m.jsxs(Sn,{justify:"space-between",children:[m.jsx($r,{size:"small",children:b.formatMessage({id:"HenleggBehandlingModal.SokerInformeres"})}),m.jsx(Iy,{href:"#",onClick:bs(t,E,L),onKeyDown:bs(t,E,L),children:m.jsx($,{id:"HenleggBehandlingModal.ForhandsvisBrev"})})]})]})}),m.jsxs(re.Footer,{children:[m.jsx(we,{variant:"primary",size:"small",className:Gr.button,disabled:wp(f,S,P,L),children:m.jsx($,{id:"HenleggBehandlingModal.HenleggBehandlingSubmit"})}),m.jsx(we,{variant:"secondary",size:"small",onClick:k,type:"button",children:m.jsx($,{id:"HenleggBehandlingModal.Avbryt"})})]})]})})},bs=(o,k,t)=>E=>{o({behandlingUuid:k,dokumentMal:wy.INFO_OM_HENLEGGELSE,fritekst:t}),E.preventDefault()},Js=(o,k)=>x.TILBAKEKREVING_REVURDERING===o&&oe.HENLAGT_FEILOPPRETTET_MED_BREV===k,wp=(o,k,t,E)=>Js(o,k)?!(k&&t&&E):!(k&&t),Ip=(o,k,t)=>o===x.TILBAKEKREVING?oe.HENLAGT_FEILOPPRETTET===k:o===x.TILBAKEKREVING_REVURDERING?oe.HENLAGT_FEILOPPRETTET_MED_BREV===k&&!!t:[oe.HENLAGT_SOKNAD_TRUKKET,oe.HENLAGT_KLAGE_TRUKKET,oe.HENLAGT_INNSYN_TRUKKET].some(E=>E===k),Lp=(o,k,t)=>Pp[k].filter(h=>t!==Mr.ENGANGSSTONAD||t===Mr.ENGANGSSTONAD&&h!==oe.HENLAGT_SOKNAD_MANGLER).flatMap(h=>{const f=o.find(N=>N.kode===h);return f?[f]:[]});Cs.__docgenInfo={description:`HenleggBehandlingModal

Presentasjonskomponent. Denne modalen vises når saksbehandler valger 'Henlegg behandling og avslutt'.
Ved å angi årsak og begrunnelse og trykke på 'Henlegg behandling' blir behandlingen henlagt og avsluttet.`,methods:[],displayName:"HenleggBehandlingModal",props:{handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  årsakKode?: string;
  begrunnelse?: string;
  fritekst?: string;
}`,signature:{properties:[{key:"årsakKode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},forhandsvisHenleggBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhåndsvisHenleggParams) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  dokumentMal: string;
  fritekst?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},ytelseType:{required:!0,tsType:{name:"FagsakYtelseType"},description:""},behandlingResultatTyper:{required:!0,tsType:{name:"union",raw:`| KodeverkMedNavn<'BehandlingResultatType'>[]
| KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[]`,elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingResultatType'>[]"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[]"}]},description:""},behandlingType:{required:!0,tsType:{name:"BehandlingType"},description:""}}};const Op="Behandlingen er feilaktig opprettet",Gp="Feilaktig opprettet - med henleggelsesbrev",jp="Feilaktig opprettet - uten henleggelsesbrev",Up="Klagen er trukket",Dp="Innsynskrav er trukket",Mp={"MenyHenleggIndex.HenleggBehandling":"Henlegg behandlingen og avslutt","HenleggBehandlingModal.ModalDescription":"Behandlingen henlegges","HenleggBehandlingModal.HenleggBehandling":"Henlegg behandling","HenleggBehandlingModal.ArsakField":"Velg årsak","HenleggBehandlingModal.BegrunnelseField":"Begrunnelse","HenleggBehandlingModal.Fritekst":"Fritekst til brev","HenleggBehandlingModal.HenleggBehandlingSubmit":"Henlegg behandling","HenleggBehandlingModal.Avbryt":"Avbryt","HenleggBehandlingModal.SokerInformeres":"Informer søker","HenleggBehandlingModal.ForhandsvisBrev":"Forhåndsvis brev","HenlagtBehandlingModal.ModalDescription":"Behandlingen er henlagt","HenlagtBehandlingModal.Henlagt":"Henlagt","HenlagtBehandlingModal.BehandlingenErHenlagt":"Behandlingen er henlagt","HenlagtBehandlingModal.RutetTilForsiden":"Du kommer nå til forsiden","HenlagtBehandlingModal.Ok":"OK",HENLAGT_SØKNAD_TRUKKET:"Søknaden er trukket",HENLAGT_FEILOPPRETTET:Op,HENLAGT_FEILOPPRETTET_MED_BREV:Gp,HENLAGT_FEILOPPRETTET_UTEN_BREV:jp,HENLAGT_KLAGE_TRUKKET:Up,HENLAGT_INNSYN_TRUKKET:Dp,HENLAGT_SØKNAD_MANGLER:"Søknad mangler"},Ws=pe(Mp),xp=()=>Ws.formatMessage({id:"MenyHenleggIndex.HenleggBehandling"}),$s=({valgtBehandling:o,henleggBehandling:k,forhandsvisHenleggBehandling:t,ytelseType:E,behandlingResultatTyper:h,gaaTilSokeside:f,lukkModal:N})=>{const[b,R]=Jr.useState(!1),S=P=>{const L={årsakKode:P.årsakKode??"",begrunnelse:P.begrunnelse??"",fritekst:P.fritekst};k(L).then(()=>{R(!0)})};return m.jsxs(Ie,{value:Ws,children:[!b&&m.jsx(Cs,{handleSubmit:S,cancelEvent:N,forhandsvisHenleggBehandling:t,ytelseType:E,behandlingType:o.type,behandlingUuid:o.uuid,behandlingResultatTyper:h}),b&&m.jsx(Ys,{showModal:!0,closeEvent:f})]})};$s.__docgenInfo={description:"",methods:[],displayName:"MenyHenleggIndex",props:{valgtBehandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},henleggBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { årsakKode: string; begrunnelse: string; fritekst?: string }) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ årsakKode: string; begrunnelse: string; fritekst?: string }",signature:{properties:[{key:"årsakKode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},forhandsvisHenleggBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhåndsvisHenleggParams) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  dokumentMal: string;
  fritekst?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},ytelseType:{required:!0,tsType:{name:"FagsakYtelseType"},description:""},behandlingResultatTyper:{required:!0,tsType:{name:"union",raw:`| KodeverkMedNavn<'BehandlingResultatType'>[]
| KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[]`,elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingResultatType'>[]"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[]"}]},description:""},gaaTilSokeside:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Hp={"MenyMerkSomHasterIndex.MerkSomHaster":"Merk som haster","MenyMerkSomHasterIndex.MerkSomHasterSpørsmål":"Merk som haster?"},Rt=pe(Hp),Yp=()=>Rt.formatMessage({id:"MenyMerkSomHasterIndex.MerkSomHaster"}),zs=({merkSomHaster:o,lukkModal:k})=>{const t=()=>{o(),k()};return m.jsx(Ie,{value:Rt,children:m.jsx(ct,{text:Rt.formatMessage({id:"MenyMerkSomHasterIndex.MerkSomHasterSpørsmål"}),showModal:!0,submit:t,cancel:k})})};zs.__docgenInfo={description:"",methods:[],displayName:"MenyMerkSomHasterIndex",props:{merkSomHaster:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Cp="_modal_1awdg_11",Jp="_typeBredde_1awdg_29",Wp="_arsakBredde_1awdg_33",ht={modal:Cp,typeBredde:Jp,arsakBredde:Wp},$p=(o,k)=>{const t=k.some(E=>E.kode===o.kode);return m.jsx("option",{value:o.kode,disabled:!t,children:` ${o.navn} `},o.kode)},zp=[J.ANNET,J.FEIL_I_LOVANDVENDELSE,J.FEIL_ELLER_ENDRET_FAKTA,J.FEIL_REGELVERKSFORSTAELSE,J.FEIL_PROSESSUELL],Zp=[J.BEREEGNINGSGRUNNLAG,J.MEDLEMSKAP,J.OPPTJENING,J.FORDELING,J.INNTEKT,J.DØD,J.SØKERS_RELASJON,J.SØKNADSFRIST,J.KLAGE_U_INNTK,J.KLAGE_M_INNTK],Qp=[J.KLAGE_U_INNTK,J.KLAGE_M_INNTK,J.RE_ENDRET_INNTEKTSMELDING,J.RE_ENDRING_FRA_BRUKER,J.FØDSEL,J.DØD,J.ANNET,J.INNTEKT],Xp=[J.RE_FORELDELSE,J.RE_VILKÅR,J.RE_KLAGE_KA,J.RE_KLAGE_NFP,J.RE_FEILUTBETALT_BELØP_REDUSERT],eE=(o,k,t,E)=>{if(E&&k===x.TILBAKEKREVING_REVURDERING)return Xp.flatMap(h=>{const f=E.find(N=>N.kode===h);return f?[f]:[]});if(t&&k===x.REVURDERING){const h=o===Mr.FORELDREPENGER,f=o===Mr.SVANGERSKAPSPENGER;let N=h?Zp:zp;return f&&(N=Qp),t.filter(b=>N.some(R=>R===b.kode)).sort((b,R)=>b.navn.localeCompare(R.navn))}return[]},nE=o=>[...o].sort((k,t)=>k.navn.localeCompare(t.navn)),aE=(o,k,t={kanBehandlingOpprettes:!1,kanRevurderingOpprettes:!1})=>o.filter(E=>E.kode===x.TILBAKEKREVING?t.kanBehandlingOpprettes:E.kode===x.TILBAKEKREVING_REVURDERING?t.kanRevurderingOpprettes:k.some(h=>h.behandlingType===E.kode&&h.kanOppretteBehandling)),Zs=({submitCallback:o,cancelEvent:k,behandlingstyper:t,uuidForSistLukkede:E,ytelseType:h,behandlingOppretting:f,kanTilbakekrevingOpprettes:N,revurderingArsaker:b,tilbakekrevingRevurderingArsaker:R})=>{const S=sa(),P=oa(),L=ee=>o({...ee,eksternUuid:E,fagsakYtelseType:h}),le=P.watch("behandlingType"),X=nE(t),ge=aE(X,f,N),Ve=eE(h,le,b,R);return m.jsx(ma,{formMethods:P,onSubmit:L,children:m.jsxs(re,{className:ht.modal,open:!0,"aria-label":S.formatMessage({id:"MenyNyBehandlingIndex.ModalDescription"}),onClose:k,children:[m.jsx(re.Header,{children:m.jsx(ja,{size:"small",level:"2",children:m.jsx($,{id:"MenyNyBehandlingIndex.OpprettNyForstegangsbehandling"})})}),m.jsx(re.Body,{children:m.jsxs(Pe,{gap:"space-16",children:[m.jsx(Ga,{name:"behandlingType",control:P.control,label:"",validate:[be],selectValues:X.map(ee=>$p(ee,ge)),className:ht.typeBredde}),le===x.FORSTEGANGSSOKNAD&&m.jsx(Vy,{name:"nyBehandlingEtterKlage",control:P.control,label:S.formatMessage({id:"MenyNyBehandlingIndex.NyBehandlingEtterKlage"})}),Ve.length>0&&m.jsx(Ga,{name:"behandlingArsakType",control:P.control,label:"",hideLabel:!0,validate:[be],className:ht.arsakBredde,selectValues:Ve.map(ee=>m.jsx("option",{value:ee.kode,children:ee.navn},ee.kode))})]})}),m.jsxs(re.Footer,{children:[m.jsx(we,{size:"small",variant:"primary",children:m.jsx($,{id:"MenyNyBehandlingIndex.Ok"})}),m.jsx(we,{size:"small",variant:"secondary",onClick:k,type:"button",children:m.jsx($,{id:"MenyNyBehandlingIndex.Avbryt"})})]})]})})};Zs.__docgenInfo={description:`NyBehandlingModal

Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.`,methods:[],displayName:"NyBehandlingModal",props:{ytelseType:{required:!0,tsType:{name:"string"},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  data: {
    eksternUuid?: string;
    fagsakYtelseType: string;
  } & FormValues,
) => void`,signature:{arguments:[{type:{name:"intersection",raw:`{
  eksternUuid?: string;
  fagsakYtelseType: string;
} & FormValues`,elements:[{name:"signature",type:"object",raw:`{
  eksternUuid?: string;
  fagsakYtelseType: string;
}`,signature:{properties:[{key:"eksternUuid",value:{name:"string",required:!1}},{key:"fagsakYtelseType",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  behandlingType?: string;
  nyBehandlingEtterKlage?: string;
  behandlingArsakType?: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!1}},{key:"nyBehandlingEtterKlage",value:{name:"string",required:!1}},{key:"behandlingArsakType",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},behandlingOppretting:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]"},description:""},behandlingstyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingType'>[]"},description:""},tilbakekrevingRevurderingArsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'BehandlingÅrsakType'>[]"},description:""},revurderingArsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingÅrsakType'>[]"},description:""},kanTilbakekrevingOpprettes:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  kanBehandlingOpprettes: boolean;
  kanRevurderingOpprettes: boolean;
}`,signature:{properties:[{key:"kanBehandlingOpprettes",value:{name:"boolean",required:!0}},{key:"kanRevurderingOpprettes",value:{name:"boolean",required:!0}}]}},description:""},uuidForSistLukkede:{required:!1,tsType:{name:"string"},description:""}}};const rE={"MenyNyBehandlingIndex.NyForstegangsbehandling":"Opprett ny behandling","MenyNyBehandlingIndex.ModalDescription":"Ny behandling","MenyNyBehandlingIndex.OpprettNyForstegangsbehandling":"Opprett ny behandling","MenyNyBehandlingIndex.NyBehandlingEtterKlage":"Behandlingen opprettes som et resultat av klagebehandling","MenyNyBehandlingIndex.Ok":"OK","MenyNyBehandlingIndex.Avbryt":"Avbryt"},lE=[x.TILBAKEKREVING,x.TILBAKEKREVING_REVURDERING],Qs=pe(rE),tE=()=>Qs.formatMessage({id:"MenyNyBehandlingIndex.NyForstegangsbehandling"}),Xs=({saksnummer:o,behandlingUuid:k,lagNyBehandling:t,lukkModal:E,...h})=>{const f=N=>{const b=!!N.behandlingType&&lE.some(P=>P===N.behandlingType),S={saksnummer:o,...k&&b?{behandlingUuid:k}:{},...N};t({isTilbakekreving:b,params:S}),E()};return m.jsx(Ie,{value:Qs,children:m.jsx(Zs,{cancelEvent:E,submitCallback:f,...h})})};Xs.__docgenInfo={description:"",methods:[],displayName:"MenyNyBehandlingIndex",props:{ytelseType:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},lagNyBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:`(values: {
  isTilbakekreving: boolean;
  params: {
    saksnummer: string;
    behandlingUuid?: string;
  } & FormValues;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  isTilbakekreving: boolean;
  params: {
    saksnummer: string;
    behandlingUuid?: string;
  } & FormValues;
}`,signature:{properties:[{key:"isTilbakekreving",value:{name:"boolean",required:!0}},{key:"params",value:{name:"intersection",raw:`{
  saksnummer: string;
  behandlingUuid?: string;
} & FormValues`,elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid?: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  behandlingType?: string;
  nyBehandlingEtterKlage?: string;
  behandlingArsakType?: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!1}},{key:"nyBehandlingEtterKlage",value:{name:"string",required:!1}},{key:"behandlingArsakType",value:{name:"string",required:!1}}]}}],required:!0}}]}},name:"values"}],return:{name:"void"}}},description:""},behandlingstyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingType'>[]"},description:""},tilbakekrevingRevurderingArsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'BehandlingÅrsakType'>[]"},description:""},revurderingArsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingÅrsakType'>[]"},description:""},behandlingOppretting:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]"},description:""},kanTilbakekrevingOpprettes:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  kanBehandlingOpprettes: boolean;
  kanRevurderingOpprettes: boolean;
}`,signature:{properties:[{key:"kanBehandlingOpprettes",value:{name:"boolean",required:!0}},{key:"kanRevurderingOpprettes",value:{name:"boolean",required:!0}}]}},description:""},uuidForSistLukkede:{required:!1,tsType:{name:"string"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const iE={"MenySettPaVentIndex.BehandlingOnHold":"Sett behandlingen på vent"},e0=pe(iE),uE=()=>e0.formatMessage({id:"MenySettPaVentIndex.BehandlingOnHold"}),n0=({settBehandlingPaVent:o,ventearsaker:k,lukkModal:t,erTilbakekreving:E})=>{const h=f=>{if(f.frist===void 0||f.ventearsak===void 0)throw new Error("Frist eller venteårsak skal være satt");const N={frist:f.frist,ventearsak:f.ventearsak};o(N),t()};return m.jsx(Ie,{value:e0,children:m.jsx(Ly,{showModal:!0,submitCallback:h,cancelEvent:t,ventearsaker:k,erTilbakekreving:E,hasManualPaVent:!0,frist:null,ventearsak:null})})};n0.__docgenInfo={description:"",methods:[],displayName:"MenySettPaVentIndex",props:{settBehandlingPaVent:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!0}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},ventearsaker:{required:!0,tsType:{name:"union",raw:"KodeverkMedNavn<'Venteårsak'>[] | KodeverkMedNavnTilbakekreving<'Venteårsak'>[]",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Venteårsak'>[]"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""}}};const a0=({behandling:o,setBehandling:k,lukkModal:t})=>{const E=Fs(o,k);return m.jsx(Ds,{apneBehandlingForEndringer:E.åpneForEndringer,lukkModal:t})};a0.__docgenInfo={description:"",methods:[],displayName:"ApneForEndringerMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling?: Behandling) => void",signature:{arguments:[{type:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const r0=({behandling:o,hentOgSettBehandling:k,lukkModal:t})=>{const E=Be(qt()),h=Ua(o),{mutate:f}=un({mutationFn:N=>h.endreBehandlendeEnhet({...N,behandlingUuid:o.uuid,behandlingVersjon:o.versjon}),onSuccess:()=>k()});return m.jsx(Us,{behandlendeEnhetId:o.behandlendeEnhetId,behandlendeEnhetNavn:o.behandlendeEnhetNavn,nyBehandlendeEnhet:f,behandlendeEnheter:en(E.data).behandlendeEnheter,lukkModal:t})};r0.__docgenInfo={description:"",methods:[],displayName:"EndreBehandlendeEnhetMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const l0=({saksnummer:o,fagsakMarkeringer:k,hentOgSettBehandling:t,lukkModal:E})=>{const h=St(),f=Wr(),N=Uy("FagsakMarkering").toSorted((R,S)=>R.navn.localeCompare(S.navn)),{mutate:b}=un({mutationFn:R=>f.endreSakMarkering(R),onSuccess:()=>{t(),h.invalidateQueries({queryKey:[Oa.FETCH_FAGSAK]})}});return m.jsx(Hs,{saksnummer:o,fagsakMarkeringer:k,endreFagsakMarkering:b,lukkModal:E,fagsakMarkeringerKodeverk:N})};l0.__docgenInfo={description:"",methods:[],displayName:"EndreFagsakMarkeringMenyModal",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!0,tsType:{name:"union",raw:"Saksmarkering[] | undefined",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]"},{name:"undefined"}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const t0=({behandling:o,behandlingAppKontekst:k,fagsakYtelseType:t,lukkModal:E})=>{const h=Wr(),f=Ua(o),{data:N}=Be(h.kodeverkOptions()),{data:b}=Be(h.fptilbake.kodeverkOptions()),{mutateAsync:R}=un({mutationFn:X=>f.henleggBehandling({...X,behandlingUuid:o.uuid,behandlingVersjon:o.versjon})}),S=o.type===x.TILBAKEKREVING||o.type===x.TILBAKEKREVING_REVURDERING?en(b).BehandlingResultatType:en(N).BehandlingResultatType,P=Vs(),L=()=>P("/"),le=sE(k);return m.jsx($s,{valgtBehandling:o,forhandsvisHenleggBehandling:le,henleggBehandling:R,ytelseType:t,behandlingResultatTyper:S,lukkModal:E,gaaTilSokeside:L})},sE=o=>{const k=_y(o),{mutate:t}=un({mutationFn:f=>k.forhåndsvisMelding(f),onSuccess:f=>{gs(f)}}),{mutate:E}=un({mutationFn:f=>Ay(f.behandlingUuid,f.fritekst??""),onSuccess:f=>{gs(f)}}),h=x.TILBAKEKREVING===o.type||x.TILBAKEKREVING_REVURDERING===o.type;return f=>{h?E(f):t(f)}};t0.__docgenInfo={description:"",methods:[],displayName:"HenleggMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},behandlingAppKontekst:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""},fagsakYtelseType:{required:!0,tsType:{name:"FagsakYtelseType"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const i0=({behandling:o,hentOgSettBehandling:k,lukkModal:t})=>{const E=Ua(o),h=St(),{mutate:f}=un({mutationFn:()=>E.merkSomHaster(o.uuid,o.versjon),onSuccess:()=>{k(),h.invalidateQueries({queryKey:[Oa.FETCH_FAGSAK]}),h.invalidateQueries({queryKey:[Oa.FETCH_FAGSAKDATA_FPTILBAKE]})}});return m.jsx(zs,{merkSomHaster:f,lukkModal:t})};i0.__docgenInfo={description:"",methods:[],displayName:"MerkSomHasterMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const oE=o=>{const{setIsRequestPending:k}=Oy(),{onBehandlingSuccess:t}=Gy(o),{mutate:E}=un({mutationFn:async h=>{const f=h.isTilbakekreving?await hy(h.params):await fy(h.params);return jy(f,k)},onSuccess:t});return{lagNyBehandling:E}},mE=[x.FORSTEGANGSSOKNAD,x.KLAGE,x.REVURDERING,x.DOKUMENTINNSYN,x.TILBAKEKREVING,x.TILBAKEKREVING_REVURDERING],dE=(o=[])=>{const k=o.find(t=>t.gjeldendeVedtak&&t.status===Ey.AVSLUTTET&&(t.type===x.FORSTEGANGSSOKNAD||t.type===x.REVURDERING));return k?k.uuid:void 0},u0=({fagsakData:o,behandlingUuid:k,lukkModal:t})=>{const E=o.getFagsak(),h=o.getAlleBehandlinger(),f=o.getBehandling(k),N=dE(h),b=Hy().includes(Cr.FPTILBAKE),R=Wr(),{data:S}=Be(R.kodeverkOptions()),{data:P}=Be(R.fptilbake.kodeverkOptions()),L=Be(qt()),{innloggetBruker:le}=en(L.data),X=b&&!le.kanVeilede&&N!==void 0,{data:ge=!1}=Be(R.fptilbake.kanTilbakekrevingOpprettesOptions(X,E.saksnummer,N)),Ve=f?.type===x.TILBAKEKREVING||f?.type===x.TILBAKEKREVING_REVURDERING,ee=b&&!le.kanVeilede&&Ve&&!!k,{data:Tn=!1}=Be(R.fptilbake.kanTilbakekrevingRevurderingOpprettesOptions(ee,k)),Ma=P?P.BehandlingÅrsakType:void 0,He=S?S.BehandlingÅrsakType:void 0,qn=en(S).BehandlingType.filter(Pn=>mE.some(va=>va===Pn.kode)),Ye=Vs(),cn=py(),Ce=Pn=>{const va=My(E.saksnummer,Pn?.uuid);Ye(xy({...cn,pathname:va}))},{lagNyBehandling:Bn}=oE(Ce);return m.jsx(Xs,{saksnummer:E.saksnummer,behandlingUuid:f?.uuid,uuidForSistLukkede:N,behandlingOppretting:o.getBehandlingOppretting(),kanTilbakekrevingOpprettes:{kanBehandlingOpprettes:ge,kanRevurderingOpprettes:Tn},behandlingstyper:qn,tilbakekrevingRevurderingArsaker:Ma,revurderingArsaker:He,ytelseType:E.fagsakYtelseType,lagNyBehandling:Bn,lukkModal:t})};u0.__docgenInfo={description:"",methods:[],displayName:"NyBehandlingMenyModal",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const s0=({behandling:o,hentOgSettBehandling:k,lukkModal:t})=>{const E=Wr(),h=Ua(o),{data:f}=Be(E.kodeverkOptions()),{data:N}=Be(E.fptilbake.kodeverkOptions()),{mutate:b}=un({mutationFn:S=>h.settBehandlingPåVent({frist:S.frist,ventearsak:S.ventearsak,behandlingUuid:o.uuid,behandlingVersjon:o.versjon}),onSuccess:()=>k()}),R=o.type===x.TILBAKEKREVING||o.type===x.TILBAKEKREVING_REVURDERING?en(N).Venteårsak:en(f).Venteårsak;return m.jsx(n0,{settBehandlingPaVent:b,ventearsaker:R,lukkModal:t,erTilbakekreving:o.type===x.TILBAKEKREVING||o.type===x.TILBAKEKREVING_REVURDERING})};s0.__docgenInfo={description:"",methods:[],displayName:"SettPaVentMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const o0=({behandling:o,setBehandling:k,lukkModal:t})=>{const E=Fs(o,k);return m.jsx(Os,{taBehandlingAvVent:E.gjenopptaBehandling,lukkModal:t})};o0.__docgenInfo={description:"",methods:[],displayName:"TaAvVentMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Behandling | undefined",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const m0=({behandlingAppKontekst:o,behandling:k,hentOgSettBehandling:t,lukkModal:E})=>{const h=o.behandlingTillatteOperasjoner?.vergeBehandlingsmeny,f=Dy(k.type),N=St(),b=()=>{t(),N.invalidateQueries({queryKey:[Oa.FETCH_FAGSAK]}),N.invalidateQueries({queryKey:[Oa.FETCH_FAGSAKDATA_FPTILBAKE]}),N.invalidateQueries({queryKey:[Ts.VERGE]}),N.invalidateQueries({queryKey:[Ts.VERGE_HENT]})},R=Ua(k),{mutate:S}=un({mutationFn:R.verge.opprettVergeV2,onSuccess:b}),{mutate:P}=un({mutationFn:R.verge.fjernVergeV2,onSuccess:b}),{data:L}=Be(R.verge.hent(k));return m.jsx(Ls,{type:Nt.OPPRETT===h?"OPPRETT":"FJERN",verge:L,opprettVerge:S,fjernVerge:P,lukkModal:E,alleKodeverk:f})};m0.__docgenInfo={description:"",methods:[],displayName:"VergeMenyModal",props:{behandlingAppKontekst:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const vE=({fagsakData:o,behandlingUuid:k,behandling:t,setBehandling:E,hentOgSettBehandling:h})=>{const f=Be(qt()),{innloggetBruker:N}=en(f.data),[b,R]=Jr.useState(),S=()=>R(void 0),P=o.getFagsak(),L=o.getBehandling(k),le=gE(L,P);return N.kanVeilede?null:m.jsxs(m.Fragment,{children:[m.jsxs(Ia,{children:[m.jsx(we,{size:"small",as:Ia.Toggle,iconPosition:"right",variant:"secondary",icon:m.jsx(Fy,{"aria-hidden":!0}),children:m.jsx($,{id:"BehandlingMenuIndex.Behandlingsmeny"})}),m.jsx(Ia.Menu,{children:m.jsx(Ia.Menu.List,{children:Object.keys(le).filter(X=>!le[X].disabled).map(X=>m.jsx(Ia.Menu.List.Item,{onClick:()=>{R(X)},children:le[X].text},X))})})]}),b==="NY_BEHANDLING"&&m.jsx(u0,{fagsakData:o,behandlingUuid:k,lukkModal:S}),b==="ENDRE_FAGSAK_MARKERING"&&m.jsx(l0,{saksnummer:P.saksnummer,fagsakMarkeringer:P.fagsakMarkeringer,hentOgSettBehandling:h,lukkModal:S}),b==="VERGE"&&L&&t&&m.jsx(m0,{behandlingAppKontekst:L,behandling:t,lukkModal:S,hentOgSettBehandling:h}),b==="ÅPNE_FOR_ENDRINGER"&&t&&m.jsx(a0,{behandling:t,setBehandling:E,lukkModal:S}),b==="ENDRE_BEHANDLENDE_ENHET"&&t&&m.jsx(r0,{behandling:t,hentOgSettBehandling:h,lukkModal:S}),b==="HENLEGG"&&L&&t&&m.jsx(t0,{behandlingAppKontekst:L,behandling:t,fagsakYtelseType:P.fagsakYtelseType,lukkModal:S}),b==="SETT_PÅ_VENT"&&t&&m.jsx(s0,{behandling:t,hentOgSettBehandling:h,lukkModal:S}),b==="TA_AV_VENT"&&t&&m.jsx(o0,{behandling:t,setBehandling:E,lukkModal:S}),b==="MERK_SOM_HASTER"&&t&&m.jsx(i0,{behandling:t,hentOgSettBehandling:h,lukkModal:S})]})},gE=(o,k)=>{const t=o?o.behandlingPåVent:!1,E=o?.behandlingTillatteOperasjoner,h=E?.vergeBehandlingsmeny,f=h===Nt.FJERN&&!!o?.uuid&&!!o?.versjon,N=h===Nt.OPPRETT&&!!o?.uuid&&!!o?.versjon;return{TA_AV_VENT:{disabled:!E?.behandlingKanGjenopptas,text:pp()},SETT_PÅ_VENT:{disabled:!E?.behandlingKanSettesPaVent,text:uE()},HENLEGG:{disabled:!E?.behandlingKanHenlegges,text:xp()},ENDRE_BEHANDLENDE_ENHET:{disabled:!E?.behandlingKanBytteEnhet,text:Ap()},ÅPNE_FOR_ENDRINGER:{disabled:!E?.behandlingKanOpnesForEndringer,text:fp()},NY_BEHANDLING:{disabled:k.sakSkalTilInfotrygd,text:tE()},ENDRE_FAGSAK_MARKERING:{disabled:k.sakSkalTilInfotrygd,text:Kp()},VERGE:{disabled:!(!t&&(N||f)),text:yp(N)},MERK_SOM_HASTER:{disabled:!E?.behandlingKanMerkesHaster,text:Yp()}}};vE.__docgenInfo={description:"",methods:[],displayName:"BehandlingMenuIndex",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!1,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Behandling | undefined",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
    | '5027'
    | '5004'
    | '5005'
    | '5006'
    | '5007'
    | '5008'
    | '5011'
    | '5012'
    | '5013'
    | '5014'
    | '5015'
    | '5016'
    | '5017'
    | '5002'
    | '5026'
    | '5028'
    | '5030'
    | '5031'
    | '5033'
    | '5034'
    | '5003'
    | '5035'
    | '5037'
    | '5038'
    | '5039'
    | '5040'
    | '5043'
    | '5046'
    | '5047'
    | '5049'
    | '5051'
    | '5052'
    | '5054'
    | '5055'
    | '5057'
    | '5058'
    | '5059'
    | '5060'
    | '5061'
    | '5068'
    | '5064'
    | '5065'
    | '5063'
    | '5066'
    | '5071'
    | '5072'
    | '5069'
    | '5073'
    | '5076'
    | '5077'
    | '5085'
    | '5082'
    | '5084'
    | '5029'
    | '5086'
    | '5089'
    | '5041'
    | '5062'
    | '5091'
    | '5092'
    | '5095'
    | '5096'
    | '5074'
    | '5101'
    | '5102'
    | '5103'
    | '6002'
    | '6003'
    | '6004'
    | '6005'
    | '6006'
    | '6008'
    | '6009'
    | '6010'
    | '6011'
    | '6065'
    | '6014'
    | '6015'
    | '6045'
    | '6016'
    | '6018'
    | '6017'
    | '6103'
    | '7001'
    | '7002'
    | '7003'
    | '7005'
    | '7007'
    | '7008'
    | '7011'
    | '7013'
    | '7014'
    | '7020'
    | '7030'
    | '7033'
    | '7037'
    | '7039'
    | '7040'
    | "UNDEFINED('null')"
    | '5009'
    | '5019'
    | '5020'
    | '5021'
    | '5022'
    | '5023'
    | '5024'
    | '5025'
    | '5032'
    | '5036'
    | '5042'
    | '5044'
    | '5045'
    | '5048'
    | '5050'
    | '5053'
    | '5056'
    | '5067'
    | '5070'
    | '5075'
    | '5078'
    | '5079'
    | '5080'
    | '5081'
    | '5083'
    | '5087'
    | '5088'
    | '5090'
    | '5093'
    | '5094'
    | '5097'
    | '5098'
    | '5099'
    | '6007'
    | '6012'
    | '6013'
    | '6068'
    | '6070'
    | '7004'
    | '7006'
    | '7009'
    | '7015'
    | '7016'
    | '7017'
    | '7018'
    | '7019'
    | '7021'
    | '7022'
    | '7023'
    | '7024'
    | '7025'
    | '7026'
    | '7027'
    | '7028'
    | '7029'
    | '7032'
    | '7034'
    | '7035'
    | '7036'
    | '7038'
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
    | 'FP_VK_11'
    | 'FP_VK_16'
    | 'FP_VK_2'
    | 'FP_VK_2_F'
    | 'FP_VK_2_L'
    | 'FP_VK_3'
    | 'FP_VK_4'
    | 'FP_VK_5'
    | 'FP_VK_8'
    | 'FP_VK_33'
    | 'FP_VK_34'
    | 'FP_VK_21'
    | 'FP_VK_23'
    | 'FP_VK_41'
    | 'SVP_VK_1'
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{Cr as A,vE as B,da as F,mp as P,zy as T,kp as V,Ss as a,Ur as b,up as c,ap as d,OE as e,ep as f,np as g,GE as h,cs as i,jr as j,qs as s,Hy as u};
