export const getDataFromServer = async(dataUrl) => {
  const serverHeading = await fetch(dataUrl);
  const dataFromServer = await serverHeading.json();

  return dataFromServer;
};
