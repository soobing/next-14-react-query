import PhotoService from '@/service/photo/PhotoService';

const queryKeys = {
  all: ['photos'] as const,
  detail: (photoId: number) => [...queryKeys.all, photoId] as const,
  detailComments: (photoId: number) => [...queryKeys.detail(photoId), 'comments'] as const,
  detailComment: ({photoId, commentId}: {photoId: number, commentId: number}) => [...queryKeys.detailComments(photoId), commentId] as const,
};

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => PhotoService.getPhotos(),
  }),
  detail: (photoId: number) => ({
    queryKey: queryKeys.detail(photoId),
    queryFn: () => PhotoService.getPhoto(photoId),
  }),
  comments: (photoId: number) => ({
    queryKey: queryKeys.detailComments(photoId),
    queryFn: () => PhotoService.getComments(photoId),
  }),
  comment: ({photoId, commentId}: {photoId: number, commentId: number}) => ({
    queryKey: queryKeys.detailComment({photoId, commentId}),
    queryFn: () => PhotoService.getComment({photoId, commentId}),
  }),
};

export default queryOptions;
