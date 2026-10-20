try{const key='mp-direction-'+document.documentElement.dataset.direction;const saved=localStorage.getItem(key);if(saved==='dark'||saved==='light')document.documentElement.dataset.theme=saved}catch{}
