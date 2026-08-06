const A=window.ARCHIVE;
document.getElementById('intro').textContent=A.intro;
document.getElementById('reviewed').textContent=A.reviewed;
document.getElementById('wishes').textContent=A.wishes;
function mount(id,rows){const el=document.getElementById(id);rows.forEach(r=>{const d=document.createElement('div');d.className='row';d.innerHTML=`<div class="key">${r.label}</div><div class="value">${r.value}</div>`;el.appendChild(d)})}
mount('contacts',A.contacts); mount('medical',A.medical); mount('identity',A.identity); mount('documents',A.documents);