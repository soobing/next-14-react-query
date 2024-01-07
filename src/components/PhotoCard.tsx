import {Photo} from '@/model/photo';

export default function PhotoCard({title, thumbnailUrl}: Photo) {
  return (
    <div>
      <img src={thumbnailUrl} alt={title} />
      <div>{title}</div>
    </div>
  )
}