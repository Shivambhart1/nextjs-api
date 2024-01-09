interface Params {
  params: { name: string };
}
const getPredictedAge = async (name: string) => {
  const predictedData = await fetch(`https://api.agify.io?name=${name}`);
  console.log(predictedData);
  return predictedData.json();
};

const getPredicteddGender = async (name: string) => {
  const predictedData = await fetch(`https://api.genderize.io?name=${name}`);
  console.log(predictedData);
  return predictedData.json();
};

const getPredictedNationality = async (name: string) => {
  const predictedData = await fetch(`https://api.nationalize.io/?name=${name}`);
  console.log(predictedData);
  return predictedData.json();
};

const page = async ({ params }: Params) => {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredicteddGender(params.name);
  const countryData = getPredictedNationality(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <div className="flex gap-4 flex-col justify-center p-5 items-center text-4xl">
      <div>Name: {params.name}</div>
      <div>Age: {age?.age}</div>
      <div>Gender: {gender?.gender}</div>
      <div>Country: {country?.country[0]?.country_id}</div>
    </div>
  );
};

export default page;
