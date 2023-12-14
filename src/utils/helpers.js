
export function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  export function checkMessage(message) {
    const regex = /^$|\s+/;
    return regex.test(String(message))
  }

  export function checkName(name) {
    const regex = /^$|\s+/;
    return regex.test(String(name))
  }
