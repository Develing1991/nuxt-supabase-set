export default async (id: string) => {
  const { data, error } = await useFetch(`/api/car/${id}`);

  if (error.value) {
    throw createError({
      //   ...error.value,
      //   statusMessage: "Unable to fetch car",
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage,
    });
  }

  return {
    data,
  };
};
