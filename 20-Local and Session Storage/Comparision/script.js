function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  const localStValue = localStorage.getItem(key);
  const sessionStValue = sessionStorage.getItem(key);

  console.log(`LocalStorage - ${key}: ${localStValue}`);
  console.log(`SessionStorage - ${key}: ${sessionStValue}`);
}

saveToBothStorages("egKey", "egValue");

function clearBothStorages() {
  localStorage.clear();
  sessionStorage.clear();
  console.log("LocalStorage is empty:", localStorage.length === 0);
  console.log("SessionStorage is empty:", sessionStorage.length === 0);
}

clearBothStorages();
