const data = window.ARCHIVE || {};

document.getElementById('reviewed').textContent =
  data.reviewed || 'Not set';

document.getElementById('wishesText').textContent =
  data.wishes || 'No personal wishes have been added yet.';

function mountRows(targetId, rows = []) {
  const target = document.getElementById(targetId);
  target.innerHTML = '';

  rows.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'row';

    const key = document.createElement('div');
    key.className = 'key';
    key.textContent = item.label || '';

    const value = document.createElement('div');
    value.className = 'value';
    value.textContent = item.value || '';

    row.append(key, value);
    target.appendChild(row);
  });
}

mountRows('contacts', data.contacts);
mountRows('medicalRows', data.medical);
mountRows('identityRows', data.identity);
mountRows('documentRows', data.documents);
