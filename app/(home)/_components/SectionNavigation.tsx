'use client';
import { useEffect, useState } from 'react';
const sections = [{id:'work',label:'업무 경험'},{id:'projects',label:'프로젝트'},{id:'career',label:'경력'},{id:'contact',label:'연락처'}];
export default function SectionNavigation() {
 const [active,setActive]=useState('');
 useEffect(()=>{
  const update=()=>{
   let current='';
   for(const {id} of sections){ const e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<=160)current=id; }
   setActive(current);
  };
  update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);
 },[]);
 return <nav aria-label="주 메뉴">{sections.map(s=><a key={s.id} href={`#${s.id}`} aria-current={active===s.id?'location':undefined}>{s.label}</a>)}</nav>;
}
