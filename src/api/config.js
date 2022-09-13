export const fakePromiseTimeoutResponse = (data, timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};
