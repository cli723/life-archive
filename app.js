const A=window.ARCHIVE;
const entry=document.getElementById('entry');
const archive=document.getElementById('archive');
document.getElementById('continueButton').addEventListener('click',()=>{
  entry.classList.add('is-leaving');
  setTimeout(()=>{entry.classList.add('is-hidden');archive.classList.remove('is-hidden');window.scrollTo(0,0)},650);
});
document.getElementById('intro').textContent=A.intro;
document.getElementById('reviewed').textContent=A.reviewed;
document.getElementById('wishesText').textContent=A.wishes;
function mount(id,rows){
  const el=document.getElementById(id);
  rows.forEach(r=>{
    const row=document.createElement('div');
    row.className='data-row';
    row.innerHTML=`<div class="data-key">${r.label}</div><div class="data-value">${r.value}</div>`;
    el.appendChild(row);
  });
}
mount('contacts',A.contacts);
mount('medicalData',A.medical);
mount('identityData',A.identity);
mount('documentsData',A.documents);
