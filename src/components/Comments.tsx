import {Photo} from '@/model/photo';
import {Hydrate, getDehydratedQueries} from '@/utils/react-query';
import queryOptions from '@/service/photo/queries';

export default async function Comments({id}: Pick<Photo, 'id'>) {
  const { queryKey, queryFn } = queryOptions.comments(id);
  const queries = await getDehydratedQueries([{ queryKey, queryFn }]);
  return (
    <Hydrate state={{ queries }}>
      comments
      {JSON.stringify(queries[0].state.data)}
    </Hydrate>
  )
}