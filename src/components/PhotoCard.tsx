import {Photo} from '@/model/photo';

export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <div>
      <img src={photo.url} alt={photo.title} />
      <div>{photo.title}</div>
    </div>
  )
}