const Details = async ({ params }) => {
  const resp = await fetch(`${process.env.API_ENDPOINT}/${params.id}`);

  const data = await resp.json();

  return <h1>{JSON.stringify(data)}</h1>;
};
export default Details;
