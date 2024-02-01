import { useEffect, useState } from 'react';

function getInitialValue(key, initialValue) {
  const save = JSON.parse(localStorage.getItem(key)) || JSON.parse(sessionStorage.getItem(key));
  return save || initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [content, setContent] = useState(() => getInitialValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(content));
    sessionStorage.setItem(key, JSON.stringify(content));
  }, [key, content]);

  return [content, setContent];
}
