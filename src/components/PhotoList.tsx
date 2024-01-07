import PhotoService from '@/service/photo/PhotoService';

export default async function PhotoList() {
  const result = await PhotoService.getPhotos();
  console.log(result)
  return (
    <div>
      {JSON.stringify(result)}
    </div>
  )
}