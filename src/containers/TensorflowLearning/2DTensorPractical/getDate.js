export default async function getData() {
  const carsDataReq = await fetch(
    "https://storage.googleapis.com/tfjs-tutorials/carsData.json"
  );
  const carsData = await carsDataReq.json();
  const cleaned = carsData
    .map(car => ({
      weight_in_lbs: car.Weight_in_lbs / 100,
      horsepower: car.Horsepower
    }))
    .filter(car => car.weight_in_lbs != null && car.horsepower != null);

  return cleaned;
}
