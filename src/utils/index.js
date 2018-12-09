export function customXHR(url, config = {}) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type || 'get', url);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        try {
          resolve(JSON.parse(xhr.responseText));
        } catch (e) {
          resolve(xhr.responseText);
        }
      }
    };
    xhr.onerror = reject;
    xhr.send(config.data);
  });
}
