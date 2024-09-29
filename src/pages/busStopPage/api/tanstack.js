import { useQuery } from '@tanstack/react-query';

export const getFavorites = () => {
  const { data, Error, error, isLoading } = useQuery('getFavorites', handleGetFavorites());
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return { data, Error };
};
